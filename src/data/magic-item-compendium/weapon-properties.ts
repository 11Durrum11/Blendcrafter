/**
 * Magic Item Compendium weapon properties (Chapter 2, pp. 27–45):
every weapon special property in the chapter, including the
synergy variants printed as their own entries. Filed under the core
pack's "armor-or-weapon-special-ability" category; each summary
opens with the property's printed scope (melee, ranged, or any
weapon) and notes synergy prerequisites. Prices are as printed —
either a bonus equivalent ("+1 bonus") or a flat gold cost.
 *
 * Short mechanical summaries in our own words, cited to book
 * + page. Batch 11a of the "everything" program; see
 * REBUILD-NOTES.md.
 */
import type { MagicItemDefinition } from "@/engine/types";

export const MAGIC_ITEM_COMPENDIUM_WEAPON_PROPERTIES: MagicItemDefinition[] = [
  {
    "id": "acidic-burst-weapon-special-ability",
    "name": "Acidic Burst Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (weapon). — An acidic burst weapon functions as a corrosive weapon (see page 31). In addition, the weapon automatically showers an opponent with acid upon a successful critical hit, dealing extra acid damage as set out on the table below. This acid does not harm you or any creature other than the target. This is a continuous effect and requires no activation. Synergy property (requires the corrosive property). (strong conjuration; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 28",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "aquan-weapon-special-ability",
    "name": "Aquan Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Weapon property (weapon). An aquan weapon automatically overcomes the damage reduction of any creature that has the fire subtype. In addition, the weapon deals an extra 2d6 points of damage against such creatures. An aquan weapon also bestows one negative level on any creature that has the fire subtype and attempts to wield it. (moderate evocation; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 28",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "aquatic-weapon-special-ability",
    "name": "Aquatic Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+2,000 gp",
    "summary": "Weapon property (weapon). While wielding an aquatic weapon, you do not incur any penalties that would otherwise apply to using the weapon underwater (DMG 92), as though you were affected by a freedom of movement spell. (moderate abjuration; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 28",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "arcane-might-weapon-special-ability",
    "name": "Arcane Might Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (bows (not crossbows)). You can channel the energy of your arcane spells through this bow to make the arrows fired from it more damaging. As a swift action, you can sacrifice a prepared arcane spell from memory (or an unused spell slot if you are a spontaneous arcane caster). (strong transmutation; CL 15th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 28",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "auran-weapon-special-ability",
    "name": "Auran Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Weapon property (weapon). An auran weapon automatically overcomes the damage reduction of any creature that has the earth subtype. In addition, the weapon deals an extra 2d6 points of damage against such creatures. An auran weapon also bestows one negative level on any creature that has the earth subtype and attempts to wield it. (moderate evocation; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 28",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "banishing-weapon-special-ability",
    "name": "Banishing Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Weapon property (weapon). When you strike an extraplanar creature of 26 Hit Dice or fewer while wielding a weapon that has this property, you can activate the weapon to banish that creature back to its home plane (Will DC 20 negates). A creature so banished cannot return for at least 24 hours. A creature that succeeds on its save cannot be banished by the same weapon for 24 hours. (strong abjuration; CL 13th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 28",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "berserker-weapon-special-ability",
    "name": "Berserker Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (two-handed melee weapon). In your hands, a berserker weapon deals an extra 1d8 points of damage on any successful attack while you are raging. (moderate enchantment; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 29",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "binding-weapon-special-ability",
    "name": "Binding Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (weapon). When you activate a binding weapon, the next successful attack you make with it before the end of your turn prevents the target from using any form of extradimensional travel, as the dimensional anchor spell. The binding property functions two times per day, and the effect lasts for 10 minutes. Projectile weapons bestow this property upon their ammunition. (moderate abjuration; CL 10th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 29",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "blessed-weapon-special-ability",
    "name": "Blessed Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (weapon). A blessed weapon is treated as goodaligned for the purpose of overcoming damage reduction. This effect is continuous and requires no activation. In addition, three times per day you can activate a blessed weapon to automatically confirm all critical threats against evil foes for 1 round (as if the weapon were affected by the bless weapon spell). (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 29",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "blindsighted-weapon-special-ability",
    "name": "Blindsighted Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Weapon property (weapon). When activated, a blindsighted weapon emits a susurrus of whispered notes (Listen DC 10). While wielding the activated weapon, you gain blindsight out to 30 feet. This effect is negated by silence spells and effects. The blindsighted property functions three times per day, and the effect lasts for 1 minute. (moderate divination; CL 6th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 29",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "bloodfeeding-weapon-special-ability",
    "name": "Bloodfeeding Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (melee weapon). Every time a bloodfeeding weapon deals damage to a living creature, it gains 1 “blood point,” which it can store for up to 1 hour. The weapon can store a maximum of 10 blood points. This effect is continuous and requires no activation. (moderate necromancy; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 29",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "bloodstone-weapon-special-ability",
    "name": "Bloodstone Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (melee weapon). A bloodstone weapon can store and cast a vampiric touch spell against a creature it strikes, just as if it were a spell storing weapon (DMG 225). Any such spell cast from a bloodstone weapon is automatically empowered (as if by the Empower Spell feat). (moderate necromancy; CL 10th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 29",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "blurstrike-weapon-special-ability",
    "name": "Blurstrike Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Weapon property (melee weapon). When activated, a blurstrike weapon partially fades from view for 1 round, appearing only as a faint outline (though you, as the wielder, can see it normally). When you attack, an activated blurstrike weapon (along with your hand and arm) appears to others as an amorphous blur, preventing a foe from knowing exactly where the blow is aimed. (moderate illusion; CL 6th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 29",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "bodyfeeder-weapon-special-ability",
    "name": "Bodyfeeder Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+3 bonus",
    "summary": "Weapon property (weapon). Whenever a bodyfeeder weapon you wield scores a successful critical hit against a living creature, you gain temporary hit points equal to half the damage dealt by the critical hit. These temporary hit points last for up to 1 minute and don't stack with those from any other source, including additional critical hits with this weapon. (moderate necromancy; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 30",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "brash-weapon-special-ability",
    "name": "Brash Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (melee weapon). If you enter a rage while wielding a brash weapon, the rage lasts for an extra 3 rounds. In addition, while raging and wielding a brash weapon, you gain immunity to fear effects. (faint abjuration; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 30",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "brutal-surge-weapon-special-ability",
    "name": "Brutal Surge Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (melee weapon). After a successful melee attack with a brutal surge weapon, you can command the weapon to initiate a bull rush attempt against the target of the attack in addition to dealing its normal damage. This attempt does not provoke attacks of opportunity and is resolved using your size, Strength, and other relevant characteristics. (moderate evocation; CL 11th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 30",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "changeling-weapon-special-ability",
    "name": "Changeling Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+2,000 gp",
    "summary": "Weapon property (spear, shortspear, or longspear). A changeling weapon allows you to choose its length and appearance each time you attack with it. Once per round, by speaking the appropriate command word, you can change the weapon into a spear, a shortspear, or a longspear sized appropriately for you. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 31",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "chargebreaker-weapon-special-ability",
    "name": "Chargebreaker Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (melee weapon). Any charging creature hit by a chargebreaker weapon must succeed on a DC 14 Fortitude save or be knocked prone. (faint enchantment; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 31",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "charging-weapon-special-ability",
    "name": "Charging Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (melee weapon). When you are mounted and wielding a weapon that has this property, you deal an extra 2d6 points of damage on a successful charge attack. (moderate transmutation; CL 8th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 31",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "collision-weapon-special-ability",
    "name": "Collision Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Weapon property (weapon). A collision weapon temporarily increases its own mass at the end point of each swing or shot. When you wield such a weapon, you deal an extra 5 points of damage with each hit. Projectile weapons bestow this property upon their ammunition. (moderate transmutation; CL 6th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 31",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "consumptive-weapon-special-ability",
    "name": "Consumptive Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Weapon property (weapon). When activated, a consumptive weapon is shrouded in negative energy that seems to draw light into it. The negative energy does not harm you as long as you have the weapon in hand. The effect persists until you speak a second command word. A weapon that has this property deals an extra 1d8 points of damage to any living creature on a successful hit. (moderate necromancy; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 31",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "corrosive-weapon-special-ability",
    "name": "Corrosive Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (weapon). When activated, a corrosive weapon is sheathed in acid. The acid does not harm you as long as you have the weapon in hand. The effect persists until you speak a second command word. A weapon that has this property deals an extra 1d6 points of acid damage on a successful hit. Projectile weapons bestow this property upon their ammunition. (moderate conjuration; CL 10th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 31",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "cursespewing-weapon-special-ability",
    "name": "Cursespewing Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+3 bonus",
    "summary": "Weapon property (weapon). Whenever this weapon scores a critical hit against a target, it bestows a curse that imposes a –4 penalty on attack rolls, saving throws, skill checks, and ability checks for 1 minute. Multiple strikes aren't cumulative with one another. (moderate necromancy; CL 11th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 31",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "deadly-precision-weapon-special-ability",
    "name": "Deadly Precision Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (weapon). A deadly precision weapon deals an extra 1d6 points of damage whenever you make a successful sneak attack or sudden strike (CAd 8) with it. The property grants no benefit if you don't already have one of these class features, and its bonus doesn't increase if you have both. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 32",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "defensive-surge-weapon-special-ability",
    "name": "Defensive Surge Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (melee weapon). After a successful melee attack with a defensive surge weapon in any round in which you use the Combat Expertise feat or fight defensively, you can activate the weapon and gain an additional +2 bonus to Armor Class until the start of your next turn. This ability is usable a number of times per day equal to 1 + your Int bonus (if any). (faint abjuration; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 32",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "desiccating-burst-weapon-special-ability",
    "name": "Desiccating Burst Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (weapon). A desiccating burst weapon functions as a desiccating weapon (see above). In addition, the weapon explodes with a dehydrating blast on a successful critical hit, dealing extra damage as set out in the table below. Synergy property (requires the dessicating property). (strong necromancy; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 32",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "desiccating-weapon-special-ability",
    "name": "Desiccating Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (weapon). A desiccating weapon destroys the water in a living creature that it strikes, dealing an extra 1d4 points of damage (or an extra 1d8 points against plants and against elementals that have the water subtype). Projectile weapons bestow this property upon their ammunition. (moderate necromancy; CL 8th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 32",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "disarming-weapon-special-ability",
    "name": "Disarming Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Weapon property (weapon). A disarming weapon grants you a +2 bonus on disarm attempts. In addition, opponents cannot disarm you of this weapon. (moderate transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 32",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "dislocator-weapon-special-ability",
    "name": "Dislocator Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (weapon). When you activate a dislocator weapon, the next successful attack you make before the end of your turn causes your target to be teleported up to 10 feet in any direction you choose (Will DC 17 negates). You can't teleport a target into an occupied space (such an attempt automatically fails and wastes the effect). (strong conjuration; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 32",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "dislocator-great-weapon-special-ability",
    "name": "Dislocator, Great Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property. This property functions as a dislocator weapon (see above), except the target can be teleported up to 30 feet in any direction (Will DC 20 negates). Synergy property (requires the dislocator property).",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 33",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "dispelling-weapon-special-ability",
    "name": "Dispelling Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (weapon). When you strike a creature or object with a dispelling weapon, you can activate it to target that creature or object with a targeted dispel magic effect (as the spell). A dispelling weapon functions three times per day. (faint abjuration; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 33",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "dispelling-greater-weapon-special-ability",
    "name": "Dispelling, Greater Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property. This weapon functions as a dispelling weapon (see above), except that when you activate it, the creature or object struck is affected by a targeted greater dispel magic effect (as the spell). A greater dispelling weapon functions three times per day. Synergy property (requires the dispelling property). (strong abjuration; CL 15th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 33",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "divine-wrath-weapon-special-ability",
    "name": "Divine Wrath Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (weapon). Divine wrath weapons are especially prized by paladins and clerics of Heironeous. Whenever you hold such a weapon in your hand, you can expend a turn undead attempt to imbue it with divine power for 1 round. (strong evocation; CL 13th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 33",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "domineering-weapon-special-ability",
    "name": "Domineering Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Weapon property (weapon). A creature hit by a domineering weapon becomes shaken for 1 minute (Will DC 16 negates). This effect doesn't stack with itself or with any other fear effects (it can't render an already shaken creature frightened, for example). (moderate necromancy; CL 11th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 33",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "doom-burst-weapon-special-ability",
    "name": "Doom Burst Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Weapon property (weapon). Whenever you score a critical hit with this weapon, a wave of blackness washes over the target, causing it to become shaken (no saving throw) for 5 rounds. This effect activates even if the creature struck is not normally subject to extra damage from critical hits. (moderate necromancy; CL 11th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 33",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "dragondoom-weapon-special-ability",
    "name": "Dragondoom Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (melee weapon). When wielding a dragondoom weapon, you can choose to deliver a smite attack against a Large or larger creature of the dragon type up to three times each day. (moderate transmutation; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 33",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "dragonhunter-weapon-special-ability",
    "name": "Dragonhunter Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (projectile weapon). A creature of the dragon type that is hit by a projectile fired from this weapon takes 1 point of Strength damage in addition to the normal damage from the weapon. In addition, the weapon's critical multiplier increases by 1 if the target is a dragon. (moderate transmutation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 33",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "eager-weapon-special-ability",
    "name": "Eager Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (melee weapon). An eager weapon can be drawn as a free action. While wielding it, you gain a +2 bonus on initiative checks and a +2 bonus on damage rolls made during a surprise round and the first round of combat. (moderate evocation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 34",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "energy-aura-weapon-special-ability",
    "name": "Energy Aura Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Weapon property (weapon). Once activated, each hit by this weapon deals an extra 1d6 points of damage of an energy type of your choice (acid, cold, electricity, or fire, chosen when activated). This energy does not harm you, regardless of the type selected. The energy damage remains the same until you activate the weapon again. (strong evocation; CL 15th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 34",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "energy-surge-weapon-special-ability",
    "name": "Energy Surge Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (melee weapon). An energy surge weapon functions as a weapon of the prerequisite type (corrosive, flaming, frost, or shock). Synergy property (requires the corrosive, flaming, frost, or shock properties). (faint evocation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 34",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "enervating-weapon-special-ability",
    "name": "Enervating Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Weapon property (weapon). When you score a critical hit against a living creature with an enervating weapon, the weapon bestows one negative level on the target. Assuming the subject survives, it regains lost levels after 1 hour. (moderate necromancy; CL 11th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 34",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ethereal-reaver-weapon-special-ability",
    "name": "Ethereal Reaver Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+3 bonus",
    "summary": "Weapon property (melee weapon). An ethereal reaver weapon functions as a ghost touch weapon (DMG 224). In addition, such a weapon allows you to see invisible creatures as if you were subject to a see invisibility spell. (strong divination; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 34",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "everbright-weapon-special-ability",
    "name": "Everbright Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+2,000 gp",
    "summary": "Weapon property (weapon). An everbright weapon can flash with a brilliant light twice per day at your command. When it is activated, all creatures within 20 feet of you are blinded for 1 round (Reflex DC 14 negates). An everbright weapon is also immune to acid damage and rusting effects. (strong evocation; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 34",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "fiercebane-weapon-special-ability",
    "name": "Fiercebane Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (weapon). A fiercebane weapon excels at attacking one type or subtype of creature. It acts as a bane weapon against the creature type (and subtype, if relevant) to which its synergy prerequisite ability was attuned. Whenever it strikes its designated bane enemy, it begins to emit a low, eager hum, as if it were actually feeding off the victim's life blood. Synergy property (requires the bane property). (strong conjuration; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 35",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "fleshgrinding-weapon-special-ability",
    "name": "Fleshgrinding Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Weapon property (piercing or slashing melee weapon). You can activate a fleshgrinding weapon any time you deal damage with it to a living creature in melee. When this occurs, you let go of the weapon and it magically animates, grinding itself into the foe's flesh. (moderate transmutation; CL 11th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 35",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "force-weapon-special-ability",
    "name": "Force Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Weapon property (projectile weapon). A projectile weapon with the force property turns ammunition shot from it into a force attack. These force projectiles automatically overcome damage reduction and suffer no miss chance against incorporeal targets, but they don't damage creatures immune to force effects. Ammunition shot from a force weapon deals the same amount of damage as normal ammunition. (moderate evocation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 35",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ghost-strike-weapon-special-ability",
    "name": "Ghost Strike Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (melee weapon). A ghost strike weapon functions as a ghost touch weapon (DMG 224). In addition, sneak attacks and critical hits made with a ghost strike weapon against an undead creature affect it as if it were a living creature. Synergy property (requires the ghost touch property). (moderate conjuration; CL 11th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 35",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "harmonizing-weapon-special-ability",
    "name": "Harmonizing Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (melee weapon). A harmonizing weapon accompanies you in song if drawn, granting a +2 competence bonus on Perform (sing) checks. In addition, if you hold a harmonizing weapon when you begin a bardic music effect, the weapon can continue the effect for you, allowing you to focus on other efforts. (faint illusion; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 35",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "heavenly-burst-weapon-special-ability",
    "name": "Heavenly Burst Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (weapon). On a critical hit against an evil creature, a heavenly burst weapon discharges a shower of radiance that deals 3d6 points of damage to the target and blinds it for 1 round. A successful DC 14 Fortitude save negates the blindness. Projectile weapons bestow this property upon their ammunition. (moderate evocation; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 36",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "hideaway-weapon-special-ability",
    "name": "Hideaway Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+2,000 gp",
    "summary": "Weapon property (weapon). When activated, a hideaway weapon folds up into a bundle two size categories smaller than you, making it easy to conceal. You gain a +2 bonus on Sleight of Hand checks to conceal a hideaway weapon when it's folded up (as if it were a dagger). A second command word (also a swift action) causes the weapon to unfold to its normal shape. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 36",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "holy-surge-weapon-special-ability",
    "name": "Holy Surge Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (melee weapon). Characters who serve gods of valor, honor, and other lofty principles craft these weapons of pure goodness for themselves and others who share their values. A holy surge weapon functions as a holy weapon (DMG 225). This is a continuous effect and requires no activation. Synergy property (requires the holy property). (moderate evocation; CL 11th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 36",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "hunting-weapon-special-ability",
    "name": "Hunting Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (weapon). A hunting weapon increases your bonus on weapon damage rolls by 4 against your favored enemies (see the ranger class feature; PH 47). (moderate abjuration; CL 6th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 36",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ignan-weapon-special-ability",
    "name": "Ignan Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Weapon property (weapon). An ignan weapon automatically overcomes the damage reduction of any creature that has the water subtype. In addition, the weapon deals an extra 2d6 points of damage against such targets. An ignan weapon also bestows one negative level on any creature that has the water subtype and attempts to wield it. (moderate evocation; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 36",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "illuminating-weapon-special-ability",
    "name": "Illuminating Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+500 gp",
    "summary": "Weapon property (weapon). When drawn, an illuminating weapon glows with pure white light, brightly illuminating a 20-foot-radius area and providing shadowy illumination for another 20 feet beyond that. (faint evocation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 36",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "illusion-bane-weapon-special-ability",
    "name": "Illusion Bane Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (weapon). Any attack with an illusion bane weapon ignores any miss chance created by an illusion effect (including effects that mimic illusions, such as a displacer beast's displacement effect). However, you must still target the correct square when making an attack against a for that has total concealment. This is a continuous effect and requires no activation. (moderate divination; CL 10th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 36",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "illusion-theft-weapon-special-ability",
    "name": "Illusion Theft Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Weapon property (weapon). An illusion theft weapon functions as an illusion bane weapon (see above). In addition, such a weapon allows you to disrupt opponents' illusions and transfer their protective qualities to yourself. The first illusion spell that this weapon dispels with its illusion bane property is automatically stored within it. Synergy property (requires the illusion bane property). (strong divination; CL 17th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 37",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "impact-weapon-special-ability",
    "name": "Impact Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (bludgeoning weapon). An impact weapon has double the threat range of a normal weapon of its type. For example, an impact quarterstaff scores a threat on a roll of 19–20, and an impact heavy flail scores a threat on a roll of 17–20. This effect doesn't stack with any other effect that expands a weapon's critical threat range. (moderate evocation; CL 10th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 37",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "impaling-weapon-special-ability",
    "name": "Impaling Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (piercing melee weapon). Three times per day, you can activate this weapon to treat its next attack (if made before the end of your turn) as a touch attack. You must declare that you are using this property before making your attack roll. If the attack misses, the use is wasted. (moderate transmutation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 37",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "impedance-weapon-special-ability",
    "name": "Impedance Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Weapon property (weapon). An impedance weapon mimics the impeded magic planar trait (DMG 150). When you use it to strike a creature, the target's ability to cast spells or use spelllike abilities is impeded for 1d6 rounds. (moderate abjuration; CL 11th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 37",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "implacable-weapon-special-ability",
    "name": "Implacable Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+3 bonus",
    "summary": "Weapon property (weapon). When an implacable weapon deals damage to a living creature, the wound bleeds profusely and the creature takes 2 additional points of damage at the start of each of the wielder's turns for the next 5 rounds. Multiple wounds are cumulative (a creature struck three times in the same round would take 6 points of damage per round for the next 5 rounds). (moderate necromancy; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 37",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "incorporeal-binding-weapon-special-ability",
    "name": "Incorporeal Binding Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (melee weapon). An incorporeal binding weapon functions as a ghost touch weapon (DMG 224). In addition, when this weapon strikes an incorporeal creature, it emits a single pulse of gray energy that temporarily anchors the target more firmly to the material world. Synergy property (requires the ghost touch property). (moderate conjuration; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 38",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "knockback-weapon-special-ability",
    "name": "Knockback Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (weapon). Three times per day, you can activate this weapon and use it to drive your opponent back. The next time you hit a creature with the weapon before the end of your turn, the target must succeed on a DC 19 Fortitude save or be pushed back 5 feet. If the target can't move back, this ability has no effect. (moderate evocation; CL 11th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 38",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "lucky-weapon-special-ability",
    "name": "Lucky Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (weapon). A lucky weapon offers a second chance at success. Once per day, you can reroll a single failed attack roll. (strong divination; CL 15th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 38",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "magebane-weapon-special-ability",
    "name": "Magebane Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (weapon). Weapons that have this property are feared by arcane spellcasters. Against any creature that can cast arcane spells or use invocations (CAr 7), a magebane weapon's enhancement bonus is 2 higher than normal. (moderate evocation; CL 8th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 38",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "maiming-weapon-special-ability",
    "name": "Maiming Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (weapon). A maiming weapon twists and digs into the flesh of its target, rending, tearing, smashing, and bruising it. Whenever you score a critical hit with this weapon, it deals an amount of extra damage depending on its critical multiplier. Critical Multiplier Extra Damage ×2 1d6 ×3 2d6 ×4 3d6. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 38",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "manifester-weapon-special-ability",
    "name": "Manifester Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+12,000 gp",
    "summary": "Weapon property (weapon). When manifesting a power, the bearer of this weapon can draw 5 power points from it. These points must be all be used on the same power, and that power cannot be imbued with power points from any other source. A manifester weapon functions once per day. (moderate divination; CL 8th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 38",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "metalline-weapon-special-ability",
    "name": "Metalline Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Weapon property (weapon). When you activate a metalline weapon, you can change its composition to adamantine, alchemical silver, cold iron, or ordinary steel. (moderate transmutation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 38",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "mighty-smiting-weapon-special-ability",
    "name": "Mighty Smiting Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (melee weapon). If you have a smite ability (smite, smite evil, smite shadowlands, or the like), you gain an extra +2 bonus on your smite attack rolls and damage rolls. In addition, you gain one additional use of your smite ability each day while wielding this weapon. If you have more than one smite ability, you must choose which one gains the extra use. (moderate evocation; CL 8th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 39",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "mindcrusher-weapon-special-ability",
    "name": "Mindcrusher Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Weapon property (weapon). Any psionic creature struck in combat by a mindcrusher weapon loses a number of power points equal to half the amount of hit point damage the weapon deals on that strike. Only the base damage of the weapon contributes to the power point loss; additional damage from high Strength or other sources does not cause additional power point loss. (strong necromancy; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 39",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "mindfeeder-weapon-special-ability",
    "name": "Mindfeeder Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (weapon). When you score a critical hit with a mindfeeder weapon, you gain 1 temporary power point for every 5 points of damage dealt by the critical hit. These temporary power points last for up to 1 minute. You gain power points even if the target has none. As with temporary hit points, temporary power points do not stack with each other; they overlap. (strong necromancy; CL 15th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 39",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "morphing-weapon-special-ability",
    "name": "Morphing Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (melee or thrown weapon). You can reshape a morphing weapon into any other melee or thrown weapon of the same size and type (light, one-handed, or two-handed). For instance, a morphing greatsword could become a spear, greataxe, or dire flail. (moderate transmutation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 39",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "necrotic-focus-weapon-special-ability",
    "name": "Necrotic Focus Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+3 bonus",
    "summary": "Weapon property (melee weapon). A necrotic focus weapon serves as a channel for your ability drain or energy drain supernatural ability. While wielding it, you deal ability drain or bestow negative levels through it as if attacking with your natural weapons. If a saving throw against the effect is allowed, add the weapon's enhancement bonus to the save DC. (moderate necromancy; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 39",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "paralytic-burst-weapon-special-ability",
    "name": "Paralytic Burst Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Weapon property (weapon). Whenever you score a critical hit with this weapon, a wave of green energy washes over the target, paralyzing it for 1 round (Will DC 17 negates). This effect activates even if the target is not normally subject to extra damage from critical hits. (moderate enchantment; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 39",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "paralyzing-weapon-special-ability",
    "name": "Paralyzing Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (melee weapon). When a paralyzing weapon is activated, the next creature struck by the weapon must succeed on a DC 17 Will save or be paralyzed. Each round on its turn, the target can attempt a new saving throw to end the effect; otherwise, the paralysis lasts for 10 rounds. A paralyzing weapon functions once per day. (moderate enchantment; CL 10th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 39",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "parrying-weapon-special-ability",
    "name": "Parrying Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Weapon property (weapon). A parrying weapon allows you to discern events an instant into the future, granting you a +1 insight bonus to AC. The weapon makes you so adept at parrying that it grants you a +1 insight bonus on saving throws. The bonuses are granted whenever you hold the weapon, even if you are flat-footed. (strong enchantment; CL 15th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 40",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "power-storing-weapon-special-ability",
    "name": "Power Storing Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (weapon). A power storing weapon allows a manifester to store a single targeted power of up to 5 power points in the weapon. (The power must have a manifesting time of 1 standard action.) Any time the weapon strikes a creature and the creature takes damage from it, the weapon can manifest the power on that creature if you desire. (strong evocation; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 40",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "precise-weapon-special-ability",
    "name": "Precise Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (ranged weapon). You can shoot or throw a precise weapon at an opponent engaged in melee without incurring the standard –4 penalty. This benefit does not apply if you already have the Precise Shot feat. (faint evocation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 40",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "prismatic-burst-weapon-special-ability",
    "name": "Prismatic Burst Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+30,000 gp",
    "summary": "Weapon property (weapon). Whenever you score a successful critical hit with this weapon, multicolored light springs from the gems and cascades along its blade or head, subjecting the target to a prismatic spray effect (save DC 20; see spell description, PH 264). This effect activates even if the target is not normally subject to extra damage from critical hits. (strong evocation; CL 13th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 40",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "profane-burst-weapon-special-ability",
    "name": "Profane Burst Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (weapon). A profane burst weapon functions as a profane weapon (see above). In addition, the weapon explodes with negative energy on a successful critical hit, dealing extra negative energy damage as set out in the table below. Synergy property (requires the profane property). (strong necromancy; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 40",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "profane-weapon-special-ability",
    "name": "Profane Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (weapon). By speaking the appropriate command word, you can sheathe a profane weapon in crackling black negative energy. If you have no Constitution score, this energy does not harm you; otherwise you take 1 point of Constitution damage for each round that you hold the weapon while the effect is activated. (moderate necromancy; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 40",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "psibane-weapon-special-ability",
    "name": "Psibane Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Weapon property (weapon). A psibane weapon is crafted to oppose psionic beings. When used against any creature that has the psionic subtype (EPH 183), its effective enhancement bonus is 2 higher than its actual enhancement bonus (so a +1 psibane longsword instead has a +3 enhancement bonus against psionic foes). It deals an extra 2d6 points of damage against psionic opponents. (strong divination; CL 15th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 41",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "psychic-weapon-special-ability",
    "name": "Psychic Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Weapon property (weapon). A psychic weapon's power depends on its wielder. It gains an enhancement bonus based on the wielder's current power point reserve, as shown on the table below. (strong no school; CL 17th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 41",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "psychokinetic-burst-weapon-special-ability",
    "name": "Psychokinetic Burst Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (weapon). This weapon functions as a pschokinetic weapon (see above). In addition, the weapon releases a blast of destructive psionic energy on a successful critical hit, dealing extra force damage as set out in the table below. Synergy property (requires the psychokinetic property). (strong evocation; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 41",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "psychokinetic-weapon-special-ability",
    "name": "Psychokinetic Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (weapon). Upon command, a psychokinetic weapon glows from the inside with lethal psionic energy. Such a weapon deals an extra 1d4 points of force damage on a successful hit. This extra damage is not affected by damage reduction, and it affects incorporeal creatures even if the attack would normally miss due to the incorporeal miss chance. (moderate evocation; CL 10th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 41",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "quick-loading-weapon-special-ability",
    "name": "Quick Loading Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (crossbow). A quick loading crossbow accesses an extradimensional space that can hold up to 100 bolts, allowing you to reload the crossbow more rapidly than normal. (moderate conjuration; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 41",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "resounding-weapon-special-ability",
    "name": "Resounding Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (melee weapon). A resounding weapon emits a deep, ringing chime each time it successfully hits a target. The sound carries over the din of battle, encouraging your allies. When you strike a foe with a resounding weapon, allies (including you) within 30 feet gain a +1 morale bonus on attack rolls and saves against fear effects for 1 round. (faint enchantment; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 42",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "revealing-weapon-special-ability",
    "name": "Revealing Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (weapon). Any opponent struck by a weapon that has this property is outlined in magical flames, as the faerie fire spell, for 1 round. (faint evocation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 42",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "sacred-burst-weapon-special-ability",
    "name": "Sacred Burst Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (weapon). A sacred burst weapon functions as a sacred weapon (see above). In addition, the weapon explodes with positive energy on a successful critical hit, dealing extra positive energy damage to creatures as set out in the table below. Synergy property (requires the sacred property). (strong conjuration; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 42",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "sacred-weapon-special-ability",
    "name": "Sacred Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (weapon). By speaking the appropriate command word, you can sheathe a sacred weapon in luminous positive energy. If you are not undead, this energy does not harm you; otherwise, you take 1 point of Charisma damage for each round that you hold the weapon. This effect lasts until you speak another command word to end it. (moderate conjuration; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 42",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "screaming-burst-weapon-special-ability",
    "name": "Screaming Burst Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (weapon). A screaming burst weapon functions as a screaming weapon (see above). In addition, the weapon explodes with sonic energy on a successful critical hit, dealing extra sonic damage as set out in the table below. Synergy property (requires the screaming property). (strong evocation; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 42",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "screaming-weapon-special-ability",
    "name": "Screaming Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (weapon). Upon command, this weapon begins to vibrate gently, though it emits no actual sound in this mode. Whenever an activated screaming weapon hits, it produces a high-pitched sound and deals an extra 1d4 points of sonic damage to the target. This noise is unpleasant, but it has no adverse effect upon any creatures other than the one struck. (moderate evocation; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 42",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "shadowstrike-weapon-special-ability",
    "name": "Shadowstrike Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+5,000 gp",
    "summary": "Weapon property (weapon). A shadowstrike weapon can reach through your own shadow to catch foes off guard. Once per day, you can activate the property to add 5 feet to the weapon's reach for a single attack. The target is denied its Dexterity bonus to AC for this attack. (strong illusion; CL 15th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 43",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "shattermantle-weapon-special-ability",
    "name": "Shattermantle Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (weapon). A shattermantle weapon damages a foe's spell resistance. Each time the weapon strikes a foe that has spell resistance, the value of that spell resistance is reduced by 2 for 1 round. The penalties for multiple hits during the same round stack. (faint divination; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 43",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "shielding-weapon-special-ability",
    "name": "Shielding Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (light melee weapon). A shielding weapon is most often employed as an off-hand weapon. Activating a shielding weapon transforms it into a heavy steel shield, with the same enhancement bonus as the weapon itself (both for AC and when making shield bash attacks). (moderate transmutation; CL 10th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 43",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "sizing-weapon-special-ability",
    "name": "Sizing Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+5,000 gp",
    "summary": "Weapon property (weapon). Activating a sizing weapon changes its size category to any other that you desire. (moderate transmutation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 43",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "slow-burst-weapon-special-ability",
    "name": "Slow Burst Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+5,000 gp",
    "summary": "Weapon property (weapon). A chill aura numbs this weapon's victim when you strike true. Whenever you score a critical hit with this weapon, the target is slowed (as the slow spell) for 3 rounds (Will DC 14 negates). This effect activates even if the creature struck is not normally subject to extra damage from critical hits. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 43",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "soulbound-weapon-special-ability",
    "name": "Soulbound Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (weapon). A soulbound weapon serves as a receptacle for your essentia, much as a soulmeld does. Every point of essentia invested in the weapon increases its enhancement bonus on attack rolls and damage rolls by 1, up to a maximum enhancement bonus of +3. Each soulbound weapon has an essentia capacity. (moderate abjuration; CL 6th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 43",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "soulbound-greater-weapon-special-ability",
    "name": "Soulbound, Greater Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Weapon property. This property functions as the soulbound property (see above), except a greater soulbound weapon has a maximum essentia capacity of 4 (instead of 2), for a maximum enhancement bonus of +5 (instead of +3). (strong abjuration; CL 18th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 43",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "soulbreaker-weapon-special-ability",
    "name": "Soulbreaker Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (weapon). This weapon functions as an enervating weapon (see page 34). However, a negative level gained from an attack from a soulbreaker weapon doesn't fade 1 hour later. Instead, 24 hours after being struck, if the negative level or levels have not been purged, the subject must succeed on a DC 18 Fortitude save for each negative level or lose a character level. Synergy property (requires the enervating property). (strong necromancy; CL 17th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 44",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "souldrinking-weapon-special-ability",
    "name": "Souldrinking Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (melee weapon). This weapon functions as an enervating weapon (see page 34). In addition, when a souldrinking weapon scores a critical hit on a living creature, it grants you 5 temporary hit points and a +2 morale bonus on melee damage rolls. The temporary hit points don't stack with temporary hit points from any other source. This effect fades after 10 minutes. Synergy property (requires the enervating property). (faint necromancy; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 44",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "spellstrike-weapon-special-ability",
    "name": "Spellstrike Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (weapon). A spellstrike weapon allows you to transfer some or all of the weapon's enhancement bonus, using it as a bonus on your saving throws against spells or spell-like abilities. (moderate abjuration; CL 8th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 44",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "stunning-surge-weapon-special-ability",
    "name": "Stunning Surge Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (weapon). On a successful melee attack, you can command this weapon to emit a surge of magical energy. Unless the target succeeds on a Fortitude save (DC 10 + 1/2 your character level + your Cha modifier), it is stunned for 1 round. This ability is usable a number of times per day equal to 1+ your Charisma bonus (if any). (CL 9th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 44",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "stunning-weapon-special-ability",
    "name": "Stunning Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (weapon). A stunning weapon functions as a screaming weapon (see page 42). In addition, on a successful critical hit with a stunning weapon, the target must succeed on a DC 17 Fortitude save or be stunned for 1 round. Projectile weapons bestow this property on their ammunition. Synergy property (requires the screaming property). (moderate enchantment; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 44",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "stygian-weapon-special-ability",
    "name": "Stygian Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (weapon). When you activate a stygian weapon, the next successful attack you make before the end of your turn bestows one negative level on the target in addition to dealing normal damage. This negative level lasts for 10 minutes, and thus can't result in a permanent level decrease. A stygian weapon functions three times per day. (moderate necromancy; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 44",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "sundering-weapon-special-ability",
    "name": "Sundering Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (melee weapon). A sundering weapon allows you to attack as if you have the Improved Sunder feat, and it deals an extra 1d6 points of damage on a sunder attempt. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 44",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "sweeping-weapon-special-ability",
    "name": "Sweeping Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (melee weapon). This property grants you a +2 competence bonus on any Strength check made to trip an opponent with the weapon. (CL 5th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 44",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "terran-weapon-special-ability",
    "name": "Terran Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Weapon property (weapon). A terran weapon automatically overcomes the damage reduction of any creature that has the air subtype. In addition, the weapon deals an extra 2d6 points of damage against such targets. A terran weapon also bestows one negative level on any creature that has the air subtype and attempts to wield it. (moderate evocation; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 45",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "transmuting-weapon-special-ability",
    "name": "Transmuting Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Weapon property (weapon). When you score a successful hit with a transmuting weapon against a creature that has damage reduction, that attack is resolved normally. At the start of your next turn, however, the weapon transforms, taking on the properties required to overcome that creature's damage reduction. (strong transmutation; CL 13th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 45",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "unholy-surge-weapon-special-ability",
    "name": "Unholy Surge Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (melee weapon). Characters who serve gods of murder, strife, and other base deeds craft these weapons of pure evil for themselves and for others who share their foul desires. This weapon functions as an unholy weapon (DMG 226). This is a continuous effect and requires no activation. Synergy property (requires the unholy property). (moderate evocation; CL 11th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 45",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "vampiric-weapon-special-ability",
    "name": "Vampiric Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Weapon property (melee weapon). A vampiric weapon deals an extra 1d6 points of damage to any living creature it hits, and you heal damage equal to this amount. (moderate necromancy; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 45",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "vanishing-weapon-special-ability",
    "name": "Vanishing Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+8,000 gp",
    "summary": "Weapon property (melee weapon). A vanishing weapon allows you to travel short distances instantaneously. Once per day, after a successful melee attack, you can transport yourself and any equipment you are carrying to any spot within 60 feet by activating the weapon. This movement otherwise conforms to the limitations given for the dimension door spell (PH 221). (moderate conjuration; CL 10th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 45",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "venomous-weapon-special-ability",
    "name": "Venomous Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (weapon). When activated, a venomous weapon coats itself in injury poison (Fort DC 14, 1d4 Str/1d4 Str), which lasts for 1 minute or until your next successful attack with the weapon, whichever comes first. A venomous weapon functions three times per day. Projectile weapons bestow this property on their ammunition. (moderate necromancy; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 45",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "warning-weapon-special-ability",
    "name": "Warning Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (weapon). A warning weapon grants you a +5 insight bonus on initiative checks as long as it is held. (moderate transmutation; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 46",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "weakening-weapon-special-ability",
    "name": "Weakening Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (weapon). When you score a critical hit with a weakening weapon, the target takes a –4 penalty to its Strength score (to a minimum score of 1) for 10 minutes. Multiple strikes aren't cumulative. Projectile weapons bestow this property upon their ammunition. (faint necromancy; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 46",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "whirling-weapon-special-ability",
    "name": "Whirling Weapon Special Ability",
    "category": "armor-or-weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon property (slashing melee weapon). Three times per day, you can use this weapon to make a whirling attack that has a chance of striking all nearby opponents. Instead of making your regular attacks, you instead make one melee attack at your full attack bonus against each opponent within reach of the weapon. This property otherwise functions like the Whirlwind Attack feat. (moderate transmutation; CL 11th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Properties, p. 46",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  }
];
