// Dragon Magazine #329 (March 2005) — magic item draft: 9 records, all
// artifacts staged in the magic barrel with category "artifact" (the
// issue-328 anarch razors precedent: the magic barrel takes artifact
// records, with the artifact grade carried in the summary; none of the nine
// prints a price or a creation line, so cost is "—").
// EIGHT from "Bazaar of the Bizarre" (Greg Marks), pp. 74-76 — introduced in
// the article as "minor artifacts" of myth and legend: Alatyr, Canola's
// Harp, Durandal, Fount of Acadine, Kongo, Shedshed, Teeth of the Sown Men,
// White Buffalo Calf Pipe. ONE from "Demonomicon of Iggwilv: Pazuzu" (James
// Jacobs), p. 67 — THE BLINDING CLAW, Pazuzu's throne, a major artifact.
// Every aura, CL, and weight line was verified against rendered page images
// (pp. 67, 74-76); the image governs over the OCR stream.
// ⚠️ APOC FLAGS — see SCREENING.md: the Blinding Claw teleports itself as if
// by gate and is bound to a demon prince who answers name-invocations across
// planes; the Teeth of the Sown Men conjure living fighters from planted
// teeth (summoning); the Shedshed flies its bearer away (flight is not
// barred, but the item is an Egyptian funerary standard); the Kongo is a
// Japanese mountain god's staff (myth item, not Oriental Adventures
// material — staged, flagged for transparency). All stage as printed;
// disposition is Shaun's call.

import type { MagicItemDefinition } from "@/engine/types";

const SRC_BAZAAR = "Dragon Magazine #329 — Bazaar of the Bizarre (Greg Marks), pp. 74-76";
const SRC_PAZUZU = "Dragon Magazine #329 — Demonomicon of Iggwilv: Pazuzu (James Jacobs), p. 67";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

type ItemSeed = Partial<MagicItemDefinition> & Pick<MagicItemDefinition, "id" | "name" | "summary">;

function M(seed: ItemSeed): MagicItemDefinition {
  return {
    category: "artifact",
    cost: "—",
    source: SRC_BAZAAR,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as MagicItemDefinition;
}

export const DRAGON_329_MAGIC_ITEMS: MagicItemDefinition[] = [
  // ---- Demonomicon of Iggwilv: Pazuzu ----
  M({
    id: "blinding-claw",
    name: "Blinding Claw",
    source: SRC_PAZUZU,
    summary:
      "Major artifact — Pazuzu's symbol of rulership and his throne: a roc's talon embossed with gold and studded with rubies the size of vulture's eggs. The Blinding Claw remains 'fixed' in space, hanging unsupported in the air in a fashion similar to an immovable rod; it can support 10 tons of weight before falling to the ground, and a creature pushing against it must make a DC 45 Strength check to move it up to 10 feet in a single round. As long as Pazuzu lives, no other creature can command any of the Claw's powers without a DC 40 Use Magic Device check to deceive the Claw that the user is in fact the Prince of the Lower Aerial Kingdoms; failure telepathically alerts Pazuzu to the intrusion, and the victim must immediately make a DC 25 Fortitude save or be transformed into a vrock demon, losing all character levels, memories, and personality forevermore (a miracle or wish can reverse this, as can a successful break enchantment cast against a 29th-level effect). As a full-round action, Pazuzu (or the Claw's current owner if Pazuzu is slain) can call the Claw to his side, transporting the artifact to his current location as if by a gate spell. The Claw can cast the following spells at will, one at a time: enlarged blindness heightened to a 9th-level spell (DC 23), clairvoyance, prying eyes, and true seeing; once per day it can cast blasphemy, meteor swarm, and reverse gravity. The artifact may have other secret powers known only to Pazuzu. CL 29th; Weight 900 lb.",
  }),
  // ---- Bazaar of the Bizarre: magic items of myth and legend ----
  M({
    id: "alatyr",
    name: "Alatyr",
    summary:
      "Minor artifact — the 'father of all stones' of Russian folklore: a roughly hemispherical gray stone inscribed with runes of magic and healing. Twice per day as a full-round action, when the Alatyr has been buried in the bank of a natural source of water, its user can call upon the stone to bless those waters so that the next creature to drink from them is healed, as the heal spell cast at 11th level. The flowing water retains this magical healing property until used or for 5 rounds after the Alatyr is first invoked; if the blessed water is removed from the main water body, it retains its healing ability for 5 rounds or until used. Each use of the Alatyr can only heal one creature, regardless of how much water is affected. The Alatyr must be buried at least 3 inches below the surface, which typically requires a full-round action. Strong conjuration; CL 21st; Weight 2 lb.",
  }),
  M({
    id: "canolas-harp",
    name: "Canola's Harp",
    summary:
      "Minor artifact — a masterwork Irish harp carved from deeply textured bleached wood to look as though it were made from bones, named for the Celtic heroine Canola, who built the first harp. These harps are prized for their particularly rich tones, and characters with 5 ranks in Perform (string instruments) can use Canola's harp to cast deep slumber once per day. Any bard using Canola's harp gains a +1 insight bonus when making a countersong or fascinate bardic music check; this bonus stacks with that gained from a masterwork musical instrument. Strong enchantment; CL 17th; Weight 3 lb.",
  }),
  M({
    id: "durandal",
    name: "Durandal",
    summary:
      "Minor artifact — Roland's indestructible sword, once the sword of Hector of Troy, described as a well-used gladius whose hilt contains a thread from the cloak of the Virgin Mary, a tooth of St. Peter, a hair of St. Denys, and a drop of St. Basil's blood. Durandal is an intelligent +1 holy mighty cleaving adamantine short sword (LG, Int 10, Wis 13, Cha 13, Ego 5) that possesses empathy with the wielder. Three times per day, Durandal can cast both bless and remove fear upon its wielder (only). Durandal uses its empathy to urge the wielder to be brave and righteous, particularly when faced with overwhelming danger. Strong evocation [good]; CL 25th; Weight 2 lb.",
  }),
  M({
    id: "fount-of-acadine",
    name: "Fount of Acadine",
    summary:
      "Minor artifact — a small marble fountain decorated with detailed carvings portraying judges and learned folk teaching groups of students, after the Sicilian Fount of Acadine. To use it, a written work unprotected from any damage that submersion in water might cause must be placed into the fountain's water: forgeries gently sink to the bottom after 1d4 minutes, while original documents always float, regardless of their natural buoyancy. If an oath or promise is written upon a sheet of parchment and placed within the fountain, it sinks to the bottom after 1d4 minutes if the writer does not intend to carry out the promise as written; if the oath-maker intends to honor the promise to the best of his ability, the parchment floats. Strong divination; CL 21st; Weight 180 lb.",
  }),
  M({
    id: "kongo",
    name: "Kongo",
    summary:
      "Minor artifact — the three-pronged staff of Koya-no-Myoin, the red-faced Japanese mountain god of Mount Koya: a +2 defending wooden trident that sheds light equal to a torch and is as tough as adamantine. The Kongo is extremely plain, with no markings found upon it. While held, the Kongo grants its bearer a +4 enhancement bonus to Wisdom. Strong abjuration and transmutation; CL 21st; Weight 4 lb.",
  }),
  M({
    id: "shedshed",
    name: "Shedshed",
    summary:
      "Minor artifact — the magical standard of Wepwawet, Egyptian 'Opener of Ways,' depicted upon it. To function, the Shedshed must be affixed to a hafted weapon with reach, such as a glaive, guisarme, halberd, lance, longspear, ranseur, or spear. While held aloft, the bearer and all allies within 30 feet gain a +2 morale bonus on attack rolls, saving throws, and skill checks. In addition, should the bearer be reduced to 0 or fewer hit points, the Shedshed functions as a 5-foot by 5-foot carpet of flying, wrapping its bearer within itself and removing him from harm; this function also occurs whenever the bearer is staggered, unconscious, or dead. While wrapped within the Shedshed the bearer is not subject to attacks, although the Shedshed itself may be attacked as usual (AC 13 [+3 Dex], hardness 0, 2 hp), and the bearer can take no actions. The bearer must designate (a free action) a location where the Shedshed brings him; if he is brought to 0 or fewer hit points before designating a location, the carpet of flying function does not activate. Once the Shedshed arrives at the designated location, it lands and unwraps the bearer. Strong enchantment and transmutation; CL 20th; Weight 8 lb.",
  }),
  M({
    id: "teeth-of-the-sown-men",
    name: "Teeth of the Sown Men",
    summary:
      "Minor artifacts — also sometimes called the Teeth of the Dragon: small dragon's teeth with a band of runes running around the circumference of each tooth, from the myths of Cadmus and Jason. Typically found in groups of 3 to 18, the teeth spring into human fighters when planted in the soil (one fighter per tooth). These fighters perform the tooth-planter's bidding with unquestioning loyalty for 1 hour or until slain; at the end of the hour, the remaining fighters and all their gear turn to dust. A tooth must be buried at least 3 inches below the surface, which typically requires a full-round action. On the next round, each buried tooth becomes a 1st-level human fighter with the abilities and equipment of a 1st-level NPC fighter as shown on page 117 of the Dungeon Master's Guide. Strong conjuration; CL 15th; Weight —.",
  }),
  M({
    id: "white-buffalo-calf-pipe",
    name: "White Buffalo Calf Pipe",
    summary:
      "Minor artifact — a large wooden pipe wrapped in white leather and decorated with several feathers, the sacred pipe left with the Lakota by White Buffalo Calf Woman. As a full-round action that provokes an attack of opportunity, the bearer can light and smoke from the pipe; on the following round, the bearer may exhale the smoke and produce a 30-foot-diameter cloud centered on the pipe. The thin smoke does not obscure vision, but all living creatures other than the pipe's bearer must succeed at a DC 15 Will save or fall under the effects of a calm emotions spell. Once per day, the pipe's bearer can sit in a circle and share the pipe with up to ten others; after smoking the pipe for an hour, all who share it receive the benefits of a hero's feast spell. The pipe bestows one negative level on any evil creature touching or carrying it; the negative level remains as long as the evil creature has possession of the pipe and disappears when the pipe is no longer carried, never results in actual level loss, and cannot be overcome in any way (including restoration spells) while the pipe is carried. Strong divination; CL 21st; Weight 1 lb.",
  }),
];
