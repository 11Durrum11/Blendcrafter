/**
 * Omni sweep wave 2 (2026-11-02): Epic Level Handbook — Chapter 4:
 * Epic Magic Items (printed pp. 123-155), read in full. The catalog
 * had essentially nothing from this chapter (one nonepic sidebar
 * ring), so this pack builds the whole chapter: 11 epic armor and
 * shield special abilities, 7 specific armors and shields, 15 epic
 * weapon special abilities, 12 specific weapons, 27 epic rings
 * (including the Ring of Epic Psionics sidebar series), 25 epic
 * rods (including all ten wyrm rods), 13 epic staffs, and 41 epic
 * wondrous items — the bonus-ladder wondrous items and rings are
 * built as one record per printed table row, matching how the
 * book's random tables enumerate them. Internal book conflicts
 * (table vs. item description) were resolved in favor of the item
 * description and are flagged in the omni-sweep report: bulwark of
 * the great dragon (1,612,980 table vs. 1,612,970 description),
 * unholy despoiler (4,620,315 vs. 4,650,315), epic spellcaster
 * (245,000 vs. 245,400), epic splendor (297,000 vs. 297,400), and
 * staff of the cosmos (683,487 vs. 683,437). Not built: epic
 * scrolls — the chapter prices them only as a generation formula
 * by spell level, with no discrete items described. The book has
 * no mundane equipment chapter, so the equipment array is empty.
 * Prices are the printed market prices; summaries are mechanical
 * effects in our own words.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const ELH_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [
  {
    "id": "acid-warding-epic",
    "name": "Acid Warding (epic armor/shield ability)",
    "category": "armor-special-ability",
    "cost": "+6 bonus",
    "summary": "Epic armor or shield special ability: the armor absorbs the first 50 points of acid damage per round that the wearer would normally take, similar to the resist elements spell.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, pp. 126–127",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "cold-warding-epic",
    "name": "Cold Warding (epic armor/shield ability)",
    "category": "armor-special-ability",
    "cost": "+6 bonus",
    "summary": "Epic armor or shield special ability: the armor absorbs the first 50 points of cold damage per round that the wearer would normally take, similar to the resist elements spell.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, pp. 126–127",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "fire-warding-epic",
    "name": "Fire Warding (epic armor/shield ability)",
    "category": "armor-special-ability",
    "cost": "+6 bonus",
    "summary": "Epic armor or shield special ability: the armor absorbs the first 50 points of fire damage per round that the wearer would normally take, similar to the resist elements spell.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, pp. 126–127",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "lightning-warding-epic",
    "name": "Lightning Warding (epic armor/shield ability)",
    "category": "armor-special-ability",
    "cost": "+6 bonus",
    "summary": "Epic armor or shield special ability: the armor absorbs the first 50 points of lightning damage per round that the wearer would normally take, similar to the resist elements spell.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, pp. 126–127",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sonic-warding-epic",
    "name": "Sonic Warding (epic armor/shield ability)",
    "category": "armor-special-ability",
    "cost": "+6 bonus",
    "summary": "Epic armor or shield special ability: the armor absorbs the first 50 points of sonic damage per round that the wearer would normally take, similar to the resist elements spell.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, pp. 126–127",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "great-invulnerability-epic",
    "name": "Great Invulnerability (epic armor/shield ability)",
    "category": "armor-special-ability",
    "cost": "+4 bonus (10/+2); +5 bonus (15/+3); +6 bonus (20/+4); +7 bonus (25/+5)",
    "summary": "Epic armor or shield special ability: grants the wearer damage reduction of 10/+2, 15/+3, 20/+4, or 25/+5, depending on the version of the ability placed on the armor.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, pp. 126–127",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "great-spell-resistance-epic",
    "name": "Great Spell Resistance (epic armor/shield ability)",
    "category": "armor-special-ability",
    "cost": "+6 bonus (SR 21); +7 bonus (SR 23); +8 bonus (SR 25); +9 bonus (SR 27)",
    "summary": "Epic armor or shield special ability: grants the wearer spell resistance of 21, 23, 25, or 27, depending on the version of the ability placed on the armor.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, pp. 126–127",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "negating-epic",
    "name": "Negating (epic armor ability)",
    "category": "armor-special-ability",
    "cost": "+5 bonus",
    "summary": "Epic armor special ability: immediately after the wearer is hit with a magic weapon, the armor casts greater dispelling on that weapon (or on the weapon that fired a projectile, if it is in range). No weapon can be affected by the armor more than once per day.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 128",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "exceptional-arrow-deflection-epic",
    "name": "Exceptional Arrow Deflection (epic shield ability)",
    "category": "shield-special-ability",
    "cost": "+8 bonus",
    "summary": "Epic shield special ability: works like a shield of arrow deflection, except it can deflect any type of ranged attack, including spells that require a ranged touch attack, on a successful Reflex save (DC 20, increased by the attack's enhancement bonus or spell level). The bearer must be aware of the attack and not flat-footed.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, pp. 126–127",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "infinite-arrow-deflection-epic",
    "name": "Infinite Arrow Deflection (epic shield ability)",
    "category": "shield-special-ability",
    "cost": "+6 bonus",
    "summary": "Epic shield special ability: works like a shield of arrow deflection, except it can deflect any number of projectiles or thrown weapons each round, on a successful Reflex save (DC 20, increased by the weapon's enhancement bonus). The bearer must be aware of the attack and not flat-footed.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 127",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "great-reflection-epic",
    "name": "Great Reflection (epic shield ability)",
    "category": "shield-special-ability",
    "cost": "+10 bonus",
    "summary": "Epic shield special ability: this mirrorlike shield automatically reflects any spell targeted at its bearer back at the caster, as the spell turning spell. The wearer can lower or raise the effect as a free action to let beneficial spells through.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 127",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "shapeshifters-armor",
    "name": "Shapeshifter's Armor",
    "category": "armor",
    "cost": "400,165 gp",
    "summary": "A suit of +6 hide armor that grants its full Armor Class bonus regardless of any form the wearer takes, whether by polymorph self, shapechange, wild shape, or similar abilities.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 129",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "warlords-breastplate",
    "name": "Warlord's Breastplate",
    "category": "armor",
    "cost": "416,200 gp",
    "summary": "A +6 mithral breastplate treated as light armor (maximum Dexterity bonus +5, armor check penalty –1, 10% arcane spell failure, 15 lb.). It grants the wearer a +4 enhancement bonus to Charisma and lets her attract and lead followers as if she had the Leadership feat, though it grants no cohort and does not stack with the feat.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 129",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dragonskin-armor",
    "name": "Dragonskin Armor",
    "category": "armor",
    "cost": "564,550 gp",
    "summary": "A suit of +5 full plate crafted from the hide of a great wyrm dragon. On command it sprouts dragon wings that let the wearer fly at 90 feet (clumsy) for up to 4 hours per day, and it grants immunity to one energy type matching the dragon's color. The wearer takes a –4 penalty on Diplomacy checks with dragons but gains a +4 bonus on Intimidate checks against them.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 129",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "armor-of-the-celestial-battalion",
    "name": "Armor of the Celestial Battalion",
    "category": "armor",
    "cost": "616,300 gp",
    "summary": "A suit of +7 chainmail so fine it can be worn under normal clothing: maximum Dexterity bonus +10, no armor check penalty, 10% arcane spell failure, and treated as light armor. The wearer can fly at will (as the fly spell) and is at all times surrounded by a magic circle against evil effect, which can be recreated as a free action if dispelled.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 128",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "armor-of-the-abyssal-horde",
    "name": "Armor of the Abyssal Horde",
    "category": "armor",
    "cost": "768,260 gp",
    "summary": "A crimson and black suit of +6 full plate fashioned to make the wearer look demonic, its helmet a horned demon head viewed through a tooth-filled mouth. Its clawed gauntlets function as +4 keen weapons (1d10/19–20) that also afflict the target as if struck by an energy drain spell (Fortitude DC 23 negates). The armor bestows two negative levels on any nonevil creature wearing it.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 128",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "antimagic-armor",
    "name": "Antimagic Armor",
    "category": "armor",
    "cost": "871,500 gp",
    "summary": "A suit of +1 negating full plate armor of invulnerability crafted of adamantine (granting a +3 natural enhancement bonus of its own). The armor imposes a –5 penalty on dispel checks made against it or its wearer.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 128",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bulwark-of-the-great-dragon",
    "name": "Bulwark of the Great Dragon",
    "category": "shield",
    "cost": "1,612,970 gp",
    "summary": "A +6 large shield made from the scales of a great wyrm dragon, bearing a graven dragon's head. Three times per day the bearer can command it to belch a breath weapon of the dragon's type (80-foot line or 40-foot cone) dealing 20d6 points of damage, and the shield grants resistance 50 to the energy type matching that breath weapon.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 129",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "acidic-blast-epic",
    "name": "Acidic Blast (epic weapon ability)",
    "category": "weapon-special-ability",
    "cost": "+6 bonus",
    "summary": "Epic weapon special ability: on command the weapon drips potent acid; on any hit the acid splashes the creature struck for +3d6 points of bonus acid damage, or +6d6 on a critical hit (+9d6 if the multiplier is ×3, +12d6 if ×4). Bows, crossbows, and slings bestow the damage on their ammunition.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 130",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "fiery-blast-epic",
    "name": "Fiery Blast (epic weapon ability)",
    "category": "weapon-special-ability",
    "cost": "+6 bonus",
    "summary": "Epic weapon special ability: on command the weapon is sheathed in fire; on any hit the fire engulfs the creature struck for +3d6 points of bonus fire damage, or +6d6 on a critical hit (+9d6 if the multiplier is ×3, +12d6 if ×4). Bows, crossbows, and slings bestow the damage on their ammunition.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 131",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "icy-blast-epic",
    "name": "Icy Blast (epic weapon ability)",
    "category": "weapon-special-ability",
    "cost": "+6 bonus",
    "summary": "Epic weapon special ability: on command the weapon is sheathed in icy cold; on any hit the cold washes over the creature struck for +3d6 points of bonus cold damage, or +6d6 on a critical hit (+9d6 if the multiplier is ×3, +12d6 if ×4). Bows, crossbows, and slings bestow the damage on their ammunition.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 132",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "lightning-blast-epic",
    "name": "Lightning Blast (epic weapon ability)",
    "category": "weapon-special-ability",
    "cost": "+6 bonus",
    "summary": "Epic weapon special ability: on command the weapon crackles with electrical energy; on any hit, lightning coruscates around the creature struck for +3d6 points of bonus electricity damage, or +6d6 on a critical hit (+9d6 if the multiplier is ×3, +12d6 if ×4). Bows, crossbows, and slings bestow the damage on their ammunition.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 132",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sonic-blast-epic",
    "name": "Sonic Blast (epic weapon ability)",
    "category": "weapon-special-ability",
    "cost": "+6 bonus",
    "summary": "Epic weapon special ability: on command the weapon emits a low thrumming hum that becomes a thunderous roar on any hit, dealing +3d6 points of bonus sonic damage, or +6d6 on a critical hit (+9d6 if the multiplier is ×3, +12d6 if ×4). Bows, crossbows, and slings bestow the damage on their ammunition.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 133",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "chaotic-power-epic",
    "name": "Chaotic Power (epic weapon ability)",
    "category": "weapon-special-ability",
    "cost": "+8 bonus",
    "summary": "Epic weapon special ability: a chaotically aligned weapon that deals +3d6 points of bonus chaotic damage to lawful targets and bestows one negative level (two on a critical hit, scaling with the multiplier). It bestows three negative levels on any lawful creature attempting to wield it, and does not stack with the DMG's chaotic ability.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 131",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "holy-power-epic",
    "name": "Holy Power (epic weapon ability)",
    "category": "weapon-special-ability",
    "cost": "+8 bonus",
    "summary": "Epic weapon special ability: a good-aligned weapon that deals +3d6 points of bonus holy damage to evil targets and bestows one negative level (two on a critical hit, scaling with the multiplier). It bestows three negative levels on any evil creature attempting to wield it, and does not stack with the DMG's holy ability.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 131",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "lawful-power-epic",
    "name": "Lawful Power (epic weapon ability)",
    "category": "weapon-special-ability",
    "cost": "+8 bonus",
    "summary": "Epic weapon special ability: a lawfully aligned weapon that deals +3d6 points of bonus lawful damage to chaotic targets and bestows one negative level (two on a critical hit, scaling with the multiplier). It bestows three negative levels on any chaotic creature attempting to wield it, and does not stack with the DMG's lawful ability.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 132",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "unholy-power-epic",
    "name": "Unholy Power (epic weapon ability)",
    "category": "weapon-special-ability",
    "cost": "+8 bonus",
    "summary": "Epic weapon special ability: an evilly aligned weapon that deals +3d6 points of bonus unholy damage to good targets and bestows one negative level (two on a critical hit, scaling with the multiplier). It bestows three negative levels on any good creature attempting to wield it, and does not stack with the DMG's unholy ability.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 133",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "dread-epic",
    "name": "Dread (epic weapon ability)",
    "category": "weapon-special-ability",
    "cost": "+7 bonus",
    "summary": "Epic weapon special ability: the weapon excels against one designated type of creature — against that foe its effective enhancement bonus is +4 better than normal and it deals +4d6 points of bonus damage, and on a critical hit the foe must succeed on a DC 27 Fortitude save or be destroyed instantly and turned to dust, even if immune to critical hits or death magic.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, pp. 131–132",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "everdancing-epic",
    "name": "Everdancing (epic weapon ability)",
    "category": "weapon-special-ability",
    "cost": "+8 bonus",
    "summary": "Epic weapon special ability: like a dancing weapon, but it can be loosed as a free action and fights on indefinitely up to 60 feet from its owner, who can redirect it to a new target as a move-equivalent action or grasp it again as a free action. If the owner is rendered unable to direct it, it keeps fighting the same opponent while that foe is conscious and in range.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 131",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "mighty-disruption-epic",
    "name": "Mighty Disruption (epic weapon ability)",
    "category": "weapon-special-ability",
    "cost": "+6 bonus",
    "summary": "Epic weapon special ability (bludgeoning weapons only): like a weapon of disruption, but any undead creature struck must succeed on a DC 21 Fortitude save or be destroyed.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 132",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "distant-shot-epic",
    "name": "Distant Shot (epic weapon ability)",
    "category": "weapon-special-ability",
    "cost": "+6 bonus",
    "summary": "Epic weapon special ability: a ranged weapon with this ability can be used against any target within line of sight at no penalty for range.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 131",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "triple-throw-epic",
    "name": "Triple-Throw (epic weapon ability)",
    "category": "weapon-special-ability",
    "cost": "+6 bonus",
    "summary": "Epic weapon special ability (thrown weapons only): when the weapon is thrown it creates two duplicates of itself, and the original and both duplicates attack separately at the same attack bonus before the duplicates disappear. Bonuses from accuracy or precision (sneak attack, favored enemy, and the like) apply only to the original weapon's damage.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 133",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "unerring-accuracy-epic",
    "name": "Unerring Accuracy (epic weapon ability)",
    "category": "weapon-special-ability",
    "cost": "+6 bonus",
    "summary": "Epic weapon special ability: the weapon negates any cover or concealment bonuses (short of total cover or total concealment) its target would otherwise enjoy.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 133",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "stormbrand",
    "name": "Stormbrand",
    "category": "weapon",
    "cost": "235,350 gp",
    "summary": "A +4 thundering shocking burst greatsword that lets its wielder fly at will (as the fly spell) and move normally, even flying, in the strongest winds. When the weapon is drawn, the wielder gains electricity resistance 30 and sonic resistance 30.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 134",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "quarterstaff-of-alacrity",
    "name": "Quarterstaff of Alacrity",
    "category": "weapon",
    "cost": "462,600 gp",
    "summary": "A +5 quarterstaff of speed whose ends have equal enhancement and powers, allowing an additional attack with each end every round. While held, it grants the wielder a +5 resistance bonus on Reflex saves and deflects ranged weapons as if the wielder had the Deflect Arrows and Infinite Deflection feats.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 134",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "souldrinker",
    "name": "Souldrinker",
    "category": "weapon",
    "cost": "478,335 gp",
    "summary": "A +5 bastard sword that bestows 2d4 negative levels on its target whenever it deals damage, as the energy drain spell; each negative level grants the wielder 5 temporary hit points (10 more if the victim is slain outright by the drain), lasting up to 1 hour. One day after being struck, the subject must make a DC 25 Fortitude save for each negative level or lose a level.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 134",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "backstabber",
    "name": "Backstabber",
    "category": "weapon",
    "cost": "770,310 gp",
    "summary": "A +6 short sword that adds +2d6 to the wielder's sneak attack damage. It does not grant the sneak attack ability to a wielder who lacks it.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 133",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "mace-of-ruin",
    "name": "Mace of Ruin",
    "category": "weapon",
    "cost": "1,000,312 gp",
    "summary": "A +7 heavy mace that ignores the hardness or damage reduction of any object or creature it strikes. It can also deal critical hits to objects and constructs as if they were living creatures.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 134",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "gripsoul",
    "name": "Gripsoul",
    "category": "weapon",
    "cost": "1,856,500 gp",
    "summary": "A +6 keen longsword enruned with green sigils and set with a jet-black pearl. Instead of dealing extra damage on a critical hit — or on any blow that would kill or knock out a foe — it imprisons the victim in the gem set in its pommel, as a binding spell heightened to 16th level (DC 30). Only one creature can be held at a time, and the wielder can release the bound soul with a command word.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 134",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "elven-greatbow",
    "name": "Elven Greatbow",
    "category": "weapon",
    "cost": "2,900,400 gp",
    "summary": "In the hands of a nonelf this bow performs only as a +2 composite longbow; in an elf's hands it functions as a +5 mighty composite longbow of unerring accuracy whose pull always matches its wielder's current Strength. Any arrows loosed from it are considered keen, regardless of the arrows' own enhancement bonus.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 134",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "finaldeath",
    "name": "Finaldeath",
    "category": "weapon",
    "cost": "3,580,308 gp",
    "summary": "A +5 undead dread ghost touch morningstar that also grants its wielder immunity to energy drain attacks. If the wielder is capable of turning undead, he gains the Positive Energy Aura feat while wielding it.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 134",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "chaosbringer",
    "name": "Chaosbringer",
    "category": "weapon",
    "cost": "4,025,350 gp",
    "summary": "A +6 greataxe of chaotic power that lets its wielder fly into a rage (as a barbarian's rage) once per day, or one additional time per day if the wielder already has the rage class feature. A wielder with the greater rage class feature also gains the Incite Rage epic feat.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 134",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "holy-devastator",
    "name": "Holy Devastator",
    "category": "weapon",
    "cost": "4,620,315 gp",
    "summary": "In the hands of anyone other than a paladin, this sword performs as a +3 holy longsword. In a paladin's hands it functions as a +7 longsword of holy power and grants a +5 sacred bonus on saving throws against spells with the evil descriptor or cast by evil characters, and her smite evil attacks add twice her paladin level to damage.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 134",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "unholy-despoiler",
    "name": "Unholy Despoiler",
    "category": "weapon",
    "cost": "4,650,315 gp",
    "summary": "In the hands of anyone other than a blackguard, this sword performs as a +3 unholy longsword. In a blackguard's hands it functions as a +7 longsword of unholy power and grants a +5 profane bonus on saving throws against spells with the good descriptor or cast by good characters, and her smite good attacks add twice her blackguard level to damage.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 135",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "everwhirling-chain",
    "name": "Everwhirling Chain",
    "category": "weapon",
    "cost": "5,220,325 gp",
    "summary": "A +4 defending everdancing spiked chain of speed that twitches in its wielder's hands as if eager to attack or defend on its own. Its wielder can make any number of attacks of opportunity per round, as if he had the Improved Combat Reflexes feat.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 134",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ring-of-universal-elemental-resistance-major",
    "name": "Universal Elemental Resistance, Major",
    "category": "ring",
    "cost": "216,000 gp",
    "summary": "This ring functions as a ring of major elemental resistance for all types of energy — fire, cold, electricity, acid, and sonic — subtracting 30 points of damage per round from each such energy before it is applied to the wearer.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 136",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "elemental-immunity-ring",
    "name": "Elemental Immunity",
    "category": "ring",
    "cost": "240,000 gp",
    "summary": "A plain adamantine band that continually provides the wearer with immunity to a single type of energy — fire, cold, electricity, acid, or sonic (chosen at creation). The wearer takes no damage from energy of that type.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 135",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "adamant-law",
    "name": "Adamant Law",
    "category": "ring",
    "cost": "250,000 gp",
    "summary": "The wearer of this blue-black ring is constantly sheathed in a shield of law effect. It bestows one negative level on any chaotic creature that puts it on, which remains while the ring is worn and never results in actual level loss.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 135",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "chaotic-fury",
    "name": "Chaotic Fury",
    "category": "ring",
    "cost": "250,000 gp",
    "summary": "The wearer of this jagged metal ring is constantly sheathed in a cloak of chaos effect. It bestows one negative level on any lawful creature that puts it on, which remains while the ring is worn and never results in actual level loss.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 135",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ineffable-evil",
    "name": "Ineffable Evil",
    "category": "ring",
    "cost": "250,000 gp",
    "summary": "The wearer of this crimson ring is constantly sheathed in an unholy aura effect. It bestows one negative level on any good creature that puts it on, which remains while the ring is worn and never results in actual level loss.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 136",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "virtuous-good",
    "name": "Virtuous Good",
    "category": "ring",
    "cost": "250,000 gp",
    "summary": "The wearer of this pure golden ring is constantly sheathed in a holy aura effect. It bestows one negative level on any evil creature that puts it on, which remains while the ring is worn and never results in actual level loss.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 136",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ring-of-rapid-healing",
    "name": "Rapid Healing",
    "category": "ring",
    "cost": "300,000 gp",
    "summary": "This ring of bone grants a living wearer fast healing 3. It must be worn for 24 hours before its powers activate, and if removed it will not function again until it has been worn for 24 hours by the same individual.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 136",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ring-of-sequestering",
    "name": "Sequestering",
    "category": "ring",
    "cost": "300,000 gp",
    "summary": "This crystalline ring becomes invisible when worn. Upon command, the wearer gains the benefits of a sequester spell, though she does not become comatose as the spell normally causes.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 136",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ring-of-ironskin",
    "name": "Ironskin",
    "category": "ring",
    "cost": "400,000 gp",
    "summary": "A plain band of black iron that grants its wearer damage reduction 10/+5.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 136",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ring-of-weaponbreaking",
    "name": "Weaponbreaking",
    "category": "ring",
    "cost": "600,000 gp",
    "summary": "Identical to a ring of ironskin (damage reduction 10/+5), with one additional power: any weapon that successfully strikes the wearer must make a DC 20 Fortitude saving throw or be shattered into pieces.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 137",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ring-of-universal-elemental-immunity",
    "name": "Universal Elemental Immunity",
    "category": "ring",
    "cost": "2,160,000 gp",
    "summary": "A ring fashioned from four lengths of pure element that functions as a ring of elemental immunity for all types of energy — fire, cold, electricity, acid, and sonic. The wearer takes no damage from energy of any of these types.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 136",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ring-of-epic-protection-6",
    "name": "Epic Protection +6",
    "category": "ring",
    "cost": "720,000 gp",
    "summary": "An epic ring offering continual magical protection in the form of a +6 deflection bonus to Armor Class.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 136",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ring-of-epic-protection-7",
    "name": "Epic Protection +7",
    "category": "ring",
    "cost": "980,000 gp",
    "summary": "An epic ring offering continual magical protection in the form of a +7 deflection bonus to Armor Class.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 136",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ring-of-epic-protection-8",
    "name": "Epic Protection +8",
    "category": "ring",
    "cost": "1,280,000 gp",
    "summary": "An epic ring offering continual magical protection in the form of a +8 deflection bonus to Armor Class.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 136",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ring-of-epic-protection-9",
    "name": "Epic Protection +9",
    "category": "ring",
    "cost": "1,620,000 gp",
    "summary": "An epic ring offering continual magical protection in the form of a +9 deflection bonus to Armor Class.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 136",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ring-of-epic-protection-10",
    "name": "Epic Protection +10",
    "category": "ring",
    "cost": "2,000,000 gp",
    "summary": "An epic ring offering continual magical protection in the form of a +10 deflection bonus to Armor Class.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 136",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ring-of-epic-wizardry-v",
    "name": "Epic Wizardry V",
    "category": "ring",
    "cost": "250,000 gp",
    "summary": "Like a ring of wizardry, this epic ring doubles the wearer's arcane spells per day of one particular level — 5th level for this type. Bonus spells from high ability scores, school specialization, or any other source are not doubled.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 136",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ring-of-epic-wizardry-vi",
    "name": "Epic Wizardry VI",
    "category": "ring",
    "cost": "360,000 gp",
    "summary": "Like a ring of wizardry, this epic ring doubles the wearer's arcane spells per day of one particular level — 6th level for this type. Bonus spells from high ability scores, school specialization, or any other source are not doubled.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 136",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ring-of-epic-wizardry-vii",
    "name": "Epic Wizardry VII",
    "category": "ring",
    "cost": "490,000 gp",
    "summary": "Like a ring of wizardry, this epic ring doubles the wearer's arcane spells per day of one particular level — 7th level for this type. Bonus spells from high ability scores, school specialization, or any other source are not doubled.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 136",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ring-of-epic-wizardry-viii",
    "name": "Epic Wizardry VIII",
    "category": "ring",
    "cost": "640,000 gp",
    "summary": "Like a ring of wizardry, this epic ring doubles the wearer's arcane spells per day of one particular level — 8th level for this type. Bonus spells from high ability scores, school specialization, or any other source are not doubled.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 136",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ring-of-epic-wizardry-ix",
    "name": "Epic Wizardry IX",
    "category": "ring",
    "cost": "810,000 gp",
    "summary": "Like a ring of wizardry, this epic ring doubles the wearer's arcane spells per day of one particular level — 9th level for this type. Bonus spells from high ability scores, school specialization, or any other source are not doubled.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 136",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ring-of-epic-psionics-v",
    "name": "Ring of Epic Psionics V",
    "category": "ring",
    "cost": "250,000 gp",
    "summary": "A crystal ring useful only to psionic characters: while worn, it increases the wearer's power points per day by 43. The points are not stored in the ring — it magnifies the manifester's own reserve — and a night's rest is required before the wearer gains access to the increased total.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items (Epic Psionic Item sidebar), p. 135",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ring-of-epic-psionics-vi",
    "name": "Ring of Epic Psionics VI",
    "category": "ring",
    "cost": "360,000 gp",
    "summary": "A crystal ring useful only to psionic characters: while worn, it increases the wearer's power points per day by 63. The points are not stored in the ring — it magnifies the manifester's own reserve — and a night's rest is required before the wearer gains access to the increased total.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items (Epic Psionic Item sidebar), p. 135",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ring-of-epic-psionics-vii",
    "name": "Ring of Epic Psionics VII",
    "category": "ring",
    "cost": "490,000 gp",
    "summary": "A crystal ring useful only to psionic characters: while worn, it increases the wearer's power points per day by 87. The points are not stored in the ring — it magnifies the manifester's own reserve — and a night's rest is required before the wearer gains access to the increased total.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items (Epic Psionic Item sidebar), p. 135",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ring-of-epic-psionics-viii",
    "name": "Ring of Epic Psionics VIII",
    "category": "ring",
    "cost": "640,000 gp",
    "summary": "A crystal ring useful only to psionic characters: while worn, it increases the wearer's power points per day by 115. The points are not stored in the ring — it magnifies the manifester's own reserve — and a night's rest is required before the wearer gains access to the increased total.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items (Epic Psionic Item sidebar), p. 135",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "ring-of-epic-psionics-ix",
    "name": "Ring of Epic Psionics IX",
    "category": "ring",
    "cost": "810,000 gp",
    "summary": "A crystal ring useful only to psionic characters: while worn, it increases the wearer's power points per day by 147. The points are not stored in the ring — it magnifies the manifester's own reserve — and a night's rest is required before the wearer gains access to the increased total.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items (Epic Psionic Item sidebar), p. 135",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rod-of-epic-spellcaster",
    "name": "Epic Spellcaster",
    "category": "rod",
    "cost": "245,400 gp",
    "summary": "A magnificent adamantine rod that grants its wielder a +10 insight bonus on Spellcraft checks made to cast epic spells for as long as he holds or carries it.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 138",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rod-of-nightmares",
    "name": "Nightmares",
    "category": "rod",
    "cost": "284,000 gp",
    "summary": "An ebony rod in the form of a horrible, writhing figure with a skull-like head. Anyone who comes within 20 feet of the wielder feels a grave unease and must make a DC 17 Will save or suffer the effects of a nightmare spell the next time he falls asleep; the wielder is immune. Three times per day the wielder can speak a command word and make up to twenty of the closest creatures within 30 feet suffer a wail of the banshee effect (DC 23), as if their worst nightmares had become reality.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, pp. 138–139",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rod-of-epic-splendor",
    "name": "Epic Splendor",
    "category": "rod",
    "cost": "297,400 gp",
    "summary": "This rod grants its wielder a +8 enhancement bonus to Charisma while held or carried. Three times per day it garbs her in clothing of the finest fabrics with fur and jewel adornments worth 70,000 to 100,000 gp, lasting up to 24 hours, and once per week it can create a palatial mansion in any floor plan, housing up to 250 people for three days.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 138",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rod-of-the-path",
    "name": "The Path",
    "category": "rod",
    "cost": "306,870 gp",
    "summary": "A darkened oak shillelagh that aids trailblazing and travel: a +30 enhancement bonus on Wilderness Lore checks for tracking and on Intuit Direction checks, and a hollow telescoping handle that triples the range of vision (and shows things as if by true seeing). Three times per day it can unroll a map of the surrounding area (50-foot to 24-mile radius, revealing structures even if hidden) or let the wielder and up to five others move unhindered through plant growth or water; once per day it can create a stone causeway 5 feet wide and 40 feet long for 1 hour, or grant pass without trace to the wielder and twenty others for 21 minutes.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, pp. 139–140",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rod-of-epic-cancellation",
    "name": "Epic Cancellation",
    "category": "rod",
    "cost": "330,000 gp",
    "summary": "Like a rod of cancellation but more powerful: its touch drains an item of all magical properties, including the magic in epic items (but not most artifacts), with the item allowed a DC 26 Will save (or its holder's, if held). After draining three items the rod becomes brittle and useless; drained items can be restored only by wish, miracle, or purpose-built epic spells. It can neutralize a normal sphere of annihilation without itself being cancelled.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 138",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rod-of-epic-negation",
    "name": "Epic Negation",
    "category": "rod",
    "cost": "446,000 gp",
    "summary": "This rod negates the spell or spell-like functions of magic items, including epic items (but not artifacts): pointed at an item, its pale gray ray (a ranged touch attack) negates any currently active function and has a 75% chance to negate each other function for 2d4 rounds, with no saving throw or other resistance allowed. It functions three times per day.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 138",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rod-of-besiegement",
    "name": "Besiegement",
    "category": "rod",
    "cost": "447,745 gp",
    "summary": "A rod that functions as a +3 light mace, improving to +6 whenever the wielder makes a charge attack, and is built for besieging fortifications. Twice per day it creates a battering ram lasting 24 rounds that strikes once per round for 20 points of damage (fortifications only); three times per day it can generate siege engines (one heavy catapult, two light catapults, or three siege towers, with ammunition for 20 shots, lasting 12 hours) or cast transmute rock to mud (caster level 24th, DC 17).",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, pp. 136–137",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rod-of-fortification",
    "name": "Fortification",
    "category": "rod",
    "cost": "465,665 gp",
    "summary": "A rod that functions as a +3 light mace and aids the construction and defense of fortifications: while the wielder benefits from cover, the rod improves it to nine-tenths cover (+10 AC, +4 on Reflex saves). Three times per day it creates food and water for twenty-four people; four times per day it can raise a stone wall 12 inches thick, 10 feet high, and 30 feet long with parapet and battlements (or mend up to 300 square feet of broken wall), with a great iron door creatable once per day, and it can generate siege engines four times per day (one heavy catapult, two light catapults, or three ballistae, with ammunition for 20 shots).",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, pp. 138–140",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rod-of-epic-rulership",
    "name": "Epic Rulership",
    "category": "rod",
    "cost": "575,000 gp",
    "summary": "A royal scepter worth at least 25,000 gp in materials alone. When activated, it commands the obedience and fealty of creatures within 360 feet totaling up to 900 Hit Dice, who obey the wielder as their absolute sovereign; creatures with Intelligence 17 or higher may attempt a DC 29 Will save, and a command contrary to a creature's nature breaks the magic. The rod works for 1,500 total minutes before crumbling to dust.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 138",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rod-of-invulnerability",
    "name": "Invulnerability",
    "category": "rod",
    "cost": "600,000 gp",
    "summary": "When held, this stout adamantine rod grants its wielder a +5 natural armor bonus, a +5 resistance bonus on saving throws, damage reduction 50/+3, immunity to critical hits, and spell resistance 32.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 139",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rod-of-paradise",
    "name": "Paradise",
    "category": "rod",
    "cost": "610,000 gp",
    "summary": "This rod creates a nondimensional space similar in effect to a rod of security, except the possessor and up to 999 other creatures can stay in complete safety for up to 1,000 days divided by the number of creatures affected, and natural healing there takes place at five times the normal pace.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 139",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rod-of-restless-death",
    "name": "Restless Death",
    "category": "rod",
    "cost": "625,000 gp",
    "summary": "The holder of this rod can rebuke or control undead as if he were four levels higher (it does not grant the ability to those who lack it). A command word casts animate dead, with the animated skeletons and zombies automatically controlled by the rod up to a maximum of 42 HD and not counting toward the wielder's own control limit; a second command word casts slay living heightened to 10th level (DC 25).",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 139",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rod-of-excellent-magic",
    "name": "Excellent Magic",
    "category": "rod",
    "cost": "650,000 gp",
    "summary": "A rod with a shining adamantine headpiece. Once per day, when the wielder casts a nonepic or epic spell with an experience point component, the rod supplies up to 2,000 XP of that cost. As a special use, the caster can substitute the rod's power for the experience point development cost of an epic spell, but doing so drains all the rod's power and renders it useless.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 138",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rod-of-epic-absorption",
    "name": "Epic Absorption",
    "category": "rod",
    "cost": "1,500,000 gp",
    "summary": "Like a rod of absorption, this rod draws single-target or ray spells and spell-like abilities into itself, nullifying them and storing their potential spell levels for the wielder to release as spells of her own. Spells of any level — including metamagic-boosted spells above 9th level, but not epic spells — can be absorbed, up to a maximum of 150 spell levels; the rod cannot be recharged.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 137",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rod-of-epic-might",
    "name": "Epic Might",
    "category": "rod",
    "cost": "4,293,432 gp",
    "summary": "An adamantine, oversized rod of lordly might with six buttons. As weapons it serves as a +6 heavy mace, a +3 longsword of fiery blasting, a +8 battleaxe, or a +10 shortspear or longspear; once per day each it can dominate person on a touched foe (DC 24), stun all enemies viewing it as power word stun (DC 24), or deal 10d8 damage on a touch attack while curing the wielder of a like amount (DC 26). Its mundane functions include a climbing pole or ladder extending from 5 to 150 feet (bearing up to 10,000 pounds and able to force doors with a +24 Strength bonus) and a button that indicates magnetic north and the wielder's approximate depth or height.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, pp. 137–138",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rod-of-the-wyrm-white",
    "name": "Rod of the Wyrm (White)",
    "category": "rod",
    "cost": "1,458,200 gp",
    "summary": "One of the wyrm rods: it functions as a +5 quarterstaff, and when cast to the ground with a command word it grows by the end of the round into a white wyrm dragon that obeys its owner's commands. It reverts to rod form on command or if it moves more than 500 feet from the owner; if the dragon form is slain the rod cannot be activated again for three days. The rod only functions for a possessor of the same alignment as a white dragon.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 139",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rod-of-the-wyrm-brass",
    "name": "Rod of the Wyrm (Brass)",
    "category": "rod",
    "cost": "1,458,200 gp",
    "summary": "One of the wyrm rods: it functions as a +5 quarterstaff, and when cast to the ground with a command word it grows by the end of the round into a brass wyrm dragon that obeys its owner's commands. It reverts to rod form on command or if it moves more than 500 feet from the owner; if the dragon form is slain the rod cannot be activated again for three days. The rod only functions for a possessor of the same alignment as a brass dragon.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 139",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rod-of-the-wyrm-black",
    "name": "Rod of the Wyrm (Black)",
    "category": "rod",
    "cost": "1,562,600 gp",
    "summary": "One of the wyrm rods: it functions as a +5 quarterstaff, and when cast to the ground with a command word it grows by the end of the round into a black wyrm dragon that obeys its owner's commands. It reverts to rod form on command or if it moves more than 500 feet from the owner; if the dragon form is slain the rod cannot be activated again for three days. The rod only functions for a possessor of the same alignment as a black dragon.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 139",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rod-of-the-wyrm-copper",
    "name": "Rod of the Wyrm (Copper)",
    "category": "rod",
    "cost": "1,562,600 gp",
    "summary": "One of the wyrm rods: it functions as a +5 quarterstaff, and when cast to the ground with a command word it grows by the end of the round into a copper wyrm dragon that obeys its owner's commands. It reverts to rod form on command or if it moves more than 500 feet from the owner; if the dragon form is slain the rod cannot be activated again for three days. The rod only functions for a possessor of the same alignment as a copper dragon.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 139",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rod-of-the-wyrm-bronze",
    "name": "Rod of the Wyrm (Bronze)",
    "category": "rod",
    "cost": "1,670,600 gp",
    "summary": "One of the wyrm rods: it functions as a +5 quarterstaff, and when cast to the ground with a command word it grows by the end of the round into a bronze wyrm dragon that obeys its owner's commands. It reverts to rod form on command or if it moves more than 500 feet from the owner; if the dragon form is slain the rod cannot be activated again for three days. The rod only functions for a possessor of the same alignment as a bronze dragon.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 139",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rod-of-the-wyrm-green",
    "name": "Rod of the Wyrm (Green)",
    "category": "rod",
    "cost": "1,670,600 gp",
    "summary": "One of the wyrm rods: it functions as a +5 quarterstaff, and when cast to the ground with a command word it grows by the end of the round into a green wyrm dragon that obeys its owner's commands. It reverts to rod form on command or if it moves more than 500 feet from the owner; if the dragon form is slain the rod cannot be activated again for three days. The rod only functions for a possessor of the same alignment as a green dragon.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 139",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rod-of-the-wyrm-blue",
    "name": "Rod of the Wyrm (Blue)",
    "category": "rod",
    "cost": "1,782,200 gp",
    "summary": "One of the wyrm rods: it functions as a +5 quarterstaff, and when cast to the ground with a command word it grows by the end of the round into a blue wyrm dragon that obeys its owner's commands. It reverts to rod form on command or if it moves more than 500 feet from the owner; if the dragon form is slain the rod cannot be activated again for three days. The rod only functions for a possessor of the same alignment as a blue dragon.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 139",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rod-of-the-wyrm-silver",
    "name": "Rod of the Wyrm (Silver)",
    "category": "rod",
    "cost": "1,782,200 gp",
    "summary": "One of the wyrm rods: it functions as a +5 quarterstaff, and when cast to the ground with a command word it grows by the end of the round into a silver wyrm dragon that obeys its owner's commands. It reverts to rod form on command or if it moves more than 500 feet from the owner; if the dragon form is slain the rod cannot be activated again for three days. The rod only functions for a possessor of the same alignment as a silver dragon.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 139",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rod-of-the-wyrm-gold",
    "name": "Rod of the Wyrm (Gold)",
    "category": "rod",
    "cost": "1,897,400 gp",
    "summary": "One of the wyrm rods: it functions as a +5 quarterstaff, and when cast to the ground with a command word it grows by the end of the round into a gold wyrm dragon that obeys its owner's commands. It reverts to rod form on command or if it moves more than 500 feet from the owner; if the dragon form is slain the rod cannot be activated again for three days. The rod only functions for a possessor of the same alignment as a gold dragon.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 139",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rod-of-the-wyrm-red",
    "name": "Rod of the Wyrm (Red)",
    "category": "rod",
    "cost": "1,897,400 gp",
    "summary": "One of the wyrm rods: it functions as a +5 quarterstaff, and when cast to the ground with a command word it grows by the end of the round into a red wyrm dragon that obeys its owner's commands. It reverts to rod form on command or if it moves more than 500 feet from the owner; if the dragon form is slain the rod cannot be activated again for three days. The rod only functions for a possessor of the same alignment as a red dragon.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 139",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "staff-of-spheres",
    "name": "Staff of Spheres",
    "category": "staff",
    "cost": "228,375 gp",
    "summary": "A wooden staff shod in iron with a 5-inch iron ball on top, holding 50 charges. It allows use of Otiluke's freezing sphere (1 charge, DC 19), Otiluke's resilient sphere (1 charge, DC 16), and Otiluke's telekinetic sphere (1 charge, DC 22).",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 143",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "staff-of-mighty-force",
    "name": "Staff of Mighty Force",
    "category": "staff",
    "cost": "265,000 gp",
    "summary": "A platinum-shod staff holding 50 charges with three powers: shield (quickened, 1 charge, may be activated once per round), forcecage (1 charge), and Bigby's crushing hand (1 charge).",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 143",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "staff-of-walls",
    "name": "Staff of Walls",
    "category": "staff",
    "cost": "275,625 gp",
    "summary": "A square metallic pillar of a staff, 6 feet tall with a square stone headpiece set with a clear diamond, holding 50 charges. It allows use of wall of iron (1 charge), wall of stone (1 charge), and wall of force (extended, 1 charge).",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 143",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "staff-of-winter-epic",
    "name": "Staff of Winter",
    "category": "staff",
    "cost": "292,500 gp",
    "summary": "A steel pole constantly coated with a thin layer of frost, its circular headpiece showing a raging snowstorm, holding 50 charges. It allows use of cone of cold (intensified, 2 charges, DC 28), ice storm (intensified, 2 charges, DC 26), Otiluke's freezing sphere (intensified, 2 charges, DC 29), and wall of ice (1 charge).",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 143",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "staff-of-prism",
    "name": "Staff of Prism",
    "category": "staff",
    "cost": "326,812 gp",
    "summary": "A 6-foot, three-sided crystal staff holding 50 charges. It allows use of prismatic sphere (extended, 1 charge, DC 25), prismatic spray (extended, 1 charge, DC 22), and prismatic wall (extended, 1 charge, DC 23).",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 144",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "staff-of-rapid-barrage",
    "name": "Staff of Rapid Barrage",
    "category": "staff",
    "cost": "417,750 gp",
    "summary": "An epic staff holding 50 charges whose powers can be activated as a free action (though the staff may be activated only once per round): magic missile (intensified and quickened, 1 charge; five missiles dealing 10 points of damage each) and fireball (heightened to 6th level, enhanced, and quickened, 1 charge; 20d6 damage, DC 19).",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 144",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "staff-of-planar-might",
    "name": "Staff of Planar Might",
    "category": "staff",
    "cost": "460,000 gp",
    "summary": "A staff that makes its wielder immune to the effects of planar alignment traits and of positive-dominant and negative-dominant traits, and functions as a +5 outsider bane quarterstaff (the bane aimed at one alignment of outsiders). It holds 50 charges and allows use of greater planar ally (1 charge), greater planar binding (1 charge), and gate (1 charge); after all charges are spent it remains a +5 quarterstaff.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 143",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "staff-of-domination",
    "name": "Staff of Domination",
    "category": "staff",
    "cost": "464,400 gp",
    "summary": "A short, thick staff banded with iron like shackles, holding 50 charges. It allows use of heightened spells: dominate monster (1 charge, DC 33), demand (1 charge, DC 32), mass charm (1 charge, DC 32), and geas (heightened, 1 charge, DC 33).",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 142",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "staff-of-fiery-power",
    "name": "Staff of Fiery Power",
    "category": "staff",
    "cost": "500,000 gp",
    "summary": "A +5 flaming quarterstaff that grants its wielder fire resistance 30 whenever held and holds 50 charges: wall of fire (extended, 1 charge, DC 18), delayed blast fireball (intensified to 240 points of damage, 2 charges, DC 22), meteor swarm (heightened to 12th level, 2 charges, DC 30), and summon monster IX (extended, 2 charges; elder fire elemental only). It can be broken in a retributive strike, releasing all remaining charges in a 30-foot-radius globe.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, pp. 142–143",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "staff-of-natures-fury",
    "name": "Staff of Nature's Fury",
    "category": "staff",
    "cost": "500,000 gp",
    "summary": "A +5 aberration bane quarterstaff made from a single gnarled piece of lightning-struck oak, holding 50 charges. It allows use of earthquake (1 charge), whirlwind (heightened to 10th level, 1 charge, DC 25), and fire storm (heightened to 10th level, 1 charge, DC 25); after all charges are used it remains a +5 quarterstaff.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 143",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "staff-of-hierophants",
    "name": "Staff of Hierophants",
    "category": "staff",
    "cost": "501,187 gp",
    "summary": "A gnarled, age-darkened walking stick carved with vines, holding 50 charges. It allows use of creeping doom (enlarged and extended, 1 charge, DC 23), command plants (enlarged and extended, 1 charge, DC 25), elemental swarm (intensified, 2 charges, DC 34), and shambler (intensified, 2 charges, DC 34).",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 143",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "staff-of-the-cosmos",
    "name": "Staff of the Cosmos",
    "category": "staff",
    "cost": "683,437 gp",
    "summary": "A smooth staff of jet-black stone whose surface shows a shimmering, wavering star field, holding 50 charges. It allows use of chain lightning (intensified, 1 charge, DC 29), meteor swarm (intensified, 1 charge, DC 34), and sunburst (intensified, 1 charge, DC 32).",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 142",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "staff-of-necromancy",
    "name": "Staff of Necromancy",
    "category": "staff",
    "cost": "1,505,312 gp",
    "summary": "A staff that seems to be a series of fused finger bones, holding 50 charges. It allows use of circle of death (intensified, 2 charges, DC 29), create greater undead (1 charge), finger of death (improved heightened to 16th level, 2 charges, DC 34), and soul bind (improved heightened to 16th level, 2 charges, DC 34) — souls trapped by its soul bind are imprisoned in the staff itself and can be freed only by breaking it.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, pp. 142–143",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "horseshoes-of-the-peerless-steed",
    "name": "Horseshoes of the Peerless Steed",
    "category": "wondrous-slotless",
    "cost": "217,000 gp",
    "summary": "Horseshoes that magically adhere to the feet of any hoofed creature. Anyone riding the creature gains a +10 competence bonus on Ride checks and is treated as having ranks in the Ride skill (taking no penalty for an unfamiliar mount); the creature or its rider gains the effects of the Trample, Ride-By Attack, and Spirited Charge feats, the wearer gains spell resistance 32 against enchantment effects, and the creature's ground speed doubles.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 146",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "mantle-of-great-stealth",
    "name": "Mantle of Great Stealth",
    "category": "wondrous-shoulders",
    "cost": "242,000 gp",
    "summary": "The wearer of this neutral gray cloak gains a +30 bonus on Hide and Move Silently checks. The wearer's outline is blurry and indistinct, granting one-half concealment (20% miss chance) at all times as the blur spell, and the mantle also grants nondetection to its wearer.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, pp. 145–146",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "boots-of-swiftness",
    "name": "Boots of Swiftness",
    "category": "wondrous-feet",
    "cost": "256,000 gp",
    "summary": "Soft-soled leather shoes granting a +6 enhancement bonus to Dexterity, a doubled speed (not stacking with other magical or supernatural speed enhancements), the evasion ability, jumping distance not limited by height, and a +20 competence bonus on Balance, Climb, Jump, and Tumble checks. Three times per day the wearer can activate the boots' haste power (as the haste spell, lasting 20 rounds).",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 144",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "cabinet-of-feasting",
    "name": "Cabinet of Feasting",
    "category": "wondrous-slotless",
    "cost": "288,000 gp",
    "summary": "An extraordinary cabinet that produces a delicious feast for up to forty people, three times per day: merely opening its doors reveals platters of fresh food of all types and flavors, and the meal has all the qualities and benefits of one produced by a heroes' feast spell.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 145",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "mantle-of-epic-spell-resistance",
    "name": "Mantle of Epic Spell Resistance",
    "category": "wondrous-shoulders",
    "cost": "290,000 gp",
    "summary": "An embroidered garment worn over normal clothing or armor that grants the wearer spell resistance 40.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 146",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "gate-key",
    "name": "Gate Key",
    "category": "wondrous-slotless",
    "cost": "378,000 gp",
    "summary": "A small tube with rotating rings and buttons that can attune any bounded space (a doorway, a cave opening) to another bounded space on another plane previously visited by the wielder, springing a connected pair of interdimensional portals into being at both locations. The wielder sets the key travelers must have to use each portal — anything from nothing, to a pearl, to a hair color, to the gate key itself — and up to sixty different pairs of portals can be attuned; creatures without the proper key cannot even see the portals.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 145",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bracers-of-relentless-might",
    "name": "Bracers of Relentless Might",
    "category": "wondrous-arms",
    "cost": "4,384,000 gp",
    "summary": "Adamantine arm bands granting a +12 enhancement bonus to the wearer's Strength and Constitution. The wearer is treated as two size categories larger than normal (to a maximum of Colossal) for combat-related opposed checks that apply a size modifier, such as bull rush, grapple, and trip.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 145",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "amulet-of-epic-natural-armor-6",
    "name": "Amulet of Epic Natural Armor +6",
    "category": "wondrous-throat",
    "cost": "720,000 gp",
    "summary": "An amulet, usually crafted from dragon scales, that toughens the wearer's body and flesh, giving him a +6 natural armor bonus to AC.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 144",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "amulet-of-epic-natural-armor-7",
    "name": "Amulet of Epic Natural Armor +7",
    "category": "wondrous-throat",
    "cost": "980,000 gp",
    "summary": "An amulet, usually crafted from dragon scales, that toughens the wearer's body and flesh, giving him a +7 natural armor bonus to AC.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 144",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "amulet-of-epic-natural-armor-8",
    "name": "Amulet of Epic Natural Armor +8",
    "category": "wondrous-throat",
    "cost": "1,280,000 gp",
    "summary": "An amulet, usually crafted from dragon scales, that toughens the wearer's body and flesh, giving him a +8 natural armor bonus to AC.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 144",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "amulet-of-epic-natural-armor-9",
    "name": "Amulet of Epic Natural Armor +9",
    "category": "wondrous-throat",
    "cost": "1,620,000 gp",
    "summary": "An amulet, usually crafted from dragon scales, that toughens the wearer's body and flesh, giving him a +9 natural armor bonus to AC.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 144",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "amulet-of-epic-natural-armor-10",
    "name": "Amulet of Epic Natural Armor +10",
    "category": "wondrous-throat",
    "cost": "2,000,000 gp",
    "summary": "An amulet, usually crafted from dragon scales, that toughens the wearer's body and flesh, giving him a +10 natural armor bonus to AC.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 144",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "belt-of-epic-strength-8",
    "name": "Belt of Epic Strength +8",
    "category": "wondrous-waist",
    "cost": "640,000 gp",
    "summary": "A wide belt of thick hide studded with adamantine that adds a +8 enhancement bonus to the wearer's Strength score.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 144",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "belt-of-epic-strength-10",
    "name": "Belt of Epic Strength +10",
    "category": "wondrous-waist",
    "cost": "1,000,000 gp",
    "summary": "A wide belt of thick hide studded with adamantine that adds a +10 enhancement bonus to the wearer's Strength score.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 144",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "belt-of-epic-strength-12",
    "name": "Belt of Epic Strength +12",
    "category": "wondrous-waist",
    "cost": "1,440,000 gp",
    "summary": "A wide belt of thick hide studded with adamantine that adds a +12 enhancement bonus to the wearer's Strength score.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 144",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bracers-of-epic-health-8",
    "name": "Bracers of Epic Health +8",
    "category": "wondrous-arms",
    "cost": "640,000 gp",
    "summary": "Platinum arm bands, usually bearing the image of a dragon or other powerful creature, that grant the wearer a +8 enhancement bonus to Constitution.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 145",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bracers-of-epic-health-10",
    "name": "Bracers of Epic Health +10",
    "category": "wondrous-arms",
    "cost": "1,000,000 gp",
    "summary": "Platinum arm bands, usually bearing the image of a dragon or other powerful creature, that grant the wearer a +10 enhancement bonus to Constitution.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 145",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bracers-of-epic-health-12",
    "name": "Bracers of Epic Health +12",
    "category": "wondrous-arms",
    "cost": "1,440,000 gp",
    "summary": "Platinum arm bands, usually bearing the image of a dragon or other powerful creature, that grant the wearer a +12 enhancement bonus to Constitution.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 145",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "cloak-of-epic-charisma-8",
    "name": "Cloak of Epic Charisma +8",
    "category": "wondrous-shoulders",
    "cost": "640,000 gp",
    "summary": "A lightweight and fashionable cloak with decorative gold trim that grants the wearer a +8 enhancement bonus to Charisma.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 145",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "cloak-of-epic-charisma-10",
    "name": "Cloak of Epic Charisma +10",
    "category": "wondrous-shoulders",
    "cost": "1,000,000 gp",
    "summary": "A lightweight and fashionable cloak with decorative gold trim that grants the wearer a +10 enhancement bonus to Charisma.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 145",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "cloak-of-epic-charisma-12",
    "name": "Cloak of Epic Charisma +12",
    "category": "wondrous-shoulders",
    "cost": "1,440,000 gp",
    "summary": "A lightweight and fashionable cloak with decorative gold trim that grants the wearer a +12 enhancement bonus to Charisma.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 145",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "gloves-of-epic-dexterity-8",
    "name": "Gloves of Epic Dexterity +8",
    "category": "wondrous-hands",
    "cost": "640,000 gp",
    "summary": "Tight-fitting, thin leather gloves that are very flexible and allow for delicate manipulation, adding a +8 enhancement bonus to the wearer's Dexterity score.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 145",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "gloves-of-epic-dexterity-10",
    "name": "Gloves of Epic Dexterity +10",
    "category": "wondrous-hands",
    "cost": "1,000,000 gp",
    "summary": "Tight-fitting, thin leather gloves that are very flexible and allow for delicate manipulation, adding a +10 enhancement bonus to the wearer's Dexterity score.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 145",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "gloves-of-epic-dexterity-12",
    "name": "Gloves of Epic Dexterity +12",
    "category": "wondrous-hands",
    "cost": "1,440,000 gp",
    "summary": "Tight-fitting, thin leather gloves that are very flexible and allow for delicate manipulation, adding a +12 enhancement bonus to the wearer's Dexterity score.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 145",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "headband-of-epic-intellect-8",
    "name": "Headband of Epic Intellect +8",
    "category": "wondrous-head",
    "cost": "640,000 gp",
    "summary": "A light cord with a small diamond set to rest on the wearer's forehead, adding a +8 enhancement bonus to the wearer's Intelligence score.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 146",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "headband-of-epic-intellect-10",
    "name": "Headband of Epic Intellect +10",
    "category": "wondrous-head",
    "cost": "1,000,000 gp",
    "summary": "A light cord with a small diamond set to rest on the wearer's forehead, adding a +10 enhancement bonus to the wearer's Intelligence score.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 146",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "headband-of-epic-intellect-12",
    "name": "Headband of Epic Intellect +12",
    "category": "wondrous-head",
    "cost": "1,440,000 gp",
    "summary": "A light cord with a small diamond set to rest on the wearer's forehead, adding a +12 enhancement bonus to the wearer's Intelligence score.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 146",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "periapt-of-epic-wisdom-8",
    "name": "Periapt of Epic Wisdom +8",
    "category": "wondrous-throat",
    "cost": "640,000 gp",
    "summary": "A large pearl set on a platinum chain that grants the wearer a +8 enhancement bonus to Wisdom.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 146",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "periapt-of-epic-wisdom-10",
    "name": "Periapt of Epic Wisdom +10",
    "category": "wondrous-throat",
    "cost": "1,000,000 gp",
    "summary": "A large pearl set on a platinum chain that grants the wearer a +10 enhancement bonus to Wisdom.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 146",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "periapt-of-epic-wisdom-12",
    "name": "Periapt of Epic Wisdom +12",
    "category": "wondrous-throat",
    "cost": "1,440,000 gp",
    "summary": "A large pearl set on a platinum chain that grants the wearer a +12 enhancement bonus to Wisdom.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 146",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "cloak-of-epic-resistance-6",
    "name": "Cloak of Epic Resistance +6",
    "category": "wondrous-shoulders",
    "cost": "360,000 gp",
    "summary": "A garment offering magical protection in the form of a +6 resistance bonus on all saving throws (Fortitude, Reflex, and Will).",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 145",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "cloak-of-epic-resistance-7",
    "name": "Cloak of Epic Resistance +7",
    "category": "wondrous-shoulders",
    "cost": "490,000 gp",
    "summary": "A garment offering magical protection in the form of a +7 resistance bonus on all saving throws (Fortitude, Reflex, and Will).",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 145",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "cloak-of-epic-resistance-8",
    "name": "Cloak of Epic Resistance +8",
    "category": "wondrous-shoulders",
    "cost": "640,000 gp",
    "summary": "A garment offering magical protection in the form of a +8 resistance bonus on all saving throws (Fortitude, Reflex, and Will).",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 145",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "cloak-of-epic-resistance-9",
    "name": "Cloak of Epic Resistance +9",
    "category": "wondrous-shoulders",
    "cost": "810,000 gp",
    "summary": "A garment offering magical protection in the form of a +9 resistance bonus on all saving throws (Fortitude, Reflex, and Will).",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 145",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "cloak-of-epic-resistance-10",
    "name": "Cloak of Epic Resistance +10",
    "category": "wondrous-shoulders",
    "cost": "1,000,000 gp",
    "summary": "A garment offering magical protection in the form of a +10 resistance bonus on all saving throws (Fortitude, Reflex, and Will).",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 145",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bracers-of-epic-armor-11",
    "name": "Bracers of Epic Armor +11",
    "category": "wondrous-arms",
    "cost": "1,210,000 gp",
    "summary": "Wrist or arm guards that surround the wearer with an invisible but tangible field of force, granting a +11 armor bonus to AC just as though he were wearing armor. Both bracers must be worn for the magic to be effective.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 144",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bracers-of-epic-armor-12",
    "name": "Bracers of Epic Armor +12",
    "category": "wondrous-arms",
    "cost": "1,440,000 gp",
    "summary": "Wrist or arm guards that surround the wearer with an invisible but tangible field of force, granting a +12 armor bonus to AC just as though he were wearing armor. Both bracers must be worn for the magic to be effective.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 144",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bracers-of-epic-armor-13",
    "name": "Bracers of Epic Armor +13",
    "category": "wondrous-arms",
    "cost": "1,690,000 gp",
    "summary": "Wrist or arm guards that surround the wearer with an invisible but tangible field of force, granting a +13 armor bonus to AC just as though he were wearing armor. Both bracers must be worn for the magic to be effective.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 144",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bracers-of-epic-armor-14",
    "name": "Bracers of Epic Armor +14",
    "category": "wondrous-arms",
    "cost": "1,960,000 gp",
    "summary": "Wrist or arm guards that surround the wearer with an invisible but tangible field of force, granting a +14 armor bonus to AC just as though he were wearing armor. Both bracers must be worn for the magic to be effective.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 144",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bracers-of-epic-armor-15",
    "name": "Bracers of Epic Armor +15",
    "category": "wondrous-arms",
    "cost": "2,250,000 gp",
    "summary": "Wrist or arm guards that surround the wearer with an invisible but tangible field of force, granting a +15 armor bonus to AC just as though he were wearing armor. Both bracers must be worn for the magic to be effective.",
    "source": "Epic Level Handbook — Chapter 4: Epic Magic Items, p. 144",
    "sourceUrl": "",
    "ruleset": "core"
  }
];

export const ELH_EQUIPMENT_OMNI: EquipmentItem[] = [];
