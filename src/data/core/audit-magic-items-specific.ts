/**
 * Core Books Audit (2026-10-28): the DMG's specific armor, shields,
 * and weapons that were missing from BOTH the magic-item and the
 * equipment aggregates. Eight further SRD specifics (Adamantine
 * Breastplate, Dwarven Plate, Dragonhide Plate, Elven Chain, Demon
 * Armor, Darkwood Buckler, Mithral Heavy Shield, Nine Lives Stealer)
 * are already in the app via the crystalkeep equipment fan index and
 * are skipped. Known SRD inconsistency: the Assassin's Dagger table
 * price (used here) is 10,302 gp, but the SRD description text on the
 * same page says 18,302 gp — flagged in the audit addendum.
 */
import type { MagicItemDefinition } from "@/engine/types";

type Row = [string, string, string, string];

function build(category: string, source: string, sourceUrl: string, rows: Row[]): MagicItemDefinition[] {
  return rows.map(([id, name, cost, summary]) => ({
    id,
    name,
    category,
    cost,
    summary,
    source,
    sourceUrl,
    ruleset: "core" as const,
  }));
}

const ARMOR = "d20SRD — Magic Items: Specific Armor and Shields";
const ARMOR_URL = "https://www.d20srd.org/srd/magicItems/magicArmor.htm";
const WEAPONS = "d20SRD — Magic Items: Specific Weapons";
const WEAPON_URL = "https://www.d20srd.org/srd/magicItems/magicWeapons.htm";

export const CORE_AUDIT_SPECIFIC_ITEMS: MagicItemDefinition[] = [
  ...build("armor", ARMOR, ARMOR_URL, [
    ["mithral-shirt", "Mithral Shirt", "1,100 gp", "A +1 chain shirt of mithral: armor bonus +4, maximum Dexterity bonus +6, no armor check penalty, 10% arcane spell failure."],
    ["rhino-hide", "Rhino Hide", "5,165 gp", "A suit of +2 hide armor; the wearer deals an extra 2d6 points of damage on a successful charge attack."],
    ["banded-mail-of-luck", "Banded Mail of Luck", "18,900 gp", "A suit of +3 banded mail; once per week, the wearer can reroll a roll that has just been made, as printed."],
    ["celestial-armor", "Celestial Armor", "22,400 gp", "A suit of +3 chainmail so fine it can be worn under clothing: maximum Dexterity bonus +8, armor check penalty -2, 15% arcane spell failure, and the wearer can fly once per day on command."],
    ["plate-armor-of-the-deep", "Plate Armor of the Deep", "24,650 gp", "A suit of +4 full plate; the wearer can breathe underwater and move and act freely while submerged, as printed."],
    ["breastplate-of-command", "Breastplate of Command", "25,400 gp", "A +2 breastplate granting a +2 competence bonus on Charisma checks and Charisma-based skill checks; the wearer's bearing also bolsters nearby allies against fear, as printed."],
    ["mithral-full-plate-of-speed", "Mithral Full Plate of Speed", "26,500 gp", "A suit of +1 mithral full plate; on command the wearer acts as if hasted for up to 10 rounds per day (the rounds need not be consecutive)."],
  ]),
  ...build("shield", ARMOR, ARMOR_URL, [
    ["darkwood-shield", "Darkwood Shield", "257 gp", "A heavy wooden shield of darkwood (+2 shield bonus) weighing half normal, with an armor check penalty of 0."],
    ["casters-shield", "Caster's Shield", "3,153 gp", "A +1 light wooden shield with a leather strip that holds one scroll the wearer can read from the shield, and a reduced arcane spell failure chance (5%) as printed."],
    ["spined-shield", "Spined Shield", "5,580 gp", "A +1 heavy steel shield that can fire its spines as ranged attacks; the spines regrow as printed."],
    ["lions-shield", "Lion's Shield", "9,170 gp", "A +2 heavy steel shield that, three times per day on command, animates and attacks the owner's enemies in lion form, as printed."],
    ["winged-shield", "Winged Shield", "17,257 gp", "A +3 heavy wooden shield; on command it allows the wearer to fly, as the fly spell, once per day."],
    ["absorbing-shield", "Absorbing Shield", "50,170 gp", "A +2 heavy steel shield that can absorb and negate a spell or magic effect touching it, up to its printed limit."],
  ]),
  ...build("weapon", WEAPONS, WEAPON_URL, [
    ["sleep-arrow", "Sleep Arrow", "132 gp", "A +1 arrow: a creature struck must succeed on a DC 11 Will save or fall asleep (as the sleep spell, with no Hit Dice limit). A single-use weapon."],
    ["screaming-bolt", "Screaming Bolt", "267 gp", "A +2 crossbow bolt that screams in flight; creatures in its path must save against fear (Will DC 14) as printed."],
    ["silver-dagger-masterwork", "Silver Dagger, Masterwork", "322 gp", "A masterwork dagger of alchemical silver (damage reduced by one step, as for all alchemical silver weapons)."],
    ["cold-iron-longsword-masterwork", "Cold Iron Longsword, Masterwork", "330 gp", "A masterwork longsword of cold iron, effective against fey and demons."],
    ["javelin-of-lightning", "Javelin of Lightning", "1,500 gp", "When thrown, this javelin becomes a 5d6 lightning bolt along its path (Reflex DC 14 for half). A single-use weapon."],
    ["slaying-arrow", "Slaying Arrow", "2,282 gp", "A +1 arrow keyed to one creature type: a struck creature of that type must succeed on a DC 20 Fortitude save or die. A single-use weapon."],
    ["slaying-arrow-greater", "Slaying Arrow, Greater", "4,057 gp", "As a slaying arrow, but +2 and the Fortitude save DC is 23. A single-use weapon."],
    ["adamantine-dagger", "Adamantine Dagger", "3,002 gp", "A dagger of adamantine (counts as masterwork; hardness 20; ignores hardness of less than 20 when used to sunder)."],
    ["adamantine-battleaxe", "Adamantine Battleaxe", "3,010 gp", "A battleaxe of adamantine (counts as masterwork; hardness 20; ignores hardness of less than 20 when used to sunder)."],
    ["shatterspike", "Shatterspike", "4,315 gp", "A +1 longsword that functions as a +4 weapon on sunder attempts and deals extra damage when sundering an opponent's weapon, as printed."],
    ["dagger-of-venom", "Dagger of Venom", "8,302 gp", "A +1 dagger; once per day the wielder can envenom the blade with an injury poison (Fortitude DC 14; 1d6 Constitution damage initially and again as secondary damage)."],
    ["trident-of-warning", "Trident of Warning", "10,115 gp", "A magic trident that warns its wielder of approaching danger, as described in the SRD entry."],
    ["assassins-dagger", "Assassin's Dagger", "10,302 gp", "A dagger that increases the saving throw DC of the wielder's death attack by +1. (The SRD's price table says 10,302 gp; the SRD description text on the same page says 18,302 gp — see the audit addendum.)"],
    ["shifters-sorrow", "Shifter's Sorrow", "12,780 gp", "A +1 two-bladed sword: a shapechanger struck by it must succeed on a DC 15 Will save or resume its natural form, and the weapon deals extra damage to shapechangers, as printed."],
    ["trident-of-fish-command", "Trident of Fish Command", "18,650 gp", "A +1 trident; the wielder can charm aquatic animals and communicate with aquatic creatures, as printed."],
    ["flame-tongue", "Flame Tongue", "20,715 gp", "A +1 flaming burst longsword; once per day it can fire a scorching ray (ranged touch attack, 4d6 fire damage)."],
    ["luck-blade-0-wishes", "Luck Blade (0 Wishes)", "22,060 gp", "A +2 short sword granting a +1 luck bonus on all saving throws and one reroll per day; it holds no remaining wishes."],
    ["sword-of-subtlety", "Sword of Subtlety", "22,310 gp", "A +1 short sword granting a +4 bonus on attack and damage rolls whenever the wielder makes a sneak attack."],
    ["sword-of-the-planes", "Sword of the Planes", "22,315 gp", "A longsword whose enhancement bonus rises against extraplanar creatures, up to +4, depending on the target's home plane, as printed."],
    ["sword-of-life-stealing", "Sword of Life Stealing", "25,715 gp", "A +2 longsword: on a critical hit, the target gains one negative level and the wielder gains 1d6 temporary hit points (Fortitude DC 16 to remove the level after 24 hours)."],
    ["oathbow", "Oathbow", "25,600 gp", "A +2 composite longbow: the wielder can swear an oath against one foe, against whom the bow becomes +5 and its arrows deal quadruple damage on a critical hit; neglecting the oath penalizes the wielder, as printed."],
    ["mace-of-terror", "Mace of Terror", "38,552 gp", "A +2 heavy mace; three times per day the wielder can loose a wave of fear, as printed."],
    ["life-drinker", "Life-Drinker", "40,320 gp", "A +1 greataxe of gray metal: each hit bestows two negative levels on the target and one negative level on the wielder."],
    ["sylvan-scimitar", "Sylvan Scimitar", "47,315 gp", "A +3 scimitar; outdoors in a woodland setting it functions as a +5 keen scimitar, as printed."],
    ["rapier-of-puncturing", "Rapier of Puncturing", "50,320 gp", "A +2 rapier; three times per day, a successful hit can also deal 1d6 points of Constitution damage, as printed."],
    ["sun-blade", "Sun Blade", "50,335 gp", "A +2 bastard sword light enough to wield as a short sword: it counts as +4 against evil creatures, deals double damage against undead and creatures of the Negative Energy Plane, and can shed true daylight once per day."],
    ["frost-brand", "Frost Brand", "54,475 gp", "A +3 frost greatsword that sheds light, absorbs the first 10 points of fire damage per round, and can quench magical fires, as printed."],
    ["dwarven-thrower", "Dwarven Thrower", "60,312 gp", "A +2 warhammer usable only by dwarves: it can be thrown and returns to the thrower, counting as +3 and dealing extra damage against giants, as printed."],
    ["mace-of-smiting", "Mace of Smiting", "75,312 gp", "A +3 adamantine heavy mace that counts as +5 against constructs and can destroy constructs and objects outright on a critical hit, as printed."],
    ["holy-avenger", "Holy Avenger", "120,630 gp", "A +2 cold iron longsword that, in a paladin's hands, becomes a +5 holy longsword, grants spell resistance (5 + the paladin's level) to the paladin and adjacent allies, and allows greater dispel magic at will, as printed."],
    ["luck-blade-1-wish", "Luck Blade (1 Wish)", "62,360 gp", "A +2 short sword granting a +1 luck bonus on all saving throws and one reroll per day; one wish remains in the blade."],
    ["luck-blade-2-wishes", "Luck Blade (2 Wishes)", "102,660 gp", "A +2 short sword granting a +1 luck bonus on all saving throws and one reroll per day; two wishes remain in the blade."],
    ["luck-blade-3-wishes", "Luck Blade (3 Wishes)", "142,960 gp", "A +2 short sword granting a +1 luck bonus on all saving throws and one reroll per day; three wishes remain in the blade."],
  ]),
];
