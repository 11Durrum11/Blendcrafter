// Dragon Magazine #335 (September 2005) — magic item draft: 13 records.
//  - NINE items from "Bazaar of the Bizarre: Swamp Swag" (Amber E.
//    Scott), pp. 68-70 — the survey estimated ~8 Bazaar items; the
//    article prints nine. Primitive magic of the swamp's lizardfolk
//    masters, framed by a short fiction vignette (digested in
//    reference.md).
//  - TWO songsabers from the sidebar in "Spellcraft: Songsabers of
//    Waterdeep" (Mike Mearls and the Dragon staff), p. 75 — the
//    sidebar prints their prices without the "gp" denomination
//    ("Price 12,000"); the records carry 12,000 gp / 4,000 gp.
//  - TWO bard items from Class Acts "Bardic Magic Items" (William L.
//    Christensen), p. 85 — a column the survey never itemized. The
//    gypsy cloak is a cursed item, staged as printed.
// Every price, aura, CL, and weight line was verified against rendered
// page images (magazine pp. 68, 69, 70, 75, 85); the image governs over
// the OCR stream — it confirms the eggsucker staff's unusual printed
// price/cost (103,922 gp; 76,921 gp + 14,657 XP) and that the star
// tortoise shield's creation line prints NO spells (just Craft Magic
// Arms and Armor), carried as printed.
// ⚠️ APOC FLAGS — see SCREENING.md: the visard of Semuanya raises the
// caster level of summon nature's ally spells (summoning does not work
// in APOC) and the eggsucker staff holds shambler (a creation spell
// producing shambling mounds); both stage as printed, flagged. The
// vivifying bacalao animates a corpse as a lacedon under the activator's
// command — ordinary necromancy; APOC undead house rules apply on top
// at the table, noted in SCREENING.md, not blended into the record.

import type { MagicItemDefinition } from "@/engine/types";

const SRC_BAZAAR = "Dragon Magazine #335 — Bazaar of the Bizarre: Swamp Swag (Amber E. Scott), pp. 68-70";
const SRC_SPELLCRAFT = "Dragon Magazine #335 — Spellcraft: Songsabers of Waterdeep (Mike Mearls and the Dragon staff), p. 75";
const SRC_BARD = "Dragon Magazine #335 — Class Acts: Bardic Magic Items (William L. Christensen), p. 85";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type ItemSeed = Partial<MagicItemDefinition> & Pick<MagicItemDefinition, "id" | "name" | "summary">;

function M(seed: ItemSeed): MagicItemDefinition {
  return {
    category: "wondrous",
    cost: "—",
    source: SRC_BAZAAR,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as MagicItemDefinition;
}

export const DRAGON_335_MAGIC_ITEMS: MagicItemDefinition[] = [
  // ---- Bazaar of the Bizarre: Swamp Swag (9) ----
  M({
    id: "baleful-eye-of-bad-juju",
    name: "Baleful Eye of Bad Juju",
    cost: "15,000 gp",
    summary:
      "Wondrous item (eyepatch) — a multifaceted yellow gemstone sits in the center of this black leather eyepatch; it takes up an eye lenses/goggles slot on the body, and because it covers one of his eyes, its wearer takes a -2 penalty on Spot and Search checks. Whoever wears the baleful eye of bad juju can activate it once per day to gain a gaze attack for 1 round. During that round, every creature within 30 feet of the baleful eye of bad juju's wearer must make a DC 14 Will save or take a -4 penalty on attack rolls, saves, ability checks, and skill checks for one day. These penalties cannot be dispelled, but a break enchantment, limited wish, miracle, remove curse, or wish spell removes them. Once a creature has succumbed to the baleful eye of bad juju, that particular eye cannot affect him again until he breaks the curse. Faint necromancy; CL 5th; Craft Wondrous Item, bestow curse; Weight —.",
  }),
  M({
    id: "black-salt-rod",
    name: "Black Salt Rod",
    category: "rod",
    cost: "40,000 gp",
    summary:
      "Rod — ink-black salt forms the full length of this 1-inch diameter, foot-long rod; it feels rough to the touch, and although its magic construction prevents it from dissolving normally, tasting it confirms it is indeed made of salt. The black salt rod detects unnatural creatures and protects its bearer from them. If a construct or undead creature comes within 60 feet of the rod's wielder, the rod emits an acrid, briny smell and stains its bearer's hand black (the stain disappears when no constructs or undead are in range or if the bearer stops holding the rod). The rod detects disguised, ethereal, hidden, incorporeal, or invisible constructs and undead as well as those in plain sight. If the bearer concentrates for a full round, the rod pinpoints the location of the nearest construct or undead within 60 feet and indicates how many are within range (although it does not reveal their exact locations). The rod can be used in this way three times each day, each use lasting up to 10 minutes; activating this ability is a standard action. When held, the rod protects its bearer with a death ward spell that functions only against attacks that originate from an undead creature's supernatural attacks (and not any abilities they gain from class levels, such as a lich's spellcasting ability). Strong necromancy; CL 13th; Craft Rod, death ward, repulsion, true seeing; Weight 1 lb.",
  }),
  M({
    id: "capote-of-dragonfly-wings",
    name: "Capote of Dragonfly Wings",
    cost: "85,000 gp",
    summary:
      "Wondrous item (cape) — this iridescent cape hangs from the wearer's shoulders and seems formed of thousands of flexible dragonfly wings; it shimmers green, blue, and gold in the light and despite its delicate look is tough as canvas. The wearer of a capote of dragonfly wings benefits from several special abilities. First, he is continually protected by a repel vermin effect (vermin with fewer than 2 HD cannot approach within 10 feet, while vermin with 2 HD or more must make a DC 16 Will save to approach and take 2d6 points of damage in the process). Second, he emulates the quick, precise movements of a dragonfly, gaining a +4 enhancement bonus to Dexterity. Third, if he possesses the ability to fly (whether naturally or magically), his fly speed increases by 5 feet and his maneuverability improves by one rating (as from poor to average) to a maximum of perfect. These bonuses come with a price, however: wind-related effects (both natural and magical, such as from the gust of wind spell) affect the wearer of a capote of dragonfly wings as if he were two size categories smaller. Additionally, a constant soft buzz follows the wearer at all times, giving him a -4 penalty on Move Silently checks. Moderate transmutation; CL 7th; Craft Wondrous Item, cat's grace, fly, repel vermin; Weight 2 lb.",
  }),
  M({
    id: "eggsucker-staff",
    name: "Eggsucker Staff",
    category: "staff",
    cost: "103,922 gp",
    summary:
      "Staff — small squares of eggshell cover this gnarled staff like mosaic tiles and whole eggs bulge out of the staff like tumorous growths; as the staff's wielder uses up charges the eggs soften and wither, as if being sucked hollow, until their shells break and slough off. Despite its strange appearance and unglamorous appellation, the eggsucker staff is actually an item of genesis. It allows use of the following spells: reincarnate (1 charge), animate plants (2 charges), awaken (3 charges), shambler (3 charges). Strong conjuration; CL 17th; Craft Staff, animate plants, awaken, regenerate, reincarnate, shambler; Cost to create 76,921 gp + 14,657 XP (as printed); Weight 4 lb.",
  }),
  M({
    id: "mudwalker-ring",
    name: "Mudwalker Ring",
    category: "ring",
    cost: "28,000 gp",
    summary:
      "Ring — a mudwalker ring looks little like a standard decorative ring, instead resembling a rough, inch-long tube of dried mud that fits over the finger; the mud is forged in a special magical process that renders it hard as steel. A mudwalker ring allows its wearer to move easily in swampy terrain: a person wearing the ring moves through shallow bogs at his standard movement rate and suffers no penalty on Move Silently or Tumble checks. Moving through deep bog squares costs him only 2 squares of movement, he suffers no penalty on Move Silently checks, and he can attempt Tumble checks (although the DC increases by 2). See page 88 of the Dungeon Master's Guide for more information on moving through marsh terrain. Mudwalker rings also grant a +2 competence bonus on Swim checks. Moderate abjuration; CL 7th; Forge Ring, freedom of movement, creator must have 2 ranks in the Survival skill; Weight —.",
  }),
  M({
    id: "shaker-staff-of-the-quondam",
    name: "Shaker Staff of the Quondam",
    category: "weapon",
    cost: "9,600 gp",
    summary:
      "Weapon (quarterstaff) — bone beads festoon the length of this gnarled staff, hanging in clumps or wrapping around it like a snake, rattling and hissing at every move; some creators dye the bone beads bright yellow, red, or blue, or add tiny rodent skulls or glass beads. The beads act as a channel, drawing spiritual essences toward the staff — these are not true ghosts, but echoes of the ancestors of nearby living beings; in the same way that speak with dead calls on the impression of a dead person, the shaker staff of the quondam magnifies the recessive spirits of nearby creatures' progenitors. When the wielder of the staff stands and shakes it menacingly (a standard action), the bone beads slide together and create a loud rattling that fills the area. All allies within a 30-foot-radius burst who can hear the staff's rattling perceive the whispers of long-dead ancestors advising them, offering guidance and encouragement: they receive the effects of a guidance spell every round for 5 consecutive rounds, beginning when the wielder first activates the staff. The multiple guidance effects do not stack, and if a character does not use the competence bonus in a round he loses that round's bonus. The shaker staff of the quondam also functions as a +1/+1 quarterstaff. Faint divination; CL 5th; Craft Magic Arms and Armor, guidance, speak with dead; Weight 4 lb.",
  }),
  M({
    id: "star-tortoise-shield",
    name: "Star Tortoise Shield",
    category: "armor",
    cost: "18,157 gp",
    summary:
      "Armor (shield) — lizardfolk make these large, oval shields out of the tough shells of tortoises; the shields are usually dark green, blue, or black with yellow or red patterns radiating out from the center like a starburst. The bearer of such a shield gains both its mundane defense and also some of the tortoise's natural defenses: a star tortoise shield is a +3 heavy wooden shield that also grants its bearer a +1 natural armor bonus. In addition, it renders its bearer immune to the decapitating ability of a vorpal weapon or similar effects. Moderate abjuration; CL 9th; Craft Magic Arms and Armor (the printed creation line lists no spells); Weight 12 lb.",
  }),
  M({
    id: "visard-of-semuanya",
    name: "Visard of Semuanya",
    cost: "12,600 gp",
    summary:
      "Wondrous item (mask) — dried streaks of colored mud and patches of cultivated moss adorn this mask; it sits most comfortably on the broad snouts of lizardfolk, but other humanoids can also wear the visard. Lizardfolk shamans create these masks to venerate and emulate their creator, the dualistic deity Semuanya (see page 54 of the issue). The wearer of such a mask suffers a loss of intellect — which shamans consider a tie to the ancient, instinct-driven ways — but gains bonuses to his nature-based abilities: the visard of Semuanya imposes a -2 penalty on all Intelligence checks and Intelligence-based skill checks; for this steep price it grants a +4 competence bonus on Knowledge (nature) and Spellcraft checks (the aforementioned penalty offsets this, resulting in a net +2 on those two skills) and a +2 competence bonus on Survival checks. In addition, the wearer of the mask casts all summon nature's ally spells at +1 caster level. Once per day, as a standard action, the visard's wearer can call on the power of Semuanya to aid him: his mind expands and emulates the dual nature of the lizardfolk deity, and for 3 minutes he gains a +4 enhancement bonus to Wisdom and, if he must attempt a Will save, he may roll twice and take the better of the two rolls. He may only reroll a Will save once per day. Moderate transmutation; CL 5th; Craft Wondrous Item, bestow curse, fox's cunning, owl's wisdom; Weight 1 lb.",
  }),
  M({
    id: "vivifying-bacalao",
    name: "Vivifying Bacalao",
    cost: "1,150 gp",
    summary:
      "Wondrous item (enchanted dried fish) — lizardfolk shamans living in especially swampy areas often create these enchanted dried fish and send them out with scouting parties, the leaders of such groups sometimes carrying whole bunches of these. The bacalao appear as flat, silvery fish with black gems for eyes, their scales intact and stretched tightly over their prominent bones. A vivifying bacalao does nothing until its bearer throws it into the water while uttering a command word; at that time it animates and swims rapidly (swim speed 50 feet) to the nearest corpse within 100 feet. (If there is no corpse within 100 feet or within 5 feet of water the bacalao does not activate and can be used again.) In the round after the bacalao reaches its target the corpse animates as a lacedon (an aquatic ghoul, see page 119 of the Monster Manual) and devours the fish. The lacedon obeys the commands of the character who activated the vivifying bacalao. The lacedon serves its animator for 24 hours or until destroyed, after which it dissolves into a pile of fetid sludge. Moderate necromancy; CL 11th; Craft Wondrous Item, create undead; Weight —.",
  }),
  // ---- Spellcraft sidebar: Songsabers (2) ----
  M({
    id: "songsaber",
    name: "Songsaber",
    category: "weapon",
    source: SRC_SPELLCRAFT,
    cost: "12,000 gp",
    summary:
      "Weapon (wooden practice weapon) — aside from being a group of particularly reckless students at New Olamn bard college, songsabers are also rare magic weapons that grow in power as their bard wielders' skills increase. To most characters, songsabers are nothing more than wooden cutlasses, longswords, rapiers, or sabers (those using wooden weapons take a -2 penalty on attack rolls and such weapons only deal nonlethal damage); in the hands of a bard, however, these weapons become far more potent. Constructed as educational tools, not actual weapons, songsabers are repositories of bardic lore: upon the blades of these artfully crafted practice weapons run various complex runes, and when wielded by a bard, one rune glows brightly for every spell level the bard is capable of casting. These glowing runes (regardless of number) shed shadowy illumination to a radius of 5 feet. A bard who studies one of a songsaber's glowing runes for a full day and succeeds at a Spellcraft check (DC 15 + 1 per spell level of the spell held by the rune) reveals a spell from the bard spell list of a level he is capable of casting; only the spells contained within glowing runes can be revealed. If a bard wielder chooses, he may replace a spell he knows of the same level with the newly revealed spell; this replacement is permanent and the old spell known is lost (although it can be relearned normally). The spells held within a songsaber's runes are fixed at the time of a songsaber's creation and do not change, regardless of its wielder — a sample songsaber might hold dancing lights, expeditious retreat, tune of the dancing weapon, ever armed, rainbow pattern, greater heroism, and mass cat's grace (one from each spell level, 0 to 6th). Moderate (all schools of the spells held within the songsaber, most commonly conjuration, evocation, illusion, and transmutation); CL 16th; Craft Magic Arms and Armor, creator must be a bard, seven spells of differing levels from the bard spell list to be held by the songsaber; Weight 4 lb.",
  }),
  M({
    id: "lesser-songsaber",
    name: "Lesser Songsaber",
    category: "weapon",
    source: SRC_SPELLCRAFT,
    cost: "4,000 gp",
    summary:
      "Weapon (wooden practice weapon) — lesser songsabers are the same as normal songsabers (see the songsaber entry) but only hold spells from 0 to 3rd level: one rune glows for each spell level from 0 to 3rd that the bard wielder is capable of casting, and a day's study of a glowing rune (Spellcraft DC 15 + 1 per spell level of the held spell) can permanently replace a known spell of the same level with the revealed bard spell, as for a normal songsaber. Faint (all schools of the spells held within the songsaber, most commonly conjuration, evocation, illusion, and transmutation); CL 7th; Craft Magic Arms and Armor, creator must be a bard, four spells of differing levels from the bard spell list to be held by the lesser songsaber; Weight 4 lb.",
  }),
  // ---- Class Acts (Bard): Bardic Magic Items (2) ----
  M({
    id: "bamboo-flute",
    name: "Bamboo Flute",
    source: SRC_BARD,
    cost: "9,000 gp",
    summary:
      "Wondrous item (instrument) — as the name implies, bamboo flutes are crafted from bamboo, many bearing simple carvings of apple blossoms and other flowers with lightly painted smatterings of color, while the majority of the flute remains untouched so that the simplistic beauty of the natural bamboo reed remains apparent. The monks of the White Cloud Monastery use bamboo flutes as teaching tools, believing that a great deal of wisdom comes from music. Using a bamboo flute requires a DC 15 Perform (wind instruments) check made as a standard action. Once per day, the flute's user can cast owl's wisdom. Three times per day, its user can cast calm emotions (a DC 13 Will save negates this effect). Faint enchantment and transmutation; CL 3rd; Craft Wondrous Item, calm emotions, owl's wisdom; Weight 1 lb.",
  }),
  M({
    id: "gypsy-cloak",
    name: "Gypsy Cloak",
    source: SRC_BARD,
    cost: "8,000 gp",
    summary:
      "Wondrous item (cloak, cursed) — made of brightly colored silk or fine cotton thread, gypsy cloaks shimmer in intricate patterns with each movement of their wearers; they are sometimes worn like shawls, manipulated by the wearer in undulating dances to bring about a variety of magical effects. Using a gypsy cloak requires a DC 15 Perform (dance) check made as a standard action; a successful check allows the wearer to cast charm monster (DC 14), daze monster (DC 13), or enthrall (DC 13), each once per day. Using the cloak comes with a price, however: upon donning a gypsy cloak a character must immediately succeed at a DC 15 Will save — success allows the wearer to remove the cloak as normal, but failure activates the cloak's curse, which prevents its wearer from removing it without the use of a remove curse spell (the saving throw must be made every time the cloak is put on, not just the first time). The wearer of a gypsy cloak finds that he cannot bear to stay in one place (a small barony, town, or dungeon, for example) for more than a week: should he attempt to do so, he must succeed at a DC 15 Will save every day following the first week spent in a location, and if he fails he must move away from the place in the most efficient way possible (whether running, riding, or teleporting) until he can no longer see the place or he has run to exhaustion (whichever occurs first). He must thereafter attempt a DC 15 Will save whenever he attempts to return to the place in the next week; after a week of being away the wearer can return without difficulty. The wearer cannot be persuaded to return by nonmagical means, and if forcibly detained he becomes panicked until he is able to flee. Moderate enchantment; CL 5th; Craft Wondrous Item, charm monster, charm person, daze monster (note: enthrall is among the cloak's castable spells but not its creation spells — as printed); Weight 2 lb.",
  }),
];
