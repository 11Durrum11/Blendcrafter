/**
 * Magic Item Compendium armor properties (Chapter 1, pp. 6–15):
every armor/shield special property in the chapter, including the
synergy variants printed as their own entries. Filed under the core
pack's "armor-or-weapon-special-ability" category; each summary
opens with the property's printed scope (armor, shield, or both)
and notes synergy prerequisites. Prices are as printed — either a
bonus equivalent ("+1 bonus") or a flat gold cost.
 *
 * Short mechanical summaries in our own words, cited to book
 * + page. Batch 11a of the "everything" program; see
 * REBUILD-NOTES.md.
 */
import type { MagicItemDefinition } from "@/engine/types";

export const MAGIC_ITEM_COMPENDIUM_ARMOR_PROPERTIES: MagicItemDefinition[] = [
  {
    "id": "acidic-armor-special-ability",
    "name": "Acidic Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Armor property (armor or shield). A thin film of acid continuously covers the surface of this armor or shield, which is not damaged by this effect. An acidic suit of armor or shield deals 2d4 points of acid damage per full round of contact to each opponent grappling you, and to any object that remains in direct contact with it (except objects you are holding) for that amount of time. (moderate conjuration; CL 6th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 6",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "agility-armor-special-ability",
    "name": "Agility Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+500 gp",
    "summary": "Armor property (armor). While wearing armor that has this property, you gain a +1 resistance bonus on Reflex saving throws. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 6",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "agility-greater-armor-special-ability",
    "name": "Agility, Greater Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+8,000 gp",
    "summary": "Armor property. As agility, except the armor grants a +5 resistance bonus on Reflex saving throws. Synergy property (requires the improved property). (strong transmutation; CL 15th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 6",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "agility-improved-armor-special-ability",
    "name": "Agility, Improved Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+4,000 gp",
    "summary": "Armor property. As agility, except the armor grants a +3 resistance bonus on Reflex saving throws. Synergy property (requires the agility property). (moderate transmutation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 6",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "anchoring-armor-special-ability",
    "name": "Anchoring Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Armor property (armor or shield). When wearing armor or a shield that has this property, you are difficult to move from your position during a fight. You gain a +5 enhancement bonus on any ability check to resist a bull rush, overrun, or trip attack. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 6",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "anchoring-greater-armor-special-ability",
    "name": "Anchoring, Greater Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Armor property. This armor functions as anchoring armor, except that it grants a +10 enhancement bonus on ability checks against bull rush, overrun, and trip attacks. Synergy property (requires the anchoring property). (moderate transmutation; CL 10th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 6",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "aporter-armor-special-ability",
    "name": "Aporter Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+20,000 gp",
    "summary": "Armor property (armor or shield). When it is activated, a suit of armor or shield that has this property transports you and your equipment to any spot within 800 feet that you can visualize or specify, as the dimension door spell. The aporter property functions two times per day. (moderate conjuration; CL 10th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 6",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "averter-armor-special-ability",
    "name": "Averter Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+13,000 gp",
    "summary": "Armor property (shield). When you activate an averter shield, all enemies who can see it must succeed on DC 14 Will saves or be overcome by a powerful aversion to the shield. For the next 3 rounds, affected creatures do not approach within 30 feet of you. This effect is a mindaffecting compulsion ability. The averter property functions three times per day. (faint enchantment; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 7",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "axeblock-armor-special-ability",
    "name": "Axeblock Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Armor property (armor or shield). An axeblock shield or suit of armor magically turns away slashing weapons, such as axes and most swords. While wearing armor or carrying a shield that has this property, you gain damage reduction 5/bludgeoning or piercing. (moderate abjuration; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 7",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "balance-armor-special-ability",
    "name": "Balance Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+3,750 gp",
    "summary": "Armor property (armor). While wearing armor that has this property, you gain a +5 competence bonus on Balance checks. (faint abjuration; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 7",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "balance-greater-armor-special-ability",
    "name": "Balance, Greater Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+18,750 gp",
    "summary": "Armor property. As the balance property, except the armor grants a +15 competence bonus on Balance checks. Synergy property (requires the improved property). (strong abjuration; CL 15th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 7",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "balance-improved-armor-special-ability",
    "name": "Balance, Improved Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+11,250 gp",
    "summary": "Armor property. As the balance property, except the armor grants a +10 competence bonus on Balance checks. Synergy property (requires the balance property). (moderate abjuration; CL 10th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 7",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "bane-blind-armor-special-ability",
    "name": "Bane Blind Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+15,000 gp",
    "summary": "Armor property (armor). Originally designed for rangers and bounty hunters, bane blind armor affects a specific type or subtype of creature. Three times per day while wearing this armor, you can render yourself imperceptible to creatures of the designated type or subtype. (moderate illusion; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 7",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "beastskin-armor-special-ability",
    "name": "Beastskin Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Armor property (armor). First created by powerful druids, armor that has this property is particularly useful to characters of that class. Whenever you use wild shape, you can expend one additional daily use of that ability to transform your beastskin armor along with you, rather than simply allowing it to merge with your body. (strong transmutation; CL 13th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 7",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "blinking-armor-special-ability",
    "name": "Blinking Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+15,000 gp",
    "summary": "Armor property (armor). When you activate armor that has this property, you can “blink” back and forth between the Material Plane and the Ethereal Plane, as if affected by a blink spell. The blinking property functions once per day, and the effect lasts for 1 minute. (moderate transmutation; CL 10th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 9",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "blueshine-armor-special-ability",
    "name": "Blueshine Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1,500 gp",
    "summary": "Armor property (metal armor). A suit of armor imbued with this property never tarnishes and is immune to acid damage and rusting effects. While wearing blueshine armor, you gain a +2 competence bonus on Hide checks. (strong abjuration; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 9",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "blurring-armor-special-ability",
    "name": "Blurring Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Armor property (armor). When you activate this armor, your appearance becomes distorted and hazy, as if you were affected by a blur spell. The blurring property functions three times per day, and the effect lasts for 5 rounds. (faint illusion; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 9",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "blurring-greater-armor-special-ability",
    "name": "Blurring, Greater Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Armor property. As blurring armor, except that the effect's duration is 10 minutes, and you can activate the blurring property any number of times per day. Synergy property (requires the blurring property). (strong illusion; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 9",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "buoyant-armor-special-ability",
    "name": "Buoyant Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+4,000 gp",
    "summary": "Armor property (armor). This armor is buoyant in water or similar liquids. Armor that has this property does not apply an armor check penalty on your Swim checks. Additionally, it grants you a +2 competence bonus on Swim checks while you wear it. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 9",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "called-armor-special-ability",
    "name": "Called Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+2,000 gp",
    "summary": "Armor property (armor or shield). Provided that you and your called armor or shield are on the same plane, you can call it to you by speaking the proper command word, regardless of the intervening distance. If you aren't wearing armor at the time, a suit of called armor appears on your body, as though you had donned it in the normal fashion. (moderate conjuration; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 9",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "commander-armor-special-ability",
    "name": "Commander Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+2,000 gp",
    "summary": "Armor property (armor or shield). A suit of armor or shield that has this property always appears brilliant and gleaming, even in filthy or squalid conditions, though it doesn't shed any useful light. Attempts to paint over or obscure its finish do not diminish its brightness. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 9",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "daylight-armor-special-ability",
    "name": "Daylight Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+3,000 gp",
    "summary": "Armor property (armor or shield). When activated, a suit of armor or a shield that has this property glows with the brilliance of a daylight spell. This effect functions for up to 30 minutes per day, but the duration need not be continuous; you can turn the effect off with a swift action. (faint evocation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 9",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "death-ward-armor-special-ability",
    "name": "Death Ward Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Armor property (armor or shield). Armor and shields with this property are favored by those dedicated to fighting the foul art of necromancy. While wearing or using death ward armor or a death ward shield, you can activate it to ignore any death effect (including death spells, magical death effects, and energy drain) or negative energy effect (such as inflict spells or chill touch). The death ward property functions once per day. (moderate; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 10",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "deepdweller-armor-special-ability",
    "name": "Deepdweller Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+12,000 gp",
    "summary": "Armor property (armor). While wearing deepdweller armor, you can breathe water and are immune to damage from cold water and from pressure in extreme depths. Armor that has this property does not apply an armor check penalty on your Swim checks, and wearing deepdweller armor allows you to converse with any water-breathing creature that has a language. (moderate transmutation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 10",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "displacement-armor-special-ability",
    "name": "Displacement Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Armor property (armor). When you activate displacement armor, you appear to be standing right next to your actual location, as if affected by a displacement spell. The displacement property functions once per day, and the effect lasts for 5 rounds. (faint illusion; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 10",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "dragondodger-armor-special-ability",
    "name": "Dragondodger Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Armor property (light armor). When wearing armor that has this property, you gain the evasion ability (see the monk class feature, PH 41), but only against breath weapons. Whenever a breath weapon would normally allow you a Reflex saving throw for half damage, you instead take no damage on a successful save. (moderate transmutation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 10",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "easy-travel-armor-special-ability",
    "name": "Easy Travel Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1,500 gp",
    "summary": "Armor property (armor). When wearing armor that has this property, you can carry up to a medium load as if it were a light load (ignoring the maximum Dexterity bonus, check penalty, and reduced speed normally incurred by a medium load; these reductions apply only to penalties for the load you carry, not to any reduction in speed caused by the armor itself). In addition, you can walk for up to 10 hours in a day before having to make Constitution checks to avoid taking nonlethal damage. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 10",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ectoplasmic-feedback-armor-special-ability",
    "name": "Ectoplasmic Feedback Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Armor property (armor). A suit of armor that has this property creates a backlash of positive energy against incorporeal attackers. Any time you are hit by an incorporeal touch attack while wearing it, the armor deals 1d6 points of damage to the attacker (with no miss chance for incorporealness). (faint abjuration; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 10",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ectoplasmic-wall-armor-special-ability",
    "name": "Ectoplasmic Wall Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Armor property (shield). When you activate a shield that has this property and drop it at your feet, a wall of ectoplasm comes into being, as though created by the wall of ectoplasm psionic power. The wall has an area of up to ten 10-foot squares or forms a sphere or hemisphere with a radius of up to 10 feet. The shield is the point of origin for the effect. (moderate conjuration; CL 11th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 11",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "energy-defense-armor-special-ability",
    "name": "Energy Defense Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Armor property (armor or shield). This armor continues to give you the benefit of its prerequisite property. In addition, while wearing or using this armor or shield, you can wreathe it in the type of energy specified by its energy resistance property; while this effect is active, any creature that strikes you with a natural weapon, unarmed attack, or nonreach manufactured melee weapon takes 1d6+10 points of energy damage of the specified type. The effect lasts for 5 rounds or until you dismiss it (a swift action). Synergy property (requires the energy resistance, improved energy resistance, or greater energy resistance property). (moderate evocation; CL 10th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 11",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "energy-immunity-armor-special-ability",
    "name": "Energy Immunity Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Armor property (armor or shield). Upon activating armor or a shield that has this property, you gain immunity to damage from one energy type of your choice (acid, cold, electricity, or fire). Each type of energy immunity produces a corresponding minor effect that does not alter the item's function. (strong abjuration; CL 13th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 11",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "fearsome-armor-special-ability",
    "name": "Fearsome Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+15,000 gp",
    "summary": "Armor property (armor or shield). When you activate armor or a shield that has this property, you create an aura of terror in a 20-foot radius around yourself. Every creature in this area briefly perceives a creature from its worst nightmare instead of you, becoming panicked for 1 round. On a successful DC 16 Will save, the creature is shaken for 1 round instead. (moderate necromancy; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 11",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "freedom-armor-special-ability",
    "name": "Freedom Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+5 bonus",
    "summary": "Armor property (armor). While wearing armor that has this property, you move and attack normally, even under circumstances that impede movement, as if affected by a freedom of movement spell. (moderate abjuration; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 11",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ghost-ward-armor-special-ability",
    "name": "Ghost Ward Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Armor property (armor or shield). A suit of armor or shield that has this property allows you to add its enhancement bonus (but not its armor or shield bonus) to your Armor Class against touch attacks (including incorporeal touch attacks). (faint conjuration; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 11",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "gilled-armor-special-ability",
    "name": "Gilled Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+6,000 gp",
    "summary": "Armor property (armor). A water-breathing wearer of gilled armor can breathe and speak freely in air. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 11",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "hammerblock-armor-special-ability",
    "name": "Hammerblock Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Armor property (armor or shield). A hammerblock shield or suit of armor magically turns away bludgeoning weapons, such as maces and clubs. While wearing armor or carrying a shield that has this property, you gain damage reduction 5/piercing or slashing. (moderate abjuration; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 12",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "healing-armor-special-ability",
    "name": "Healing Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+8,000 gp",
    "summary": "Armor property (armor). When activated, armor that has this property heals you of 2d8+5 points of damage. If your hit points are reduced to –1 to –9, this effect occurs automatically, without requiring any action. The healing property functions once per day. (faint conjuration; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 12",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "healing-greater-armor-special-ability",
    "name": "Healing, Greater Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+24,000 gp",
    "summary": "Armor property. As healing armor, except that greater healing armor heals you of 3d8+15 points of damage. The greater healing property functions twice per day. Synergy property (requires the healing property). (strong conjuration; CL 15th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 12",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "heartening-armor-special-ability",
    "name": "Heartening Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+2,000 gp",
    "summary": "Armor property (shield). When activated, a heartening shield grants you 5 temporary hit points, which last up to 5 minutes. These temporary hit points don't stack with temporary hit points from any other source. The heartening property functions two times per day. (faint necromancy; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 12",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "landing-armor-special-ability",
    "name": "Landing Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+4,000 gp",
    "summary": "Armor property (armor). A suit of armor that has this property allows you to ignore any damage dealt by the first 60 feet of a fall. Regardless of how far you fall, you can always land on your feet if you so choose. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 12",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "linked-armor-special-ability",
    "name": "Linked Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+6,000 gp",
    "summary": "Armor property (armor or shield). When you activate a suit of armor or a shield that has this property, you can form a telepathic bond with any or all known wearers of other linked items within 10 miles. Wearers can communicate telepathically through the bond even if they do not share a language. No special effect or influence is established as a result of the bond. (moderate divination; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 12",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "magic-eating-armor-special-ability",
    "name": "Magic-Eating Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+10,000 gp",
    "summary": "Armor property (armor). While wearing magic-eating armor, whenever you succeed on a saving throw against a spell that targets you, the armor heals you of 1 point of damage per level of the spell. This healing occurs after the spell takes effect. (strong abjuration; CL 16th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 12",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "manifester-armor-special-ability",
    "name": "Manifester Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+6,000 gp",
    "summary": "Armor property (shield). While using a shield that has this property, you can draw 3 power points from it to manifest a psionic power. You must use all these points on the same power, which cannot use power points from any other source. The manifester property functions once per day. (moderate abjuration; CL 6th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 12",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "masking-armor-special-ability",
    "name": "Masking Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+40,000 gp",
    "summary": "Armor property (armor). Masking armor protects you and your gear from divination spells and items (such as crystal balls) as if you were constantly under the effect of a nondetection spell. Whenever a divination spell or effect is attempted against you, the caster must succeed on a DC 25 caster level check or the divination fails. (moderate abjuration; CL 10th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 12",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "menacing-armor-special-ability",
    "name": "Menacing Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+30,000 gp",
    "summary": "Armor property (armor). When you activate menacing armor, you become frightening. Any one creature (your choice) within 30 feet and with fewer HD than you must make a successful Will saving throw (DC 10 + 1/2 your HD + your Cha modifier) or be panicked for 5 rounds. (moderate necromancy; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 13",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "mindarmor-armor-special-ability",
    "name": "Mindarmor Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+3,000 gp",
    "summary": "Armor property (armor or shield). When activated, a suit of armor or a shield that has this property grants you a +5 bonus on Will saves to resist mindaffecting spells and abilities until the start of your next turn. The mindarmor property functions three times per day. (faint enchantment; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 13",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "mobility-armor-special-ability",
    "name": "Mobility Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Armor property (light armor). While wearing a suit of light armor that has this property, you gain the benefit of the Mobility feat, even if you do not meet its prerequisite. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 13",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "nimbleness-armor-special-ability",
    "name": "Nimbleness Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Armor property (armor). A suit of armor that has this property has a maximum Dexterity bonus 1 higher than normal, and its armor check penalty is reduced by 2. (moderate transmutation; CL 8th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 13",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "quickness-armor-special-ability",
    "name": "Quickness Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+5,000 gp",
    "summary": "Armor property (armor). A suit of armor that has this property grants a +5-foot enhancement bonus to your land speed. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 13",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "radiant-armor-special-ability",
    "name": "Radiant Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+4 bonus",
    "summary": "Armor property (armor). A suit of armor that has this property grants resistance 10 against all energy attacks (acid, cold, electricity, fire, and sonic). When you are the subject of an energy attack, the armor also radiates light for a number of rounds equal to the points of damage absorbed (to a maximum of 10 rounds). (moderate abjuration; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 13",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ranged-armor-special-ability",
    "name": "Ranged Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Armor property (shield (except a tower shield)). While using a ranged shield, you can throw it in combat. The thrown shield has a range increment of 30 feet. While in the air, the shield is treated in all ways as a ranged weapon, and it cannot be blocked or grabbed except by those with appropriate feats. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 13",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "retaliation-armor-special-ability",
    "name": "Retaliation Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Armor property (armor). A suit of armor that has this property strikes back at foes who hit hard in melee. While wearing retaliation armor, each time you take 10 or more points of damage from a single melee attack, the armor deals 1d6 points of damage to the attacker. If a single melee attack drops your hit points below 0, the armor strikes the attacker for 3d6 points of damage. (moderate necromancy; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 14",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "roaring-armor-special-ability",
    "name": "Roaring Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+3 bonus",
    "summary": "Armor property (armor). While you are wearing armor that has this property, you gain some protection from ranged attacks. Whenever you are hit by a nonmagical projectile that would deal 10 or fewer points of damage, you take no damage from that attack. The armor automatically turns back the projectile to strike the creature that fired it. (strong divination; CL 13th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 14",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "soulbound-armor-special-ability",
    "name": "Soulbound Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Armor property (armor or shield). A soulbound shield or suit of armor serves as a receptacle for your essentia, much like a soulmeld does. Every point of essentia invested in the shield or armor increases its enhancement bonus to Armor Class by 1, up to a maximum enhancement bonus of +3. Each soulbound shield or suit of armor has an essentia capacity. (moderate abjuration; CL 6th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 14",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "soulbound-greater-armor-special-ability",
    "name": "Soulbound, Greater Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Armor property. This property functions as the soulbound property, except a greater soulbound shield or suit of armor has a maximum essentia capacity of 4, for a maximum enhancement bonus to AC of +5. Synergy property (requires the soulbound property). (strong abjuration; CL 18th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 14",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "spearblock-armor-special-ability",
    "name": "Spearblock Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Armor property (armor or shield). A spearblock shield or suit of armor magically turns away piercing weapons, such as spears and arrows. While wearing armor or carrying a shield that has this property, you gain damage reduction 5/bludgeoning or slashing. (moderate abjuration; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 14",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "speed-armor-special-ability",
    "name": "Speed Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+6,000 gp",
    "summary": "Armor property (armor or shield). A suit of armor or shield that has this property can quicken your movements. Three times per day, you can command it to produce a haste effect on you (as the haste spell) that lasts for 1 round. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 14",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "stamina-armor-special-ability",
    "name": "Stamina Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+500 gp",
    "summary": "Armor property (armor). While wearing armor that has this property, you gain a +1 resistance bonus on Fortitude saving throws. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 15",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "stamina-greater-armor-special-ability",
    "name": "Stamina, Greater Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+8,000 gp",
    "summary": "Armor property. As stamina, except the armor grants a +5 resistance bonus on Fortitude saving throws. Synergy property (requires the improved property). (strong transmutation; CL 15th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 15",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "stamina-improved-armor-special-ability",
    "name": "Stamina, Improved Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+4,000 gp",
    "summary": "Armor property. As stamina, except the armor grants a +3 resistance bonus on Fortitude saving throws. Synergy property (requires the stamina property). (moderate transmutation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 15",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "styptic-armor-special-ability",
    "name": "Styptic Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Armor property (armor). While wearing armor that has this property, you do not suffer ongoing blood loss for any reason. Regardless of their source, bleeding wounds automatically close. You sustain no further hit point loss and stabilize if you are dying. (moderate conjuration; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 15",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "time-buttress-armor-special-ability",
    "name": "Time Buttress Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+5 bonus",
    "summary": "Armor property (shield). When you activate a shield that has this property, you can avoid injury by manipulating time. You are invulnerable to all attacks, spells, and powers (both harmful and helpful), beginning immediately after you activate the effect and ending at the end of your next turn. The time buttress property functions once per day. (strong transmutation; CL 17th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 15",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "twilight-armor-special-ability",
    "name": "Twilight Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Armor property (armor). Armor that has this property is favored by elves and other characters who mix arcane magic and melee combat. A suit of twilight armor looks translucent and semi-incorporeal when donned, reducing the chance of arcane spell failure by 10%. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 15",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "vanishing-armor-special-ability",
    "name": "Vanishing Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+3 bonus",
    "summary": "Armor property (armor or shield). A suit of armor or shield that has this property renders you and all your equipment completely imperceptible to other creatures. When you activate it, you become invisible and inaudible, and you cannot be detected by any nonmagical sensory method (including scent, hearing, tremorsense, blindsense, and the like). (faint enchantment; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 15",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "variable-armor-special-ability",
    "name": "Variable Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Armor property (shield). A variable shield can change its size, becoming a buckler, light shield, heavy shield, or tower shield (sized appropriately for you) upon activation. All the rules for carrying items while using shields apply to the new shield size (see Armor Descriptions, PH 124). (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 15",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "woodwalk-armor-special-ability",
    "name": "Woodwalk Armor Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+9,000 gp",
    "summary": "Armor property (armor). If you have the woodland stride class feature, you can activate woodwalk armor to step into a tree and exit from another, as if affected by the tree stride spell. The woodwalk property functions three times per day, and the effect lasts for 1 round. (moderate conjuration; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor Properties, p. 15",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  }
];
