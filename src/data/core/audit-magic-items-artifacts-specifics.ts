/**
 * Core Books Audit (2026-11-02): the DMG/SRD artifacts, specific
 * weapons, specific armor and shields, and magic ammunition that
 * were never built — the app held only two artifacts (Deck of Many
 * Things, Sphere of Annihilation), two kinds of magic ammunition,
 * and a partial run of the specific weapons/armor lists. Everything
 * here is taken from the d20 SRD pages for the Dungeon Master's
 * Guide lists, skipping any item already present under the same or
 * a variant name (the four SRD specific-ammunition items — Sleep
 * Arrow, Screaming Bolt, Slaying Arrow, Slaying Arrow Greater —
 * already exist, filed as weapons). Ammunition prices are the SRD
 * per-50 prices: the Table: Weapons enhancement price plus the
 * ammunition's masterwork weapon cost from Table: Common Ranged
 * Weapons. Summaries are headline effects in our own words.
 */
import type { MagicItemDefinition } from "@/engine/types";

const ARTIFACT_SRC = "Dungeon Master's Guide — Artifacts";
const ARTIFACT_URL = "https://www.d20srd.org/srd/magicItems/artifacts.htm";
const WEAPON_SRC = "Dungeon Master's Guide — Specific Weapons";
const WEAPON_URL = "https://www.d20srd.org/srd/magicItems/magicWeapons.htm";
const ARMOR_SRC = "Dungeon Master's Guide — Specific Armor";
const SHIELD_SRC = "Dungeon Master's Guide — Specific Shields";
const ARMOR_URL = "https://www.d20srd.org/srd/magicItems/magicArmor.htm";
const AMMO_SRC = "Dungeon Master's Guide — Magic Weapons";
const AMMO_URL = "https://www.d20srd.org/srd/magicItems/magicWeapons.htm";

export const DMG_ARTIFACTS: MagicItemDefinition[] = [
  {
    "id": "book-of-infinite-spells",
    "name": "Book of Infinite Spells",
    "category": "artifact",
    "cost": "—",
    "summary": "A book of 1d8+22 pages, each holding an arcane or divine spell its owner can cast from it once per day (up to four times if the spell is on the owner's class list). Its pages turn on their own as spells are cast and can never be turned back; non-spellcasters gain a negative level while they possess it.",
    "source": ARTIFACT_SRC,
    "sourceUrl": ARTIFACT_URL,
    "ruleset": "core"
  },
  {
    "id": "hammer-of-thunderbolts",
    "name": "Hammer of Thunderbolts",
    "category": "artifact",
    "cost": "—",
    "summary": "A +3 Large returning warhammer. Wielded by someone who knows its nature while wearing a belt of giant strength and gauntlets of ogre power, it becomes +5, slays any giant it hits (Fortitude DC 20 negates), and thunders when hurled, stunning creatures within 90 feet (Fortitude DC 15 negates).",
    "source": ARTIFACT_SRC,
    "sourceUrl": ARTIFACT_URL,
    "ruleset": "core"
  },
  {
    "id": "philosophers-stone",
    "name": "Philosopher's Stone",
    "category": "artifact",
    "cost": "—",
    "summary": "A sooty stone that, once broken open, lets an arcane spellcaster transmute up to 5,000 pounds of iron into silver or 1,000 pounds of lead into gold within 24 hours. Its quicksilver can instead be mixed into an oil that works as true resurrection.",
    "source": ARTIFACT_SRC,
    "sourceUrl": ARTIFACT_URL,
    "ruleset": "core"
  },
  {
    "id": "staff-of-the-magi",
    "name": "Staff of the Magi",
    "category": "artifact",
    "cost": "—",
    "summary": "A 50-charge staff holding many spell powers, from detect magic at will up to summon monster IX, plane shift, and telekinesis for 2 charges. It grants spell resistance 23, absorbs arcane spells cast at its wielder into charges, and can be broken for a devastating retributive strike.",
    "source": ARTIFACT_SRC,
    "sourceUrl": ARTIFACT_URL,
    "ruleset": "core"
  },
  {
    "id": "talisman-of-pure-good",
    "name": "Talisman of Pure Good",
    "category": "artifact",
    "cost": "—",
    "summary": "A good divine spellcaster can spend one of its 6 charges to open a flaming crack at the feet of an evil divine spellcaster up to 100 feet away, swallowing the victim forever. Neutral divine spellcasters who touch it take 6d6 damage; evil ones take 8d6.",
    "source": ARTIFACT_SRC,
    "sourceUrl": ARTIFACT_URL,
    "ruleset": "core"
  },
  {
    "id": "talisman-of-the-sphere",
    "name": "Talisman of the Sphere",
    "category": "artifact",
    "cost": "—",
    "summary": "A small adamantine loop that doubles an arcane spellcaster's modifier on control checks over a sphere of annihilation, and halves how often those checks must be made once control is established. Anyone unable to cast arcane spells takes 5d6 damage merely from holding it.",
    "source": ARTIFACT_SRC,
    "sourceUrl": ARTIFACT_URL,
    "ruleset": "core"
  },
  {
    "id": "talisman-of-reluctant-wishes",
    "name": "Talisman of Reluctant Wishes",
    "category": "artifact",
    "cost": "—",
    "summary": "A capricious talisman keyed to the holder's Charisma: depending on a Charisma check it may act as a stone of weight, warn of traps within 20 feet, and grant wishes, but it always vanishes when its time expires, leaving a 10,000 gp diamond behind.",
    "source": ARTIFACT_SRC,
    "sourceUrl": ARTIFACT_URL,
    "ruleset": "core"
  },
  {
    "id": "talisman-of-ultimate-evil",
    "name": "Talisman of Ultimate Evil",
    "category": "artifact",
    "cost": "—",
    "summary": "An evil divine spellcaster can spend one of its 6 charges to open a flaming crack at the feet of a good divine spellcaster up to 100 feet away, swallowing the victim forever. Neutral divine spellcasters who touch it take 6d6 damage; good ones take 8d6.",
    "source": ARTIFACT_SRC,
    "sourceUrl": ARTIFACT_URL,
    "ruleset": "core"
  },
  {
    "id": "moaning-diamond",
    "name": "Moaning Diamond",
    "category": "artifact",
    "cost": "—",
    "summary": "A fist-sized uncut diamond that gives forth a constant baleful moaning. Three times per day it can reshape up to 5,000 cubic feet of earth and stone as the stone shape spell, and it can summon an elder earth elemental with maximum hit points to serve its wielder.",
    "source": ARTIFACT_SRC,
    "sourceUrl": ARTIFACT_URL,
    "ruleset": "core"
  },
  {
    "id": "orbs-of-dragonkind",
    "name": "Orbs of Dragonkind",
    "category": "artifact",
    "cost": "—",
    "summary": "One orb for each of the ten dragon varieties, each holding an ancient dragon's essence and personality. The bearer dominates dragons of that variety (Will DC 25 negates), gains the dragon's AC and saving throw bonuses, is immune to its breath weapon and can use it three times per day — and earns the eternal enmity of all dragonkind.",
    "source": ARTIFACT_SRC,
    "sourceUrl": ARTIFACT_URL,
    "ruleset": "core"
  },
  {
    "id": "saints-mace",
    "name": "Saint's Mace",
    "category": "artifact",
    "cost": "—",
    "summary": "A plain, well-used cudgel that is actually a +5 heavy mace with the holy, lawful, and disruption special abilities. Its wielder can project searing light from it at will, at caster level 20th.",
    "source": ARTIFACT_SRC,
    "sourceUrl": ARTIFACT_URL,
    "ruleset": "core"
  },
  {
    "id": "shadowstaff",
    "name": "Shadowstaff",
    "category": "artifact",
    "cost": "—",
    "summary": "A twisted staff of woven shadow that renders its wielder slightly incorporeal (+4 bonus to AC and Reflex saves). It can summon shadows or, once per month, a nightcrawler nightshade; grant a shadow form three times per day; and fire a shadow bolt dealing 10d6 cold damage.",
    "source": ARTIFACT_SRC,
    "sourceUrl": ARTIFACT_URL,
    "ruleset": "core"
  },
  {
    "id": "shield-of-the-sun",
    "name": "Shield of the Sun",
    "category": "artifact",
    "cost": "—",
    "summary": "A +5 large shield emblazoned with the sun that lets its wielder cast spells as a 20th-level paladin, grants spell resistance 15, and absorbs the first 10 points of any energy attack. Evil or chaotic users gain four negative levels while holding it, and its owner must undertake a quest for a lawful good deity once per year.",
    "source": ARTIFACT_SRC,
    "sourceUrl": ARTIFACT_URL,
    "ruleset": "core"
  },
  {
    "id": "axe-of-the-dwarvish-lords",
    "name": "Axe of the Dwarvish Lords",
    "category": "artifact",
    "cost": "—",
    "summary": "A +6 great axe and symbol of dwarven kingship: it returns when thrown, and in dwarven hands it deepens mastery of stone, craft, and leadership among dwarves.",
    "source": "Dungeon Master's Guide — Major Artifacts",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "codex-of-the-infinite-planes",
    "name": "Codex of the Infinite Planes",
    "category": "artifact",
    "cost": "—",
    "summary": "A vast book whose chapters each describe a plane and how to reach it: studying a chapter can open a gate to that plane — and can break an unprepared reader's mind.",
    "source": "Dungeon Master's Guide — Major Artifacts",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "eye-of-vecna",
    "name": "Eye of Vecna",
    "category": "artifact",
    "cost": "—",
    "summary": "The mummified eye of the lich-god Vecna, implanted in place of the bearer's own eye: it grants true seeing and darkvision along with powers of domination and death, while it works to corrupt its bearer.",
    "source": "Dungeon Master's Guide — Major Artifacts",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "hand-of-vecna",
    "name": "Hand of Vecna",
    "category": "artifact",
    "cost": "—",
    "summary": "Vecna's severed left hand, grafted in place of the bearer's own: it grants tremendous Strength and cold, draining powers, and pushes its bearer toward evil.",
    "source": "Dungeon Master's Guide — Major Artifacts",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "invulnerable-coat-of-arnd",
    "name": "Invulnerable Coat of Arnd",
    "category": "artifact",
    "cost": "—",
    "summary": "A suit of chainmail imbued with the soul of Arnd the priest: famed for rendering its wearer all but invulnerable, with powerful defenses against weapons, spells, and energy alike.",
    "source": "Dungeon Master's Guide — Major Artifacts",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sword-of-kas",
    "name": "Sword of Kas",
    "category": "artifact",
    "cost": "—",
    "summary": "A +6 keen vorpal greatsword forged by Kas, Vecna's lieutenant, to destroy his former master: a blood-drinking blade that corrupts its wielder with bloodlust.",
    "source": "Dungeon Master's Guide — Major Artifacts",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "wand-of-orcus",
    "name": "Wand of Orcus",
    "category": "artifact",
    "cost": "—",
    "summary": "The Demon Prince Orcus's skull-topped wand: in hand it becomes a +6 unholy heavy mace, deals death to the living, and bends the undead to its bearer's will.",
    "source": "Dungeon Master's Guide — Major Artifacts",
    "sourceUrl": "",
    "ruleset": "core"
  }
];

export const DMG_SPECIFIC_WEAPONS_ARMOR: MagicItemDefinition[] = [
  {
    "id": "nine-lives-stealer",
    "name": "Nine Lives Stealer",
    "category": "weapon",
    "cost": "23,057 gp",
    "summary": "A +2 longsword that can draw the life force from an opponent nine times before the power is lost: on a critical hit, the victim must make a DC 20 Fortitude save or die. It is evil, and a good wielder gains two negative levels while it is in hand.",
    "source": WEAPON_SRC,
    "sourceUrl": WEAPON_URL,
    "ruleset": "core"
  },
  {
    "id": "dragonhide-plate",
    "name": "Dragonhide Plate",
    "category": "armor",
    "cost": "3,300 gp",
    "summary": "Nonmagical full plate made of dragonhide rather than metal, so druids can wear it. Otherwise identical to masterwork full plate.",
    "source": ARMOR_SRC,
    "sourceUrl": ARMOR_URL,
    "ruleset": "core"
  },
  {
    "id": "elven-chain",
    "name": "Elven Chain",
    "category": "armor",
    "cost": "4,150 gp",
    "summary": "Nonmagical chainmail of very fine mithral links, light enough to count as light armor: maximum Dexterity bonus +4, armor check penalty -2, arcane spell failure chance 20%, weight 20 pounds.",
    "source": ARMOR_SRC,
    "sourceUrl": ARMOR_URL,
    "ruleset": "core"
  },
  {
    "id": "adamantine-breastplate",
    "name": "Adamantine Breastplate",
    "category": "armor",
    "cost": "10,200 gp",
    "summary": "Nonmagical breastplate made of adamantine, granting its wearer damage reduction 2/-.",
    "source": ARMOR_SRC,
    "sourceUrl": ARMOR_URL,
    "ruleset": "core"
  },
  {
    "id": "dwarven-plate",
    "name": "Dwarven Plate",
    "category": "armor",
    "cost": "16,500 gp",
    "summary": "Nonmagical full plate made of adamantine, granting its wearer damage reduction 3/-.",
    "source": ARMOR_SRC,
    "sourceUrl": ARMOR_URL,
    "ruleset": "core"
  },
  {
    "id": "demon-armor",
    "name": "Demon Armor",
    "category": "armor",
    "cost": "52,260 gp",
    "summary": "A +4 full plate fashioned to make the wearer look like a horned demon, with claws built into the gauntlets that strike as +1 weapons for 1d10 damage and afflict the target as a contagion spell (Fortitude DC 14 negates). It bestows one negative level on any nonevil creature wearing it.",
    "source": ARMOR_SRC,
    "sourceUrl": ARMOR_URL,
    "ruleset": "core"
  },
  {
    "id": "darkwood-buckler",
    "name": "Darkwood Buckler",
    "category": "shield",
    "cost": "205 gp",
    "summary": "A nonmagical light wooden shield made of darkwood. It has no armor check penalty and weighs just 2.5 pounds.",
    "source": SHIELD_SRC,
    "sourceUrl": ARMOR_URL,
    "ruleset": "core"
  },
  {
    "id": "mithral-heavy-shield",
    "name": "Mithral Heavy Shield",
    "category": "shield",
    "cost": "1,020 gp",
    "summary": "A nonmagical heavy shield made of mithral, much lighter than steel: no armor check penalty, arcane spell failure chance 5%, weight 5 pounds.",
    "source": SHIELD_SRC,
    "sourceUrl": ARMOR_URL,
    "ruleset": "core"
  }
];

export const DMG_AMMUNITION: MagicItemDefinition[] = [
  {
    "id": "arrows-1-50",
    "name": "Arrows +1 (50)",
    "category": "ammunition",
    "cost": "2,302 gp 5 sp",
    "summary": "A bundle of 50 masterwork arrows with a +1 enhancement bonus on attack and damage rolls; the bonus does not stack with the firing weapon's enhancement bonus.",
    "source": AMMO_SRC,
    "sourceUrl": AMMO_URL,
    "ruleset": "core"
  },
  {
    "id": "arrows-2-50",
    "name": "Arrows +2 (50)",
    "category": "ammunition",
    "cost": "8,302 gp 5 sp",
    "summary": "A bundle of 50 masterwork arrows with a +2 enhancement bonus on attack and damage rolls; the bonus does not stack with the firing weapon's enhancement bonus.",
    "source": AMMO_SRC,
    "sourceUrl": AMMO_URL,
    "ruleset": "core"
  },
  {
    "id": "arrows-3-50",
    "name": "Arrows +3 (50)",
    "category": "ammunition",
    "cost": "18,302 gp 5 sp",
    "summary": "A bundle of 50 masterwork arrows with a +3 enhancement bonus on attack and damage rolls; the bonus does not stack with the firing weapon's enhancement bonus.",
    "source": AMMO_SRC,
    "sourceUrl": AMMO_URL,
    "ruleset": "core"
  },
  {
    "id": "arrows-4-50",
    "name": "Arrows +4 (50)",
    "category": "ammunition",
    "cost": "32,302 gp 5 sp",
    "summary": "A bundle of 50 masterwork arrows with a +4 enhancement bonus on attack and damage rolls; the bonus does not stack with the firing weapon's enhancement bonus.",
    "source": AMMO_SRC,
    "sourceUrl": AMMO_URL,
    "ruleset": "core"
  },
  {
    "id": "arrows-5-50",
    "name": "Arrows +5 (50)",
    "category": "ammunition",
    "cost": "50,302 gp 5 sp",
    "summary": "A bundle of 50 masterwork arrows with a +5 enhancement bonus on attack and damage rolls; the bonus does not stack with the firing weapon's enhancement bonus.",
    "source": AMMO_SRC,
    "sourceUrl": AMMO_URL,
    "ruleset": "core"
  },
  {
    "id": "crossbow-bolts-1-50",
    "name": "Crossbow Bolts +1 (50)",
    "category": "ammunition",
    "cost": "2,305 gp",
    "summary": "A bundle of 50 masterwork crossbow bolts with a +1 enhancement bonus on attack and damage rolls; the bonus does not stack with the firing weapon's enhancement bonus.",
    "source": AMMO_SRC,
    "sourceUrl": AMMO_URL,
    "ruleset": "core"
  },
  {
    "id": "crossbow-bolts-2-50",
    "name": "Crossbow Bolts +2 (50)",
    "category": "ammunition",
    "cost": "8,305 gp",
    "summary": "A bundle of 50 masterwork crossbow bolts with a +2 enhancement bonus on attack and damage rolls; the bonus does not stack with the firing weapon's enhancement bonus.",
    "source": AMMO_SRC,
    "sourceUrl": AMMO_URL,
    "ruleset": "core"
  },
  {
    "id": "crossbow-bolts-3-50",
    "name": "Crossbow Bolts +3 (50)",
    "category": "ammunition",
    "cost": "18,305 gp",
    "summary": "A bundle of 50 masterwork crossbow bolts with a +3 enhancement bonus on attack and damage rolls; the bonus does not stack with the firing weapon's enhancement bonus.",
    "source": AMMO_SRC,
    "sourceUrl": AMMO_URL,
    "ruleset": "core"
  },
  {
    "id": "crossbow-bolts-4-50",
    "name": "Crossbow Bolts +4 (50)",
    "category": "ammunition",
    "cost": "32,305 gp",
    "summary": "A bundle of 50 masterwork crossbow bolts with a +4 enhancement bonus on attack and damage rolls; the bonus does not stack with the firing weapon's enhancement bonus.",
    "source": AMMO_SRC,
    "sourceUrl": AMMO_URL,
    "ruleset": "core"
  },
  {
    "id": "crossbow-bolts-5-50",
    "name": "Crossbow Bolts +5 (50)",
    "category": "ammunition",
    "cost": "50,305 gp",
    "summary": "A bundle of 50 masterwork crossbow bolts with a +5 enhancement bonus on attack and damage rolls; the bonus does not stack with the firing weapon's enhancement bonus.",
    "source": AMMO_SRC,
    "sourceUrl": AMMO_URL,
    "ruleset": "core"
  },
  {
    "id": "sling-bullets-1-50",
    "name": "Sling Bullets +1 (50)",
    "category": "ammunition",
    "cost": "2,300 gp 5 sp",
    "summary": "A bundle of 50 masterwork sling bullets with a +1 enhancement bonus on attack and damage rolls; the bonus does not stack with the firing weapon's enhancement bonus.",
    "source": AMMO_SRC,
    "sourceUrl": AMMO_URL,
    "ruleset": "core"
  },
  {
    "id": "sling-bullets-2-50",
    "name": "Sling Bullets +2 (50)",
    "category": "ammunition",
    "cost": "8,300 gp 5 sp",
    "summary": "A bundle of 50 masterwork sling bullets with a +2 enhancement bonus on attack and damage rolls; the bonus does not stack with the firing weapon's enhancement bonus.",
    "source": AMMO_SRC,
    "sourceUrl": AMMO_URL,
    "ruleset": "core"
  },
  {
    "id": "sling-bullets-3-50",
    "name": "Sling Bullets +3 (50)",
    "category": "ammunition",
    "cost": "18,300 gp 5 sp",
    "summary": "A bundle of 50 masterwork sling bullets with a +3 enhancement bonus on attack and damage rolls; the bonus does not stack with the firing weapon's enhancement bonus.",
    "source": AMMO_SRC,
    "sourceUrl": AMMO_URL,
    "ruleset": "core"
  },
  {
    "id": "sling-bullets-4-50",
    "name": "Sling Bullets +4 (50)",
    "category": "ammunition",
    "cost": "32,300 gp 5 sp",
    "summary": "A bundle of 50 masterwork sling bullets with a +4 enhancement bonus on attack and damage rolls; the bonus does not stack with the firing weapon's enhancement bonus.",
    "source": AMMO_SRC,
    "sourceUrl": AMMO_URL,
    "ruleset": "core"
  },
  {
    "id": "sling-bullets-5-50",
    "name": "Sling Bullets +5 (50)",
    "category": "ammunition",
    "cost": "50,300 gp 5 sp",
    "summary": "A bundle of 50 masterwork sling bullets with a +5 enhancement bonus on attack and damage rolls; the bonus does not stack with the firing weapon's enhancement bonus.",
    "source": AMMO_SRC,
    "sourceUrl": AMMO_URL,
    "ruleset": "core"
  }
];
