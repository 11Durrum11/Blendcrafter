/**
 * Magic Item Compendium augment crystals (Chapter 1, pp. 24–26 and
Chapter 2, pp. 64–66). JUDGMENT CALL (flagged in REBUILD-NOTES.md):
augment crystals are discrete, priced items with a fixed effect,
so they fit the magic-item record shape cleanly and are included
under a dedicated "augment-crystal" category rather than omitted
with the item-level/treasure systems. Each crystal entry in the
book covers its least, lesser, and greater grades in a single
entry; the grades' prices and effects are all given in the one
record, following the house handling of graded items.
 *
 * Short mechanical summaries in our own words, cited to book
 * + page. Batch 11a of the "everything" program; see
 * REBUILD-NOTES.md.
 */
import type { MagicItemDefinition } from "@/engine/types";

export const MAGIC_ITEM_COMPENDIUM_AUGMENT_CRYSTALS: MagicItemDefinition[] = [
  {
    "id": "clasp-of-energy-protection",
    "name": "Clasp of Energy Protection",
    "category": "augment-crystal",
    "cost": "500 gp (least); 1,500 gp (lesser); 3,000 gp (greater)",
    "summary": "Augment crystal for a shield. Protects against one designated energy type (acid, cold, electricity, fire, or sonic, chosen at creation): least grants resistance 5 (up to 25 points per day), lesser resistance 10 (up to 50 points per day), greater resistance 15 (up to 75 points per day); once the daily total is reached the crystal is inert until the next day.",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor and Shield Augment Crystals, p. 24",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "crystal-of-adamant-armor",
    "name": "Crystal of Adamant Armor",
    "category": "augment-crystal",
    "cost": "300 gp (least), 1,400 gp (lesser), or 3,400 gp (greater)",
    "summary": "Augment crystal (armor or shield). A crystal of adamant armor strengthens your armor or shield against damage. Least: This augment crystal improves the hardness of a suit of armor or shield by 2. Lesser: This augment crystal improves the hardness of a suit of armor or shield by 5. Greater: This augment crystal improves the hardness of a suit of armor or shield by 10. (moderate transmutation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor and Shield Augment Crystals, p. 24",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "crystal-of-adamant-weaponry",
    "name": "Crystal of Adamant Weaponry",
    "category": "augment-crystal",
    "cost": "300 gp (least); 1,400 gp (lesser); 3,400 gp",
    "summary": "Augment crystal (weapon). (greater) A crystal of adamant weaponry strengthens your weapon against damage. Least: This crystal improves the hardness of a weapon by 2. Lesser: This crystal improves the hardness of a weapon by 5. Greater: This crystal improves the hardness of a weapon by 10. (moderate transmutation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Augment Crystals, p. 64",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "crystal-of-adaptation",
    "name": "Crystal of Adaptation",
    "category": "augment-crystal",
    "cost": "500 gp (least); 1,500 gp (lesser); or 3,000 gp (greater)",
    "summary": "Augment crystal (armor or shield). A crystal of adaptation protects you from hostile environments, both terrestrial and extraplanar. Least: This augment crystal protects you from temperature extremes as an endure elements spell. Lesser: As the least crystal, and you are also protected from all alignment traits of any plane (DMG 149). (moderate necromancy; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor and Shield Augment Crystals, p. 24",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "crystal-of-aquatic-action",
    "name": "Crystal of Aquatic Action",
    "category": "augment-crystal",
    "cost": "250 gp (least), 1,000 gp (lesser), or 3,000 gp (greater)",
    "summary": "Augment crystal (armor or shield). A crystal of aquatic action aids the wearer while underwater. Least: Any armor bearing this augment crystal does not impose an armor check penalty on your Swim checks. Lesser: As the least crystal, and you also gain a Swim speed equal to one-half your land speed (round down to the next 5-foot increment). (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor and Shield Augment Crystals, p. 25",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "crystal-of-arcane-steel",
    "name": "Crystal of Arcane Steel",
    "category": "augment-crystal",
    "cost": "500 gp (least); 2,000 gp (lesser); 6,000 gp (greater)",
    "summary": "Augment crystal (weapon). A crystal of arcane steel is designed for those who can blend magical and martial arts into a single strike. It functions only when attached to a melee weapon. Least: This crystal grants a +1 insight bonus on your weapon damage roll when delivering a spell or spell-like ability through a melee attack with the weapon. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Augment Crystals, p. 64",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "crystal-of-arrow-deflection",
    "name": "Crystal of Arrow Deflection",
    "category": "augment-crystal",
    "cost": "500 gp (least), 2,500 gp (lesser), or 5,000 gp (greater)",
    "summary": "Augment crystal (armor or shield). A crystal of arrow deflection protects you from ranged weapon attacks. Least: This augment crystal grants you a +2 bonus to AC against ranged attacks. Lesser: As the least crystal, except the bonus is +5. Greater: As the least crystal, and you can deflect one ranged attack per round as if you had the Deflect Arrows feat. (faint divination; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor and Shield Augment Crystals, p. 25",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "crystal-of-bent-sight",
    "name": "Crystal of Bent Sight",
    "category": "augment-crystal",
    "cost": "500 gp",
    "summary": "Augment crystal (armor or shield). A crystal of bent sight offers a great boon to any who face creatures that have gaze attacks. When this augment crystal is attached to your shield, you can avert your eyes from a creature that has a gaze attack without suffering a miss chance on your attack rolls against that creature. (faint divination; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor and Shield Augment Crystals, p. 25",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "crystal-of-energy-assault",
    "name": "Crystal of Energy Assault",
    "category": "augment-crystal",
    "cost": "600 gp (least); 3,000 gp (lesser); 6,000 gp (greater)",
    "summary": "Augment crystal (weapon). A crystal of energy assault adds a particular type of energy damage to a weapon's attacks: acid, cold, electricity, or fire. This bonus damage doesn't stack with any energy damage of the same type dealt by the weapon. Least: This crystal adds 1 point of energy damage of its type to the weapon's damage. (faint evocation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Augment Crystals, p. 64",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "crystal-of-glancing-blows",
    "name": "Crystal of Glancing Blows",
    "category": "augment-crystal",
    "cost": "500 gp (least), 3,000 gp (lesser), or 5,000 gp (greater)",
    "summary": "Augment crystal (armor or shield). A crystal of glancing blows causes your armor to turn aside grasping attacks. Least: This augment crystal grants you a +2 competence bonus on grapple checks to prevent a grapple from being initiated (but not any other kind of grapple check, including those to initiate or escape a grapple). Lesser: As the least crystal, but the bonus is +5. (moderate abjuration; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor and Shield Augment Crystals, p. 25",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "crystal-of-illumination",
    "name": "Crystal of Illumination",
    "category": "augment-crystal",
    "cost": "100 gp (least); 400 gp (lesser); 1,000 gp (greater)",
    "summary": "Augment crystal (weapon). Activating a crystal of illumination causes your weapon to glow. Least: The weapon sheds bright illumination in a 5-foot radius and shadowy illumination for 5 feet beyond that. Lesser: The weapon sheds bright illumination in a 20-foot radius and shadowy illumination for 20 feet beyond that. (faint evocation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Augment Crystals, p. 64",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "crystal-of-life-drinking",
    "name": "Crystal of Life Drinking",
    "category": "augment-crystal",
    "cost": "400 gp (least); 1,500 gp (lesser); 6,000 gp (greater)",
    "summary": "Augment crystal (weapon). A crystal of life drinking bestows a small amount of life energy upon you each time you damage a living creature with the weapon to which the crystal is attached. Dealing nonlethal damage with the weapon doesn't activate the crystal's effect. (faint necromancy; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Augment Crystals, p. 64",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "crystal-of-lifekeeping",
    "name": "Crystal of Lifekeeping",
    "category": "augment-crystal",
    "cost": "200 gp (least), 1,000 gp (lesser), or 5,000 gp (greater)",
    "summary": "Augment crystal (armor or shield). A crystal of lifekeeping wards you against necromantic and death effects. Least: This augment crystal grants you a +1 competence bonus on saving throws against energy drain attacks, inflict spells, death spells, and death effects. Lesser: As the least crystal, except the bonus is +3. Greater: As the least crystal, except the bonus is +5. (moderate necromancy; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor and Shield Augment Crystals, p. 25",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "crystal-of-mind-cloaking",
    "name": "Crystal of Mind Cloaking",
    "category": "augment-crystal",
    "cost": "500 gp (least), 4,000 gp (lesser), or 10,000 gp (greater)",
    "summary": "Augment crystal (armor or shield). A crystal of mind cloaking protects you against mental infiltration. Least: This augment crystal grants you a +1 competence bonus on saving throws against mind-affecting spells and abilities. Lesser: As above, except the crystal grants a +3 competence bonus. Greater: As above, except the crystal grants a +5 competence bonus. (faint abjuration; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor and Shield Augment Crystals, p. 25",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "crystal-of-return",
    "name": "Crystal of Return",
    "category": "augment-crystal",
    "cost": "300 gp (least); 1,000 gp (lesser); 4,000 gp (greater)",
    "summary": "Augment crystal (weapon). A crystal of return allows a weapon to leap into its owner's hand. Least: This crystal allows you to draw the weapon to which it is attached as a free action. Lesser: As the least crystal, and in addition you can call the weapon (if unattended) to your hand from up to 30 feet away as a move action. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Augment Crystals, p. 65",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "crystal-of-screening",
    "name": "Crystal of Screening",
    "category": "augment-crystal",
    "cost": "400 gp (least), 1,000 gp (lesser), or 3,000 gp (greater)",
    "summary": "Augment crystal (armor or shield). A crystal of screening enhances a suit of armor with force, enabling it to protect you against the attacks of incorporeal foes. Least: This augment crystal imposes a –2 penalty on touch attacks made against you by incorporeal creatures. Lesser: As the least crystal, except the penalty is –5. Greater: As the least crystal, except the penalty is –10. (faint abjuration; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor and Shield Augment Crystals, p. 26",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "crystal-of-security",
    "name": "Crystal of Security",
    "category": "augment-crystal",
    "cost": "300 gp (least); 1,000 gp (lesser); 3,000 gp (greater)",
    "summary": "Augment crystal (weapon). A crystal of security makes a weapon cling tightly to your hand during normal use. Least: This crystal grants you a +2 bonus on any check made to draw the weapon (such as when grappling) or to keep the weapon in your hand (such as on an opposed disarm check or an opposed Strength check if you and an opponent both grab the weapon). (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Augment Crystals, p. 65",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "crystal-of-stamina",
    "name": "Crystal of Stamina",
    "category": "augment-crystal",
    "cost": "300 gp (least), 900 gp (lesser), or 2,700 gp (greater)",
    "summary": "Augment crystal (armor or shield). A crystal of stamina protects you from assaults against your physical health. Least: This augment crystal grants you a +1 competence bonus on saving throws against disease and poison. Lesser: As the least crystal, except the bonus is +3. Greater: As the least crystal, except the bonus is +5. (moderate conjuration; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor and Shield Augment Crystals, p. 26",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "demolition-crystal",
    "name": "Demolition Crystal",
    "category": "augment-crystal",
    "cost": "1,000 gp (least); 3,000 gp (lesser); 6,000 gp (greater)",
    "summary": "Augment crystal (weapon). Demolition crystals were designed for those who fight constructs, particularly for the servants of wizards who battle enemy golems. Least: A weapon with this crystal attached deals an extra 1d6 points of damage to constructs. (moderate transmutation; CL 11th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Augment Crystals, p. 65",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "fiendslayer-crystal",
    "name": "Fiendslayer Crystal",
    "category": "augment-crystal",
    "cost": "1,000 gp (least); 3,000 gp (lesser); 5,000 gp (greater)",
    "summary": "Augment crystal (weapon). A fiendslayer crystal helps you fight creatures infused with evil. Least: A weapon with this crystal attached deals an extra 1d6 points of damage to evil outsiders. Lesser: As the least crystal, and the weapon is treated as good-aligned for the purpose of overcoming damage reduction. (moderate transmutation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Augment Crystals, p. 65",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "iron-ward-diamond",
    "name": "Iron Ward Diamond",
    "category": "augment-crystal",
    "cost": "500 gp (least), 2,000 gp (lesser), or 8,000 gp (greater)",
    "summary": "Augment crystal (armor or shield). An iron ward diamond lends its toughness to armor, helping it absorb blows in combat. Least: The least version of this augment crystal grants you damage reduction 1/—. This damage reduction stacks with similar damage reduction granted by any other source. Once the clasp has prevented a total of 10 points of damage, it becomes inert until the following day. (moderate evocation; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor and Shield Augment Crystals, p. 26",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "phoenix-ash-threat",
    "name": "Phoenix Ash Threat",
    "category": "augment-crystal",
    "cost": "500 gp (least); 2,000 gp (lesser); 6,000 gp (greater)",
    "summary": "Augment crystal (weapon). The augment crystal known as a phoenix ash threat leaves smoldering embers on your enemies after every strike. Each round, at the start of your turn, the embers deal fire damage to each target struck by the weapon in the previous round. (faint evocation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Augment Crystals, p. 65",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "restful-crystal",
    "name": "Restful Crystal",
    "category": "augment-crystal",
    "cost": "500 gp",
    "summary": "Augment crystal (armor or shield). A restful crystal is a great boon to any warrior who must stay always at the ready. Sleeping in armor that has this augment crystal attached does not make you fatigued. (faint enchantment; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor and Shield Augment Crystals, p. 26",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "revelation-crystal",
    "name": "Revelation Crystal",
    "category": "augment-crystal",
    "cost": "400 gp (least); 1,000 gp (lesser); 5,000 gp (greater)",
    "summary": "Augment crystal (weapon). A revelation crystal help you battle foes who rely on invisibility. Least: When you damage an invisible creature using a weapon with this augment crystal attached, the creature emits a glowing golden aura for 1 round, allowing everyone to know the square or squares it occupies and where it moves during that duration. The aura is as bright as a torch. (moderate divination; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Augment Crystals, p. 66",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "rubicund-frenzy",
    "name": "Rubicund Frenzy",
    "category": "augment-crystal",
    "cost": "500 gp (least), 2,000 gp (lesser), or 6,000 gp (greater)",
    "summary": "Augment crystal (armor or shield). This ruby is cut into a torus; it drinks your blood when you are wounded, whipping you into a savage frenzy. This item functions only for living creatures. Least: As long as your current hit point total is no greater than half your full normal hit points, you gain a +1 morale bonus on weapon damage rolls and saves against fear. Lesser: As the least crystal, except the morale bonus is +3. Greater: As the least crystal, except the morale bonus is +5. (moderate enchantment; CL 11th.)",
    "source": "Magic Item Compendium — Chapter 1: Armor — Armor and Shield Augment Crystals, p. 26",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "truedeath-crystal",
    "name": "Truedeath Crystal",
    "category": "augment-crystal",
    "cost": "1,000 gp (least); 5,000 gp (lesser); 10,000 gp (greater)",
    "summary": "Augment crystal (weapon). Clerics craft truedeath crystals to aid themselves and others in sending undead to their final rest. Least: A weapon with this crystal attached deals an extra 1d6 points of damage to undead. Lesser: As the least crystal, and the weapon also functions as a ghost touch weapon (DMG 224). (faint evocation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Augment Crystals, p. 66",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "witchlight-reservoir",
    "name": "Witchlight Reservoir",
    "category": "augment-crystal",
    "cost": "5,000 gp",
    "summary": "Augment crystal (weapon). As its name suggests, a witchlight reservoir can hold a small quantity of magical power, which can be used to enhance the power of a melee weapon. To imbue this augment crystal with power, you must directly expose it for 8 hours to one of the following substances: sunlight, moonlight, blood, or wine (at least one pint of either of the last two substances). (moderate necromancy; CL 10th.)",
    "source": "Magic Item Compendium — Chapter 2: Weapons — Weapon Augment Crystals, p. 66",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  }
];
