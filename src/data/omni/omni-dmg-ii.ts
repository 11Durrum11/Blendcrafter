/**
 * Omni sweep (2026-11-02): Dungeon Master's Guide II — Chapter 7:
 * Magic Items (printed pp. 229-283). The chapter's armor and weapon
 * special abilities, specific weapons, rings, rods, and wondrous
 * items, plus the nonmagical weapon and armor templates (filed as
 * equipment). Prices are the printed market prices / base price
 * modifiers; summaries are mechanical effects in our own words.
 * Items the Magic Item Compendium later reprinted (ring of greater
 * counterspells, conduit rod, magic siphon, rod of grievous wounds,
 * rod of sure striking, soul anchor, casting glove, domain draught,
 * lenses of true form, mantle of second chances, riding boots, robe
 * of the inferno, rogue's vest, scarab of stabilization, and the
 * MIC-reprinted special abilities) already exist in the catalog and
 * are skipped here; where MIC's price differs from DMG II's, the
 * conflict is recorded in the omni-sweep report. Not items and not
 * built: signature traits, bonded item rituals, and magical
 * locations (systems/places, not purchasable entries).
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const DMG2_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [
  {
    "id": "fortifying-defense",
    "name": "Fortifying Defense",
    "category": "armor-special-ability",
    "cost": "+3 bonus (light fortification), +4 bonus (moderate fortification), or +5 bonus (heavy fortification)",
    "summary": "Synergy ability that requires the fortification special ability. When the armor's fortification negates the extra damage of a critical hit or sneak attack, the attacker must succeed on a DC 20 Will save or be unable to deal critical hit or sneak attack extra damage against any target for 1d4 rounds (it still deals normal damage).",
    "source": "Dungeon Master's Guide II \u2014 Chapter 7: Magic Items, p. 251",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "slippery-mind",
    "name": "Slippery Mind",
    "category": "armor-special-ability",
    "cost": "+45,000 gp",
    "summary": "If the wearer fails a saving throw against an enchantment spell or effect, the armor automatically grants her a second saving throw 1 round later at the same DC; failing the second save ends the retries. It has no effect on a creature that already has the slippery mind class ability.",
    "source": "Dungeon Master's Guide II \u2014 Chapter 7: Magic Items, p. 252",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "slippery-aura",
    "name": "Slippery Aura",
    "category": "armor-special-ability",
    "cost": "+45,000 gp",
    "summary": "Synergy ability that requires the slippery mind special ability. Once per day as a standard action, the wearer extends the slippery mind benefit to every ally within 10 feet for 10 minutes: an ally who fails a save against an enchantment spell or effect gets a second save 1 round later at the same DC.",
    "source": "Dungeon Master's Guide II \u2014 Chapter 7: Magic Items, p. 252",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "spell-trapping",
    "name": "Spell Trapping",
    "category": "armor-special-ability",
    "cost": "+5 bonus",
    "summary": "Synergy ability that requires the spell resistance special ability. It increases the armor's spell resistance by 2, and once per day, when a spell of 5th level or lower that targets the wearer fails to overcome the armor's spell resistance, the wearer can trap the spell in the armor as an immediate action and later release it at a foe as originally cast.",
    "source": "Dungeon Master's Guide II \u2014 Chapter 7: Magic Items, p. 252",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "caustic-surge",
    "name": "Caustic Surge",
    "category": "weapon-special-ability",
    "cost": "+2,000 gp",
    "summary": "As a swift action immediately after a successful melee attack, the wielder can have the weapon expel an acidic burst dealing an extra 2d6 points of acid damage on that attack. This ability is usable a number of times per day equal to the wielder's Constitution bonus.",
    "source": "Dungeon Master's Guide II \u2014 Chapter 7: Magic Items, p. 255",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "flaming-surge",
    "name": "Flaming Surge",
    "category": "weapon-special-ability",
    "cost": "+2,000 gp",
    "summary": "As a swift action immediately after a successful melee attack, the wielder can have the weapon burst into flames, dealing an extra 2d6 points of fire damage on that attack. This ability is usable a number of times per day equal to the wielder's Constitution bonus.",
    "source": "Dungeon Master's Guide II \u2014 Chapter 7: Magic Items, p. 258",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "icy-surge",
    "name": "Icy Surge",
    "category": "weapon-special-ability",
    "cost": "+2,000 gp",
    "summary": "As a swift action immediately after a successful melee attack, the wielder can have the weapon emit a burst of deadly chill dealing an extra 2d6 points of cold damage on that attack. This ability is usable a number of times per day equal to the wielder's Charisma bonus.",
    "source": "Dungeon Master's Guide II \u2014 Chapter 7: Magic Items, p. 259",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "lightning-surge",
    "name": "Lightning Surge",
    "category": "weapon-special-ability",
    "cost": "+2,000 gp",
    "summary": "As a swift action immediately after a successful melee attack, the wielder can have the weapon emit a jolt of electrical energy dealing an extra 2d6 points of electricity damage on that attack. This ability is usable a number of times per day equal to the wielder's Charisma bonus.",
    "source": "Dungeon Master's Guide II \u2014 Chapter 7: Magic Items, p. 260",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "air-elemental-power-large",
    "name": "Air Elemental Power (Large)",
    "category": "weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Synergy ability that requires a related electricity burst weapon property. Once per day as a standard action, the wielder summons a Large air elemental that serves for up to 11 rounds; the wielder can communicate with it as if fluent in Auran and direct it in or out of battle.",
    "source": "Dungeon Master's Guide II \u2014 Chapter 7: Magic Items, p. 254",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "air-elemental-power-huge",
    "name": "Air Elemental Power (Huge)",
    "category": "weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Synergy ability that requires a related electricity burst weapon property. Once per day as a standard action, the wielder summons a Huge air elemental that serves for up to 13 rounds; the wielder can communicate with it as if fluent in Auran and direct it in or out of battle.",
    "source": "Dungeon Master's Guide II \u2014 Chapter 7: Magic Items, p. 254",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "air-elemental-power-greater",
    "name": "Air Elemental Power (Greater)",
    "category": "weapon-special-ability",
    "cost": "+3 bonus",
    "summary": "Synergy ability that requires a related electricity burst weapon property. Once per day as a standard action, the wielder summons a greater air elemental that serves for up to 15 rounds; the wielder can communicate with it as if fluent in Auran and direct it in or out of battle.",
    "source": "Dungeon Master's Guide II \u2014 Chapter 7: Magic Items, p. 254",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "air-elemental-power-elder",
    "name": "Air Elemental Power (Elder)",
    "category": "weapon-special-ability",
    "cost": "+4 bonus",
    "summary": "Synergy ability that requires a related electricity burst weapon property. Once per day as a standard action, the wielder summons an elder air elemental that serves for up to 17 rounds; the wielder can communicate with it as if fluent in Auran and direct it in or out of battle.",
    "source": "Dungeon Master's Guide II \u2014 Chapter 7: Magic Items, p. 254",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "earth-elemental-power-large",
    "name": "Earth Elemental Power (Large)",
    "category": "weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Synergy ability that requires the corrosive or acidic burst weapon property. Once per day as a standard action, the wielder summons a Large earth elemental that serves for up to 11 rounds; the wielder can communicate with it as if fluent in Terran and direct it in or out of battle.",
    "source": "Dungeon Master's Guide II \u2014 Chapter 7: Magic Items, p. 256",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "earth-elemental-power-huge",
    "name": "Earth Elemental Power (Huge)",
    "category": "weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Synergy ability that requires the corrosive or acidic burst weapon property. Once per day as a standard action, the wielder summons a Huge earth elemental that serves for up to 13 rounds; the wielder can communicate with it as if fluent in Terran and direct it in or out of battle.",
    "source": "Dungeon Master's Guide II \u2014 Chapter 7: Magic Items, p. 256",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "earth-elemental-power-greater",
    "name": "Earth Elemental Power (Greater)",
    "category": "weapon-special-ability",
    "cost": "+3 bonus",
    "summary": "Synergy ability that requires the corrosive or acidic burst weapon property. Once per day as a standard action, the wielder summons a greater earth elemental that serves for up to 15 rounds; the wielder can communicate with it as if fluent in Terran and direct it in or out of battle.",
    "source": "Dungeon Master's Guide II \u2014 Chapter 7: Magic Items, p. 256",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "earth-elemental-power-elder",
    "name": "Earth Elemental Power (Elder)",
    "category": "weapon-special-ability",
    "cost": "+4 bonus",
    "summary": "Synergy ability that requires the corrosive or acidic burst weapon property. Once per day as a standard action, the wielder summons an elder earth elemental that serves for up to 17 rounds; the wielder can communicate with it as if fluent in Terran and direct it in or out of battle.",
    "source": "Dungeon Master's Guide II \u2014 Chapter 7: Magic Items, p. 256",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "fire-elemental-power-large",
    "name": "Fire Elemental Power (Large)",
    "category": "weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Synergy ability that requires the flaming or flaming burst weapon property. Once per day as a standard action, the wielder summons a Large fire elemental that serves for up to 11 rounds; the wielder can communicate with it as if fluent in Ignan and direct it in or out of battle.",
    "source": "Dungeon Master's Guide II \u2014 Chapter 7: Magic Items, p. 258",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "fire-elemental-power-huge",
    "name": "Fire Elemental Power (Huge)",
    "category": "weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Synergy ability that requires the flaming or flaming burst weapon property. Once per day as a standard action, the wielder summons a Huge fire elemental that serves for up to 13 rounds; the wielder can communicate with it as if fluent in Ignan and direct it in or out of battle.",
    "source": "Dungeon Master's Guide II \u2014 Chapter 7: Magic Items, p. 258",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "fire-elemental-power-greater",
    "name": "Fire Elemental Power (Greater)",
    "category": "weapon-special-ability",
    "cost": "+3 bonus",
    "summary": "Synergy ability that requires the flaming or flaming burst weapon property. Once per day as a standard action, the wielder summons a greater fire elemental that serves for up to 15 rounds; the wielder can communicate with it as if fluent in Ignan and direct it in or out of battle.",
    "source": "Dungeon Master's Guide II \u2014 Chapter 7: Magic Items, p. 258",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "fire-elemental-power-elder",
    "name": "Fire Elemental Power (Elder)",
    "category": "weapon-special-ability",
    "cost": "+4 bonus",
    "summary": "Synergy ability that requires the flaming or flaming burst weapon property. Once per day as a standard action, the wielder summons an elder fire elemental that serves for up to 17 rounds; the wielder can communicate with it as if fluent in Ignan and direct it in or out of battle.",
    "source": "Dungeon Master's Guide II \u2014 Chapter 7: Magic Items, p. 258",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "water-elemental-power-large",
    "name": "Water Elemental Power (Large)",
    "category": "weapon-special-ability",
    "cost": "+1 bonus",
    "summary": "Synergy ability that requires a related cold burst weapon property. Once per day as a standard action, the wielder summons a Large water elemental that serves for up to 11 rounds; the wielder can communicate with it as if fluent in Aquan and direct it in or out of battle.",
    "source": "Dungeon Master's Guide II \u2014 Chapter 7: Magic Items, p. 261",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "water-elemental-power-huge",
    "name": "Water Elemental Power (Huge)",
    "category": "weapon-special-ability",
    "cost": "+2 bonus",
    "summary": "Synergy ability that requires a related cold burst weapon property. Once per day as a standard action, the wielder summons a Huge water elemental that serves for up to 13 rounds; the wielder can communicate with it as if fluent in Aquan and direct it in or out of battle.",
    "source": "Dungeon Master's Guide II \u2014 Chapter 7: Magic Items, p. 261",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "water-elemental-power-greater",
    "name": "Water Elemental Power (Greater)",
    "category": "weapon-special-ability",
    "cost": "+3 bonus",
    "summary": "Synergy ability that requires a related cold burst weapon property. Once per day as a standard action, the wielder summons a greater water elemental that serves for up to 15 rounds; the wielder can communicate with it as if fluent in Aquan and direct it in or out of battle.",
    "source": "Dungeon Master's Guide II \u2014 Chapter 7: Magic Items, p. 261",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "water-elemental-power-elder",
    "name": "Water Elemental Power (Elder)",
    "category": "weapon-special-ability",
    "cost": "+4 bonus",
    "summary": "Synergy ability that requires a related cold burst weapon property. Once per day as a standard action, the wielder summons an elder water elemental that serves for up to 17 rounds; the wielder can communicate with it as if fluent in Aquan and direct it in or out of battle.",
    "source": "Dungeon Master's Guide II \u2014 Chapter 7: Magic Items, p. 261",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dagger-of-lifekeeping",
    "name": "Dagger of Lifekeeping",
    "category": "weapon",
    "cost": "38,702 gp",
    "summary": "A +1 defending dagger that grants its wielder a +2 resistance bonus on all saving throws while it is wielded. Once per day, when the dagger is first drawn from its scabbard, it grants whoever draws it 1d10+10 temporary hit points that last for up to 10 hours.",
    "source": "Dungeon Master's Guide II \u2014 Chapter 7: Magic Items, p. 262",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ghost-gauntlet",
    "name": "Ghost Gauntlet",
    "category": "weapon",
    "cost": "68,782 gp",
    "summary": "A gauntlet that grants the ghost touch special ability to any weapon gripped in the gauntleted hand and lets the wearer make portions of that hand incorporeal, granting a +5 competence bonus on Disable Device and Open Lock checks. Once per day, it can transport an object it touches to a distant location, as the teleport object spell.",
    "source": "Dungeon Master's Guide II \u2014 Chapter 7: Magic Items, p. 262",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ring-of-mental-fortitude",
    "name": "Ring of Mental Fortitude",
    "category": "ring",
    "cost": "110,000 gp",
    "summary": "While worn, this ring protects the wearer against all mind-affecting spells and abilities: they simply fail to affect her, and she need not make saving throws against them.",
    "source": "Dungeon Master's Guide II \u2014 Chapter 7: Magic Items, p. 263",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rod-of-avoidance",
    "name": "Rod of Avoidance",
    "category": "rod",
    "cost": "10,000 gp",
    "summary": "Three times per day, when this rod is activated the wielder gains a +20 deflection bonus to Armor Class that lasts until the beginning of his next action.",
    "source": "Dungeon Master's Guide II \u2014 Chapter 7: Magic Items, p. 264",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bracelets-of-spell-sharing",
    "name": "Bracelets of Spell Sharing",
    "category": "wondrous-arms",
    "cost": "60,000 gp",
    "summary": "A pair of bracelets worn by two different creatures. Whenever one wearer is the target of a personal-range spell, the spell automatically affects both wearers as long as they are within 60 feet of each other, though its duration is halved for each; only one spell can be shared at a time.",
    "source": "Dungeon Master's Guide II \u2014 Chapter 7: Magic Items, p. 266",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "daazzixs-vest",
    "name": "Daazzix's Vest",
    "category": "wondrous-torso",
    "cost": "25,000 gp",
    "summary": "This vest increases the wearer's spell resistance by 5, but it functions only for a wearer who already possesses spell resistance from another source, such as an innate ability or another magic item; if that other source is lost or suppressed, the vest's benefit is lost as well.",
    "source": "Dungeon Master's Guide II \u2014 Chapter 7: Magic Items, p. 267",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "elixir-of-reckoning",
    "name": "Elixir of Reckoning",
    "category": "wondrous-slotless",
    "cost": "825 gp",
    "summary": "A one-use elixir activated on consumption. If the imbiber is slain within 1 hour of drinking it, her body explodes in a blast of eldritch energy dealing 5d6 points of damage to every creature and object within 20 feet (Reflex DC 14 half). If she is not slain within the hour, the elixir has no effect. More potent variants are rumored.",
    "source": "Dungeon Master's Guide II \u2014 Chapter 7: Magic Items, p. 268",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "lenses-of-pain",
    "name": "Lenses of Pain",
    "category": "wondrous-face",
    "cost": "19,000 gp",
    "summary": "When activated (for a total of up to 10 rounds per day), these lenses grant the wearer a gaze attack: each creature within 30 feet must succeed on a DC 16 Will save every round or take 2d6 points of damage and become sickened (a successful save halves the damage and negates the sickened condition, and a creature that saves is immune for 24 hours). The wearer can also focus the gaze on one creature as a standard action.",
    "source": "Dungeon Master's Guide II \u2014 Chapter 7: Magic Items, p. 268",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "quill-of-rapid-scrivening",
    "name": "Quill of Rapid Scrivening",
    "category": "wondrous-slotless",
    "cost": "27,000 gp",
    "summary": "Tracing the runes of a previously deciphered spell scroll with this quill for 10 minutes automatically copies the spell onto a designated blank page of the user's spellbook (wizard spells only). The quill also grants a +10 competence bonus on Forgery checks made to forge documents.",
    "source": "Dungeon Master's Guide II \u2014 Chapter 7: Magic Items, p. 270",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "scarf-of-spellcatching",
    "name": "Scarf of Spellcatching",
    "category": "wondrous",
    "cost": "18,000 gp",
    "summary": "This scarf grants a +2 luck bonus on all saving throws against spells and spell-like abilities. If a spell targets only the wearer and she succeeds on her save against it, the scarf absorbs the spell instead; a wearer who could cast the absorbed spell (or who uses Use Magic Device) can later cast it from the scarf. The scarf holds one spell at a time and unravels and is destroyed after absorbing a total of twenty spell levels.",
    "source": "Dungeon Master's Guide II \u2014 Chapter 7: Magic Items, p. 272",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "slippers-of-battledancing",
    "name": "Slippers of Battledancing",
    "category": "wondrous-feet",
    "cost": "33,750 gp",
    "summary": "While the wearer wears light or lighter armor, these slippers grant a +10-foot enhancement bonus to land speed and a +5 competence bonus on Tumble checks. A wearer with at least 5 ranks in Perform (dance) also gains a +2 insight bonus on initiative checks while using her land speed, and after moving at least 10 feet she can use her Charisma modifier instead of her Strength or Dexterity modifier on attack and damage rolls with light or one-handed weapons.",
    "source": "Dungeon Master's Guide II \u2014 Chapter 7: Magic Items, p. 272",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "vest-of-legends",
    "name": "Vest of Legends",
    "category": "wondrous-torso",
    "cost": "16,000 gp",
    "summary": "The wearer gains a +5 competence bonus on Diplomacy checks and Perform checks. In addition, a bard wearing the vest treats her bard level as five higher than it actually is when determining the effects of her inspire courage, fascinate, inspire greatness, and inspire heroics abilities (this grants no additional bardic music abilities).",
    "source": "Dungeon Master's Guide II \u2014 Chapter 7: Magic Items, p. 272",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "vestment-of-verminshape",
    "name": "Vestment of Verminshape",
    "category": "wondrous-body",
    "cost": "20,000 gp",
    "summary": "A wearer with the wild shape class ability can use this vestment to assume the shapes of monstrous vermin as well as the animals to which she is normally entitled, with the same size options allowed for her animal shapes.",
    "source": "Dungeon Master's Guide II \u2014 Chapter 7: Magic Items, p. 273",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "vestments-of-divinity",
    "name": "Vestments of Divinity",
    "category": "wondrous-body",
    "cost": "30,000 gp",
    "summary": "A good-aligned wearer with access to cleric domains gains access to the Good domain, and an evil-aligned wearer gains access to the Evil domain: the wearer can prepare that domain's spells (still limited to one domain spell per level) and casts spells with the corresponding alignment descriptor at +1 caster level, or +2 caster level if the wearer already has access to that domain. A wearer who is neither good nor evil gains no benefit.",
    "source": "Dungeon Master's Guide II \u2014 Chapter 7: Magic Items, p. 273",
    "sourceUrl": "",
    "ruleset": "core"
  }
];

export const DMG2_EQUIPMENT_OMNI: EquipmentItem[] = [
  {
    "id": "feycraft-template",
    "name": "Feycraft Template",
    "category": "gear",
    "cost": "+500 gp (armor or shield), +1,500 gp (weapon)",
    "weight": "\u2014",
    "notes": "Nonmagical item template for armor, shields, or weapons crafted by fey or those under a fey's magical influence (armor only light armor or wooden shields; weapons only light, one-handed melee, or ranged). The item weighs 10% less and its hardness is reduced by 1. Armor and shields have their arcane spell failure chance reduced by 5% and hit points reduced by 5, and the wearer gains a +1 bonus on Bluff checks to deceive with words. Weapons deal damage as one size category smaller, but one-handed weapons count as light for Weapon Finesse and light weapons can use Dexterity instead of Strength on attack rolls.",
    "source": "Dungeon Master's Guide II \u2014 Chapter 7: Magic Items, Weapon and Armor Templates, p. 274",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "fireshaped-template",
    "name": "Fireshaped Template",
    "category": "gear",
    "cost": "+300 gp (armor or shield), +800 gp (weapon)",
    "weight": "\u2014",
    "notes": "Nonmagical item template for metallic armor, shields, or weapons crafted on the Elemental Plane of Fire by a native of that plane. The item appears wreathed in illusory flame that sheds light equal to a torch. The wearer of fireshaped armor gains a +2 bonus on saves against fire effects and on checks to resist heat. A fireshaped weapon deals 1 extra point of damage to a foe with the cold subtype.",
    "source": "Dungeon Master's Guide II \u2014 Chapter 7: Magic Items, Weapon and Armor Templates, p. 275",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "githcraft-template",
    "name": "Githcraft Template",
    "category": "gear",
    "cost": "+600 gp (armor or shield), +900 gp (weapon)",
    "weight": "\u2014",
    "notes": "Nonmagical item template for armor, shields, or weapons crafted by a githyanki on the Astral Plane. Armor and shields have their arcane spell failure chance reduced by 5%, and the wearer of githcraft armor or bearer of a githcraft shield gains a +1 bonus on Concentration checks. A githcraft weapon (bladed weapons only) deals 1 extra point of damage against psionic creatures.",
    "source": "Dungeon Master's Guide II \u2014 Chapter 7: Magic Items, Weapon and Armor Templates, p. 276",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "gloryborn-template",
    "name": "Gloryborn Template",
    "category": "gear",
    "cost": "+150 gp (armor or shield), +600 gp (weapon)",
    "weight": "\u2014",
    "notes": "Nonmagical item template for armor, shields, or weapons crafted on the Heroic Domains of Ysgard by a native smith. An evil creature that wears gloryborn armor or wields a gloryborn weapon takes a \u20131 penalty on attack rolls. A character wearing gloryborn armor gains a +1 bonus to AC when charging (the normal charging penalty still applies) until the start of her next turn. A gloryborn weapon deals 1 extra point of damage on a charge attack.",
    "source": "Dungeon Master's Guide II \u2014 Chapter 7: Magic Items, Weapon and Armor Templates, p. 277",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "hellforged-template",
    "name": "Hellforged Template",
    "category": "gear",
    "cost": "+1,000 gp (armor or shield), +1,500 gp (weapon)",
    "weight": "\u2014",
    "notes": "Nonmagical item template for armor, shields, or weapons crafted in the Nine Hells of Baator by a native smith. A good creature that wears hellforged armor or wields a hellforged weapon takes a \u20131 penalty on attack rolls. The item's hardness increases by 1 and its hit points by 5. Armor and shields have their maximum Dexterity bonus reduced by 1, armor check penalty improved by 1, and arcane spell failure chance increased by 5%; the wearer of hellforged armor gains a +1 bonus to AC whenever she is adjacent to an ally. A hellforged weapon deals 1 extra point of damage to any foe the wielder flanks.",
    "source": "Dungeon Master's Guide II \u2014 Chapter 7: Magic Items, Weapon and Armor Templates, p. 277",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "pitspawned-template",
    "name": "Pitspawned Template",
    "category": "gear",
    "cost": "+600 gp (armor or shield), +1,000 gp (weapon)",
    "weight": "\u2014",
    "notes": "Nonmagical item template for armor, shields, or weapons crafted in the Infinite Layers of the Abyss by a native smith. A good creature that wears pitspawned armor or wields a pitspawned weapon takes a \u20131 penalty on attack rolls. Any creature that strikes the wearer of pitspawned armor or the bearer of a pitspawned shield with a melee attack takes 1 point of damage (this damage is not subject to damage reduction and does not stack from multiple pitspawned items). A pitspawned weapon grants a +2 bonus on rolls to confirm critical hits.",
    "source": "Dungeon Master's Guide II \u2014 Chapter 7: Magic Items, Weapon and Armor Templates, p. 278",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "soulforged-template",
    "name": "Soulforged Template",
    "category": "gear",
    "cost": "+400 gp (armor or shield), +800 gp (weapon)",
    "weight": "\u2014",
    "notes": "Nonmagical item template for armor, shields, or weapons crafted in the Seven Mounting Heavens of Celestia by a native smith. An evil creature that wears soulforged armor or wields a soulforged weapon takes a \u20131 penalty on attack rolls. The item's hardness increases by 1 and its hit points by 5. Anyone wearing soulforged armor or carrying a soulforged shield gains a +2 bonus on ability checks to resist being bull rushed or tripped. A soulforged weapon deals 2 extra points of damage against a charging foe.",
    "source": "Dungeon Master's Guide II \u2014 Chapter 7: Magic Items, Weapon and Armor Templates, p. 278",
    "sourceUrl": "",
    "ruleset": "core"
  }
];
