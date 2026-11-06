import type { EquipmentItem } from "@/engine/types";

// Drow of the Underdark (WotC, D&D 3.5) Chapter 4
// nonmagical equipment, transcribed in full from
// Shaun's own copy: the 7 adventuring gear items of
// Table 4-1 (p. 92; descriptions pp. 91-93), the 7
// alchemical items of Table 4-2 (p. 93; descriptions
// pp. 93-94), the 6 poisons of Table 4-3 (p. 94), and
// the 5 magic-infused poisons of Table 4-4 (p. 94;
// descriptions pp. 94-95). Tables 4-3 and 4-4 were
// verified against a rendered page because the text
// layer interleaves their damage columns. Poisons are
// equipment records with category "poison" and the
// full printed stat line (type, Fortitude DC, initial
// and secondary damage) in the notes, following the
// brief's instruction that every priced poison is a
// record; magic-infused poisons are likewise mundane
// equipment records here because the book prices and
// crafts them as poisons (their spell-infusion rules
// are carried in the notes). Notes are short
// mechanical paraphrases in our own words; no book
// prose is reproduced. One value is transcribed
// exactly as printed: psychotropic rot's secondary
// damage reads "3d18 hp" in Table 4-3 — an apparent
// misprint in the book itself, flagged on the record.

const DOTU = "Drow of the Underdark";
const DOTU_PATH = "library-staging/books/drow-of-the-underdark.pdf";
const CH4 = `${DOTU} — Chapter 4: Drow Equipment`;

export const DOTU_EQUIPMENT: EquipmentItem[] = [
  // ---- Adventuring gear (Table 4-1, p. 92; descriptions pp. 91-93) ----
  {
    id: "breathing-hood",
    name: "Breathing Hood",
    category: "gear",
    cost: "70 gp",
    weight: "5 lb.",
    notes: "A hood of flexible lizard hide that seals over the head, chest, and upper back, with two glass lenses (often replaced with sundark goggles or cinnabar eye cusps) and two long filtered breathing tubes that trail on the ground behind the wearer, drawing air up from ground level and filtering it several times. Provides a +8 circumstance bonus on saves against all inhaled poisons, whether from attacks, spells, or traps. See Chapter 6, p. 159, for the air-quality rules it interacts with.",
    source: `${CH4} (p. 91)`,
    sourceUrl: DOTU_PATH,
    ruleset: "core",
  },
  {
    id: "cinnabar-eye-cusps",
    name: "Cinnabar Eye Cusps",
    category: "gear",
    cost: "50 gp",
    weight: "—",
    notes: "Pink lenses of polarized crystal worn over the eyes. In an area with an intense concentration of faerzress or other magical radiations of the Underdark (the DM determines which areas qualify), they enhance vision: if you have darkvision or low-light vision, you gain darkvision out to 120 feet; if you have only low-light vision, you gain darkvision out to 240 feet; if you already have darkvision, you gain vision over the entire radiation-infused area equal to normal vision on the surface at twilight. They grant no special vision in areas with only normal Underdark radiation concentrations.",
    source: `${CH4} (pp. 91-92)`,
    sourceUrl: DOTU_PATH,
    ruleset: "core",
  },
  {
    id: "guest-cloak",
    name: "Guest Cloak",
    category: "gear",
    cost: "15 gp",
    weight: "1 lb.",
    notes: "A mundane-seeming cloak of olive or pale green handed to visitors to Erelhei-Cinlu by the drow guards at the entrance to the Vault. Its fabric is suffused with darkvision powder, so it glows brightly when viewed with darkvision, letting the drow easily identify foreign guests; any non-drow caught in the city not wearing one is usually executed.",
    source: `${CH4} (p. 92)`,
    sourceUrl: DOTU_PATH,
    ruleset: "core",
  },
  {
    id: "mister",
    name: "Mister",
    category: "gear",
    cost: "150 gp",
    weight: "—",
    notes: "A small steel hand-held device holding a single dose of poison or a potion. As a standard action that does not provoke attacks of opportunity, deliver the dose in droplet form to any single target within 5 feet as a ranged touch attack. Effective for contact and inhaled poisons; ingested poisons allow the victim a DC 15 Reflex save to avoid contact with the mist; mister-borne injury poisons work only if the victim is wounded and hasn't been treated with a Heal check. A potion delivered this way can be used against an adjacent creature that breathes, automatically on yourself or a willing or disabled subject; oils, salves, and elixirs cannot be delivered. Refilling requires a full-round action and provokes attacks of opportunity.",
    source: `${CH4} (p. 92)`,
    sourceUrl: DOTU_PATH,
    ruleset: "core",
  },
  {
    id: "potion-bladder-dotu",
    name: "Potion Bladder",
    category: "gear",
    cost: "25 gp",
    weight: "1/2 lb.",
    notes: "A bladder crafted from the thin, rubbery organs of cloakers and lurkers, slung over the shoulder and worn on the upper back; it doesn't interfere with backpacks, can be worn under armor, and is easily concealable (+5 circumstance bonus on Sleight of Hand checks to hide). A flexible tube runs under the collar to below the chin. Holds a single dose of one potion; you can drink the potion within as a standard action without provoking attacks of opportunity. Refilling requires a full-round action (siphoning through the straw) and provokes attacks of opportunity.",
    source: `${CH4} (p. 92)`,
    sourceUrl: DOTU_PATH,
    ruleset: "core",
  },
  {
    id: "spider-kit",
    name: "Spider Kit",
    category: "gear",
    cost: "110 gp",
    weight: "5 lb.",
    notes: "Hand, feet, elbow, and knee pads set with hundreds of tiny hooks and smeared with a sticky alchemical substance, plus a harness with four retractable telescoping legs ending in the same sticky pads. The pads provide a +2 circumstance bonus on Climb checks (stacking with climber's kits and spelunker's kits), and the substance grows stickier when wet, so no penalties apply for slipperiness caused by wetness. After a successful Climb check, extend the legs and attach them to the surface as a full-round action to free your hands; detach with a move action and refold with another move action. Climbing with the legs extended forfeits the +2 bonus.",
    source: `${CH4} (pp. 92-93)`,
    sourceUrl: DOTU_PATH,
    ruleset: "core",
  },
  {
    id: "stoneburners",
    name: "Stoneburners",
    category: "gear",
    cost: "5 gp",
    weight: "1 lb.",
    notes: "Special boot tips and gloves with reinforced fingertips holding small receptacles for stoneburn acid. Pressure releases the acid onto the surface pressed; on stone, the tip immediately burns a small divot usable as a hand or foothold. Using stoneburners with stoneburn acid provides a +2 circumstance bonus on Climb checks on stone surfaces (does not stack with climber's kits, spelunker's kits, or spider kits). A single flask of stoneburn acid lets a wearer climb up to 200 feet. Leaves a permanent trail.",
    source: `${CH4} (p. 93)`,
    sourceUrl: DOTU_PATH,
    ruleset: "core",
  },
  // ---- Alchemical items (Table 4-2, p. 93; descriptions pp. 93-94) ----
  {
    id: "bile-droppings",
    name: "Bile Droppings (flask)",
    category: "alchemical gear",
    cost: "50 gp",
    weight: "1 lb.",
    notes: "Thick, viscous fluid distilled from the venomous excreta of certain monstrous spiders. Thrown as a ranged touch attack with a range increment of 10 feet: on a hit, the sticky fluid deals 1d6 points of acid damage in the first round and 1d6 in the second; a full-round action to scrape it off prevents the second round's damage. When the flask breaks open it releases a powerful stench: anyone within 5 feet must succeed on a DC 13 Fortitude save or be sickened for 1 round (the creature actually struck takes a -4 penalty on the save). Created with a DC 15 Craft (alchemy) check.",
    source: `${CH4} (p. 93)`,
    sourceUrl: DOTU_PATH,
    ruleset: "core",
  },
  {
    id: "dwarfblind-stone",
    name: "Dwarfblind Stone",
    category: "alchemical gear",
    cost: "50 gp",
    weight: "1 lb.",
    notes: "A small stone treated to a faint purple sheen. Thrown as a ranged touch attack with a range increment of 20 feet, it releases a burst of violet light on striking a hard surface, illuminating a 10-foot radius for an instant and interfering with darkvision: creatures in the burst must make a DC 15 Reflex save or lose their darkvision for 10 minutes. No effect on normal or low-light vision. Can be aimed at a 5-foot square (AC 5); on a miss, use the splash-weapon rules to determine where it lands. Created with a DC 25 Craft (alchemy) check.",
    source: `${CH4} (p. 93)`,
    sourceUrl: DOTU_PATH,
    ruleset: "core",
  },
  {
    id: "shedden",
    name: "Shedden (jar)",
    category: "alchemical gear",
    cost: "75 gp",
    weight: "1/2 lb.",
    notes: "Gray paste brewed from monstrous spider exoskeletons ground with silk-based oils and reagents. Spread on exposed flesh (1 minute to apply to the whole body), it temporarily hardens the skin, granting a +1 bonus to natural armor for 2 minutes, stacking with other natural armor. Created with a DC 20 Craft (alchemy) check. Stronger versions exist at additional cost per the table footnote: +2 natural armor 200 gp, +3 500 gp, +4 1,000 gp, +5 2,000 gp, each additional point raising the Craft DC by 4.",
    source: `${CH4} (p. 93)`,
    sourceUrl: DOTU_PATH,
    ruleset: "core",
  },
  {
    id: "spelunkers-oil",
    name: "Spelunker's Oil (flask)",
    category: "alchemical gear",
    cost: "15 gp",
    weight: "1 lb.",
    notes: "Clear, slick substance derived from several types of slimes and certain mineral oils. As a full-round action, apply a flask to your body to gain a +2 alchemical bonus on Escape Artist checks; while the oil is effective it bestows a -5 penalty on Climb checks. Created with a DC 20 Craft (alchemy) check.",
    source: `${CH4} (p. 93)`,
    sourceUrl: DOTU_PATH,
    ruleset: "core",
  },
  {
    id: "stoneburn-acid",
    name: "Stoneburn Acid (flask)",
    category: "alchemical gear",
    cost: "10 gp",
    weight: "1 lb.",
    notes: "A weaker form of alchemist's mineral acid that harms only stone and other minerals. Not effective as a splash weapon — it requires contact and pressure to fully dissolve the exposed material, otherwise only making small pocks. Applied with pressure against rock or other minerals, it ignores hardness and deals 2d6 points of damage almost instantly, after which the acid becomes inert; useful for digging small divots or small openings in very thin walls, and works best with stoneburners. Created with a DC 22 Craft (alchemy) check.",
    source: `${CH4} (pp. 93-94)`,
    sourceUrl: DOTU_PATH,
    ruleset: "core",
  },
  {
    id: "vilegrip",
    name: "Vilegrip (vial)",
    category: "alchemical gear",
    cost: "50 gp",
    weight: "—",
    notes: "A misty substance that enhances the adhesive qualities of a web. A single vial fills a 10-foot cube in a single round; all webs in the area become stickier and stronger, increasing the DC to avoid or break free by 2 for 1 hour. Also usable on webs created by a web spell. Created with a DC 25 Craft (alchemy) check.",
    source: `${CH4} (p. 94)`,
    sourceUrl: DOTU_PATH,
    ruleset: "core",
  },
  // ---- Poisons (Table 4-3, p. 94; descriptions p. 94) ----
  {
    id: "darklight-brew",
    name: "Darklight Brew",
    category: "poison",
    cost: "1,500 gp",
    weight: "—",
    notes: "Poison (Table 4-3): Injury, Fortitude DC 23; initial damage 2d6 Con + 1d6 Str; secondary damage blinded (the blindness lasts for 1 hour). Made by powdering darklight ore and cutting it with a mild acid; the ore's radiation becomes acute once introduced into the bloodstream. Craft DC 28 Craft (poisonmaking).",
    source: `${CH4} (p. 94)`,
    sourceUrl: DOTU_PATH,
    ruleset: "core",
  },
  {
    id: "fish-glue",
    name: "Fish Glue",
    category: "poison",
    cost: "100 gp",
    weight: "—",
    notes: "Poison (Table 4-3): Injury, Fortitude DC 14; initial damage 1d4 Dex; secondary damage sickened (the sickness lasts for 1 hour). Made from the body oil of captured kuo-toas; named for the rigidity it causes in the victim's joints and its characteristic fishy smell. Craft DC 18 Craft (poisonmaking).",
    source: `${CH4} (p. 94)`,
    sourceUrl: DOTU_PATH,
    ruleset: "core",
  },
  {
    id: "illithid-mindscorch",
    name: "Illithid Mindscorch",
    category: "poison",
    cost: "1,000 gp",
    weight: "—",
    notes: "Poison (Table 4-3): Inhaled, Fortitude DC 22; initial damage 1d6 Int; secondary damage 1d6 Int. Distilled from the brain matter of recently slain illithids; a liquid in basic form but ineffective unless reduced to an aerosol and absorbed through the nasal passages. Craft DC 27 Craft (poisonmaking), reduced by 5 if the creator has ranks in Knowledge (psionics) or Psicraft or has levels in a psionic character class. Illithids immediately try to devour the brains of anyone caught with this substance.",
    source: `${CH4} (p. 94)`,
    sourceUrl: DOTU_PATH,
    ruleset: "core",
  },
  {
    id: "psychotropic-rot",
    name: "Psychotropic Rot",
    category: "poison",
    cost: "125 gp",
    weight: "—",
    notes: "Poison (Table 4-3): Ingested, Fortitude DC 15; initial damage 1d4 Wis; secondary damage printed in Table 4-3 as '3d18 hp' — transcribed exactly as printed; the figure is an apparent misprint in the book (no 18-sided die exists in the game), most plausibly intended as hit point damage. Distilled violet fungus mixed with other chemicals. Craft DC 17 Craft (poisonmaking).",
    source: `${CH4} (p. 94)`,
    sourceUrl: DOTU_PATH,
    ruleset: "core",
  },
  {
    id: "roach-paste",
    name: "Roach Paste",
    category: "poison",
    cost: "50 gp",
    weight: "—",
    notes: "Poison (Table 4-3): Injury, Fortitude DC 12; initial damage nausea (lasts for 1 round); secondary damage disease — the disease it transmits is filth fever (DMG 293). A brown paste made from the crushed bodies of carrion-eating giant roaches, known for its horrendous smell. Craft DC 15 Craft (poisonmaking).",
    source: `${CH4} (p. 94)`,
    sourceUrl: DOTU_PATH,
    ruleset: "core",
  },
  {
    id: "underdark-blight",
    name: "Underdark Blight",
    category: "poison",
    cost: "300 gp",
    weight: "—",
    notes: "Poison (Table 4-3): Contact, Fortitude DC 20; initial damage 1 SR (the victim loses 1 point of spell resistance); secondary damage 1 SR. Lost spell resistance returns at the same rate and by the same means as ability score damage. Made by running a chemical solution over certain rare ores and minerals found in the Underdark. Craft DC 20 Craft (poisonmaking).",
    source: `${CH4} (p. 94)`,
    sourceUrl: DOTU_PATH,
    ruleset: "core",
  },
  // ---- Magic-infused poisons (Table 4-4, p. 94; descriptions pp. 94-95) ----
  {
    id: "the-calling",
    name: "The Calling",
    category: "poison",
    cost: "2,000 gp",
    weight: "—",
    notes: "Magic-infused poison (Table 4-4): Ingested, Fortitude DC 20; initial damage 2d6 Con; secondary damage 2d6 Con. A lumpy black paste magically infused with spider eggs, hidden in food and detectable only with a DC 20 Profession (cook) check. On a failed initial save, a swarm of spiders hatches in the victim's stomach, dealing the initial damage; the swarm is then digested unless the second save also fails, in which case it bursts from the victim's nose and mouth dealing the secondary damage and coalesces as a spider swarm (MM 239) attacking everyone in the area. Magic-infused poisons: immunity to mundane poisons and spell resistance give no protection, but neutralize poison and slow poison work, and a successful dispel magic against a caster level equal to 1/2 the poison's Fortitude save DC removes the effects. Craft DC 28 Craft (poisonmaking) and a summon swarm spell, which the creator must cast.",
    source: `${CH4} (pp. 94-95)`,
    sourceUrl: DOTU_PATH,
    ruleset: "core",
  },
  {
    id: "creeping-nullscourge",
    name: "Creeping Nullscourge",
    category: "poison",
    cost: "1,000 gp",
    weight: "—",
    notes: "Magic-infused poison (Table 4-4): Injury, Fortitude DC 20; initial damage 5 SR (drains 5 points of the target's spell resistance); secondary damage 5 SR. Lost spell resistance returns at the same rate and by the same means as ability score damage. Used during bouts of drow infighting. Magic-infused poisons: immunity to mundane poisons and spell resistance give no protection, but neutralize poison and slow poison work, and dispel magic against a caster level equal to 1/2 the poison's Fortitude save DC removes the effects. Craft DC 25 Craft (poisonmaking) and an assay spell resistance spell (Spell Compendium), which the creator must cast.",
    source: `${CH4} (p. 95)`,
    sourceUrl: DOTU_PATH,
    ruleset: "core",
  },
  {
    id: "slowswarming",
    name: "Slowswarming",
    category: "poison",
    cost: "1,200 gp",
    weight: "—",
    notes: "Magic-infused poison (Table 4-4): Ingested, Fortitude DC 25; initial damage 1d2 Con + 1d6 Cha; secondary damage 1d2 Con. Usually administered to a prisoner over several days; each dose creates a slower, more agonizing biting sensation like swarming spiderbite and disfigures the body with horrific red boils. Used on drow caught in treachery or blasphemy. Magic-infused poisons: immunity to mundane poisons and spell resistance give no protection, but neutralize poison and slow poison work, and dispel magic against a caster level equal to 1/2 the poison's Fortitude save DC removes the effects. Craft DC 21 Craft (poisonmaking) and a poison spell, which the creator must cast.",
    source: `${CH4} (p. 95)`,
    sourceUrl: DOTU_PATH,
    ruleset: "core",
  },
  {
    id: "slow-taint",
    name: "Slow Taint",
    category: "poison",
    cost: "300 gp",
    weight: "—",
    notes: "Magic-infused poison (Table 4-4): Contact, Fortitude DC 15; initial damage 10 ft. (the target's speed is reduced by 10 feet); secondary damage 10 ft. (speed reduced by another 10 feet). The target's speed cannot be reduced below 5 feet, and the effect has a duration of 1 hour. Magic-infused poisons: immunity to mundane poisons and spell resistance give no protection, but neutralize poison and slow poison work, and dispel magic against a caster level equal to 1/2 the poison's Fortitude save DC removes the effects. Craft DC 18 Craft (poisonmaking) and a slow spell, which the creator must cast.",
    source: `${CH4} (p. 95)`,
    sourceUrl: DOTU_PATH,
    ruleset: "core",
  },
  {
    id: "swarming-spiderbite",
    name: "Swarming Spiderbite",
    category: "poison",
    cost: "1,800 gp",
    weight: "—",
    notes: "Magic-infused poison (Table 4-4): Ingested, Fortitude DC 22; initial damage 1d6 Con; secondary damage 2d6 Con. Its effect is like the biting mouths of venomous spiders starting from the extremities and advancing throughout the body; usually taken to ensure an honorable death (or to avoid torture) by drow defeated in battle. Magic-infused poisons: immunity to mundane poisons and spell resistance give no protection, but neutralize poison and slow poison work, and dispel magic against a caster level equal to 1/2 the poison's Fortitude save DC removes the effects. Craft DC 26 Craft (poisonmaking) and a poison spell, which the creator must cast.",
    source: `${CH4} (p. 95)`,
    sourceUrl: DOTU_PATH,
    ruleset: "core",
  },
];
