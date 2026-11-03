/**
 * Omni sweep wave 2 (2026-11-02): 40 Alchemical Items (Adamant
 * Entertainment, by Steve Honeywell). The book presents 41 named
 * alchemical items (its own text jokes there are actually 42);
 * separately priced variants — liquid/powder aphrodisiac, normal/
 * improved bottled lethargy, liquid/powder desalinator, and the
 * vanishing ink restorer — are built as separate records at their
 * printed prices, for 45 records total. All are mundane Craft
 * (Alchemy) products, so every record is equipment in the
 * "alchemical gear" category; the book prints no weights, so weight
 * is "—" throughout. None of these names existed in the catalog
 * before this pack, and the book reprints no other book's items,
 * so there are no price conflicts. Prices are the printed costs;
 * notes are mechanical effects in our own words.
 */
import type { EquipmentItem, MagicItemDefinition } from "@/engine/types";

export const ALCH_MAGIC_ITEMS_OMNI: MagicItemDefinition[] = [];

export const ALCH_EQUIPMENT_OMNI: EquipmentItem[] = [
  {
    "id": "acid-neutralizer",
    "name": "Acid Neutralizer",
    "category": "alchemical gear",
    "cost": "25 gp",
    "weight": "—",
    "notes": "A flask of concentrated lye that completely neutralizes up to one gallon of strong acid. Thrown as a grenade-like weapon it deals 1d4 damage for three rounds on a direct hit (1 point of splash damage for one round), and it is itself as dangerous to skin as acid.",
    "source": "40 Alchemical Items (Adamant Entertainment)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "aphrodisiac-liquid",
    "name": "Aphrodisiac (Liquid)",
    "category": "alchemical gear",
    "cost": "100 gp",
    "weight": "—",
    "notes": "A dose slipped into food or drink (Wisdom DC 15 to notice) makes the imbiber more open to suggestion from anyone they would normally find attractive: a –2 circumstance penalty on related Will saves (Fortitude DC 17 negates) for one hour. It does not create attraction where none exists.",
    "source": "40 Alchemical Items (Adamant Entertainment)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "aphrodisiac-powder",
    "name": "Aphrodisiac (Powder)",
    "category": "alchemical gear",
    "cost": "200 gp",
    "weight": "—",
    "notes": "The powdered form of alchemical aphrodisiac, easier to conceal in food and drink (Wisdom DC 20 to notice) but otherwise identical in effect: a –2 circumstance penalty on Will saves involving anyone the victim would normally find attractive (Fortitude DC 17 negates) for one hour.",
    "source": "40 Alchemical Items (Adamant Entertainment)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "body-dye",
    "name": "Body Dye",
    "category": "alchemical gear",
    "cost": "5 gp",
    "weight": "—",
    "notes": "A semi-permanent dye that changes the user's skin color, granting a +2 alchemical bonus on Disguise checks involving skin color. It typically washes off completely in 2–4 weeks and is usually reapplied weekly.",
    "source": "40 Alchemical Items (Adamant Entertainment)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bottled-lethargy",
    "name": "Bottled Lethargy",
    "category": "alchemical gear",
    "cost": "100 gp",
    "weight": "—",
    "notes": "A drink additive (Wisdom DC 10 to notice its metallic taste) that fatigues the imbiber; an already fatigued drinker becomes exhausted, and an exhausted drinker falls unconscious for 10 minutes and wakes exhausted (Fortitude DC 20 negates).",
    "source": "40 Alchemical Items (Adamant Entertainment)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "bottled-lethargy-improved",
    "name": "Bottled Lethargy, Improved",
    "category": "alchemical gear",
    "cost": "150 gp",
    "weight": "—",
    "notes": "A version of bottled lethargy with its scent and taste greatly reduced, raising the Wisdom check to notice it to DC 15. Its fatigue effects are otherwise identical (Fortitude DC 20 negates).",
    "source": "40 Alchemical Items (Adamant Entertainment)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "caltrop-salve",
    "name": "Caltrop Salve",
    "category": "alchemical gear",
    "cost": "2 gp",
    "weight": "—",
    "notes": "A thick green paste applied to a caltrop wound over at least one full round. It restores no hit points, but the victim can move at full speed again; one crock holds five applications.",
    "source": "40 Alchemical Items (Adamant Entertainment)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "cold-fire",
    "name": "Cold Fire",
    "category": "alchemical gear",
    "cost": "100 gp",
    "weight": "—",
    "notes": "A liquid that wreathes whatever it douses in harmless blue flames giving off no heat, for one minute. The user gains a +2 alchemical bonus on Intimidate checks, and enemies who can see the user take a –2 morale penalty on saves, skill checks, and attack rolls (Will DC 15 negates).",
    "source": "40 Alchemical Items (Adamant Entertainment)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "contraceptive-alchemical",
    "name": "Contraceptive",
    "category": "alchemical gear",
    "cost": "50 gp",
    "weight": "—",
    "notes": "A bitter-tasting dose, made in male and female versions and usually mixed with ale or wine. Once imbibed, its protection against conception lasts for a full week.",
    "source": "40 Alchemical Items (Adamant Entertainment)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "de-icer",
    "name": "De-icer",
    "category": "alchemical gear",
    "cost": "1 gp",
    "weight": "—",
    "notes": "A packet of salt-like grains that melts ice on contact, evaporating it completely. One packet melts ice in a 10 ft. radius up to one inch thick, and concentrated use can melt a smaller hole through thicker ice, including a wall of ice.",
    "source": "40 Alchemical Items (Adamant Entertainment)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "deodorizer",
    "name": "Deodorizer",
    "category": "alchemical gear",
    "cost": "25 gp",
    "weight": "—",
    "notes": "A dark red liquid that evaporates on contact with air and removes foul smells from a 30 ft. sphere rather than masking them. It grants a +5 alchemical bonus on saves against stench and sickness effects such as troglodyte stench and stinking cloud, but no benefit against inhaled poisons.",
    "source": "40 Alchemical Items (Adamant Entertainment)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "desalinator-liquid",
    "name": "Desalinator (Liquid)",
    "category": "alchemical gear",
    "cost": "5 sp",
    "weight": "—",
    "notes": "One vial removes most of the salt from a gallon of seawater, leaving drinkable water with a brackish flavor.",
    "source": "40 Alchemical Items (Adamant Entertainment)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "desalinator-powder",
    "name": "Desalinator (Powder)",
    "category": "alchemical gear",
    "cost": "1 gp",
    "weight": "—",
    "notes": "A powdered, more compact form of desalinator with the same effect — one dose treats a gallon of seawater — but the powder is completely ruined if it gets wet.",
    "source": "40 Alchemical Items (Adamant Entertainment)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "endurance-booster",
    "name": "Endurance Booster",
    "category": "alchemical gear",
    "cost": "50 gp",
    "weight": "—",
    "notes": "A vial that grants the drinker the Endurance feat for one hour, after which the drinker is fatigued (or exhausted if already fatigued). Drinking more than one vial in a day forces a Fortitude save (DC 20, +5 per extra vial) to stay conscious.",
    "source": "40 Alchemical Items (Adamant Entertainment)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "energy-boost",
    "name": "Energy Boost",
    "category": "alchemical gear",
    "cost": "50 gp",
    "weight": "—",
    "notes": "A vial that immediately cures fatigue or exhaustion for 10 minutes; a drinker who was neither gains a +2 alchemical bonus to Strength and Dexterity instead. When it wears off the drinker's condition worsens one step (fatigued, exhausted, or unconscious for 10 minutes), and repeated doses stack these side effects.",
    "source": "40 Alchemical Items (Adamant Entertainment)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "evaporating-antitoxin",
    "name": "Evaporating Antitoxin",
    "category": "alchemical gear",
    "cost": "150 gp",
    "weight": "—",
    "notes": "A vial smashed on the ground fills a 15 ft. radius sphere with vapor granting everyone inside a +5 alchemical bonus on saving throws against poison for one hour; smashed within poison gas or fumes it disperses them instead. It can also be drunk, functioning as ordinary antitoxin.",
    "source": "40 Alchemical Items (Adamant Entertainment)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "food-concentrate",
    "name": "Food Concentrate",
    "category": "alchemical gear",
    "cost": "1 gp",
    "weight": "—",
    "notes": "A powder mixed with a pint of water to form a paste holding a full day's nutrients for one Medium creature or two Small creatures. It sustains the eater but does nothing to curb hunger.",
    "source": "40 Alchemical Items (Adamant Entertainment)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "fortifying-oil",
    "name": "Fortifying Oil",
    "category": "alchemical gear",
    "cost": "250 gp",
    "weight": "—",
    "notes": "An oil rubbed on the skin that grants damage reduction 2/— (not stacking with other damage reduction) for one hour. It reeks of rotten meat and is highly toxic if ingested (Fortitude DC 25; 1d8 Constitution initial and secondary damage).",
    "source": "40 Alchemical Items (Adamant Entertainment)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "golem-salve",
    "name": "Golem Salve",
    "category": "alchemical gear",
    "cost": "250 gp",
    "weight": "—",
    "notes": "A cream formulated for one type of golem (flesh, clay, stone, or iron) that repairs 2d8+3 points of damage when applied to a damaged golem of that type. All types cost and are made the same.",
    "source": "40 Alchemical Items (Adamant Entertainment)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "health-restorer",
    "name": "Health Restorer",
    "category": "alchemical gear",
    "cost": "75 gp",
    "weight": "—",
    "notes": "A flask that instantly restores 5 hit points to the imbiber. It is safe once per day; each additional flask in 24 hours forces a Fortitude save (DC 20, +5 per extra flask) or acts as poison dealing 1 Constitution initial and 1d4 Constitution secondary damage.",
    "source": "40 Alchemical Items (Adamant Entertainment)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "hunting-scent",
    "name": "Hunting Scent",
    "category": "alchemical gear",
    "cost": "3 sp",
    "weight": "—",
    "notes": "A liquid mimicking the pheromones of a chosen type of large game animal, granting a +2 alchemical bonus on Survival checks made to locate that game.",
    "source": "40 Alchemical Items (Adamant Entertainment)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "instant-ice",
    "name": "Instant Ice",
    "category": "alchemical gear",
    "cost": "25 gp",
    "weight": "—",
    "notes": "A flask that, shattered on the ground, freezes into a slippery 5 ft. radius ice patch lasting about a minute; crossing it requires a DC 15 Balance check to avoid falling. If ingested it deals 5d6 cold damage (no save, fire resistance does not apply, cold resistance does).",
    "source": "40 Alchemical Items (Adamant Entertainment)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "instant-sobering",
    "name": "Instant Sobering",
    "category": "alchemical gear",
    "cost": "3 gp",
    "weight": "—",
    "notes": "A thin orange liquid (also made as a powder at the same price) that completely removes all alcohol from the imbiber's system over two rounds, with no lasting effects. It does not prevent later intoxication.",
    "source": "40 Alchemical Items (Adamant Entertainment)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "leather-patch",
    "name": "Leather Patch",
    "category": "alchemical gear",
    "cost": "5 sp",
    "weight": "—",
    "notes": "A crock of cream holding 10 applications, each completely repairing a hole, rip, or gash in a leather item. Hardened leather such as studded leather armor takes twice the amount per repair.",
    "source": "40 Alchemical Items (Adamant Entertainment)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "light-bottle",
    "name": "Light Bottle",
    "category": "alchemical gear",
    "cost": "10 gp",
    "weight": "—",
    "notes": "A bottle of layered liquids that, when shaken, mix and glow with torchlight for one hour before separating; a single bottle can be reused indefinitely. Smashed over an invisible creature, a direct hit negates its invisibility for 10 rounds (splash reduces its miss chance to 25% for 10 rounds).",
    "source": "40 Alchemical Items (Adamant Entertainment)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "liquid-courage",
    "name": "Liquid Courage",
    "category": "alchemical gear",
    "cost": "25 gp",
    "weight": "—",
    "notes": "A drink granting a +4 alchemical bonus against all fear effects for one hour, at the cost of a –2 alchemical penalty to Dexterity and Wisdom for the same duration.",
    "source": "40 Alchemical Items (Adamant Entertainment)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "neutralizer-alchemical",
    "name": "Neutralizer",
    "category": "alchemical gear",
    "cost": "100 gp",
    "weight": "—",
    "notes": "A colorless solution poured into one substance to remove virtually all of its taste and smell, raising the DC to detect that foreign substance by 10. It treats a single item and then becomes inert, so it is usually mixed directly into the substance to be hidden.",
    "source": "40 Alchemical Items (Adamant Entertainment)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "plant-killer",
    "name": "Plant Killer",
    "category": "alchemical gear",
    "cost": "25 gp",
    "weight": "—",
    "notes": "A flask covering a 10 ft. square of plants, which then wither and die over several days. Against Plant-type creatures a direct hit deals 2d4 damage and splash deals 1 point. Druids and rangers consider its use anathema.",
    "source": "40 Alchemical Items (Adamant Entertainment)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "quieting-oil",
    "name": "Quieting Oil",
    "category": "alchemical gear",
    "cost": "50 gp",
    "weight": "—",
    "notes": "An oil applied to metal armor that reduces its armor check penalty for Move Silently checks by 2 (minimum 0) for 12 hours, with no effect on other penalties or on shields. One flask holds three applications; application takes one round per point of armor check penalty.",
    "source": "40 Alchemical Items (Adamant Entertainment)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rage-gas",
    "name": "Rage Gas",
    "category": "alchemical gear",
    "cost": "200 gp",
    "weight": "—",
    "notes": "A shattered flask fills a 20 ft. radius with gas; those who fail a DC 20 Fortitude save fly into a berserk rage for 10 rounds, gaining no Strength, Constitution, or fear-save benefits but taking a –2 alchemical penalty to Armor Class and attacking the nearest creature. Antitoxin affects the save DC.",
    "source": "40 Alchemical Items (Adamant Entertainment)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "rust-remover",
    "name": "Rust Remover",
    "category": "alchemical gear",
    "cost": "5 gp",
    "weight": "—",
    "notes": "A copper-colored oil, sold in crocks of five applications, that completely repairs steel or iron items damaged (but not destroyed) by rust, including repairing 1d8+1 points of rust damage to iron golems. It acts as a poison to rust monsters (Fortitude DC 18; 1d6 Dexterity initial and secondary).",
    "source": "40 Alchemical Items (Adamant Entertainment)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "scarring-salve",
    "name": "Scarring Salve",
    "category": "alchemical gear",
    "cost": "5 gp",
    "weight": "—",
    "notes": "A violet lotion; a crock holds 10 applications, and one application per day over 10 consecutive days completely removes a single scar. Worthless fake versions circulate at the same price.",
    "source": "40 Alchemical Items (Adamant Entertainment)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "scent-breaker",
    "name": "Scent Breaker",
    "category": "alchemical gear",
    "cost": "50 gp",
    "weight": "—",
    "notes": "Strongly scented material left on a trail that increases the DC for tracking by scent by 20 (it has no effect on the Track feat). Thrown as a grenade-like weapon, a direct hit forces a DC 20 Fortitude save or the victim is incapacitated by sneezing and choking for 5 rounds.",
    "source": "40 Alchemical Items (Adamant Entertainment)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "smoke-bottle",
    "name": "Smoke Bottle",
    "category": "alchemical gear",
    "cost": "50 gp",
    "weight": "—",
    "notes": "A bottle of air-reactive chemicals. Unstoppered, it fills a 30 ft. cube with vision-obscuring smoke over 10 rounds, lasting 10 minutes; smashed, it fills the same area immediately but the smoke lasts only 10 rounds. The smoke grants 50% cover and makes ranged combat through it impossible.",
    "source": "40 Alchemical Items (Adamant Entertainment)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "stain-remover",
    "name": "Stain Remover",
    "category": "alchemical gear",
    "cost": "5 sp",
    "weight": "—",
    "notes": "A thin blue liquid that removes any stain from cloth; one vial cleans five garments.",
    "source": "40 Alchemical Items (Adamant Entertainment)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "stone-dissolver",
    "name": "Stone Dissolver",
    "category": "alchemical gear",
    "cost": "50 gp",
    "weight": "—",
    "notes": "An opaque white liquid that eats through stone; one vial dissolves 1 cubic foot of stone (about half that against walls or doors, since the thin liquid runs). It is harmless to skin, clothing, and metal.",
    "source": "40 Alchemical Items (Adamant Entertainment)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "stun-gas",
    "name": "Stun Gas",
    "category": "alchemical gear",
    "cost": "200 gp",
    "weight": "—",
    "notes": "A vial smashed on the ground creates a 10 ft. radius sphere of reddish gas for one round that fully obscures vision. Anyone caught inside must make a DC 17 Fortitude save or be stunned for 1d4 rounds.",
    "source": "40 Alchemical Items (Adamant Entertainment)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "sure-grip",
    "name": "Sure Grip",
    "category": "alchemical gear",
    "cost": "10 gp",
    "weight": "—",
    "notes": "A sticky pink goo applied to the hands, granting a +2 alchemical bonus on Climb checks and a +2 alchemical bonus against disarm attempts for one hour. A jar holds five applications; it makes surfaces easier to hold but does not glue items together.",
    "source": "40 Alchemical Items (Adamant Entertainment)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "temporary-adhesive",
    "name": "Temporary Adhesive",
    "category": "alchemical gear",
    "cost": "100 gp",
    "weight": "—",
    "notes": "A thick glue that holds any two surfaces together for three hours, supporting up to 10,000 pounds, before becoming inert and releasing them. Nothing short of universal solvent removes it early.",
    "source": "40 Alchemical Items (Adamant Entertainment)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "uninhibitor",
    "name": "Uninhibitor",
    "category": "alchemical gear",
    "cost": "200 gp",
    "weight": "—",
    "notes": "A clear, tasteless, odorless concoction that deals 1d6 Wisdom damage to the drinker (Fortitude DC 20 negates), loosening inhibitions and lowering Will saves so suggestion effects work more easily. Victims are often mistaken for common drunks.",
    "source": "40 Alchemical Items (Adamant Entertainment)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "vanishing-ink",
    "name": "Vanishing Ink",
    "category": "alchemical gear",
    "cost": "10 gp",
    "weight": "—",
    "notes": "Ink used exactly like normal ink that fades completely once dry, leaving the parchment looking new and smudge-proof. It cannot be used for spellbook ink or scrolls.",
    "source": "40 Alchemical Items (Adamant Entertainment)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "vanishing-ink-restorer",
    "name": "Vanishing Ink Restorer",
    "category": "alchemical gear",
    "cost": "10 gp",
    "weight": "—",
    "notes": "A concoction rubbed onto parchment written with vanishing ink that makes the ink immediately and permanently visible again. It is the only substance that reveals vanishing ink.",
    "source": "40 Alchemical Items (Adamant Entertainment)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "vermin-repellent",
    "name": "Vermin Repellent",
    "category": "alchemical gear",
    "cost": "5 sp",
    "weight": "—",
    "notes": "A yellow-orange paste smeared on skin and clothing that keeps small biting insects and vermin off the wearer for 24 hours; larger vermin must make a DC 13 Fortitude save to approach or bite. Owlbears find the smell tasty and go out of their way to attack wearers.",
    "source": "40 Alchemical Items (Adamant Entertainment)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "water-purifier",
    "name": "Water Purifier",
    "category": "alchemical gear",
    "cost": "1 gp",
    "weight": "—",
    "notes": "A tablet that dissolves over one minute and removes harmful substances and parasites from a gallon of water, also granting a +2 alchemical bonus to resist toxins in the treated water. It does not improve taste and does not desalinate seawater.",
    "source": "40 Alchemical Items (Adamant Entertainment)",
    "sourceUrl": "",
    "ruleset": "core"
  },
  {
    "id": "weapon-oil-alchemical",
    "name": "Weapon Oil",
    "category": "alchemical gear",
    "cost": "5 gp",
    "weight": "—",
    "notes": "A thin black oil applied to a sheathed weapon that lets it glide free, granting the equivalent of the Quick Draw feat for that weapon. One application lasts for five draws of the coated weapon or 24 hours, whichever comes first.",
    "source": "40 Alchemical Items (Adamant Entertainment)",
    "sourceUrl": "",
    "ruleset": "core"
  }
];
