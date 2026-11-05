import type { EquipmentItem } from "@/engine/types";

// Player's Guide to Eberron (Wizards of the Coast, 2006) —
// equipment. Contents: the three specific weapons printed
// with the book's magic items (bloodstone blade and
// nightshard maul, p. 51; twinblade scourge, p. 79 — filed
// here as equipment following the Explorer's Handbook
// pack's house convention for specific weapons); the
// cyrite special material (p. 117, filed as a material
// record per the byeshk precedent); the three Q'barra
// "jungle juice" substances (p. 129); and the three priced
// documents from the Documents section (pp. 38-41) that the
// Eberron Campaign Setting pack didn't already cover
// (identification papers, letter of credit, letter of
// marque, and traveling papers are all already in the
// catalog from the ECS; a royal decree "cannot be
// purchased" and carries no price, and a pardon is issued
// by a government rather than bought, so neither is built
// — see the extraction report). Transcribed from Shaun's
// own copy (text-extracted, 2026-11-05). Notes are short
// mechanical paraphrases in our own words; no book prose
// is reproduced.

const PG = "Player's Guide to Eberron";
const PG_PATH = "/OneDrive/Desktop/DnD-3.5/Supplements/Campaign Settings/Eberron/Player's Guide to Eberron.pdf";

export const PLAYERS_GUIDE_TO_EBERRON_EQUIPMENT: EquipmentItem[] = [
  {
    id: "bloodstone-blade",
    name: "Bloodstone Blade",
    category: "weapon",
    cost: "12,315 gp",
    weight: "4 lb.",
    notes: "A +1 longsword (occasionally made as another kind of weapon) bearing an Eberron dragonshard attuned to the vampiric touch spell. On a successful damaging hit, the wielder may deliver a vampiric touch effect as a free action: the sword holds a vampiric touch spell like a spell storing weapon (only vampiric touch, one spell at a time), and the effect is automatically Empowered even if the caster does not have the Empower Spell feat, at the original caster's level. The dragonshard must first be attuned as described in the Eberron Campaign Setting (p. 265). Strong evocation and necromancy; CL 12th. Construction: Craft Magic Arms and Armor, vampiric touch, creator must be at least a 12th-level caster, 6,315 gp, 480 XP, 12 days.",
    source: `${PG}, p. 51`,
    sourceUrl: PG_PATH,
    ruleset: "eberron",
  },
  {
    id: "nightshard-maul",
    name: "Nightshard Maul",
    category: "weapon",
    cost: "52,305 gp",
    weight: "10 lb.",
    notes: "A +1 greatclub studded with Khyber dragonshards. It deals an extra 1d6 points of damage to creatures that are good or evil, and overcomes damage reduction as if it were both good-aligned and evil-aligned. By clutching the handle and concentrating (a standard action that does not provoke attacks of opportunity), the wielder can use detect thoughts at will (DC 13), become ethereal for 5 rounds once per day (as ethereal jaunt, but the effect can't be ended early), or polymorph (self only) once per day. A good or evil creature takes a -1 penalty on saving throws while carrying the maul. Moderate necromancy and transmutation; CL 7th. Construction: Craft Magic Arms and Armor, 26,305 gp, 2,080 XP, 52 days.",
    source: `${PG}, p. 51`,
    sourceUrl: PG_PATH,
    ruleset: "eberron",
  },
  {
    id: "twinblade-scourge",
    name: "Twinblade Scourge",
    category: "weapon",
    cost: "55,400 gp",
    weight: "12 lb.",
    notes: "A +2 goblinoid bane/+2 keen two-bladed sword, a replica of the weapon of Malleon the Reaver: the goblinoid bane blade is steel, while the keen blade is adamantine. Once per day, the wielder can roar his anger at his opponents to activate a quickened rage effect (as the spell, but with a range of 30 feet) as a swift action. Strong enchantment; CL 5th (as printed). Construction: Craft Magic Arms and Armor, Quicken Spell, keen edge, rage, summon monster I, 29,400 gp, 2,080 XP, 52 days.",
    source: `${PG}, p. 79`,
    sourceUrl: PG_PATH,
    ruleset: "eberron",
  },
  {
    id: "cyrite",
    name: "Cyrite",
    category: "gear",
    cost: "Ammunition +5 gp; armor +500 gp; weapons +250 gp; raw cyrite 10 gp per pound",
    weight: "—",
    notes: "Special material: an 'arcane steel' found in the Mournland, imbued with strange properties on the Day of Mourning. It resembles steel but is slightly darker, with lines of multicolored energy slowly pulsing along its length. It has the same weight, hit points, and hardness as steel. Cyrite weapons count as magic weapons for the purpose of overcoming damage reduction; cyrite armor grants the wearer a +1 resistance bonus on saving throws against spells and spell-like abilities; cyrite shields provide no special benefit. An item made of cyrite must be made primarily of metal — an item without metal parts cannot be made of cyrite — and a cyrite item loses its special properties within an antimagic field. Rumors tell of other forms of cyrite with different properties.",
    source: `${PG}, p. 117`,
    sourceUrl: PG_PATH,
    ruleset: "eberron",
  },
  {
    id: "grayflower-perfume",
    name: "Grayflower Perfume (vial)",
    category: "alchemical gear",
    cost: "100 gp",
    weight: "—",
    notes: "An alchemical perfume distilled from the Q'barra grayflower, whose faint scent masks other scents. Wearing grayflower perfume disguises your scent: creatures with the scent ability have difficulty tracking you or otherwise discerning your presence (+5 to the appropriate DCs). One vial contains enough perfume to function for 2 hours. Creating a vial requires a DC 25 Craft (alchemy) check, and you must be a spellcaster to craft it.",
    source: `${PG}, p. 129`,
    sourceUrl: PG_PATH,
    ruleset: "eberron",
  },
  {
    id: "lodret-leaf",
    name: "Lodret Leaf",
    category: "alchemical gear",
    cost: "75 gp",
    weight: "—",
    notes: "A leaf of the Q'barra lodret plant, treated with an alchemical mixture to provide a potent defense against disease. Chewing a leaf grants a +5 alchemical bonus on Fortitude saving throws against natural diseases; each leaf is tough enough to be chewed for 1 hour. Preparing a lodret leaf requires a DC 25 Craft (alchemy) check, and you must be a spellcaster to prepare one.",
    source: `${PG}, p. 129`,
    sourceUrl: PG_PATH,
    ruleset: "eberron",
  },
  {
    id: "spotted-toadstool-venom",
    name: "Spotted Toadstool Venom",
    category: "alchemical gear",
    cost: "350 gp",
    weight: "—",
    notes: "Poison brewed by the poison dusk lizardfolk of Q'barra from the caps of the spotted toadstool, a violet fungus with sickly white splotches. Injury, Fortitude DC 16, initial damage 1d6 Str, secondary damage 1d6 Con. (Distinct from the Arms and Equipment Guide's striped toadstool, an ingested poison.)",
    source: `${PG}, p. 129`,
    sourceUrl: PG_PATH,
    ruleset: "eberron",
  },
  {
    id: "business-license",
    name: "Business License",
    category: "gear",
    cost: "Less than 1 gp (usually; varies by location and type of business)",
    weight: "—",
    notes: "A simple parchment, issued by a town or city licensing office (or a local magistrate in smaller settlements), that must be displayed somewhere in the place of business. Some governments, such as Breland's, require all business owners to buy one, with cost and difficulty increasing with the value of the business and the danger it poses to nearby people and property; processing can take considerable time.",
    source: `${PG}, pp. 38-41`,
    sourceUrl: PG_PATH,
    ruleset: "eberron",
  },
  {
    id: "letter-of-proxy",
    name: "Letter of Proxy",
    category: "gear",
    cost: "8 gp",
    weight: "—",
    notes: "A document establishing a person's right to act and speak in a political, military, or industrial leader's place at one or more occasions or gatherings. Traditionally drafted by House Sivis on the issuer's personal letterhead, notarized with an arcane mark, and carried in a leather billfold bearing some sign associated with the issuer; it names and physically describes the intended bearer, whose details can be checked against his or her identification papers. A forged letter of proxy costs around 100 gp.",
    source: `${PG}, pp. 38-41`,
    sourceUrl: PG_PATH,
    ruleset: "eberron",
  },
  {
    id: "title-deed",
    name: "Title Deed",
    category: "gear",
    cost: "15 gp, plus any appropriate courier fees",
    weight: "—",
    notes: "A large document, prepared by House Sivis on oversized parchment, proving ownership of buildings, land, airships, and other property of significant size and value: it bears a detailed description of the property (particularly identifying marks or measurements) and the owner, a history of the property's previous ownership, and a pair of arcane marks. Title deeds are not carried by the owner but kept under lock and key in a safe location, and are considered extremely difficult to forge. Deeds are issued by national governments, sometimes through local or regional offices and sometimes by courier from the national capital.",
    source: `${PG}, pp. 38-41`,
    sourceUrl: PG_PATH,
    ruleset: "eberron",
  },
];
