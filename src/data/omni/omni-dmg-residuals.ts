/**
 * Omni sweep Wave 3 (2026-11-02): DMG residual gap fill.
 *
 * The fan-index cross-check (~/workspace/omni-sweep/reports/
 * index-crosscheck.md §3.1) found that the DMG's own weapon/armor
 * special abilities and its cursed items were never built as
 * standalone records — the catalog's DMG coverage came from the SRD
 * wondrous/specific-item packs and from MIC reprints filed under
 * "… Special Ability" names. This pack builds the missing records
 * from the d20 SRD (the same source as the catalog's other SRD
 * packs): 45 special abilities (19 weapon, 22 armor, 4 shield),
 * the 11 cursed items the cross-check lists, plus the "other
 * individual items" it flags that the SRD carries: Armor of Rage
 * (printed in the SRD's cursed items, not its specific armors),
 * Staff of Life, Staff of Passage, and Staff of Size Alteration
 * (the catalog previously held only the MIC runestaffs of the
 * latter two names).
 *
 * Judgment calls:
 * - The index's "Reflection" is built under the SRD's printed
 *   name, "Reflecting".
 * - The index's "Fire Resistance, Greate" is its own truncation
 *   duplicate of "Fire Resistance, Greater" (cross-check note),
 *   so the 46 listed ability lines are 45 unique abilities.
 * - The base "Shadow" ability is not listed as missing because
 *   the catalog already holds it as "Shadow Armor Special
 *   Ability"; only its Improved and Greater tiers were absent.
 * - Bag of Devouring and Crystal Hypnosis Ball take the SRD
 *   table's "—" price (their descriptions say "Price n/a").
 * - NOT built: "Mantle of Energy Resistance" — the SRD carries
 *   no such item (its only mantles are Mantle of Faith and
 *   Mantle of Spell Resistance, the latter already cataloged);
 *   the index entry appears to be a fan-index error.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

const WEAPON_ABILITIES = "d20SRD — Magic Items: Weapon Special Abilities";
const WEAPON_ABILITIES_URL = "https://www.d20srd.org/srd/magicItems/magicWeapons.htm";
const ARMOR_ABILITIES = "d20SRD — Magic Items: Armor and Shield Special Abilities";
const ARMOR_ABILITIES_URL = "https://www.d20srd.org/srd/magicItems/magicArmor.htm";
const CURSED = "d20SRD — Magic Items: Cursed Items";
const CURSED_URL = "https://www.d20srd.org/srd/magicItems/cursedItems.htm";
const STAFFS = "d20SRD — Magic Items: Staffs";
const STAFFS_URL = "https://www.d20srd.org/srd/magicItems/staffs.htm";

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

export const DMGR_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [
  ...build("weapon-special-ability", WEAPON_ABILITIES, WEAPON_ABILITIES_URL, [
    ["anarchic", "Anarchic", "+2 bonus", "Weapon ability: the weapon is chaos-aligned, deals an extra 2d6 points of damage against lawful creatures, and bestows one negative level on any lawful creature that wields it. Bows, crossbows, and slings pass the quality on to their ammunition."],
    ["axiomatic", "Axiomatic", "+2 bonus", "Weapon ability: the weapon is law-aligned, deals an extra 2d6 points of damage against chaotic creatures, and bestows one negative level on any chaotic creature that wields it. Bows, crossbows, and slings pass the quality on to their ammunition."],
    ["bane", "Bane", "+1 bonus", "Weapon ability: against one designated type or subtype of creature, the weapon's effective enhancement bonus is +2 higher than normal and it deals an extra 2d6 points of damage. Bows, crossbows, and slings pass the quality on to their ammunition."],
    ["brilliant-energy", "Brilliant Energy", "+4 bonus", "Weapon ability (melee weapons, thrown weapons, and ammunition only): the weapon's significant portion is transformed into light, so armor and shield bonuses to AC do not count against its attacks. It cannot harm undead, constructs, or objects."],
    ["disruption", "Disruption", "+2 bonus", "Weapon ability (bludgeoning weapons only): any undead creature struck in combat must succeed on a DC 14 Will save or be destroyed."],
    ["distance", "Distance", "+1 bonus", "Weapon ability (ranged weapons only): the weapon has double the normal range increment."],
    ["flaming-burst", "Flaming Burst", "+2 bonus", "Weapon ability: functions as a flaming weapon (+1d6 fire damage on a hit) and also bursts with flame on a critical hit, dealing an extra 1d10 points of fire damage (2d10 if the multiplier is ×3, 3d10 if ×4)."],
    ["frost", "Frost", "+1 bonus", "Weapon ability: on command the weapon is sheathed in icy cold, dealing an extra 1d6 points of cold damage on a successful hit until another command ends the effect. Bows, crossbows, and slings pass the cold on to their ammunition."],
    ["icy-burst", "Icy Burst", "+2 bonus", "Weapon ability: functions as a frost weapon (+1d6 cold damage on a hit) and also bursts with frost on a critical hit, dealing an extra 1d10 points of cold damage (2d10 if the multiplier is ×3, 3d10 if ×4)."],
    ["keen", "Keen", "+1 bonus", "Weapon ability (piercing or slashing weapons only): the weapon's threat range is doubled. This does not stack with any other effect that expands a weapon's threat range."],
    ["mighty-cleaving", "Mighty Cleaving", "+1 bonus", "Weapon ability: a wielder who has the Cleave feat can make one additional cleave attempt in a round."],
    ["returning", "Returning", "+1 bonus", "Weapon ability (thrown weapons only): after it is thrown, the weapon flies back through the air to the creature that threw it, returning just before that creature's next turn so it is ready to use again."],
    ["shock", "Shock", "+1 bonus", "Weapon ability: on command the weapon is sheathed in crackling electricity, dealing an extra 1d6 points of electricity damage on a successful hit until another command ends the effect. Bows, crossbows, and slings pass the electricity on to their ammunition."],
    ["shocking-burst", "Shocking Burst", "+2 bonus", "Weapon ability: functions as a shock weapon (+1d6 electricity damage on a hit) and also bursts with electricity on a critical hit, dealing an extra 1d10 points of electricity damage (2d10 if the multiplier is ×3, 3d10 if ×4)."],
    ["spell-storing", "Spell Storing", "+1 bonus", "Weapon ability: the weapon can store a single targeted spell of up to 3rd level with a casting time of 1 standard action. Whenever the weapon strikes a creature and damages it, the wielder can cast the stored spell on that creature as a free action."],
    ["throwing", "Throwing", "+1 bonus", "Weapon ability (melee weapons only): the weapon gains a range increment of 10 feet and can be thrown by a wielder who is proficient in its normal use."],
    ["thundering", "Thundering", "+1 bonus", "Weapon ability: on a critical hit the weapon roars like thunder, dealing an extra 1d8 points of sonic damage (2d8 if the multiplier is ×3, 3d8 if ×4), and the creature struck must make a DC 14 Fortitude save or be deafened permanently."],
    ["unholy", "Unholy", "+2 bonus", "Weapon ability: the weapon is evil-aligned, deals an extra 2d6 points of damage against good creatures, and bestows one negative level on any good creature that wields it. Bows, crossbows, and slings pass the quality on to their ammunition."],
    ["wounding", "Wounding", "+2 bonus", "Weapon ability: a hit deals 1 point of Constitution damage from blood loss, which a critical hit does not multiply. Creatures immune to critical hits are immune to this Constitution damage."],
  ]),
  ...build("armor-special-ability", ARMOR_ABILITIES, ARMOR_ABILITIES_URL, [
    ["cold-resistance", "Cold Resistance", "+18,000 gp", "Armor or shield ability: the armor absorbs the first 10 points of cold damage per attack that the wearer would normally take."],
    ["cold-resistance-improved", "Cold Resistance, Improved", "+42,000 gp", "Armor or shield ability: as cold resistance, except the armor absorbs the first 20 points of cold damage per attack."],
    ["cold-resistance-greater", "Cold Resistance, Greater", "+66,000 gp", "Armor or shield ability: as cold resistance, except the armor absorbs the first 30 points of cold damage per attack."],
    ["fire-resistance", "Fire Resistance", "+18,000 gp", "Armor or shield ability: the armor absorbs the first 10 points of fire damage per attack that the wearer would normally take."],
    ["fire-resistance-improved", "Fire Resistance, Improved", "+42,000 gp", "Armor or shield ability: as fire resistance, except the armor absorbs the first 20 points of fire damage per attack."],
    ["fire-resistance-greater", "Fire Resistance, Greater", "+66,000 gp", "Armor or shield ability: as fire resistance, except the armor absorbs the first 30 points of fire damage per attack."],
    ["glamered", "Glamered", "+2,700 gp", "Armor ability: on command, the armor changes shape and appearance to assume the form of a normal set of clothing, while retaining all of its properties, including weight. Only a true seeing spell or similar magic reveals the armor's true nature while it is disguised."],
    ["shadow-improved", "Shadow, Improved", "+15,000 gp", "Armor ability: the armor is jet black and blurs the wearer whenever she tries to hide, granting a +10 competence bonus on Hide checks. The armor's armor check penalty still applies normally."],
    ["shadow-greater", "Shadow, Greater", "+33,750 gp", "Armor ability: the armor is jet black and blurs the wearer whenever she tries to hide, granting a +15 competence bonus on Hide checks. The armor's armor check penalty still applies normally."],
    ["silent-moves", "Silent Moves", "+3,750 gp", "Armor ability: the armor is well oiled and magically constructed to make little sound and to dampen sound around it, granting its wearer a +5 competence bonus on Move Silently checks. The armor's armor check penalty still applies normally."],
    ["silent-moves-improved", "Silent Moves, Improved", "+15,000 gp", "Armor ability: as silent moves, except it grants a +10 competence bonus on Move Silently checks."],
    ["silent-moves-greater", "Silent Moves, Greater", "+33,750 gp", "Armor ability: as silent moves, except it grants a +15 competence bonus on Move Silently checks."],
    ["slick", "Slick", "+3,750 gp", "Armor ability: the armor seems coated at all times with a slightly greasy oil, granting its wearer a +5 competence bonus on Escape Artist checks. The armor's armor check penalty still applies normally."],
    ["slick-improved", "Slick, Improved", "+15,000 gp", "Armor ability: as slick, except it grants a +10 competence bonus on Escape Artist checks."],
    ["slick-greater", "Slick, Greater", "+33,750 gp", "Armor ability: as slick, except it grants a +15 competence bonus on Escape Artist checks."],
    ["sonic-resistance", "Sonic Resistance", "+18,000 gp", "Armor or shield ability: the armor absorbs the first 10 points of sonic damage per attack that the wearer would normally take."],
    ["sonic-resistance-improved", "Sonic Resistance, Improved", "+42,000 gp", "Armor or shield ability: as sonic resistance, except the armor absorbs the first 20 points of sonic damage per attack."],
    ["sonic-resistance-greater", "Sonic Resistance, Greater", "+66,000 gp", "Armor or shield ability: as sonic resistance, except the armor absorbs the first 30 points of sonic damage per attack."],
    ["spell-resistance-13", "Spell Resistance 13", "+2 bonus", "Armor or shield ability: the wearer of the armor (or bearer of the shield) gains spell resistance 13."],
    ["spell-resistance-15", "Spell Resistance 15", "+3 bonus", "Armor or shield ability: the wearer of the armor (or bearer of the shield) gains spell resistance 15."],
    ["spell-resistance-17", "Spell Resistance 17", "+4 bonus", "Armor or shield ability: the wearer of the armor (or bearer of the shield) gains spell resistance 17."],
    ["spell-resistance-19", "Spell Resistance 19", "+5 bonus", "Armor or shield ability: the wearer of the armor (or bearer of the shield) gains spell resistance 19."],
  ]),
  ...build("shield-special-ability", ARMOR_ABILITIES, ARMOR_ABILITIES_URL, [
    ["animated", "Animated", "+2 bonus", "Shield ability: on command, the shield floats within 2 feet of the wielder and protects her as if she were using it herself, leaving both of her hands free. Penalties for shield use, such as armor check penalty and arcane spell failure chance, still apply, and only one shield can protect a character at a time."],
    ["arrow-deflection", "Arrow Deflection", "+2 bonus", "Shield ability: once per round, when the wielder would normally be struck by a ranged weapon, he can make a DC 20 Reflex save to deflect it (the DC rises by the weapon's enhancement bonus). Exceptional ranged weapons, such as boulders hurled by giants, cannot be deflected."],
    ["bashing", "Bashing", "+1 bonus", "Shield ability (light and heavy shields only): the shield is designed for shield bashes and deals damage as if it were a weapon of two size categories larger, and it acts as a +1 weapon when used to bash."],
    ["reflecting", "Reflecting", "+5 bonus", "Shield ability: the shield's surface is completely reflective, like a mirror. Once per day, it can be called on to reflect a spell back at its caster, exactly as a spell turning effect."],
  ]),
  ...build("wondrous-throat", CURSED, CURSED_URL, [
    ["amulet-of-inescapable-location", "Amulet of Inescapable Location", "1,000 gp", "A cursed amulet that magical analysis identifies as an amulet of proof against detection and location. In truth, it gives the wearer a -10 penalty on all saving throws against divination spells."],
  ]),
  ...build("armor", CURSED, CURSED_URL, [
    ["armor-of-arrow-attraction", "Armor of Arrow Attraction", "9,000 gp", "A cursed suit that magical analysis identifies as +3 full plate and that defends normally against melee attacks, but that actually attracts ranged weapons: the wearer takes a -15 penalty to AC against any attack by a ranged weapon."],
    ["armor-of-rage", "Armor of Rage", "1,600 gp", "A cursed suit similar in appearance to armor of command that functions as +1 full plate. Wearing it imposes a -4 penalty to the wearer's Charisma, and all unfriendly characters within 300 feet gain a +1 morale bonus on attack rolls against her; neither effect is noticeable to anyone involved."],
  ]),
  ...build("weapon", CURSED, CURSED_URL, [
    ["minus-2-sword-cursed", "-2 Sword, Cursed", "1,500 gp", "A cursed longsword that performs well against targets in practice, but in real combat imposes a -2 penalty on its wielder's attack rolls and reduces all damage it deals by 2 points (minimum 1). After a week in a character's possession, the sword compels her to draw and fight with it rather than any other weapon, and it can be gotten rid of only by limited wish, wish, or miracle."],
  ]),
  ...build("wondrous-feet", CURSED, CURSED_URL, [
    ["boots-of-dancing", "Boots of Dancing", "30,000 gp", "These boots initially appear and function as some other kind of magic boots, but when the wearer is in (or fleeing from) melee combat they impede his movement and make him behave as if irresistible dance had been cast upon him. Once their true nature is revealed, only a remove curse spell lets the wearer be rid of them."],
  ]),
  ...build("wondrous-arms", CURSED, CURSED_URL, [
    ["bracers-of-defenselessness", "Bracers of Defenselessness", "1,200 gp", "These bracers appear to be, and function as, bracers of armor +5 until the wearer is attacked in anger by an enemy with a Challenge Rating equal to or greater than her level. From that moment on they impose a -5 penalty to AC, and they can be removed only by means of a remove curse spell."],
  ]),
  ...build("wondrous-shoulders", CURSED, CURSED_URL, [
    ["cloak-of-poisonousness", "Cloak of Poisonousness", "62,000 gp", "A cloak with poison impregnated in its fabric; it can be handled without harm, but as soon as it is actually donned the wearer is killed instantly unless she succeeds on a DC 28 Fortitude save. Once donned, it can be removed only with a remove curse spell, which destroys the cloak's magic."],
  ]),
  ...build("wondrous-slotless", CURSED, CURSED_URL, [
    ["bag-of-devouring", "Bag of Devouring", "—", "A cursed sack that appears to be a bag of holding but is actually a feeding orifice of an extradimensional creature. Matter placed inside may be swallowed and lost to some other plane, and when the bag senses living flesh reaching within, it can close around the limb, grapple the victim, and draw the whole creature in to be consumed."],
    ["broom-of-animated-attack", "Broom of Animated Attack", "5,200 gp", "A cursed broom that tests as a broom of flying in every way short of attempted use. When a command is spoken, it does a loop-the-loop that dumps its hopeful rider, then attacks him — swatting his face with its straw end (blinding for 1 round) and beating him with its handle (1d6 damage), making four attacks per round at a +5 bonus."],
    ["crystal-hypnosis-ball", "Crystal Hypnosis Ball", "—", "A cursed scrying device indistinguishable from a normal crystal ball. Anyone who tries to use it becomes fascinated for 1d6 minutes while a telepathic suggestion is implanted in his mind (Will DC 19 negates), bringing the gazer ever deeper under the influence of an unseen controller while he believes he saw the scene he sought."],
    ["dust-of-sneezing-and-choking", "Dust of Sneezing and Choking", "2,400 gp", "A cursed dust that appears to be dust of appearance. Cast into the air, it makes everyone within a 20-foot spread fall into sneezing and coughing fits: those who fail a DC 15 Fortitude save take 2d6 points of Constitution damage (and 1d6 more a minute later on a second failed save), while even those who succeed are choked and disabled (as if stunned) for 5d4 rounds."],
    ["flask-of-curses", "Flask of Curses", "2,100 gp", "A cursed container that looks like an ordinary flask, bottle, jug, or similar vessel. When it is first unstoppered, all creatures within 30 feet must make a DC 17 Will save or be cursed, taking a -2 penalty on attack rolls, saving throws, and skill checks until a remove curse spell is cast upon them."],
  ]),
  ...build("staff", STAFFS, STAFFS_URL, [
    ["staff-of-life", "Staff of Life", "155,750 gp", "A staff of thick oak shod in gold. It allows the use of heal (1 charge) and resurrection (5 charges)."],
    ["staff-of-passage", "Staff of Passage", "170,500 gp", "A potent staff that allows the use of dimension door (1 charge), passwall (1 charge), phase door (2 charges), greater teleport (2 charges), and astral projection (2 charges)."],
    ["staff-of-size-alteration", "Staff of Size Alteration", "29,000 gp", "A stout, sturdy staff of dark wood. It allows the use of enlarge person, reduce person, shrink item, mass enlarge person, and mass reduce person (1 charge each)."],
  ]),
];

export const DMGR_EQUIPMENT_OMNI: EquipmentItem[] = [];
