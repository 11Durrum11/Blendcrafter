// Dragon Magazine #334 (August 2005) — magic item draft: 21 records.
// THIRTEEN martial items — "Bazaar of the Bizarre: Arsenal of the War
// Mages" (Scott Noel), pp. 70-72. FOUR wondrous flasks — "The Fires of
// Alchemy" (Paul Leach), p. 51. FOUR magic brews — "Drunkards &
// Flagons" (Evan Dicken), pp. 58-59, crafted like other magic items
// with prices per use; DragonDex's magic-item index for this issue
// lists exactly these 21 items (the two Bazaar caltrops variants, the
// cavalry gear, the four flasks, and the four brews included).
// Every price, aura, CL, and weight line was verified against rendered
// page images (magazine pp. 51, 57-59, 70-72); the image governs over
// the OCR stream — it corrects the OCR in one place: the Scout's
// Journal construction line reads "Cost 1,025 gp + 78 XP."
// ⚠️ APOC FLAG — see SCREENING.md: the quiver of the north wind houses
// an extradimensional space, and extra-dimensional magic is dead in
// APOC. The item stages exactly as printed, flagged on the record,
// per the standing precedent (such items are never silently altered).
// One print quirk: the sentry's eye's body text once calls the item
// "a scout's eye"; the heading and construction line govern.

import type { MagicItemDefinition } from "@/engine/types";

const SRC_BAZAAR = "Dragon Magazine #334 — Bazaar of the Bizarre: Arsenal of the War Mages (Scott Noel), pp. 70-72";
const SRC_FIRES = "Dragon Magazine #334 — The Fires of Alchemy (Paul Leach), p. 51";
const SRC_BREWS = "Dragon Magazine #334 — Drunkards & Flagons (Evan Dicken), pp. 58-59";
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

const FLASK_FRAME =
  "Wondrous flask of magical alchemist's fire: the flask is treated exactly as alchemist's fire except as noted here. The creator must have 5 ranks in Craft (alchemy).";

export const DRAGON_334_MAGIC_ITEMS: MagicItemDefinition[] = [
  // ---- Bazaar of the Bizarre: Arsenal of the War Mages (13) ----
  M({
    id: "caltrops-of-the-captain",
    name: "Caltrops of the Captain",
    cost: "1,000 gp",
    summary:
      "When placed on the ground and its command word is spoken, one of these glass caltrops multiplies to cover a 20-foot radius. These magic caltrops act like normal caltrops for the purpose of how creatures interact with them (see page 126 of the Player's Handbook), but rather than dealing 1 point of damage and reducing a creature's speed when stepped on, a square of caltrops of the captain explodes to deal 2d6 points of fire damage to all creatures within the square of the exploding caltrop (DC 14 Reflex save for half damage). Once the caltrops in a square explode none remain in that square and it is safe to walk through normally. Once activated, the caltrops remain for 2 hours before turning to dust. Faint evocation; CL 5th; Craft Wondrous Item, fireball; Weight —.",
  }),
  M({
    id: "caltrops-of-the-general",
    name: "Caltrops of the General",
    cost: "4,000 gp",
    summary:
      "Similar to the caltrops of the captain, caltrops of the general cover a larger area and deal more damage. When placed on the ground and its command word is spoken, one of these lead caltrops multiplies to cover a 30-foot radius. These magic caltrops act like normal caltrops for the purpose of how creatures interact with them (see page 126 of the Player's Handbook), but rather than dealing 1 point of damage and reducing a creature's speed when stepped on, a square of caltrops of the general explodes to deal 4d6 points of fire damage to all creatures within the square of the exploding caltrop (DC 14 Reflex save for half damage). Once the caltrops in a square explode none remain in that square and it is safe to walk through normally. Once activated, the caltrops remain for 2 hours before turning to dust. Moderate evocation; CL 10th; Craft Wondrous Item, fireball; Weight —.",
  }),
  M({
    id: "caltrops-of-the-scout",
    name: "Caltrops of the Scout",
    cost: "2,000 gp",
    summary:
      "When placed on the ground and its command word is spoken, one of these cold iron caltrops multiplies to cover a 10-foot radius. These magic caltrops act like normal caltrops for the purpose of how creatures interact with them (see page 126 of the Player's Handbook) and how they reduce the movement of creatures affected by them. Caltrops of the scout act as +1 cold iron weapons, however, giving them a +1 attack bonus and allowing them to overcome damage reduction; in addition, they deal 1d3+1 points of damage (instead of 1 point of damage). Once activated, the caltrops remain for 2 hours (even after they affect a creature) before turning to dust. Moderate transmutation; CL 9th; Craft Magic Arms and Armor; Weight —.",
  }),
  M({
    id: "captains-standard",
    name: "Captain's Standard",
    cost: "7,600 gp",
    summary:
      "These simple banners typically hang from the shafts of longspears. When raised in combat and the command word spoken, a captain's standard radiates an aura of courage that grants allied creatures within a 30-foot radius a +2 morale bonus on attack and weapon damage rolls and a +4 morale bonus on saving throws made to resist fear effects. If the standard bearer uses the weapon the captain's standard is attached to in melee the effect is broken; the standard bearer can fight with a weapon in his other hand, incurring the standard penalties for fighting with two weapons. A captain's standard can be used once per day; its effect lasts for 1 minute or until it is lowered. Moderate enchantment; CL 6th; Craft Wondrous Item, divine favor, remove fear; Weight 1 lb.",
  }),
  M({
    id: "cavalrymans-bridle",
    name: "Cavalryman's Bridle",
    cost: "10,000 gp",
    summary:
      "A cavalryman's bridle allows the mount to move through any sort of undergrowth (such as natural thorns, briars, overgrown areas, and similar terrains) at its normal speed, without taking damage or suffering any other impairment; magically manipulated thorns, briars, and overgrown areas still affect it. In addition, the mount leaves no trail in natural surroundings and cannot be tracked; its rider may choose for the mount to leave a trail if so desired. The mount must be wearing light or no barding to gain these benefits. Moderate transmutation; CL 11th; Craft Wondrous Item, freedom of movement, pass without trace; Weight 2 lb.",
  }),
  M({
    id: "cavalrymans-saddle",
    name: "Cavalryman's Saddle",
    cost: "8,500 gp",
    summary:
      "A cavalryman's saddle increases a mount's base land speed by 10 feet, grants it a +5 competence bonus on Jump checks, and grants it the benefits of the feats Endurance and Run. Moderate transmutation; CL 10th; Craft Wondrous Item, jump, longstrider; Weight 30 lb.",
  }),
  M({
    id: "cavalrymans-spurs",
    name: "Cavalryman's Spurs",
    cost: "7,000 gp",
    summary:
      "These spurs attach to any boot and are small enough that they do not impede the wearer's ability to walk or run. They grant the wearer a +5 bonus on Ride and Handle Animal checks. In addition, a rider wearing cavalryman's spurs has a 95% chance of staying in the saddle if knocked unconscious, regardless of the type of saddle he uses (but not if he is riding without a saddle). Moderate transmutation; CL 10th; Craft Wondrous Item, calm animals; Weight —.",
  }),
  M({
    id: "earrings-of-the-wolf",
    name: "Earrings of the Wolf",
    cost: "2,000 gp per earring",
    summary:
      "These earrings allow wearers of an attuned set to communicate over great distances using only their normal speaking voices, even if caught in the din of battle. A typical attuned set consists of a dozen earrings. Every individual wearing an earring of the wolf is in constant communication with every other wearer of an attuned set, hearing every word spoken by each other wearer of an attuned earring; an earring of the wolf ignores all other noises except its wearer's voice, regardless of the volume of other sounds. You need only wear one earring of the wolf for it to function. Earrings of the wolf have a range of 1 mile: not every earring must be within 1 mile of the rest of its attuned set, but an earring can only hear from and transmit to others in its set within 1 mile of its location. Magical silence, 5 feet of stone, 1 foot of common metal (or a thin sheet of lead), or 10 feet of wood or dirt blocks the earring's effect. An earring of the wolf works only with the other earrings in its own attuned set; additional earrings can be made and joined to an existing set, but only if all other earrings are present during the creation of the new one, allowing them all to be attuned together. Faint transmutation; CL 5th; Craft Wondrous Item, message; Weight —.",
  }),
  M({
    id: "gauntlets-of-the-siegebreaker",
    name: "Gauntlets of the Siegebreaker",
    cost: "11,000 gp",
    summary:
      "These heavy armored gauntlets grant their wearer a +2 enhancement bonus to Strength. The wearer is considered armed for the purpose of making or provoking attacks of opportunity, and any strike he makes with a gauntlet deals lethal damage. In addition, whenever a wearer of gauntlets of the siegebreaker makes a sunder attack or attacks a wall or other structural element, the attack ignores hardness and deals 2d4 points of damage to such objects. Three times per day, the wearer can touch a door or gate and affect the portal with a knock spell as if cast by a 15th-level caster. Strong transmutation; CL 15th; Craft Wondrous Item, bull's strength, knock; Weight 1 lb.",
  }),
  M({
    id: "quiver-of-the-north-wind",
    name: "Quiver of the North Wind",
    cost: "12,000 gp",
    summary:
      "APOC: this quiver houses an extradimensional space, and extra-dimensional magic cannot connect in APOC — the item stages exactly as printed; flagged in SCREENING.md. While a quiver of the north wind appears to only hold a score of arrows, it in fact houses an extradimensional space that can hold up to 200 arrows; it always weighs the same no matter how many arrows are placed inside it. A quiver of the north wind has two additional properties as well. After a character bears the quiver for 24 hours, the quiver of the north wind attunes to that character; thereafter, if anyone other than the quiver's owner attempts to fire an arrow from the quiver the arrow disperses into harmless mist mid-flight. Lastly, three times per day the quiver allows its owner to cast a true strike spell that can only affect ranged attacks. Moderate conjuration and divination; CL 9th; Craft Wondrous Item, true strike; Weight 2 lb.",
  }),
  M({
    id: "scouts-journal",
    name: "Scout's Journal",
    cost: "2,000 gp",
    summary:
      "A scout's journal typically appears not as a book but rather as a large ornate parchment scroll brilliantly illuminated with mysterious symbols, mounted on a backing of supple worked leather; these scrolls are opened or closed using two rolling rods on each side. Rolled into the parchment of a new scout's journal is a plain silver ring; wearing this ring does not take up a magic item slot (although it does glow with moderate divination magic if detect magic is used on it). The journal tracks the ring wearer, creating a perfectly accurate map of where he goes and annotating the margins with descriptions (in Common) and sketches of more interesting features the wearer sees (determined at the DM's discretion). The map and notes are based only on what the ring wearer sees and does; it does not fill in unseen areas or make assumptions. The journal records only maps, notes, and sketches, and cannot be used to record specific messages or spells (either as a spellbook or a scroll). The map covers an area of 100 square miles (10 miles by 10 miles). Once a map and notes cover the entire parchment (typically by exploring most of the area the parchment can map out) both it and the ring lose their magical properties and revert to being nothing more than a map (with extensive notes) and a plain silver ring worth 50 gp. The ring can be reused to create a new scout's journal, reducing the cost of creating the new one by 50 gp; a ring can only be attuned to one piece of parchment at a time. Strong divination; CL 15th; Craft Wondrous Item, locate object, permanent image; Weight 2 lb. (parchment only); Cost 1,025 gp + 78 XP.",
  }),
  M({
    id: "sentrys-eye",
    name: "Sentry's Eye",
    cost: "9,500 gp",
    summary:
      "These items are composed of small semiprecious stones wrapped in gold wire and carved with runes. When held, a sentry's eye grants a +5 enhancement bonus on Listen, Search, and Spot checks. In addition, the wielder can automatically determine the exact time as well as where true north lies in relation to himself, as if he had 5 ranks in Survival. Moderate divination; CL 7th; Craft Wondrous Item, know direction; Weight —.",
  }),
  M({
    id: "signalling-trumpet",
    name: "Signalling Trumpet",
    cost: "5,000 gp",
    summary:
      "These instruments grant their user the ability to communicate over great distances regardless of nearby sounds (including the din of war). Any user may speak a single word through the horn (as a standard action), which is heard and understood by all creatures the user does not consider an enemy within 100 feet; enemies of the trumpet's user instead hear a short and meaningless blast on the trumpet. In the hands of a character with ranks in Perform (wind instruments), however, the signalling trumpet grants additional powers: such a user can speak one word per rank in Perform (wind instruments), and his trumpeting can be heard to a distance of 1/4 mile (1,320 feet) per 5 ranks; once again, those whom the trumpeter considers enemies hear only several meaningless trumpet blasts. Issuing a message from a signalling trumpet requires a standard action. Strong illusion; CL 13th; Craft Wondrous Item, ghost sound, whispering wind; Weight 2 lb.",
  }),

  // ---- The Fires of Alchemy: wondrous flasks (4) ----
  M({
    id: "flask-of-amorphous-fire",
    name: "Flask of Amorphous Fire",
    source: SRC_FIRES,
    cost: "500 gp",
    summary:
      FLASK_FRAME + " An amorphous fire flask burns for 3 rounds on a direct hit, dealing 2d6 points of fire damage each round (splash damage is 1 point of fire damage). A creature can extinguish the flames by making a DC 18 Reflex save, just as with normal alchemist's fire. If an amorphous fire flask misses, it creates a pool of fire in the square it lands in instead of a splash; any creature passing through this square takes 2d6 points of fire damage unless it makes a DC 18 Reflex save, in which case it takes half damage. Faint evocation; CL 3rd; Craft Wondrous Item, flaming sphere; Weight 1 lb.",
  }),
  M({
    id: "flask-of-silken-fire",
    name: "Flask of Silken Fire",
    source: SRC_FIRES,
    cost: "500 gp",
    summary:
      FLASK_FRAME + " When a silken fire flask explodes, it creates a mass of sticky strands in a 20-foot-radius burst around the impact point. All creatures in the area of effect take 2d4 points of fire damage (DC 13 Reflex save for half damage). For 1 round, the webbing makes all movement in the area difficult terrain; after that time, the webbing burns away. Faint conjuration; CL 3rd; Craft Wondrous Item, web; Weight 1 lb.",
  }),
  M({
    id: "flask-of-smoke-fire",
    name: "Flask of Smoke Fire",
    source: SRC_FIRES,
    cost: "500 gp",
    summary:
      FLASK_FRAME + " A smoke fire flask deals 1d6 points of fire damage on a direct hit (splash damage is 1 point of fire damage), and when it explodes it creates a 20-foot-radius cloud of choking black smoke that lasts for 3 rounds. All creatures in the cloud take a -4 penalty to Strength and Dexterity (DC 13 Fortitude save negates the penalty); these penalties last for 1d4+1 rounds after the creature leaves the cloud or the cloud dissipates. All sight, even darkvision, is ineffective into, out of, or through the cloud. Faint transmutation; CL 3rd; Craft Wondrous Item, pyrotechnics; Weight 1 lb.",
  }),
  M({
    id: "flask-of-thunderous-fire",
    name: "Flask of Thunderous Fire",
    source: SRC_FIRES,
    cost: "500 gp",
    summary:
      FLASK_FRAME + " A thunderous fire flask deals 1d6 points of fire damage on a direct hit (splash damage is 1 point of fire damage). When the flask explodes it makes a loud bang, dealing 1d8 points of sonic damage to all creatures within 10 feet; in addition, creatures exposed to the bang and thunder of this flask must succeed at a DC 13 Fortitude save or be stunned for 1 round. Faint evocation; CL 3rd; Craft Wondrous Item, sound burst; Weight 1 lb.",
  }),

  // ---- Drunkards & Flagons: magic brews (4) ----
  M({
    id: "beer-of-eternity",
    name: "Beer of Eternity",
    source: SRC_BREWS,
    cost: "750 gp",
    summary:
      "Magic brew (priced per use; created like other magic items). Golden in color, beer of eternity is brewed with rare herbs and the purest of waters. When thrown on an undead creature, it damages it just as holy water does. Any living creature drinking at least a flagon of beer of eternity becomes invisible to all undead for 1 hour; intelligent undead receive a Will save (DC 17) to resist being affected. Drinking a flagon of beer of eternity also removes one negative level. Moderate conjuration; CL 7th; Craft Wondrous Item, invisibility to undead, restoration.",
  }),
  M({
    id: "drowned-man-stout",
    name: "Drowned Man Stout",
    source: SRC_BREWS,
    cost: "300 gp",
    summary:
      "Magic brew (priced per use; created like other magic items). This thick, tarry brew is made with a secret ingredient: the body of an individual drowned in the beer during the brewing process. Anyone who drinks a flagon of drowned man stout gains temporary hit points equal to the Hit Dice of the individual drowned in the beer (minimum 1, maximum 10); these temporary hit points last for 3 hours or until lost. Drinking more than one flagon in a 3-hour period has no effect. Faint necromancy; CL 3rd; Craft Wondrous Item, false life.",
  }),
  M({
    id: "mages-brew",
    name: "Mage's Brew",
    source: SRC_BREWS,
    cost: "80 gp",
    summary:
      "Magic brew (priced per use; created like other magic items). Mage's brew has none of the detrimental effects of mundane alcohol. Any individual drinking a glass of mage's brew gains a +2 enhancement bonus on all Concentration and Knowledge checks for 1 hour; drinking more than one glass extends this duration, but has no further effect. Faint transmutation; CL 3rd; Craft Wondrous Item, bear's endurance, fox's cunning.",
  }),
  M({
    id: "oathbeer",
    name: "Oathbeer",
    source: SRC_BREWS,
    cost: "3,000 gp",
    summary:
      "Magic brew (priced per use; created like other magic items). The ceremony for drinking oathbeer requires the services of a cleric of any lawful faith who must approve of the oath to be sworn. After each individual swearing the oath has shed blood into the beer the oath is sworn and the cup passed around; oathbeer binds all those who drink it to the bonds of the oath, so long as they partake of their own free will. If any of the drinkers knowingly and willfully breaks the bond, that individual suffers from the effects of a bestow curse spell (whose effects are usually determined at the time the oath is sworn) and all of the other drinkers become instantly aware of the betrayal. One pint of oathbeer is enough for ten individuals to swear by. Strong enchantment; CL 8th; Craft Wondrous Item, bestow curse.",
  }),
];
