/**
 * Omni sweep wave 2 (2026-11-02): Poisoncraft: The Dark Art
 * (Blue Devil Games). Two purchasable catalogs were enumerated:
 * Chapter 4, Tools of the Toxic Trade (printed pp. 40–43) —
 * poisoncraft gear, magic armor/shield/weapon special abilities,
 * and wondrous items — and the Appendix's Codex Venenorum
 * (pp. 85–89), 70 named poisons with printed prices, built here
 * as equipment in the "alchemical gear" category per the sweep's
 * convention for poisons. Sixteen codex poisons already exist in
 * the catalog under the same name (mostly from the Arms and
 * Equipment Guide) and every one of them disagrees on price with
 * Poisoncraft's recasting — they are skipped and itemized as
 * price conflicts in the omni-sweep report (worst: Drow Poison,
 * 2,380 gp here vs. 75 gp in the catalog; Ungol Dust 315 gp vs.
 * 1,000 gp). "Frostfire" also collides by name with an unrelated
 * Goods and Gear concoction and is flagged there as a probable
 * different item. The book's own summary tables (pp. 90–91) list
 * only 69 of the 70 codex poisons — Dark Reaver is omitted from
 * them by the book itself. Codex entries marked * in the book are
 * DMG poisons recast in Poisoncraft's system; where Poisoncraft
 * renamed them (Black Death for black lotus extract, Heartstinger
 * for wyvern poison, Darkling Tongue for black adder venom, and
 * so on) they build as new records under the printed name.
 * Prices are the printed market prices; notes and summaries are
 * mechanical effects in our own words.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const POISC_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [
  {
    "id": "bitter",
    "name": "Bitter",
    "category": "armor-special-ability",
    "cost": "+1 bonus",
    "summary": "Armor ability. A creature that successfully bites a target wearing bitter armor, or swallows a character wearing it, is exposed to a magically created ingestion poison (Fortitude DC 15; sickened for 2d4 rounds, then nauseated for 1d6 hours). A swallowed wearer exposes the creature every round spent inside it.",
    "source": "Poisoncraft: The Dark Art — Chapter 4: Tools of the Toxic Trade, p. 41",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "neutralizing-armor-special-ability",
    "name": "Neutralizing Armor Special Ability",
    "category": "armor-special-ability",
    "cost": "+2 bonus",
    "summary": "Armor ability. Poison that strikes the armor on a failed attack against the wearer is automatically neutralized and becomes non-toxic. A creature with poisonous natural weapons whose attack fails must make a Fortitude save (DC 16) or have its venom suppressed for 1d4+1 rounds.",
    "source": "Poisoncraft: The Dark Art — Chapter 4: Tools of the Toxic Trade, p. 41",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "neutralizing-shield-special-ability",
    "name": "Neutralizing Shield Special Ability",
    "category": "shield-special-ability",
    "cost": "+2 bonus",
    "summary": "Shield ability. Poison that strikes the shield on a failed attack against the bearer is automatically neutralized and becomes non-toxic. A creature with poisonous natural weapons whose attack fails must make a Fortitude save (DC 16) or have its venom suppressed for 1d4+1 rounds.",
    "source": "Poisoncraft: The Dark Art — Chapter 4: Tools of the Toxic Trade, p. 41",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "toxifying",
    "name": "Toxifying",
    "category": "weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Weapon ability. Any poison applied to a toxifying weapon gains a +4 enhancement bonus to its Fortitude save DC. Bows, crossbows, and slings with this ability pass the bonus to poison applied to their ammunition.",
    "source": "Poisoncraft: The Dark Art — Chapter 4: Tools of the Toxic Trade, p. 42",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "toxifying-greater",
    "name": "Toxifying, Greater",
    "category": "weapon-special-ability",
    "cost": "+4 bonus",
    "summary": "Weapon ability. As toxifying (+4 enhancement bonus to the save DC of poison applied to the weapon), and the poison also gains the benefit of one metapoison feat chosen when the weapon is made — Continue Poison, Empower Poison, Extend Poison, Gird Poison, Maximize Poison, Modify Poison, Mute Poison, or Quicken Poison. Ranged weapons pass both benefits to their ammunition.",
    "source": "Poisoncraft: The Dark Art — Chapter 4: Tools of the Toxic Trade, p. 42",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "venom-bane",
    "name": "Venom-Bane",
    "category": "weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Weapon ability. Against venomous creatures the weapon's effective enhancement bonus is +2 higher than normal and it deals an additional +2d6 points of damage. Bows, crossbows, and slings with this ability bestow it on their ammunition.",
    "source": "Poisoncraft: The Dark Art — Chapter 4: Tools of the Toxic Trade, p. 42",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "venomous-weapon-ability",
    "name": "Venomous",
    "category": "weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Weapon ability. The weapon is always coated with the same venom possessed by the wielder's animal companion, familiar, or mount; if more than one applies, the wielder selects one and can change the selection as a standard action. The poison dissipates immediately when the weapon is not being wielded, or if the creature is slain or on another plane.",
    "source": "Poisoncraft: The Dark Art — Chapter 4: Tools of the Toxic Trade, p. 42",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dark-decanter",
    "name": "Dark Decanter",
    "category": "wondrous-slotless",
    "cost": "30,000 gp",
    "summary": "A ruby-colored crystal decanter. Any nonmagical liquid placed in it becomes poisonous after 1 round: a magically created ingestion poison (Fortitude DC 16) causing paralysis for 1d4+1 hours as both initial and secondary damage, with the benefit of the Mute Poison feat. Liquid poured from the decanter loses its poisonous properties after one hour.",
    "source": "Poisoncraft: The Dark Art — Chapter 4: Tools of the Toxic Trade, p. 42",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "lord-james-ribbon",
    "name": "Lord James Ribbon",
    "category": "wondrous-throat",
    "cost": "5,000 gp",
    "summary": "A small, intricately woven ribbon occupying the brooch slot. Any nonmagical object or effect (including nonmagical poison) that would reduce the wearer's Constitution score to zero or below instead reduces it to 1.",
    "source": "Poisoncraft: The Dark Art — Chapter 4: Tools of the Toxic Trade, p. 43",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "mask-of-the-timber-assassin",
    "name": "Mask of the Timber Assassin",
    "category": "wondrous-face",
    "cost": "10,800 gp",
    "summary": "A leather mask adorned with brown fur and rows of animal teeth. Three times per day, as a standard action that does not provoke attacks of opportunity, the wearer can unleash a 20-foot cone of poisonous breath (inhalation, Fortitude DC 14): blindness, deafness, and muteness for 1d6 minutes as initial damage and 1d8 points of Constitution damage as secondary damage. Each use dissipates after one round.",
    "source": "Poisoncraft: The Dark Art — Chapter 4: Tools of the Toxic Trade, p. 43",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rod-of-toxic-transference",
    "name": "Rod of Toxic Transference",
    "category": "rod",
    "cost": "48,000 gp",
    "summary": "A darkwood rod that strikes as a +3 heavy mace. Five times per day it can absorb a poison it touches — from a container, weapon, or trap, or from a venomous creature on a successful touch attack or regular attack, suppressing that creature's poison abilities for 1d6 rounds — and stores one poison indefinitely (a newly absorbed poison replaces the stored one). On a successful touch attack or regular attack it can deliver the stored poison with all of its original characteristics.",
    "source": "Poisoncraft: The Dark Art — Chapter 4: Tools of the Toxic Trade, p. 43",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "staff-of-serpents",
    "name": "Staff of Serpents",
    "category": "staff",
    "cost": "70,000 gp",
    "summary": "A staff of adder elm carved with a snakeskin pattern and a serpent's head. It allows use of fangs of the serpent (1 charge), serpent arrow (1 charge), and summon nature's ally V (giant constrictor snake only, 1 charge).",
    "source": "Poisoncraft: The Dark Art — Chapter 4: Tools of the Toxic Trade, p. 43",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "toxic-tome",
    "name": "Toxic Tome",
    "category": "wondrous-slotless",
    "cost": "45,000 gp",
    "summary": "A book, usually of about 100 pages, in which anything written is treated as produced by the forbidden script spell: anyone reading any portion is automatically exposed to a magically created ingestion poison (Fortitude DC 16) whose initial and secondary damage is death. At creation, the maker may select up to one creature per level to be immune to the effect.",
    "source": "Poisoncraft: The Dark Art — Chapter 4: Tools of the Toxic Trade, p. 43",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "whirlwind-globe",
    "name": "Whirlwind Globe",
    "category": "wondrous-slotless",
    "cost": "200 gp",
    "summary": "A 2-inch glass sphere of dark blue crystalline powder, thrown as a splash weapon (ranged touch, 10 ft. range increment). When it breaks, a gust rushes out over a 30-foot radius: all nonmagical gases, fogs, vapors, and mists in the area are immediately dissipated and small open flames are extinguished, though the breeze is weaker than a gust of wind spell in all other respects.",
    "source": "Poisoncraft: The Dark Art — Chapter 4: Tools of the Toxic Trade, p. 43",
    "sourceUrl": "",
    "ruleset": "core"
  }
];

export const POISC_EQUIPMENT_OMNI: EquipmentItem[] = [
  {
    "id": "harvesting-tools-masterwork-poisoncraft",
    "name": "Harvesting Tools, Masterwork",
    "category": "tool",
    "cost": "50 gp",
    "weight": "1 lb.",
    "notes": "A kit of curved scalpel-like blades, steel tongs, and similar instruments used only for harvesting raw materials for poison. It confers a +4 circumstance bonus on Craft (poisonmaking) checks made in connection with harvesting, superseding (not stacking with) the bonus from masterwork poisoncraft tools; the delicate blades dull and the kit must be replaced after ten uses.",
    "source": "Poisoncraft: The Dark Art — Chapter 4: Tools of the Toxic Trade, p. 40",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "hollow-blade",
    "name": "Hollow-Blade",
    "category": "gear",
    "cost": "400 gp",
    "weight": "—",
    "notes": "A non-magical enhancement that can be added to any melee weapon, adding 400 gp to the weapon's cost (a hollow-bladed greatsword costs 450 gp) without changing its weight. A hollow chamber in the weapon holds liquid poison — up to four doses for a light weapon, seven for a one-handed weapon, ten for a two-handed weapon — and as a move action the wielder can release a dose onto the weapon's surface without risk of self-exposure; loading the chamber takes one minute and requires an exposure check. The weapon's hardness is two less than standard (minimum one).",
    "source": "Poisoncraft: The Dark Art — Chapter 4: Tools of the Toxic Trade, p. 40",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "intensifying-agent",
    "name": "Intensifying Agent",
    "category": "alchemical gear",
    "cost": "10 gp",
    "weight": "—",
    "notes": "A chemical agent applied to a single dose of poison that confers a +1 alchemical bonus to the poison's save DC for two hours. Each agent is keyed to a particular family of poisons and has no effect on poisons outside that family.",
    "source": "Poisoncraft: The Dark Art — Chapter 4: Tools of the Toxic Trade, p. 40",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "metapoison-additive-continue-poison",
    "name": "Metapoison Additive (Continue Poison)",
    "category": "alchemical gear",
    "cost": "200 gp",
    "weight": "—",
    "notes": "An additive combined with a single dose of poison so the dose is altered as if crafted with the Continue Poison metapoison feat; the effect lasts up to one full day. It cannot be applied after the poison has been placed on a weapon or trap or otherwise used, and has no effect on poisons with Craft DCs higher than 30.",
    "source": "Poisoncraft: The Dark Art — Chapter 4: Tools of the Toxic Trade, p. 41",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "metapoison-additive-degenerating-poison",
    "name": "Metapoison Additive (Degenerating Poison)",
    "category": "alchemical gear",
    "cost": "400 gp",
    "weight": "—",
    "notes": "An additive combined with a single dose of poison so the dose is altered as if crafted with the Degenerating Poison metapoison feat; the effect lasts up to one full day. It cannot be applied after the poison has been placed on a weapon or trap or otherwise used, and has no effect on poisons with Craft DCs higher than 30.",
    "source": "Poisoncraft: The Dark Art — Chapter 4: Tools of the Toxic Trade, p. 41",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "metapoison-additive-delay-poison",
    "name": "Metapoison Additive (Delay Poison)",
    "category": "alchemical gear",
    "cost": "200 gp",
    "weight": "—",
    "notes": "An additive combined with a single dose of poison so the dose is altered as if crafted with the Delay Poison metapoison feat; the effect lasts up to one full day. It cannot be applied after the poison has been placed on a weapon or trap or otherwise used, and has no effect on poisons with Craft DCs higher than 30.",
    "source": "Poisoncraft: The Dark Art — Chapter 4: Tools of the Toxic Trade, p. 41",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "metapoison-additive-disguise-poison",
    "name": "Metapoison Additive (Disguise Poison)",
    "category": "alchemical gear",
    "cost": "350 gp",
    "weight": "—",
    "notes": "An additive combined with a single dose of poison so the dose is altered as if crafted with the Disguise Poison metapoison feat; the effect lasts up to one full day. It cannot be applied after the poison has been placed on a weapon or trap or otherwise used, and has no effect on poisons with Craft DCs higher than 30.",
    "source": "Poisoncraft: The Dark Art — Chapter 4: Tools of the Toxic Trade, p. 41",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "metapoison-additive-empower-poison",
    "name": "Metapoison Additive (Empower Poison)",
    "category": "alchemical gear",
    "cost": "300 gp",
    "weight": "—",
    "notes": "An additive combined with a single dose of poison so the dose is altered as if crafted with the Empower Poison metapoison feat; the effect lasts up to one full day. It cannot be applied after the poison has been placed on a weapon or trap or otherwise used, and has no effect on poisons with Craft DCs higher than 30.",
    "source": "Poisoncraft: The Dark Art — Chapter 4: Tools of the Toxic Trade, p. 41",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "metapoison-additive-gird-poison",
    "name": "Metapoison Additive (Gird Poison)",
    "category": "alchemical gear",
    "cost": "500 gp",
    "weight": "—",
    "notes": "An additive combined with a single dose of poison so the dose is altered as if crafted with the Gird Poison metapoison feat; the effect lasts up to one full day. It cannot be applied after the poison has been placed on a weapon or trap or otherwise used, and has no effect on poisons with Craft DCs higher than 30.",
    "source": "Poisoncraft: The Dark Art — Chapter 4: Tools of the Toxic Trade, p. 41",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "metapoison-additive-maximize-poison",
    "name": "Metapoison Additive (Maximize Poison)",
    "category": "alchemical gear",
    "cost": "500 gp",
    "weight": "—",
    "notes": "An additive combined with a single dose of poison so the dose is altered as if crafted with the Maximize Poison metapoison feat; the effect lasts up to one full day. It cannot be applied after the poison has been placed on a weapon or trap or otherwise used, and has no effect on poisons with Craft DCs higher than 30.",
    "source": "Poisoncraft: The Dark Art — Chapter 4: Tools of the Toxic Trade, p. 41",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "metapoison-additive-mute-poison",
    "name": "Metapoison Additive (Mute Poison)",
    "category": "alchemical gear",
    "cost": "350 gp",
    "weight": "—",
    "notes": "An additive combined with a single dose of poison so the dose is altered as if crafted with the Mute Poison metapoison feat; the effect lasts up to one full day. It cannot be applied after the poison has been placed on a weapon or trap or otherwise used, and has no effect on poisons with Craft DCs higher than 30.",
    "source": "Poisoncraft: The Dark Art — Chapter 4: Tools of the Toxic Trade, p. 41",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "metapoison-additive-polarizing-poison",
    "name": "Metapoison Additive (Polarizing Poison)",
    "category": "alchemical gear",
    "cost": "400 gp",
    "weight": "—",
    "notes": "An additive combined with a single dose of poison so the dose is altered as if crafted with the Polarizing Poison metapoison feat; the effect lasts up to one full day. It cannot be applied after the poison has been placed on a weapon or trap or otherwise used, and has no effect on poisons with Craft DCs higher than 30.",
    "source": "Poisoncraft: The Dark Art — Chapter 4: Tools of the Toxic Trade, p. 41",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "metapoison-additive-quicken-poison",
    "name": "Metapoison Additive (Quicken Poison)",
    "category": "alchemical gear",
    "cost": "500 gp",
    "weight": "—",
    "notes": "An additive combined with a single dose of poison so the dose is altered as if crafted with the Quicken Poison metapoison feat; the effect lasts up to one full day. It cannot be applied after the poison has been placed on a weapon or trap or otherwise used, and has no effect on poisons with Craft DCs higher than 30.",
    "source": "Poisoncraft: The Dark Art — Chapter 4: Tools of the Toxic Trade, p. 41",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "metapoison-additive-reinforce-poison",
    "name": "Metapoison Additive (Reinforce Poison)",
    "category": "alchemical gear",
    "cost": "200 gp",
    "weight": "—",
    "notes": "An additive combined with a single dose of poison so the dose is altered as if crafted with the Reinforce Poison metapoison feat; the effect lasts up to one full day. It cannot be applied after the poison has been placed on a weapon or trap or otherwise used, and has no effect on poisons with Craft DCs higher than 30.",
    "source": "Poisoncraft: The Dark Art — Chapter 4: Tools of the Toxic Trade, p. 41",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "metapoison-additive-withering-poison",
    "name": "Metapoison Additive (Withering Poison)",
    "category": "alchemical gear",
    "cost": "400 gp",
    "weight": "—",
    "notes": "An additive combined with a single dose of poison so the dose is altered as if crafted with the Withering Poison metapoison feat; the effect lasts up to one full day. It cannot be applied after the poison has been placed on a weapon or trap or otherwise used, and has no effect on poisons with Craft DCs higher than 30.",
    "source": "Poisoncraft: The Dark Art — Chapter 4: Tools of the Toxic Trade, p. 41",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "poison-applicator",
    "name": "Poison Applicator",
    "category": "gear",
    "cost": "1 gp",
    "weight": "—",
    "notes": "A specialized device, taking different forms by delivery method, that is prepared in advance (one minute, with an exposure check) to store a single dose of poison. Once prepared it applies the dose to a weapon, trap, plate of food, or similar item as a free action without any risk of exposure.",
    "source": "Poisoncraft: The Dark Art — Chapter 4: Tools of the Toxic Trade, p. 41",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "poison-grenade",
    "name": "Poison Grenade",
    "category": "gear",
    "cost": "1 gp",
    "weight": "1 lb.",
    "notes": "A rubbery membrane filled with up to two doses of liquid poison (usually contact poison), taking one minute to prepare. Thrown as a splash weapon (ranged touch attack, 10 ft. range increment), it exposes a directly hit target to the poison automatically; anyone within five feet of the impact point has a 50% chance of exposure and gains a +4 circumstance bonus on the saving throw if exposed.",
    "source": "Poisoncraft: The Dark Art — Chapter 4: Tools of the Toxic Trade, p. 41",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "poison-mister",
    "name": "Poison Mister",
    "category": "gear",
    "cost": "2 gp",
    "weight": "—",
    "notes": "A small metal ring with an absorbent membrane that can be saturated with a single dose of liquid poison (usually contact), taking one minute to set. Forcefully exhaling through the ring — a standard action that does not provoke attacks of opportunity — disperses the poison in a 5-foot cone, automatically exposing everyone in the area. Palming the mister requires a Sleight of Hand check (DC 10).",
    "source": "Poisoncraft: The Dark Art — Chapter 4: Tools of the Toxic Trade, p. 41",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "poisonbane-mask",
    "name": "Poisonbane Mask",
    "category": "gear",
    "cost": "20 gp",
    "weight": "1 lb.",
    "notes": "A cloth mask treated with special chemicals, worn over the nose and mouth. While worn it grants a +4 alchemical bonus on Fortitude saving throws against inhalation poisons, but loses its effectiveness after two exposures; donning it is a move action that provokes attacks of opportunity.",
    "source": "Poisoncraft: The Dark Art — Chapter 4: Tools of the Toxic Trade, p. 41",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "poisonbane-jelly",
    "name": "Poisonbane Jelly",
    "category": "alchemical gear",
    "cost": "20 gp",
    "weight": "—",
    "notes": "A gray mentholated jelly spread over every exposed part of a Medium creature's body (one minute to apply). It grants a +4 alchemical bonus on Fortitude saving throws against injury poisons; the protection wears off after two hours or if the creature is immersed in liquid.",
    "source": "Poisoncraft: The Dark Art — Chapter 4: Tools of the Toxic Trade, p. 41",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "poisonbane-spray",
    "name": "Poisonbane Spray",
    "category": "alchemical gear",
    "cost": "20 gp",
    "weight": "1 lb.",
    "notes": "An acrid liquid aerated over every exposed part of a Medium creature's body (one minute to apply). It grants a +4 alchemical bonus on Fortitude saving throws against contact poisons; the protection wears off after two hours or if the creature is immersed in liquid.",
    "source": "Poisoncraft: The Dark Art — Chapter 4: Tools of the Toxic Trade, p. 41",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "poisonbane-tablets",
    "name": "Poisonbane Tablets",
    "category": "alchemical gear",
    "cost": "20 gp",
    "weight": "—",
    "notes": "Small bitter pills, swallowed or dissolved in clean water, that take effect one minute after ingestion. They grant a +4 alchemical bonus on Fortitude saving throws against ingestion poisons; the protection wears off after two hours or one full meal.",
    "source": "Poisoncraft: The Dark Art — Chapter 4: Tools of the Toxic Trade, p. 41",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "poisoncraft-tools-masterwork",
    "name": "Poisoncraft Tools, Masterwork",
    "category": "tool",
    "cost": "400 gp",
    "weight": "40 lb.",
    "notes": "A cross between an alchemist's lab and artisan's tools, used in crafting poison. They confer a +2 circumstance bonus on all Craft (poisonmaking) checks, including checks made when harvesting raw materials.",
    "source": "Poisoncraft: The Dark Art — Chapter 4: Tools of the Toxic Trade, p. 42",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "smokestick-poisoned",
    "name": "Smokestick, Poisoned",
    "category": "alchemical gear",
    "cost": "30 gp plus cost of poison",
    "weight": "1/2 lb.",
    "notes": "A standard smokestick modified to store a single dose of inhalation poison (one minute to prepare); everyone within the smokestick's 10-foot cube of smoke is automatically exposed to the poison. Creating or modifying one requires a Craft (alchemy) check (DC 22).",
    "source": "Poisoncraft: The Dark Art — Chapter 4: Tools of the Toxic Trade, p. 42",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "stimbo",
    "name": "Stimbo",
    "category": "weapon",
    "cost": "50 gp",
    "weight": "2 lb.",
    "notes": "An exotic reach weapon (also called a toad's tongue): a long flexible pole whose flange end holds a sponge loaded with up to three doses of contact poison, each dose taking a full-round action to load. A successful touch attack exposes the target to the poison; it can strike foes 10 feet away but not adjacent ones, and an unloaded stimbo deals no regular damage and has no critical threat range or multiplier.",
    "source": "Poisoncraft: The Dark Art — Chapter 4: Tools of the Toxic Trade, p. 42",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "tanglefoot-bag-poisoned",
    "name": "Tanglefoot Bag, Poisoned",
    "category": "alchemical gear",
    "cost": "75 gp plus cost of poison",
    "weight": "4 lb.",
    "notes": "A standard tanglefoot bag modified to store a single dose of contact poison (one minute to prepare); anyone affected by the bag's entanglement properties is automatically exposed to the poison. Creating or modifying one requires a Craft (alchemy) check (DC 27).",
    "source": "Poisoncraft: The Dark Art — Chapter 4: Tools of the Toxic Trade, p. 42",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "acid-flare",
    "name": "Acid-Flare",
    "category": "alchemical gear",
    "cost": "980 gp",
    "weight": "—",
    "notes": "Poison per dose (ooze family), contact, Fortitude DC 21. Initial damage is vulnerability to acid for 1d6 hours, with no secondary damage; Craft (poisonmaking) DC 28, exposure DC 24.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 85",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "anchor-slime",
    "name": "Anchor Slime",
    "category": "alchemical gear",
    "cost": "1,500 gp",
    "weight": "—",
    "notes": "Poison per dose (aquatic family), injury, Fortitude DC 21. Initial damage reduces the victim's base attack bonus by 2 and secondary damage reduces it by 2d4; Craft (poisonmaking) DC 30, exposure DC 22.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 85",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "aria-of-anguish",
    "name": "Aria of Anguish",
    "category": "alchemical gear",
    "cost": "945 gp",
    "weight": "—",
    "notes": "Poison per dose (no family), inhalation, Fortitude DC 20. Initial damage leaves the victim dazed for 2d6 rounds, with no secondary damage; Craft (poisonmaking) DC 27, exposure DC 25.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 85",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bane-of-driders",
    "name": "Bane of Driders",
    "category": "alchemical gear",
    "cost": "315 gp",
    "weight": "—",
    "notes": "Poison per dose (araneida family), injury, Fortitude DC 16. Initial and secondary damage are each 1d6 Strength; Craft (poisonmaking) DC 21, exposure DC 13.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 85",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "black-death",
    "name": "Black Death",
    "category": "alchemical gear",
    "cost": "3,510 gp",
    "weight": "—",
    "notes": "Poison per dose (lotus family), contact, Fortitude DC 20. Initial and secondary damage are each 3d6 Constitution; Craft (poisonmaking) DC 39, exposure DC 35. This is Poisoncraft's recasting of black lotus extract.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 85",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "blazing-eye",
    "name": "Blazing Eye",
    "category": "alchemical gear",
    "cost": "315 gp",
    "weight": "—",
    "notes": "Poison per dose (no family), injury, Fortitude DC 17. Initial damage is vulnerability to fire for 2 minutes and secondary damage is 3d6 hit points, which count as fire damage; Craft (poisonmaking) DC 21, exposure DC 13.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 85",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "blood-harvest",
    "name": "Blood Harvest",
    "category": "alchemical gear",
    "cost": "3,690 gp",
    "weight": "—",
    "notes": "Poison per dose (lotus family), inhalation, Fortitude DC 32. Initial and secondary damage each reduce the victim's spell resistance by 1d12; Craft (poisonmaking) DC 41, exposure DC 39.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 85",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "blue-deception",
    "name": "Blue Deception",
    "category": "alchemical gear",
    "cost": "5,040 gp",
    "weight": "—",
    "notes": "Poison per dose (lotus family), contact, Fortitude DC 23. Initial damage is 3d6 Wisdom and secondary damage is confusion for 2d6 hours; Craft (poisonmaking) DC 42, exposure DC 38.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 85",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "brawnpincer-iii",
    "name": "Brawnpincer III",
    "category": "alchemical gear",
    "cost": "575 gp",
    "weight": "—",
    "notes": "Poison per dose (scorpionida family; large scorpion venom), injury, Fortitude DC 18. Initial and secondary damage are each 1d6 Strength; Craft (poisonmaking) DC 23, exposure DC 15.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 85",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bromine",
    "name": "Bromine",
    "category": "alchemical gear",
    "cost": "1,600 gp",
    "weight": "—",
    "notes": "Poison per dose (non-ferrous metal family), ingestion, Fortitude DC 21. Initial damage is 2d4 Constitution; secondary damage is nausea for 3d6 minutes plus 1d2 Constitution and 2d12 hit points; Craft (poisonmaking) DC 32, exposure DC 16.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 86",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "buckling-breath",
    "name": "Buckling Breath",
    "category": "alchemical gear",
    "cost": "1,015 gp",
    "weight": "—",
    "notes": "Poison per dose (mineral family; burnt othur fumes), inhalation, Fortitude DC 18. Initial damage is 1 point of permanent Constitution drain and secondary damage is 3d6 Constitution; Craft (poisonmaking) DC 29, exposure DC 27.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 86",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "carrion-spear",
    "name": "Carrion Spear",
    "category": "alchemical gear",
    "cost": "1,015 gp",
    "weight": "—",
    "notes": "Poison per dose (chilopoda family), injury, Fortitude DC 17. Initial damage is paralysis for 1d6 minutes, with no secondary damage; Craft (poisonmaking) DC 29, exposure DC 21.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 86",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "close-call",
    "name": "Close Call",
    "category": "alchemical gear",
    "cost": "285 gp",
    "weight": "—",
    "notes": "Poison per dose (hedge root family), injury, Fortitude DC 13. Initial damage strips the victim's evasion and sneak attack abilities for 1d6 rounds each, and secondary damage is 1d4 Dexterity; Craft (poisonmaking) DC 19, exposure DC 11.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 86",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "corona-araneae",
    "name": "Corona Araneae",
    "category": "alchemical gear",
    "cost": "315 gp",
    "weight": "—",
    "notes": "Poison per dose (araneida family), injury, Fortitude DC 13. Initial damage is 1d6 Strength and secondary damage is 2d6 Strength; Craft (poisonmaking) DC 21, exposure DC 13.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 86",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "coral-blade",
    "name": "Coral-Blade",
    "category": "alchemical gear",
    "cost": "910 gp",
    "weight": "—",
    "notes": "Poison per dose (aquatic family), injury, Fortitude DC 15. Initial damage is paralysis for 2d6 rounds, with no secondary damage; Craft (poisonmaking) DC 26, exposure DC 18.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 86",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "darkling-tongue",
    "name": "Darkling Tongue",
    "category": "alchemical gear",
    "cost": "128 gp",
    "weight": "—",
    "notes": "Poison per dose (serpente family; black adder venom), injury, Fortitude DC 11. Initial and secondary damage are each 1d6 Constitution; Craft (poisonmaking) DC 16, exposure DC 8.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 86",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dark-reaver-poisoncraft",
    "name": "Dark Reaver",
    "category": "alchemical gear",
    "cost": "600 gp",
    "weight": "—",
    "notes": "Poison per dose (undead remains family), ingestion, Fortitude DC 18. Initial damage is 2d6 Constitution and secondary damage is 1d6 Constitution plus 1d6 Strength; Craft (poisonmaking) DC 24, exposure DC 8. This is Poisoncraft's recasting of dark reaver powder.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 86",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "desert-remorse",
    "name": "Desert Remorse",
    "category": "alchemical gear",
    "cost": "136 gp",
    "weight": "—",
    "notes": "Poison per dose (scorpionida family), ingestion, Fortitude DC 13. There is no initial damage; secondary damage is 3d6 points of permanent Strength drain. It carries the benefit of the Mute Poison feat at no change to its Craft DC; Craft (poisonmaking) DC 17, exposure DC 2.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 86",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "devil-may-care",
    "name": "Devil-May-Care",
    "category": "alchemical gear",
    "cost": "2,590 gp",
    "weight": "—",
    "notes": "Poison per dose (lumbricida family), injury, Fortitude DC 23. Initial damage is 3d20 hit points, with no secondary damage; Craft (poisonmaking) DC 37, exposure DC 29.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 86",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dripping-doom",
    "name": "Dripping Doom",
    "category": "alchemical gear",
    "cost": "945 gp",
    "weight": "—",
    "notes": "Poison per dose (ooze family), injury, Fortitude DC 19. Initial damage reduces the victim's base Will save by 2d4, with no secondary damage; Craft (poisonmaking) DC 27, exposure DC 19.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 86",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "emerald-anguish",
    "name": "Emerald Anguish",
    "category": "alchemical gear",
    "cost": "1,550 gp",
    "weight": "—",
    "notes": "Poison per dose (draconic family), injury, Fortitude DC 23. Initial damage is confusion for 2d4 rounds and secondary damage is 2d6 Wisdom; Craft (poisonmaking) DC 31, exposure DC 23.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 86",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "flamestrike-poison",
    "name": "Flamestrike",
    "category": "alchemical gear",
    "cost": "1,550 gp",
    "weight": "—",
    "notes": "Poison per dose (serpente family), injury, Fortitude DC 26. Initial and secondary damage are each 2d8 Strength; exposure DC 24. It cannot be brewed from raw materials — it can only be milked from a live flamestrike rattler, requiring a Handle Animal check (DC 30), so it has no Craft DC.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 86",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "golden-arrow-poison",
    "name": "Golden Arrow",
    "category": "alchemical gear",
    "cost": "5,040 gp",
    "weight": "—",
    "notes": "Poison per dose (lotus family), contact, Fortitude DC 24. Initial damage is 3d6 Intelligence and secondary damage is loss of the ability to cast arcane spells for 1d6 hours; Craft (poisonmaking) DC 42, exposure DC 38.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 87",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "hags-hood",
    "name": "Hag's Hood",
    "category": "alchemical gear",
    "cost": "625 gp",
    "weight": "—",
    "notes": "Poison per dose (no family), ingestion, Fortitude DC 19. Initial and secondary damage are each 2d6 Charisma. It carries the benefit of the Mute Poison feat at no change to its Craft DC; Craft (poisonmaking) DC 25, exposure DC 9.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 87",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "heartstinger",
    "name": "Heartstinger",
    "category": "alchemical gear",
    "cost": "980 gp",
    "weight": "—",
    "notes": "Poison per dose (draconic family), injury, Fortitude DC 17. Initial and secondary damage are each 2d6 Constitution; Craft (poisonmaking) DC 28, exposure DC 20. This is Poisoncraft's recasting of wyvern poison.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 87",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "hopemelter",
    "name": "Hopemelter",
    "category": "alchemical gear",
    "cost": "600 gp",
    "weight": "—",
    "notes": "Poison per dose (ooze family), contact, Fortitude DC 14. Initial damage strips the victim's ability to turn undead for 2d6 hours, with no secondary damage; Craft (poisonmaking) DC 24, exposure DC 20.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 87",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "100-hammers",
    "name": "100 Hammers",
    "category": "alchemical gear",
    "cost": "550 gp",
    "weight": "—",
    "notes": "Poison per dose (chilopoda family), contact, Fortitude DC 13. Initial and secondary damage each reduce the victim's base Reflex save by 1d4; Craft (poisonmaking) DC 22, exposure DC 18.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 87",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "hydrogen-selenide",
    "name": "Hydrogen Selenide",
    "category": "alchemical gear",
    "cost": "1,500 gp",
    "weight": "—",
    "notes": "Poison per dose (non-ferrous metal family), ingestion, Fortitude DC 19. Initial damage is nausea for 1d6 rounds and secondary damage is unconsciousness for 3d20 minutes; Craft (poisonmaking) DC 30, exposure DC 14.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 87",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "kakophage",
    "name": "Kakophage",
    "category": "alchemical gear",
    "cost": "550 gp",
    "weight": "—",
    "notes": "Poison per dose (fungus family), contact, Fortitude DC 16. Initial damage deafens the victim for 1 minute and secondary damage deafens for 1 hour; Craft (poisonmaking) DC 22, exposure DC 18.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 87",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "lazyfeet-i",
    "name": "Lazyfeet I",
    "category": "alchemical gear",
    "cost": "39 gp",
    "weight": "—",
    "notes": "Poison per dose (chilopoda family; small centipede poison), injury, Fortitude DC 11. Initial and secondary damage are each 1d2 Dexterity; Craft (poisonmaking) DC 13, exposure DC 5.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 87",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "limbweb-ii",
    "name": "Limbweb II",
    "category": "alchemical gear",
    "cost": "136 gp",
    "weight": "—",
    "notes": "Poison per dose (araneida family; medium spider venom), injury, Fortitude DC 14. Initial and secondary damage are each 1d4 Strength; Craft (poisonmaking) DC 17, exposure DC 9.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 88",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "lung-famine",
    "name": "Lung-Famine",
    "category": "alchemical gear",
    "cost": "315 gp",
    "weight": "—",
    "notes": "Poison per dose (vine family), inhalation, Fortitude DC 13. Initial damage mutes the victim for 2d6 rounds, with no secondary damage; Craft (poisonmaking) DC 21, exposure DC 18. The poison is inert at temperatures of 50°F and below.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 88",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "malyss-poison",
    "name": "Malyss",
    "category": "alchemical gear",
    "cost": "550 gp",
    "weight": "—",
    "notes": "Poison per dose (arboreal family; malyss root paste), contact, Fortitude DC 16. Initial damage is 1 Dexterity and secondary damage is 2d4 Dexterity; Craft (poisonmaking) DC 22, exposure DC 19.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 88",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "nightbringer",
    "name": "Nightbringer",
    "category": "alchemical gear",
    "cost": "910 gp",
    "weight": "—",
    "notes": "Poison per dose (no family), injury, Fortitude DC 19. Initial damage blinds the victim's darkvision for 3 hours, with no secondary damage; Craft (poisonmaking) DC 26, exposure DC 11.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 88",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "oil-of-snowflower",
    "name": "Oil of Snowflower",
    "category": "alchemical gear",
    "cost": "625 gp",
    "weight": "—",
    "notes": "Poison per dose (hedge root family), injury, Fortitude DC 13. Initial damage strips the victim's ability to cast spells with the fire descriptor for 1d3 days, and secondary damage is 3d6 hit points, which count as cold damage; Craft (poisonmaking) DC 25, exposure DC 17.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 88",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "phantom-feather",
    "name": "Phantom Feather",
    "category": "alchemical gear",
    "cost": "136 gp",
    "weight": "—",
    "notes": "Poison per dose (bestial family), injury, Fortitude DC 14. Initial and secondary damage each reduce the victim's natural armor bonus by 1d2; Craft (poisonmaking) DC 17, exposure DC 9.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 88",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "plunging-spirit",
    "name": "Plunging Spirit",
    "category": "alchemical gear",
    "cost": "600 gp",
    "weight": "—",
    "notes": "Poison per dose (bestial family), injury, Fortitude DC 17. Initial damage reduces the victim's base Fortitude save by 1d2 and secondary damage reduces it by 1d6; Craft (poisonmaking) DC 24, exposure DC 16.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 88",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "pseudodeath",
    "name": "Pseudodeath",
    "category": "alchemical gear",
    "cost": "1,600 gp",
    "weight": "—",
    "notes": "Poison per dose (draconic family), injury, Fortitude DC 14. Initial damage is sleep for 1 minute and secondary damage is sleep for 1d3 hours; Craft (poisonmaking) DC 32, exposure DC 24.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 88",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "quickbiter",
    "name": "Quickbiter",
    "category": "alchemical gear",
    "cost": "600 gp",
    "weight": "—",
    "notes": "Poison per dose (arboreal family; sassone leaf residue), contact, Fortitude DC 16. Initial damage is 2d12 hit points and secondary damage is 1d6 Constitution; Craft (poisonmaking) DC 24, exposure DC 20.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 88",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "quod",
    "name": "Quod",
    "category": "alchemical gear",
    "cost": "1,500 gp",
    "weight": "—",
    "notes": "Poison per dose (hymenoptera family), injury, Fortitude DC 17. There is no initial damage; secondary damage is paralysis for 1d8+5 weeks; Craft (poisonmaking) DC 30, exposure DC 22.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 88",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ravage-moss",
    "name": "Ravage Moss",
    "category": "alchemical gear",
    "cost": "1,600 gp",
    "weight": "—",
    "notes": "Poison per dose (moss family), injury, Fortitude DC 19. Initial and secondary damage each reduce the victim's damage reduction by 2d6; Craft (poisonmaking) DC 32, exposure DC 24.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 88",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "shimmer-poison",
    "name": "Shimmer",
    "category": "alchemical gear",
    "cost": "1,650 gp",
    "weight": "—",
    "notes": "Poison per dose (no family), injury, Fortitude DC 24. Initial and secondary damage each render the victim incorporeal for 1 round. It carries the benefit of the Quicken Poison feat at no change to its Craft DC; Craft (poisonmaking) DC 33, exposure DC 25.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 88",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "stingfire",
    "name": "Stingfire",
    "category": "alchemical gear",
    "cost": "575 gp",
    "weight": "—",
    "notes": "Poison per dose (hymenoptera family; giant wasp poison), injury, Fortitude DC 18. Initial and secondary damage are each 1d6 Dexterity; Craft (poisonmaking) DC 23, exposure DC 15.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 89",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "terror-root",
    "name": "Terror-Root",
    "category": "alchemical gear",
    "cost": "910 gp",
    "weight": "—",
    "notes": "Poison per dose (hedge root family; boiled terinav root), contact, Fortitude DC 16. Initial damage is 1d6 Dexterity and secondary damage is 2d6 Dexterity; Craft (poisonmaking) DC 26, exposure DC 22.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 89",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "timber-bane",
    "name": "Timber-Bane",
    "category": "alchemical gear",
    "cost": "1,650 gp",
    "weight": "—",
    "notes": "Poison per dose (bestial family; pulverized avaranc fangs), injury, Fortitude DC 24. Initial and secondary damage are each 1d12 Constitution; Craft (poisonmaking) DC 33, exposure DC 25.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 89",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "truffle-dirge",
    "name": "Truffle Dirge",
    "category": "alchemical gear",
    "cost": "315 gp",
    "weight": "—",
    "notes": "Poison per dose (fungus family), ingestion, Fortitude DC 13. Initial damage reduces the victim's base Fortitude save by 1d6 and secondary damage is 3d6 Constitution; Craft (poisonmaking) DC 21, exposure DC 5. Racial bonuses to saving throws (such as a dwarf's) are ineffective against this poison.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 89",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "violet-spinebreaker",
    "name": "Violet Spinebreaker",
    "category": "alchemical gear",
    "cost": "1,600 gp",
    "weight": "—",
    "notes": "Poison per dose (lumbricida family; purple worm glands), injury, Fortitude DC 24. Initial damage is 1d6 Strength and secondary damage is 2d6 Strength; Craft (poisonmaking) DC 32, exposure DC 24. This is Poisoncraft's recasting of purple worm poison.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 89",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "vipers-kiss",
    "name": "Viper's Kiss",
    "category": "alchemical gear",
    "cost": "300 gp",
    "weight": "—",
    "notes": "Poison per dose (serpente family), ingestion, Fortitude DC 18. Initial and secondary damage are each 3 points of permanent Constitution drain; Craft (poisonmaking) DC 20, exposure DC 4.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 89",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "voidbreath",
    "name": "Voidbreath",
    "category": "alchemical gear",
    "cost": "5,160 gp",
    "weight": "—",
    "notes": "Poison per dose (bestial family), inhalation, Fortitude DC 22. Initial damage is blindness, deafness, and muteness for 1d6 hours each, and secondary damage is 1d12 Constitution; Craft (poisonmaking) DC 43, exposure DC 41.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 90",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "wasting-dunes",
    "name": "Wasting Dunes",
    "category": "alchemical gear",
    "cost": "2,450 gp",
    "weight": "—",
    "notes": "Poison per dose (scorpionida family), contact, Fortitude DC 23. There is no initial damage; secondary damage is 1d20 Strength; Craft (poisonmaking) DC 35, exposure DC 31.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 90",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "waxfruit-whiskey",
    "name": "Waxfruit Whiskey",
    "category": "alchemical gear",
    "cost": "315 gp",
    "weight": "—",
    "notes": "Poison per dose (arboreal family), ingestion, Fortitude DC 17. Initial damage is fatigue for 1d6 hours and secondary damage is exhaustion for 1d6 rounds; Craft (poisonmaking) DC 21, exposure DC 5.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 90",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "winghammer",
    "name": "Winghammer",
    "category": "alchemical gear",
    "cost": "3,510 gp",
    "weight": "—",
    "notes": "Poison per dose (draconic family; concentrated dragon bile), contact, Fortitude DC 26. Initial damage is 3d6 Strength, with no secondary damage; Craft (poisonmaking) DC 39, exposure DC 35.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 90",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "wisp-of-pallstone",
    "name": "Wisp of Pallstone",
    "category": "alchemical gear",
    "cost": "3,420 gp",
    "weight": "—",
    "notes": "Poison per dose (mineral family), inhalation, Fortitude DC 26. Initial damage strips the victim's ability to wild shape for 1d6 days, with no secondary damage; Craft (poisonmaking) DC 38, exposure DC 36.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 90",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "yellowbolt",
    "name": "Yellowbolt",
    "category": "alchemical gear",
    "cost": "315 gp",
    "weight": "—",
    "notes": "Poison per dose (hymenoptera family), injury, Fortitude DC 17. Initial damage reduces the victim's base Reflex save by 1d2 and secondary damage is 1d4 Dexterity; Craft (poisonmaking) DC 21, exposure DC 13.",
    "source": "Poisoncraft: The Dark Art — Appendix: Codex Venenorum, p. 90",
    "sourceUrl": "",
    "ruleset": "core"
  }
];
