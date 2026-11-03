/**
 * Omni sweep Wave 4 (2026-11-02): Masters of the Wild infusions,
 * generated per spell.
 *
 * Masters of the Wild (Chapter 3, "Infusions," pp. 31-33) defines
 * an infusion as a divine spell stored within a specially treated
 * herb, eaten to release the spell; the Create Infusion feat
 * (Chapter 2) allows an infusion of "any divine spell available
 * to you." The book prints no per-item list, only a price formula:
 * base price = spell level x caster level x 50 gp, with Table 3-3
 * giving the market prices at the minimum caster level for each
 * spell level: 0-level 25 gp; 1st 50 gp; 2nd 300 gp; 3rd 750 gp;
 * 4th 1,400 gp; 5th 2,250 gp; 6th 3,300 gp; 7th 4,550 gp;
 * 8th 6,000 gp; 9th 7,650 gp. The infusion section prints no
 * range or target restriction on which divine spells may be
 * infused (even a spell that takes effect on an item, such as
 * ironwood, may be infused; the user provides the item when
 * eating the herb).
 *
 * These records are generated from the catalog's own spell data,
 * following the wand/scroll generation precedent in
 * src/data/core/generated-wands-scrolls.ts: one record per
 * eligible spell, named "Infusion of <Spell Name>", filed with
 * the potions as a potion-like consumable, and reusing the spell
 * records' own summaries.
 *
 * ELIGIBILITY RULE APPLIED: a spell qualifies if it appears on
 * at least one divine spellcasting class list in the spell
 * data: Cleric, Druid, Paladin, Ranger, Adept, Healer, or
 * Blackguard. Each infusion is priced at the spell's lowest
 * level on those lists, using the Table 3-3 price for that
 * level. Domain grants, the sanctified and corrupt spell
 * categories, and prestige-class spell lists were not treated
 * as class lists (consistent with the wand/scroll pass, which
 * used class lists only).
 *
 * 1390 records generated (0-level: 27; 1-level: 232; 2-level: 253; 3-level: 245; 4-level: 186; 5-level: 132; 6-level: 112; 7-level: 85; 8-level: 69; 9-level: 49).
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const INFU_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [
  {
    "id": "infusion-of-abyssal-army",
    "name": "Infusion of Abyssal Army",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Abyssal Army spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Over several rounds summons an army of demons (from dretches up to a balor-tier commander) that fight for you briefly.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-abyssal-frenzy",
    "name": "Infusion of Abyssal Frenzy",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Abyssal Frenzy spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You cause the subject to transform into a demonic version of its true self, as the text describes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-abyssal-might",
    "name": "Infusion of Abyssal Might",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Abyssal Might spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The caster draws evil energy from the Abyss into himself, gaining a +2 enhancement bonus to Strength, Constitution, and Dexterity, and improving his existing spell resistance by 2.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-accelerated-movement",
    "name": "Infusion of Accelerated Movement",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Accelerated Movement spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You move at full speed without penalty through difficult terrain or when climbing or swimming.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-addiction",
    "name": "Infusion of Addiction",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Addiction spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Forces the subject to become addicted to a drug; the strongest addiction rating the caster can impose rises with caster level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-adoration-of-the-frightful",
    "name": "Infusion of Adoration of the Frightful",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Adoration of the Frightful spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You radiate a magical aura that causes fearful creatures within the emanation to shy away from you and show you respect, as the text describes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-aerial-alarm",
    "name": "Infusion of Aerial Alarm",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Aerial Alarm spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As alarm, except the area is a cylinder that extends 500 feet into the air and the alarm only sounds when a flying creature of Medium or larger size enters or touches the warded area.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-affliction",
    "name": "Infusion of Affliction",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Affliction spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The target contracts a chosen affliction that strikes immediately and harms only evil creatures; evil outsiders, undead, elementals, and clerics of evil deities take extra damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-aid",
    "name": "Infusion of Aid",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Aid spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Grants +1 morale on attacks and fear saves plus 1d8+1/level (max +10) temporary hit points.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-aid-mass",
    "name": "Infusion of Aid, Mass",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Aid, Mass spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As aid, but one subject per level gains the bonus on attacks and fear saves plus temporary hit points.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-air-breathing",
    "name": "Infusion of Air Breathing",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Air Breathing spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The touched creatures can breathe air freely underwater... the spell lets water breathers and others breathe whatever medium surrounds them for its duration.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-air-walk",
    "name": "Infusion of Air Walk",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Air Walk spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject treads on air as if walking on solid ground, ascending or descending at up to 45 degrees.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-alarm",
    "name": "Infusion of Alarm",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Alarm spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Wards an area; creatures entering without the password trigger a mental or audible alarm.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-algid-enhancement",
    "name": "Infusion of Algid Enhancement",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Algid Enhancement spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Energizes cold creatures with coldfire: creatures with the cold subtype gain a deflection bonus to AC, temporary hit points, an enhancement bonus on attack rolls, and a bonus on saves against fire, all scaling with caster level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-align-fang",
    "name": "Infusion of Align Fang",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Align Fang spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. One natural weapon of an animal counts as good, evil, lawful, or chaotic (your choice) for overcoming damage reduction.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-align-fang-mass",
    "name": "Infusion of Align Fang, Mass",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Align Fang, Mass spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As align fang, but affects one creature per level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-align-weapon",
    "name": "Infusion of Align Weapon",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Align Weapon spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Makes a weapon chaotic, evil, good, or lawful for overcoming damage reduction.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-align-weapon-mass",
    "name": "Infusion of Align Weapon, Mass",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Align Weapon, Mass spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As align weapon, but affects one weapon per level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-aligned-aura",
    "name": "Infusion of Aligned Aura",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Aligned Aura spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Divine energy infuses your body with the essence of one non-neutral aspect of your own alignment — chaos, evil, good, or law — surrounding you with a matching aura.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-alter-fortune",
    "name": "Infusion of Alter Fortune",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Alter Fortune spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You change the flow of chance: the subject must immediately reroll any die roll it just made and abide by the second roll. XP cost: 200 XP.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-amanuensis",
    "name": "Infusion of Amanuensis",
    "category": "potion",
    "cost": "25 gp",
    "summary": "A specially treated herb infused with the Amanuensis spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Copies nonmagical text from a book or document onto blank pages at 250 words per minute without triggering text-based traps.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-anarchic-storm",
    "name": "Infusion of Anarchic Storm",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Anarchic Storm spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A chaotic storm rains random energy on lawful creatures in the area for damage and harmful random effects.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-anarchic-water",
    "name": "Infusion of Anarchic Water",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Anarchic Water spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Transforms water into chaotic-aligned water that damages lawful outsiders as holy water does evil ones.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-angelskin",
    "name": "Infusion of Angelskin",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Angelskin spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your skin gleams, granting damage reduction 5/evil... in practice the subject gains DR 5/evil and a sacred glow that penalizes evil attackers' concealment against you.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-anger-of-the-noonday-sun",
    "name": "Infusion of Anger Of The Noonday Sun",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Anger Of The Noonday Sun spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Blinding light rays rain down, dealing fire damage to enemies and blinding them, with extra effect against undead and darkness spells.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-angry-ache",
    "name": "Infusion of Angry Ache",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Angry Ache spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Strains the subject's muscles so that every attack hurts: all her attack rolls take a -2 circumstance penalty per four caster levels (maximum -10).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-animal-growth",
    "name": "Infusion of Animal Growth",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Animal Growth spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Doubles an animal's size: +8 size bonus to Strength, +4 Constitution, -2 Dexterity, +2 natural armor, and bigger natural weapons.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-animal-messenger",
    "name": "Infusion of Animal Messenger",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Animal Messenger spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Compels a Tiny animal to carry a message to a place you name and wait for a recipient.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-animal-shapes",
    "name": "Infusion of Animal Shapes",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Animal Shapes spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Transforms willing allies into animals of the caster's choice, as polymorph except that the subjects keep their own minds and can be changed between animal forms as printed.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-animal-trance",
    "name": "Infusion of Animal Trance",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Animal Trance spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Fascinates animals with song or gestures so they take no actions while you concentrate.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-animalistic-power",
    "name": "Infusion of Animalistic Power",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Animalistic Power spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject gains a +2 enhancement bonus to Strength, Dexterity, and Constitution.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-animalistic-power-mass",
    "name": "Infusion of Animalistic Power, Mass",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Animalistic Power, Mass spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Functions like animalistic power, except that it affects multiple creatures.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-animate-dead",
    "name": "Infusion of Animate Dead",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Animate Dead spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Creates skeletons and zombies from corpses; you control up to 4 HD of undead per caster level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-animate-fire",
    "name": "Infusion of Animate Fire",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Animate Fire spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A fire source animates as a small fire elemental under your control.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-animate-legion",
    "name": "Infusion of Animate Legion",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Animate Legion spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You use negative energy to temporarily animate one or more corpses as skeletons or zombies, creating no more Hit Dice of undead than twice your caster level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-animate-objects",
    "name": "Infusion of Animate Objects",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Animate Objects spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Animates objects that attack your enemies as constructs under your direction.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-animate-plants",
    "name": "Infusion of Animate Plants",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Animate Plants spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Animates plants to fight for the caster or restrain enemies (either true animation or an overgrowth mode functioning as entangle over a large area, as printed).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-animate-siege-weapon",
    "name": "Infusion of Animate Siege Weapon",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Animate Siege Weapon spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You imbue a siege weapon, such as a ballista or a battering ram, with mobility and the semblance of life.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-animate-snow",
    "name": "Infusion of Animate Snow",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Animate Snow spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A mass of snow animates as a huge snow creature that fights for you.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-animate-water",
    "name": "Infusion of Animate Water",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Animate Water spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A water source animates as a small water elemental under your control.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-animate-wood",
    "name": "Infusion of Animate Wood",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Animate Wood spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A wooden object animates as a small animated object under your control.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-anticold-sphere",
    "name": "Infusion of Anticold Sphere",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Anticold Sphere spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A sphere protects everyone inside from cold damage, absorbing cold up to a limit.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-antidragon-aura",
    "name": "Infusion of Antidragon Aura",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Antidragon Aura spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You and allies gain a bonus on saves and AC against dragon attacks, breath weapons, and frightful presence.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-antilife-shell",
    "name": "Infusion of Antilife Shell",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Antilife Shell spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A mobile barrier that keeps all living creatures out, though it collapses if you force it against them.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-antimagic-field",
    "name": "Infusion of Antimagic Field",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Antimagic Field spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Suppresses all magic within 10 feet of you: no spells, supernatural abilities, or magic items function.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-antipathy",
    "name": "Infusion of Antipathy",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Antipathy spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Wards a location or object against a kind of creature (a specific kind or an alignment): such creatures are compelled to leave and avoid the warded place or object, as printed.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-antiplant-shell",
    "name": "Infusion of Antiplant Shell",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Antiplant Shell spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Creates a hemispherical energy barrier around the caster that keeps out plant creatures and animated plants.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-aquatic-escape",
    "name": "Infusion of Aquatic Escape",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Aquatic Escape spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your arms and legs fuse with your body as bright silvery scales cover your skin: you take the form of a Diminutive fish.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-arc-of-lightning",
    "name": "Infusion of Arc Of Lightning",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Arc Of Lightning spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A bolt arcs from you to a target and then to a second target, dealing electricity damage to both and anything between.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-arctic-haze",
    "name": "Infusion of Arctic Haze",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Arctic Haze spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Creates a fog of razor-sharp ice shards that blocks sight beyond 5 feet and grants concealment or total concealment by distance.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-arrow-mind",
    "name": "Infusion of Arrow Mind",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Arrow Mind spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. While concentrating you threaten nearby squares with a bow and gain bonuses to ranged attacks and precision.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-arrow-storm",
    "name": "Infusion of Arrow Storm",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Arrow Storm spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. For one round you can make a ranged attack against every enemy within one range increment.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-as-the-frost",
    "name": "Infusion of As the Frost",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the As the Frost spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your body becomes living ice: your creature type changes to outsider, you gain immunity to cold and damage reduction 10/magic and piercing, and at the start of your turn creatures within 15 feet take 2d6 points of cold damage and must make a Fortitude save (DC 17 + your key ability modifier) or be slowed, as the slow spell, for the rest of the duration.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-aspect-of-the-deity-lesser",
    "name": "Infusion of Aspect of the Deity, Lesser",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Aspect of the Deity, Lesser spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your form shifts closer to your deity's nature: you gain a +4 enhancement bonus to Charisma and resistance 10 to acid, cold, and electricity.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-aspect-of-the-earth-hunter",
    "name": "Infusion of Aspect Of The Earth Hunter",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Aspect Of The Earth Hunter spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You take on a burrowing hunter's traits: tremorsense, natural armor, burrow speed, and powerful claw attacks.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-aspect-of-the-werebeast",
    "name": "Infusion of Aspect of the Werebeast",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Aspect of the Werebeast spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You tap into your shifter nature to transform yourself into a hybrid of your natural form and a specific animal, resembling the hybrid forms of some lycanthropes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-aspect-of-the-wolf",
    "name": "Infusion of Aspect Of The Wolf",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Aspect Of The Wolf spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain the form and traits of a wolf: speed 50 ft, scent, trip attack, and bonuses while in animal form.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-assay-resistance",
    "name": "Infusion of Assay Resistance",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Assay Resistance spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You divine the exact nature and vulnerabilities of one creature's magical defenses, gaining a +10 bonus on caster level checks to overcome its spell resistance.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-assay-spell-resistance",
    "name": "Infusion of Assay Spell Resistance",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Assay Spell Resistance spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You learn a creature's spell resistance and gain a +10 bonus on caster level checks to overcome that creature's SR for the duration.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-atonement",
    "name": "Infusion of Atonement",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Atonement spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Redeems a creature of its misdeeds, restoring alignment and class standing after sincere contrition.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-attune-form",
    "name": "Infusion of Attune Form",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Attune Form spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your body adapts to a plane's harmful traits, protecting you from planar environmental damage and effects.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-augury",
    "name": "Infusion of Augury",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Augury spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Reveals whether a planned action will bring weal, woe, both, or neither in the next half hour.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-aura-against-flame",
    "name": "Infusion of Aura Against Flame",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Aura Against Flame spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You emanate an aura granting fire resistance 10 to you and nearby allies.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-aura-of-cold-greater",
    "name": "Infusion of Aura of Cold, Greater",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Aura of Cold, Greater spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As lesser aura of cold, except the emanation extends to 10 feet and deals 2d6 points of cold damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-aura-of-cold-lesser",
    "name": "Infusion of Aura of Cold, Lesser",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Aura of Cold, Lesser spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Frigid cold emanates from your body in a 5-foot radius, dealing 1d6 points of cold damage at the start of your round to each creature in the area.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-aura-of-evasion",
    "name": "Infusion of Aura Of Evasion",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Aura Of Evasion spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You and nearby allies gain evasion-like protection: area effects that allow Reflex saves deal reduced or no damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-aura-of-glory",
    "name": "Infusion of Aura Of Glory",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Aura Of Glory spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your radiant aura bolsters allies' Charisma-based checks and saves against fear.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-aura-of-vitality",
    "name": "Infusion of Aura Of Vitality",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Aura Of Vitality spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You and allies gain +4 enhancement bonuses to Strength, Dexterity, and Constitution.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-avoid-planar-effects",
    "name": "Infusion of Avoid Planar Effects",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Avoid Planar Effects spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Protects you from the basic harmful traits of the plane you are on (fire damage on the Plane of Fire, and similar).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-awaken",
    "name": "Infusion of Awaken",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Awaken spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Awakens an animal or tree to humanlike sentience, friendly to you, with its own new ability scores.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-awaken-construct",
    "name": "Infusion of Awaken Construct",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Awaken Construct spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Gives a construct humanlike intelligence and free will.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-awaken-sand",
    "name": "Infusion of Awaken Sand",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Awaken Sand spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You awaken a region of sand to humanlike sentience; the awakened sand is friendly toward you and serves in tasks you communicate to it.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-awaken-sin",
    "name": "Infusion of Awaken Sin",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Awaken Sin spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject relives its sins painfully; evil subjects take Wisdom damage and are shaken when they commit fresh offenses.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-awaken-mass",
    "name": "Infusion of Awaken, Mass",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Awaken, Mass spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As awaken, but awakens multiple animals or trees at once.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-axiomatic-creature",
    "name": "Infusion of Axiomatic Creature",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Axiomatic Creature spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Transforms the target into an axiomatic creature — a perfected, law-aligned version of itself; animals become magical beasts, and a creature with Intelligence 2 or less is raised to Intelligence 3.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-axiomatic-storm",
    "name": "Infusion of Axiomatic Storm",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Axiomatic Storm spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A lawful storm of energy punishes chaotic creatures in the area with damage and harmful effects.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-axiomatic-water",
    "name": "Infusion of Axiomatic Water",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Axiomatic Water spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Transforms water into law-aligned water that damages chaotic outsiders like holy water damages evil ones.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-babau-slime",
    "name": "Infusion of Babau Slime",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Babau Slime spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your body exudes acidic slime that damages weapons striking you and adds acid to your touch.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-balancing-lorecall",
    "name": "Infusion of Balancing Lorecall",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Balancing Lorecall spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain bonuses to Balance and Listen, can balance on difficult surfaces, and sense the distance to sounds precisely.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-baleful-polymorph",
    "name": "Infusion of Baleful Polymorph",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Baleful Polymorph spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Transforms the subject into a harmless 1-HD animal form permanently, possibly taking its mind too.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-balor-nimbus",
    "name": "Infusion of Balor Nimbus",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Balor Nimbus spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Flames like a balor's wreath your body, damaging nearby creatures and grapplers with fire.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-bane",
    "name": "Infusion of Bane",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Bane spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Fills your enemies with fear and doubt: -1 on attacks and saves against fear.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-bane-bow",
    "name": "Infusion of Bane Bow",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Bane Bow spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. This spell allows you to channel divine power into any ranged weapon you choose: the weapon gains a +5 enhancement bonus on attack and damage rolls, plus the bane quality (+7 enhancement bonus on attack and damage rolls, plus an additional 2d6 points of damage) against foes of one of your favored enemy categories that you specify. The spell is automatically canceled 1 round after the weapon leaves your hand, and you cannot have more than one bane bow at a time.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-bane-of-chaos",
    "name": "Infusion of Bane of Chaos",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Bane of Chaos spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As bane of evil, except that the damage inflicted against the attacking creature applies to chaotic creatures.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-bane-of-evil",
    "name": "Infusion of Bane of Evil",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Bane of Evil spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. This spell deals 1d6 points of damage, +1 point per caster level, to any evil creature that attempts a melee attack against the warded creature.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-bane-of-good",
    "name": "Infusion of Bane of Good",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Bane of Good spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As bane of evil, except that the damage inflicted against the attacking creature applies to good creatures.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-bane-of-law",
    "name": "Infusion of Bane of Law",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Bane of Law spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As bane of evil, except that the damage inflicted against the attacking creature applies to lawful creatures.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-banishment",
    "name": "Infusion of Banishment",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Banishment spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Drives up to 2 HD/level of extraplanar creatures back to their home planes; special items add to the DC.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-barghests-feast",
    "name": "Infusion of Barghest’S Feast",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Barghest’S Feast spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Destroys a corpse utterly, preventing resurrection and feeding you its life force as temporary hit points.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-barkskin",
    "name": "Infusion of Barkskin",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Barkskin spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Hardens skin to bark: +2 natural armor enhancement, +1 per three levels above 3rd (max +5).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-bastion-of-good",
    "name": "Infusion of Bastion of Good",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Bastion of Good spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A nimbus of light surrounds you, excluding spell effects of up to 3rd level as a minor globe of invulnerability and warding those within as a double-strength magic circle against evil (+4 deflection bonus to AC and +4 resistance bonus on saves).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-battlefield-illumination",
    "name": "Infusion of Battlefield Illumination",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Battlefield Illumination spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A soft light illuminates the area, improving the illumination by one category (from darkness to shadowy, or from shadowy to bright light).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-battlemagic-perception",
    "name": "Infusion of Battlemagic Perception",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Battlemagic Perception spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain a perception of the forces of magic and can sense when magic is being manipulated by a spellcaster, gaining a +5 competence bonus on Spellcraft checks to identify a spell as it is being cast.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-bears-endurance",
    "name": "Infusion of Bear's Endurance",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Bear's Endurance spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Grants a +4 enhancement bonus to Constitution.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-bears-endurance-mass",
    "name": "Infusion of Bear's Endurance, Mass",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Bear's Endurance, Mass spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As bear's endurance (+4 Constitution), but affects one creature per level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-beast-claws",
    "name": "Infusion of Beast Claws",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Beast Claws spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your hands grow claws dealing slashing damage as natural weapons.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-beastland-ferocity",
    "name": "Infusion of Beastland Ferocity",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Beastland Ferocity spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject fights on when below 0 hp as if disabled, gaining a Strength bonus, without dying until -10.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-befoul",
    "name": "Infusion of Befoul",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Befoul spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Makes a body of water foul and mildly poisonous: creatures of 1 HD or less in it die, and anyone drinking or immersed in it risks Constitution damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-beget-bogun",
    "name": "Infusion of Beget Bogun",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Beget Bogun spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You create a bogun, a small nature construct servant, from gathered materials over the casting.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-benediction",
    "name": "Infusion of Benediction",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Benediction spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You grant another creature the luck of the gods: a +2 luck bonus on all saving throws, and the subject can cash in the blessing for an additional benefit before it expires.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-bestow-curse",
    "name": "Infusion of Bestow Curse",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Bestow Curse spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Curses the target: -6 to an ability, -4 on attacks/saves/checks, or 50% chance to lose each action.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-bestow-curse-greater",
    "name": "Infusion of Bestow Curse, Greater",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Bestow Curse, Greater spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As bestow curse, but stronger penalties: -8 to an ability, -6 on rolls and checks, or a severe action limitation.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-bestow-greater-curse",
    "name": "Infusion of Bestow Greater Curse",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Bestow Greater Curse spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Places a greater curse on the creature touched: an ability score reduced to 1 (or two scores at -6), a -8 penalty on attacks, saves, and checks, or a 25% chance each turn of taking no action.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-bewildering-mischance",
    "name": "Infusion of Bewildering Mischance",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Bewildering Mischance spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Extreme bad luck befalls the target: for the duration, the subject must roll each saving throw, attack roll, and skill check twice, keeping the lower of the two rolls.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-bewildering-substitution",
    "name": "Infusion of Bewildering Substitution",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Bewildering Substitution spell (Illusion); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You cause the subject to believe that one ally and one enemy have traded places, so the closest ally seems to wear the enemy's appearance, voice, clothing, and gear.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-bewildering-visions",
    "name": "Infusion of Bewildering Visions",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Bewildering Visions spell (Illusion); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The world appears to the subject to be tossing and rippling nauseatingly: the subject is sickened, and must make a Fortitude save or be nauseated.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-bind-guardian",
    "name": "Infusion of Bind Guardian",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Bind Guardian spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. An exhausting ritual that lures and traps a loose soul to provide a motive force for a construct such as an iron maiden, mechagargoyle, tomb maiden, or woldwarden — an alternative to living sacrifices. The spell is cast over a constructed host shell, creating a lure for loose souls; each casting has a 20% chance that a free soul is close enough to be affected. A nearby soul must make a Will save to avoid being lured in, and a second Will save once inside to avoid being forever bound as a subservient guardian; once bound, the guardian creature is animate with its normal abilities and must obey its creator.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-binding-snow",
    "name": "Infusion of Binding Snow",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Binding Snow spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Freezes a snow field solid so movement through it is halved unless a creature forces its way with a Strength or Escape Artist check; creatures that fail their Reflex save are stuck fast.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-binding-winds",
    "name": "Infusion of Binding Winds",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Binding Winds spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Winds hold a flying creature in place or slow its movement, hampering flight.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-bite-of-the-werebear",
    "name": "Infusion of Bite Of The Werebear",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Bite Of The Werebear spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain bearlike lycanthrope traits: large Strength/Constitution boosts, natural armor, and bear claws and bite.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-bite-of-the-wereboar",
    "name": "Infusion of Bite Of The Wereboar",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Bite Of The Wereboar spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain boarlike traits: Strength and Constitution boosts, natural armor, and a gore attack with ferocity.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-bite-of-the-wererat",
    "name": "Infusion of Bite Of The Wererat",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Bite Of The Wererat spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain ratlike traits: Dexterity boost, small size benefits, bite attack, and weapon finesse benefits.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-bite-of-the-weretiger",
    "name": "Infusion of Bite Of The Weretiger",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Bite Of The Weretiger spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain tigerlike traits: big Strength/Dexterity boosts, natural armor, claws and bite with pounce potential.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-bite-of-the-werewolf",
    "name": "Infusion of Bite Of The Werewolf",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Bite Of The Werewolf spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain wolflike traits: Strength, Dexterity, and Constitution boosts, natural armor, claw and bite attacks.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-black-karma-curse",
    "name": "Infusion of Black Karma Curse",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Black Karma Curse spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. If the target fails its save, it immediately takes damage as if it had hit itself with its currently wielded weapon (or natural weapon); with more than one eligible attack form, it uses the one that deals the most damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-black-lungs",
    "name": "Infusion of Black Lungs",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Black Lungs spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You cause the target to succumb to an infection and corruption of the lungs: its speed is reduced by half, it loses any Dexterity bonus to Armor Class, and it takes a -2 penalty on attack rolls.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-blackrot",
    "name": "Infusion of Blackrot",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Blackrot spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your touch delivers a malignant rot to a plant creature, damaging it over a number of rounds, or renders a wooden weapon poisonous.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-blade-barrier",
    "name": "Infusion of Blade Barrier",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Blade Barrier spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A wall of whirling blades deals 1d6/level damage (max 15d6) to creatures passing through.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-blade-brothers",
    "name": "Infusion of Blade Brothers",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Blade Brothers spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You link two creatures: one time during the spell, when either subject attempts a saving throw, both roll and each applies the more favorable result (using its own save bonuses and modifiers) — but if both rolls fail, both creatures suffer the consequences of the failed save, even if the effect targeted only one of them. The spell ends if the subjects move more than 120 feet apart.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-blade-of-blood",
    "name": "Infusion of Blade of Blood",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Blade of Blood spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The next time the touched weapon strikes a living creature, the spell discharges for an extra 1d6 points of damage. You can voluntarily take 5 points of damage when casting to empower the weapon to deal an extra 3d6 points instead.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-blade-of-pain-and-fear",
    "name": "Infusion of Blade Of Pain And Fear",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Blade Of Pain And Fear spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A blade of force forms in your hand; its strikes deal damage and can frighten the wounded.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-blade-storm",
    "name": "Infusion of Blade Storm",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Blade Storm spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You whirl to attack every enemy in reach once... in practice, as whirlwind-style: make one melee attack against each opponent in your threatened area.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-blade-thirst",
    "name": "Infusion of Blade Thirst",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Blade Thirst spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A weapon you touch gains a +3 enhancement bonus for the duration.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-bladebane",
    "name": "Infusion of Bladebane",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Bladebane spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your body becomes magically resistant to bladed weapons: you suffer only half damage from nonmagical bladed weapons for the duration.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-blades-of-fire",
    "name": "Infusion of Blades Of Fire",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Blades Of Fire spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Weapons in hand burst into flame, dealing extra fire damage on hits for a few rounds.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-blasphemy",
    "name": "Infusion of Blasphemy",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Blasphemy spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Nonevil creatures are dazed, weakened, paralyzed, or killed and banished, by their HD relative to yours.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-blast-of-sand",
    "name": "Infusion of Blast of Sand",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Blast of Sand spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Sand sprays from your palm with enough force to strip flesh from bone, dealing 1d6 points of damage per caster level (maximum 10d6).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-blaze-of-light",
    "name": "Infusion of Blaze of Light",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Blaze of Light spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A cone of bright light shines forth from just above your head: all creatures within the cone that fail a Fortitude saving throw are dazzled for 1 minute.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-bleakness",
    "name": "Infusion of Bleakness",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Bleakness spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A cloud of inky, life-sucking darkness fills the area: living creatures in it take 1d6 points of damage each round, while undead in the area gain turn resistance +4 and fast healing 3. Bleakness counters or dispels any light spell of equal or lower level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-bless",
    "name": "Infusion of Bless",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Bless spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Allies gain +1 morale on attacks and on saves against fear.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-bless-water",
    "name": "Infusion of Bless Water",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Bless Water spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. This transmutation imbues a flask (1 pint) of water with positive energy, turning it into holy water. Material component: 5 pounds of powdered silver (worth 25 gp).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-bless-weapon",
    "name": "Infusion of Bless Weapon",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Bless Weapon spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Touched weapon becomes good-aligned for overcoming damage reduction and confirms crits against evil foes automatically.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-bless-weapon-swift",
    "name": "Infusion of Bless Weapon, Swift",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Bless Weapon, Swift spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As bless weapon, cast as a swift action.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-blessed-aim",
    "name": "Infusion of Blessed Aim",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Blessed Aim spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You and allies gain a +2 morale bonus on ranged attack rolls.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-blessed-sight",
    "name": "Infusion of Blessed Sight",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Blessed Sight spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your eyes glow with white light, letting you perceive the location and strength of all evil auras within 120 feet — like detect evil, but with no concentration required and quicker discernment.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-blessing-of-bahamut",
    "name": "Infusion of Blessing Of Bahamut",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Blessing Of Bahamut spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain dragonlike protection: damage reduction and a breath of energy to use once.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-blessing-of-the-righteous",
    "name": "Infusion of Blessing of the Righteous",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Blessing of the Righteous spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You and your allies are blessed: your melee and ranged attacks deal an extra 1d6 points of holy damage and are considered good-aligned for the purpose of overcoming damage reduction.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-blessing-of-the-snake-mother",
    "name": "Infusion of Blessing of the Snake Mother",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Blessing of the Snake Mother spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The target assumes some of the qualities of the yuan-ti tainted one template, gaining the Alertness feat and other benefits as the text describes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-blight",
    "name": "Infusion of Blight",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Blight spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Withers a plant creature for 1d6/level damage, or destroys ordinary plant life in an area.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-blinding-beauty",
    "name": "Infusion of Blinding Beauty",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Blinding Beauty spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain the physical beauty of a nymph: humanoids within 60 feet who look directly at you must succeed on a Fortitude save or be blinded permanently, and you can suppress or resume the effect as a free action.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-blinding-spittle",
    "name": "Infusion of Blinding Spittle",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Blinding Spittle spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You spit acid at a creature's eyes, blinding it on a failed save.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-blindness-deafness",
    "name": "Infusion of Blindness/Deafness",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Blindness/Deafness spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Renders the target blind or deaf, permanently unless cured.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-blindsight",
    "name": "Infusion of Blindsight",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Blindsight spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject gains blindsight out to 30 feet.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-blindsight-greater",
    "name": "Infusion of Blindsight, Greater",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Blindsight, Greater spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject gains blindsight out to 60 feet and finer senses.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-blistering-radiance",
    "name": "Infusion of Blistering Radiance",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Blistering Radiance spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A stationary globe of light deals fire damage each round to creatures in a wide area.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-blizzard",
    "name": "Infusion of Blizzard",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Blizzard spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The temperature plunges and a powerful blizzard erupts: visibility drops to zero, flames are doused, and unprotected creatures suffer the storm's effects.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-blockade",
    "name": "Infusion of Blockade",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Blockade spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You call a cube of solid wood, 5 feet on a side, into being at a point within range.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-blood-creepers",
    "name": "Infusion of Blood Creepers",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Blood Creepers spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Thorny vines burst from the subject's body, dealing 1 point of piercing damage per caster level (maximum 15) and immobilizing and entangling it; each round the vines deal the same damage again unless the subject escapes with a DC 20 Strength check or a DC 25 Escape Artist check, either of which ends the spell.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-blood-frenzy",
    "name": "Infusion of Blood Frenzy",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Blood Frenzy spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject enters a frenzy like rage, gaining Strength and Constitution but losing control while blood is in the air.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-blood-of-the-martyr",
    "name": "Infusion of Blood of the Martyr",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Blood of the Martyr spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You transfer your own hit points (at least 20) directly to a target creature, healing it as a cure spell would; the transferred points are damage to you, and the target cannot gain more hit points than its maximum.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-blood-sirocco",
    "name": "Infusion of Blood Sirocco",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Blood Sirocco spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A hot bloody wind scourges the area, dealing damage and exhausting creatures caught in it.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-blood-snow",
    "name": "Infusion of Blood Snow",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Blood Snow spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Corrupts an area of fallen snow with negative energy: creatures in contact with it must save each round or take Constitution drain and become nauseated.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-blood-to-water",
    "name": "Infusion of Blood To Water",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Blood To Water spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The target's blood turns to water, dealing heavy Constitution damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-blood-wind",
    "name": "Infusion of Blood Wind",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Blood Wind spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A touched creature can make its natural attacks at range once, hurling them on a wind of blood.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-bloodhound",
    "name": "Infusion of Bloodhound",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Bloodhound spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain bonuses to track a creature whose blood or scent you have, including Survival and scent-like tracking benefits.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-bodak-birth",
    "name": "Infusion of Bodak Birth",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Bodak Birth spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Transforms one willing subject into a bodak, replacing all of the subject's characteristics with the bodak's, using a blood-bathed figurine of the subject.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-bodaks-glare",
    "name": "Infusion of Bodak’S Glare",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Bodak’S Glare spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your gaze gains a death effect like a bodak's; creatures meeting it must save or die.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-body-blades",
    "name": "Infusion of Body Blades",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Body Blades spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Blades grow from your body, usable as weapons and damaging grapplers.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-body-of-the-sun",
    "name": "Infusion of Body Of The Sun",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Body Of The Sun spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your body radiates fire, dealing damage to creatures adjacent to you each round.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-body-ward",
    "name": "Infusion of Body Ward",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Body Ward spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You grant the subject limited resistance to ability damage to one physical ability score you choose — Strength, Dexterity, or Constitution — absorbing the next 5 points of such damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-bolster-aura",
    "name": "Infusion of Bolster Aura",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Bolster Aura spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You make the aura of the target creature or object stronger, so that other creatures may assume the target is more powerful than it actually is.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-bolt-of-glory",
    "name": "Infusion of Bolt Of Glory",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Bolt Of Glory spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A ray of positive energy deals heavy damage, especially to evil outsiders and undead.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-bombardment",
    "name": "Infusion of Bombardment",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Bombardment spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Rocks rain from the sky, crushing and burying creatures in the area under debris.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-boneblade",
    "name": "Infusion of Boneblade",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Boneblade spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Changes a bone at least 6 inches long into a magic sword with an enhancement bonus that grows with caster level, dealing extra damage to living and good-aligned targets.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-boneblast",
    "name": "Infusion of Boneblast",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Boneblast spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Causes a bone inside a touched creature to break or crack, dealing 1d3 points of Constitution damage (Fortitude save reduces or negates).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-bones-of-the-earth",
    "name": "Infusion of Bones of the Earth",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Bones of the Earth spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Each round, as a standard action, you conjure a pillar of rock bursting from a stone or earthen surface within range; each pillar fills a 5-foot square and rises 20 feet or until it hits a barrier. A Large or smaller creature in the square must save or be carried upward, and a creature slammed into a ceiling 20 feet up or lower takes 4d6 points of damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-boreal-wind",
    "name": "Infusion of Boreal Wind",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Boreal Wind spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A stronger gust of wind of arctic air blasts from your fingertips, extinguishing flames and battering creatures and objects in its path.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-bottle-of-smoke",
    "name": "Infusion of Bottle Of Smoke",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Bottle Of Smoke spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Smoke pours from a bottle you hold, concealing an area as it spreads.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-bottomless-hate",
    "name": "Infusion of Bottomless Hate",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Bottomless Hate spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You fill yourself with a terrible hatred against your favored enemies, gaining a +1 morale bonus on attack and damage rolls against them for every three caster levels.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-brain-spider",
    "name": "Infusion of Brain Spider",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Brain Spider spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You plant mental probes in up to eight creatures, reading their thoughts and learning through their senses.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-brambles",
    "name": "Infusion of Brambles",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Brambles spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A wooden weapon gains a +1 enhancement bonus and grows damaging spikes... creatures striking it take piercing damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-branch-to-branch",
    "name": "Infusion of Branch To Branch",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Branch To Branch spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You move through trees and branches at full speed with bonuses to Climb and Jump in forests.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-break-enchantment",
    "name": "Infusion of Break Enchantment",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Break Enchantment spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Frees victims from enchantments, transmutations, and curses with a caster level check (max +15).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-breath-of-the-jungle",
    "name": "Infusion of Breath Of The Jungle",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Breath Of The Jungle spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You exhale a mist that invigorates allies, granting fast healing briefly and removing fatigue.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-briar-web",
    "name": "Infusion of Briar Web",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Briar Web spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As web, but the strands are thorny vines that also deal piercing damage to creatures moving through them.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-brilliant-aura",
    "name": "Infusion of Brilliant Aura",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Brilliant Aura spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your allies' weapons blaze with energy, gaining the brilliant energy quality (passing through nonliving matter) briefly.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-brilliant-blade",
    "name": "Infusion of Brilliant Blade",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Brilliant Blade spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. One weapon gains the brilliant energy property for the duration, ignoring armor and shield bonuses.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-brumal-stiffening",
    "name": "Infusion of Brumal Stiffening",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Brumal Stiffening spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Makes the targeted weapon brittle, reducing its hardness by 5 and causing it to damage itself when its wielder rolls a natural 1 on an attack.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-bulls-strength",
    "name": "Infusion of Bull's Strength",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Bull's Strength spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Grants a +4 enhancement bonus to Strength.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-bulls-strength-mass",
    "name": "Infusion of Bull's Strength, Mass",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Bull's Strength, Mass spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As bull's strength (+4 Strength), but affects one creature per level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-buoyant-lifting",
    "name": "Infusion of Buoyant Lifting",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Buoyant Lifting spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Raises a sunken object or creature toward the surface with great lifting force.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-burning-hands",
    "name": "Infusion of Burning Hands",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Burning Hands spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A cone of flame deals 1d4 fire damage per level (max 5d4).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-burrow",
    "name": "Infusion of Burrow",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Burrow spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject gains a burrow speed of 20 feet through soil and loose earth.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-burrow-mass",
    "name": "Infusion of Burrow, Mass",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Burrow, Mass spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As burrow, for one creature per level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-call-avalanche",
    "name": "Infusion of Call Avalanche",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Call Avalanche spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Calls an avalanche of ice and snow out of the sky outdoors, dealing 8d6 points of crushing damage and potentially burying Large or smaller creatures that fail their Reflex saves.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-call-faithful-servants",
    "name": "Infusion of Call Faithful Servants",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Call Faithful Servants spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Calls 1d4 lantern archons, coure eladrins, or musteval guardinals (matching your alignment) to serve you for up to one year as guards, soldiers, or spies; you can control no more than 2 HD of celestials per caster level this way.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-call-kolyarut",
    "name": "Infusion of Call Kolyarut",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Call Kolyarut spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Calls a kolyarut inevitable to aid you, as planar ally, for a negotiated service.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-call-lightning",
    "name": "Infusion of Call Lightning",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Call Lightning spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Once per round the caster can call down a 5-foot-wide, 30-foot-long vertical bolt of lightning dealing 3d6 points of electricity damage (3d10 if the caster is outdoors in stormy weather).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-call-lightning-storm",
    "name": "Infusion of Call Lightning Storm",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Call Lightning Storm spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As call lightning, but each bolt deals 5d6 points of electricity damage (5d10 outdoors in stormy weather) and the caster can call more bolts, as printed.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-call-marut",
    "name": "Infusion of Call Marut",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Call Marut spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Calls a marut inevitable to aid you, as planar ally.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-call-mount",
    "name": "Infusion of Call Mount",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Call Mount spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Summons your special mount from the celestial planes, exactly as your paladin class ability, except that the duration is shorter and there is no limit on how often you can call it in a day.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-call-of-stone",
    "name": "Infusion of Call of Stone",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Call of Stone spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The target slowly turns to stone: at the start of each of its turns it must make a Fortitude save or take a cumulative 10-foot penalty to its speed and a −2 penalty to Dexterity; a target whose speed drops to 0 feet cannot move. A creature that fails four or more saves is permanently transformed into a statue, as if by flesh to stone.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-call-of-the-twilight-defender",
    "name": "Infusion of Call of the Twilight Defender",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Call of the Twilight Defender spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The ground erupts and a twilight guardian — a regal creature of stone, wood, and plant parts — stands forth to serve you.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-call-zelekhut",
    "name": "Infusion of Call Zelekhut",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Call Zelekhut spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Calls a zelekhut inevitable to aid you, as planar ally.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-calm-animals",
    "name": "Infusion of Calm Animals",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Calm Animals spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Calms aggressive animals, making them indifferent.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-calm-emotions",
    "name": "Infusion of Calm Emotions",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Calm Emotions spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Calms agitated creatures, negating emotion effects, fear, and confusion while it lasts.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-camouflage",
    "name": "Infusion of Camouflage",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Camouflage spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain a +10 competence bonus on Hide checks by blending with your surroundings.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-camouflage-mass",
    "name": "Infusion of Camouflage, Mass",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Camouflage, Mass spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As camouflage, for one creature per level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-candlelight",
    "name": "Infusion of CANDLELIGHT",
    "category": "potion",
    "cost": "25 gp",
    "summary": "A specially treated herb infused with the CANDLELIGHT spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You cause an object to glow like a candle, shedding light in a 5-foot radius. The light produced is not strong enough to counter or dispel any magical darkness.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-capricious-zephyr",
    "name": "Infusion of Capricious Zephyr",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Capricious Zephyr spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A fickle wind gust follows a creature, bull rushing and harassing it at random moments.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-cast-in-stone",
    "name": "Infusion of Cast In Stone",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Cast In Stone spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject is permanently turned to stone along with its gear, as flesh to stone without a save at close range by gaze-like contact... it petrifies one creature on a failed Fortitude save permanently.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-castigate",
    "name": "Infusion of Castigate",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Castigate spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your divine rebuke deals sonic damage to creatures of opposing alignment and deafens them.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-cats-grace",
    "name": "Infusion of Cat's Grace",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Cat's Grace spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Grants a +4 enhancement bonus to Dexterity.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-cats-grace-mass",
    "name": "Infusion of Cat's Grace, Mass",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Cat's Grace, Mass spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As cat's grace (+4 Dexterity), but affects one creature per level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-cause-fear",
    "name": "Infusion of Cause Fear",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Cause Fear spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. One low-HD creature becomes frightened, or shaken on a successful save.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-celestial-blood",
    "name": "Infusion of Celestial Blood",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Celestial Blood spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject gains some of a celestial's protection: resistance 10 to acid, cold, and electricity, a +4 bonus on saving throws against poison, and damage reduction 10/evil.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-celestial-brilliance",
    "name": "Infusion of Celestial Brilliance",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Celestial Brilliance spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The object touched sheds light channeled from the celestial realms — bright light to 60 feet and dim light for 60 feet beyond; undead within the bright light take 1d6 points of damage each round, and light-sensitive creatures suffer doubled penalties.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-chaavs-laugh",
    "name": "Infusion of Chaav's Laugh",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Chaav's Laugh spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your joyous, boisterous laugh strengthens good creatures in the area (+2 morale bonus on attack rolls and saves against fear, plus 1d8 + caster level temporary hit points) and saps the resolve of evil creatures in the area.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-chain-dispel",
    "name": "Infusion of Chain Dispel",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Chain Dispel spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A coruscating bolt strikes each targeted creature: every creature struck is affected as if by a targeted dispel magic, except that you can add your caster level to the dispel check, up to a maximum of 25.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-chain-of-eyes",
    "name": "Infusion of Chain Of Eyes",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Chain Of Eyes spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You can see through the eyes of a creature you touch, and transfer the link to creatures it touches.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-chameleon",
    "name": "Infusion of Chameleon",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Chameleon spell (Illusion); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Alters the recipient's coloration to blend with the surrounding background, granting a +10 circumstance bonus on Hide checks.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-changestaff",
    "name": "Infusion of Changestaff",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Changestaff spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Transforms your quarterstaff into a treant-like creature under your control for the duration.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-channeled-divine-health",
    "name": "Infusion of Channeled Divine Health",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Channeled Divine Health spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You channel healing energy, and the longer you spend casting, the stronger and longer-ranged the healing: as a swift action it works at touch range and heals 1d8 points of damage; as a standard action, at close range, 1d8 + caster level (maximum +10); as a full-round action, at medium range, 2d8 + caster level (maximum +15); over 2 full rounds, at long range, 4d8 + caster level (maximum +20). An undead creature designated within range takes the amount as damage instead of being healed.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-channeled-divine-shield",
    "name": "Infusion of Channeled Divine Shield",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Channeled Divine Shield spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A shield of divine energy improves your defenses, its strength set by how long you spend channeling the spell: cast as a swift action you gain damage reduction 2/evil for the duration; as a standard action, damage reduction 5/evil; as a full-round action, damage reduction 8/evil; over 2 rounds of casting, damage reduction 10/evil.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-charge-of-the-triceratops",
    "name": "Infusion of Charge Of The Triceratops",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Charge Of The Triceratops spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain the charging power of a triceratops: a powerful gore attack and trample benefits on a charge.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-charm-animal",
    "name": "Infusion of Charm Animal",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Charm Animal spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Makes one animal regard you as a trusted friend.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-charnel-fire",
    "name": "Infusion of Charnel Fire",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Charnel Fire spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Completely consumes one dead body with sinister flame so nothing remains; the creature can then be restored only by true resurrection. It can also be turned on corporeal undead.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-chasing-perfection",
    "name": "Infusion of Chasing Perfection",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Chasing Perfection spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject improves in all ways: it gains a +4 enhancement bonus to each of its ability scores.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-checkmates-light",
    "name": "Infusion of Checkmate’S Light",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Checkmate’S Light spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A ray of light that harms evil creatures and reveals their alignment and intentions.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-chill-metal",
    "name": "Infusion of Chill Metal",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Chill Metal spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Chills metal equipment so it damages those wearing or holding it over 7 rounds.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-choking-sands",
    "name": "Infusion of Choking Sands",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Choking Sands spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You coat the target's lungs with dust and sand; it can cough the sand up with a full-round action and a Fortitude save, or begin to suffocate.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-circle-dance",
    "name": "Infusion of Circle Dance",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Circle Dance spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You learn the direction and distance to a creature whose name or description you know, by dancing around a circle.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-circle-of-nausea",
    "name": "Infusion of Circle of Nausea",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Circle of Nausea spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Evil energy fills the area with pain: creatures in it must save each round or take a -2 penalty on attack rolls, saving throws, and skill checks.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-claws-of-the-bear",
    "name": "Infusion of Claws Of The Bear",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Claws Of The Bear spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your hands become bear claws dealing slashing damage, with improved grab.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-claws-of-the-savage",
    "name": "Infusion of Claws of the Savage",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Claws of the Savage spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Grants one creature two long claws in place of its hands, dealing damage by the creature's size, which it can attack with as if proficient.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-clear-mind",
    "name": "Infusion of Clear Mind",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Clear Mind spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain a +3 bonus on Will saves for the duration, sharpening focus against mental influence.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-climb-walls",
    "name": "Infusion of Climb Walls",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Climb Walls spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain a climb speed and bonuses for climbing walls and ceilings like a spider.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-climbing-tree",
    "name": "Infusion of Climbing Tree",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Climbing Tree spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A tree snakes up from the earth in an adjacent square, growing up to 10 feet per caster level (maximum 50 feet) with branches perfectly spaced for climbing.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-cloak-of-bravery",
    "name": "Infusion of Cloak Of Bravery",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Cloak Of Bravery spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You emanate courage: allies near you gain a morale bonus on saves against fear.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-cloak-of-chaos",
    "name": "Infusion of Cloak of Chaos",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Cloak of Chaos spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A cloak of chaotic energy protects the subjects: +4 deflection bonus to AC, a +4 resistance bonus on saves, spell resistance 25 against lawful spells and spell-like abilities, and lawful creatures that successfully strike a subject in melee must save or be confused, as printed.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-cloak-of-shade",
    "name": "Infusion of Cloak of Shade",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Cloak of Shade spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject is wrapped in an envelope of perfect shade in which the temperature is one band lower than the surroundings.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-cloak-of-the-sea",
    "name": "Infusion of Cloak Of The Sea",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Cloak Of The Sea spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You can breathe underwater, gain a swim speed, and freedom of movement in water, turning your cloak into fins.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-close-wounds",
    "name": "Infusion of Close Wounds",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Close Wounds spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As an immediate action, heals a small amount of damage to a nearby creature, potentially saving it from death.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-cloud-of-knives",
    "name": "Infusion of Cloud of Knives",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Cloud of Knives spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A cloud of sharp knives floats around your upper body. Each round, as a free action at the beginning of your turn, you can release one knife at any target within 30 feet that you can see (ranged attack roll, attack bonus equal to your caster level + your key ability modifier); a hit deals 1d6 points of damage, +1 per three caster levels (maximum +5), and threatens a critical hit on a roll of 19–20. The knives count as magic for overcoming damage reduction.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-cloud-of-the-achaierai",
    "name": "Infusion of Cloud of the Achaierai",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Cloud of the Achaierai spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Conjures a choking cloud of inky blackness: creatures inside other than the caster take damage each round and must save or be confused for the duration.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-cloud-wings",
    "name": "Infusion of Cloud Wings",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Cloud Wings spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain a fly speed made of cloudstuff while outdoors, faster with updrafts.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-cloud-walkers",
    "name": "Infusion of Cloud-Walkers",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Cloud-Walkers spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You and companions can walk on clouds and fog as if solid ground.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-cloudburst",
    "name": "Infusion of Cloudburst",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Cloudburst spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A brief downpour drenches an area, dousing fires and hampering vision and ranged attacks.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-clutch-of-orcus",
    "name": "Infusion of Clutch Of Orcus",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Clutch Of Orcus spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A spectral hand clutches the victim's heart, dealing damage each round and potentially killing it as the hand squeezes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-cocoon",
    "name": "Infusion of Cocoon",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Cocoon spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A cocoon of force and silk encases a dying creature, preserving its life in stasis until it can be healed.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-coins-of-communication",
    "name": "Infusion of Coins of Communication",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Coins of Communication spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You imbue two gold coins with magical energy, establishing a telepathic link between two creatures that each carry one of the coins.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-cold-fire",
    "name": "Infusion of Cold Fire",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Cold Fire spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Existing fire burns cold: it sheds light but deals cold damage instead of fire, freezing what it touches.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-cold-snap",
    "name": "Infusion of Cold Snap",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Cold Snap spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The temperature in a wide area plunges for days, bringing frostbite conditions and killing crops.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-column-of-ice",
    "name": "Infusion of Column of Ice",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Column of Ice spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A column of ice rises at the point you designate; see the full text for its use in creating barriers and crushing foes beneath falling ice and snow.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-cometfall",
    "name": "Infusion of Cometfall",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Cometfall spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A comet plummets where you point, dealing heavy damage, knocking creatures down, and leaving a crater of difficult terrain.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-cometstrike",
    "name": "Infusion of Cometstrike",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Cometstrike spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Three frozen comets strike up to three different creatures or objects outdoors, each requiring a ranged touch attack and dealing bludgeoning and cold damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-command",
    "name": "Infusion of Command",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Command spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Give one creature a single-word order — approach, drop, fall, flee, or halt — for 1 round.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-command-plants",
    "name": "Infusion of Command Plants",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Command Plants spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Plant creatures obey your spoken commands as if friendly to you.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-commune",
    "name": "Infusion of Commune",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Commune spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your deity answers one yes-or-no question per level, truthfully but briefly.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-commune-with-nature",
    "name": "Infusion of Commune with Nature",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Commune with Nature spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Learn three facts about the surrounding terrain, plants, minerals, water, and creatures within miles.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-comprehend-languages",
    "name": "Infusion of Comprehend Languages",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Comprehend Languages spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You understand all spoken languages and can read text in any language.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-condemnation",
    "name": "Infusion of Condemnation",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Condemnation spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You force the targeted outsider to shrink with horror: it must succeed on a Will save or be stunned for 1 round and have its spell resistance reduced by 10.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-conduit-of-life",
    "name": "Infusion of Conduit of Life",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Conduit of Life spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The next time you use a class feature or racial ability to channel positive energy (such as turn undead or lay on hands), you also heal yourself for 2d10+1 points per caster level (maximum 10).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-confound",
    "name": "Infusion of Confound",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Confound spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You render the target unable to follow your movements: it takes a -2 penalty on attack rolls against you, and you gain a +2 circumstance bonus on attack rolls against it.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-conjure-ice-beast-i",
    "name": "Infusion of Conjure Ice Beast I",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Conjure Ice Beast I spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Conjures a creature constructed of magical ice from the 1st-level list, which appears and acts immediately on your turn.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-conjure-ice-beast-ii",
    "name": "Infusion of Conjure Ice Beast II",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Conjure Ice Beast II spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As conjure ice beast I, except you may conjure one creature from the 2nd-level list or two of the same kind from the 1st-level list.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-conjure-ice-beast-iii",
    "name": "Infusion of Conjure Ice Beast III",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Conjure Ice Beast III spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As conjure ice beast I, except you may conjure one creature from the 3rd-level list, two from the 2nd-level list, or four from the 1st-level list.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-conjure-ice-beast-iv",
    "name": "Infusion of Conjure Ice Beast IV",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Conjure Ice Beast IV spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As conjure ice beast I, except you may conjure one creature from the 4th-level list, two from the 3rd-level list, or four from a lower-level list.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-conjure-ice-beast-ix",
    "name": "Infusion of Conjure Ice Beast IX",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Conjure Ice Beast IX spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As conjure ice beast I, except you may conjure one creature from the 9th-level list, two from the 8th-level list, or four from a lower-level list.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-conjure-ice-beast-v",
    "name": "Infusion of Conjure Ice Beast V",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Conjure Ice Beast V spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As conjure ice beast I, except you may conjure one creature from the 5th-level list, two from the 4th-level list, or four from a lower-level list.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-conjure-ice-beast-vi",
    "name": "Infusion of Conjure Ice Beast VI",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Conjure Ice Beast VI spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As conjure ice beast I, except you may conjure one creature from the 6th-level list, two from the 5th-level list, or four from a lower-level list.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-conjure-ice-beast-vii",
    "name": "Infusion of Conjure Ice Beast VII",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Conjure Ice Beast VII spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As conjure ice beast I, except you may conjure one creature from the 7th-level list, two from the 6th-level list, or four from a lower-level list.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-conjure-ice-beast-viii",
    "name": "Infusion of Conjure Ice Beast VIII",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Conjure Ice Beast VIII spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As conjure ice beast I, except you may conjure one creature from the 8th-level list, two from the 7th-level list, or four from a lower-level list.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-conjure-ice-object",
    "name": "Infusion of Conjure Ice Object",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Conjure Ice Object spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Conjures a block of transparent ice shaped as any object you have seen, up to the weight limit; objects with moving parts do not function, and complex items require a Craft check.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-consecrate",
    "name": "Infusion of Consecrate",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Consecrate spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Fills an area with positive energy: +3 turn checks and penalties for undead within.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-consecrate-battlefield",
    "name": "Infusion of Consecrate Battlefield",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Consecrate Battlefield spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. This spell blesses a large area with positive energy, functioning as the consecrate spell except as noted in the text.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-consumptive-field",
    "name": "Infusion of Consumptive Field",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Consumptive Field spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Creatures dying near you feed you strength: each death grants you temporary hit points and a Strength bonus (capped).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-consumptive-field-greater",
    "name": "Infusion of Consumptive Field, Greater",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Consumptive Field, Greater spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As consumptive field, but the gains are larger and reach further.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-contagion",
    "name": "Infusion of Contagion",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Contagion spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Infects the subject with a filthy, immediately-onset disease of your choice.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-contagion-mass",
    "name": "Infusion of Contagion, Mass",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Contagion, Mass spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As contagion, infecting multiple creatures with diseases of your choice.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-contagious-touch",
    "name": "Infusion of Contagious Touch",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Contagious Touch spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your touch carries disease; each touch infects a creature, and the contagion can keep spreading for several uses.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-contingent-energy-resistance",
    "name": "Infusion of Contingent Energy Resistance",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Contingent Energy Resistance spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. When the subject first takes energy damage of a chosen type, a resist energy effect triggers automatically.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-contingent-spell-lock",
    "name": "Infusion of Contingent Spell Lock",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Contingent Spell Lock spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You transfer some of your currently prepared spells or available spell slots to a hidden part of your soul, so that if you die and appear on the Ethereal Plane, you have those spells or slots available.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-continual-flame",
    "name": "Infusion of Continual Flame",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Continual Flame spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Creates a permanent heatless flame on an object that sheds light like a torch.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-control-plants",
    "name": "Infusion of Control Plants",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Control Plants spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Controls the actions of plant creatures, which obey your telepathic commands; suicidal orders are not obeyed.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-control-sand",
    "name": "Infusion of Control Sand",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Control Sand spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Depending on the version chosen, raises or lowers fine particles such as dust or sand by up to 2 feet per caster level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-control-snow-and-ice",
    "name": "Infusion of Control Snow and Ice",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Control Snow and Ice spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Raises or lowers snow and ice in the area — lowering it to a minimum depth of 1 inch, by up to 2 feet per caster level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-control-temperature",
    "name": "Infusion of Control Temperature",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Control Temperature spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Imbues an area with cold or fire energy, shifting its temperature by one band per five caster levels.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-control-water",
    "name": "Infusion of Control Water",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Control Water spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Raises or lowers a body of water by 2 feet per level, or parts it to form a trench.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-control-weather",
    "name": "Infusion of Control Weather",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Control Weather spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Change the weather in a 2-mile radius over 10 minutes: precipitation, temperature, wind, even storms by season.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-control-winds",
    "name": "Infusion of Control Winds",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Control Winds spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Increase or decrease wind strength by up to three levels within a huge cylinder around you.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-convert-wand",
    "name": "Infusion of Convert Wand",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Convert Wand spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Temporarily transforms a magic wand of any type into a healing wand with the same number of charges (the wand's spell level sets which cure spell it delivers); when the spell ends the wand's original effect is restored, and charges spent remain spent.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-conviction",
    "name": "Infusion of Conviction",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Conviction spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject gains a +2 morale bonus on saving throws, rising with your level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-conviction-mass",
    "name": "Infusion of Conviction, Mass",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Conviction, Mass spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As conviction, for multiple subjects.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-corona-of-cold",
    "name": "Infusion of Corona Of Cold",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Corona Of Cold spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A halo of cold damages nearby creatures each round and extinguishes flames.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-counterattack",
    "name": "Infusion of Counterattack",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Counterattack spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. For the duration, any time an opponent makes a melee attack against you, you may attempt one melee counterattack at your full base attack bonus that does not count as an attack of opportunity.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-countermoon",
    "name": "Infusion of Countermoon",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Countermoon spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Suppresses lycanthropy: prevents a lycanthrope from changing shape for the duration.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-crabwalk",
    "name": "Infusion of Crabwalk",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Crabwalk spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You move like a crab, gaining bonuses to stability and movement in any direction without turning penalties.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-crawling-darkness",
    "name": "Infusion of Crawling Darkness",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Crawling Darkness spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Living darkness crawls over an area, concealing and chilling creatures inside it.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-creaking-cacophony",
    "name": "Infusion of Creaking Cacophony",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Creaking Cacophony spell (Illusion); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Illusory noises distract and deafen: creatures in the area take penalties on Listen and concentration.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-create-ectoplasm",
    "name": "Infusion of Create Ectoplasm",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Create Ectoplasm spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You create raw ectoplasm — sticky or slippery, as you choose — from your hands, eyes, or mouth.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-create-food-and-water",
    "name": "Infusion of Create Food and Water",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Create Food and Water spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Creates wholesome food and water sufficient for three humans per level for a day.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-create-greater-undead",
    "name": "Infusion of Create Greater Undead",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Create Greater Undead spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Creates a shadow, wraith, spectre, or devourer from a corpse, by caster level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-create-undead",
    "name": "Infusion of Create Undead",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Create Undead spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Creates a ghoul, ghast, mummy, or mohrg from a corpse, by caster level; control is not guaranteed.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-create-water",
    "name": "Infusion of Create Water",
    "category": "potion",
    "cost": "25 gp",
    "summary": "A specially treated herb infused with the Create Water spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Creates clean drinkable water, up to 2 gallons per level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-creeping-cold",
    "name": "Infusion of Creeping Cold",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Creeping Cold spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Cold creeps through the subject: 1d6 cold damage the first round, 2d6 the second, 3d6 the third.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-creeping-cold-greater",
    "name": "Infusion of Creeping Cold, Greater",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Creeping Cold, Greater spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As creeping cold, but the damage keeps escalating over more rounds.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-creeping-doom",
    "name": "Infusion of Creeping Doom",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Creeping Doom spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Summons swarms of centipedes that you direct to attack; each swarm deals damage and poison to creatures in its space.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-crown-of-brilliance",
    "name": "Infusion of Crown of Brilliance",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Crown of Brilliance spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A blazing crown of golden light surrounds your head: creatures that engage you in melee must succeed on a Fortitude save or be blinded for 1d4 rounds, and remain dazzled while in melee with you even if they save.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-crown-of-clarity",
    "name": "Infusion of Crown of Clarity",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Crown of Clarity spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A crown of magical energy grants the wearer a +2 competence bonus on Listen and Spot checks. As an immediate action, the wearer can discharge the crown to gain a +8 bonus on a single Spot or Listen check, ending the spell. The crown occupies the wearer's headband, hat, or helm space, and the spell ends if it is removed.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-crown-of-flame",
    "name": "Infusion of Crown of Flame",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Crown of Flame spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You become a blazing beacon of the powers of good, searing all evil outsiders, evil undead, and evil fey within 10 feet of you for 2d6 points of damage per round.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-crown-of-might",
    "name": "Infusion of Crown of Might",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Crown of Might spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A crown of magical energy grants the wearer a +2 enhancement bonus to Strength. As an immediate action, the wearer can discharge the crown to gain a +8 enhancement bonus to Strength for 1 round, ending the spell.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-crown-of-protection",
    "name": "Infusion of Crown of Protection",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Crown of Protection spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A shimmering crown of force grants the wearer a +1 deflection bonus to AC and a +1 resistance bonus on all saves. As an immediate action, the wearer can discharge the crown to gain a +4 deflection bonus to AC or a +4 resistance bonus on saves for 1 round, ending the spell.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-crown-of-smiting",
    "name": "Infusion of Crown of Smiting",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Crown of Smiting spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A crown of divine energy harmful to enemies of your faith: choose one alignment (chaotic, evil, good, or lawful) when you cast it. Once per minute, the wearer gains a +2 divine bonus on damage rolls on his next melee or ranged attack against a target of the chosen alignment (declared before the attack; the bonus is lost if he misses). As an immediate action, the wearer can discharge the crown to gain a +8 divine bonus on damage on a single attack, ending the spell.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-crown-of-the-grave",
    "name": "Infusion of Crown of the Grave",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Crown of the Grave spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A crown of bone grants its wearer the power to command undead: once per minute the wearer can issue a one-word order to an undead creature, as the command spell (channeled through holy or unholy energy, so it is not mind-affecting; a cleric wearer can expend a turn or rebuke undead use to raise the save DC by 4). As an immediate action, the wearer can discharge the crown to gain a +4 bonus on a single turn or rebuke undead attempt, ending the spell.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-crumble",
    "name": "Infusion of Crumble",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Crumble spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Weakens and crumbles worked stone and earth, collapsing structures and fortifications.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-crunchy-snow",
    "name": "Infusion of Crunchy Snow",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Crunchy Snow spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Makes an area of fallen snow hard and crumbly so it crunches loudly underfoot, imposing a -20 penalty on Move Silently checks.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-cure-critical-wounds",
    "name": "Infusion of Cure Critical Wounds",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Cure Critical Wounds spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Heals 4d8+1/level (max +20) damage; damages undead instead.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-cure-critical-wounds-mass",
    "name": "Infusion of Cure Critical Wounds, Mass",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Cure Critical Wounds, Mass spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As cure critical wounds (4d8 +1/level, max +40) on one creature per level; damages undead instead.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-cure-light-wounds",
    "name": "Infusion of Cure Light Wounds",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Cure Light Wounds spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Heals 1d8+1/level (max +5) damage; damages undead instead.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-cure-light-wounds-mass",
    "name": "Infusion of Cure Light Wounds, Mass",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Cure Light Wounds, Mass spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Heals 1d8+1/level (max +25) damage to each selected creature; damages undead.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-cure-minor-wounds",
    "name": "Infusion of Cure Minor Wounds",
    "category": "potion",
    "cost": "25 gp",
    "summary": "A specially treated herb infused with the Cure Minor Wounds spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Heals 1 point of damage to a touched creature.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-cure-moderate-wounds",
    "name": "Infusion of Cure Moderate Wounds",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Cure Moderate Wounds spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Heals 2d8+1/level (max +10) damage; damages undead instead.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-cure-moderate-wounds-mass",
    "name": "Infusion of Cure Moderate Wounds, Mass",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Cure Moderate Wounds, Mass spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. This spell functions like cure light wounds, mass, except that it cures 2d8 points of damage +1 point per caster level (maximum +30).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-cure-serious-wounds",
    "name": "Infusion of Cure Serious Wounds",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Cure Serious Wounds spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Heals 3d8+1/level (max +15) damage; damages undead instead.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-cure-serious-wounds-mass",
    "name": "Infusion of Cure Serious Wounds, Mass",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Cure Serious Wounds, Mass spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. This spell functions like cure light wounds, mass, except that it cures 3d8 points of damage +1 point per caster level (maximum +35).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-curse-of-arrow-attraction",
    "name": "Infusion of Curse of Arrow Attraction",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Curse of Arrow Attraction spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Missile weapons veer toward the cursed subject and strike with extreme force: it takes a −5 penalty to Armor Class against any ranged attack (projectile weapons, thrown weapons, and ranged touch attacks), and any critical threats on such attacks are automatically confirmed.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-curse-of-ill-fortune",
    "name": "Infusion of Curse Of Ill Fortune",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Curse Of Ill Fortune spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject takes a -3 penalty on attacks, saves, and checks.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-curse-of-ill-fortune-mass",
    "name": "Infusion of Curse Of Ill Fortune, Mass",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Curse Of Ill Fortune, Mass spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As curse of ill fortune, but affecting several creatures — in practice the mass version from its own entry: penalties to many foes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-curse-of-impending-blades",
    "name": "Infusion of Curse Of Impending Blades",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Curse Of Impending Blades spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject takes a -2 penalty to AC as blades seem drawn to it.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-curse-of-impending-blades-mass",
    "name": "Infusion of Curse Of Impending Blades, Mass",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Curse Of Impending Blades, Mass spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As curse of impending blades, for one creature per level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-curse-ward",
    "name": "Infusion of Curse Ward",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Curse Ward spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You infuse yourself with positive energy and increase your defenses against curses, gaining a +6 resistance bonus on Will saves made to resist curse effects, as the text describes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-daggerspell-stance",
    "name": "Infusion of Daggerspell Stance",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Daggerspell Stance spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. While holding daggers you gain defensive and offensive bonuses: AC, concentration, and the ability to hold spells in the blades.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-damning-darkness",
    "name": "Infusion of Damning Darkness",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Damning Darkness spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Works as darkness, but the darkness also deals unholy damage each round: 2d6 to good creatures and 1d6 to creatures neither good nor evil.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-dampen-magic",
    "name": "Infusion of Dampen Magic",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Dampen Magic spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You surround the subject with a mystical field that dampens the effects of magic, weakening the enhancement bonuses of magic weapons and similar effects within it.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-dance-of-ruin",
    "name": "Infusion of Dance of Ruin",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Dance of Ruin spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. After dancing and chanting, the caster sends a wave of crackling energy out to the range limit, dealing 2d20 points of damage to all non-demon creatures in the area.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-dance-of-the-unicorn",
    "name": "Infusion of Dance Of The Unicorn",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Dance Of The Unicorn spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You purify an area: a mist cleanses poison, disease, and pollution, and hinders evil outsiders.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-dancing-web",
    "name": "Infusion of Dancing Web",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Dancing Web spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A burst of magical energy deals 1d6 points of nonlethal damage per level (maximum 10d6); evil creatures that fail their saving throw are also entangled by lingering threads of energy for 1d6 rounds.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-darkfire",
    "name": "Infusion of Darkfire",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Darkfire spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A flame you can throw repeatedly deals fire damage as ranged touch attacks for the duration.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-darkness",
    "name": "Infusion of Darkness",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Darkness spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Radiates shadowy darkness from an object, granting concealment even against darkvision.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-darkvision",
    "name": "Infusion of Darkvision",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Darkvision spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Grants the subject darkvision out to 60 feet.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-darts-of-life",
    "name": "Infusion of Darts of Life",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Darts of Life spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Ten small orbs of light circle your head; as a free action you can launch one dart to strike a friend and heal him of damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-dawn",
    "name": "Infusion of Dawn",
    "category": "potion",
    "cost": "25 gp",
    "summary": "A specially treated herb infused with the Dawn spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You awaken sleeping creatures in the area refreshed, ending sleep effects and fatigue.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-daylight",
    "name": "Infusion of Daylight",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Daylight spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Object sheds bright light in a 60-foot radius, dispelling darkness effects as a 3rd-level light spell.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-deadfall",
    "name": "Infusion of Deadfall",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Deadfall spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A huge dead tree falls where you direct, crushing creatures beneath it.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-deadly-lahar",
    "name": "Infusion of Deadly Lahar",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Deadly Lahar spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A torrent of molten volcanic material washes over your foes, dealing 10d6 points of fire damage and coating them in viscous rock that slows them.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-deafening-clang",
    "name": "Infusion of Deafening Clang",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Deafening Clang spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A touched weapon rings loudly on hits, dealing sonic damage and possibly deafening the struck creature.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-death-dragon",
    "name": "Infusion of Death Dragon",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Death Dragon spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You take on an undead dragon's aspect: breath of negative energy, frightful presence, and spectral form benefits.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-death-grimace",
    "name": "Infusion of Death Grimace",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Death Grimace spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Marks a corpse with a magical signature identifying the caster (truthfully or falsely) as the murderer, as a calling card or proof of a paid killing.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-death-hail",
    "name": "Infusion of Death Hail",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Death Hail spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Calls an intense storm of death hail into being: creatures in the area must save or take Strength and Constitution damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-death-knell",
    "name": "Infusion of Death Knell",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Death Knell spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Slays a dying creature and feeds you 1d8 temporary hp, +2 Str, and +1 caster level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-death-lock",
    "name": "Infusion of Death Lock",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Death Lock spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. If the subject dies while the spell is in effect, its soul immediately passes on to the True Afterlife and cannot form a ghost, though it can still be raised from the dead.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-death-pact",
    "name": "Infusion of Death Pact",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Death Pact spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. If you die during the duration, a prearranged effect revives you (as a contingent raise) at the cost of Constitution.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-death-throes",
    "name": "Infusion of Death Throes",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Death Throes spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. If you are killed during the duration, your body explodes in a burst of energy damaging nearby creatures.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-death-ward",
    "name": "Infusion of Death Ward",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Death Ward spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Grants immunity to death spells, magical death effects, energy drain, and negative energy effects.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-death-ward-mass",
    "name": "Infusion of Death Ward, Mass",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Death Ward, Mass spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As death ward, for one creature per level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-deathwatch",
    "name": "Infusion of Deathwatch",
    "category": "potion",
    "cost": "25 gp",
    "summary": "A specially treated herb infused with the Deathwatch spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Using the foul sight granted by the powers of unlife, you determine the condition of creatures near death in the area: dead, fragile (alive with 3 or fewer hit points), fighting off death (4 or more hit points), undead, or neither alive nor dead. Deathwatch sees through any spell or ability that allows creatures to feign death.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-decomposition",
    "name": "Infusion of Decomposition",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Decomposition spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Corpses near a wounded creature rot quickly; wounds festering nearby deal extra damage to the subject each round.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-decoy-image",
    "name": "Infusion of Decoy Image",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Decoy Image spell (Illusion); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Creates an illusory duplicate of an animal or companion to draw attacks away from the real creature.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-deep-breath",
    "name": "Infusion of Deep Breath",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Deep Breath spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Fills your lungs with magically held air, letting you breathe underwater or hold your breath far longer.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-deeper-darkness",
    "name": "Infusion of Deeper Darkness",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Deeper Darkness spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Radiates deep shadowy darkness from an object, granting concealment even against darkvision.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-deeper-darkvision",
    "name": "Infusion of Deeper Darkvision",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Deeper Darkvision spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Grants darkvision to 90 feet that penetrates magical darkness of lower level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-defile-snow-and-ice",
    "name": "Infusion of Defile Snow and Ice",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Defile Snow and Ice spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Imbues ice or snow with negative energy, granting undead in the area a +4 profane bonus against turning and cold creatures spell resistance 15 against fire effects.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-dehydrate",
    "name": "Infusion of Dehydrate",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Dehydrate spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You draw the water from a creature, dealing damage and fatiguing or exhausting it as it desiccates.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-deific-bastion",
    "name": "Infusion of Deific Bastion",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Deific Bastion spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You imbue a shield you hold or heavy armor you wear with a +1 enhancement bonus and an additional special ability that depends on your deity.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-deific-vengeance",
    "name": "Infusion of Deific Vengeance",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Deific Vengeance spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Divine power smites a creature that just harmed you or an ally, dealing sacred damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-delay-death",
    "name": "Infusion of Delay Death",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Delay Death spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject cannot die from hit point damage while the spell lasts, remaining at -9 or lower without dying.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-delay-disease",
    "name": "Infusion of Delay Disease",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Delay Disease spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Diseases affecting the subject do not progress or harm it for the duration.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-delay-manifestation",
    "name": "Infusion of Delay Manifestation",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Delay Manifestation spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You prevent the subject creature from manifesting as a ghost for the duration: if it dies, it appears on the Ethereal Plane as normal but cannot enter the Material Plane while the spell lasts.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-delay-poison",
    "name": "Infusion of Delay Poison",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Delay Poison spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Suspends the effects of any poison in the subject's system until the spell ends.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-demon-dirge",
    "name": "Infusion of Demon Dirge",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Demon Dirge spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A dirge that torments evil outsiders, dealing sonic damage and slowing demons in the area.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-demon-wings",
    "name": "Infusion of Demon Wings",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Demon Wings spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Massive batlike wings grow from the caster’s back, letting him fly at his land speed with average maneuverability.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-demoncall",
    "name": "Infusion of Demoncall",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Demoncall spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Taps the forbidden knowledge of demons for a +10 profane bonus on one immediate Knowledge (arcana), Knowledge (the planes), or Knowledge (religion) check.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-demonflesh",
    "name": "Infusion of Demonflesh",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Demonflesh spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The caster grows thick, leathery demon flesh, gaining a +1 natural armor bonus per five caster levels (maximum +4); no effect on evil outsiders.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-demonhide",
    "name": "Infusion of Demonhide",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Demonhide spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your skin becomes demon-like, granting natural armor and damage reduction overcome by cold iron or good.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-demonic-blood-infusion",
    "name": "Infusion of DEMONIC BLOOD INFUSION",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the DEMONIC BLOOD INFUSION spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You grant the subject infernal power by transforming its blood into the blood of a demon: it gains the fiendish template and the chaotic and evil subtypes, and becomes chaotic evil if it is not already.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-denounce",
    "name": "Infusion of Denounce",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Denounce spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You instill feelings of shame and guilt in a target outsider, imposing a -4 insight penalty on its attack rolls, saves, and checks; each round the subject can attempt a new saving throw to end the effect. Outsiders with the good subtype are immune.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-desecrate",
    "name": "Infusion of Desecrate",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Desecrate spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Fills an area with negative energy: -3 turn checks and profane bonuses for undead within.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-desecrate-battlefield",
    "name": "Infusion of Desecrate Battlefield",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Desecrate Battlefield spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. This spell imbues a large area with negative energy, functioning as the desecrate spell except as noted in the text. It counters and dispels consecrate battlefield.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-desiccate",
    "name": "Infusion of Desiccate",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Desiccate spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You evaporate moisture from a living creature, dealing 1d6 points of dessication damage per two caster levels (maximum 5d6) and dehydrating it; plants and water-subtype elementals take larger damage dice.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-desiccate-mass",
    "name": "Infusion of Desiccate, Mass",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Desiccate, Mass spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Functions as desiccate, except that it affects multiple creatures, one per caster level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-despoil",
    "name": "Infusion of Despoil",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Despoil spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Blights and corrupts a vast area of land forever: weak plants die outright, stronger plants and other living creatures must save or die or take damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-destruction",
    "name": "Infusion of Destruction",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Destruction spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Slays the target and consumes its body; on a successful save it still takes 10d6 damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-detect-aberration",
    "name": "Infusion of Detect Aberration",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Detect Aberration spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You can detect the presence of aberrations by observing the disruption of the natural order around them; the amount of information revealed depends on how long you study a particular area.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-detect-animals-or-plants",
    "name": "Infusion of Detect Animals or Plants",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Detect Animals or Plants spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Detects animals or a chosen kind of plant within a long cone.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-detect-chaos",
    "name": "Infusion of Detect Chaos",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Detect Chaos spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Reveals chaotic auras — creatures, spells, and objects — while you concentrate.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-detect-evil",
    "name": "Infusion of Detect Evil",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Detect Evil spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Reveals evil auras — creatures, spells, and objects — while you concentrate.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-detect-favored-enemy",
    "name": "Infusion of Detect Favored Enemy",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Detect Favored Enemy spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You can sense the presence and direction of your favored enemies nearby.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-detect-fire",
    "name": "Infusion of Detect Fire",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Detect Fire spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Functions as detect evil, except that it detects heat energy from normal fire, fire spells and items, clerics of fire deities, and living beings without the cold subtype.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-detect-ghost",
    "name": "Infusion of Detect Ghost",
    "category": "potion",
    "cost": "25 gp",
    "summary": "A specially treated herb infused with the Detect Ghost spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You detect ghosts, learning first their presence or absence, then their number, then their location as you study an area.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-detect-good",
    "name": "Infusion of Detect Good",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Detect Good spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Reveals good auras — creatures, spells, and objects — while you concentrate.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-detect-law",
    "name": "Infusion of Detect Law",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Detect Law spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Reveals lawful auras — creatures, spells, and objects — while you concentrate.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-detect-magic",
    "name": "Infusion of Detect Magic",
    "category": "potion",
    "cost": "25 gp",
    "summary": "A specially treated herb infused with the Detect Magic spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Reveals magical auras in a cone; concentration reveals strength and location over several rounds.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-detect-poison",
    "name": "Infusion of Detect Poison",
    "category": "potion",
    "cost": "25 gp",
    "summary": "A specially treated herb infused with the Detect Poison spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Determines whether a creature or object is poisoned or carries poison.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-detect-scrying",
    "name": "Infusion of Detect Scrying",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Detect Scrying spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Alerts you to magical spying and shows a brief image of the scryer and their surroundings.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-detect-snares-and-pits",
    "name": "Infusion of Detect Snares and Pits",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Detect Snares and Pits spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Reveals natural and primitive snares, pits, and deadfalls in the area.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-detect-undead",
    "name": "Infusion of Detect Undead",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Detect Undead spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Reveals undead auras in a cone while you concentrate.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-devil-blight",
    "name": "Infusion of Devil Blight",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Devil Blight spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A blight that torments lawful evil outsiders, dealing damage and weakening devils in the area.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-devils-eye",
    "name": "Infusion of Devil's Eye",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Devil's Eye spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Gives the caster a devil’s visual acuity: he can see in darkness and magical darkness out to 30 feet.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-diamondsteel",
    "name": "Infusion of Diamondsteel",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Diamondsteel spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A suit of armor gains extra protection: its armor bonus partially applies as damage reduction for the duration.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-dictum",
    "name": "Infusion of Dictum",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Dictum spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Nonlawful creatures are deafened, slowed, paralyzed, or killed and banished, by their HD relative to yours.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-dimensional-anchor",
    "name": "Infusion of Dimensional Anchor",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Dimensional Anchor spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A green ray blocks extradimensional travel: blink, dimension door, teleport, plane shift, and similar effects.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-dimensional-lock",
    "name": "Infusion of Dimensional Lock",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Dimensional Lock spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Bars all dimensional travel into or out of the area: teleport, plane shift, blink, gate, and summoning.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-diminish-plants",
    "name": "Infusion of Diminish Plants",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Diminish Plants spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Shrinks normal plants to a third of their size or blights plant growth over a wide area, ruining crops and cover.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-dinosaur-stampede",
    "name": "Infusion of Dinosaur Stampede",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Dinosaur Stampede spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Phantom dinosaurs stampede through an area, trampling and damaging creatures in their path.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-dire-hunger",
    "name": "Infusion of Dire Hunger",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Dire Hunger spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject suffers ravenous hunger, distracted and weakened, and must save each round or be compelled to eat.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-discern-lies",
    "name": "Infusion of Discern Lies",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Discern Lies spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You can tell whether a subject is deliberately lying; evasions and true-but-misleading statements are not detected.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-discern-location",
    "name": "Infusion of Discern Location",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Discern Location spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Learns the exact location (place, name, direction) of a creature or object you have seen or touched.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-dismissal",
    "name": "Infusion of Dismissal",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Dismissal spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Forces an extraplanar creature back to its native plane.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-dispel-chaos",
    "name": "Infusion of Dispel Chaos",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Dispel Chaos spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Grants +4 AC and automatic dispel of chaotic creatures' enchantments on touch; also drives chaotic outsiders back.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-dispel-cold",
    "name": "Infusion of Dispel Cold",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Dispel Cold spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Functions as dispel evil, except that you are surrounded by blue-white cold energy and the spell affects cold creatures and spells rather than evil ones.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-dispel-evil",
    "name": "Infusion of Dispel Evil",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Dispel Evil spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Grants +4 AC and automatic dispel of evil enchantments on touch; also dismisses evil outsiders.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-dispel-fire",
    "name": "Infusion of Dispel Fire",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Dispel Fire spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Functions as dispel evil, except that you are surrounded by flames and the spell affects fire creatures and spells rather than evil ones.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-dispel-good",
    "name": "Infusion of Dispel Good",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Dispel Good spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Grants +4 AC and automatic dispel of good enchantments on touch; also dismisses good outsiders.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-dispel-law",
    "name": "Infusion of Dispel Law",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Dispel Law spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Grants +4 AC and automatic dispel of lawful enchantments on touch; also dismisses lawful outsiders.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-dispel-magic",
    "name": "Infusion of Dispel Magic",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Dispel Magic spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Ends ongoing spells on a target or area with a dispel check (1d20 + caster level, max +10).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-dispel-magic-greater",
    "name": "Infusion of Dispel Magic, Greater",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Dispel Magic, Greater spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As dispel magic, but the dispel check caps at +20 and a targeted dispel strips every spell on the target.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-dispel-possession",
    "name": "Infusion of Dispel Possession",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Dispel Possession spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You force a being that is possessing a creature out of its host body, as if it had left voluntarily.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-dispel-ward",
    "name": "Infusion of Dispel Ward",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Dispel Ward spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Dispels a ward, glyph, symbol, or abjuration trap in an area without affecting other magic.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-dispel-water",
    "name": "Infusion of Dispel Water",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Dispel Water spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You call on the power of the waste to dry up a body of water, counter a water-based spell or effect, or dismiss a water creature.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-disrupt-ectoplasm",
    "name": "Infusion of Disrupt Ectoplasm",
    "category": "potion",
    "cost": "25 gp",
    "summary": "A specially treated herb infused with the Disrupt Ectoplasm spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You direct a ray of energy that damages ectoplasm: on a successful ranged touch attack, a ghost or ectoplasmic object takes 1d6 points of damage that bypasses hardness.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-disrupting-weapon",
    "name": "Infusion of Disrupting Weapon",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Disrupting Weapon spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A melee weapon can destroy undead it hits: undead with HD no greater than your caster level must save or be destroyed.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-distort-weapon",
    "name": "Infusion of Distort Weapon",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Distort Weapon spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Makes a weapon strike true against good foes: critical threats against good creatures are automatically confirmed, and the weapon harms good creatures with damage reduction as if +1.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-divination",
    "name": "Infusion of Divination",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Divination spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A deity or agent gives a short, useful piece of advice about a specific goal or event within a week (70% + 1%/level accuracy).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-divine-agility",
    "name": "Infusion of Divine Agility",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Divine Agility spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject gains a +4 Dexterity bonus and the Spring Attack benefits briefly.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-divine-favor",
    "name": "Infusion of Divine Favor",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Divine Favor spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Grants you a luck bonus on attack and weapon damage rolls, +1 per three caster levels (max +6).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-divine-insight",
    "name": "Infusion of Divine Insight",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Divine Insight spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain a large insight bonus (+5 plus level, max +15) to a single skill check, discharged when used.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-divine-interdiction",
    "name": "Infusion of Divine Interdiction",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Divine Interdiction spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Suppresses a cleric's connection to its deity in an area: divine casters cannot regain or cast spells there.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-divine-knowledge",
    "name": "Infusion of Divine Knowledge",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Divine Knowledge spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. By calling forth the knowledge of your faith, you gain a +20 insight bonus on one Knowledge (religion) check.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-divine-power",
    "name": "Infusion of Divine Power",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Divine Power spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain the attack bonus of a fighter, +6 Str enhancement, and 1 temporary hp per level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-divine-presence",
    "name": "Infusion of Divine Presence",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Divine Presence spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You channel a spark of the divine, gaining a +5 sacred or profane bonus on Intimidate checks.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-divine-protection",
    "name": "Infusion of Divine Protection",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Divine Protection spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject gains a +1 deflection bonus to AC and a +1 resistance bonus on saves, scaling with level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-divine-retaliation",
    "name": "Infusion of Divine Retaliation",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Divine Retaliation spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A spectral weapon of force that mimics your deity's favored weapon appears beside you. Any time you are struck for damage by a melee attack, the weapon strikes back at your foe: its base attack bonus equals your caster level + your Strength modifier or Wisdom modifier (your choice), it deals damage as your deity's favored weapon of your size, and it gains a bonus on damage rolls equal to 1-1/2 times the chosen modifier. There is no limit to the number of attacks the weapon can make in the round.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-divine-retribution",
    "name": "Infusion of Divine Retribution",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Divine Retribution spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. For the duration, any creature that attacks you — with a physical attack, a spell, or by other means — is struck by a retributive effect immediately after you are affected.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-divine-sacrifice",
    "name": "Infusion of Divine Sacrifice",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Divine Sacrifice spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You sacrifice your own hit points to add sacred damage to your next attack.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-dominate-animal",
    "name": "Infusion of Dominate Animal",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Dominate Animal spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Telepathically control one animal, which obeys all but suicidal orders.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-doom",
    "name": "Infusion of Doom",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Doom spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. One creature becomes shaken (-2 attacks, saves, and checks).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-doomtide",
    "name": "Infusion of Doomtide",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Doomtide spell (Illusion); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Mists of doom fill an area: creatures inside are shadowed, take penalties, and are haunted by illusory doom.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-downdraft",
    "name": "Infusion of Downdraft",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Downdraft spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A column of rushing air forces flying creatures downward and can drive them to the ground.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-draconic-might",
    "name": "Infusion of Draconic Might",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Draconic Might spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject gains dragonlike power: +4 Strength and Charisma, natural armor, and immunity to sleep and paralysis.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-dragon-breath",
    "name": "Infusion of Dragon Breath",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Dragon Breath spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain a dragon's breath weapon for one breath: a cone or line of energy based on a chosen dragon type.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-drifts-of-the-shalm",
    "name": "Infusion of Drifts of the Shalm",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Drifts of the Shalm spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You create drifts of snow, leaves, or ash 3 feet thick; entering a drift-covered square costs 2 squares of movement. A snow drift deals 3 points of cold damage each round to anyone within it; a leaf drift instantly ignites if any part of it touches fire, dealing 2d6 points of fire damage to anyone in the inferno; an ash drift deals 3 points of fire damage each round to anyone moving through or located in it.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-drown",
    "name": "Infusion of Drown",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Drown spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Water fills the subject's lungs: it begins drowning unless it makes Fortitude saves, coughing water out on success.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-drown-mass",
    "name": "Infusion of Drown, Mass",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Drown, Mass spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As drown, affecting multiple creatures.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-drug-resistance",
    "name": "Infusion of Drug Resistance",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Drug Resistance spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The creature touched cannot become addicted to drugs for the duration, though it still feels a drug’s effects; it does not cure an addiction already incurred.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-eagles-splendor",
    "name": "Infusion of Eagle's Splendor",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Eagle's Splendor spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Grants a +4 enhancement bonus to Charisma.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-eagles-splendor-mass",
    "name": "Infusion of Eagle's Splendor, Mass",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Eagle's Splendor, Mass spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As eagle's splendor (+4 Charisma), but affects one creature per level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-early-twilight",
    "name": "Infusion of Early Twilight",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Early Twilight spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. This spell suppresses light in its area, reducing the illumination by one category (from bright light to shadowy, or from shadowy to darkness).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-earth-reaver",
    "name": "Infusion of Earth Reaver",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Earth Reaver spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The ground erupts in a wide area, dealing damage and knocking creatures prone amid exploding earth.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-earthbind",
    "name": "Infusion of Earthbind",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Earthbind spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Strips a creature's ability to fly, bringing it gently or forcibly to the ground.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-earthen-grace",
    "name": "Infusion of Earthen Grace",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Earthen Grace spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain damage reduction against physical attacks while standing on earth or stone — in practice, DR 5/- briefly from earthen resilience.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-earthfast",
    "name": "Infusion of Earthfast",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Earthfast spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Strengthens a stone or earthen structure, doubling its hardness and hit points.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-earthquake",
    "name": "Infusion of Earthquake",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Earthquake spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. An intense tremor topples structures, opens fissures, and throws creatures prone for 5d6 damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-ease-of-breath",
    "name": "Infusion of Ease of Breath",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Ease of Breath spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Grants the target a +20 inherent bonus on Fortitude saves against altitude sickness and saves against fatigue from altitude or thin air.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-ease-pain",
    "name": "Infusion of Ease Pain",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Ease Pain spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Immediately removes any lingering effects of pain, including penalties imposed by symbol of pain and similar spells; it does not heal damage or other effects, and pain from continuing-damage effects is eased only for a moment.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-easy-climb",
    "name": "Infusion of Easy Climb",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Easy Climb spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject climbs at full speed without penalty and gains a bonus on Climb checks.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-easy-trail",
    "name": "Infusion of Easy Trail",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Easy Trail spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You and companions move through wilderness terrain without leaving tracks and ignore undergrowth penalties.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-ebon-eyes",
    "name": "Infusion of Ebon Eyes",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Ebon Eyes spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You can see normally in darkness, even magical darkness, for the duration.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-echo-skull",
    "name": "Infusion of Echo Skull",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Echo Skull spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A skull enchanted to record sounds replays everything said near a location, reporting conversations to you.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-elation",
    "name": "Infusion of Elation",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Elation spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your allies become elated and energetic: a +2 morale bonus to effective Strength and Dexterity and a +5-foot increase to speed; the spell offsets most penalties of fatigue without removing the fatigued condition.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-elemental-swarm",
    "name": "Infusion of Elemental Swarm",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Elemental Swarm spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Summons a succession of elementals of one type (air, earth, fire, or water) over the duration, up to a large host.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-embrace-the-dark-chaos",
    "name": "Infusion of Embrace the Dark Chaos",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Embrace the Dark Chaos spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You infuse the creature touched with raw chaos channeled from the Abyss: the subject immediately gains one Abyssal heritor feat, as the text describes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-embrace-the-wild",
    "name": "Infusion of Embrace The Wild",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Embrace The Wild spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain an animal's senses: low-light vision, scent, and bonuses to Listen and Spot.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-end-to-strife",
    "name": "Infusion of End to Strife",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the End to Strife spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. An invisible aura of divine power surrounds you, and every intelligent creature in the area becomes aware that hostile action will be punished: any creature in the area that makes an attack takes 20d6 points of damage (lethal or nonlethal, chosen when cast).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-endure-elements",
    "name": "Infusion of Endure Elements",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Endure Elements spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Touched creature suffers no harm from hot or cold environments between -50 and 140 degrees.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-energetic-healing",
    "name": "Infusion of Energetic Healing",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Energetic Healing spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The target is rendered immune to one energy type you choose (acid, cold, electricity, fire, or sonic), and whenever it would take magical damage of that type, it instead heals hit points equal to 10% of the damage dealt.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-energize-potion",
    "name": "Infusion of Energize Potion",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Energize Potion spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Transforms a magic potion into a volatile substance that can be hurled to the spell's range, destroying the potion and releasing a 10-foot-radius burst that deals 1d6 points of damage per spell level of the potion, of an energy type chosen when the spell is cast.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-energized-shield",
    "name": "Infusion of Energized Shield",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Energized Shield spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A shield gains resistance to a chosen energy type and splashes that energy on bash attacks.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-energized-shield-lesser",
    "name": "Infusion of Energized Shield, Lesser",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Energized Shield, Lesser spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As energized shield, but a smaller energy resistance.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-energy-aegis",
    "name": "Infusion of Energy Aegis",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Energy Aegis spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. When you cast this spell, specify an energy type (acid, cold, electricity, fire, or sonic): against the next attack using that energy type that targets the subject, the subject gains resistance 20.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-energy-drain",
    "name": "Infusion of Energy Drain",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Energy Drain spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A black ray bestows 2d4 negative levels on the target.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-energy-ebb",
    "name": "Infusion of Energy Ebb",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Energy Ebb spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject loses energy protection and takes energy damage over time as its resistances ebb away.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-energy-immunity",
    "name": "Infusion of Energy Immunity",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Energy Immunity spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject becomes completely immune to one chosen energy type for a day.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-energy-vortex",
    "name": "Infusion of Energy Vortex",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Energy Vortex spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Choose an energy type: a vortex of it damages creatures nearby and empowers matching spells cast near it.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-energy-vulnerability",
    "name": "Infusion of Energy Vulnerability",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Energy Vulnerability spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You can affect a number of creatures with total Hit Dice equal to twice your caster level or lower, selecting which creatures are affected: the subjects gain vulnerability to the energy type (acid, cold, electricity, fire, or sonic) you specify when casting.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-enhance-wild-shape",
    "name": "Infusion of Enhance Wild Shape",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Enhance Wild Shape spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. While wild shaped you gain the extraordinary qualities of the form and can use its supernatural abilities once.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-enhanced-shifting",
    "name": "Infusion of Enhanced Shifting",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Enhanced Shifting spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You use divine energy to enhance the power of your shifting ability; this spell functions only if cast while you are shifting, and lasts until your shifting ends.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-enrage-animal",
    "name": "Infusion of Enrage Animal",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Enrage Animal spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. An animal flies into a rage, gaining Strength and Constitution but attacking the nearest creature.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-entangle",
    "name": "Infusion of Entangle",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Entangle spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Plants in the area wrap around creatures, entangling them and hindering movement.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-entangling-staff",
    "name": "Infusion of Entangling Staff",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Entangling Staff spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A staff you hold can entangle creatures it strikes, rooting them in place.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-enthrall",
    "name": "Infusion of Enthrall",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Enthrall spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Captivates listeners with oratory or music so they do nothing while you speak or sing.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-entomb",
    "name": "Infusion of Entomb",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Entomb spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Traps living creatures in a block of ice, suffocating them; a successful Fortitude save shakes off the ice but still takes 6d6 points of cold damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-entropic-shield",
    "name": "Infusion of Entropic Shield",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Entropic Shield spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A shimmering field gives ranged attacks against you a 20% miss chance.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-enveloping-cocoon",
    "name": "Infusion of Enveloping Cocoon",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Enveloping Cocoon spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A cocoon of energy encases the subject, protecting it from harm but preventing action — used to preserve a dying ally.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-essence-of-the-raptor",
    "name": "Infusion of Essence Of The Raptor",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Essence Of The Raptor spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain a raptor's speed, senses, and talons: bonuses to movement, Spot, and natural attacks.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-estannas-stew",
    "name": "Infusion of Estanna's Stew",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Estanna's Stew spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Calls on Estanna to fill a specially crafted stewpot you hold with a potent healing stew — one serving per two caster levels (maximum 5 servings); a serving eaten as a standard action heals 1d6+1 points of damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-ethereal-alarm",
    "name": "Infusion of Ethereal Alarm",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Ethereal Alarm spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As alarm, but detecting only ethereal creatures that enter the warded area; the spell does not let you see them once the alarm is triggered.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-evards-menacing-tentacles",
    "name": "Infusion of Evard's Menacing Tentacles",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Evard's Menacing Tentacles spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Two black tentacles sprout from your shoulder blades, each with 10-foot reach. Each round as a free action, starting on the turn you cast the spell, you can direct each tentacle to attack one opponent within reach; the tentacles use your base attack bonus and Strength score, and each deals bludgeoning damage equal to 1d8 points + your Strength modifier. The tentacles threaten the area within their reach and each can make one attack of opportunity per round, and they grant you a +4 bonus on Climb checks.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-evergreen",
    "name": "Infusion of Evergreen",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Evergreen spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Imbues a 10-foot-radius area of plant life with magical heat, healing 1d8 points of damage +1 per caster level (maximum +10).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-evil-glare",
    "name": "Infusion of Evil Glare",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Evil Glare spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your baleful gaze paralyzes good creatures with fear when they meet your eyes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-exacting-shot",
    "name": "Infusion of Exacting Shot",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Exacting Shot spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your ranged attacks ignore concealment (short of total) and cover bonuses of targets for the duration.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-execration",
    "name": "Infusion of Execration",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Execration spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. With a touch, you channel your deity's wrath and impose a -2 penalty on all of another creature's saving throws; the subject can end the effect early at a price.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-exorcism",
    "name": "Infusion of Exorcism",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Exorcism spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You force your will against that of a possessing fiend, trying to drive it from the body of the creature before you, as the text describes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-extend-shifting",
    "name": "Infusion of Extend Shifting",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Extend Shifting spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Cast while shifting, this spell magically extends the duration of that use of your shifting ability by 4 rounds; when it ends, you become fatigued for 10 minutes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-extend-tentacles",
    "name": "Infusion of Extend Tentacles",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Extend Tentacles spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Tentacles you possess grow longer, gaining reach for grapples and attacks.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-extract-drug",
    "name": "Infusion of Extract Drug",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Extract Drug spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Creates a magical version of a drug from a substance used as the focus; the resulting fumes must be inhaled within 1 round to gain the drug’s effects.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-extract-gift",
    "name": "Infusion of Extract Gift",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Extract Gift spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. After an hour-long ritual, you pull a gift from a demon standing in one magic circle and bestow it upon a willing subject in another, as the text describes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-extract-water-elemental",
    "name": "Infusion of Extract Water Elemental",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Extract Water Elemental spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You rip the water from a creature's body, dealing massive damage and forming a water elemental from it.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-eye-of-the-hurricane",
    "name": "Infusion of Eye Of The Hurricane",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Eye Of The Hurricane spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Creates a calm, protected zone at the center of stormy weather where you can shelter.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-eyes-of-the-avoral",
    "name": "Infusion of Eyes of the Avoral",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Eyes of the Avoral spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject gains an avoral's sharp eyesight: a +8 racial bonus on Spot checks for the duration.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-eyes-of-the-oracle",
    "name": "Infusion of Eyes of the Oracle",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Eyes of the Oracle spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You can see slightly into the future, anticipating your foes' motions; translucent shadows of your form move just out of sync with your body.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-eyes-of-the-zombie",
    "name": "Infusion of Eyes of the Zombie",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Eyes of the Zombie spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The caster swaps his eyes for those of a zombie he animated, seeing through its sockets and controlling its actions directly.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-faerie-fire",
    "name": "Infusion of Faerie Fire",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Faerie Fire spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Outlines subjects with a pale glow, negating concealment, blur, and invisibility benefits.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-faith-healing",
    "name": "Infusion of Faith Healing",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Faith Healing spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Heals a small amount of damage, but much more if the subject shares your faith and alignment.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-false-sending",
    "name": "Infusion of False Sending",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the False Sending spell (Illusion); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Works as sending, but the subject is convinced the message came from someone else the caster names and is familiar with.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-fangs-of-the-vampire-king",
    "name": "Infusion of Fangs Of The Vampire King",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Fangs Of The Vampire King spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain a vampire's bite: a natural attack that deals damage and drains blood for Constitution damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-favor-of-the-martyr",
    "name": "Infusion of Favor Of The Martyr",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Favor Of The Martyr spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You absorb the subject's suffering: conditions and damage transfer to you while the subject fights on, and you gain protective bonuses.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-favorable-sacrifice",
    "name": "Infusion of Favorable Sacrifice",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Favorable Sacrifice spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. By sacrificing material wealth at casting, you gain damage reduction and energy resistances for a day.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-feast-of-champions",
    "name": "Infusion of Feast of Champions",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Feast of Champions spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You bring forth a magnificent feast, including a grand table, chairs, service, and food and drink; the feast takes 1 hour to consume, and the beneficial effects do not set in until it is finished.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-fell-the-greatest-foe",
    "name": "Infusion of Fell The Greatest Foe",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Fell The Greatest Foe spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your weapon deals extra damage against the largest and strongest enemies, scaling against bigger foes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-fiendish-clarity",
    "name": "Infusion of Fiendish Clarity",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Fiendish Clarity spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The caster gains a powerful fiend’s senses: darkvision 60 feet, sight through magical darkness, see invisibility, and detect good at will.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-fierce-pride-of-the-beastlands",
    "name": "Infusion of Fierce Pride Of The Beastlands",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Fierce Pride Of The Beastlands spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Calls powerful celestial animals of the Beastlands to fight for you.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-fimbulwinter",
    "name": "Infusion of Fimbulwinter",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Fimbulwinter spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Changes the weather to permanent winter, or strengthens existing winter conditions, over a vast area for a long duration.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-find-temple",
    "name": "Infusion of Find Temple",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Find Temple spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You learn the direction and distance to the nearest temple or shrine of your deity.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-find-the-gap",
    "name": "Infusion of Find The Gap",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Find The Gap spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your attacks find the chinks: your first attack each round ignores armor and natural armor bonuses (touch-like).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-find-the-path",
    "name": "Infusion of Find the Path",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Find the Path spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject senses the most direct physical route to a chosen destination, indoors or out.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-find-traps",
    "name": "Infusion of Find Traps",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Find Traps spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You notice traps as a rogue does, gaining an insight bonus on Search checks to find traps equal to half your caster level (max +10).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-finger-of-death",
    "name": "Infusion of Finger of Death",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Finger of Death spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Slays the subject; on a successful save it takes 3d6 + 1/level damage instead.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-fins-to-feet",
    "name": "Infusion of Fins To Feet",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Fins To Feet spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Transforms a creature's fins or tail into legs so it can walk on land.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-fire-seeds",
    "name": "Infusion of Fire Seeds",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Fire Seeds spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Turns acorns into grenades (1d8/level split) or holly berries into bombs (1d8 damage each).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-fire-storm",
    "name": "Infusion of Fire Storm",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Fire Storm spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The whole area bursts into roaring flame for 1d6/level damage; you may leave cubes unaffected.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-fire-trap",
    "name": "Infusion of Fire Trap",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Fire Trap spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Traps an object so opening it bursts fire dealing 1d4 + 1/level damage around it.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-fire-wings",
    "name": "Infusion of Fire Wings",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Fire Wings spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Wings of flame give you a fly speed and shed burning sparks on creatures below.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-fires-of-purity",
    "name": "Infusion of Fires Of Purity",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Fires Of Purity spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject is wreathed in purifying flame: fire resistance, light, and its weapons deal extra fire damage to evil and undead.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-fireward",
    "name": "Infusion of Fireward",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Fireward spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Creatures you designate within an area become immune to a specific fire source or fire spell effect.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-flame-blade",
    "name": "Infusion of Flame Blade",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Flame Blade spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A blade of fire springs from your hand, dealing 1d8+1/level (max +10) damage on melee touch attacks.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-flame-of-faith",
    "name": "Infusion of Flame Of Faith",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Flame Of Faith spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your weapon bursts into sacred flame, dealing extra fire damage and counting as good-aligned.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-flame-strike",
    "name": "Infusion of Flame Strike",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Flame Strike spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A column of divine flame deals 1d6/level damage (max 15d6), half fire and half divine.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-flaming-sphere",
    "name": "Infusion of Flaming Sphere",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Flaming Sphere spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Creates a rolling sphere of fire you direct, dealing 2d6 fire damage to creatures it touches.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-flare",
    "name": "Infusion of Flare",
    "category": "potion",
    "cost": "25 gp",
    "summary": "A specially treated herb infused with the Flare spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A burst of light dazzles one creature (-1 on attacks) if it fails its save.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-flash-freeze",
    "name": "Infusion of Flash-Freeze",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Flash-Freeze spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Drains the heat from earth, stone, and water in a 10-foot-square area: earth and stone become everfrost and water freezes solid.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-flashflood",
    "name": "Infusion of Flashflood",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Flashflood spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You create a roaring wall of water 10 feet high that surges forward from where you stand, sweeping away or smashing down nearly everything in its path.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-flaywind-burst",
    "name": "Infusion of Flaywind Burst",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Flaywind Burst spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A brief windstorm filled with scouring supernatural grit strips flesh, dealing 1d6 points of damage per caster level (maximum 10d6) in addition to the wind's effects.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-flesh-ripper",
    "name": "Infusion of Flesh Ripper",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Flesh Ripper spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A black claw of evil power flies at the target: on a successful ranged touch attack it deals 1d8 damage per caster level (maximum 10d8), and critical hits leave a bleeding wound.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-flesh-to-salt",
    "name": "Infusion of Flesh to Salt",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Flesh to Salt spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You call forth the essence of salt in the target, dealing dessication damage; a target that loses more than half its current hit points must save or crystallize completely into salt.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-flesh-to-salt-mass",
    "name": "Infusion of Flesh to Salt, Mass",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Flesh to Salt, Mass spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Functions as flesh to salt, except that it affects multiple creatures — one additional creature per four caster levels, to a maximum of five.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-fly-swift",
    "name": "Infusion of Fly, Swift",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Fly, Swift spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As fly, cast as a swift action but lasting only 1 round.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-foebane",
    "name": "Infusion of Foebane",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Foebane spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your weapon becomes a bane weapon against your favored enemy, dealing extra damage and gaining enhancement against it.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-fog-cloud",
    "name": "Infusion of Fog Cloud",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Fog Cloud spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A fog bank grants concealment; total concealment beyond 5 feet.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-footsteps-of-the-divine",
    "name": "Infusion of Footsteps of the Divine",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Footsteps of the Divine spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You briefly acquire a new movement mode and speed based on your deity, as given in the spell's table.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-forbiddance",
    "name": "Infusion of Forbiddance",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Forbiddance spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Seals an area against planar travel into or out of it, and deals damage to creatures entering whose alignment differs from the caster's, as printed. Material components include holy water and incense worth 1,500 gp, plus further cost by alignment match as printed.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-forced-incorporeality",
    "name": "Infusion of Forced Incorporeality",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Forced Incorporeality spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The target ghost or naturally incorporeal undead is enveloped in an orange haze that forces it to be incorporeal for the duration. This spell counters and dispels forced manifestation.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-forced-manifestation",
    "name": "Infusion of Forced Manifestation",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Forced Manifestation spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The target ghost or naturally incorporeal undead is enveloped in a violet haze that forces it to manifest fully for the duration. This spell counters and dispels forced incorporeality.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-foresight",
    "name": "Infusion of Foresight",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Foresight spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Warns you of impending danger: never surprised or flat-footed, +2 insight to AC and Reflex saves.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-forest-child",
    "name": "Infusion of Forest Child",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Forest Child spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You draw forth a humanoid wooden duplicate of yourself from the wood of a tree at least one size category larger than you.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-forest-eyes",
    "name": "Infusion of Forest Eyes",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Forest Eyes spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You touch a normal Medium or larger plant or tree and immediately see the surroundings of another plant or tree of the same kind that you designate, regardless of distance.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-forest-voice",
    "name": "Infusion of Forest Voice",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Forest Voice spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You touch a plant or tree and can carry on a conversation with anyone within 10 feet of another plant or tree of the same kind that you designate.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-forestfold",
    "name": "Infusion of Forestfold",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Forestfold spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You blend into the forest, gaining camouflage and bonuses to Hide while among trees, and can step between trees.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-fortify-cold-creatures",
    "name": "Infusion of Fortify Cold Creatures",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Fortify Cold Creatures spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Creatures with the cold subtype gain a +1 sacred bonus on attack rolls and on saving throws against fire effects.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-fortunate-fate",
    "name": "Infusion of Fortunate Fate",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Fortunate Fate spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Contingency-like protection: when the subject would be killed, a heal spell triggers automatically to save it.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-foundation-of-stone",
    "name": "Infusion of Foundation Of Stone",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Foundation Of Stone spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. While standing on earth or stone and not moving, you gain +1 AC and +2 on saves and stability checks, like a dwarf's stance.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-freedom-of-breath",
    "name": "Infusion of Freedom of Breath",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Freedom of Breath spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject can breathe freely in conditions that ordinarily inhibit respiration, such as sandstorms, and need not check to avoid suffocation while any breathable substance is available.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-freedom-of-movement",
    "name": "Infusion of Freedom of Movement",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Freedom of Movement spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Subject moves and attacks normally even under paralysis, grapples, underwater, or magical restraint.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-freeze",
    "name": "Infusion of Freeze",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Freeze spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Freezes a body of water solid over a large area, trapping creatures in the ice.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-freeze-armor",
    "name": "Infusion of Freeze Armor",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Freeze Armor spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Locks suits of metal armor and equipment in ice and extreme cold, immobilizing and damaging their wearers.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-frost-breath",
    "name": "Infusion of Frost Breath",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Frost Breath spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A cone of cold deals 1d4 cold damage per level (max 5d4) and can daze.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-frost-weapon",
    "name": "Infusion of Frost Weapon",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Frost Weapon spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Imbues a weapon with icy cold like the frost special ability, dealing an extra 1d6 points of cold damage on a successful hit.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-frostbite",
    "name": "Infusion of Frostbite",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Frostbite spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Chills the air and frosts the targets’ skin: those who fail their Fortitude save take 6d6 points of cold damage and 2d6 points of Dexterity damage, freezing solid at 0 Dexterity.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-frostburn",
    "name": "Infusion of Frostburn",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Frostburn spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Functions as lesser frostburn, except that it deals 3d12 points of frostburn damage +1 point per caster level (maximum +20).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-frostburn-lesser",
    "name": "Infusion of Frostburn, Lesser",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Frostburn, Lesser spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your touch channels cold energy dealing 1d12 points of frostburn damage +1 point per caster level (maximum +5); on a cold subtype creature it heals instead.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-frostburn-mass",
    "name": "Infusion of Frostburn, Mass",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Frostburn, Mass spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Cold energy spreads from the point of origin, dealing 3d12 points of frostburn damage +1 per caster level (maximum +20) to nearby enemies, and curing cold subtype creatures instead.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-frostfell",
    "name": "Infusion of Frostfell",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Frostfell spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The designated area becomes frigid and icy, dropping the temperature by 3 bands; water turns to ice and earth and stone become everfrost to a depth of 10 feet per caster level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-furnace-within",
    "name": "Infusion of Furnace Within",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Furnace Within spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You erupt with the fiery heart of the mountains: a burst centered on you deals fire damage to those around you, as the text describes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-fuse-arms",
    "name": "Infusion of Fuse Arms",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Fuse Arms spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Two of your arms fuse together, granting a large Strength bonus with the merged limbs.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-fuse-sand",
    "name": "Infusion of Fuse Sand",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Fuse Sand spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Normal sand melts slightly and sticks together into a soft, porous building material; creatures in the sand may save to escape before it hardens, or be trapped.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-geas-quest",
    "name": "Infusion of Geas/Quest",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Geas/Quest spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Compels any creature to follow an instruction; disobedience saps its ability scores daily.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-general-of-undeath",
    "name": "Infusion of General Of Undeath",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the General Of Undeath spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You massively increase the number of undead you can control, adding to your HD control limit.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-gentle-repose",
    "name": "Infusion of Gentle Repose",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Gentle Repose spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Preserves a corpse so it doesn't decay and extends the time limit for raising it.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-ghost-bane-weapon",
    "name": "Infusion of Ghost Bane Weapon",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Ghost Bane Weapon spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You give a weapon the ghost bane property in addition to any other properties it has.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-ghost-companion",
    "name": "Infusion of Ghost Companion",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Ghost Companion spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The touched willing animal, beast, or magical beast dies painlessly; instead of passing beyond the Veil of Souls, its soul remains on the Ethereal Plane and attempts to enter the Material Plane as a ghost.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-ghost-lock",
    "name": "Infusion of Ghost Lock",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Ghost Lock spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. If the willing nonhumanoid subject dies while this spell is in effect, its soul does not immediately enter the realm of the dead and can instead attempt to enter the Material Plane as a ghost.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-ghost-sound",
    "name": "Infusion of Ghost Sound",
    "category": "potion",
    "cost": "25 gp",
    "summary": "A specially treated herb infused with the Ghost Sound spell (Illusion); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Creates illusory sounds as loud as up to four people per level, anywhere in range.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-ghost-touch-armor",
    "name": "Infusion of Ghost Touch Armor",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Ghost Touch Armor spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Armor gains the ghost touch property, counting fully against incorporeal attacks.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-ghost-touch-weapon",
    "name": "Infusion of Ghost Touch Weapon",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Ghost Touch Weapon spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A weapon gains the ghost touch property, striking incorporeal creatures normally.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-ghost-trap",
    "name": "Infusion of Ghost Trap",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Ghost Trap spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A warded area forces incorporeal creatures to manifest corporeally, trapping them in solid form.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-ghost-venom",
    "name": "Infusion of Ghost Venom",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Ghost Venom spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As poison, except the poison affects only ghosts and other ectoplasmic creatures.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-giant-vermin",
    "name": "Infusion of Giant Vermin",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Giant Vermin spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Enlarges ordinary centipedes, scorpions, or spiders into giant versions under your control.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-giants-wrath",
    "name": "Infusion of Giant’S Wrath",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Giant’S Wrath spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You hurl boulders with giant-like strength, dealing heavy damage with thrown rocks.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-girallons-blessing",
    "name": "Infusion of Girallon’S Blessing",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Girallon’S Blessing spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject grows two extra arms ending in claws, like a girallon, usable for attacks.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-glacial-globe-of-invulnerability",
    "name": "Infusion of Glacial Globe of Invulnerability",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Glacial Globe of Invulnerability spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A frosty sphere surrounds you and excludes fire spells and spell-like abilities of 3rd level or lower, as globe of invulnerability but only for fire spells; its opaqueness also grants concealment.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-glacier",
    "name": "Infusion of Glacier",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Glacier spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Brings into existence animated 20-foot cubes of glacial ice, one per two caster levels (maximum ten), placed on horizontal surfaces.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-glory-of-the-martyr",
    "name": "Infusion of Glory of the Martyr",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Glory of the Martyr spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Like shield other, but wards multiple subjects at once: each subject gains a +1 deflection bonus to AC and a +1 resistance bonus on saves, takes only half damage from all wounds and attacks that deal hit point damage, and the remaining half is taken by you.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-glowing-orb",
    "name": "Infusion of Glowing Orb",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Glowing Orb spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Creates an orb of light you can move, brightening or dimming on command and blinding if focused.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-glyph-of-turning",
    "name": "Infusion of Glyph of Turning",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Glyph of Turning spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As glyph of warding, except that instead of a spell effect or a blast of energy, the glyph unleashes a burst of positive or negative energy, depending on whether you channel positive or negative energy.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-glyph-of-warding",
    "name": "Infusion of Glyph of Warding",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Glyph of Warding spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Inscribes a ward that triggers a blast (1d8/2 levels) or a spell of 3rd level or lower when an intruder passes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-glyph-of-warding-greater",
    "name": "Infusion of Glyph of Warding, Greater",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Glyph of Warding, Greater spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As glyph of warding, but the blast deals up to 10d8 damage or you store a spell of up to 6th level in the glyph.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-golden-barding",
    "name": "Infusion of Golden Barding",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Golden Barding spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Magical golden barding armors your mount with a strong armor bonus.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-golem-immunity",
    "name": "Infusion of Golem Immunity",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Golem Immunity spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The construct touched gains the magic immunity special quality of a particular golem, chosen at the time of casting.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-goodberry",
    "name": "Infusion of Goodberry",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Goodberry spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Enchants fresh berries so each cures 1 point of damage when eaten (max 8 points per creature in 24 hours) and nourishes like a meal.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-grace",
    "name": "Infusion of Grace",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Grace spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject gains a +2 Dexterity bonus and moves gracefully, ignoring some difficult terrain and gaining tumbling benefits.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-grave-strike",
    "name": "Infusion of Grave Strike",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Grave Strike spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. For one round you can sneak attack undead as if they were living.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-greater-status",
    "name": "Infusion of Greater Status",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Greater Status spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As status, but you can also cast a limited selection of spells through the link as if you were touching the target: spells of 0th, 1st, or 2nd level with range Touch, a creature target, and a harmless saving throw.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-guidance",
    "name": "Infusion of Guidance",
    "category": "potion",
    "cost": "25 gp",
    "summary": "A specially treated herb infused with the Guidance spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Touched creature gains a +1 competence bonus on one attack roll, save, or skill check.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-guided-shot",
    "name": "Infusion of Guided Shot",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Guided Shot spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your next ranged attack ignores range increments, cover, and concealment penalties.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-guiding-light",
    "name": "Infusion of Guiding Light",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Guiding Light spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A beam of light marks a target, granting allies bonuses to hit it and illuminating it clearly.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-gust-of-wind",
    "name": "Infusion of Gust of Wind",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Gust of Wind spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A line of severe wind knocks down small creatures and blows away gases and smaller foes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-haboob",
    "name": "Infusion of Haboob",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Haboob spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A thick haze of swirling dust and sand obscures all sight beyond 5 feet, grants concealment nearby and total concealment farther away, and extinguishes unprotected flames.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-hallow",
    "name": "Infusion of Hallow",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Hallow spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Designates a site as holy: it blocks undead and evil summoned creatures, protects against mental control, and can carry one attached beneficial spell.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-halo-of-sand",
    "name": "Infusion of Halo of Sand",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Halo of Sand spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A thin band of sand swirls around your body, granting a +1 deflection bonus to AC that grows with caster level to a maximum of +4.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-hamatula-barbs",
    "name": "Infusion of Hamatula Barbs",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Hamatula Barbs spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Barbs like a barbed devil's grow from your skin: grapplers take damage and your natural attacks worsen wounds.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-hand-of-divinity",
    "name": "Infusion of Hand Of Divinity",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Hand Of Divinity spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A divine hand grants the subject a +2 sacred (or profane) bonus on saving throws.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-hand-of-the-faithful",
    "name": "Infusion of Hand Of The Faithful",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Hand Of The Faithful spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A spectral hand blocks a doorway, preventing those of other faiths from passing.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-hand-of-the-marksman",
    "name": "Infusion of Hand of the Marksman",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Hand of the Marksman spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain a limited precognition: your next ranged attack roll made with a firearm (if made before the end of the next round) automatically hits, as the text describes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-harm",
    "name": "Infusion of Harm",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Harm spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Deals 10 damage per caster level (max 150) and can reduce the target to no less than 1 hp; heals undead.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-harvester-of-death",
    "name": "Infusion of Harvester of Death",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Harvester of Death spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Fueled by the necromantic powers of death, you may make a coup de grace attack against a helpless defender as part of the casting, as the text describes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-haste-swift",
    "name": "Infusion of Haste, Swift",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Haste, Swift spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As haste on yourself only, cast as a swift action for 1 round.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-hawkeye",
    "name": "Infusion of Hawkeye",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Hawkeye spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain a +5 bonus on Spot checks and increase your ranged attack increments by half.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-haze-of-smoldering-stone",
    "name": "Infusion of Haze of Smoldering Stone",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Haze of Smoldering Stone spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You project hundreds of tiny, burning volcanic rocks outward, pummeling nearby foes with searing stone.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-heal",
    "name": "Infusion of Heal",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Heal spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Heals 10 damage per caster level (max 150) and removes most conditions: blinded, deafened, diseased, poisoned, nauseated, and more.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-heal-animal-companion",
    "name": "Infusion of Heal Animal Companion",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Heal Animal Companion spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As heal, but only for your animal companion.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-heal-mount",
    "name": "Infusion of Heal Mount",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Heal Mount spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Works like heal, but only on your special mount.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-heal-mass",
    "name": "Infusion of Heal, Mass",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Heal, Mass spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As heal (10 hp per level, max 250), applied to every selected creature.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-healing-circle",
    "name": "Infusion of Healing Circle",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Healing Circle spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You create an aura of healing energy with five charges: once per round, a single allied creature within 30 feet can drain one charge as a standard action to mend its own wounds.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-healing-lorecall",
    "name": "Infusion of Healing Lorecall",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Healing Lorecall spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You learn the subject's conditions precisely and can remove minor conditions (dazed, sickened, etc.) when you cast healing on it.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-healing-spirit",
    "name": "Infusion of Healing Spirit",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Healing Spirit spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You conjure an incorporeal 1-foot-diameter ball of light that flies at a speed of 30 feet with perfect maneuverability. In the round you cast the spell and once per round thereafter, you can direct the spirit to move and touch a creature: its touch heals a living creature of 1d8 points of damage. Undead are damaged instead of healed; against an unwilling target the spirit must succeed on an incorporeal touch attack, and the undead creature can use spell resistance and is allowed a Will save for half damage. If the spirit travels farther from you than the spell's range, it winks out and the spell ends.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-healing-sting",
    "name": "Infusion of Healing Sting",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Healing Sting spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your sting-like touch drains health from a creature and heals you for the same amount.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-healthful-rest",
    "name": "Infusion of Healthful Rest",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Healthful Rest spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Rest heals double: subjects regain hit points and ability damage at twice the normal rate for a day.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-heart-of-fire",
    "name": "Infusion of Heart of Fire",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Heart of Fire spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Part of your body becomes elemental fire: you gain a +10-foot enhancement bonus to land speed and fire resistance 20, and you can activate a fire shield effect while the spell lasts.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-heart-of-water",
    "name": "Infusion of Heart of Water",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Heart of Water spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Part of your body becomes elemental water: you gain a swim speed equal to your land speed and can slip through confined spaces like water.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-hearts-ease",
    "name": "Infusion of Heart's Ease",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Heart's Ease spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Cures emotional wounds as heal cures physical ones: subjects are freed of any fear effect, despair effect (such as crushing despair), or similar mind-affecting condition — though not charms or compulsions — and lingering psychological effects of torture are removed.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-heartache",
    "name": "Infusion of Heartache",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Heartache spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Fills the subject with heart-wrenching sorrow, rendering it helpless and unable to act for 1 round.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-heartclutch",
    "name": "Infusion of Heartclutch",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Heartclutch spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject’s still-beating heart appears in the caster’s hand: the subject dies in 1d3 rounds unless saved by powerful healing magic; a successful save means heavy damage instead.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-heartfire",
    "name": "Infusion of Heartfire",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Heartfire spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Inner fire outlines creatures in the area, revealing them and dealing minor fire damage to evil beings.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-heat-drain",
    "name": "Infusion of Heat Drain",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Heat Drain spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You drain the heat from a wide area, dealing cold damage and slowing creatures as warmth leaves them.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-heat-metal",
    "name": "Infusion of Heat Metal",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Heat Metal spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Heats metal equipment so it burns those wearing or holding it over 7 rounds.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-heatstroke",
    "name": "Infusion of Heatstroke",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Heatstroke spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject suffers heatstroke: exhaustion effects and nonlethal damage from oppressive inner heat.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-heavens-trumpet",
    "name": "Infusion of Heaven's Trumpet",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Heaven's Trumpet spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You produce a blast of music of utter clarity and paralyzing awe (focus: a masterwork trumpet you must blow): all foes within 120 feet must succeed on a Fortitude save or be paralyzed for 1d4 rounds.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-heavenly-host",
    "name": "Infusion of Heavenly Host",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Heavenly Host spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Calls an army of celestial archons and angels to fight for you over several rounds.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-hells-power",
    "name": "Infusion of Hell's Power",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Hell's Power spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The caster bathes himself in the power of the Nine Hells, gaining a +2 deflection bonus to Armor Class and improving his existing damage reduction by one step.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-hellish-horde",
    "name": "Infusion of Hellish Horde",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Hellish Horde spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Calls an army of devils and hellish creatures to fight for you over several rounds.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-helping-hand",
    "name": "Infusion of Helping Hand",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Helping Hand spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A ghostly hand seeks out a creature you name within range and beckons and guides it back to you, pointing the way.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-heroes-feast",
    "name": "Infusion of Heroes' Feast",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Heroes' Feast spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A grand feast cures disease and poison, grants 1d8+1/2 level temporary hp, and +1 morale on attacks and Will saves.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-hesitate",
    "name": "Infusion of Hesitate",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Hesitate spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You fill a subject with doubts, making it believe it is inferior to you: on a failed save, the subject can take no action other than a move action on its current turn. Each round, as a swift action at the start of its turn, the subject can attempt a new saving throw to end the effect, and can then act normally. If you attack the affected creature, the spell ends immediately. You must cast it at the start of your opponent's turn to gain the benefit.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-hibernal-healing",
    "name": "Infusion of Hibernal Healing",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Hibernal Healing spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You absorb slush, snow, and ice around you, channeling the cold energy to cure 10 points of damage per caster level (maximum 150), melting all snow and ice within 10 feet.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-hibernate",
    "name": "Infusion of Hibernate",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Hibernate spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Puts a creature into suspended animation, slowing its life functions so it can survive weeks without food or water; it also stabilizes a dying creature.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-hide-from-animals",
    "name": "Infusion of Hide from Animals",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Hide from Animals spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Animals cannot see, hear, or smell the protected creatures.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-hide-from-undead",
    "name": "Infusion of Hide from Undead",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Hide from Undead spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Undead cannot perceive the protected creatures by sight, hearing, or smell.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-hide-the-path",
    "name": "Infusion of Hide The Path",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Hide The Path spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Obscures a trail or path so completely that trackers and divination cannot follow it.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-hold-animal",
    "name": "Infusion of Hold Animal",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Hold Animal spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Paralyzes one animal for the duration.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-hold-person",
    "name": "Infusion of Hold Person",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Hold Person spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Paralyzes one humanoid for the duration.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-hold-person-or-ghost",
    "name": "Infusion of Hold Person or Ghost",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Hold Person or Ghost spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As hold person, except that it also affects ghosts.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-holy-aura",
    "name": "Infusion of Holy Aura",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Holy Aura spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A holy radiance grants +4 deflection AC, +4 saves, SR 25 vs evil spells, and blinds evil attackers.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-holy-mount",
    "name": "Infusion of Holy Mount",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Holy Mount spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your mount gains celestial vigor: speed, armor, and resistance bonuses and a good alignment aura.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-holy-spurs",
    "name": "Infusion of Holy Spurs",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Holy Spurs spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your spurs bless your mount, increasing its speed and granting you ride bonuses.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-holy-star",
    "name": "Infusion of Holy Star",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Holy Star spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A star of divine energy orbits you, granting protection and firing rays of holy power on command.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-holy-storm",
    "name": "Infusion of Holy Storm",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Holy Storm spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A storm of holy water rains down, damaging evil creatures and evil outsiders heavily in the area.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-holy-sword",
    "name": "Infusion of Holy Sword",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Holy Sword spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The weapon becomes +5, deals +2d6 damage against evil creatures, and projects a magic circle against evil; striking an evil creature can dispel its evil magic effects.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-holy-transformation",
    "name": "Infusion of Holy Transformation",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Holy Transformation spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You transform into a celestial being: wings, ability boosts, natural armor, and outsider traits.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-holy-transformation-lesser",
    "name": "Infusion of Holy Transformation, Lesser",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Holy Transformation, Lesser spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A partial celestial transformation: modest ability boosts, wings, and minor resistances.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-holy-word",
    "name": "Infusion of Holy Word",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Holy Word spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Nongood creatures are deafened, blinded, paralyzed, or killed and banished, by their HD relative to yours.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-horrible-taste",
    "name": "Infusion of Horrible Taste",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Horrible Taste spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject tastes utterly foul: creatures biting or swallowing it must save or become nauseated and spit it out.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-humanoid-essence",
    "name": "Infusion of Humanoid Essence",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Humanoid Essence spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As lesser humanoid essence, with additional effects: the construct becomes subject to critical hits, sneak attacks, nonlethal damage, stunning, ability damage, ability drain, and death effects, as the text describes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-humanoid-essence-greater",
    "name": "Infusion of Humanoid Essence, Greater",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Humanoid Essence, Greater spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As lesser humanoid essence, with additional effects: the target construct's type changes to humanoid, and it loses the living construct subtype if it has it.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-humanoid-essence-lesser",
    "name": "Infusion of Humanoid Essence, Lesser",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Humanoid Essence, Lesser spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The construct takes on more of the qualities of a living creature, gaining the full benefit of spells from the healing subschool, as the text describes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-hungry-gizzard",
    "name": "Infusion of Hungry Gizzard",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Hungry Gizzard spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A conjured gizzard swallows creatures whole into an extradimensional stomach where they take acid damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-hunters-eye",
    "name": "Infusion of Hunter's Eye",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Hunter's Eye spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You can see through your enemies' skin to their vulnerable points: the spell grants you the sneak attack ability, dealing an extra 1d6 points of damage per three caster levels. If you already have the sneak attack ability, this damage stacks with it.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-hunters-mercy",
    "name": "Infusion of Hunter’S Mercy",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Hunter’S Mercy spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your next ranged attack on a studied target is an automatic critical threat if it hits.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-hunters-of-hades",
    "name": "Infusion of Hunters Of Hades",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Hunters Of Hades spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Summons the hunters of Hades — spectral hounds and riders — to hunt a named quarry to the death.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-hurtling-stone",
    "name": "Infusion of Hurtling Stone",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Hurtling Stone spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. This spell creates a 50-pound stone that speeds away from you in a straight line, dealing 6d6 points of damage to each creature in its path.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-hydrate",
    "name": "Infusion of Hydrate",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Hydrate spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Creates moisture within a living creature’s body, healing 2d8 +1 per caster level (maximum +10) points of dessication damage and removing dehydration effects.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-hypothermia",
    "name": "Infusion of Hypothermia",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Hypothermia spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject's body temperature crashes: cold damage and exhaustion as it freezes from within.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-i-smell-your-fear",
    "name": "Infusion of I Smell Your Fear",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the I Smell Your Fear spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As locate creature, except as noted in the spell’s text, and it requires a sample of the target’s flesh, blood, hair, ectoplasm, or other physical part as its material component.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-ice-axe",
    "name": "Infusion of Ice Axe",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Ice Axe spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. An axe of ice forms in your hand, dealing cold damage on melee touch attacks.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-ice-flowers",
    "name": "Infusion of Ice Flowers",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Ice Flowers spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The ground blooms with ice flowers that deal cold damage and entangle creatures moving through.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-ice-gauntlet",
    "name": "Infusion of Ice Gauntlet",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Ice Gauntlet spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your gauntlet of ice deals cold damage on unarmed strikes and can freeze small amounts of water.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-ice-rift",
    "name": "Infusion of Ice Rift",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Ice Rift spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. An intense, localized tremor rips through the ice for 1 round: creatures on the ice cannot move or attack, spellcasters must concentrate or lose spells, and structures collapse.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-ice-shape",
    "name": "Infusion of Ice Shape",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Ice Shape spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Forms an existing piece of ice into any shape that suits your purpose, such as a weapon, trapdoor, or idol, or reshapes an ice door.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-ice-shield",
    "name": "Infusion of Ice Shield",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Ice Shield spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The warded creature gains damage reduction 15/- until the spell has prevented 10 points of damage per caster level (maximum 150), but gains vulnerability to fire.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-ice-skate",
    "name": "Infusion of Ice Skate",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Ice Skate spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Lets a creature skate across any icy surface, increasing its base land speed by 60 feet with no Balance checks required for ordinary movement.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-ice-slick",
    "name": "Infusion of Ice Slick",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Ice Slick spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Covers a solid surface with slippery ice: creatures entering or caught in the area must make Balance checks or slip and fall, and move at half speed.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-ice-storm",
    "name": "Infusion of Ice Storm",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Ice Storm spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Hailstones rain down dealing 3d6 bludgeoning and 2d6 cold damage, hampering Listen checks and movement.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-icelance",
    "name": "Infusion of Icelance",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Icelance spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A lance of ice deals piercing and cold damage and can stun the struck creature.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-iconic-manifestation",
    "name": "Infusion of Iconic Manifestation",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Iconic Manifestation spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The energies of the spiritual world flow into you: the spell's descriptor and effects match the non-neutral component of your own alignment.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-identify-transgressor",
    "name": "Infusion of Identify Transgressor",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Identify Transgressor spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Divines the answer to a single “who?” question, giving the name of one person (such as who stole an item), with a base chance of a correct answer.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-illusion-purge",
    "name": "Infusion of Illusion Purge",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Illusion Purge spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You surround yourself with a powerful sphere of magical clarity that negates all illusions of 7th level or lower; anything concealed or altered by illusion appears in its natural state while in the area.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-imbue-with-spell-ability",
    "name": "Infusion of Imbue with Spell Ability",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Imbue with Spell Ability spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Transfers some of your prepared 1st- and 2nd-level spells to a willing creature to cast.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-impede",
    "name": "Infusion of Impede",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Impede spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your will clamps down on the subject's mind: the creature can still act, but it cannot step from its current square for the duration.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-impede-suns-brilliance",
    "name": "Infusion of Impede Sun's Brilliance",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Impede Sun's Brilliance spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Reduces the sun’s light to a comfortable glow in a stationary area, dropping the temperature by 20 degrees and improving protection against heat by one step.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-implacable-pursuer",
    "name": "Infusion of Implacable Pursuer",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Implacable Pursuer spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You unerringly track a creature you have wounded, sensing its direction and distance wherever it flees.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-implosion",
    "name": "Infusion of Implosion",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Implosion spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You cause one creature per round to collapse in on itself and die.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-imprison-soul",
    "name": "Infusion of Imprison Soul",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Imprison Soul spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Places the subject’s soul in a small receptacle, leaving the body lifeless; the trapped soul takes Constitution damage each day until dead or freed.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-incite",
    "name": "Infusion of Incite",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Incite spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Provokes the subject into attacking you or a designated target, enraging it.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-incorporeal-nova",
    "name": "Infusion of Incorporeal Nova",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Incorporeal Nova spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A burst of negative energy damages living creatures and empowers incorporeal undead in the area.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-increase-virulence",
    "name": "Infusion of Increase Virulence",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Increase Virulence spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You make the poison in a vial, or a creature's poison, more lethal: the DCs for all saving throws against the poison increase by 2.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-infernal-transformation",
    "name": "Infusion of Infernal Transformation",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Infernal Transformation spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You transform into a devil: horns, wings, ability boosts, resistances, and infernal traits.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-infernal-transformation-lesser",
    "name": "Infusion of Infernal Transformation, Lesser",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Infernal Transformation, Lesser spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A partial fiendish transformation: modest boosts, small wings, and minor resistances.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-infernal-wound",
    "name": "Infusion of Infernal Wound",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Infernal Wound spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A wound you inflict bleeds infernally and cannot heal naturally or magically without removing the curse.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-inferno",
    "name": "Infusion of Inferno",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Inferno spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The area becomes a raging inferno over time: escalating fire damage each round to everything within a growing blaze.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-infestation-of-maggots",
    "name": "Infusion of Infestation Of Maggots",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Infestation Of Maggots spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Maggots infest the subject's flesh, dealing Constitution damage as they burrow.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-inflict-critical-wounds",
    "name": "Infusion of Inflict Critical Wounds",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Inflict Critical Wounds spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Touch deals 4d8+1/level (max +20) damage; heals undead instead.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-inflict-critical-wounds-mass",
    "name": "Infusion of Inflict Critical Wounds, Mass",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Inflict Critical Wounds, Mass spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As inflict critical wounds (4d8 +1/level, max +40) on one creature per level; heals undead instead.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-inflict-light-wounds",
    "name": "Infusion of Inflict Light Wounds",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Inflict Light Wounds spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Touch deals 1d8+1/level (max +5) damage; heals undead instead.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-inflict-minor-wounds",
    "name": "Infusion of Inflict Minor Wounds",
    "category": "potion",
    "cost": "25 gp",
    "summary": "A specially treated herb infused with the Inflict Minor Wounds spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Touch deals 1 point of damage to the target.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-inflict-moderate-wounds",
    "name": "Infusion of Inflict Moderate Wounds",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Inflict Moderate Wounds spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Touch deals 2d8+1/level (max +10) damage; heals undead instead.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-inflict-serious-wounds",
    "name": "Infusion of Inflict Serious Wounds",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Inflict Serious Wounds spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Touch deals 3d8+1/level (max +15) damage; heals undead instead.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-inhibit",
    "name": "Infusion of Inhibit",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Inhibit spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Delays the subject's next action: it loses its next move action (in practice, it acts last/briefly hesitates).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-inky-cloud",
    "name": "Infusion of Inky Cloud",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Inky Cloud spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A cloud of ink-like darkness obscures vision like fog cloud, even underwater.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-insect-plague",
    "name": "Infusion of Insect Plague",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Insect Plague spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Summons locust swarms that obscure vision and deal swarm damage to creatures in their area.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-insight-of-good-fortune",
    "name": "Infusion of Insight of Good Fortune",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Insight of Good Fortune spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject becomes unusually lucky: once during the spell's duration, when he makes an attack roll, skill check, saving throw, or ability check, he rolls twice and takes the better result. He must choose to use this ability before the check is attempted, and the spell expires once the second die is rolled.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-inspired-aim",
    "name": "Infusion of Inspired Aim",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Inspired Aim spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You inspire allies within the spell's area to focus on hitting their intended targets: all affected allies gain a +2 insight bonus on all ranged attack rolls.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-instant-search",
    "name": "Infusion of Instant Search",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Instant Search spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You instantly search a room or area, learning what a careful search would find.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-interfaith-blessing",
    "name": "Infusion of Interfaith Blessing",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Interfaith Blessing spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Diverse divine energies fill a burst centered on you, strengthening your allies as the full text describes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-interplanar-message",
    "name": "Infusion of Interplanar Message",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Interplanar Message spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Sends a short message to a creature on another plane, like sending across planar boundaries.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-invest-heavy-protection",
    "name": "Infusion of Invest Heavy Protection",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Invest Heavy Protection spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Functions like invest light protection, except that it cures 5d4 points of damage + 1 per two caster levels (maximum +12) and grants damage reduction 5/evil. Undead creatures take an extra 5 points of damage from any weapon or physical attack capable of overcoming good damage reduction.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-invest-light-protection",
    "name": "Infusion of Invest Light Protection",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Invest Light Protection spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You heal a living creature you touch of 1d4 points of damage + 1 per two caster levels (maximum +3), and the creature gains damage reduction 1/evil for 1 minute. Like cure light wounds, this spell deals damage to undead creatures instead of curing them; in addition, on a failed save an undead creature takes an extra 1 point of damage from any weapon or physical attack capable of overcoming good damage reduction for 1 minute.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-invest-moderate-protection",
    "name": "Infusion of Invest Moderate Protection",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Invest Moderate Protection spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Functions like invest light protection, except that it cures 3d4 points of damage + 1 per two caster levels (maximum +6) and grants damage reduction 3/evil. Undead creatures take an extra 3 points of damage from any weapon or physical attack capable of overcoming good damage reduction.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-investiture-of-the-amnizu",
    "name": "Infusion of Investiture of the Amnizu",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Investiture of the Amnizu spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You infuse a target with the intellect-sapping power and slippery mind of an amnizu: the subject can make a melee touch attack that deals 1d4 points of Intelligence damage, becomes immune to effects that damage or reduce Intelligence, and gains resistance to fire 5. The subject is fatigued for 1 minute after the spell ends, as with all investiture spells.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-investiture-of-the-barbed-devil",
    "name": "Infusion of Investiture of the Barbed Devil",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Investiture of the Barbed Devil spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The target grows long barbs like those of a barbed devil: it does not provoke attacks of opportunity when initiating a grapple, and whenever it successfully makes a grapple check it impales its foe on its barbs for extra damage by size. It also gains resistance to fire 10. The subject is fatigued for 1 minute after the spell ends, as with all investiture spells.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-investiture-of-the-bearded-devil",
    "name": "Infusion of Investiture of the Bearded Devil",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Investiture of the Bearded Devil spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The target grows a long, ropy beard of callused tissue that flails about as though alive: if the subject hits an adjacent opponent with at least one melee attack in a round, it also automatically hits with its beard for an extra 2d8 points of damage. It also gains resistance to fire 5. The subject is fatigued for 1 minute after the spell ends, as with all investiture spells.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-investiture-of-the-chain-devil",
    "name": "Infusion of Investiture of the Chain Devil",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Investiture of the Chain Devil spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The target is infused with the magical energies and malignant will of a chain devil: its reach increases by 5 feet and its maximum number of attacks of opportunity each round increases by one. It also gains resistance to fire 5. The subject is fatigued for 1 minute after the spell ends, as with all investiture spells.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-investiture-of-the-erinyes",
    "name": "Infusion of Investiture of the Erinyes",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Investiture of the Erinyes spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The target gains the sinister allure of an erinyes: while the spell is in effect, the subject can beckon a creature it can see, forcing it to approach and take no action, as the text describes. It also gains resistance to fire 5. The subject is fatigued for 1 minute after the spell ends, as with all investiture spells.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-investiture-of-the-harvester-devil",
    "name": "Infusion of Investiture of the Harvester Devil",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Investiture of the Harvester Devil spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The target deals horrific, lingering wounds with its melee attacks: a struck opponent takes an extra 1d6 points of damage each round until it dies or receives a DC 20 Heal check, a cure spell, or a heal spell. The subject also gains resistance to fire 5. The subject is fatigued for 1 minute after the spell ends, as with all investiture spells.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-investiture-of-the-hellfire-engine",
    "name": "Infusion of Investiture of the Hellfire Engine",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Investiture of the Hellfire Engine spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The affected creature gains all the benefits of the iron body spell except that its flesh transforms into living cold iron, and it can breathe a 30-foot cone of hellfire that deals 8d10 points of damage. It also gains resistance to fire 20. The subject is fatigued for 1 minute after the spell ends, as with all investiture spells.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-investiture-of-the-horned-devil",
    "name": "Infusion of Investiture of the Horned Devil",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Investiture of the Horned Devil spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Whenever the subject successfully strikes another living creature with the first melee attack it makes in a round, the struck creature must succeed on a Will save or be stunned for 1 round. The subject also gains resistance to fire 10. The subject is fatigued for 1 minute after the spell ends, as with all investiture spells.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-investiture-of-the-ice-devil",
    "name": "Infusion of Investiture of the Ice Devil",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Investiture of the Ice Devil spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Whenever the subject hits a living creature with a melee attack, that creature must succeed on a Will save or be slowed for 3 rounds, and the subject deals an extra 1d6 points of cold damage with each successful melee attack. The subject also gains resistance to cold 10 and fire 10. The subject is fatigued for 1 minute after the spell ends, as with all investiture spells.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-investiture-of-the-malebranche",
    "name": "Infusion of Investiture of the Malebranche",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Investiture of the Malebranche spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject grows twisted horns of blackened bone and deals extra damage whenever it successfully hits with a charge attack, depending on its size. It also gains resistance to fire 10. The subject is fatigued for 1 minute after the spell ends, as with all investiture spells.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-investiture-of-the-narzugon",
    "name": "Infusion of Investiture of the Narzugon",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Investiture of the Narzugon spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject can use a baleful gaze as a standard action: a single creature within 20 feet must succeed on a Will save or be immobilized for 1 round as if affected by a hold monster spell. The subject also gains resistance to fire 10. The subject is fatigued for 1 minute after the spell ends, as with all investiture spells.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-investiture-of-the-orthon",
    "name": "Infusion of Investiture of the Orthon",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Investiture of the Orthon spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject can erect a 20-foot-radius field that disrupts teleportation spells and effects, as an immediate action, and benefits from a sonic shield like the fire shield spell (sonic damage instead of fire or cold). It also gains resistance to fire 10. The subject is fatigued for 1 minute after the spell ends, as with all investiture spells.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-investiture-of-the-pit-fiend",
    "name": "Infusion of Investiture of the Pit Fiend",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Investiture of the Pit Fiend spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You infuse a creature with the terrifying power of a pit fiend: each round the invested creature chooses one of three aspects — tyranny (claw and wing attacks), pestilence (a cloud of disease-ridden air), or terror (a wave of fear) — as the text describes. The subject also gains immunity to poison and resistance to fire 20. The subject is fatigued for 1 minute after the spell ends, as with all investiture spells.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-investiture-of-the-spined-devil",
    "name": "Infusion of Investiture of the Spined Devil",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Investiture of the Spined Devil spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject suddenly bristles with spines: it can snap its body forward to unleash a volley of up to three spines as a standard action, each dealing 1d6 points of damage plus the subject’s Strength modifier, up to fifteen spines per casting. It also gains resistance to fire 5. The subject is fatigued for 1 minute after the spell ends, as with all investiture spells.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-investiture-of-the-steel-devil",
    "name": "Infusion of Investiture of the Steel Devil",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Investiture of the Steel Devil spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The target gains a +3 profane bonus on attack rolls and to Armor Class; this bonus increases by 1 for every adjacent creature that is also under the effect of an investiture of the steel devil spell. It also gains resistance to fire 5. The subject is fatigued for 1 minute after the spell ends, as with all investiture spells.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-invisibility",
    "name": "Infusion of Invisibility",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Invisibility spell (Illusion); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Subject becomes invisible until it attacks or the spell ends.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-invisibility-purge",
    "name": "Infusion of Invisibility Purge",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Invisibility Purge spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Surrounds you with a sphere that negates all forms of invisibility within 5 feet per level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-iron-bones",
    "name": "Infusion of Iron Bones",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Iron Bones spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As stone bones, but stronger: the undead subject gains greater damage reduction.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-iron-silence",
    "name": "Infusion of Iron Silence",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Iron Silence spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Armor you wear makes no noise, removing its armor check penalty to Move Silently.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-ironguts",
    "name": "Infusion of Ironguts",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Ironguts spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain a +5 bonus on saves against poison, disease, and nausea effects, with a hardened stomach.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-ironwood",
    "name": "Infusion of Ironwood",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Ironwood spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Creates temporary ironwood: wood with the strength and fire resistance of steel, which you shape as the spell is cast.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-irresistible-force",
    "name": "Infusion of Irresistible Force",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Irresistible Force spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Charged with divine energy, you become the epitome of force in motion: you are protected by freedom of movement and may charge and pass through enemy squares as the text describes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-ivory-flesh",
    "name": "Infusion of Ivory Flesh",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Ivory Flesh spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Turns the subject’s flesh and equipment white, granting a +5 circumstance bonus on Hide checks in snow or ice (and a -5 penalty in nonwhite surroundings).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-jagged-tooth",
    "name": "Infusion of Jagged Tooth",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Jagged Tooth spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As keen edge plus enhancement for one natural weapon of an animal: doubles its threat range and adds +1.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-jaws-of-the-wolf",
    "name": "Infusion of Jaws Of The Wolf",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Jaws Of The Wolf spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your head transforms into a wolf's jaws, giving a powerful bite attack with trip.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-jump",
    "name": "Infusion of Jump",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Jump spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Grants a +10, +20, or +30 enhancement bonus on Jump checks by caster level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-jungles-rapture",
    "name": "Infusion of Jungle’S Rapture",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Jungle’S Rapture spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The jungle itself protects you: plants grant cover, concealment, and attack your enemies nearby.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-junglerazer",
    "name": "Infusion of Junglerazer",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Junglerazer spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Destroys plant life and deals heavy damage to plant creatures and fey in a wide swath.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-kelpstrand",
    "name": "Infusion of Kelpstrand",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Kelpstrand spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Strands of kelp rise (even from bare ground) and grapple creatures in the area, as black tentacles but seaweed.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-know-direction",
    "name": "Infusion of Know Direction",
    "category": "potion",
    "cost": "25 gp",
    "summary": "A specially treated herb infused with the Know Direction spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You instantly know which way is north.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-know-greatest-enemy",
    "name": "Infusion of Know Greatest Enemy",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Know Greatest Enemy spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You learn which foe present is the greatest threat to you and its relative power.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-know-opponent",
    "name": "Infusion of Know Opponent",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Know Opponent spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. By studying a creature you gain insight bonuses against it: AC and saves vs that foe grow as you observe.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-know-vulnerabilities",
    "name": "Infusion of Know Vulnerabilities",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Know Vulnerabilities spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You learn a creature's special abilities, weaknesses, resistances, and damage reduction.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-land-womb",
    "name": "Infusion of Land Womb",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Land Womb spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The earth shelters you: you sink into the ground, protected and healing, until you emerge.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-languor",
    "name": "Infusion of Languor",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Languor spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject becomes languid and weak: Strength penalty and slowed movement as energy drains away.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-lantern-light",
    "name": "Infusion of Lantern Light",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Lantern Light spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Rays of holy light flash from your eyes: you can fire one ray per two caster levels, no more than one per round, each requiring a ranged touch attack and dealing 1d6 points of damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-last-breath",
    "name": "Infusion of Last Breath",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Last Breath spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Cast immediately on a creature that just died: it returns to life briefly/mostly intact like reincarnate but swiftly and cheaply, if cast within 1 round.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-last-judgment",
    "name": "Infusion of Last Judgment",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Last Judgment spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Reciting a list of the targets' evil deeds, you call down the judgment of the heavens: creatures that fail their saving throw are struck dead and bodily transported to the appropriate Lower Plane, while creatures that succeed take 3d6 points of temporary Wisdom damage as guilt overwhelms them.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-lastais-caress",
    "name": "Infusion of Lastai's Caress",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Lastai's Caress spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your gentle touch fills the target with tremendous feelings of love and compassion; an evil creature touched (melee touch attack if unwilling) must wrestle with those feelings, rolling on the spell's table for its effect. The spell has no effect on a creature you do not know is evil.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-lawful-sword",
    "name": "Infusion of Lawful Sword",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Lawful Sword spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As holy sword, but axiomatic: the weapon becomes +5 and lawful, dealing extra damage to chaotic foes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-lay-of-the-land",
    "name": "Infusion of Lay Of The Land",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Lay Of The Land spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You instantly learn the geography, terrain, and landmarks of the surrounding region.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-leonals-roar",
    "name": "Infusion of Leonal's Roar",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Leonal's Roar spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. This spell has the effect of a holy word, and additionally deals 2d6 points of sonic damage to nongood creatures in the area; a successful Fortitude save negates the sonic damage but not the holy word effects.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-life-ward",
    "name": "Infusion of Life Ward",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Life Ward spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject gains protection against death effects and negative energy like death ward, from its own entry (a positive-energy ward).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-lifes-grace",
    "name": "Infusion of Life’S Grace",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Life’S Grace spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject's armor gains ghost touch and protection from death effects; it can also ignore energy drain partially.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-light",
    "name": "Infusion of Light",
    "category": "potion",
    "cost": "25 gp",
    "summary": "A specially treated herb infused with the Light spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Makes an object glow like a torch for the duration.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-light-of-courage",
    "name": "Infusion of Light of Courage",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Light of Courage spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You infuse your holy symbol with divine power: if you make a turning check before the spell expires, each undead creature you target takes extra damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-light-of-faith",
    "name": "Infusion of Light of Faith",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Light of Faith spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your holy symbol glows warmly, granting you a sacred or profane bonus equal to one-half your divine caster level (maximum +5) on your next turning check.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-light-of-lunia",
    "name": "Infusion of Light Of Lunia",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Light Of Lunia spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You radiate silvery light; you can discharge beams of it as ranged attacks against evil.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-light-of-mercuria",
    "name": "Infusion of Light Of Mercuria",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Light Of Mercuria spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As light of Lunia, but golden light with stronger beams.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-light-of-purity",
    "name": "Infusion of Light of Purity",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Light of Purity spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your holy symbol gleams with cleansing light: your turning damage increases by 1d6 per four divine caster levels (maximum +5d6) on your next turning attempt.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-light-of-venya",
    "name": "Infusion of Light Of Venya",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Light Of Venya spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As light of Lunia, but pearly light with the strongest beams and healing for good creatures.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-light-of-wisdom",
    "name": "Infusion of Light of Wisdom",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Light of Wisdom spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Cool blue radiance pours from your holy symbol: your effective turning level increases by 1 per three caster levels for your next turning attempt.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-lightfoot",
    "name": "Infusion of Lightfoot",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Lightfoot spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You move silently and swiftly: bonuses to Move Silently and speed, leaving no tracks.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-lightning-bolt",
    "name": "Infusion of Lightning Bolt",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Lightning Bolt spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A bolt of lightning deals 1d6/level electricity damage (max 10d6) along a 120-foot line.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-linked-perception",
    "name": "Infusion of Linked Perception",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Linked Perception spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You impart a shared awareness of their surroundings to all allies in the area: each ally in the area (including yourself) gains a +2 bonus on Spot and Listen checks for each other ally in the area (for example, if you and three allies are in the area, each of you gains a +6 bonus).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-lions-charge",
    "name": "Infusion of Lion’S Charge",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Lion’S Charge spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You can make a full attack at the end of a charge (pounce).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-lions-roar",
    "name": "Infusion of Lion’S Roar",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Lion’S Roar spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your roar damages evil creatures and grants allies courage bonuses, like a burst of holy sound.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-lionheart",
    "name": "Infusion of Lionheart",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Lionheart spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You become immune to fear and grant nearby allies a bonus on saves against fear.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-listening-lorecall",
    "name": "Infusion of Listening Lorecall",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Listening Lorecall spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain bonuses to Listen, can hear whispers at distance, and can pinpoint sounds' distances.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-liveoak",
    "name": "Infusion of Liveoak",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Liveoak spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Transforms a great oak into a treant guardian of its area when intruders approach.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-living-prints",
    "name": "Infusion of Living Prints",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Living Prints spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Tracks left by a creature glow and reveal its identity, size, and time of passing.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-living-undeath",
    "name": "Infusion of Living Undeath",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Living Undeath spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain undead-like traits while alive: immunity to critical hits and many conditions, at a Dexterity cost.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-locate-object",
    "name": "Infusion of Locate Object",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Locate Object spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Senses the direction of a familiar or specific object within range.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-locate-water",
    "name": "Infusion of Locate Water",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Locate Water spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You sense the direction of a substantial body of water, learning more about the number, size, and location of water sources the longer you search.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-longstrider",
    "name": "Infusion of Longstrider",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Longstrider spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Increases your base land speed by 10 feet.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-longstrider-mass",
    "name": "Infusion of Longstrider, Mass",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Longstrider, Mass spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. All allies in the area gain a +10-foot enhancement bonus to their speed scores.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-low-light-vision",
    "name": "Infusion of Low-Light Vision",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Low-Light Vision spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Grants low-light vision (or doubles existing low-light vision).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-loyal-vassal",
    "name": "Infusion of Loyal Vassal",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Loyal Vassal spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Wards your sworn vassal: a shield other-like bond alerts you and protects them from compulsion.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-lucent-lance",
    "name": "Infusion of Lucent Lance",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Lucent Lance spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A lance of light deals damage based on ambient light, stronger in bright light, especially against undead and darkness creatures.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-maelstrom",
    "name": "Infusion of Maelstrom",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Maelstrom spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A huge whirlpool forms in water, dragging ships and creatures down and battering them.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-magic-circle-against-chaos",
    "name": "Infusion of Magic Circle against Chaos",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Magic Circle against Chaos spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As protection from chaos for all within 10 feet; can trap a called chaotic creature.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-magic-circle-against-evil",
    "name": "Infusion of Magic Circle against Evil",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Magic Circle against Evil spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As protection from evil for all within 10 feet; can trap a called evil creature.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-magic-circle-against-good",
    "name": "Infusion of Magic Circle against Good",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Magic Circle against Good spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As protection from good for all within 10 feet; can trap a called good creature.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-magic-circle-against-law",
    "name": "Infusion of Magic Circle against Law",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Magic Circle against Law spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As protection from law for all within 10 feet; can trap a called lawful creature.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-magic-convalescence",
    "name": "Infusion of Magic Convalescence",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Magic Convalescence spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You alter the flow of magic about your body so that spells heal you: whenever a creature, including you, casts a spell within the area of this spell, you heal 1 hit point per level of the spell cast. The effect of each spell cast is resolved prior to your receiving the healing.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-magic-fang",
    "name": "Infusion of Magic Fang",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Magic Fang spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. One natural weapon of the target gains +1 enhancement on attacks and damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-magic-fang-greater",
    "name": "Infusion of Magic Fang, Greater",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Magic Fang, Greater spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Grants a +1 enhancement bonus per four caster levels (max +5) to one natural weapon of the subject, or +1 to all of its natural weapons.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-magic-fang-superior",
    "name": "Infusion of Magic Fang, Superior",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Magic Fang, Superior spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As greater magic fang, but the enhancement applies to all the creature's natural weapons at full strength.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-magic-stone",
    "name": "Infusion of Magic Stone",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Magic Stone spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Enchants up to three pebbles as +1 sling bullets dealing 1d6+1 (2d6+2 vs undead).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-magic-vestment",
    "name": "Infusion of Magic Vestment",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Magic Vestment spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You imbue a suit of armor or shield with a +1 enhancement bonus per four caster levels (max +5).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-magic-weapon",
    "name": "Infusion of Magic Weapon",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Magic Weapon spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Gives a weapon a +1 enhancement bonus on attacks and damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-magic-weapon-greater",
    "name": "Infusion of Magic Weapon, Greater",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Magic Weapon, Greater spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Gives a weapon +1 enhancement per four caster levels (max +5) on attacks and damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-major-creation",
    "name": "Infusion of Major Creation",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Major Creation spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As minor creation, but stone, metal, and gems last shorter times by material hardness and rarity.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-make-manifest",
    "name": "Infusion of Make Manifest",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Make Manifest spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Forces an incorporeal or ethereal creature onto the Material Plane, making it corporeal and vulnerable.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-make-manifest-mass",
    "name": "Infusion of Make Manifest, Mass",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Make Manifest, Mass spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As make manifest, affecting many creatures in an area.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-make-whole",
    "name": "Infusion of Make Whole",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Make Whole spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Fully repairs a damaged object, restoring it as if new.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-mana-flux",
    "name": "Infusion of Mana Flux",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Mana Flux spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You create a field of unstable magical energy: any creature trying to cast a spell, use a spell-like ability, activate a supernatural ability, or manifest a psionic power in the spell's area has a 20% chance of failure (spell completion items, such as scrolls, also have this failure chance, and a failed spell still uses up its spell slot or other resources). If a creature has a spell failure chance from another source, each source is checked separately; magic items are not affected, since the power invested in them is too ingrained to be disrupted.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-manifestation-of-the-deity",
    "name": "Infusion of Manifestation of the Deity",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Manifestation of the Deity spell (Illusion); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You summon a looming, towering spectral image of the deity you worship above you, turning its wrath upon your foes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-mantle-of-chaos",
    "name": "Infusion of Mantle Of Chaos",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Mantle Of Chaos spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A mantle of chaos grants an armor bonus and a deflection bonus that shifts randomly, plus confusion of attackers like cloak of chaos-lite.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-mantle-of-evil",
    "name": "Infusion of Mantle Of Evil",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Mantle Of Evil spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A mantle of evil grants armor and protection bonuses against good creatures and holy effects.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-mantle-of-good",
    "name": "Infusion of Mantle Of Good",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Mantle Of Good spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A mantle of good grants armor and protection bonuses against evil creatures and unholy effects.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-mantle-of-law",
    "name": "Infusion of Mantle Of Law",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Mantle Of Law spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A mantle of law grants armor and protection bonuses against chaotic creatures.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-mantle-of-the-fiery-spirit",
    "name": "Infusion of Mantle of the Fiery Spirit",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Mantle of the Fiery Spirit spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Permanently grants the target the fire subtype.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-mantle-of-the-icy-soul",
    "name": "Infusion of Mantle Of The Icy Soul",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Mantle Of The Icy Soul spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject gains the cold subtype: immunity to cold, vulnerability to fire, and a chilling presence.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-mark-of-doom",
    "name": "Infusion of Mark of Doom",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Mark of Doom spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You mark an opponent as an enemy of your faith (the subject must have an alignment that opposes yours on at least one axis): the subject takes 1d6 points of damage each time it casts a spell that causes damage or disables a creature, makes a melee or ranged attack, or uses spell-like or supernatural abilities to harm other creatures.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-mark-of-judgment",
    "name": "Infusion of Mark of Judgment",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Mark of Judgment spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You mark your foes as enemies of the faith (each target must have an alignment that opposes yours on at least one axis): you and your allies know to strike a marked creature in preference to unmarked targets, and whenever a creature succeeds on a melee or ranged attack against any subject of the spell, that attacker heals 2 points of damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-mark-of-justice",
    "name": "Infusion of Mark of Justice",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Mark of Justice spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Draws a mark that activates a bestow curse effect when the target commits a specified offense.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-mark-of-sin",
    "name": "Infusion of Mark of Sin",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Mark of Sin spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your successful touch attack leaves a mystical mark that brings the subject’s inner sins and crimes to manifest in its appearance and aura after a number of rounds equal to your divine caster level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-mark-of-the-enlightened-soul",
    "name": "Infusion of Mark of the Enlightened Soul",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Mark of the Enlightened Soul spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. This spell adds a touch of good to your magic, granting you special potency against your evil-aligned enemies for a few rounds.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-mark-of-the-hunter",
    "name": "Infusion of Mark Of The Hunter",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Mark Of The Hunter spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Marks a quarry: you gain bonuses to track, spot, and damage your marked favored target.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-mark-of-the-outcast",
    "name": "Infusion of Mark Of The Outcast",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Mark Of The Outcast spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Brands the subject with a visible mark: Charisma penalties and social stigma, and animals shun it.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-marked-object",
    "name": "Infusion of Marked Object",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Marked Object spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Marks an object so you can sense its direction and distance and know if it moves.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-masochism",
    "name": "Infusion of Masochism",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Masochism spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. For every 10 points of damage the caster takes in a round, he gains a +1 luck bonus on attack rolls, saving throws, and skill checks in the following round.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-mass-camouflage",
    "name": "Infusion of Mass Camouflage",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Mass Camouflage spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As camouflage, except the effect is mobile with the group, and the spell is broken for any individual who moves more than 60 feet from the nearest member of the group.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-master-air",
    "name": "Infusion of Master Air",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Master Air spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You control air and wind around you, gaining a fly speed and command of gusts.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-master-cavalier",
    "name": "Infusion of Master Cavalier",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Master Cavalier spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your muscles and equilibrium shift to make you at home in the saddle: you gain a +10 bonus on Ride checks, more if you have a special mount or similar ability.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-master-earth",
    "name": "Infusion of Master Earth",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Master Earth spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You move through earth, command earth elementals' respect, and gain earthglide-like passage and protection.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-masters-touch-phb2",
    "name": "Infusion of Master's Touch",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Master's Touch spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You grant the creature special insight into how best to complete the task at hand: cast immediately before the target makes a skill check, this spell gives it a +4 insight bonus on its skill check. Master's touch has no effect on skill checks that represent effort over more than 1 round of time (Craft checks, for example).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-meld-into-ice",
    "name": "Infusion of Meld into Ice",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Meld into Ice spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You and up to 100 pounds of nonliving gear meld into a single block of ice large enough to hold your body in all three dimensions.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-meld-into-stone",
    "name": "Infusion of Meld into Stone",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Meld into Stone spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You merge with solid stone, remaining aware and able to cast spells on yourself.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-memory-rot",
    "name": "Infusion of Memory Rot",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Memory Rot spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject's memories rot away: it takes Intelligence damage each day and forgets skills and identity.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-mending",
    "name": "Infusion of Mending",
    "category": "potion",
    "cost": "25 gp",
    "summary": "A specially treated herb infused with the Mending spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Repairs a single break or tear in a small object.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-mephit-mob",
    "name": "Infusion of Mephit Mob",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Mephit Mob spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Summons 2d6 mephits of a kind you designate, which appear where you choose and act immediately on your turn.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-metal-fang",
    "name": "Infusion of Metal Fang",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Metal Fang spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. One of the subject’s natural weapons takes on a gleaming metallic sheen, temporarily becoming cold iron or silvered, as you choose.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-meteoric-strike",
    "name": "Infusion of Meteoric Strike",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Meteoric Strike spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your melee weapon bursts into flame: your next successful melee attack deals extra fire damage equal to 1d6 points + 1d6 points per four caster levels, and the flames splash into all squares adjacent to the target — any creatures standing in those squares take half damage from the explosion, with a Reflex save allowed to halve this again (spell resistance applies to this splash effect). You are not harmed by your own meteoric strike, and you can cast it before making an unarmed attack, in which case your unarmed attack is considered armed.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-miasma",
    "name": "Infusion of Miasma",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Miasma spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Choking vapors fill an area: creatures inside cannot speak or cast with verbal components and must hold their breath.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-miasma-of-entropy",
    "name": "Infusion of Miasma Of Entropy",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Miasma Of Entropy spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Entropic mist withers creatures: damage and ability penalties to those caught inside.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-mind-bond",
    "name": "Infusion of Mind Bond",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Mind Bond spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You temporarily strengthen the mental bond with your special mount: you and your mount gain a +4 flanking bonus on attack rolls (instead of +2) when flanking the same opponent, and your mount gains a +1 competence bonus on attack rolls for every three paladin levels you possess.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-minor-creation",
    "name": "Infusion of Minor Creation",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Minor Creation spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Creates a nonmagical object of vegetable matter that lasts until it vanishes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-miracle",
    "name": "Infusion of Miracle",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Miracle spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Request your deity's direct intercession: duplicate spells up to 8th level, swing an event, or greater requests at XP cost.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-mirror-image",
    "name": "Infusion of Mirror Image",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Mirror Image spell (Illusion); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Creates 1d4+1/three levels illusory duplicates of you that absorb attacks.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-misrepresent-alignment",
    "name": "Infusion of Misrepresent Alignment",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Misrepresent Alignment spell (Illusion); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. This spell conceals the true alignment of an object or creature from all forms of divination, rendering a misleading result determined by you.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-moment-of-clarity",
    "name": "Infusion of Moment Of Clarity",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Moment Of Clarity spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. For a moment you clear your mind: you can act normally despite confusion or compulsion for 1 round.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-moon-bolt",
    "name": "Infusion of Moon Bolt",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Moon Bolt spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Bolts of moonlight deal damage and can daze creatures, stronger against lycanthropes and undead.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-moon-lust",
    "name": "Infusion of Moon Lust",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Moon Lust spell (Illusion); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject becomes entranced by the moon, standing and gazing, distracted.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-morality-undone",
    "name": "Infusion of Morality Undone",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Morality Undone spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Turns one creature evil, leaving the law-chaos component of its alignment unchanged; it keeps its old allegiances only where they do not conflict with its new outlook.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-mountain-stance",
    "name": "Infusion of Mountain Stance",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Mountain Stance spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You take an immovable stance: huge bonuses against bull rush, trip, and forced movement, and to AC while stationary.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-move-earth",
    "name": "Infusion of Move Earth",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Move Earth spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Excavates trenches and raises hills of loose earth over up to 10 minutes per area.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-move-snow-and-ice",
    "name": "Infusion of Move Snow and Ice",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Move Snow and Ice spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Moves snow and ice over a huge area in wavelike currents; the area affected determines the casting time, up to 750 feet by 750 feet.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-mummify",
    "name": "Infusion of Mummify",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Mummify spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You flash-dry a creature, killing it and preserving it in instantaneous mummification; a successful Fortitude save instead means 6d6 points of dessication damage and dehydration.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-murderous-mist",
    "name": "Infusion of Murderous Mist",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Murderous Mist spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A mist of scalding steam fills an area, dealing fire damage each round and obscuring sight — summoned at a point and drifting.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-mystic-aegis",
    "name": "Infusion of Mystic Aegis",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Mystic Aegis spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You cast this spell immediately when you are targeted by a hostile spell: you gain spell resistance equal to 12 + your caster level against that spell.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-natures-avatar",
    "name": "Infusion of Nature’S Avatar",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Nature’S Avatar spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You become nature's avatar: massive ability boosts, natural weapons, regeneration, and plant/animal command presence.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-natures-balance",
    "name": "Infusion of Nature’S Balance",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Nature’S Balance spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You redistribute ability points among willing creatures, taking from one score to bolster another.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-natures-favor",
    "name": "Infusion of Nature’S Favor",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Nature’S Favor spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Animals and nature aid the recipient: a luck bonus on attacks and damage for the duration.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-natures-rampart",
    "name": "Infusion of Nature’S Rampart",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Nature’S Rampart spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Earth and plants rise into a defensive rampart wall you shape for cover and protection.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-natures-wrath",
    "name": "Infusion of Nature's Wrath",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Nature's Wrath spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You call up the power of nature to smite your enemies: creatures that are part of the natural world are unaffected, while aberrations, undead, and similar corruptions of nature are harmed, as the text describes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-naturewatch",
    "name": "Infusion of Naturewatch",
    "category": "potion",
    "cost": "25 gp",
    "summary": "A specially treated herb infused with the Naturewatch spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You can tell whether natural creatures and plants nearby are healthy, injured, or dead at a glance.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-nauseating-breath",
    "name": "Infusion of Nauseating Breath",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Nauseating Breath spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You exhale a breath of nauseating gas: creatures in the cone are sickened or nauseated.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-near-horizon",
    "name": "Infusion of Near Horizon",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Near Horizon spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You take no range penalties when using ranged weapons for the duration, though weapons remain limited to their normal maximum distance.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-necrotic-curse",
    "name": "Infusion of Necrotic Curse",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Necrotic Curse spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Imbues an area with negative energy so powerful it inverts healing: anyone casting a healing spell there must succeed on a caster level check or the spell is twisted to its opposite.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-negative-energy-aura",
    "name": "Infusion of Negative Energy Aura",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Negative Energy Aura spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. An aura of negative energy damages living creatures near you each round and bolsters undead.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-neutralize-poison",
    "name": "Infusion of Neutralize Poison",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Neutralize Poison spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Detoxifies venom in a creature or object and grants immunity to poison for the duration.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-nightshield",
    "name": "Infusion of Nightshield",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Nightshield spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain a +1 resistance bonus on saves and a shield-like protection against magic missiles at night or in darkness (works anytime).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-nimbus-of-light",
    "name": "Infusion of Nimbus Of Light",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Nimbus Of Light spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A halo of light sheds illumination and can be discharged as a ray dealing damage to undead and evil.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-no-light",
    "name": "Infusion of No Light",
    "category": "potion",
    "cost": "25 gp",
    "summary": "A specially treated herb infused with the No Light spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Creates an area of darkness that normal light cannot illuminate, though darkvision works within it; it counters and is countered by light spells.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-nondetection",
    "name": "Infusion of Nondetection",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Nondetection spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Hides the subject from divination and scrying; diviners must beat your caster level to detect it.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-numbing-sphere",
    "name": "Infusion of Numbing Sphere",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Numbing Sphere spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A rolling sphere of intense cold moves 30 feet per round as you direct, dealing cold damage and numbing creatures it strikes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-obscure-object",
    "name": "Infusion of Obscure Object",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Obscure Object spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Hides an object from scrying and divination detection.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-obscuring-mist",
    "name": "Infusion of Obscuring Mist",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Obscuring Mist spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A stationary fog cloud grants concealment; total concealment beyond 5 feet.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-obscuring-snow",
    "name": "Infusion of Obscuring Snow",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Obscuring Snow spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Swirling snow vapor arises around you and follows you, obscuring all sight beyond 5 feet and granting concealment or total concealment by distance.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-omen-of-peril",
    "name": "Infusion of Omen Of Peril",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Omen Of Peril spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You receive a quick omen of the danger level of your next hour's course: safe, perilous, or deadly.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-one-mind",
    "name": "Infusion of One Mind",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the One Mind spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You and your mount share senses: you can see through its eyes and communicate telepathically.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-one-mind-greater",
    "name": "Infusion of One Mind, Greater",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the One Mind, Greater spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As one mind, but you can also direct the mount's senses fully and share spells more freely.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-one-mind-lesser",
    "name": "Infusion of One Mind, Lesser",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the One Mind, Lesser spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A weak empathic link with your mount: you sense its emotions and direction.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-one-with-the-land",
    "name": "Infusion of One With The Land",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the One With The Land spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain a strong bond with the land: bonuses on nature skills, endure elements, and knowledge of the area.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-opalescent-glare",
    "name": "Infusion of Opalescent Glare",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Opalescent Glare spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your gaze blasts creatures with chaotic colors: death or madness to those who fail, especially lawful beings.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-owls-insight",
    "name": "Infusion of Owl’S Insight",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Owl’S Insight spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject gains an insight bonus to Wisdom equal to half your caster level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-owls-wisdom",
    "name": "Infusion of Owl's Wisdom",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Owl's Wisdom spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Grants a +4 enhancement bonus to Wisdom.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-owls-wisdom-mass",
    "name": "Infusion of Owl's Wisdom, Mass",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Owl's Wisdom, Mass spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As owl's wisdom (+4 Wisdom), but affects one creature per level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-painless-death",
    "name": "Infusion of Painless Death",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Painless Death spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The touched willing living creature dies painlessly and instantly.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-panacea",
    "name": "Infusion of Panacea",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Panacea spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Cures many conditions at once: removes disease, poison effects, blindness, deafness, and similar ailments, plus minor healing.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-parboil",
    "name": "Infusion of Parboil",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Parboil spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You flash-heat the air in an area, dealing 6d6 points of fire damage and 2d4 points of Intelligence damage; a successful Fortitude save halves the fire damage and negates the Intelligence damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-pass-through-ice",
    "name": "Infusion of Pass through Ice",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Pass through Ice spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The transmuted creature can pass through ice or snow as easily as water, moving at 15 feet and rising or sinking at 5 feet per round.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-pass-without-trace",
    "name": "Infusion of Pass without Trace",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Pass without Trace spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Subjects leave no tracks or scent and cannot be tracked nonmagically.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-passage-of-the-shifting-sands",
    "name": "Infusion of Passage of the Shifting Sands",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Passage of the Shifting Sands spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your body sparkles as color fades from your form, and you collapse into thousands of particles of sand carried on a stiff breeze, as the text describes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-path-of-frost",
    "name": "Infusion of Path of Frost",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Path of Frost spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A pathway of solid ice races along the ground from your feet, creating a frozen, slippery strip.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-perinarch",
    "name": "Infusion of Perinarch",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Perinarch spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain control over a morphic plane's traits (like Limbo), reshaping its terrain and gravity by will.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-perinarch-planar",
    "name": "Infusion of Perinarch, Planar",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Perinarch, Planar spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As perinarch, but you can reshape a strongly morphic plane more extensively and impose order on it.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-pestilence",
    "name": "Infusion of Pestilence",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Pestilence spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Infects the subject with a terrible contagious disease that drains 1d4 Constitution each day with no incubation period; two consecutive successful saves end it.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-phantasmal-decoy",
    "name": "Infusion of Phantasmal Decoy",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Phantasmal Decoy spell (Illusion); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Creates an illusory duplicate of you (or your companion) elsewhere that foes mistake for real.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-phantasmal-disorientation",
    "name": "Infusion of Phantasmal Disorientation",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Phantasmal Disorientation spell (Illusion); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject's surroundings seem to shift and spin: it is disoriented, taking penalties and moving randomly.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-phantom-bear",
    "name": "Infusion of Phantom Bear",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Phantom Bear spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A phantom dire bear appears and fights for you, partly incorporeal and hard to harm.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-phantom-stag",
    "name": "Infusion of Phantom Stag",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Phantom Stag spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A phantom stag serves as a fast, tireless mount that can pass through terrain easily.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-phantom-wolf",
    "name": "Infusion of Phantom Wolf",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Phantom Wolf spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A huge phantom wolf fights for you, its bite dragging down and tripping enemies.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-plague",
    "name": "Infusion of Plague",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Plague spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subjects contract a disease you select from the spell's table (blinding sickness, cackle fever, filth fever, mindfire, red ache, shakes, or slimy doom), which strikes immediately with no incubation period. The disease progresses rapidly: the subjects must attempt additional saves each round, instead of each day, and plague's save DC is used for all of them.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-plague-of-undead",
    "name": "Infusion of Plague Of Undead",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Plague Of Undead spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Every corpse in a huge area rises as a zombie or skeleton under your control up to a large HD cap.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-planar-ally",
    "name": "Infusion of Planar Ally",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Planar Ally spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Calls outsiders totaling up to 12 HD to perform a task for negotiated payment.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-planar-ally-greater",
    "name": "Infusion of Planar Ally, Greater",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Planar Ally, Greater spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Calls outsiders totaling up to 18 HD to perform a task for negotiated payment.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-planar-ally-lesser",
    "name": "Infusion of Planar Ally, Lesser",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Planar Ally, Lesser spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Calls an outsider or elemental of up to 6 HD to perform a task for negotiated payment.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-planar-bubble",
    "name": "Infusion of Planar Bubble",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Planar Bubble spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A bubble around a creature replicates its home plane's traits, protecting it from the local plane's effects.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-planar-exchange",
    "name": "Infusion of Planar Exchange",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Planar Exchange spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You swap places with a called outsider: it takes your place and serves briefly while you wait safely elsewhere.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-planar-exchange-greater",
    "name": "Infusion of Planar Exchange, Greater",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Planar Exchange, Greater spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As planar exchange, with a more powerful outsider.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-planar-exchange-lesser",
    "name": "Infusion of Planar Exchange, Lesser",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Planar Exchange, Lesser spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As planar exchange, with a weaker outsider.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-planar-tolerance",
    "name": "Infusion of Planar Tolerance",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Planar Tolerance spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As avoid planar effects / attune form's protection: you tolerate the plane's harmful traits without damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-plant-body",
    "name": "Infusion of Plant Body",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Plant Body spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain plant traits: immunity to mind-affecting effects, poison, sleep, paralysis, polymorph, stunning, and critical hits.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-plant-growth",
    "name": "Infusion of Plant Growth",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Plant Growth spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Makes vegetation grow thick and tangled into difficult, concealing overgrowth, or enriches plants so yields rise by a third for a year.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-pleasant-visage",
    "name": "Infusion of Pleasant Visage",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Pleasant Visage spell (Illusion); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You disguise the wounds of a ghost with a disturbing, repulsive, or gruesome appearance, making it appear completely normal (although still a ghost).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-poison",
    "name": "Infusion of Poison",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Poison spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Calls a venomous essence into the target: 1d10 Con damage now and again 1 minute later.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-poison-thorns",
    "name": "Infusion of Poison Thorns",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Poison Thorns spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your body grows poisoned thorns: attackers and grapplers are pricked and poisoned.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-poison-vines",
    "name": "Infusion of Poison Vines",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Poison Vines spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Poisonous vines erupt and grapple creatures in the area, poisoning those they hold.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-poisoned-grasp",
    "name": "Infusion of Poisoned Grasp",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Poisoned Grasp spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. This spell imbues your hand with a paralytic poison that you can deliver with a successful melee touch attack.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-polymorph",
    "name": "Infusion of Polymorph",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Polymorph spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Transforms a willing creature into another form of 1 HD or less per level (max 15 HD), gaining its physical traits.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-portal-beacon",
    "name": "Infusion of Portal Beacon",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Portal Beacon spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Marks a portal you have used so you can find and reopen it easily later.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-positive-energy-aura",
    "name": "Infusion of Positive Energy Aura",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Positive Energy Aura spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your aura heals living creatures near you each round and harms undead.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-pox",
    "name": "Infusion of Pox",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Pox spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Subjects take 1d4 points of Constitution drain as their skin breaks out in lesions and takes on a pale yellow pallor.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-prayer",
    "name": "Infusion of Prayer",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Prayer spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Allies gain +1 luck on attacks, damage, saves, and checks; enemies take -1 on the same.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-preserve-organ",
    "name": "Infusion of Preserve Organ",
    "category": "potion",
    "cost": "25 gp",
    "summary": "A specially treated herb infused with the Preserve Organ spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Preserves a single severed organ so it does not decay, keeping it in exactly the state it was in when the spell was cast.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-prickling-torment",
    "name": "Infusion of Prickling Torment",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Prickling Torment spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject’s skin erupts in a blistering, maddening rash: the creature is sickened, and takes damage whenever it takes more than a free, swift, or immediate action on its turn.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-primal-form",
    "name": "Infusion of Primal Form",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Primal Form spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You take on a primal elemental-ish animal form with enhanced physical stats and natural attacks, losing spellcasting while in it.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-primal-hunter",
    "name": "Infusion of Primal Hunter",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Primal Hunter spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. This spell causes your body to recall the strength of your forebears, hearkening back to a time when your ancestors hunted for survival.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-primal-instinct",
    "name": "Infusion of Primal Instinct",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Primal Instinct spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. This spell calls upon the raw natural forces within you to grant the benefits given in the text for 24 hours.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-primal-senses",
    "name": "Infusion of Primal Senses",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Primal Senses spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. This spell calls upon the primal forces of creation to grant you the senses of your ancestors for 24 hours.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-primal-speed",
    "name": "Infusion of Primal Speed",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Primal Speed spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. This spell draws upon the natural reflexes of hunters and prey, giving you the abilities described in the text for 24 hours.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-produce-flame",
    "name": "Infusion of Produce Flame",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Produce Flame spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Creates a flame in your palm you can touch with or hurl for 1d6+1/level (max +5) fire damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-profane-item",
    "name": "Infusion of Profane Item",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Profane Item spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You imbue a touched object with latent negative energy that discharges against animals, plants, or good creatures that touch or are touched by it, as the text describes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-proper-state",
    "name": "Infusion of Proper State",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Proper State spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You transform a willing incorporeal undead creature into a ghost.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-protection-from-chaos",
    "name": "Infusion of Protection from Chaos",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Protection from Chaos spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. +2 AC and saves vs chaotic creatures, blocks mental control and contact by summoned chaotic creatures.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-protection-from-dessication",
    "name": "Infusion of Protection from Dessication",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Protection from Dessication spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The warded creature cannot become dehydrated, until the spell has prevented 10 points of dehydration damage per caster level (maximum 100).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-protection-from-energy",
    "name": "Infusion of Protection from Energy",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Protection from Energy spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Absorbs the first 12 points per caster level (max 120) of damage from one chosen energy type.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-protection-from-evil",
    "name": "Infusion of Protection from Evil",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Protection from Evil spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. +2 AC and saves vs evil creatures, blocks mental control and contact by summoned evil creatures.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-protection-from-good",
    "name": "Infusion of Protection from Good",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Protection from Good spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. +2 AC and saves vs good creatures, blocks mental control and contact by summoned good creatures.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-protection-from-law",
    "name": "Infusion of Protection from Law",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Protection from Law spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. +2 AC and saves vs lawful creatures, blocks mental control and contact by summoned lawful creatures.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-protection-from-negative-energy",
    "name": "Infusion of Protection From Negative Energy",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Protection From Negative Energy spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject gains protection against negative energy damage and death effects, absorbing negative energy up to a cap.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-protection-from-positive-energy",
    "name": "Infusion of Protection From Positive Energy",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Protection From Positive Energy spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As protection from negative energy, but against positive energy (for undead subjects).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-protection-from-possession",
    "name": "Infusion of Protection from Possession",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Protection from Possession spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. This spell wards a creature against mental control and possession attempts, blocking any attempt to possess the warded creature or exercise mental control over it.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-protection-from-spells",
    "name": "Infusion of Protection from Spells",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Protection from Spells spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Grants a +8 resistance bonus on saves against spells and spell-like effects.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-psychic-poison",
    "name": "Infusion of Psychic Poison",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Psychic Poison spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Taints an area, creature, or object so that anyone casting a mind-affecting or divination spell at it is struck by a psychic poison of the caster’s choice.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-pulse-of-hate",
    "name": "Infusion of Pulse of Hate",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Pulse of Hate spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Malign waves of energy pulse through the area around you: starting in the round you cast it, pulse of hate deals 2d6 points of unholy damage per round, on your turn, to all enemies in the area.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-purify-food-and-drink",
    "name": "Infusion of Purify Food and Drink",
    "category": "potion",
    "cost": "25 gp",
    "summary": "A specially treated herb infused with the Purify Food and Drink spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Makes spoiled or poisoned food and water pure and safe to consume.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-quench",
    "name": "Infusion of Quench",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Quench spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Extinguishes all nonmagical fires in the area, or dispels the fire spells of one magic item, countering fire effects.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-question-of-truth",
    "name": "Infusion of Question of Truth",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Question of Truth spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Cast before asking a creature a single question, this spell lets you detect any intentional falsehoods or lies given as a response.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-quick-march",
    "name": "Infusion of Quick March",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Quick March spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You and allies gain a burst of overland speed for an hour, marching without fatigue.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-quill-blast",
    "name": "Infusion of Quill Blast",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Quill Blast spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Quills erupt from you in all directions, dealing piercing damage based on your size and form.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-quillfire",
    "name": "Infusion of Quillfire",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Quillfire spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your quills or spines become weapons: you can fire them as projectiles dealing damage and mild poison.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-radiance",
    "name": "Infusion of Radiance",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Radiance spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. For the duration, you emanate a bright light that undead find uncomfortable: the illumination within the area is bright, the equivalent of a daylight spell, and undead in the area are dazzled for as long as they remain in the radius and for 1d6 rounds thereafter. Radiance counters or dispels any darkness spell of equal or lower level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-radiant-assault",
    "name": "Infusion of Radiant Assault",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Radiant Assault spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A burst of radiant energy deals damage and dazzles or blinds evil creatures and undead.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-raging-flame",
    "name": "Infusion of Raging Flame",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Raging Flame spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Makes a fire burn far hotter and faster, increasing its damage and spread.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-rain-of-black-tulips",
    "name": "Infusion of Rain of Black Tulips",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Rain of Black Tulips spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Tulips as black as midnight fall from the sky and explode with divine energy upon striking evil creatures, each of which takes 5d6 points of damage; evil creatures that fail a Fortitude save are also nauseated until they leave the spell's area.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-rain-of-roses",
    "name": "Infusion of Rain of Roses",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Rain of Roses spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Red roses fall from the sky: their sharp thorns graze evil creatures for 1d4 points of temporary Wisdom damage per round (a creature reduced to 0 Wisdom falls unconscious, succumbing to horrible nightmares), and evil creatures touched by the petals that fail a Fortitude save are sickened.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-raise-dead",
    "name": "Infusion of Raise Dead",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Raise Dead spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Restores life to a creature dead up to 1 day/level; it loses a level and is weak on return.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-raise-ghost",
    "name": "Infusion of Raise Ghost",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Raise Ghost spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As raise dead, except that this spell can bring back only a ghost who has been killed: it does not restore life to a dead body, but brings back a slain ghost as a ghost.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-raise-ice-forest",
    "name": "Infusion of Raise Ice Forest",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Raise Ice Forest spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Ice trees with 5-foot-diameter trunks erupt from frostfell ground throughout the area, of any type of tree you designate.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-rams-might",
    "name": "Infusion of Ram’S Might",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Ram’S Might spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain a ram's headbutt: a gore attack and improved bull rush power.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-rapid-burrowing",
    "name": "Infusion of Rapid Burrowing",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Rapid Burrowing spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain or double a burrow speed and can rush through earth quickly.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-ravenous-darkness",
    "name": "Infusion of Ravenous Darkness",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Ravenous Darkness spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The object touched sheds darkness as a deeper darkness spell, and every living creature within the resulting darkness is assailed by the ravenous night as the text describes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-ray-of-hope",
    "name": "Infusion of Ray of Hope",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Ray of Hope spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Powerful hope wells up in the subject, who gains a +2 morale bonus on saving throws, attack rolls, ability checks, and skill checks; ray of hope counters and dispels sorrow (Book of Vile Darkness).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-reachwalkers-wariness",
    "name": "Infusion of Reachwalker's Wariness",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Reachwalker's Wariness spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. While this spell is in effect, you are instantly aware of the exact position of any aberration within the spell’s area, as if you had blindsense with respect to aberrations only.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-read-magic",
    "name": "Infusion of Read Magic",
    "category": "potion",
    "cost": "25 gp",
    "summary": "A specially treated herb infused with the Read Magic spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Lets you decipher magical inscriptions, scrolls, and spellbooks you couldn't otherwise read.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-reaving-aura",
    "name": "Infusion of Reaving Aura",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Reaving Aura spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Negative energy floods the air around you: every creature in the area at 0 or fewer hit points takes 1 point of damage, so the stable become dying and those at -9 die.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-recitation",
    "name": "Infusion of Recitation",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Recitation spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your recited prayer grants allies a +2 luck bonus on attacks, damage, saves, and checks (+3 if they share your faith).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-red-tide",
    "name": "Infusion of Red Tide",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Red Tide spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A tide of red algae poisons the waters and air: creatures in the area are poisoned and take damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-reduce-animal",
    "name": "Infusion of Reduce Animal",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Reduce Animal spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Shrinks a willing animal by one size category, reversing the effects of animal growth.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-refreshment",
    "name": "Infusion of Refreshment",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Refreshment spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Channels celestial energy to remove all nonlethal damage the targets have taken, including damage from environmental conditions, starvation and thirst, and related effects, as well as damage dealt by nonlethal attacks.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-regal-procession",
    "name": "Infusion of Regal Procession",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Regal Procession spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Conjures a procession of splendid spectral horses and an honor guard that travel with you impressively.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-regenerate",
    "name": "Infusion of Regenerate",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Regenerate spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Regrows severed limbs and broken bones, heals 4d8+1/level (max +35), and removes fatigue and nonlethal damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-reincarnate",
    "name": "Infusion of Reincarnate",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Reincarnate spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Returns a dead creature to life in a new, young adult body of a random race.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-rejection",
    "name": "Infusion of Rejection",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Rejection spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You forcibly eject extraplanar creatures and effects from an area, banishing summons and closing planar intrusions.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-rejuvenating-light",
    "name": "Infusion of Rejuvenating Light",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Rejuvenating Light spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The object touched sheds light as a daylight spell, and every living creature within the area is bathed in rejuvenating warmth as the text describes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-rejuvenation-cocoon",
    "name": "Infusion of Rejuvenation Cocoon",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Rejuvenation Cocoon spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A cocoon heals and restores the resting creature over an hour, regrowing and curing many harms.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-rejuvenative-corpse",
    "name": "Infusion of Rejuvenative Corpse",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Rejuvenative Corpse spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A corpse you touch becomes a font of healing: allies touching it regain hit points.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-remove-addiction",
    "name": "Infusion of Remove Addiction",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Remove Addiction spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Cures all addictions the target suffers from (see Drugs in the Book of Vile Darkness); since the spell's duration is instantaneous, it does not prevent a new addiction to the same drug at a later date.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-remove-blindness-deafness",
    "name": "Infusion of Remove Blindness/Deafness",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Remove Blindness/Deafness spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Cures blindness or deafness, whether natural or magical in origin.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-remove-curse",
    "name": "Infusion of Remove Curse",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Remove Curse spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Instantly removes all curses on a creature or object; cursed items need a caster level check.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-remove-disease",
    "name": "Infusion of Remove Disease",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Remove Disease spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Cures all diseases the subject is suffering, including magical ones with a caster level check.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-remove-fatigue",
    "name": "Infusion of Remove Fatigue",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Remove Fatigue spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The creatures you touch gain the benefits of 8 hours of restful sleep: a fatigued subject's fatigue is removed, an exhausted subject becomes merely fatigued (eliminated by 1 more hour of rest), and a subject already well rested needs no rest or sleep during the next 24 hours.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-remove-fear",
    "name": "Infusion of Remove Fear",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Remove Fear spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Suppresses fear effects and grants +4 morale on saves against fear.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-remove-nausea",
    "name": "Infusion of Remove Nausea",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Remove Nausea spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Restores to health a creature who is nauseated or sickened; it cures only the nausea or sickening effect, not disease, poison, or any other effects.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-remove-paralysis",
    "name": "Infusion of Remove Paralysis",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Remove Paralysis spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Frees creatures from paralysis or grants a new save with a bonus against such effects.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-remove-scent",
    "name": "Infusion of Remove Scent",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Remove Scent spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject loses its scent, becoming untrackable by scent and gaining protection from scent-based detection.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-renewal-pact",
    "name": "Infusion of Renewal Pact",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Renewal Pact spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A pact effect: when the subject suffers a crippling condition, a pre-chosen restorative spell triggers automatically.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-renewed-vigor",
    "name": "Infusion of Renewed Vigor",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Renewed Vigor spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You remove the fatigued condition from any creature in the area and cause exhausted creatures to become fatigued instead; in addition, affected creatures gain a +2 bonus to Constitution for 1 round per caster level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-repel-metal-or-stone",
    "name": "Infusion of Repel Metal or Stone",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Repel Metal or Stone spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Metal and stone objects and creatures are pushed away from you by an invisible barrier, as repel wood but for metal and stone.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-repel-vermin",
    "name": "Infusion of Repel Vermin",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Repel Vermin spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Creates an invisible barrier that vermin cannot cross, repelling swarms and giant vermin.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-repel-wood",
    "name": "Infusion of Repel Wood",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Repel Wood spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Wooden objects and creatures (including trees and wooden weapons) are pushed away from you by an invisible barrier for the duration.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-reprieve",
    "name": "Infusion of Reprieve",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Reprieve spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You prepare a cure light wounds spell that will automatically take effect if you are reduced to -1 hit points or lower and begin to die.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-repulsion",
    "name": "Infusion of Repulsion",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Repulsion spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Creatures cannot approach within the emanation's radius of you for the duration.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-resist-energy",
    "name": "Infusion of Resist Energy",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Resist Energy spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Grants resistance 10 (20 at 7th, 30 at 11th) against one energy type.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-resist-energy-mass",
    "name": "Infusion of Resist Energy, Mass",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Resist Energy, Mass spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As resist energy, for one creature per level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-resist-planar-alignment",
    "name": "Infusion of Resist Planar Alignment",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Resist Planar Alignment spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Protects you from the alignment traits of a plane (mildly aligned penalties).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-resistance",
    "name": "Infusion of Resistance",
    "category": "potion",
    "cost": "25 gp",
    "summary": "A specially treated herb infused with the Resistance spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Touched creature gains a +1 resistance bonus on saving throws for 1 minute.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-resistance-greater",
    "name": "Infusion of Resistance, Greater",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Resistance, Greater spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject gains a +3 resistance bonus on all saving throws for 24 hours.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-resistance-superior",
    "name": "Infusion of Resistance, Superior",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Resistance, Superior spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject gains a +6 resistance bonus on all saving throws for 24 hours.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-resonating-resistance",
    "name": "Infusion of Resonating Resistance",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Resonating Resistance spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Improves the caster’s spell resistance: each time a foe tries to overcome it, the foe must roll the spell resistance check twice and fail if either roll fails.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-resounding-voice",
    "name": "Infusion of Resounding Voice",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Resounding Voice spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject becomes supernaturally loud, and his voice carries over long distances, clearly audible up to 100 feet away per caster level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-restoration",
    "name": "Infusion of Restoration",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Restoration spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Restores all temporary ability damage, 1d4 drained ability points, fatigue/exhaustion, and one drained level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-restoration-greater",
    "name": "Infusion of Restoration, Greater",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Restoration, Greater spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As restoration, but restores all drained abilities, all drained levels, and cures insanity and confusion.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-restoration-lesser",
    "name": "Infusion of Restoration, Lesser",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Restoration, Lesser spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Dispels magical ability penalties and restores 1d4 points of temporary ability damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-restoration-mass",
    "name": "Infusion of Restoration, Mass",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Restoration, Mass spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As restoration, for one creature per level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-resurgence",
    "name": "Infusion of Resurgence",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Resurgence spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject immediately gets a new saving throw against an ongoing effect with a +2 bonus.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-resurgence-mass",
    "name": "Infusion of Resurgence, Mass",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Resurgence, Mass spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As resurgence, for your allies in an area.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-resurrection",
    "name": "Infusion of Resurrection",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Resurrection spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Restores life and full health to a creature dead up to 10 years/level, even from a piece of the body; it loses a level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-return-to-nature",
    "name": "Infusion of Return to Nature",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Return to Nature spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The target creature draws closer to an ideal state of nature, with specific effects that depend on the creature’s type and abilities.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-reveal-souls",
    "name": "Infusion of Reveal Souls",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Reveal Souls spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Reveals disembodied souls as strange, spectral lights — bobbing spheres whose color and motion depend on the soul's alignment (for example, a green glow for lawful good, a pulsating dark blue for chaotic evil); souls marked by an Infernal pact or slain by Infernals appear streaked with oily black lines. Souls vanish if they move outside the spell's range, and souls that have passed to Urcaen or other realms cannot be detected. Throughout the duration all other colors seem dim and the world appears blurry, imposing a −4 penalty to Search and Spot checks and a −4 penalty to initiative and attack rolls.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-revenance",
    "name": "Infusion of Revenance",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Revenance spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A creature dead for mere rounds returns to life temporarily to fight on, dying again when the spell ends.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-reverse-gravity",
    "name": "Infusion of Reverse Gravity",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Reverse Gravity spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Reverses gravity in the area: creatures and objects fall upward to the ceiling or sky.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-revive-outsider",
    "name": "Infusion of Revive Outsider",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Revive Outsider spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As raise dead, but for a dead outsider, restoring it to life.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-revivify",
    "name": "Infusion of Revivify",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Revivify spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Restores a creature that died within the last round to life at -1 hp, with no level loss.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-rhinos-rush",
    "name": "Infusion of Rhino’S Rush",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Rhino’S Rush spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. On your next charge you deal double damage with the first attack.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-ride-of-the-valenar",
    "name": "Infusion of Ride of the Valenar",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Ride of the Valenar spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. While this spell is in effect, the bond between you and your mount is strengthened, as the text describes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-righteous-aura",
    "name": "Infusion of Righteous Aura",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Righteous Aura spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your aura of righteousness damages evil creatures that strike you and sheds holy light.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-righteous-burst",
    "name": "Infusion of Righteous Burst",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Righteous Burst spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Holy light blasts from your upraised fist: every ally in the area is healed of 1d8 points of damage + 1 per caster level (maximum +35), and every enemy in the area takes 1d8 points of damage + 1 per caster level (maximum +35); enemies are allowed Will saves to halve the damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-righteous-exile",
    "name": "Infusion of Righteous Exile",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Righteous Exile spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. All evil creatures in the area take 20d6 points of damage; in addition, evil outsiders that fail a Will saving throw are instantly transported back to their home planes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-righteous-fury",
    "name": "Infusion of Righteous Fury",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Righteous Fury spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain sacred bonuses to Strength and temporary hit points in righteous anger, with a compulsion to fight evil.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-righteous-glare",
    "name": "Infusion of Righteous Glare",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Righteous Glare spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain a supernatural gaze attack like that of a ghaele eladrin: evil creatures with 5 HD or fewer within 60 feet must succeed on a Will save or die, and even on a successful save they are affected as by a fear spell for 2d10 rounds; neutral creatures and evil creatures with more than 5 HD must save or suffer the fear effect.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-righteous-might",
    "name": "Infusion of Righteous Might",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Righteous Might spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You grow one size, gaining +4 Str, +2 Con, +4 natural armor, and damage reduction by alignment.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-righteous-smite",
    "name": "Infusion of Righteous Smite",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Righteous Smite spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You draw down holy power to smite your enemies — evil creatures take 1d6 points of damage per caster level (maximum 20d6), or 1d8 per caster level (maximum 20d8) if they are evil outsiders, and are blinded for 1d4 rounds; neutral creatures are harmed as well, good creatures are unaffected, and a successful Will save reduces the damage to half and negates the blinding.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-righteous-wrath-of-the-faithful",
    "name": "Infusion of Righteous Wrath Of The Faithful",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Righteous Wrath Of The Faithful spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your faithful allies gain haste-like benefits and morale bonuses, stronger if they share your faith.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-ring-of-blades",
    "name": "Infusion of Ring Of Blades",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Ring Of Blades spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Blades circle you, dealing damage each round to creatures adjacent to you.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-rot-of-ages",
    "name": "Infusion of Rot of Ages",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Rot of Ages spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A cloud of rotting plant and animal matter swirls up around your target, encompassing it in a whirlwind of decay.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-rushing-waters",
    "name": "Infusion of Rushing Waters",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Rushing Waters spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A surge of water bull rushes and knocks down creatures in its path.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-rusted-blade",
    "name": "Infusion of Rusted Blade",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Rusted Blade spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your touch coats the target weapon in a rustlike patina: living creatures damaged by it are affected as the full text describes, regardless of the weapon’s material.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-rusting-grasp",
    "name": "Infusion of Rusting Grasp",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Rusting Grasp spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your touch corrodes iron and its alloys, destroying items and damaging iron golems.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-sacred-guardian",
    "name": "Infusion of Sacred Guardian",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Sacred Guardian spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Used by celestials to monitor a creature or object placed in their care: similar to status, this spell makes you constantly aware of the target's precise location and its status — whether a creature is unharmed, wounded, disabled, staggered, unconscious, dying, or dead, or whether an object is damaged.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-sacred-item",
    "name": "Infusion of Sacred Item",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Sacred Item spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You imbue a touched object with latent positive energy that discharges against undead or evil outsiders that touch or are touched by it, as the text describes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-sacrificial-skill",
    "name": "Infusion of Sacrificial Skill",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Sacrificial Skill spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Grants the caster a +5 bonus on Knowledge (religion) checks concerning sacrifices made to evil gods.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-sadism",
    "name": "Infusion of Sadism",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Sadism spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. For every 10 points of damage the caster deals in a round, she gains a +1 luck bonus on attack rolls, saving throws, and skill checks in the next round.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-safe-clearing",
    "name": "Infusion of Safe Clearing",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Safe Clearing spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Clears an area of hazards: traps are revealed, and the cleared campsite is warded from natural dangers.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-safety",
    "name": "Infusion of Safety",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Safety spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As a contingent sanctuary: when the subject is attacked, a sanctuary-like ward triggers to protect them.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-saltray",
    "name": "Infusion of Saltray",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Saltray spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A ray of salt crystals deals damage and dehydrates the target, worse against water creatures and oozes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-sanctuary",
    "name": "Infusion of Sanctuary",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Sanctuary spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Attackers must succeed on a Will save to attack the warded creature directly; ends if the creature attacks.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-sanctuary-mass",
    "name": "Infusion of Sanctuary, Mass",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Sanctuary, Mass spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As sanctuary, for one creature per level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-sandblast",
    "name": "Infusion of Sandblast",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Sandblast spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A blast of sand deals minor damage and can blind creatures in a small cone.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-sandform",
    "name": "Infusion of Sandform",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Sandform spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Transforms your body and equipment into living sand: you take the form of an ooze, immune to poison, sleep, paralysis, polymorph, stunning, critical hits, and flanking.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-sandstorm",
    "name": "Infusion of Sandstorm",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Sandstorm spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You create a duststorm or sandstorm using the parameters of control winds, except that you need not be in an area of exposed sandy soil.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-sap-strength",
    "name": "Infusion of Sap Strength",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Sap Strength spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Drains the subject’s well-being, leaving her exhausted; rest downgrades the exhaustion to fatigue and eventually removes it.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-sarcophagus-of-stone",
    "name": "Infusion of Sarcophagus Of Stone",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Sarcophagus Of Stone spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A stone sarcophagus forms around a creature, imprisoning it in stone (Cleric 6 per the spell lists).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-scalding-mud",
    "name": "Infusion of Scalding Mud",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Scalding Mud spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Functions as transmute rock to mud, except it can be cast on sand, earth, and unworked rock, and the mud created is boiling hot, dealing 5d6 points of fire damage per round to creatures mired in it.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-scent",
    "name": "Infusion of Scent",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Scent spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Grants the scent special quality for tracking and detection.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-scimitar-of-sand",
    "name": "Infusion of Scimitar of Sand",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Scimitar of Sand spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A curved 3-foot blade of screaming sand springs from your hand; its attacks are melee touch attacks dealing 1d6 damage +1 per two caster levels (maximum +10), with no Strength bonus.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-scorching-ray",
    "name": "Infusion of Scorching Ray",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Scorching Ray spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Fiery rays deal 4d6 fire damage each; one ray at 3rd level, +1 per four levels (max 3).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-scry-location",
    "name": "Infusion of Scry Location",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Scry Location spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gaze into your scrying focus and stretch out your sight, seeing and hearing a familiar place, as the text describes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-scrying",
    "name": "Infusion of Scrying",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Scrying spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Spy on a subject remotely through a mirror, pool, or holy water; the subject gets a Will save.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-scrying-greater",
    "name": "Infusion of Scrying, Greater",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Scrying, Greater spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As scrying, but faster casting, longer duration, and message and tongues work through the sensor.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-searing-exposure",
    "name": "Infusion of Searing Exposure",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Searing Exposure spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You expose the target to hours of severe heat and desert sun in a moment: 1d4 points of nonlethal damage per caster level (maximum 15d4) on a failed Fortitude save.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-searing-light",
    "name": "Infusion of Searing Light",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Searing Light spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A ray of sunlight deals 1d8/level damage to undead (max 10d8), half that to others.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-second-wind",
    "name": "Infusion of Second Wind",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Second Wind spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You recover a burst of vigor: removes fatigue and restores some hit points in a pinch.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-secure-corpse",
    "name": "Infusion of Secure Corpse",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Secure Corpse spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Turns your holy symbol into a magical receptacle capable of holding one creature's corpse: the corpse within range is transformed into divine energy, drawn into the holy symbol, and placed in stasis (as the gentle repose spell) until you release it.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-see-invisibility",
    "name": "Infusion of See Invisibility",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the See Invisibility spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You can see invisible and ethereal creatures and objects as translucent shapes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-seed-of-undeath",
    "name": "Infusion of Seed of Undeath",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Seed of Undeath spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You plant a kernel of negative energy in the subject, held in check by the subject’s life force; should the subject die while the spell lasts, undeath takes root.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-seed-of-undeath-greater",
    "name": "Infusion of Seed of Undeath, Greater",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Seed of Undeath, Greater spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Functions as seed of undeath, except it applies to any humanoid or animal that dies in the area while the spell is in effect.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-seek-eternal-rest",
    "name": "Infusion of Seek Eternal Rest",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Seek Eternal Rest spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Destroys an undead creature utterly on a failed save, granting it final rest.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-sending",
    "name": "Infusion of Sending",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Sending spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Send a 25-word message to a familiar creature anywhere, which can reply with 25 words.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-sense-heretic",
    "name": "Infusion of Sense Heretic",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Sense Heretic spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You sense creatures whose faith opposes yours within range, learning their direction.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-shadowblast",
    "name": "Infusion of Shadowblast",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Shadowblast spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A blast of shadow-stuff deals damage and can blind creatures in the burst, worse for light-sensitive foes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-shambler",
    "name": "Infusion of Shambler",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Shambler spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Summons shambling mounds that guard an area for months or fight for you for a week.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-shapechange",
    "name": "Infusion of Shapechange",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Shapechange spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Assume the form of any creature from Fine to Colossal (up to 25 HD), changing once per round as a free action.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-share-husk",
    "name": "Infusion of Share Husk",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Share Husk spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You possess a willing animal's body ('husk'), sensing through it while your own body sleeps.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-share-talents",
    "name": "Infusion of Share Talents",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Share Talents spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You create a mystical link between the two subjects: for the duration of the spell, the subjects gain a +2 bonus on any skill checks they make, as long as at least one of the characters has 1 rank or more in the skill. In addition, if either character has ranks in a skill that is not normally usable by untrained characters (such as Tumble), the other character can make untrained checks using that skill.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-shatter",
    "name": "Infusion of Shatter",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Shatter spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A sonic blast shatters brittle objects or damages a crystal creature for 1d6/level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-sheltered-vitality",
    "name": "Infusion of Sheltered Vitality",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Sheltered Vitality spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject becomes immune to ability damage, ability drain, and energy drain for the duration.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-shield-of-faith",
    "name": "Infusion of Shield of Faith",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Shield of Faith spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Touched creature gains a +2 deflection bonus to AC, +1 per six caster levels (max +5).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-shield-of-faith-legions",
    "name": "Infusion of Shield of Faith, Legion's",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Shield of Faith, Legion's spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. This spell functions like shield of faith, except that it affects multiple allies at a distance.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-shield-of-faith-mass",
    "name": "Infusion of Shield Of Faith, Mass",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Shield Of Faith, Mass spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As shield of faith, for one creature per level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-shield-of-law",
    "name": "Infusion of Shield of Law",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Shield of Law spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Wards subjects like holy aura but against chaos: +4 deflection to AC, +4 resistance on saves, SR 25 against chaotic spells, and chaotic summoned creatures are hedged out.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-shield-of-the-archons",
    "name": "Infusion of Shield of the Archons",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Shield of the Archons spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A mystic shield of beneficent energies interposes itself between you and an incoming magical attack, blocking harmful spells, spell-like abilities, and supernatural abilities; it can block one such attack each round (the first), and any targeted magical attack that strikes the shield is dissipated.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-shield-of-warding",
    "name": "Infusion of Shield Of Warding",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Shield Of Warding spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A shield gains a sacred bonus and can absorb a spell cast at its wielder once.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-shield-other",
    "name": "Infusion of Shield Other",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Shield Other spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject gains +1 deflection AC and +1 on saves, and you absorb half the damage it takes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-shifter-prowess",
    "name": "Infusion of Shifter Prowess",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Shifter Prowess spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You infuse your senses with the latent power of your lycanthrope heritage, increasing your racial bonuses on Balance, Climb, and Jump checks by +8; this spell functions only if cast while shifting.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-shifting-paths",
    "name": "Infusion of Shifting Paths",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Shifting Paths spell (Illusion); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Paths and trails in the area subtly shift: travelers become lost and arrive at wrong destinations while you pass freely.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-shillelagh",
    "name": "Infusion of Shillelagh",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Shillelagh spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your club or quarterstaff becomes a +1 weapon dealing 2d6 base damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-shivering-touch",
    "name": "Infusion of Shivering Touch",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Shivering Touch spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your melee touch attack sucks the heat from the target’s body, dealing 3d6 points of Dexterity damage; cold subtype creatures are immune.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-shivering-touch-lesser",
    "name": "Infusion of Shivering Touch, Lesser",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Shivering Touch, Lesser spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your melee touch attack delivers a bitter chill causing uncontrollable shivering and 1d6 points of Dexterity damage; cold subtype creatures are immune.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-shriveling",
    "name": "Infusion of Shriveling",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Shriveling spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Dark energy blasts and blackens the subject’s flesh, dealing 1d4 points of damage per caster level (maximum 10d4).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-shroud-of-undeath",
    "name": "Infusion of Shroud Of Undeath",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Shroud Of Undeath spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You give off the aura of undeath: you detect as undead and gain some protection from positive energy and turning.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-shun-the-dark-chaos",
    "name": "Infusion of Shun the Dark Chaos",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Shun the Dark Chaos spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You strip the taint of the Abyss from the creature touched, removing a vestige of its Abyssal heritage, as the text describes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-sign",
    "name": "Infusion of Sign",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Sign spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You give a subject a small blessing: +1 on its next attack, save, or check, which it can invoke.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-silence",
    "name": "Infusion of Silence",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Silence spell (Illusion); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Creates an area of total silence: no speech, verbal spells, or sonic effects within.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-silverbeard",
    "name": "Infusion of Silverbeard",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Silverbeard spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your beard turns to silver, granting a natural armor bonus and dwarven-like respect bonuses.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-silvered-claws",
    "name": "Infusion of Silvered Claws",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Silvered Claws spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The target treats all of its natural attacks — slam attacks, fists or claws, bite attacks, and any other natural weapons — as silvered weapons; the spell does not change an unarmed strike's damage from nonlethal to lethal, and it can be made permanent with a permanency spell.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-silvered-weapon",
    "name": "Infusion of Silvered Weapon",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Silvered Weapon spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Transforms a single weapon or projectile you are holding into a silvered weapon; the weapon may be magical, masterwork, or nonmagical, but it cannot be a natural weapon, and the spell cannot affect more than one weapon or multiple projectiles.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-sink",
    "name": "Infusion of Sink",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Sink spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject becomes heavy as lead: it sinks in water and falls swiftly, unable to swim.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-sirines-grace",
    "name": "Infusion of Sirine’S Grace",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Sirine’S Grace spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain a sirine's grace: Charisma bonus, swim speed, and the ability to captivate with your presence briefly.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-skin-of-the-cactus",
    "name": "Infusion of Skin of the Cactus",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Skin of the Cactus spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Grants a living creature the toughness and needles of a cactus: an enhancement bonus to its natural armor that rises to +5 at 13th caster level, plus defensive spines.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-skull-watch",
    "name": "Infusion of Skull Watch",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Skull Watch spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A skull you place keeps watch, alerting you telepathically when creatures approach its post.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-slash-tongue",
    "name": "Infusion of Slash Tongue",
    "category": "potion",
    "cost": "25 gp",
    "summary": "A specially treated herb infused with the Slash Tongue spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Cuts the subject’s tongue for 1 point of damage and a -1 penalty on attack rolls, saving throws, skill checks, and ability checks for 1 round.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-slashing-darkness",
    "name": "Infusion of Slashing Darkness",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Slashing Darkness spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A blade-like ray of darkness deals damage, extra against good creatures.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-slay-living",
    "name": "Infusion of Slay Living",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Slay Living spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your touch slays the subject; on a successful save it still takes 3d6 + 1/level damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-sleep",
    "name": "Infusion of Sleep",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Sleep spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Puts up to 4 HD of creatures into a magical slumber.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-sleep-mote",
    "name": "Infusion of Sleep Mote",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Sleep Mote spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Creates a dust devil of slumber-inducing particles that flies at 30 feet per round under your control or a simple program you specify.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-sleet-storm",
    "name": "Infusion of Sleet Storm",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Sleet Storm spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Driving sleet blocks all sight, makes the ground icy and slippery, and extinguishes flames.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-slime-wave",
    "name": "Infusion of Slime Wave",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Slime Wave spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A wave of green slime surges forth, dissolving wood and flesh like dungeon slime over an area.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-slipsand",
    "name": "Infusion of Slipsand",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Slipsand spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Turns an area of natural sand into a pit of deadly slipsand: a creature that cannot free itself sinks to the bottom and must hold its breath or suffocate.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-slow-burn",
    "name": "Infusion of Slow Burn",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Slow Burn spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Fuel or a creature burns slowly: a fire lasts far longer, or a target takes small fire damage over a long duration.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-slow-consumption",
    "name": "Infusion of Slow Consumption",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Slow Consumption spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The caster absorbs life from a helpless subject: that day the caster heals at twice the natural rate and needs no food, while the subject does not heal and takes Constitution damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-smell-of-fear",
    "name": "Infusion of Smell Of Fear",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Smell Of Fear spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You can smell fear: you detect frightened creatures by scent and gain bonuses against them.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-smite-heretic",
    "name": "Infusion of Smite Heretic",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Smite Heretic spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. For the duration, when you use your smite evil class ability against an evil creature with the ability to cast divine spells, you gain a +2 sacred bonus on the attack roll, and the attack deals 2 extra points of damage per paladin level instead of 1.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-smoke-stairs",
    "name": "Infusion of Smoke Stairs",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Smoke Stairs spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You step into intangible smoke and ascend as nimbly as if it were a flight of steps, running up columns of smoke as if they were normal stairs.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-snakes-swiftness",
    "name": "Infusion of Snake’S Swiftness",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Snake’S Swiftness spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject instantly takes a single extra move or attack action, snake-quick.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-snakes-swiftness-mass",
    "name": "Infusion of Snake’S Swiftness, Mass",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Snake’S Swiftness, Mass spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As snake's swiftness, for one creature per level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-snakebite",
    "name": "Infusion of Snakebite",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Snakebite spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your bite becomes venomous like a snake's, dealing damage and Constitution poison.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-snare",
    "name": "Infusion of Snare",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Snare spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Enchants a loop of rope or vine into a magical trap that entangles a creature stepping in.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-snare-astral-traveler",
    "name": "Infusion of Snare Astral Traveler",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Snare Astral Traveler spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Attracts and captures a creature traveling by astral projection, bringing it instantly before the caster and holding it motionless and visible.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-snipers-shot",
    "name": "Infusion of Sniper’S Shot",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Sniper’S Shot spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your next ranged attack can deal sneak attack damage at any range and ignores some cover.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-snow-walk",
    "name": "Infusion of Snow Walk",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Snow Walk spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Subjects walk on top of snow instead of through it, avoiding movement penalties, leaving no footprints or scent, and gaining 10 feet of land speed.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-snow-wave",
    "name": "Infusion of Snow Wave",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Snow Wave spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Creates a wave of snow that knocks creatures in its path prone and deals 4d6 points of crushing damage plus 1d6 points of cold damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-snowdrift",
    "name": "Infusion of Snowdrift",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Snowdrift spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Forms existing snow into any shape that suits your purpose — a concealing snowbank, a statue, a tunnel, or barriers over doors and windows.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-snowshoes",
    "name": "Infusion of Snowshoes",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Snowshoes spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You walk atop snow without sinking or penalty, moving at full speed over snow and ice.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-snowshoes-mass",
    "name": "Infusion of Snowshoes, Mass",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Snowshoes, Mass spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As snowshoes, for one creature per level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-snowsight",
    "name": "Infusion of Snowsight",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Snowsight spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject can see to the normal limits of vision even in whiteout conditions and ignores penalties from snow glare and snow blindness.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-soften-earth-and-stone",
    "name": "Infusion of Soften Earth and Stone",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Soften Earth and Stone spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Turns worked or unworked stone to soft clay and earth to sand or mud, collapsing structures and miring creatures.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-sonorous-hum",
    "name": "Infusion of Sonorous Hum",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Sonorous Hum spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A hum maintains concentration on another spell for you, freeing you to act while it sustains the first spell.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-sorrow",
    "name": "Infusion of Sorrow",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Sorrow spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Grief and sadness overcome the subject, imposing a -3 morale penalty on all attack rolls, saving throws, ability checks, and skill checks.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-soul-bind",
    "name": "Infusion of Soul Bind",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Soul Bind spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Traps the soul of a newly dead creature in a black sapphire, preventing its return to life.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-soul-of-light",
    "name": "Infusion of Soul of Light",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Soul of Light spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. This spell infuses your body with energy drawn from the Positive Energy Plane, as the text describes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-soul-of-order",
    "name": "Infusion of Soul of Order",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Soul of Order spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. This spell infuses your body with lawful energy drawn from the primal forces of law, as the text describes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-soul-of-shadow",
    "name": "Infusion of Soul of Shadow",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Soul of Shadow spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. This spell infuses your body with energy drawn from the Negative Energy Plane, as the text describes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-soul-of-the-waste",
    "name": "Infusion of Soul of the Waste",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Soul of the Waste spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You meld your body and up to 100 pounds of nonliving gear into an accumulation of sand, dust, ash, or loose earth, remaining aware of the passage of time.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-sound-burst",
    "name": "Infusion of Sound Burst",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Sound Burst spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A blast of sound deals 1d8 sonic damage and may stun creatures for 1 round.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-sound-lance",
    "name": "Infusion of Sound Lance",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Sound Lance spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A lance of sound deals 4d6 sonic damage (more to crystalline creatures) in a line.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-spark-of-life",
    "name": "Infusion of Spark Of Life",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Spark Of Life spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Gives an undead creature a spark of life for a time: it becomes vulnerable as if living (to critical hits, sneak attack, and healing effects).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-spawn-screen",
    "name": "Infusion of Spawn Screen",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Spawn Screen spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Protects a slain creature from becoming spawn: undead creation effects fail on the protected corpse.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-speak-with-animals",
    "name": "Infusion of Speak with Animals",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Speak with Animals spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You can converse with animals, asking questions and receiving answers within their knowledge.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-speak-with-dead",
    "name": "Infusion of Speak with Dead",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Speak with Dead spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Ask a corpse questions (two per level); answers are brief and reflect what it knew in life.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-speak-with-plants",
    "name": "Infusion of Speak with Plants",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Speak with Plants spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You can converse with normal and magical plants about the area and recent events.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-spear-of-valarian",
    "name": "Infusion of Spear of Valarian",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Spear of Valarian spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Transforms one nonmagical weapon you are carrying and have drawn into a shimmering silver spear functioning as a +1 silvered spear; against magical beasts, the weapon becomes a +3 silvered spear that deals +2d6 points of bonus damage (as the bane special property).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-spell-flower",
    "name": "Infusion of Spell Flower",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Spell Flower spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Flowers bloom on your hands, each holding a prepared touch spell you can deliver later without keeping your hands charged.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-spell-immunity",
    "name": "Infusion of Spell Immunity",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Spell Immunity spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Grants complete immunity to one named spell per four levels (4th level or lower, SR applicable).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-spell-immunity-greater",
    "name": "Infusion of Spell Immunity, Greater",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Spell Immunity, Greater spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As spell immunity, but protects against spells of up to 8th level (one spell per four caster levels).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-spell-immunity-lesser",
    "name": "Infusion of Spell Immunity, Lesser",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Spell Immunity, Lesser spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As spell immunity, but protects against one specific spell of up to 2nd level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-spell-resistance",
    "name": "Infusion of Spell Resistance",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Spell Resistance spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Grants spell resistance 12 + caster level to the touched creature.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-spell-resistance-mass",
    "name": "Infusion of Spell Resistance, Mass",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Spell Resistance, Mass spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As spell resistance, for one creature per level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-spell-vulnerability",
    "name": "Infusion of Spell Vulnerability",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Spell Vulnerability spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Lowers the subject's spell resistance and imposes penalties on saves against spells.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-spellstaff",
    "name": "Infusion of Spellstaff",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Spellstaff spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Stores one spell you cast into your staff, which you can later cast as if storing it in a ring of spell storing (usable once until recharged).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-spider-climb",
    "name": "Infusion of Spider Climb",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Spider Climb spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Subject can climb and travel on vertical surfaces and ceilings like a spider.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-spider-hand",
    "name": "Infusion of Spider Hand",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Spider Hand spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The caster’s hand detaches and becomes a Small monstrous spider he controls and sees through, ranging up to 20 feet per level away.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-spider-legs",
    "name": "Infusion of Spider Legs",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Spider Legs spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The caster grows four spider legs from her torso, gaining a 30-foot speed and the ability to climb walls and ceilings with her hands free.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-spider-plague",
    "name": "Infusion of Spider Plague",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Spider Plague spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Calls a plague of monstrous spiders to attack your enemies.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-spiderskin",
    "name": "Infusion of Spiderskin",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Spiderskin spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject's skin becomes spider-like: natural armor, bonuses to Hide and Climb, growing with level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-spike-growth",
    "name": "Infusion of Spike Growth",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Spike Growth spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Ground vegetation turns sharp and tangled: creatures take 1d4 damage for each 5 feet moved through it, and a failed Reflex save injures a leg, halving speed.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-spike-stones",
    "name": "Infusion of Spike Stones",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Spike Stones spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The ground becomes sharp stone spikes: creatures moving through take 1d8 damage per 5 feet and may be slowed by leg injuries, and the area counts as difficult terrain.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-spikes",
    "name": "Infusion of Spikes",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Spikes spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As brambles, but stronger: the wooden weapon gains +2 enhancement and deals more piercing damage, and hurts attackers.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-spiritjaws",
    "name": "Infusion of Spiritjaws",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Spiritjaws spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Jaws of force snap and grapple creatures repeatedly, holding them as they bite.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-spiritual-advisor",
    "name": "Infusion of Spiritual Advisor",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Spiritual Advisor spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You consult with a spirit, angel, or divine aspect of your deity that manifests as a barely shimmering presence and answers your questions.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-spiritual-cavalry",
    "name": "Infusion of Spiritual Cavalry",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Spiritual Cavalry spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As spiritual charger, except that you create one horseman for every four caster levels, up to a maximum of five horsemen at 20th level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-spiritual-charger",
    "name": "Infusion of Spiritual Charger",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Spiritual Charger spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A lance-wielding rider of pure force, bearing the symbol of your deity, springs into being and immediately makes one attack against a target you designate within range.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-spiritual-chariot",
    "name": "Infusion of Spiritual Chariot",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Spiritual Chariot spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A spectral chariot and horses carry you and companions swiftly and safely overland.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-spiritual-guardian",
    "name": "Infusion of Spiritual Guardian",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Spiritual Guardian spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A translucent knight clad in heavy plate, bearing your deity’s holy symbol, appears by your side and guards you.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-spiritual-weapon",
    "name": "Infusion of Spiritual Weapon",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Spiritual Weapon spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A weapon of force shaped like your deity's weapon strikes foes for 1d8+1/three levels.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-spittle-spray",
    "name": "Infusion of Spittle Spray",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Spittle Spray spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You can spit out to close range; if you have a poison bite attack, this spell lets you spit your poison out to that range with a ranged touch attack.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-splinterbolt",
    "name": "Infusion of Splinterbolt",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Splinterbolt spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A bolt of splintered wood deals piercing damage and embeds splinters that keep damaging the target.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-spore-field",
    "name": "Infusion of Spore Field",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Spore Field spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You cause the ground to become thick with spore-ridden fungus, making the area difficult terrain with the additional effects given in the text.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-spores-of-the-vrock",
    "name": "Infusion of Spores of the Vrock",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Spores of the Vrock spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Spores fill the area around the caster, dealing 1d8 damage to nearby creatures and then growing inside them for further damage over 10 rounds.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-spread-of-contentment",
    "name": "Infusion of Spread of Contentment",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Spread of Contentment spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. This spell calms creatures within the area for the duration: hostile and unfriendly creatures become indifferent, indifferent creatures turn friendly, and friendly creatures become helpful; it directly counters the effects of spread of savagery (Book of Vile Darkness).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-spread-of-savagery",
    "name": "Infusion of Spread of Savagery",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Spread of Savagery spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. All living creatures in the area become hostile to anyone not affected by the spell, likely attacking outsiders while keeping their wits.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-stabilize",
    "name": "Infusion of Stabilize",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Stabilize spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Stabilizes all dying creatures in an area, stopping their bleeding (a burst version of the orison-like effect).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-stalking-brand",
    "name": "Infusion of Stalking Brand",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Stalking Brand spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Brands a creature so your animals and allies can track it relentlessly and gain bonuses against it.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-stalwart-pact",
    "name": "Infusion of Stalwart Pact",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Stalwart Pact spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A pact effect: when the subject drops below half hit points, prearranged spells (like a heal-lite and protection) trigger to keep it fighting.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-standing-wave",
    "name": "Infusion of Standing Wave",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Standing Wave spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Creates a standing wave of water that you ride swiftly across a body of water.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-stars-of-arvandor",
    "name": "Infusion of Stars of Arvandor",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Stars of Arvandor spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You create one tiny, twinkling star per level (maximum 10 stars) that orbit your head; as a free action you can launch one star per round at a target you designate, or as a standard action launch up to three stars per round at one or more targets, each star requiring its own ranged touch attack.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-starvation",
    "name": "Infusion of Starvation",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Starvation spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject suffers sudden starvation and thirst: nonlethal damage and fatigue as if days without food.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-status",
    "name": "Infusion of Status",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Status spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Monitors the condition and location of allies: dying, stable, poisoned, diseased, and so on.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-status-greater-hob",
    "name": "Infusion of Status, Greater",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Status, Greater spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. This spell is identical to status, except as noted in the spell's text.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-stay-the-hand",
    "name": "Infusion of Stay the Hand",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Stay the Hand spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your words invoke compassion and mercy: if the target creature fails its save, it refrains from attacking you or targeting you with spells for the remainder of the current round. You can cast this spell during an opponent's turn after the opponent announces its intention to attack you or target you with a spell; if the opponent becomes subject to the spell, it can choose a new target to attack, but takes a −4 circumstance penalty on its attack roll, and it can likewise redirect a spell that had been targeted on you, but must succeed on a Concentration check (DC 15 + the spell's level) or the spell is wasted.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-sticky-saddle",
    "name": "Infusion of Sticky Saddle",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Sticky Saddle spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You stick to your saddle: huge bonuses to Ride checks to stay mounted.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-stifle-spell",
    "name": "Infusion of Stifle Spell",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Stifle Spell spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As the creature casts a spell, your simple magical phrase momentarily confounds it: the target must succeed on a Concentration check (DC equal to 14 + your key ability modifier + the level of the spell being cast) to ignore the distraction, or else it loses the spell.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-stone-body",
    "name": "Infusion of Stone Body",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Stone Body spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your body becomes living stone: damage reduction, immunity to many effects, but vulnerability to stone-shaping magic.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-stone-bones",
    "name": "Infusion of Stone Bones",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Stone Bones spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. An undead creature you touch gains damage reduction 5/bludgeoning from reinforced bones.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-stone-shape",
    "name": "Infusion of Stone Shape",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Stone Shape spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Shapes an existing piece of stone into any form you choose.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-stone-shape-greater",
    "name": "Infusion of Stone Shape, Greater",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Stone Shape, Greater spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As stone shape, but you can shape far more stone into finer, more complex forms.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-stone-tell",
    "name": "Infusion of Stone Tell",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Stone Tell spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You commune with natural or worked stone, which answers questions about creatures and events it has witnessed (its perspective is limited and literal).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-stone-to-flesh",
    "name": "Infusion of Stone to Flesh",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Stone to Flesh spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Restores a petrified creature to flesh (with a system shock survival roll) or converts plain stone to flesh.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-stonehold",
    "name": "Infusion of Stonehold",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Stonehold spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Hands of stone erupt and grapple creatures over an area, holding them fast.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-stoneskin",
    "name": "Infusion of Stoneskin",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Stoneskin spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Grants damage reduction 10/adamantine, absorbing up to 10 points per level (max 150).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-stop-heart",
    "name": "Infusion of Stop Heart",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Stop Heart spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Gives the subject a massive heart attack: she drops to -8 hit points, then -9, and dies at the end of the next round unless healed or stabilized.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-stored-prayer",
    "name": "Infusion of Stored Prayer",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Stored Prayer spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You cast a 1st-level spell that will not take effect until you call for it at a later time.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-storm-mote",
    "name": "Infusion of Storm Mote",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Storm Mote spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Creates a whirling vortex of sand that flies at 60 feet per round under your control or a simple program you specify.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-storm-of-elemental-fury",
    "name": "Infusion of Storm Of Elemental Fury",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Storm Of Elemental Fury spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A storm calls elementals of all types and rains elemental damage over an area as they rage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-storm-of-fire-and-ice",
    "name": "Infusion of Storm of Fire and Ice",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Storm of Fire and Ice spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A shower of lava globs and hailstones rains down for 1 round, dealing 6d6 points of cold damage and 6d6 points of fire damage to everything in the area.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-storm-of-vengeance",
    "name": "Infusion of Storm of Vengeance",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Storm of Vengeance spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A vast storm: deafening thunder, acid rain, lightning (6d6), hail (5d6), then blinding rain and altered terrain.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-storm-tower",
    "name": "Infusion of Storm Tower",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Storm Tower spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Creates a tower of storm-cloud that shelters you and strikes attackers with lightning.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-stormrage",
    "name": "Infusion of Stormrage",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Stormrage spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You ride the storm: fly in storm winds, immunity to wind and lightning, and you hurl lightning bolts each round.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-strategic-charge",
    "name": "Infusion of Strategic Charge",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Strategic Charge spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain protection while charging: no attacks of opportunity for your charge movement and a deflection bonus.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-strength-of-stone",
    "name": "Infusion of Strength Of Stone",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Strength Of Stone spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You draw strength from the earth: a Strength bonus while standing on stone or earth.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-stretch-weapon",
    "name": "Infusion of Stretch Weapon",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Stretch Weapon spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The affected weapon stretches, extending toward its target, though it can be wielded normally: the spell adds an additional 5 feet of reach to a melee weapon for a single attack.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-stunning-hand",
    "name": "Infusion of Stunning Hand",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Stunning Hand spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You temporarily gain the ability to stun creatures with your unarmed attacks, once per round for the duration.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-stupor",
    "name": "Infusion of Stupor",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Stupor spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Places one already-helpless creature in a drugged, clouded state in which she cannot think clearly or take actions, though she can be led along.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-subdue-aura",
    "name": "Infusion of Subdue Aura",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Subdue Aura spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The target’s aura recedes, making it appear less powerful than it really is to creatures that can see such marks.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-sublime-revelry",
    "name": "Infusion of Sublime Revelry",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Sublime Revelry spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Immediately removes any lingering effects of pain, including penalties imposed by symbol of pain and similar spells (without preventing damage or unrelated effects), and induces a pleasurable, fuguelike state with additional effects, among them immunity to mind-affecting spells and effects.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-substitute-domain",
    "name": "Infusion of Substitute Domain",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Substitute Domain spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You swap one of your current domains for another that your deity offers, gaining the new domain’s granted power and access to its spells.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-subvert-planar-essence",
    "name": "Infusion of Subvert Planar Essence",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Subvert Planar Essence spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Changes a creature's planar essence: an outsider's alignment subtype and traits are suppressed or converted.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-sudden-stalagmite",
    "name": "Infusion of Sudden Stalagmite",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Sudden Stalagmite spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A stalagmite erupts beneath a creature, impaling it for piercing damage and knocking it prone.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-babau-demon",
    "name": "Infusion of Summon Babau Demon",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Summon Babau Demon spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Summons a babau demon to fight for you, as a summon monster variant of fixed creature.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-bearded-devil",
    "name": "Infusion of Summon Bearded Devil",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Summon Bearded Devil spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Summons a bearded devil (barbazu) to fight for you.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-bralani-eladrin",
    "name": "Infusion of Summon Bralani Eladrin",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Summon Bralani Eladrin spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Summons a bralani eladrin to fight for you or aid you.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-desert-ally-i",
    "name": "Infusion of Summon Desert Ally I",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Summon Desert Ally I spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Summons a desert creature from the 1st-level list, which appears where you designate and acts immediately on your turn.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-desert-ally-ii",
    "name": "Infusion of Summon Desert Ally II",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Summon Desert Ally II spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As summon desert ally I, except you can summon one 2nd-level creature or 1d3 1st-level creatures of the same kind.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-desert-ally-iii",
    "name": "Infusion of Summon Desert Ally III",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Summon Desert Ally III spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As summon desert ally I, except you can summon one 3rd-level creature or 1d3 2nd-level creatures of the same kind.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-desert-ally-iv",
    "name": "Infusion of Summon Desert Ally IV",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Summon Desert Ally IV spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As summon desert ally I, except you can summon one 4th-level creature, 1d3 3rd-level creatures of the same kind, or 1d4+1 lower-level creatures of the same kind.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-desert-ally-ix",
    "name": "Infusion of Summon Desert Ally IX",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Summon Desert Ally IX spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As summon desert ally I, except you can summon one 9th-level creature, 1d3 8th-level creatures of the same kind, or 1d4+1 lower-level creatures of the same kind.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-desert-ally-v",
    "name": "Infusion of Summon Desert Ally V",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Summon Desert Ally V spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As summon desert ally I, except you can summon one 5th-level creature, 1d3 4th-level creatures of the same kind, or 1d4+1 lower-level creatures of the same kind.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-desert-ally-vi",
    "name": "Infusion of Summon Desert Ally VI",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Summon Desert Ally VI spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As summon desert ally I, except you can summon one 6th-level creature, 1d3 5th-level creatures of the same kind, or 1d4+1 lower-level creatures of the same kind.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-desert-ally-vii",
    "name": "Infusion of Summon Desert Ally VII",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Summon Desert Ally VII spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As summon desert ally I, except you can summon one 7th-level creature, 1d3 6th-level creatures of the same kind, or 1d4+1 lower-level creatures of the same kind.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-desert-ally-viii",
    "name": "Infusion of Summon Desert Ally VIII",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Summon Desert Ally VIII spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As summon desert ally I, except you can summon one 8th-level creature, 1d3 7th-level creatures of the same kind, or 1d4+1 lower-level creatures of the same kind.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-elemental-monolith",
    "name": "Infusion of Summon Elemental Monolith",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Summon Elemental Monolith spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Summons an elemental monolith — a colossal, prince-level elemental — to fight for you briefly.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-elementite-swarm",
    "name": "Infusion of Summon Elementite Swarm",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Summon Elementite Swarm spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Summons a swarm of tiny elementites (of a chosen element) to harass enemies.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-elysian-thrush",
    "name": "Infusion of Summon Elysian Thrush",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Summon Elysian Thrush spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Summons an Elysian thrush whose song grants morale bonuses and removes fear and despair.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-giants",
    "name": "Infusion of Summon Giants",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Summon Giants spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Summons one or more giants that appear where you designate and attack your enemies.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-golem-phb2",
    "name": "Infusion of Summon Golem",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Summon Golem spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You wave your hand over a lump of flesh, clay, stone, or iron while chanting a lengthy incantation, and a golem of similar substance appears to serve you: the golem begins acting at the start of your next turn and follows your simple commands, and it disappears when it is destroyed or when the spell's duration expires.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-gorax",
    "name": "Infusion of Summon Gorax",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Summon Gorax spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Summons one gorax per three caster levels (maximum five) to the caster's aid. Each gorax appears where the caster designates and immediately makes a Will saving throw: if it succeeds, it feels no compulsion to obey and may be hostile toward the summoner; if it fails, it obeys as if charmed for the spell's duration, attacking the caster's foes (directable only if the caster can communicate with it). When the duration ends the gorax do not disappear — the charm breaks, leaving them in full possession of their faculties, and they either flee or attack their summoner.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-greater-elemental",
    "name": "Infusion of Summon Greater Elemental",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Summon Greater Elemental spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Summons a greater elemental of a chosen type to fight for you.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-holy-symbol",
    "name": "Infusion of Summon Holy Symbol",
    "category": "potion",
    "cost": "25 gp",
    "summary": "A specially treated herb infused with the Summon Holy Symbol spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You conjure a small holy symbol in your hand, which you can use to turn undead, as a divine focus, or for any other normal purpose.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-hound-archon",
    "name": "Infusion of Summon Hound Archon",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Summon Hound Archon spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Summons a hound archon to aid and fight for you.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-monster-i",
    "name": "Infusion of Summon Monster I",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Summon Monster I spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Summons a low-tier celestial or fiendish creature that fights for you.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-monster-ii",
    "name": "Infusion of Summon Monster II",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Summon Monster II spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Summons tier-2 celestial or fiendish creatures that fight for you.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-monster-iii",
    "name": "Infusion of Summon Monster III",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Summon Monster III spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Summons tier-3 celestial or fiendish creatures that fight for you.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-monster-iv",
    "name": "Infusion of Summon Monster IV",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Summon Monster IV spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Summons tier-4 celestial or fiendish creatures that fight for you.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-monster-ix",
    "name": "Infusion of Summon Monster IX",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Summon Monster IX spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Summons tier-9 celestial or fiendish creatures that fight for you.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-monster-v",
    "name": "Infusion of Summon Monster V",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Summon Monster V spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Summons tier-5 celestial or fiendish creatures that fight for you.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-monster-vi",
    "name": "Infusion of Summon Monster VI",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Summon Monster VI spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Summons tier-6 celestial or fiendish creatures that fight for you.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-monster-vii",
    "name": "Infusion of Summon Monster VII",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Summon Monster VII spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Summons tier-7 celestial or fiendish creatures that fight for you.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-monster-viii",
    "name": "Infusion of Summon Monster VIII",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Summon Monster VIII spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Summons tier-8 celestial or fiendish creatures that fight for you.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-natures-ally-i",
    "name": "Infusion of Summon Nature's Ally I",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Summon Nature's Ally I spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Summons a natural animal or creature that fights for you.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-natures-ally-ii",
    "name": "Infusion of Summon Nature's Ally II",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Summon Nature's Ally II spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Summons tier-2 natural creatures that fight for you.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-natures-ally-iii",
    "name": "Infusion of Summon Nature's Ally III",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Summon Nature's Ally III spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Summons tier-3 natural creatures that fight for you.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-natures-ally-iv",
    "name": "Infusion of Summon Nature's Ally IV",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Summon Nature's Ally IV spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Summons tier-4 natural creatures that fight for you.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-natures-ally-ix",
    "name": "Infusion of Summon Nature's Ally IX",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Summon Nature's Ally IX spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Summons tier-9 natural creatures, up to elder elementals, that fight for you.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-natures-ally-v",
    "name": "Infusion of Summon Nature's Ally V",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Summon Nature's Ally V spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Summons tier-5 natural creatures that fight for you.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-natures-ally-vi",
    "name": "Infusion of Summon Nature's Ally VI",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Summon Nature's Ally VI spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Summons tier-6 natural creatures that fight for you.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-natures-ally-vii",
    "name": "Infusion of Summon Nature's Ally VII",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Summon Nature's Ally VII spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Summons tier-7 natural creatures that fight for you.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-natures-ally-viii",
    "name": "Infusion of Summon Nature's Ally VIII",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Summon Nature's Ally VIII spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Summons tier-8 natural creatures that fight for you.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-razorbats",
    "name": "Infusion of Summon Razorbats",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Summon Razorbats spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Summons 1d4+1 razorbats plus one per two caster levels above 4th (maximum 10 total) to the caster's aid. The razorbats appear where the caster designates and immediately make standard Will saves against the spell: any that succeed feel no compulsion to obey and may be hostile; any that fail obey as if charmed for the duration, attacking the caster's foes (directable only if the caster can communicate with them). When the duration ends the razorbats do not disappear — the charm breaks, and they either flee or attack their summoner.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-swarm",
    "name": "Infusion of Summon Swarm",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Summon Swarm spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Summons a swarm of bats, rats, or spiders that attacks creatures in its area.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-undead-i",
    "name": "Infusion of Summon Undead I",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Summon Undead I spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Summons an undead creature (skeleton or zombie from the list) to fight for you.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-undead-ii",
    "name": "Infusion of Summon Undead II",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Summon Undead II spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As summon undead I, but a stronger undead.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-undead-iii",
    "name": "Infusion of Summon Undead III",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Summon Undead III spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As summon undead I, but a stronger undead (ghoul-tier).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-undead-iv",
    "name": "Infusion of Summon Undead IV",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Summon Undead IV spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As summon undead I, but a stronger undead (ghast/wight tier).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-summon-undead-v",
    "name": "Infusion of Summon Undead V",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Summon Undead V spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As summon undead I, but the strongest undead of the series (shadow/mummy tier).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-sunbeam",
    "name": "Infusion of Sunbeam",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Sunbeam spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Creates one beam of blinding light per level (max one per round), 4d6 damage and devastating to undead and fungi.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-sunburst",
    "name": "Infusion of Sunburst",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Sunburst spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A globe of searing light blinds creatures and deals 6d6 (1d6/level, max 25d6 to undead and light-vulnerable foes).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-sunstroke",
    "name": "Infusion of Sunstroke",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Sunstroke spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You cause a living creature to suffer heatstroke: 2d6 points of nonlethal damage, and on a failed Fortitude save it becomes fatigued, or exhausted if already fatigued.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-suppress-glyph",
    "name": "Infusion of Suppress Glyph",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Suppress Glyph spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Suppresses a glyph, symbol, or ward so creatures can pass without triggering it.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-surefoot",
    "name": "Infusion of Surefoot",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Surefoot spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain sure footing: bonuses against trip and to balance on treacherous ground.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-surefooted-stride",
    "name": "Infusion of Surefooted Stride",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Surefooted Stride spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You move over difficult terrain and slippery surfaces at full speed without penalty.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-surefooted-stride-mass",
    "name": "Infusion of Surefooted Stride, Mass",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Surefooted Stride, Mass spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As surefooted stride, for one creature per level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-surge-of-fortune",
    "name": "Infusion of Surge of Fortune",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Surge of Fortune spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your deity’s power guides you: a +2 luck bonus on attack and damage rolls, saving throws, skill checks, ability checks, spell penetration checks, and Armor Class, until you discharge it.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-suspend-disease",
    "name": "Infusion of Suspend Disease",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Suspend Disease spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Keeps a disease already infecting the subject from harming him for that day, without curing it or allowing a save to throw it off.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-sustain",
    "name": "Infusion of Sustain",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Sustain spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Instantly relieves the negative effects of hunger and thirst and allows the targets to go without food or water for the spell's duration, suffering no ill effects from the deprivation; when the spell ends, normal eating and drinking resume without adverse effects.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-swamp-lung",
    "name": "Infusion of Swamp Lung",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Swamp Lung spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Swamp gas fills creatures' lungs in the area: they take damage and sicken as they choke on miasma.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-swim",
    "name": "Infusion of Swim",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Swim spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Grants a swim speed to the subject.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-swim-mass",
    "name": "Infusion of Swim, Mass",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Swim, Mass spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As swim, for one creature per level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-sword-of-conscience",
    "name": "Infusion of Sword of Conscience",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Sword of Conscience spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The target creature, which must be evil, is struck by pangs of conscience and remorse, instantaneously taking Wisdom and Charisma damage according to the magnitude of its evil; the lost ability points return only through normal recovery, not when the spell expires, and the effect is not language-dependent.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-symbol-of-death",
    "name": "Infusion of Symbol of Death",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Symbol of Death spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A rune that, when triggered, slays the weakest creatures within 60 feet up to 150 hp total.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-symbol-of-fear",
    "name": "Infusion of Symbol of Fear",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Symbol of Fear spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A rune that, when triggered, panics all within 60 feet for 1 round per level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-symbol-of-insanity",
    "name": "Infusion of Symbol of Insanity",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Symbol of Insanity spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A rune that, when triggered, drives all within 60 feet permanently insane.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-symbol-of-pain",
    "name": "Infusion of Symbol of Pain",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Symbol of Pain spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A rune that, when triggered, wracks all within 60 feet with pain (-4 attacks, skills, abilities) for 1 hour.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-symbol-of-persuasion",
    "name": "Infusion of Symbol of Persuasion",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Symbol of Persuasion spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A rune that, when triggered, charms all within 60 feet for 1 hour per level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-symbol-of-sleep",
    "name": "Infusion of Symbol of Sleep",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Symbol of Sleep spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. When triggered, all creatures within 60 feet fall into a catatonic slumber for 3d6x10 minutes (creatures of 10 HD or more are unaffected).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-symbol-of-spell-loss",
    "name": "Infusion of Symbol Of Spell Loss",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Symbol Of Spell Loss spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A triggered symbol causes spellcasters to lose prepared spells or slots.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-symbol-of-stunning",
    "name": "Infusion of Symbol of Stunning",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Symbol of Stunning spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A rune that, when triggered, stuns all within 60 feet for 1d6 rounds.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-symbol-of-thirst",
    "name": "Infusion of Symbol of Thirst",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Symbol of Thirst spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Functions as symbol of death, except that creatures within 60 feet of the triggered symbol are consumed by terrible thirst (as the tormenting thirst spell) for 10 minutes per caster level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-symbol-of-weakness",
    "name": "Infusion of Symbol of Weakness",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Symbol of Weakness spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A rune that, when triggered, imposes 3d6 Strength damage on all within 60 feet.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-sympathy",
    "name": "Infusion of Sympathy",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Sympathy spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Draws a specified kind of creature irresistibly to a place or object, where it stays contentedly.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-symphonic-nightmare",
    "name": "Infusion of Symphonic Nightmare",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Symphonic Nightmare spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A symphony of horror invades dreams: sleeping creatures take damage and are fatigued and shaken.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-telepathic-aura",
    "name": "Infusion of Telepathic Aura",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Telepathic Aura spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain a telepathic aura: you can communicate mentally with creatures near you and sense their presence.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-telepathy-block",
    "name": "Infusion of Telepathy Block",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Telepathy Block spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Blocks all telepathic communication within the affected area, making telepathic conversation impossible; cast on a point in space the effect is stationary, while centered on a creature or mobile object it emanates from it and moves with it.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-thaw",
    "name": "Infusion of Thaw",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Thaw spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Fills all everfrost, slush, snow, and mud in the area with heat: ice and snow become slush, slush everfrost, and everfrost bog.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-thin-air",
    "name": "Infusion of Thin Air",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Thin Air spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Thins the oxygen in the area so creatures suffer extreme altitude sickness, taking 1 point of damage to all ability scores on a failed save.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-thornskin",
    "name": "Infusion of Thornskin",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Thornskin spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Thorns grow from your skin: attackers take piercing damage and you gain a natural armor bonus.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-thousand-needles",
    "name": "Infusion of Thousand Needles",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Thousand Needles spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A thousand needles pierce the subject through any armor, dealing 2d6 damage and imposing a -4 circumstance penalty on attack rolls, saving throws, and checks; creatures with damage reduction are immune.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-thunder-field",
    "name": "Infusion of Thunder Field",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Thunder Field spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You create an area of turbulent, sonic energy: for the duration of the spell, any creature that starts its turn in the spell's area must make a Fortitude save or take 1d8 points of sonic damage, and affected creatures must also make a Reflex save or be knocked prone (failing this save has no effect on a creature that is already prone).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-thunderhead",
    "name": "Infusion of Thunderhead",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Thunderhead spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A small storm cloud forms over a creature, zapping it with small lightning bolts each round.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-thunderous-roar",
    "name": "Infusion of Thunderous Roar",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Thunderous Roar spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Like great thunderclap from a beast's roar: sonic damage, deafness, and knockdown in a cone.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-tidal-surge",
    "name": "Infusion of Tidal Surge",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Tidal Surge spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A surge of water slams creatures, dealing damage and bull rushing them backward.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-tigers-tooth",
    "name": "Infusion of Tiger’S Tooth",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Tiger’S Tooth spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As magic fang: one natural weapon gains +1 enhancement — but printed as its own spell; functions like magic fang for a chosen natural weapon.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-tomb-of-light",
    "name": "Infusion of Tomb of Light",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Tomb of Light spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You attempt to draw out the impure substance of an evil extraplanar creature and replace it with your own pure substance: when you touch the target, it must make a Fortitude saving throw, and if it succeeds it is unaffected; the exchange is draining for you to cast but deadly to evil outsiders and other extraplanar creatures with the taint of evil.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-tongue-of-baalzebul",
    "name": "Infusion of Tongue of Baalzebul",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Tongue of Baalzebul spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Gives the caster a devil’s silver tongue: a +2 competence bonus on Bluff, Diplomacy, and Gather Information checks.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-tongues",
    "name": "Infusion of Tongues",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Tongues spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject can speak and understand any language spoken by intelligent creatures.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-tortoise-shell",
    "name": "Infusion of Tortoise Shell",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Tortoise Shell spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your natural armor becomes enormous like a tortoise shell, at the cost of speed.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-touch-of-adamantine",
    "name": "Infusion of Touch of Adamantine",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Touch of Adamantine spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Grants one weapon the properties of an adamantine weapon: a +1 enhancement bonus on attack rolls (as though it were masterwork), the ability to bypass hardness when striking objects or sundering weapons (ignoring hardness less than 20), and one-third more hit points than normal.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-touch-of-fatigue",
    "name": "Infusion of Touch of Fatigue",
    "category": "potion",
    "cost": "25 gp",
    "summary": "A specially treated herb infused with the Touch of Fatigue spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your touch fatigues the target for the duration.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-touch-of-jorasco",
    "name": "Infusion of Touch of Jorasco",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Touch of Jorasco spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You channel the healing mastery of House Jorasco, as the text describes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-touch-of-restoration",
    "name": "Infusion of Touch of Restoration",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Touch of Restoration spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. While this spell is active, you can use your lay on hands ability to cure ability damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-touch-of-the-blackened-soul",
    "name": "Infusion of Touch of the Blackened Soul",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Touch of the Blackened Soul spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. This spell adds a taint of evil to your magic, granting you special potency against your good-aligned enemies for a few rounds.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-towering-oak",
    "name": "Infusion of Towering Oak",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Towering Oak spell (Illusion); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You appear as a tall oak tree, hiding in plain sight in forests with a strong disguise.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-towering-thunderhead",
    "name": "Infusion of Towering Thunderhead",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Towering Thunderhead spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. An enormous cylinder of roiling dark clouds provides concealment like fog cloud, with contrary winds like a wind wall and sheets of lightning.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-train-animal",
    "name": "Infusion of Train Animal",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Train Animal spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You train an animal with tricks quickly, teaching it as if spending weeks in a single casting's work.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-transmute-metal-to-wood",
    "name": "Infusion of Transmute Metal to Wood",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Transmute Metal to Wood spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. All nonmagical metal in the area becomes wood; magical metal items get a saving throw, and attended items use their bearer's save.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-transmute-mud-to-rock",
    "name": "Infusion of Transmute Mud to Rock",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Transmute Mud to Rock spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Transforms natural mud or quicksand into permanent soft stone.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-transmute-rock-to-lava",
    "name": "Infusion of Transmute Rock To Lava",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Transmute Rock To Lava spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Transforms rock into flowing lava over a large volume.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-transmute-rock-to-mud",
    "name": "Infusion of Transmute Rock to Mud",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Transmute Rock to Mud spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Transforms natural rock into mud deep enough to mire creatures and collapse ceilings.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-transmute-sand-to-glass",
    "name": "Infusion of Transmute Sand to Glass",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Transmute Sand to Glass spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Transforms a mass of normal sand of any depth into solid glass permanently; creatures in the sand may save to escape or be trapped and must be broken out.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-transmute-sand-to-stone",
    "name": "Infusion of Transmute Sand to Stone",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Transmute Sand to Stone spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Transforms a mass of sand of any depth into solid stone permanently; creatures that fail to escape are entangled and must break out by damaging the stone.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-transmute-stone-to-sand",
    "name": "Infusion of Transmute Stone to Sand",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Transmute Stone to Sand spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Turns natural, uncut, or unworked stone into an equal volume of sand up to 10 feet deep; magical stone is not affected.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-travelers-mount",
    "name": "Infusion of Traveler’S Mount",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Traveler’S Mount spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As mount, but the conjured horse is hardier and can travel long distances without tiring.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-treasure-scent",
    "name": "Infusion of Treasure Scent",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Treasure Scent spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You can smell treasure: detecting concentrations of precious metal and gems by scent within range.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-tree-shape",
    "name": "Infusion of Tree Shape",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Tree Shape spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You become a Large tree or shrub of a familiar kind, aware of your surroundings but unable to move or act; indistinguishable from a real tree without close inspection.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-tremor",
    "name": "Infusion of Tremor",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Tremor spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A localized tremor shakes the ground, potentially knocking creatures prone and damaging structures.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-tremorsense",
    "name": "Infusion of Tremorsense",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Tremorsense spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Grants tremorsense out to 30 feet.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-triadspell",
    "name": "Infusion of Triadspell",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Triadspell spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Prepares a spell in triplicate: when you cast the chosen spell, it is cast three times from one slot (for lower-level spells).",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-trip-vine",
    "name": "Infusion of Trip Vine",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Trip Vine spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Plants within the area grow together to form a tangle: any creature entering an affected square must succeed on a Reflex save or fall prone.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-true-resurrection",
    "name": "Infusion of True Resurrection",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the True Resurrection spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Restores life with no level or Constitution loss, even to a creature dead 200 years, destroyed, or with no body.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-true-seeing",
    "name": "Infusion of True Seeing",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the True Seeing spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Subject sees through darkness, illusions, invisibility, and transformations, and discerns true forms, to 120 feet.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-tsunami",
    "name": "Infusion of Tsunami",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Tsunami spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A gigantic wave crashes over an area, dealing massive damage and sweeping creatures and structures away.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-turn-anathema",
    "name": "Infusion of Turn Anathema",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Turn Anathema spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Choose one non-neutral aspect of your own alignment: creatures of that alignment component are especially vulnerable to your turning, as the text describes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-undead-bane-weapon",
    "name": "Infusion of Undead Bane Weapon",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Undead Bane Weapon spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A weapon gains the undead bane property: +2 enhancement and +2d6 damage against undead.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-undeath-to-death",
    "name": "Infusion of Undeath to Death",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Undeath to Death spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Destroys 1d4 HD per level of the weakest undead in the area, as circle of death for undead.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-undeaths-eternal-foe",
    "name": "Infusion of Undeath’S Eternal Foe",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Undeath’S Eternal Foe spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain powerful defenses against undead: AC and save bonuses, immunity to their special attacks, and a damaging aura against them.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-undermaster",
    "name": "Infusion of Undermaster",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Undermaster spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You command the earth itself: earth elementals obey you, you earthglide, and you can use various earth spells at will within the duration.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-undetectable-alignment",
    "name": "Infusion of Undetectable Alignment",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Undetectable Alignment spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Conceals a creature's or object's alignment from all divinations.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-unearthly-beauty",
    "name": "Infusion of Unearthly Beauty",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Unearthly Beauty spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As blinding beauty, but at any time during the duration of the spell you can evoke an additional effect as a free action: any creature within 30 feet of you that is looking directly at you must succeed on a Will save or die.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-unhallow",
    "name": "Infusion of Unhallow",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Unhallow spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Designates a site as unholy, mirroring hallow: it strengthens undead, blocks good summoned creatures, and can carry one attached spell effect.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-unholy-aura",
    "name": "Infusion of Unholy Aura",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Unholy Aura spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. An unholy radiance grants +4 deflection AC, +4 saves, SR 25 vs good spells, and weakens good attackers.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-unholy-storm",
    "name": "Infusion of Unholy Storm",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Unholy Storm spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. An unholy storm rains profane energy, damaging good creatures in the area like holy storm inverted.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-unliving-weapon",
    "name": "Infusion of Unliving Weapon",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Unliving Weapon spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Causes an undead creature to explode in a 10-foot burst dealing 1d6 damage per two caster levels (maximum 10d6) when struck or at a set time.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-unmovable-object",
    "name": "Infusion of Unmovable Object",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Unmovable Object spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Charged with divine energy, you bond yourself to the ground beneath your feet and become the epitome of stability; the spell ends instantly if you move from your current position.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-unseen-crafter",
    "name": "Infusion of Unseen Crafter",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Unseen Crafter spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. This spell functions as unseen servant, except that the unseen crafter can be assigned any one task that can be accomplished by the use of the Craft skill.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-unyielding-roots",
    "name": "Infusion of Unyielding Roots",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Unyielding Roots spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Roots anchor you and allies: huge bonuses against movement effects, fast healing while rooted to the earth.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-updraft",
    "name": "Infusion of Updraft",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Updraft spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A column of rising air lifts you (and lets you glide down safely) — a sudden updraft that can raise you high and carry you.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-veil-of-shadow",
    "name": "Infusion of Veil Of Shadow",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Veil Of Shadow spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A veil of shadow grants concealment and a bonus on Hide checks, and darkvision briefly.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-veil-of-undeath",
    "name": "Infusion of Veil Of Undeath",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Veil Of Undeath spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain the traits of undeath wholesale: immunities to critical hits, ability damage to physical scores, and negative energy healing, among undead traits.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-vengeance-halo",
    "name": "Infusion of Vengeance Halo",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Vengeance Halo spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A luminous ring of holy power appears above the head of a good creature and remains until the spell expires or the creature is slain (reduced to -10 hp); if the creature is slain, the halo discharges an arc of divine energy that deals 1d6 points of damage per caster level (maximum 20d6) to the slayer, who can make a Reflex save to reduce the damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-vigor",
    "name": "Infusion of Vigor",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Vigor spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject gains fast healing 2 for the duration.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-vigor-greater",
    "name": "Infusion of Vigor, Greater",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Vigor, Greater spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject gains fast healing 4 for the duration.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-vigor-lesser",
    "name": "Infusion of Vigor, Lesser",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Vigor, Lesser spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject gains fast healing 1 for the duration.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-vigor-mass-lesser",
    "name": "Infusion of Vigor, Mass Lesser",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Vigor, Mass Lesser spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As lesser vigor, for one creature per level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-vigorous-circle",
    "name": "Infusion of Vigorous Circle",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Vigorous Circle spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As greater vigor, shared among all creatures in a circle around you.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-vile-death",
    "name": "Infusion of Vile Death",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Vile Death spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As binding/animate: a slain creature's soul is bound to an undead you create, making it intelligent and loyal — vile death binds a soul into an undead servant.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-vile-lance",
    "name": "Infusion of Vile Lance",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Vile Lance spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Creates a weapon of blackness only the caster can wield, treated as a +2 shortspear that deals vile damage; throwing it ends the spell after the attack.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-vine-mine",
    "name": "Infusion of Vine Mine",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Vine Mine spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Vines fill an area in one of several modes you choose: entangling, hampering, or damaging growth planted like a mine.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-vine-strike",
    "name": "Infusion of Vine Strike",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Vine Strike spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. For one round your attacks can sneak attack plant creatures as if they were not immune.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-virtue",
    "name": "Infusion of Virtue",
    "category": "potion",
    "cost": "25 gp",
    "summary": "A specially treated herb infused with the Virtue spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Touched creature gains 1 temporary hit point for 1 minute.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-visage-of-the-deity",
    "name": "Infusion of Visage Of The Deity",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Visage Of The Deity spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You take on your deity's visage: ability boosts, wings, resistances, and a divine aura.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-visage-of-the-deity-greater",
    "name": "Infusion of Visage Of The Deity, Greater",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Visage Of The Deity, Greater spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A greater divine visage: larger ability boosts and powerful resistances and damaging aura.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-visage-of-the-deity-lesser",
    "name": "Infusion of Visage Of The Deity, Lesser",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Visage Of The Deity, Lesser spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A lesser divine visage: small ability boosts and minor traits of your deity.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-vision-of-glory",
    "name": "Infusion of Vision Of Glory",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Vision Of Glory spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain a +2 Charisma bonus and a radiant countenance briefly.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-vision-of-heaven",
    "name": "Infusion of Vision of Heaven",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Vision of Heaven spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your words allow the target creature the merest glimpse of the blessed joy of the Seven Heavens, spurring a moment of regret for its evil deeds: for 1 round the target is dazed, and for the next 24 hours the creature takes a -1 penalty on all Will saves related to redemption.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-vision-of-the-omniscient-eye",
    "name": "Infusion of Vision of the Omniscient Eye",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Vision of the Omniscient Eye spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain great vision, allowing you to see everything in the surrounding area clearly, with a +10 bonus on Spot checks as the text describes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-visions-of-the-future",
    "name": "Infusion of Visions of the Future",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Visions of the Future spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You view events slightly before they happen, gaining time to react to them: you gain a +2 sacred bonus on all saving throws and a +2 dodge bonus to Armor Class. Once during the spell's duration, as an immediate action, you can choose to discharge the spell to gain a greater bonus — a sacred bonus on all saving throws and a dodge bonus to your Armor Class equal to 1/2 your caster level (maximum +25), lasting until the beginning of your next turn.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-vortex-of-teeth",
    "name": "Infusion of Vortex Of Teeth",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Vortex Of Teeth spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A vortex of snapping force-teeth swirls around you, biting adjacent creatures each round.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-vulnerability",
    "name": "Infusion of Vulnerability",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Vulnerability spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject loses its damage reduction and resistances, becoming vulnerable to all damage types.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-wall-of-chaos",
    "name": "Infusion of Wall Of Chaos",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Wall Of Chaos spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A wall of chaotic energy damages lawful creatures passing through and blocks spells like wall of force in part.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-wall-of-coldfire",
    "name": "Infusion of Wall of Coldfire",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Wall of Coldfire spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. An opaque curtain of coldfire springs into existence; one side sends forth waves of cold dealing damage to creatures within 20 feet.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-wall-of-dispel-magic",
    "name": "Infusion of Wall Of Dispel Magic",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Wall Of Dispel Magic spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A wall that dispels spells and suppresses the magic of creatures passing through it.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-wall-of-evil",
    "name": "Infusion of Wall Of Evil",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Wall Of Evil spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A wall of evil energy damages good creatures passing through and hedges good outsiders.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-wall-of-fire",
    "name": "Infusion of Wall of Fire",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Wall of Fire spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A blazing curtain of fire damages creatures passing through (2d6+1/level) and radiates heat to one side.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-wall-of-good",
    "name": "Infusion of Wall Of Good",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Wall Of Good spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A wall of good energy damages evil creatures passing through and hedges evil outsiders.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-wall-of-greater-dispel-magic",
    "name": "Infusion of Wall Of Greater Dispel Magic",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Wall Of Greater Dispel Magic spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As wall of dispel magic, but dispels with greater dispel magic's power.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-wall-of-law",
    "name": "Infusion of Wall Of Law",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Wall Of Law spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A wall of lawful energy damages chaotic creatures passing through and hedges chaotic outsiders.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-wall-of-light",
    "name": "Infusion of Wall Of Light",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Wall Of Light spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A wall of bright light blinds creatures passing through and damages undead.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-wall-of-magma",
    "name": "Infusion of Wall of Magma",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Wall of Magma spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Creates a wall of thick, glowing magma that merges into adjoining rock surfaces and can seal off a passage or breach, burning flammable materials in contact with it.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-wall-of-ooze",
    "name": "Infusion of Wall of Ooze",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Wall of Ooze spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Conjures a flat vertical wall of festering, stinking organic ooze that can seal a passage or breach, inserting itself into surrounding nonliving material.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-wall-of-salt",
    "name": "Infusion of Wall of Salt",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Wall of Salt spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Creates a gleaming wall of salt crystal 1 inch thick per caster level that merges into adjoining rock surfaces and can seal a passage or be used to construct new walls.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-wall-of-sand",
    "name": "Infusion of Wall Of Sand",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Wall Of Sand spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A wall of churning sand blocks sight and movement; creatures inside suffocate and take damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-wall-of-smoke",
    "name": "Infusion of Wall Of Smoke",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Wall Of Smoke spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A thin wall of smoke blocks sight like fog and sickens creatures passing through.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-wall-of-stone",
    "name": "Infusion of Wall of Stone",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Wall of Stone spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Creates a permanent wall of stone (15 hp per inch of thickness) that can trap creatures with a Reflex save.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-wall-of-thorns",
    "name": "Infusion of Wall of Thorns",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Wall of Thorns spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Creates a dense barrier of thorns; pushing through deals 25 damage minus AC per round of effort.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-wall-of-vermin",
    "name": "Infusion of Wall of Vermin",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Wall of Vermin spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You cause a thick but porous wall, alive with hungry bugs, to roil up from beneath the earth.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-wall-of-water",
    "name": "Infusion of Wall Of Water",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Wall Of Water spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A wall of water blocks attacks, douses fires, and slows creatures passing through.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-war-mount",
    "name": "Infusion of War-mount",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the War-mount spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. At your touch, your mount’s natural attacks become magical, gaining a +2 enhancement bonus on attack and damage rolls for the duration.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-warding-gems",
    "name": "Infusion of Warding Gems",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Warding Gems spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You cast this spell upon one or more gems, imbuing them with healing energy; the gems leap from your hand, fly to the target, and orbit its head like ioun stones, each gem a receptacle holding 10 hp that the target can access as a free action, releasing the energy as an unerring arc of divine power.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-warning-shout",
    "name": "Infusion of Warning Shout",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Warning Shout spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As an immediate response, your shout grants an ally a bonus to AC or a save against an imminent attack.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-warp-wood",
    "name": "Infusion of Warp Wood",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Warp Wood spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Bends, twists, or warps wooden objects, ruining weapons, doors, and tools.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-waste-strider",
    "name": "Infusion of Waste Strider",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Waste Strider spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject can move through desert environments without hindrance, ignoring movement penalties and skill-check penalties for desert and waste terrain.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-water-breathing",
    "name": "Infusion of Water Breathing",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Water Breathing spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Subjects can breathe underwater; the duration is divided among all recipients.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-water-walk",
    "name": "Infusion of Water Walk",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Water Walk spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Subjects can tread on liquids as if solid ground.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-waterspout",
    "name": "Infusion of Waterspout",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Waterspout spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A waterspout churns across the water, battering ships and creatures and sucking them upward.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-wave-of-grief",
    "name": "Infusion of Wave Of Grief",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Wave Of Grief spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A wave of grief imposes penalties on enemies' attacks, saves, and checks as sorrow overwhelms them.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-weapon-of-energy",
    "name": "Infusion of Weapon Of Energy",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Weapon Of Energy spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A weapon deals +1d6 damage of a chosen energy type on each hit.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-weapon-of-impact",
    "name": "Infusion of Weapon Of Impact",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Weapon Of Impact spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As keen edge, but for bludgeoning weapons: doubles their threat range.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-weapon-of-the-deity",
    "name": "Infusion of Weapon Of The Deity",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Weapon Of The Deity spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your deity's favored weapon appears in your hand with enhancement and special qualities scaling with your level.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-weather-eye",
    "name": "Infusion of Weather Eye",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Weather Eye spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You accurately predict the weather for the next several days in the region.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-web",
    "name": "Infusion of Web",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Web spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Fills an area with sticky webs that entangle creatures and hinder movement.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-weight-of-sin",
    "name": "Infusion of Weight of Sin",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Weight of Sin spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You pull the target’s sins from its soul and expose them for all to see; the effect depends on how the target’s alignment compares to your own, and has no effect on a target of the same alignment.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-were-doom",
    "name": "Infusion of Were-Doom",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Were-Doom spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Cast at night, it infects 1d4 randomly chosen humanoids in the area with lycanthropy; they change form and savagely attack those around them.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-whirlwind",
    "name": "Infusion of Whirlwind",
    "category": "potion",
    "cost": "6,000 gp",
    "summary": "A specially treated herb infused with the Whirlwind spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Creates a powerful whirlwind under your control that can pick up creatures, dealing damage each round they remain caught.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-whirlwind-greater",
    "name": "Infusion of Whirlwind, Greater",
    "category": "potion",
    "cost": "7,650 gp",
    "summary": "A specially treated herb infused with the Whirlwind, Greater spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As whirlwind, but a larger, longer-lasting cyclone under finer control.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-whispering-sand",
    "name": "Infusion of Whispering Sand",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Whispering Sand spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Sand, ash, or dust serves as a conduit for conversation with creatures in far-removed locales whose identities you fix in your mind.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-whiteout",
    "name": "Infusion of Whiteout",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Whiteout spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Swirling snow and strong wind surround you or a designated creature: those inside take penalties to AC and Dexterity-based checks and move at half speed.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-wild-instincts",
    "name": "Infusion of Wild Instincts",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Wild Instincts spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You sharpen your instincts and awareness: while the spell is in effect, you retain your Dexterity bonus to AC even if flat-footed, as the text describes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-wild-runner",
    "name": "Infusion of Wild Runner",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Wild Runner spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain animal speed and endurance: faster movement, Run benefits, and scent briefly.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-wind-at-back",
    "name": "Infusion of Wind At Back",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Wind At Back spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Favorable winds double your group's overland speed by filling sails and easing travel.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-wind-tunnel",
    "name": "Infusion of Wind Tunnel",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Wind Tunnel spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A tunnel of controlled wind lets creatures travel swiftly through it or blocks a passage with rushing air.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-wind-walk",
    "name": "Infusion of Wind Walk",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Wind Walk spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You and allies become vaporous and fly at up to 600 feet per round, changing form at will.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-wind-wall",
    "name": "Infusion of Wind Wall",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Wind Wall spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A curtain of wind deflects arrows and bolts, scatters gases, and hinders flying creatures.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-wingblast",
    "name": "Infusion of Wingblast",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Wingblast spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Large wings of mist-resembling vapor form at your sides, bearing you aloft; at your command, the wings transform into a great blast of wind or a cloud of fog.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-winged-mount",
    "name": "Infusion of Winged Mount",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Winged Mount spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your mount gains wings and a fly speed for the duration.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-winged-watcher",
    "name": "Infusion of Winged Watcher",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Winged Watcher spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your body hunches and shrinks as dusky feathers sprout from your skin and your arms become wings: you take the form of an owl or a raven.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-wings-of-air",
    "name": "Infusion of Wings Of Air",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Wings Of Air spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Wings of air improve a flying creature's maneuverability by one step.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-wings-of-air-greater",
    "name": "Infusion of Wings Of Air, Greater",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Wings Of Air, Greater spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As wings of air, but improves maneuverability by two steps.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-wings-of-the-sea",
    "name": "Infusion of Wings Of The Sea",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Wings Of The Sea spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Fins and gills let you swim well and breathe underwater briefly: you gain a swim speed and water breathing.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-winter-chill",
    "name": "Infusion of Winter Chill",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Winter Chill spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your touch or presence chills: a creature takes cold damage and fatigue from wintry cold.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-winters-embrace",
    "name": "Infusion of Winter’S Embrace",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Winter’S Embrace spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Cold winds embrace the area, dealing cold damage and coating surfaces in frost that hampers movement.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-withering-palm",
    "name": "Infusion of Withering Palm",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Withering Palm spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your palm strike withers the subject over time: it takes Constitution damage each day as it wastes away.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-wood-rot",
    "name": "Infusion of Wood Rot",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Wood Rot spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Rots and decays wooden objects and structures, destroying them rapidly.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-wood-shape",
    "name": "Infusion of Wood Shape",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Wood Shape spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Reshapes a piece of wood into any simple form you desire.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-wood-wose",
    "name": "Infusion of Wood Wose",
    "category": "potion",
    "cost": "50 gp",
    "summary": "A specially treated herb infused with the Wood Wose spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Calls a wood wose — a nature spirit — to perform simple tasks and guide you through the wild.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-wooden-blight",
    "name": "Infusion of Wooden Blight",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Wooden Blight spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You transform the subject’s body into wood from the inside out; each round the subject must make a new saving throw or progress through the blight’s stages as the text describes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-word-of-balance",
    "name": "Infusion of Word Of Balance",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Word Of Balance spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. As holy word/blasphemy for neutrality: harms creatures of extreme alignments (strongly lawful/chaotic/good/evil) according to their imbalance.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-word-of-binding",
    "name": "Infusion of Word Of Binding",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Word Of Binding spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Words of power form chains of force that hold a creature fast, as a binding hold that scales with your faith.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-word-of-chaos",
    "name": "Infusion of Word of Chaos",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Word of Chaos spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Nonchaotic creatures are deafened, confused, stunned, or killed and banished, by their HD relative to yours.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-wounding-touch",
    "name": "Infusion of Wounding Touch",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Wounding Touch spell (Transmutation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A sheath of energy crackles around your hand, creating a pair of spectral claws: with a successful unarmed melee attack you inflict 1d6 points of damage per level, as the text describes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-wrack",
    "name": "Infusion of Wrack",
    "category": "potion",
    "cost": "1,400 gp",
    "summary": "A specially treated herb infused with the Wrack spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. The subject is wracked with pain: blinded and helpless with agony for several rounds, then sickened.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-wrack-earth",
    "name": "Infusion of Wrack Earth",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Wrack Earth spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Earth and stone blast upward along a 30-foot line, smashing creatures and knocking them out of the way: the spell deals 1d6 points of bludgeoning damage per caster level (maximum 15d6) to every creature it contacts and creates a 5-foot-wide mound of stone and rubble along the path of the line. Creatures within the area that fail their Reflex saves are moved to a random side of the rubble; creatures that succeed on their saving throws take half damage and are not moved by the mound of rubble. The rubble created is difficult terrain that requires 2 squares of movement to enter.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-wracking-touch",
    "name": "Infusion of Wracking Touch",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Wracking Touch spell (Necromancy); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Your touch wracks a creature with pain: it takes damage and is sickened briefly.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-wreath-of-flames",
    "name": "Infusion of Wreath of Flames",
    "category": "potion",
    "cost": "750 gp",
    "summary": "A specially treated herb infused with the Wreath of Flames spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A burst of white-hot fire springs into existence around you: at the end of each of your turns, any enemy adjacent to you or sharing your space takes 1d6 points of fire damage, and your melee attacks deal an extra 1d6 points of fire damage.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-wretched-blight",
    "name": "Infusion of Wretched Blight",
    "category": "potion",
    "cost": "4,550 gp",
    "summary": "A specially treated herb infused with the Wretched Blight spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Unholy darkness smites good and neutral creatures for 1d8 damage per caster level (maximum 15d8), stunning good creatures struck.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-zeal",
    "name": "Infusion of Zeal",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Zeal spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You gain a sacred surge: +2 dodge bonus to AC and you can move swiftly to reach a chosen foe, ignoring intervening enemies.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-zealot-pact",
    "name": "Infusion of Zealot Pact",
    "category": "potion",
    "cost": "3,300 gp",
    "summary": "A specially treated herb infused with the Zealot Pact spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. A pact effect: when you fall in battle under set conditions, restorative and empowering spells trigger to return you to the fight.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-zone-of-glacial-cold",
    "name": "Infusion of Zone of Glacial Cold",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Zone of Glacial Cold spell (Conjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Creates a zone of icy cold dealing 1d6 points of cold damage per round to creatures in the area.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-zone-of-natural-purity",
    "name": "Infusion of Zone of Natural Purity",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Zone of Natural Purity spell (Evocation); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. You create an area of natural purity that hampers aberrations and other unnatural creatures, as the text describes.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-zone-of-respite",
    "name": "Infusion of Zone Of Respite",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Zone Of Respite spell (Abjuration); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Creates a zone where extraplanar creatures cannot enter or be summoned, a safe respite from outsiders.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-zone-of-revelation",
    "name": "Infusion of Zone Of Revelation",
    "category": "potion",
    "cost": "2,250 gp",
    "summary": "A specially treated herb infused with the Zone Of Revelation spell (Divination); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Reveals everything hidden in an area: invisible, ethereal, disguised, and shapechanged creatures are exposed.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infusion-of-zone-of-truth",
    "name": "Infusion of Zone of Truth",
    "category": "potion",
    "cost": "300 gp",
    "summary": "A specially treated herb infused with the Zone of Truth spell (Enchantment); eating the herb releases the spell, cast at the minimum caster level for a spell of its level. Creatures in the area can't speak deliberate lies, though they may stay silent or evasive.",
    "source": "Masters of the Wild — Chapter 3: Tools of the Trade (Infusions, Table 3-3)",
    "sourceUrl": "",
    "ruleset": "core"
  },
];

export const INFU_EQUIPMENT_OMNI: EquipmentItem[] = [];
