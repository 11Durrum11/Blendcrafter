/**
 * Magic Item Compendium tools (Chapter 4, pp. 149–190). Filed
under the DMG-style categories the app already uses ("rod",
"staff", "wand", "ring", otherwise "wondrous"). JUDGMENT CALL
(flagged in REBUILD-NOTES.md): the chapter's 32 named runestaffs
are discrete items with full stat blocks and fit the "staff"
category cleanly, so they are included like the augment
crystals; their summaries state the attunement requirement and
the spell list is summarized from the entry text. Items whose
price is set by a table in their entry (eternal wands, cognizance
crystals, memento magica, and similar) carry the full price
schedule in the cost field.
 *
 * Short mechanical summaries in our own words, cited to book
 * + page. Batch 11a of the "everything" program; see
 * REBUILD-NOTES.md.
 */
import type { MagicItemDefinition } from "@/engine/types";

export const MAGIC_ITEM_COMPENDIUM_TOOLS: MagicItemDefinition[] = [
  {
    "id": "aberrant-sphere",
    "name": "Aberrant Sphere",
    "category": "wondrous",
    "cost": "2,800 gp",
    "summary": "Created by alienists and other cultists who worship aberrant entities, an aberrant sphere allows its wielder to summon creatures from beyond space and time at the cost of a fraction of his own sanity. A sphere has 3 charges, which are renewed each day at dawn. Spending 1 or more charges causes the sphere to shatter, as it summons a particular kind of aberration, which appears anywhere within 30 feet of you and serves you (as summon monster I) for 7 rounds. You also take a penalty on your Will saves as long as the creature is present. 1 charge: Summons a choker; -1 penalty on Will saves. 2 charges: Summons a grick; -2 penalty on Will saves. 3 charges: Summons a carrion crawler; -3 penalty on Will saves. At the end of the duration (or when the creature is destroyed), the sphere re-forms in your hand (or at your feet if your hands are full) and the penalty on your Will saves disappears. (moderate conjuration; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 149",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "anstruth-harp",
    "name": "Anstruth Harp",
    "category": "wondrous",
    "cost": "32,100 gp",
    "summary": "This masterwork harp grants you a +2 circumstance bonus on Perform (string instruments) checks. If you have at least 12 ranks in Perform (string instruments), you can also command it to produce one of three spell effects (control water, mass cure light wounds, or mind fog), each once per day. (strong conjuration; CL 14th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 150",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "arcane-thieves-tools",
    "name": "Arcane Thieves' Tools",
    "category": "wondrous",
    "cost": "1,400 gp",
    "summary": "This set of masterwork thieves' tools is the perfect accessory if you depend on a blend of magic and skill to achieve your thieving goals. In addition to granting the normal +2 circumstance bonus on Disable Device and Open Lock checks, these tools can grant a character with the trapfinding class feature a special benefit. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 150",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "aroma-of-curdled-death",
    "name": "Aroma of Curdled Death",
    "category": "wondrous",
    "cost": "4,500 gp",
    "summary": "One round after you apply this elixir to your skin, it creates an invisible cloud of gas in a 10-foot radius that moves with you and persists for 1 minute. You are immune to the cloud's effects, but every other creature in the area that has 3 Hit Dice or fewer immediately dies (no save). (moderate conjuration; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 150",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "aroma-of-dreams",
    "name": "Aroma of Dreams",
    "category": "wondrous",
    "cost": "1,500 gp",
    "summary": "One round after you apply this elixir to your skin, it creates an invisible cloud of gas in a 10-foot radius that moves with you and persists for 5 rounds. (faint enchantment; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 150",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "bag-of-boulders",
    "name": "Bag of Boulders",
    "category": "wondrous",
    "cost": "1,400 gp",
    "summary": "This pouch creates tiny pebbles that strike with the force of a catapult stone when thrown. Each stone has a range increment of 50 feet. You are proficient with the stones and must make a successful ranged attack to strike with one. A stone disappears after it completes its flight. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 150",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "bag-of-endless-caltrops",
    "name": "Bag of Endless Caltrops",
    "category": "wondrous",
    "cost": "800 gp",
    "summary": "Five times per day, you can reach into this pouch and pull out a handful of caltrops (enough to cover a 5-foot square). In addition to the activation cost, filling a 5-foot square with caltrops by hand requires a standard action. The caltrops produced are not magical and follow all the rules for normal caltrops (PH 126). (moderate conjuration; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 151",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "bag-of-flames",
    "name": "Bag of Flames",
    "category": "wondrous",
    "cost": "3,500 gp",
    "summary": "A bag of flames contains a tiny ember of pure elemental fire. The bag has 3 charges, which are renewed each day at dawn. Spending 1 or more charges when you place your hand into the bag allows you to draw forth fire to create a particular effect. 1 charge: Flame burns in your hand, as the produce flame spell, with a duration of 1 minute. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 151",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "banner-of-the-storms-eye",
    "name": "Banner of the Storm'S Eye",
    "category": "wondrous",
    "cost": "15,000 gp",
    "summary": "An unfurled banner of the storm's eye always waves more slowly than nearby flags, and it seems unaffected by the wind or by the movement of its bearer. As long as it is held aloft, the banner automatically suppresses (but does not dispel) fear effects on all creatures within 20 feet. (faint enchantment; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 151",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "battle-bridle",
    "name": "Battle Bridle",
    "category": "wondrous",
    "cost": "9,000 gp",
    "summary": "A battle bridle occupies a mount's face body slot. While you are mounted upon a creature that is wearing a battle bridle, you gain a +5 competence bonus on Ride checks and the benefit of the Mounted Combat feat. If you already have Mounted Combat, you instead gain the benefit of Ride-By Attack. (CL 7th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 151",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "beetle-elixir",
    "name": "Beetle Elixir",
    "category": "wondrous",
    "cost": "1,350 gp",
    "summary": "Drinking beetle elixir causes your skin to harden, darken, and gloss over, and short antennae to sprout from your forehead. You gain darkvision out to 60 feet and a +2 enhancement bonus to your existing natural armor. (A creature without natural armor has an effective natural armor bonus of +0.) These effects last for 12 hours. (moderate transmutation; CL 6th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 151",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "blast-disk",
    "name": "Blast Disk",
    "category": "wondrous",
    "cost": "900 gp",
    "summary": "A blast disk can be set to explode through proximity or on a timer. In either case, when the disk activates it explodes, destroying the blast disk and dealing 5d6 points of fire damage to all creatures and objects within 10 feet (Reflex DC 14 half). If set to explode through proximity, a blast disk must be set down in a square on the battlefield. (faint evocation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 152",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "blast-globes",
    "name": "Blast Globes",
    "category": "wondrous",
    "cost": "8,000 gp",
    "summary": "When you activate a set of blast globes, the transparent globes separate and begin circling each other. One round after they activate, you can direct the globes to strike (as a group) any location within 400 feet as a free action. (moderate evocation; CL 11th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 152",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "blessed-bandage",
    "name": "Blessed Bandage",
    "category": "wondrous",
    "cost": "10 gp",
    "summary": "Applying a blessed bandage immediately stabilizes the recipient (but heals no damage). (faint conjuration; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 152",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "blight-stone",
    "name": "Blight Stone",
    "category": "wondrous",
    "cost": "300 gp",
    "summary": "A blight stone creates an instantaneous burst of vapor that damages plants and plant-based creatures. The stone must be thrown (range increment 10 feet) or hurled from a sling (using that weapon's normal range increment) as a ranged touch attack. (faint necromancy; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 153",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "camouflage-paint",
    "name": "Camouflage Paint",
    "category": "wondrous",
    "cost": "1,500 gp",
    "summary": "As a standard action, the user of camouflage paint can spread a glob of the substance across her face. Once applied, camouflage paint changes the color of the user's skin, clothing, and gear to that of her surroundings. This effect provides a +5 circumstance bonus on Hide checks, but only when the user is stationary. (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 153",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "canaith-mandolin",
    "name": "Canaith Mandolin",
    "category": "wondrous",
    "cost": "8,100 gp",
    "summary": "This masterwork mandolin grants you a +2 circumstance bonus on Perform (string instruments) checks. If you have at least 8 ranks in Perform (string instruments), you can also command it to produce one of three spell effects (cure serious wounds, dispel magic, or summon monster III), each once per day. (moderate abjuration; CL 8th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 153",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "censer-of-the-last-breath",
    "name": "Censer of the Last Breath",
    "category": "wondrous",
    "cost": "2,500 gp",
    "summary": "Nerull's faithful fill the censer of the last breath with ground gems rather than incense. When you burn 10 gp worth of quartz dust in it, the censer produces an obscuring mist effect, which, if you are neutral evil, neutral, lawful evil, or chaotic evil, you can see through as if it weren't there. Filling the censer is a standard action. Relic item; additional relic power with the proper divine connection (see text). (strong conjuration; CL 15th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 153",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "chime-of-harmonic-agony",
    "name": "Chime of Harmonic Agony",
    "category": "wondrous",
    "cost": "3,100 gp",
    "summary": "A chime of harmonic agony allows you to channel musical power through your own body to wreak harm on your enemies. When you activate the chime, you must spend one daily use of your bardic music ability and target a creature within 30 feet. The chime deals sonic damage equal to 3d6 + your Charisma modifier (Fort DC 16 half). (moderate evocation; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 154",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "cli-lyre",
    "name": "Cli Lyre",
    "category": "wondrous",
    "cost": "18,100 gp",
    "summary": "This masterwork lyre grants you a +2 circumstance bonus on Perform (string instruments) checks. If you have at least 10 ranks in Perform (string instruments), you can also command it to produce one of three spell effects (break enchantment, dimension door, or shout), each once per day. (moderate abjuration; CL 11th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 154",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "cognizance-crystal",
    "name": "Cognizance Crystal",
    "category": "wondrous",
    "cost": "1,000 gp (1 point); 4,000 gp (3 points); 9,000 gp (5 points); 16,000 gp (7 points); 25,000 gp (9 points); 36,000 gp (11 points); 49,000 gp (13 points); 64,000 gp (15 points); 81,000 gp (17 points)",
    "summary": "A cognizance crystal stores power points, which the holder can use to manifest a psionic power she knows (instead of spending points from her own power pool). (CL see table.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 154",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "conduit-rod",
    "name": "Conduit Rod",
    "category": "wondrous",
    "cost": "6,000 gp",
    "summary": "Conduit rods alter the fundamental ways in which magical energies interact. When you activate a conduit rod and specify an energy type (acid, cold, electricity, fire, or sonic), your existing resistance to energy of the chosen type increases by 20. (strong abjuration; CL 13th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 155",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "cornucopia-of-the-needful",
    "name": "Cornucopia of the Needful",
    "category": "wondrous",
    "cost": "6,000 gp",
    "summary": "Cornucopias of the needful were created to provide Yondalla's most intrepid followers with aid for their journeys. Relic item; additional relic power with the proper divine connection (see text). (strong conjuration; CL 20th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 155",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "crystal-anchor-of-alertness",
    "name": "Crystal Anchor of Alertness",
    "category": "wondrous",
    "cost": "2,500 gp",
    "summary": "When planted in the ground and activated, a crystal anchor of alertness burns with clear light (providing illumination as a lantern). In addition, your allies gain a +5 bonus on Listen and Spot checks as long as they remain within 30 feet of the anchor. This effect lasts for 1 hour, and the anchor functions three times per day. (faint abjuration; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 155",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "daerns-instant-tent",
    "name": "Daern's Instant Tent",
    "category": "wondrous",
    "cost": "9,000 gp",
    "summary": "When activated, this folded canvas grows into a 20-foot-square tent whose interior is always temperate, as Leomund's tiny hut, with cots sleeping up to eight Medium creatures and a fire pit with smoke hole. The tent has resistance to electricity 10, fire 10, and acid 10, and immunity to cold.",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 155",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "daylight-pellet",
    "name": "Daylight Pellet",
    "category": "wondrous",
    "cost": "150 gp",
    "summary": "A daylight pellet can be thrown up to 50 feet; when it lands, it shatters and creates illumination equivalent to a daylight spell, but with a duration of 10 rounds. These small stones are usually found in pouches containing 3d4 pellets. Using a pellet destroys it. (faint evocation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 156",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "diamondskin-decanter",
    "name": "Diamondskin Decanter",
    "category": "wondrous",
    "cost": "5,000 gp",
    "summary": "When tipped, a diamondskin decanter pours out a thin, silver oil shot through with flickering motes of light. A diamondskin decanter can pour forth up to 3 draughts, which are renewed each day at dawn. Pouring 1 or more draughts onto yourself or an adjacent creature grants it damage reduction. (moderate abjuration; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 156",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "domain-draught",
    "name": "Domain Draught",
    "category": "wondrous",
    "cost": "3,300 gp",
    "summary": "A domain draught is the distilled essence of a cleric domain. A successful DC 15 Knowledge (religion) check identifies the specific domain with which a given draught is associated from the markings on the bottle. Upon drinking a domain draught, you gain access to its domain for 24 hours. (strong transmutation; CL 20th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 156",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "doss-lute",
    "name": "Doss Lute",
    "category": "wondrous",
    "cost": "4,100 gp",
    "summary": "This masterwork lute grants you a +2 circumstance bonus on Perform (string instruments) checks. (CL 5th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 156",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "doves-harp",
    "name": "Dove'S Harp",
    "category": "wondrous",
    "cost": "12,100 gp",
    "summary": "When you play this masterwork harp while using your bardic music ability, all allies within 60 feet gain fast healing 3 for 1 minute. (moderate conjuration; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 156",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "dragons-draught",
    "name": "Dragon'S Draught",
    "category": "wondrous",
    "cost": "See text",
    "summary": "When a dragon or a creature that has the dragonblood subtype (see Races of the Dragon or Dragon Magic) consumes a dragon's draught, it gains the ability to use a particular type of breath weapon once during the next hour as a standard action. If you drink a second dragon's draught before using the first, the effect of the first is lost. (strong evocation; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 157",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "dragondoom-scepter",
    "name": "Dragondoom Scepter",
    "category": "wondrous",
    "cost": "18,000 gp",
    "summary": "A dragondoom scepter aids spellcasters in defeating dragons. When you hold this scepter, you gain a +2 competence bonus on caster level checks made to overcome the spell resistance of dragons. This is a continuous effect and requires no activation. (moderate evocation; CL 11th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 157",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "drums-of-marching",
    "name": "Drums of Marching",
    "category": "wondrous",
    "cost": "1,100 gp",
    "summary": "This pair of drums includes a harness that allows them to be strapped to a humanoid creature. A character who plays drums of marching during overland movement and succeeds on a DC 15 Perform (percussion instruments) check grants allies within 120 feet a +4 bonus on the Constitution check to avoid nonlethal damage from a forced march (PH 164). (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 158",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "dust-of-dispersion",
    "name": "Dust of Dispersion",
    "category": "wondrous",
    "cost": "500 gp",
    "summary": "You can fling this powder into the air up to 10 feet away from yourself to create a translucent cloud that occupies a 10-foot cube. Creatures outside the cloud can see into it and through it (though their sight is slightly blurred), but any ranged attack entering or passing through the cloud has a 50% miss chance. (faint conjuration; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 158",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ehlonnas-seed-pouch",
    "name": "Ehlonna'S Seed Pouch",
    "category": "wondrous",
    "cost": "1,400 gp",
    "summary": "When first opened, this pouch holds three ordinary-looking acorns. If you are neutral good, lawful good, chaotic good, or neutral, these acorns function as goodberries. Each morning, the pouch once again holds three acorns, no matter how many were in it before. Relic item; additional relic power with the proper divine connection (see text). (strong transmutation; CL 20th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 158",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "electric-eel-elixir",
    "name": "Electric Eel Elixir",
    "category": "wondrous",
    "cost": "400 gp",
    "summary": "Imbibing electric eel elixir turns your skin silvery and grants you a +1 enhancement bonus to your existing natural armor bonus. (A creature without natural armor has an effective natural armor bonus of +0.) Furthermore, one time while the elixir is in effect, you can make a melee touch attack that deals 1d8+1 points of electricity damage. (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 158",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "elixir-of-adamantine-blood",
    "name": "Elixir of Adamantine Blood",
    "category": "wondrous",
    "cost": "500 gp",
    "summary": "An elixir of adamantine blood causes a reaction that hardens your flesh. You gain 10 temporary hit points, which last for up to 1 hour. These temporary hit points do not stack with any other effects that grant temporary hit points. (moderate abjuration; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 158",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "elixir-of-flaming-fists",
    "name": "Elixir of Flaming Fists",
    "category": "wondrous",
    "cost": "300 gp",
    "summary": "When you drink this elixir, your hands immediately burst into flame, allowing you to deal an extra 1d6 points of fire damage with each of your unarmed attacks. These flames do not harm you. This effect lasts for 3 minutes. (faint evocation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 159",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "enveloping-pit",
    "name": "Enveloping Pit",
    "category": "wondrous",
    "cost": "3,600 gp",
    "summary": "Kobolds are among the finest trapmakers in the world, but this portable pit trap exceeds even their expertise. If you are lawful evil, lawful neutral, or neutral evil, an enveloping pit functions like a portable hole, except that it is 50 feet deep. Relic item; additional relic power with the proper divine connection (see text). (strong conjuration; CL 20th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 159",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "essentia-jewel",
    "name": "Essentia Jewel",
    "category": "wondrous",
    "cost": "400 gp",
    "summary": "When activated, an essentia jewel adds 1 point of essentia to your essentia pool for a single round. This essentia can be invested as normal. Only one essentia jewel can be used in each round, and each can be used only once, after which it crumbles to dust. (faint necromancy; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 159",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "eternal-wand",
    "name": "Eternal Wand",
    "category": "wand",
    "cost": "460 gp (0-level spell); 820 gp (1st-level spell); 4,420 gp (2nd-level spell); 10,900 gp (3rd-level spell)",
    "summary": "An eternal wand holds a single arcane spell of 3rd level or lower, determined during creation. (faint school of spell; CL See table.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 159",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "everfull-mug",
    "name": "Everfull Mug",
    "category": "wondrous",
    "cost": "200 gp",
    "summary": "Three times per day, when you recite the command word, this mug fills with 12 ounces of water, cheap ale, or watery wine (your choice). (faint conjuration; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 160",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "everlasting-feedbag",
    "name": "Everlasting Feedbag",
    "category": "wondrous",
    "cost": "800 gp",
    "summary": "When you place an everlasting feedbag around the muzzle of a horse, donkey, or other equine animal, suitable feed fills the bag and is continuously replenished until it is removed from the animal. Any uneaten feed disappears at that time. An everlasting feedbag can be used once per day. (faint conjuration; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 160",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "everlasting-rations",
    "name": "Everlasting Rations",
    "category": "wondrous",
    "cost": "350 gp",
    "summary": "This pouch contains enough trail rations to feed a Medium creature for one day. Every morning at sunrise, the pouch magically creates another day's worth of rations. (faint conjuration; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 160",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "exploding-spike",
    "name": "Exploding Spike",
    "category": "wondrous",
    "cost": "1,500 gp",
    "summary": "An exploding spike becomes invisible 1 round after you plant it firmly in the ground. Thereafter, as soon as any creature comes within 10 feet of it, the spike explodes in a fireball that deals 10d6 points of fire damage (Reflex DC 14 half) to every creature within 20 feet of it. This blast destroys the spike. (moderate evocation; CL 11th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 160",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "field-provisions-box",
    "name": "Field Provisions Box",
    "category": "wondrous",
    "cost": "2,000 gp",
    "summary": "When activated, a field provisions box produces a full day's sustenance (food and water) for up to fifteen humans or five horses. A field provisions box functions once per day. (faint conjuration; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 160",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "flesheater",
    "name": "Flesheater",
    "category": "wondrous",
    "cost": "12,000 gp",
    "summary": "When you activate a flesheater, you summon forth horrible, hungry apparitions of green energy resembling minuscule imps or quasits. These apparitions surround a living creature you designate within 30 feet. That creature must succeed on a DC 18 Fortitude save or take 3d6 points of damage each round for the next 4 rounds. (moderate conjuration; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 160",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "fochlucan-bandore",
    "name": "Fochlucan Bandore",
    "category": "wondrous",
    "cost": "1,350 gp",
    "summary": "This masterwork bandore grants you a +2 circumstance bonus on Perform (string instruments) checks. If you have at least 2 ranks in Perform (string instruments), you can also command it to produce one of four spell-like abilities (flare, light, mending, or message), each once per day. (faint evocation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 161",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "glitter-stone",
    "name": "Glitter Stone",
    "category": "wondrous",
    "cost": "450 gp",
    "summary": "A glitter stone renders hidden creatures visible. The stone must be thrown (range increment 10 feet) or hurled from a sling (using that weapon's normal range increment) as a ranged touch attack. When the stone strikes its target or a hard surface, it deals no damage, but explodes in a 10foot-radius burst of glittering shards. (faint conjuration; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 161",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "globe-of-sunlight",
    "name": "Globe of Sunlight",
    "category": "wondrous",
    "cost": "6,000 gp",
    "summary": "You can hurl a globe of sunlight up to 50 feet. When it arrives at the end of its trajectory, it detonates as a sunburst spell (Reflex DC 22 partial), except that the radius of the burst is only 40 feet. Once activated, the globe is expended and cannot be used again. (strong evocation; CL 15th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 161",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "glyph-seal",
    "name": "Glyph Seal",
    "category": "wondrous",
    "cost": "1,000 gp",
    "summary": "A glyph seal allows you to convert any arcane or divine spell of up to 2nd level into a symbol similar to a glyph of warding. To do so, you must cast the spell while holding the seal; doing this is called keying the seal. You can safely transport a keyed glyph seal until you activate it by pressing the seal to the desired surface. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 161",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "glyph-seal-greater",
    "name": "Glyph Seal, Greater",
    "category": "wondrous",
    "cost": "4,000 gp",
    "summary": "A greater glyph seal functions like a glyph seal, with the following exceptions: It can be keyed with any spell of 5th level or higher, it functions as the greater glyph of warding spell, detecting and disabling it requires a successful DC 33 check, and a successful DC 33 Search check is needed to find it. (moderate transmutation; CL 11th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 161",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "hammersphere",
    "name": "Hammersphere",
    "category": "wondrous",
    "cost": "1,500 gp",
    "summary": "Once per day, when held aloft and activated, this sphere conjures forth a giant hammer. This hammer functions as a spiritual weapon except that it deals 3d6 points of damage on a successful hit. You do not have to concentrate on the hammer or keep the sphere aloft while it attacks. (moderate transmutation; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 161",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "harrow-rod",
    "name": "Harrow Rod",
    "category": "wondrous",
    "cost": "14,000 gp",
    "summary": "When activated, a harrow rod sprays forth a 30-foot cone that deals 9d6 points of acid damage to all within the area (Reflex DC 17 half). A harrow rod functions three times per day. (moderate conjuration; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 162",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "healing-salve",
    "name": "Healing Salve",
    "category": "wondrous",
    "cost": "2,250 gp",
    "summary": "A single application of healing salve smeared across a wound heals 1d8+1 points of damage. A double application heals 2d8+3 points of damage. A triple application heals 3d8+5 points of damage. No matter how much salve is used, each application takes a standard action to apply. A 3-inch-diameter, 2-inch-deep jar holds enough salve for ten single applications. (faint conjuration; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 162",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "horn-of-plenty",
    "name": "Horn of Plenty",
    "category": "wondrous",
    "cost": "12,000 gp",
    "summary": "Once per day, you can blow a horn of plenty to create a heroes' feast, as the spell, for twelve participants. (strong conjuration; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 162",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "icy-strand-of-the-north",
    "name": "Icy Strand of the North",
    "category": "wondrous",
    "cost": "2,500 gp",
    "summary": "You can detach and throw one of the ice crystals on this cord as a standard action. Each crystal can be thrown up to 80 feet. When it reaches the end of its trajectory, it explodes to create an ice storm or sleet storm (as the spells) centered on its endpoint. (moderate evocation; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 162",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "incense-of-concentration",
    "name": "Incense of Concentration",
    "category": "wondrous",
    "cost": "250 gp",
    "summary": "If burned while you prepare spells, this incense allows you to prepare one extra 1st-level spell for the day. You can benefit from only one exposure to incense of concentration in a 24-hour period. (moderate transmutation; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 162",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "infinite-scrollcase",
    "name": "Infinite Scrollcase",
    "category": "wondrous",
    "cost": "2,800 gp",
    "summary": "An infinite scrollcase holds up to fifty scrolls or other parchments, which can be placed within it or removed as with any normal scrollcase. When you activate an infinite scrollcase, the desired scroll unfurls through the slit, ready to read or cast from. (moderate conjuration; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 162",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "jumping-caltrops",
    "name": "Jumping Caltrops",
    "category": "wondrous",
    "cost": "250 gp",
    "summary": "Jumping caltrops function just like normal ones, except that each round at the start of your turn, if no targets are in their square, they move 5 feet toward the nearest enemy (chosen randomly if more than one is equidistant). Upon entering an occupied square, the jumping caltrops “attack” that creature as normal for caltrops. (moderate transmutation; CL 11th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 162",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "lens-of-the-desert",
    "name": "Lens of the Desert",
    "category": "wondrous",
    "cost": "20,000 gp",
    "summary": "When you activate a lens of the desert, it creates a beam of focused sunlight that is the equivalent of a sunbeam spell. A lens of the desert functions three times per day. (strong evocation; CL 13th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 163",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "life-ring",
    "name": "Life Ring",
    "category": "wondrous",
    "cost": "400 gp",
    "summary": "To activate a life ring, you break the twine crossing the hoop. Once active, a life ring grants a feather fall effect to the next four creatures who touch it within 10 rounds. The duration of each subject's feather fall benefit is equal to the number of rounds remaining in the item's duration when that creature touches the life ring. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 163",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "mac-fuirmidh-cithern",
    "name": "Mac-Fuirmidh Cithern",
    "category": "wondrous",
    "cost": "2,100 gp",
    "summary": "This masterwork cithern grants you a +2 circumstance bonus on Perform (string instruments) checks. (faint conjuration; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 163",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "magic-bedroll",
    "name": "Magic Bedroll",
    "category": "wondrous",
    "cost": "500 gp",
    "summary": "A magic bedroll grants you a comfortable and peaceful night's sleep. As long as you lie in it, you gain the benefit of an endure elements spell. After sleeping for 8 hours in the bedroll, you recover 1 hit point per character level, in addition to the hit points you recover normally. (faint conjuration; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 163",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "magic-siphon",
    "name": "Magic Siphon",
    "category": "wondrous",
    "cost": "25,000 gp",
    "summary": "A magic siphon drains the magical energy from existing spell effects, rendering them powerless and ineffective in the same manner that dispel magic would. Every creature adjacent to you when you activate a magic siphon is affected as though by a targeted greater dispel magic spell. This rod functions once per day. (strong abjuration; CL 20th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 164",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "map-of-unseen-lands",
    "name": "Map of Unseen Lands",
    "category": "wondrous",
    "cost": "5,200 gp",
    "summary": "A map of unseen lands is a boon to caravans of halfling pilgrims, who use it to avoid danger and make their way through the wilderness. While holding the map, you gain a +5 competence bonus on Knowledge (geography) and Survival checks if you are neutral good, lawful good, chaotic good, or neutral. Relic item; additional relic power with the proper divine connection (see text). (strong evocation; CL 20th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 164",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "memento-magica",
    "name": "Memento Magica",
    "category": "wondrous",
    "cost": "1,500 gp (1st-level spell); 6,000 gp (2nd); 13,500 gp (3rd); 24,000 gp (4th); 37,500 gp (5th); 54,000 gp (6th); 73,500 gp (7th); 96,000 gp (8th); 121,500 gp (9th)",
    "summary": "Once per day when activated, this dragon-scale-shaped amethyst lets a spontaneous spellcaster regain one previously used spell slot of the level the memento was created to hold (separate mementos exist for each spell level, 1st through 9th), as if the spell had not been cast. It has no effect for spellcasters who prepare spells.",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 164",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "metamagic-rod-chaining",
    "name": "Metamagic Rod (Chaining)",
    "category": "wondrous",
    "cost": "14,000 gp (lesser); 54,000 gp (normal); 121,500 gp (greater)",
    "summary": "You can cast up to three spells per day that are chained as though affected by the Chain Spell feat. (strong no school; CL 17th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 165",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "metamagic-rod-reach",
    "name": "Metamagic Rod (Reach)",
    "category": "wondrous",
    "cost": "9,000 gp (lesser); 32,500 gp (normal); 73,000 gp (greater)",
    "summary": "You can cast up to three spells per day as though their ranges were affected by the Reach Spell feat. (moderate transmutation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 165",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "metamagic-rod-sculpting",
    "name": "Metamagic Rod (Sculpting)",
    "category": "wondrous",
    "cost": "3,000 gp (lesser); 11,000 gp (normal); 24,500 gp (greater)",
    "summary": "You can cast up to three spells per day whose areas are modified as though affected by the Sculpt Spell feat. (strong no school; CL 17th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 165",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "metamagic-rod-substitution",
    "name": "Metamagic Rod (Substitution)",
    "category": "wondrous",
    "cost": "2,700 gp (lesser); 10,500 gp (normal); 24,300 gp (greater)",
    "summary": "Four different versions of this rod exist, each keyed to a different type of energy (acid, cold, electricity, or fire). Three times per day, you can cast a spell as though using the appropriate Energy Substitution feat. (strong no school; CL 17th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 165",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "mirror-of-suggestion",
    "name": "Mirror of Suggestion",
    "category": "wondrous",
    "cost": "3,600 gp",
    "summary": "When activated, a mirror of suggestion must be held in such a way as to force a creature within 30 feet to see its own reflection. This functions as a gaze attack; any creature that fails a DC 14 Will save is subject to a suggestion made by the mirror's wielder. (faint enchantment; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 165",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "mirror-of-time-hop",
    "name": "Mirror of Time Hop",
    "category": "wondrous",
    "cost": "9,000 gp",
    "summary": "When activated, a mirror of time hop must be held in such a way as to force a creature within 30 feet to see its own reflection. This functions as a gaze attack; any creature that fails a DC 14 Will save is pushed 5 rounds forward in time. (moderate conjuration; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 165",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "noble-pennon",
    "name": "Noble Pennon",
    "category": "wondrous",
    "cost": "5,000 gp",
    "summary": "At the touch of a paladin or knight (PH2 24), the image on this narrow banner changes to represent the coat of arms of its bearer. Once claimed, it can be transferred to a new owner only if the current owner is willing or the current owner dies. (moderate enchantment; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 166",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ollamh-harp",
    "name": "Ollamh Harp",
    "category": "wondrous",
    "cost": "50,100 gp",
    "summary": "This masterwork lap harp grants you a +2 circumstance bonus on Perform (string instruments) checks. If you have at least 14 ranks in Perform (string instruments), you can also command it to produce one of three spell effects (control weather, eyebite, or repulsion), each once per day. (strong transmutation; CL 17th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 166",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "orb-of-blinding",
    "name": "Orb of Blinding",
    "category": "wondrous",
    "cost": "5,000 gp",
    "summary": "An orb of blinding can emit a brilliant burst of light that blinds all creatures within a 15-foot cone for 1 round (Fort DC 16 negates). An orb of blinding can generate this effect three times per day, but it can't be activated in consecutive rounds. (faint illusion; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 167",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "orb-of-environmental-adaptation",
    "name": "Orb of Environmental Adaptation",
    "category": "wondrous",
    "cost": "2,000 gp",
    "summary": "An orb of environmental adaptation provides a group of creatures relief from extreme environments. When you hold the orb in your hand and activate it, it transforms into a faintly glowing sphere of protection centered on you. (faint abjuration; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 167",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "orb-of-mental-renewal",
    "name": "Orb of Mental Renewal",
    "category": "wondrous",
    "cost": "3,100 gp",
    "summary": "An orb of mental renewal allows you to heal mental ability damage taken by yourself or another. To use the orb, you must hold it while touching the target to be affected (or merely hold the orb, if affecting yourself). The orb has 3 charges, which are renewed each day at dawn. (faint conjuration; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 167",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "pearl-of-brain-lock",
    "name": "Pearl of Brain Lock",
    "category": "wondrous",
    "cost": "900 gp",
    "summary": "You can hurl a pearl of brain lock as a ranged touch attack with a range increment of 10 feet. If the target fails a DC 13 Will saving throw, the pearl seems to impact and then enter the flesh of the creature, dazing it for 3 rounds. This is a mindaffecting ability. (faint enchantment; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 167",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "pearl-of-breath-crisis",
    "name": "Pearl of Breath Crisis",
    "category": "wondrous",
    "cost": "2,000 gp",
    "summary": "You can hurl a pearl of breath crisis as a ranged touch attack with a range increment of 10 feet. If it strikes a humanoid that fails a DC 14 Will saving throw, the pearl seems to impact and then enter the flesh of the creature, compelling it to purge itself of breath. (faint enchantment; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 168",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "personal-oasis",
    "name": "Personal Oasis",
    "category": "wondrous",
    "cost": "4,600 gp",
    "summary": "When you unroll this 10-foot-by-10-foot blanket and activate it, a 5-foot-by-10-foot tent springs from the blanket, along with a campfire, a bowl of dates, and a gallon of cool water. The tent functions in all ways as a Leomund's tiny hut spell. (faint conjuration; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 168",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "pipes-of-frenzied-revelry",
    "name": "Pipes of Frenzied Revelry",
    "category": "wondrous",
    "cost": "3,100 gp",
    "summary": "When you play these pipes, you gain a +5 competence bonus on Perform (wind instruments) checks if you are chaotic neutral, neutral, chaotic good, or chaotic evil. Relic Power: If you have established the proper divine connection, you can attempt a DC 25 Perform (wind instruments) check each round that you are playing the pipes. Relic item; additional relic power with the proper divine connection (see text). (strong enchantment; CL 20th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 168",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "porcupine-elixir",
    "name": "Porcupine Elixir",
    "category": "wondrous",
    "cost": "800 gp",
    "summary": "Imbibing porcupine elixir toughens your skin, granting you a +1 enhancement bonus to your existing natural armor bonus. (A creature without natural armor has an effective natural armor bonus of +0.) In addition, hundreds of needle-sharp quills sprout from your body. (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 169",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "portable-foxhole",
    "name": "Portable Foxhole",
    "category": "wondrous",
    "cost": "5,000 gp",
    "summary": "When placed on a flat surface, a portable foxhole creates a shallow extradimensional pit 5 feet square and 3 feet deep. A foxhole provides cover against ranged attacks. Any items or creatures in a portable foxhole when it is picked up (another standard action) are dumped out unharmed in the space the foxhole occupied. (moderate transmutation; CL 11th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 169",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "powder-of-the-black-veil",
    "name": "Powder of the Black Veil",
    "category": "wondrous",
    "cost": "750 gp",
    "summary": "When you cast this sooty, black powder into an area, it creates a 10-foot-high cloud in a 10-foot spread, centered on you (but not moving with you). (faint necromancy; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 169",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "psychoactive-skin-of-power-damping",
    "name": "Psychoactive Skin of Power Damping",
    "category": "wondrous",
    "cost": "10,000 gp",
    "summary": "Three times per day when activated, this skin minimizes for 1 round all numeric effects of any spell, spell-like ability, power, or psi-like ability that affects you (harmful or beneficial). It provides no benefit while not activated, and falls dormant until the next dawn after its last daily use.",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 171",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "psychoactive-skin-of-the-celestial",
    "name": "Psychoactive Skin of the Celestial",
    "category": "wondrous",
    "cost": "6,000 gp",
    "summary": "Once per day when activated, this skin grants the following for 7 rounds (use your own values if higher): damage reduction 5/magic, darkvision 60 ft., resistance to acid 10, cold 10, and electricity 10, spell resistance 15, and smite evil once during the duration (+10 damage against an evil foe). It falls dormant until the next dawn after use.",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 169",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "quiver-of-energy",
    "name": "Quiver of Energy",
    "category": "wondrous",
    "cost": "15,000 gp",
    "summary": "A quiver of energy can hold up to 20 arrows or bolts. Each quiver imbues arrows or bolts drawn from it with a particular type of energy (acid, cold, electricity, or fire), indicated by the arcane symbols it bears. Such projectiles, if left within the quiver for at least 1 round before being drawn, deal an extra 1d6 points of the appropriate type of damage. (moderate evocation; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 172",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "radiant-sphere",
    "name": "Radiant Sphere",
    "category": "wondrous",
    "cost": "3,500 gp",
    "summary": "This crystal globe sheds bright illumination in a 20-ft. radius (and shadowy illumination 20 ft. beyond) while it holds at least 1 charge. It has 3 charges, renewed daily: spending charges as a standard (command) action fires a ray of pure light (ranged touch, 60 ft.) dealing 4d6 damage to an undead creature (1 charge), 6d6 (2 charges), or 6d6 plus 2d6 to each undead within 10 ft. of the target (3 charges). It can be recharged by expending a turn undead use or a spell with the light descriptor (full-round action, 1 charge each).",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 172",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "replenishing-skin",
    "name": "Replenishing Skin",
    "category": "wondrous",
    "cost": "1,000 gp",
    "summary": "Whenever a replenishing skin becomes empty, it slowly refills with cool, pure water over a period of 1d4 hours. (faint conjuration; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 173",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "rhino-elixir",
    "name": "Rhino Elixir",
    "category": "wondrous",
    "cost": "1,600 gp",
    "summary": "Drinking rhino elixir causes your skin to thicken and turn gray, granting you a +3 enhancement bonus to your existing natural armor bonus. (A creature without natural armor has an effective natural armor bonus of +0.) In addition, you gain a +1 bonus on melee damage rolls. These effects last for 12 hours. (moderate transmutation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 173",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "rod-of-bodily-restoration",
    "name": "Rod of Bodily Restoration",
    "category": "rod",
    "cost": "3,100 gp",
    "summary": "A rod of bodily restoration allows you to heal physical ability damage. To use the rod, you must touch the target to be affected (or merely hold the rod, if affecting yourself). The rod has 3 charges, which are renewed each day at dawn. Spending 1 or more charges heals damage to one or more of the target's physical ability scores. (moderate conjuration; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 173",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "rod-of-escape",
    "name": "Rod of Escape",
    "category": "rod",
    "cost": "3,500 gp",
    "summary": "A rod of escape allows you to use jump and knock (as the spells) each two times per day. Also, once per day you can create a 5-foot-radius spherical ward that repels open water or other nonmagical waterbased liquids (but not creatures), allowing you to cross shallow rivers or fully enter deep bodies of water and remain dry. (moderate transmutation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 173",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "rod-of-force",
    "name": "Rod of Force",
    "category": "rod",
    "cost": "60,000 gp",
    "summary": "A rod of force can be used five times per day. Each time you activate this rod, you can choose to create one of the following effects. Blade of Force: Upon command, a 3foot-long glowing blade of force springs forth from the rod. This “blade” can be used as a +1 brilliant energy longsword and lasts for 10 rounds. (strong evocation; CL 13th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 173",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "rod-of-frost",
    "name": "Rod of Frost",
    "category": "rod",
    "cost": "1,400 gp",
    "summary": "A rod of frost emits a beam of cold that can create a variety of effects. Three times per day, you can fire a 30foot line of frost from the rod. The line of frost deals 2d6 points of cold damage to all creatures in the area (Reflex DC 14 half). (moderate evocation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 174",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "rod-of-fumbling",
    "name": "Rod of Fumbling",
    "category": "rod",
    "cost": "2,300 gp",
    "summary": "A rod of fumbling instills sudden clumsiness in a nearby creature. When you activate the rod, a chosen creature within 30 feet must immediately drop all items it holds (without waiting until its turn). A successful DC 15 Will save negates the effect. This is an enchantment (compulsion), mind-affecting ability. A rod of fumbling functions two times per day. (moderate enchantment; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 174",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "rod-of-grievous-wounds",
    "name": "Rod of Grievous Wounds",
    "category": "rod",
    "cost": "2,000 gp",
    "summary": "When activated, a rod of grievous wounds deals 1d8+5 points of damage to each creature adjacent to you that has fewer than its full normal hit points. A rod of grievous wounds functions five times per day. (moderate necromancy; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 174",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "rod-of-reversal",
    "name": "Rod of Reversal",
    "category": "rod",
    "cost": "10,000 gp",
    "summary": "When you wield a rod of reversal, you can command it to automatically reflect the next three levels of spells that target you, as if you were under a lesser version of a spell turning spell, provided that you are neutral, neutral good, neutral evil, chaotic neutral, or lawful neutral. This ability functions three times per day. Turning a spell changes the rod's color depending on the school of the spell turned. Relic item; additional relic power with the proper divine connection (see text). (strong abjuration; CL 20th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 174",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "rod-of-silence",
    "name": "Rod of Silence",
    "category": "rod",
    "cost": "4,000 gp",
    "summary": "While holding this rod, you gain a +4 bonus on saving throws against effects that have the sonic descriptor or that deal sonic damage. Once per day, you can surround yourself with a field of silence, which functions as a silence spell except it affects only you and can be dismissed as a free (mental) action on your turn. (moderate evocation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 175",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "rod-of-sliding",
    "name": "Rod of Sliding",
    "category": "rod",
    "cost": "1,400 gp",
    "summary": "When activated, this rod can either push a targeted creature 5 feet farther away from you or pull it 5 feet closer to you. The target must be within 30 feet of you and must end its movement in an unoccupied square. The movement does not provoke attacks of opportunity. (moderate transmutation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 175",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "rod-of-sure-striking",
    "name": "Rod of Sure Striking",
    "category": "rod",
    "cost": "4,000 gp",
    "summary": "When you activate a rod of sure striking, every ally adjacent to you gains a +5 insight bonus on its next attack roll, provided that the attack occurs before the beginning of your next turn. A rod of sure striking functions three times per day. (moderate divination; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 175",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "rod-of-transposition",
    "name": "Rod of Transposition",
    "category": "rod",
    "cost": "6,000 gp",
    "summary": "Three times per day when activated, this rod exchanges your position with another creature within 30 ft.; an unwilling creature gets a DC 13 Will save to negate.",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 175",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "rod-of-undead-mastery",
    "name": "Rod of Undead Mastery",
    "category": "rod",
    "cost": "10,000 gp",
    "summary": "While holding a rod of undead mastery, you can control twice as many Hit Dice of undead as you normally could. For instance, if you can normally control 12 HD of undead, you can control 24 HD of undead while holding the rod. (moderate evocation; CL 10th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 175",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "rod-of-viscid-globs",
    "name": "Rod of Viscid Globs",
    "category": "rod",
    "cost": "2,000 gp",
    "summary": "A rod of viscid globs fires a sphere of sticky material that acts like a tanglefoot bag. The rod can fire a glob up to 100 feet, and a glob acts as a splash weapon. A rod of viscid globs can be used three times per day. (CL 9th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 176",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "rope-of-climbing-superior",
    "name": "Rope of Climbing, Superior",
    "category": "wondrous",
    "cost": "5,500 gp",
    "summary": "This item functions like a rope of climbing (DMG 266), except that it also grants a +5 circumstance bonus on Climb checks made to ascend it. (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 176",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "rope-of-stone",
    "name": "Rope of Stone",
    "category": "wondrous",
    "cost": "800 gp",
    "summary": "This silk rope becomes as hard as stone (hardness 8, 15 hp) when you speak the command word (but remains just as climbable as normal). A second command word returns the rope to its normal composition. The rope retains its exact shape when hardened (which adds 5 to the DC of Escape Artist checks made to slip free of it). (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 176",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "runestaff-of-abjuration",
    "name": "Runestaff of Abjuration",
    "category": "staff",
    "cost": "32,000 gp",
    "summary": "Runestaff (must be attuned). Allows you to cast dismissal, dispel magic, lesser globe of invulnerability, repulsion, resist energy, and shield, each three times per day, by expending a prepared arcane spell or arcane spell slot of the same level or higher.",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 176",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "runestaff-of-cacophony",
    "name": "Runestaff of Cacophony",
    "category": "staff",
    "cost": "26,000 gp",
    "summary": "A runestaff of cacophony allows you to cast any of the following spells (each three times per day) by expending a prepared arcane spell or arcane spell slot of the same level or higher. • shout • shout, greater • sound burst • sympathetic vibration. Must be attuned before use. (strong evocation; CL 16th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 177",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "runestaff-of-charming",
    "name": "Runestaff of Charming",
    "category": "staff",
    "cost": "8,000 gp",
    "summary": "A runestaff of charming allows you to cast either of the following spells (each three times per day) by expending a prepared arcane spell or arcane spell slot of the same level or higher. • charm monster • charm person. Must be attuned before use. (strong enchantment; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 177",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "runestaff-of-conjuration",
    "name": "Runestaff of Conjuration",
    "category": "staff",
    "cost": "25,000 gp",
    "summary": "A runestaff of conjuration allows you to cast any of the following spells (each two times per day) by expending a prepared arcane spell or arcane spell slot of the same level or higher. • cloudkill • minor creation • stinking cloud • summon monster VI • summon swarm • unseen servant. Must be attuned before use. (strong conjuration; CL 13th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 177",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "runestaff-of-destruction",
    "name": "Runestaff of Destruction",
    "category": "staff",
    "cost": "27,000 gp",
    "summary": "A runestaff of destruction allows you to cast any of the following spells (each once per day) by expending a prepared arcane spell or arcane spell slot of the same level or higher. • disintegrate • earthquake • shatter. Must be attuned before use. (strong evocation; CL 15th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 177",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "runestaff-of-divination",
    "name": "Runestaff of Divination",
    "category": "staff",
    "cost": "21,000 gp",
    "summary": "A runestaff of divination allows you to cast any of the following spells (each two times per day) by expending a prepared arcane spell or arcane spell slot of the same level or higher. • detect secret doors • locate creature • locate object • prying eyes • tongues • true seeing. Must be attuned before use. (strong divination; CL 13th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 177",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "runestaff-of-earth-and-stone",
    "name": "Runestaff of Earth and Stone",
    "category": "staff",
    "cost": "24,000 gp",
    "summary": "A runestaff of earth and stone allows you to cast either of the following spells (each three times per day) by expending a prepared arcane spell or arcane spell slot of the same level or higher. • move earth • passwall. Must be attuned before use. (strong transmutation; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 178",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "runestaff-of-enchantment",
    "name": "Runestaff of Enchantment",
    "category": "staff",
    "cost": "32,000 gp",
    "summary": "A runestaff of enchantment allows you to cast any of the following spells (each three times per day) by expending a prepared arcane spell or arcane spell slot of the same level or higher. • crushing despair • mass suggestion • mind fog • sleep • suggestion • Tasha's hideous laughter. Must be attuned before use. (strong enchantment; CL 13th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 178",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "runestaff-of-entrapment",
    "name": "Runestaff of Entrapment",
    "category": "staff",
    "cost": "12,000 gp",
    "summary": "A runestaff of entrapment allows you to cast either of the following spells (each three times per day) by expending a prepared arcane spell or arcane spell slot of the same level or higher. • dimensional anchor • Otiluke's resilient sphere. Must be attuned before use. (strong abjuration; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 178",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "runestaff-of-ethereal-action",
    "name": "Runestaff of Ethereal Action",
    "category": "staff",
    "cost": "31,300 gp",
    "summary": "A runestaff of ethereal action is a +1/masterwork ghost touch quarterstaff that also allows you to cast either of the following spells (each three times per day) by expending a prepared arcane spell or arcane spell slot of the same level or higher. • blink • ethereal jaunt. Must be attuned before use. (strong transmutation; CL 14th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 178",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "runestaff-of-evocation",
    "name": "Runestaff of Evocation",
    "category": "staff",
    "cost": "25,000 gp",
    "summary": "A runestaff of evocation allows you to cast any of the following spells (each two times per day) by expending a prepared arcane spell or arcane spell slot of the same level or higher. • chain lightning • fireball • ice storm • magic missile • shatter • wall of force. Must be attuned before use. (strong evocation; CL 13th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 178",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "runestaff-of-eyes",
    "name": "Runestaff of Eyes",
    "category": "staff",
    "cost": "11,000 gp",
    "summary": "A runestaff of eyes allows you to cast any of the following spells (each three times per day) by expending a prepared arcane spell or arcane spell slot of the same level or higher. • arcane eye • remove blindness/deafness • see invisibility. Must be attuned before use. (strong divination; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 178",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "runestaff-of-fiendish-darkness",
    "name": "Runestaff of Fiendish Darkness",
    "category": "staff",
    "cost": "48,000 gp",
    "summary": "A runestaff of fiendish darkness bestows one negative level on any good-aligned creature as long as it carries or holds the runestaff; the negative level never results in actual level loss and cannot be overcome in any way (including restoration spells) while the runestaff is held. This staff allows you to cast any of the following spells (each three times per day) by expending a prepared arcane spell or arcane spell slot of the same level or higher. • animate dead • darkness • dispel magic • summon monster IX (nightmare only). Must be attuned before use. (strong conjuration; CL 18th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 178",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "runestaff-of-fire",
    "name": "Runestaff of Fire",
    "category": "staff",
    "cost": "8,400 gp",
    "summary": "A runestaff of fire allows you to cast any of the following spells (each three times per day) by expending a prepared arcane spell or arcane spell slot of the same level or higher. • burning hands • fireball • wall of fire. Must be attuned before use. (strong evocation; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 180",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "runestaff-of-forced-happiness",
    "name": "Runestaff of Forced Happiness",
    "category": "staff",
    "cost": "18,000 gp",
    "summary": "A runestaff of forced happiness allows you to cast any of the following spells (each two times per day) by expending a prepared arcane spell or arcane spell slot of the same level or higher. • celebration (SC 44) • Otto's irresistible dance • Tasha's hideous laughter. Must be attuned before use. (strong enchantment; CL 16th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 180",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "runestaff-of-frost",
    "name": "Runestaff of Frost",
    "category": "staff",
    "cost": "20,000 gp",
    "summary": "A runestaff of frost allows you to cast any of the following spells (each three times per day) by expending a prepared arcane spell or arcane spell slot of the same level or higher. • cone of cold • ice storm • wall of ice. Must be attuned before use. (strong evocation; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 180",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "runestaff-of-illumination",
    "name": "Runestaff of Illumination",
    "category": "staff",
    "cost": "34,500 gp",
    "summary": "A runestaff of illumination allows you to cast any of the following spells (each three times per day) by expending a prepared arcane spell or arcane spell slot of the same level or higher. • dancing lights • daylight • flare • sunburst. Must be attuned before use. (strong evocation; CL 15th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 180",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "runestaff-of-illusion",
    "name": "Runestaff of Illusion",
    "category": "staff",
    "cost": "19,000 gp",
    "summary": "A runestaff of illusion allows you to cast any of the following spells (each once per day) by expending a prepared arcane spell or arcane spell slot of the same level or higher. • disguise self • major image • mirror image • mislead • persistent image • rainbow pattern. Must be attuned before use. (strong illusion; CL 13th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 180",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "runestaff-of-insanity",
    "name": "Runestaff of Insanity",
    "category": "staff",
    "cost": "46,000 gp",
    "summary": "A runestaff of insanity allows you to cast any of the following spells (each two times per day) by expending a prepared arcane spell or arcane spell slot of the same level or higher. • confusion • insanity • lesser confusion • weird. Must be attuned before use. (strong illusion; CL 17th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 180",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "runestaff-of-necromancy",
    "name": "Runestaff of Necromancy",
    "category": "staff",
    "cost": "32,000 gp",
    "summary": "A runestaff of necromancy allows you to cast any of the following spells (each three times per day) by expending a prepared arcane spell or arcane spell slot of the same level or higher. • cause fear • circle of death • enervation • ghoul touch • halt undead • waves of fatigue. Must be attuned before use. (strong necromancy; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 180",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "runestaff-of-night",
    "name": "Runestaff of Night",
    "category": "staff",
    "cost": "14,000 gp",
    "summary": "A runestaff of night allows you to cast any of the following spells (each three times per day) by expending a prepared arcane spell or arcane spell slot of the same level or higher. • darkness (can counter or dispel any light spell, regardless of level) • darkvision • low-light vision. This runestaff also allows you to cast summon monster VI (summons one fiendish umber hulk only) once per day by expending a prepared arcane spell or arcane spell slot of the same level or higher. Must be attuned before use. (strong conjuration; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 181",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "runestaff-of-opening",
    "name": "Runestaff of Opening",
    "category": "staff",
    "cost": "15,000 gp",
    "summary": "A runestaff of opening allows you to cast any of the following spells (each three times per day) by expending a prepared arcane spell or arcane spell slot of the same level or higher. • knock • open/close • passwall • shatter. Must be attuned before use. (strong transmutation; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 181",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "runestaff-of-passage",
    "name": "Runestaff of Passage",
    "category": "staff",
    "cost": "75,000 gp",
    "summary": "A runestaff of passage allows you to cast any of the following spells (each three times per day) by expending a prepared arcane spell or arcane spell slot of the same level or higher. • astral projection • dimension door • greater teleport • passwall • phase door. Must be attuned before use. (strong necromancy; CL 18th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 181",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "runestaff-of-power",
    "name": "Runestaff of Power",
    "category": "staff",
    "cost": "38,300 gp",
    "summary": "A runestaff of power allows you to cast any of the following spells (each once per day) by expending a prepared arcane spell or arcane spell slot of the same level or higher. • cone of cold • continual flame • fireball • globe of invulnerability • hold monster • levitate • lightning bolt • magic missile • ray of enfeeblement • wall of force (in a 5-foot-radius hemisphere around the wielder only). In addition, a runestaff of power functions as a +2/masterwork quarterstaff and grants you a +2 luck bonus to AC and on saves as long as it is held. As a swift action, you can expend a 1st-level arcane spell or spell slot while holding a runestaff of power to activate a smite ability: until the start of your next turn, all melee attacks made with the runestaff deal double damage (or triple damage on a critical hit). Must be attuned before use. (strong abjuration; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 181",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "runestaff-of-size-alteration",
    "name": "Runestaff of Size Alteration",
    "category": "staff",
    "cost": "12,000 gp",
    "summary": "A runestaff of size alteration allows you to cast any of the following spells (each two times per day) by expending a prepared arcane spell or arcane spell slot of the same level or higher. • enlarge person • mass enlarge person • mass reduce person • reduce person • shrink item. Must be attuned before use. (strong transmutation; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 181",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "runestaff-of-the-architect",
    "name": "Runestaff of the Architect",
    "category": "staff",
    "cost": "30,000 gp",
    "summary": "Runestaff (must be attuned). Allows you to cast move earth, stone shape, wall of stone, and wood shape, each three times per day, by expending a prepared arcane spell or arcane spell slot of the same level or higher.",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 176",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "runestaff-of-the-artisan",
    "name": "Runestaff of the Artisan",
    "category": "staff",
    "cost": "23,000 gp",
    "summary": "A runestaff of the artisan allows you to cast any of the following spells (each three times per day) by expending a prepared arcane spell or arcane spell slot of the same level or higher. • fabricate • major creation • mending • minor creation. Must be attuned before use. (strong conjuration; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 176",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "runestaff-of-the-assassin",
    "name": "Runestaff of the Assassin",
    "category": "staff",
    "cost": "10,000 gp",
    "summary": "A runestaff of the assassin allows you to cast any of the following spells (each two times per day) by expending a prepared arcane spell or arcane spell slot of the same level or higher. • greater invisibility • obscuring mist • pass without trace • poison. Must be attuned before use. (strong illusion; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 177",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "runestaff-of-the-undead-slayer",
    "name": "Runestaff of the Undead Slayer",
    "category": "staff",
    "cost": "37,000 gp",
    "summary": "A runestaff of the undead slayer allows you to cast any of the following spells (each three times per day) by expending a prepared arcane spell or arcane spell slot of the same level or higher. • death ward • detect undead • disrupting weapon • searing light • undeath to death. Must be attuned before use. (strong necromancy; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 182",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "runestaff-of-the-undying",
    "name": "Runestaff of the Undying",
    "category": "staff",
    "cost": "16,000 gp",
    "summary": "A runestaff of the undying allows you to cast any of the following spells (each two times per day) by expending a prepared arcane spell or arcane spell slot of the same level or higher. • animate dead • create undead. Must be attuned before use. (strong necromancy; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 182",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "runestaff-of-time",
    "name": "Runestaff of Time",
    "category": "staff",
    "cost": "35,000 gp",
    "summary": "A runestaff of time allows you to cast any of the following spells (each once per day) by expending a prepared arcane spell or arcane spell slot of the same level or higher. • expeditious retreat • haste • temporal stasis • time stop. Must be attuned before use. (strong transmutation; CL 17th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 182",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "runestaff-of-transmutation",
    "name": "Runestaff of Transmutation",
    "category": "staff",
    "cost": "25,000 gp",
    "summary": "A runestaff of transmutation allows you to cast any of the following spells (each two times per day) by expending a prepared arcane spell or arcane spell slot of the same level or higher. • alter self • baleful polymorph • blink • disintegrate • expeditious retreat • stone shape. Must be attuned before use. (strong transmutation; CL 13th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 182",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "runestaff-of-transportation",
    "name": "Runestaff of Transportation",
    "category": "staff",
    "cost": "19,000 gp",
    "summary": "A runestaff of transportation allows you to cast any of the following spells (each three times per day) by expending a prepared arcane spell or arcane spell slot of the same level or higher. • blink • dimension door • teleport. Must be attuned before use. (strong transmutation; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 182",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "runestaff-of-vision",
    "name": "Runestaff of Vision",
    "category": "staff",
    "cost": "16,000 gp",
    "summary": "A runestaff of vision allows you to cast any of the following spells (each three times per day) by expending a prepared arcane spell or arcane spell slot of the same level or higher. • darkvision • see invisibility • true seeing. Must be attuned before use. (strong divination; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 182",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "sacred-scabbard",
    "name": "Sacred Scabbard",
    "category": "wondrous",
    "cost": "4,400 gp",
    "summary": "A sacred scabbard can change shape to fit any dagger, sword, or axe touched to it, even making allowances for double weapons. The scabbard keeps any weapon carried in it clean and sharp. Furthermore, three times per day, you can command it to produce a bless weapon effect on the weapon it holds as you draw it. This effect lasts for 10 rounds. (faint transmutation; CL 4th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 183",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "salve-of-minor-spell-resistance",
    "name": "Salve of Minor Spell Resistance",
    "category": "wondrous",
    "cost": "1,350 gp",
    "summary": "Upon spreading this salve upon your skin, you gain spell resistance 17 for 5 minutes. (moderate abjuration; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 183",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "scepter-of-the-netherworld",
    "name": "Scepter of the Netherworld",
    "category": "wondrous",
    "cost": "9,000 gp",
    "summary": "If you can turn or rebuke undead, holding a scepter of the netherworld allows you to do so as if your level in the relevant class were three levels higher. (moderate necromancy; CL 10th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 183",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "scrolls-of-uncertain-provenance",
    "name": "Scrolls of Uncertain Provenance",
    "category": "wondrous",
    "cost": "8,000 gp",
    "summary": "Scrolls of uncertain provenance are not spells stored in written form, but collections of death-obsessed writings in an unknown hand. Popular myth holds that those who can command the lore contained in a set of these scrolls have power over life and death. Relic item; additional relic power with the proper divine connection (see text). (strong necromancy; CL 20th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 183",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "scrying-beacon",
    "name": "Scrying Beacon",
    "category": "wondrous",
    "cost": "750 gp",
    "summary": "If you spend 1 minute attuning yourself to a scrying beacon, you can choose for the next clairaudience/clairvoyance spell you cast to be centered on the beacon, as long as you are within 1 mile of it. Once this power has been used, the beacon becomes dormant until you attune yourself to it again. (faint divination; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 184",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "scrying-shard",
    "name": "Scrying Shard",
    "category": "wondrous",
    "cost": "1,350 gp",
    "summary": "A character of any class can cast scrying using a scrying shard as a focus. (moderate divination; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 184",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "sending-stones",
    "name": "Sending Stones",
    "category": "wondrous",
    "cost": "1,400 gp",
    "summary": "These unremarkable-looking stones come in pairs. Once per day, the bearer of each stone can send a message (as the sending spell) to the bearer of the other stone. If a stone's mate is not in a creature's possession, no message is sent and you know the communication has failed. (moderate evocation; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 184",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "shackles-of-silence",
    "name": "Shackles of Silence",
    "category": "wondrous",
    "cost": "6,000 gp",
    "summary": "Shackles of silence fit any Small, Medium, or Large creature. A creature manacled with these shackles is affected by a silence effect (as the spell) that fills that creature's space. A creature can slip free from shackles of silence with a successful DC 28 Escape Artist check, or break free with a successful DC 28 Strength check. (faint illusion; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 184",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "shard-of-the-sun",
    "name": "Shard of the Sun",
    "category": "wondrous",
    "cost": "3,500 gp",
    "summary": "A shard of the sun is mentioned in several religious texts as “Pelor's gift, which I carry into darkness—a sun that never sets.” When you hold this item, it continuously emits a warm light equivalent to a daylight spell heightened to 5th level, provided that you are neutral good, lawful good, chaotic good, or neutral. Relic item; additional relic power with the proper divine connection (see text). (strong evocation; CL 20th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 185",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "skill-shard",
    "name": "Skill Shard",
    "category": "wondrous",
    "cost": "50 gp (normal); 300 gp (greater)",
    "summary": "When held, a skill shard telepathically whispers its command word into your mind. When you activate it, you gain a competence bonus on your next check with a specific skill, chosen during the item's creation. The check must begin before the end of your turn and must be completed within 10 minutes. A skill shard disintegrates when used. (moderate transmutation; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 185",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "skin-of-celestial-embrace",
    "name": "Skin of Celestial Embrace",
    "category": "wondrous",
    "cost": "24,000 gp",
    "summary": "When activated, a skin of celestial embrace grants you the following abilities for 15 rounds (if you already have any of these abilities, use your own values if higher): • +4 bonus on Fortitude saves against poison. • Damage reduction 10/magic. • Darkvision 60 feet. (strong transmutation; CL 15th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 170",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "skin-of-ectoplasmic-armor",
    "name": "Skin of Ectoplasmic Armor",
    "category": "wondrous",
    "cost": "6,000 gp",
    "summary": "This skin grants you a +8 armor bonus. The skin has a maximum Dexterity bonus of +2, a –6 armor check penalty, and a 25% arcane spell failure chance. It is treated as light armor for the purpose of affecting class features and movement. (moderate conjuration; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 170",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "skin-of-fiendish-embrace",
    "name": "Skin of Fiendish Embrace",
    "category": "wondrous",
    "cost": "24,000 gp",
    "summary": "When activated, a skin of fiendish embrace grants you the following abilities for 15 rounds (if you already have any of these abilities, use your own values if higher): • Damage reduction 10/magic. • Darkvision 60 feet. • Batlike wings that allow you to fly at your base land speed with average maneuverability. (strong transmutation; CL 15th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 170",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "skin-of-fiery-response",
    "name": "Skin of Fiery Response",
    "category": "wondrous",
    "cost": "60,000 gp",
    "summary": "A skin of fiery response answers the first melee or ranged attack made against you in each round with a targeted blast against the attacker. The blast of fire emits from the skin at the start of your next turn, making a ranged touch attack against the attacker if within line of sight and line of effect (up to a maximum distance of 40 feet). (faint evocation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 171",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "skin-of-iron",
    "name": "Skin of Iron",
    "category": "wondrous",
    "cost": "40,000 gp",
    "summary": "When activated, this skin grants you the benefit of the iron body spell with a duration of 15 minutes. At the end of its duration, it falls dormant until the following dawn. (strong transmutation; CL 15th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 171",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "skin-of-nimbleness",
    "name": "Skin of Nimbleness",
    "category": "wondrous",
    "cost": "15,000 gp",
    "summary": "This skin continually grants you a +10 competence bonus on Tumble checks. (moderate transmutation; CL 8th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 171",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "skin-of-the-chameleon",
    "name": "Skin of the Chameleon",
    "category": "wondrous",
    "cost": "15,000 gp",
    "summary": "A skin of the chameleon adjusts to your surrounding textures and colors, continually granting you a +10 competence bonus on Hide checks. (faint evocation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 170",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "skin-of-the-claw",
    "name": "Skin of the Claw",
    "category": "wondrous",
    "cost": "12,000 gp",
    "summary": "A skin of the claw benefits you only if you are a psychic warrior. If you are a psychic warrior and you wear this skin, you can transform your hands into deadly claws. You gain two primary natural claw attacks, each dealing 1d6 points of damage (if you are Medium) plus your Strength modifier. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 170",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "skin-of-the-defender",
    "name": "Skin of the Defender",
    "category": "wondrous",
    "cost": "32,000 gp",
    "summary": "This skin continually grants a +4 enhancement bonus to your natural armor bonus. (A creature without natural armor has an effective natural armor bonus of +0.). (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 170",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "skin-of-the-fiend",
    "name": "Skin of the Fiend",
    "category": "wondrous",
    "cost": "6,000 gp",
    "summary": "When activated, a skin of the fiend grants you the following abilities for 7 rounds (if you already have any of these abilities, use your own values if higher): • Damage reduction 5/magic. • Darkvision 60 feet. • Resistance to cold 10 and fire 10. (moderate transmutation; CL 10th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 170",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "skin-of-the-hero",
    "name": "Skin of the Hero",
    "category": "wondrous",
    "cost": "77,000 gp",
    "summary": "This skin continually grants its wearer a +3 deflection bonus to Armor Class, a +3 resistance bonus on saving throws, and a +3 enhancement bonus on attack rolls. (strong no school; CL 18th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 171",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "skin-of-the-psion",
    "name": "Skin of the Psion",
    "category": "wondrous",
    "cost": "90,000 gp",
    "summary": "This skin grants you 7 additional power points per day and spell resistance 21. (strong abjuration; CL 13th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 172",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "skin-of-the-spider",
    "name": "Skin of the Spider",
    "category": "wondrous",
    "cost": "40,000 gp",
    "summary": "This skin grants you a +10 competence bonus on Climb checks. The skin also automatically adjusts your body's equilibrium to correspond with any solid or liquid upon which you stand. This allows you to move (but not run) across water, quicksand, or even a spider's web at your normal speed. These are continuous effects and require no activation. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 172",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "skin-of-the-troll",
    "name": "Skin of the Troll",
    "category": "wondrous",
    "cost": "61,000 gp",
    "summary": "This skin heals you of 5 points of damage per minute. This benefit is not effective against damage from starvation, thirst, or suffocation. The skin also regrows lost portions of your body and allows you to reattach severed limbs. If you don't have a Constitution score, a skin of the troll has no effect on you. (strong conjuration; CL 17th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 172",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "slashing-sand",
    "name": "Slashing Sand",
    "category": "wondrous",
    "cost": "2,000 gp",
    "summary": "When you fling slashing sand onto the ground, it covers an area of up to four contiguous squares with razor-sharp obsidian shards for 1 hour (the equivalent of a spike stones spell). At least one affected square must be adjacent to your space. Once activated, this item is expended and cannot be used again. (moderate transmutation; CL 10th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 185",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "sleeping-spike",
    "name": "Sleeping Spike",
    "category": "wondrous",
    "cost": "3,500 gp",
    "summary": "A sleeping spike becomes invisible 1 round after you plant it firmly in the ground. Thereafter, as soon as any creature comes within 10 feet of it, the spike emits a sleep effect (Will DC 17 negates) in a 20-footradius burst that affects all creatures with 10 Hit Dice or fewer. The spike is destroyed when the sleep effect is triggered. (moderate enchantment; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 185",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "soul-anchor",
    "name": "Soul Anchor",
    "category": "wondrous",
    "cost": "10,000 gp",
    "summary": "When you activate a soul anchor, each creature adjacent to you must succeed on a DC 18 Will saving throw or be unable to move from its current space for 1 round. Creatures that are flying or sinking when the spell takes effect are magically held in place. (moderate enchantment; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 185",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "soulvoid-orb",
    "name": "Soulvoid Orb",
    "category": "wondrous",
    "cost": "700 gp",
    "summary": "When you throw a soulvoid orb against a hard surface, it explodes in a shower of orange sparks that fills a 10-foot-radius burst. Each creature within that area is affected as if by a divest essentia spell (MoI 101). (faint necromancy; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 186",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "sphere-of-awakening",
    "name": "Sphere of Awakening",
    "category": "wondrous",
    "cost": "1,800 gp",
    "summary": "A sphere of awakening allows you to silently rouse your allies from slumber, even if magically created. When you activate the sphere, all allies in a 60-footradius burst are immediately awakened from sleep (whether mundane or magical in origin). In addition, any fatigue or exhaustion affecting you and those allies immediately ends. (moderate abjuration; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 186",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "spider-rod",
    "name": "Spider Rod",
    "category": "wondrous",
    "cost": "15,000 gp",
    "summary": "A spider rod has two different abilities that each function three times per day. Silk Strand: The rod produces an entangling strand of silk as a ranged touch attack (range 100 feet). A target hit by this strand is entangled for 1 minute (Reflex DC 20 negates entanglement, but the creature's speed is still halved for the duration of the effect). (moderate necromancy; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 186",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "spool-of-endless-rope",
    "name": "Spool of Endless Rope",
    "category": "wondrous",
    "cost": "1,400 gp",
    "summary": "A spool of endless rope holds an unlimited amount of the finest silk rope. To use a spool of endless rope, you feed out as little or as much rope as desired, up to a maximum of 500 feet at any one time. When you are finished with the rope, you can simply wind it back onto the spool. (moderate conjuration; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 186",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "stench-stone",
    "name": "Stench Stone",
    "category": "wondrous",
    "cost": "300 gp",
    "summary": "A stench stone nauseates its target and sickens those nearby. The stone must be thrown (range increment 10 feet) or hurled from a sling (using that weapon's normal range increment) as a ranged attack. If the stone strikes its target, it deals no damage but bursts into a cloud of noxious vapor. (faint necromancy; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 186",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "strand-of-acid-pearls",
    "name": "Strand of Acid Pearls",
    "category": "wondrous",
    "cost": "10,700 gp",
    "summary": "Each of the seven pearls on this chain can be detached and thrown up to 50 feet. When a pearl strikes its destination, it explodes into a 20-foot-radius, 20foot-high, cylinder-shaped cloud of acid centered on the end point. This cloud deals acid damage to any creature in the area (Reflex DC 19 half). (moderate conjuration; CL 11th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 187",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "strand-of-lightning",
    "name": "Strand of Lightning",
    "category": "wondrous",
    "cost": "4,350 gp",
    "summary": "Each of the seven coils on this chain can be detached and thrown. When thrown, a coil explodes into a 30-foot line of lightning originating from you. Each creature in the area takes electricity damage based on the size of the coil (Reflex DC 14 half). Each of the four smallest coils deals 3d6 points of damage. (moderate evocation; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 187",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "stunning-spike",
    "name": "Stunning Spike",
    "category": "wondrous",
    "cost": "9,000 gp",
    "summary": "A stunning spike becomes invisible 1 round after you plant it firmly in the ground. Thereafter, as soon as any creature comes within 10 feet of it, the spike bursts into fragments, stunning all creatures in a 20-foot radius for 1 round (Will DC 20 negates). This effect destroys the spike. (strong enchantment; CL 13th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 187",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "summoners-totem",
    "name": "Summoner'S Totem",
    "category": "wondrous",
    "cost": "3,100 gp",
    "summary": "A boon for those who magically conjure animals to aid them in combat, a summoner's totem allows instantaneous enhancement of your summoned allies. When you summon a single animal using a summon nature's ally spell, you can cast another spell targeting the summoned creature as a swift action. (faint conjuration; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 187",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "survival-pouch",
    "name": "Survival Pouch",
    "category": "wondrous",
    "cost": "3,300 gp",
    "summary": "Five times per day, you can reach into a survival pouch and retrieve your choice of one of the following items. You can draw out the same item five times in one day, draw out five different items, or produce any combination of up to five items. Each item lasts for 8 hours or until indicated below, whichever comes first. (moderate conjuration; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 187",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "talisman-of-the-disk",
    "name": "Talisman of the Disk",
    "category": "wondrous",
    "cost": "500 gp",
    "summary": "Activating a talisman of the disk creates a Tenser's floating disk (PH 294). The disk can hold 300 pounds and lasts for up to 3 hours (or until dismissed with another standard action). The disk's maximum range from you is 30 feet. (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 188",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "talisman-of-undead-mastery",
    "name": "Talisman of Undead Mastery",
    "category": "wondrous",
    "cost": "3,000 gp",
    "summary": "A talisman of undead mastery benefits any character capable of either turning or rebuking undead. The talisman has 3 charges, which are renewed each day at dawn. Spending 1 or more charges increases your effective cleric level for the purpose of a single turn or rebuke undead check, which must be made before the end of your turn. (faint necromancy; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 188",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "talisman-of-undying-fortitude",
    "name": "Talisman of Undying Fortitude",
    "category": "wondrous",
    "cost": "8,000 gp",
    "summary": "A talisman of undying fortitude allows you to take on some of the physical qualities of undead. (strong necromancy; CL 15th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 188",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "tanglepatch",
    "name": "Tanglepatch",
    "category": "wondrous",
    "cost": "200 gp",
    "summary": "To use a tanglepatch, you must throw it (it can be thrown up to 50 feet). When it lands, it creates an entangle effect (as the spell) centered on the point of impact, with a duration of 5 rounds. Once activated, a tanglepatch is expended and cannot be used again. (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 188",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "thorn-pouch",
    "name": "Thorn Pouch",
    "category": "wondrous",
    "cost": "4,400 gp",
    "summary": "A thorn pouch allows you to bring forth several types of magical plant effects for offensive and defensive purposes. A pouch has 5 charges, which are renewed each day at dawn. (moderate conjuration; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 188",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "tome-of-ancient-lore",
    "name": "Tome of Ancient Lore",
    "category": "wondrous",
    "cost": "5,500 gp",
    "summary": "A boon to arcane spellcasters of all sorts, a tome of ancient lore contains every conceivable spell. Perusing it for 1 hour gives you a +5 competence bonus on Knowledge (arcana) and Spellcraft checks made that day, provided that you are neutral, neutral good, neutral evil, lawful neutral, or chaotic neutral. Relic item; additional relic power with the proper divine connection (see text). (strong transmutation; CL 20th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 189",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "tome-of-the-stilled-tongue",
    "name": "Tome of the Stilled Tongue",
    "category": "wondrous",
    "cost": "7,500 gp",
    "summary": "A tome of the stilled tongue is a treasure trove of arcane potential. If you are neutral evil, chaotic evil, lawful evil, or neutral, the book reveals full instructions for creating a lich's phylactery and offers 500 blank spell pages that function like those in Boccob's blessed book (DMG 249). Relic item; additional relic power with the proper divine connection (see text). (strong transmutation; CL 20th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 189",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "tome-of-worldly-memory",
    "name": "Tome of Worldly Memory",
    "category": "wondrous",
    "cost": "1,500 gp",
    "summary": "A tome of worldly memory allows you to call upon the secret memories of the world to aid you in unlocking forgotten knowledge. By studying the book for 1 minute, you gain a +5 competence bonus on a single Knowledge check. The tome functions three times per day. (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 190",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "tomebound-eye-of-boccob",
    "name": "Tomebound Eye of Boccob",
    "category": "wondrous",
    "cost": "7,000 gp",
    "summary": "When affixed to a wizard's spellbook, this seal provides a focus for arcane energy. A tomebound eye of Boccob has 3 charges, which are renewed each day at dawn. (faint enchantment; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 190",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "troll-gut-rope",
    "name": "Troll Gut Rope",
    "category": "wondrous",
    "cost": "500 gp",
    "summary": "Once per day, you can command this 50foot rope to grow up to 350 feet in length. Any length beyond the original 50 feet decays to nothingness after 12 hours. If the large knot on one end is ever untied or cut open, the rope's magic is destroyed. (moderate conjuration; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 190",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "truelight-lantern",
    "name": "Truelight Lantern",
    "category": "wondrous",
    "cost": "36,000 gp",
    "summary": "A truelight lantern continually emanates bright light as a continual flame spell. Its true power can be activated by speaking the word “reveal” in Celestial. Once it is activated, a truelight lantern provides bright illumination in a 60-foot cone and shadowy illumination for another 60 feet beyond that. (moderate divination; CL 11th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 190",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "wilding-clasp",
    "name": "Wilding Clasp",
    "category": "wondrous",
    "cost": "4,000 gp",
    "summary": "A wilding clasp can be attached to any item worn on the body. When so worn, a clasp prevents the worn item from melding into your new form when you use wild shape (as long as the item could reasonably be worn by the new form). Thus, the item remains fully functional and can be used normally in your new form. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 4: Tools, p. 190",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  }
];
