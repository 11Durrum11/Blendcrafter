import type { EquipmentItem } from "../../engine/types";

// Batch 11b equipment sweep: see REBUILD-NOTES.md.

export const EBERRON_EQUIPMENT: EquipmentItem[] = [
  {
    "id": "boomerang-talenta",
    "name": "Boomerang, Talenta",
    "category": "weapon",
    "cost": "15 gp",
    "weight": "1 lb.",
    "notes": "Exotic ranged weapon; 1d4 bludgeoning, range increment 30 ft. Returns to the thrower on a miss (catch with an attack roll against AC 10). Talenta natives treat it as a martial weapon.",
    "source": "Eberron Campaign Setting, Chapter 6: Adventuring Equipment, p. 120",
    "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf",
    "ruleset": "eberron"
  },
  {
    "id": "boomerang-xendrik",
    "name": "Boomerang, Xen'drik",
    "category": "weapon",
    "cost": "20 gp",
    "weight": "2 lbs.",
    "notes": "Exotic ranged weapon; three-pronged drow hunting boomerang, 1d6 bludgeoning, range increment 20 ft.; returns on a miss like the Talenta boomerang. Xen'drik natives treat it as a martial weapon.",
    "source": "Eberron Campaign Setting, Chapter 6: Adventuring Equipment, p. 120",
    "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf",
    "ruleset": "eberron"
  },
  {
    "id": "leafweave-armor",
    "name": "Leafweave Armor",
    "category": "armor",
    "cost": "750 gp",
    "weight": "15 lbs.",
    "notes": "Light armor woven from alchemically treated bronzewood leaves; max Dex +7, no armor check penalty, 5% arcane spell failure.",
    "acBonus": 2,
    "source": "Eberron Campaign Setting, Chapter 6: Adventuring Equipment, p. 120",
    "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf",
    "ruleset": "eberron"
  },
  {
    "id": "acidic-fire",
    "name": "Acidic Fire (flask)",
    "category": "gear",
    "cost": "30 gp",
    "weight": "1 lb.",
    "notes": "Alchemical splash weapon combining alchemist's fire with strong acid: 1d4 acid and 1d4 fire damage on a direct hit (plus 1d4 acid the following round), 1 point of each to creatures within 5 feet.",
    "source": "Eberron Campaign Setting, Chapter 6: Adventuring Equipment, p. 121",
    "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf",
    "ruleset": "eberron"
  },
  {
    "id": "alchemists-frost",
    "name": "Alchemist's Frost (flask)",
    "category": "gear",
    "cost": "25 gp",
    "weight": "1 lb.",
    "notes": "Functions like alchemist's fire but deals 1d8 cold damage on a direct hit and 1 point of cold damage on a splash; no damage after the initial hit.",
    "source": "Eberron Campaign Setting, Chapter 6: Adventuring Equipment, p. 121",
    "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf",
    "ruleset": "eberron"
  },
  {
    "id": "alchemists-spark",
    "name": "Alchemist's Spark (flask)",
    "category": "gear",
    "cost": "25 gp",
    "weight": "1 lb.",
    "notes": "Two-compartment flask; throwing it mixes the substances into an electrical discharge. Functions like alchemist's fire but deals 1d8 electricity damage on a direct hit and 1 point on a splash.",
    "source": "Eberron Campaign Setting, Chapter 6: Adventuring Equipment, p. 121",
    "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf",
    "ruleset": "eberron"
  },
  {
    "id": "noxious-smokestick",
    "name": "Noxious Smokestick",
    "category": "gear",
    "cost": "80 gp",
    "weight": "0.5 lbs.",
    "notes": "Like a smokestick, but the foul smoke also forces a DC 15 Fortitude save or nausea for 1 round on creatures within it.",
    "source": "Eberron Campaign Setting, Chapter 6: Adventuring Equipment, p. 121",
    "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf",
    "ruleset": "eberron"
  },
  {
    "id": "glyphbook",
    "name": "Glyphbook",
    "category": "tool",
    "cost": "20 gp",
    "weight": "2 lbs.",
    "notes": "Guide to the ancient scripts of Xen'drik; grants a +4 circumstance bonus on Decipher Script checks to read inscriptions in Xen'drik ruins (requires at least 1 rank in Decipher Script).",
    "source": "Eberron Campaign Setting, Chapter 6: Adventuring Equipment, p. 121",
    "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf",
    "ruleset": "eberron"
  },
  {
    "id": "holy-symbol-flametouched-iron",
    "name": "Holy Symbol, Flametouched Iron",
    "category": "gear",
    "cost": "750 gp",
    "weight": "1 lb.",
    "notes": "Holy symbol forged of flametouched iron, a metal mined in Thrane with affinity for good-aligned magic.",
    "source": "Eberron Campaign Setting, Chapter 6: Adventuring Equipment, p. 121",
    "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf",
    "ruleset": "eberron"
  },
  {
    "id": "inquisitives-kit",
    "name": "Inquisitive's Kit",
    "category": "tool",
    "cost": "300 gp",
    "weight": "4 lbs.",
    "notes": "Investigator's kit of lenses, powders, and tools used by Tharashk inquisitives when examining a scene for evidence and trace auras.",
    "source": "Eberron Campaign Setting, Chapter 6: Adventuring Equipment, p. 121",
    "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf",
    "ruleset": "eberron"
  },
  {
    "id": "spellshard-wizards-blank",
    "name": "Spellshard, Wizard's (blank)",
    "category": "gear",
    "cost": "3 gp",
    "weight": "0.5 lbs.",
    "notes": "A blank Eberron dragonshard a wizard can encode with spells in place of a spellbook page (holds one spell).",
    "source": "Eberron Campaign Setting, Chapter 6: Adventuring Equipment, p. 121",
    "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf",
    "ruleset": "eberron"
  },
  {
    "id": "warforged-repair-kit",
    "name": "Warforged Repair Kit",
    "category": "tool",
    "cost": "50 gp",
    "weight": "1 lb.",
    "notes": "Tools and parts for repairing warforged; used with the Craft checks that restore a warforged character's hit points.",
    "source": "Eberron Campaign Setting, Chapter 6: Adventuring Equipment, p. 121",
    "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf",
    "ruleset": "eberron"
  },
  {
    "id": "arcane-signet-ring-ecs",
    "name": "Arcane Signet Ring",
    "category": "gear",
    "cost": "150 gp",
    "weight": "—",
    "notes": "Signet ring bearing the owner's arcane mark, used to seal and authenticate documents across Khorvaire.",
    "source": "Eberron Campaign Setting, Chapter 6: Adventuring Equipment, p. 121",
    "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf",
    "ruleset": "eberron"
  },
  {
    "id": "identification-papers",
    "name": "Identification Papers, Standard",
    "category": "gear",
    "cost": "2 gp",
    "weight": "—",
    "notes": "Notarized papers identifying the bearer, recognized across central Khorvaire.",
    "source": "Eberron Campaign Setting, Chapter 6: Adventuring Equipment, p. 121",
    "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf",
    "ruleset": "eberron"
  },
  {
    "id": "identification-papers-portrait",
    "name": "Identification Papers, with Portrait",
    "category": "gear",
    "cost": "5 gp",
    "weight": "—",
    "notes": "Identification papers that include a portrait of the bearer.",
    "source": "Eberron Campaign Setting, Chapter 6: Adventuring Equipment, p. 121",
    "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf",
    "ruleset": "eberron"
  },
  {
    "id": "letter-of-marque",
    "name": "Letter of Marque",
    "category": "gear",
    "cost": "500 gp",
    "weight": "—",
    "notes": "Bre­land royal papers granting permission to explore and plunder the ruins of Xen'drik; required to sell Xen'drik treasure openly in Breland without fines and forfeiture.",
    "source": "Eberron Campaign Setting, Chapter 6: Adventuring Equipment, p. 121",
    "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf",
    "ruleset": "eberron"
  },
  {
    "id": "traveling-papers",
    "name": "Traveling Papers",
    "category": "gear",
    "cost": "2 sp",
    "weight": "—",
    "notes": "Papers identifying a traveler, their residence, and destination, carried when crossing national borders.",
    "source": "Eberron Campaign Setting, Chapter 6: Adventuring Equipment, p. 121",
    "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf",
    "ruleset": "eberron"
  },
  {
    "id": "soarwood-rowboat",
    "name": "Soarwood Rowboat",
    "category": "gear",
    "cost": "200 gp",
    "weight": "75 lbs.",
    "notes": "Rowboat built of soarwood; moves at twice the speed of a normal vessel of its kind.",
    "source": "Eberron Campaign Setting, Chapter 6: Adventuring Equipment, p. 121",
    "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf",
    "ruleset": "eberron"
  },
  {
    "id": "soarwood-keelboat",
    "name": "Soarwood Keelboat",
    "category": "gear",
    "cost": "12,000 gp",
    "weight": "—",
    "notes": "Keelboat built of soarwood; moves at twice the speed of a normal vessel of its kind. The book prints no weight for the large soarwood vessels; recorded as 0.",
    "source": "Eberron Campaign Setting, Chapter 6: Adventuring Equipment, p. 121",
    "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf",
    "ruleset": "eberron"
  },
  {
    "id": "soarwood-longship",
    "name": "Soarwood Longship",
    "category": "gear",
    "cost": "40,000 gp",
    "weight": "—",
    "notes": "Longship built of soarwood; moves at twice the speed of a normal vessel of its kind. The book prints no weight; recorded as 0.",
    "source": "Eberron Campaign Setting, Chapter 6: Adventuring Equipment, p. 121",
    "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf",
    "ruleset": "eberron"
  },
  {
    "id": "soarwood-sailing-ship",
    "name": "Soarwood Sailing Ship",
    "category": "gear",
    "cost": "40,000 gp",
    "weight": "—",
    "notes": "Sailing ship built of soarwood; moves at twice the speed of a normal vessel of its kind. The book prints no weight; recorded as 0.",
    "source": "Eberron Campaign Setting, Chapter 6: Adventuring Equipment, p. 121",
    "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf",
    "ruleset": "eberron"
  },
  {
    "id": "soarwood-galley",
    "name": "Soarwood Galley",
    "category": "gear",
    "cost": "120,000 gp",
    "weight": "—",
    "notes": "Galley built of soarwood; moves at twice the speed of a normal vessel of its kind. The book prints no weight; recorded as 0.",
    "source": "Eberron Campaign Setting, Chapter 6: Adventuring Equipment, p. 121",
    "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf",
    "ruleset": "eberron"
  },
  {
    "id": "soarwood-warship",
    "name": "Soarwood Warship",
    "category": "gear",
    "cost": "100,000 gp",
    "weight": "—",
    "notes": "Warship built of soarwood; moves at twice the speed of a normal vessel of its kind. The book prints no weight; recorded as 0.",
    "source": "Eberron Campaign Setting, Chapter 6: Adventuring Equipment, p. 121",
    "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf",
    "ruleset": "eberron"
  },
  {
    "id": "lyrandar-airship",
    "name": "Airship (elemental)",
    "category": "gear",
    "cost": "92,000 gp",
    "weight": "—",
    "notes": "Flying vessel propelled by a Huge fire elemental bound into a fiery ring; fly speed about 20 mph (poor maneuverability), crew of 15, carries 30 tons of cargo. The book prints no weight; recorded as 0.",
    "source": "Eberron Campaign Setting, Chapter 10: Magic Items, p. 267",
    "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf",
    "ruleset": "eberron"
  },
  {
    "id": "elemental-galleon",
    "name": "Elemental Galleon",
    "category": "gear",
    "cost": "64,000 gp",
    "weight": "—",
    "notes": "Seagoing vessel propelled by a bound Huge air elemental; speed 20 mph across calm seas, crew of 20, carries 150 tons of cargo. The book prints no weight; recorded as 0.",
    "source": "Eberron Campaign Setting, Chapter 10: Magic Items, p. 267",
    "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf",
    "ruleset": "eberron"
  },
  {
    "id": "lightning-rail-coach",
    "name": "Lightning Rail Coach",
    "category": "gear",
    "cost": "58,000 gp",
    "weight": "—",
    "notes": "Levitating coach that travels along a conduit of conductor stones at about 25 mph, propelled by a bound air elemental; crew of 10, carries 50 tons of cargo or tows passenger and cargo carts. The book prints no weight; recorded as 0.",
    "source": "Eberron Campaign Setting, Chapter 10: Magic Items, p. 267",
    "sourceUrl": "/A POC PC related/2.Alchemy & steampunk flavored material/2.Eberron Campaign Setting.pdf",
    "ruleset": "eberron"
  },
];
