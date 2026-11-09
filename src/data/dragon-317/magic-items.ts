import type { MagicItemDefinition } from "@/engine/types";

// STAGING DRAFT — Dragon Magazine #317 pack (library-staging/packs/dragon-magazine/issue-317)
// The issue's nineteen magic items:
//   * "Magic's High Note" by S. Deniz Bucak (pp. 58–61): nine
//     magical musical instruments — AUTONOMOUS HARP, SHELL OF
//     AMPLIFICATION, DRUM OF THE MARCH, VENTRILOQUIST'S MOUTHPIECE,
//     CHROMATIC FLUTE, FLUTE OF SHRIEKING (cursed), SNAKE CHARMER
//     (an instrument enchantment, staged as an item record in the
//     wondrous vein), HORN OF THE PLANES, and the ORGAN OF SOULS
//     (minor artifact, no price as printed).
//   * "Silicon Sorcery" by James Jacobs (pp. 70–75): ten D&D Heroes
//     items — ANCESTRAL WEAPON (minor artifact; its power table was
//     read off the printed page image in full), RAISE DEAD AMULET,
//     RING OF ACCURACY, RING OF MEDITATION, TORDEK'S METRIC, ROD OF
//     DESTRUCTION, ROD OF MIRACLES, SOUL ELIXIRS (minor artifacts;
//     one record for the family of eight varieties), SOUL SHARD
//     (minor artifact), and WARP STONE.
//     OVERLAP: a rod of destruction already exists in the catalog
//     from Bastion Press's Spells & Magic — a completely different
//     item (a disintegrating mace-rod) — so the magazine's
//     single-use negative-energy rod stages suffixed -317 and both
//     records stand. The rod's damage (4d8+20) and save DC (22) were
//     read off the printed page image; the magazine OCR garbles
//     both. Ring of Accuracy's price (75,000 gp) and caster level
//     likewise come from the page image.
//     "Tordek's Metric" is the name as printed (verified on the
//     page image; the name is odd but both the OCR and the printed
//     page read the same — see MANIFEST.md).
// No other id in this file collides with the catalog (grep of
// src/data, both id styles, 2026-11-09). Summaries are faithful
// mechanical paraphrases in our own words, carrying each item's
// aura, caster level, creation prerequisites, price, and weight as
// printed; no magazine prose is reproduced.

const DM317 = "Dragon Magazine #317";
const DM317_PATH = "https://archive.org/download/DragonMagazine260_201801/DragonMagazine317_djvu.txt";

export const DRAGON_317_MAGIC_ITEMS: MagicItemDefinition[] = [
  {
    id: "autonomous-harp",
    name: "Autonomous Harp",
    category: "wondrous",
    cost: "6,250 gp",
    summary: "A masterwork harp (wood plated with gold, with four clawed legs) that is a construct with statistics identical to a Medium animated object made of wood. It follows the commands of its creator or those the creator designates, and can be commanded to play itself as a free action, providing a +2 circumstance bonus on Perform checks made within 20 feet that would benefit from musical accompaniment. Moderate transmutation; CL 11th; Craft Wondrous Item, Perform (strings) 5 ranks, animate objects. Weight 40 lb.",
    source: DM317,
    sourceUrl: DM317_PATH,
    ruleset: "core",
  },
  {
    id: "shell-of-amplification",
    name: "Shell of Amplification",
    category: "wondrous",
    cost: "7,000 gp",
    summary: "A 7-inch conch shell. On the command word, sounds made near the hole become audible and clear to all creatures who can hear within a 200-foot-radius spread; the shell negates negative circumstance modifiers to Perform checks from noise or poor acoustics and lets a speaker or singer be heard clearly even amid calamity. A bard using fascinate through the shell increases its range to a 200-foot-radius spread and negates the need for the creature to see the bard or the bard to see the creature; allies the bard sees and designates can be considered immune to his fascinate. Moderate transmutation; CL 7th; Craft Wondrous Item, message. Weight 1 lb.",
    source: DM317,
    sourceUrl: DM317_PATH,
    ruleset: "core",
  },
  {
    id: "drum-of-the-march",
    name: "Drum of the March",
    category: "wondrous",
    cost: "10,000 gp",
    summary: "A masterwork wooden drum about 3 feet in diameter. The Perform check of a character playing it can be substituted for the Constitution check of creatures making a forced march; a creature marching longer than 8 hours must be within 60 feet of the performer when required to make the check to benefit. Faint transmutation; CL 3rd; Craft Wondrous Item, expeditious retreat. Weight 5 lb.",
    source: DM317,
    sourceUrl: DM317_PATH,
    ruleset: "core",
  },
  {
    id: "ventriloquists-mouthpiece",
    name: "Ventriloquist's Mouthpiece",
    category: "wondrous",
    cost: "6,000 gp",
    summary: "A small golden tube about 1 inch long that fits under the tongue and can be placed between the teeth (mouth closed) as a free action. It allows the performer to cast his voice as per the ventriloquism spell, at will as a free action. Faint illusion; CL 3rd; Craft Wondrous Item, ventriloquism. Weight —.",
    source: DM317,
    sourceUrl: DM317_PATH,
    ruleset: "core",
  },
  {
    id: "chromatic-flute",
    name: "Chromatic Flute",
    category: "wondrous",
    cost: "46,500 gp",
    summary: "A masterwork flute of precious metal inscribed with arcane runes. When played, illusory abstract images flow behind the bard, providing a +2 circumstance bonus on Perform checks with the flute. Additionally, as a standard action the player can attempt to make the flute cast illusion spells via a Perform check: DC 10 silent image, DC 15 minor image, DC 20 major image (this check does not benefit from the +2 bonus). Moderate illusion; CL 7th; Craft Wondrous Item, major image, minor image, silent image. Weight 1 lb.",
    source: DM317,
    sourceUrl: DM317_PATH,
    ruleset: "core",
  },
  {
    id: "flute-of-shrieking",
    name: "Flute of Shrieking",
    category: "wondrous",
    cost: "3,500 gp",
    summary: "Cursed item. A flute of shrieking looks exactly like a chromatic flute, including its magical aura (an identify spell or more powerful magic reveals its true nature). One who plays it cannot stop until remove curse, break enchantment, or a similar spell is cast on her; such a character cannot speak or use her hands for anything other than playing. Its harsh shrieking is clearly audible up to 200 feet, making quiet movement impossible; all Perform checks with it take a −15 circumstance penalty, and everyone within 30 feet who can hear it suffers a −2 circumstance penalty on all Concentration checks and Intelligence-based skill checks. Moderate illusion; CL 7th; Craft Wondrous Item, bestow curse, Nystul's magic aura. Weight 1 lb.",
    source: DM317,
    sourceUrl: DM317_PATH,
    ruleset: "core",
  },
  {
    id: "snake-charmer",
    name: "Snake Charmer",
    category: "wondrous",
    cost: "1,000 gp + cost of the masterwork instrument",
    summary: "An enchantment applicable to almost any instrument type: it adds a +10 bonus to Perform checks when the bard using the instrument tries to fascinate reptilian creatures (including creatures of the dragon type). This bonus stacks with the +2 bonus for a masterwork instrument. Faint enchantment; CL 3rd; Craft Wondrous Item, enthrall. Weight by instrument type.",
    source: DM317,
    sourceUrl: DM317_PATH,
    ruleset: "core",
  },
  {
    id: "horn-of-the-planes",
    name: "Horn of the Planes",
    category: "wondrous",
    cost: "55,000 gp",
    summary: "A masterwork platinum trumpet inscribed with the arrangement of the planes. Once per day a performer can attempt to open a gate (as the spell). Learning the proper melody for a particular plane requires 5 ranks in Perform and a successful DC 30 Knowledge (the planes) or bardic knowledge check. Any player may open a gate to a random plane as a standard action with a successful DC 25 Perform check; with the tune for a specific plane, a gate at a random location on that plane takes DC 25 and to a specific location DC 30; because there is a consequence of failure (a result of 25 or more but less than 30 when aiming at a specific location), this Perform check cannot be taken 20 on. Playing the horn without attempting a gate carries a cumulative 1% chance per continuous round of playing that it opens a gate to a random plane (so long as it hasn't already opened a gate that day); the horn can open a gate only once per day. Strong conjuration; CL 17th; Craft Wondrous Item, gate. Weight 5 lb.",
    source: DM317,
    sourceUrl: DM317_PATH,
    ruleset: "core",
  },
  {
    id: "organ-of-souls",
    name: "Organ of Souls",
    category: "artifact",
    cost: "— (minor artifact)",
    summary: "A massive masterwork organ 15–20 feet wide with pipes rising 30 feet or more, keys and stops of yellowed bone, and blackened humanoid skulls inset; blood runs down the iron pipes when played, and it emits a faint sickly green glow equivalent to torchlight. While played: all non-evil characters within 100 feet must make a DC 16 Will save or suffer the effects of a fear spell (a successful save grants immunity to that organ's fear for 1 minute), and a 200-foot-radius spread around the organ is affected by a desecrate spell. A bard playing it does not have to concentrate to use these powers and can still cast spells or use other abilities while playing, so long as they don't require hands. Call a sacrifice (once per week): the performer plays for five days, at least 3 hours each day, succeeding at a DC 20 Perform check each day; the victim is any person known to the performer within 10 miles. Each time the organ is played the victim hears faint organ music no one else can hear (even within silence) and must make a DC 20 Will save; on the fifth occurrence the victim must succeed at a Will save (DC 25 + 1 per previous failed save) or be compelled to travel to the organ as quickly as possible (magically knowing the shortest route, as find the path). If the organ is being played when the target comes within 200 feet (even if the target cannot hear it), the target must lie helpless before the organ's player for the duration of the music and for 1d6 rounds after the performer stops; if the target is killed while so helpless, her soul is drawn into the organ as per soul bind. The only way to rescue a soul trapped in the organ is to destroy the organ. If the victim is out of range or leaves range, the effect fails and the performer is not informed. Possession (once per day): someone playing the organ causes one of the souls imprisoned inside to possess a creature within 200 feet who can hear the organ — a full-round action requiring a successful DC 25 Perform check; the effect is of a magic jar spell cast by a 20th-level caster. The released souls are crazed from captivity and attack the closest person; the DM decides the attributes of the trapped souls. Strong divination, enchantment, and necromancy; CL 20th. Weight 7,000 lb.",
    source: DM317,
    sourceUrl: DM317_PATH,
    ruleset: "core",
  },
  {
    id: "ancestral-weapon",
    name: "Ancestral Weapon",
    category: "artifact",
    cost: "— (minor artifact)",
    summary: "A weapon that gains five levels of power by consuming soul shards (five shards advance it one level; a 5th-level weapon does not absorb shards). Its enhancement bonus to attack rolls equals its power level. By power level — bonus damage / inherent bonus to one ability score / fast healing / magic property (cumulative): 1st: —/—/—/—; 2nd: +1d6/+1/2/keen; 3rd: +2d6/+2/4/defending; 4th: +3d6/+3/6/speed; 5th: +4d6/+4/8/dancing. A 5th-level ancestral weapon is thus a +5 keen defending speed dancing weapon. Bonus damage is of the same damage type the weapon normally deals. The owner selects the ability score for the inherent bonus when the weapon gains its 2nd level; it can never be changed after. Fast healing applies only when the weapon is drawn and wielded. Ancestral weapons have +5 hardness and +30 hit points over normal weapons of their type; one that takes enough damage to be destroyed instead drops one level and is immediately repaired of all damage — a 1st-level weapon so reduced becomes level 0 (a nonmagical masterwork weapon; a single soul shard returns it to 1st level), and if destroyed while at level 0 it is forever lost. In anyone else's hands it functions as a masterwork weapon of its kind (its indestructible nature remains in effect). The owner can always sense the weapon's location as if with locate object and can cast discern location once per day to determine its location. Overwhelming (all schools); CL 25th. Weight varies by weapon.",
    source: DM317,
    sourceUrl: DM317_PATH,
    ruleset: "core",
  },
  {
    id: "raise-dead-amulet",
    name: "Raise Dead Amulet",
    category: "wondrous",
    cost: "7,500 gp",
    summary: "A gold amulet set with a single ruby. As long as it is worn, it automatically casts raise dead on the wearer if he is killed. A raise dead amulet works only once, whereupon it evaporates into a golden mist. Moderate conjuration; CL 9th; Craft Wondrous Item, raise dead.",
    source: DM317,
    sourceUrl: DM317_PATH,
    ruleset: "core",
  },
  {
    id: "ring-of-accuracy",
    name: "Ring of Accuracy",
    category: "ring",
    cost: "75,000 gp",
    summary: "While worn, the critical hit threat range of any weapon the wearer uses is doubled. This does not stack with Improved Critical, the keen edge spell, the keen weapon quality, or similar effects. Strong transmutation; CL 11th; Forge Ring, Improved Critical, keen edge.",
    source: DM317,
    sourceUrl: DM317_PATH,
    ruleset: "core",
  },
  {
    id: "ring-of-meditation",
    name: "Ring of Meditation",
    category: "ring",
    cost: "3,750 gp",
    summary: "This plain ring halves the time a spellcaster requires to prepare spells or meditate for spells. It must be worn continuously for one full day before it grants its power to its wearer. Strong universal; CL 13th; Forge Ring, limited wish.",
    source: DM317,
    sourceUrl: DM317_PATH,
    ruleset: "core",
  },
  {
    id: "tordeks-metric",
    name: "Tordek's Metric",
    category: "ring",
    cost: "22,000 gp",
    summary: "This ring grants a +4 enhancement bonus to Strength and a +2 enhancement bonus to Constitution while worn. Moderate transmutation; CL 8th; Forge Ring, bear's endurance, bull's strength.",
    source: DM317,
    sourceUrl: DM317_PATH,
    ruleset: "core",
  },
  {
    id: "rod-of-destruction-317",
    name: "Rod of Destruction",
    ruleset: "core",
    category: "rod",
    cost: "10,000 gp",
    summary: "A golden rod caked with blood and ashes at one end, usable only once. On the possessor's command, it unleashes a pulse of negative energy upon up to twenty creatures chosen by the wielder in a 75-foot radius; each targeted creature takes 4d8+20 points of damage, and undead are instead healed by the pulse. A successful Will save (DC 22) halves the damage. The rod crumbles into nonmagical sand when used. Strong necromancy; CL 20th; Craft Rod, Enlarge Spell, mass inflict critical wounds. (A different rod of destruction, from Spells & Magic, is already in the catalog; both records stand — see MANIFEST.md.)",
    source: DM317,
    sourceUrl: DM317_PATH,
  },
  {
    id: "rod-of-miracles",
    name: "Rod of Miracles",
    category: "rod",
    cost: "110,000 gp",
    summary: "A rod of smooth, polished adamantine, usable only once. On command it flashes with pure white light, healing as per the mass heal spell all creatures within a 30-foot radius (the owner selects which creatures in range are healed). Any healed creature able to cast spells can immediately recall up to nine spells she had previously cast — prepared again as if not cast, with only one spell per spell level recallable this way; characters who do not prepare spells instead have up to nine spell slots returned. Creatures damaged by the healing effect (such as undead) do not recall spells. The rod melts into nonmagical water when used. Strong conjuration; CL 20th; Craft Rod, miracle or wish, mass heal.",
    source: DM317,
    sourceUrl: DM317_PATH,
    ruleset: "core",
  },
  {
    id: "soul-elixirs",
    name: "Soul Elixirs",
    category: "artifact",
    cost: "— (minor artifacts)",
    summary: "Minor artifacts said to be brewed by deities. A soul elixir's benefits are permanent and stack with all other bonuses, including themselves. The known varieties: Elixir of Bard's Brew (Charisma +1), Elixir of Cat's Grace (Dexterity +1), Elixir of Dragons (Constitution +1), Elixir of Elixirs (all ability scores +1), Elixir of Giant's Touch (Strength +1), Elixir of Intuition (Wisdom +1), Elixir of Knowing (Intelligence +1), Elixir of Vitality (maximum hit points +10). Other varieties undoubtedly exist. Overwhelming transmutation; CL 21st.",
    source: DM317,
    sourceUrl: DM317_PATH,
    ruleset: "core",
  },
  {
    id: "soul-shard",
    name: "Soul Shard",
    category: "artifact",
    cost: "— (minor artifact)",
    summary: "A softly glowing piece of translucent crystal about the size of an adult human's fist, slightly warm to the touch, humming with a soft but pleasant tone; thought by some to be the crystallized thoughts or tears of the gods, though its true origin is a mystery. Any creature that owns an ancestral weapon can touch the weapon to a soul shard as a standard action: the shard flashes with energy and vanishes, its energy instantly absorbed by the weapon. Once an ancestral weapon absorbs five soul shards, it advances to the next level of power; a 5th-level ancestral weapon does not absorb soul shards. Overwhelming transmutation; CL 25th.",
    source: DM317,
    sourceUrl: DM317_PATH,
    ruleset: "core",
  },
  {
    id: "warp-stone",
    name: "Warp Stone",
    category: "wondrous",
    cost: "6,000 gp",
    summary: "A smooth-edged triangular blue crystal the size of an apple, with a strange flaw in the shape of a simple rune inside it. Before use, the stone must be keyed to a location by touching it to a solid surface, where it creates an arcane mark; a warp stone can cast arcane mark in this manner an infinite number of times, but each new mark causes the previous one to vanish. On command, the owner can greater teleport to the location of the stone's current arcane mark; doing so causes the warp stone to crumble to powder. Strong conjuration; CL 13th; Craft Wondrous Item, arcane mark, greater teleport.",
    source: DM317,
    sourceUrl: DM317_PATH,
    ruleset: "core",
  },
];
