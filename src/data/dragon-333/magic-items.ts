// Dragon Magazine #333 (July 2005) — magic item draft: 18 records.
//   1 — STAFF OF FRAZ-URB'LUU, major artifact, from "Demonomicon of
//       Iggwilv: Fraz-Urb'luu" (James Jacobs), sidebar p. 25.
//       Staged as a magic item with a HEAVY FLAG (see SCREENING.md):
//       its mechanics are an enchantment battery, a rulership rod,
//       and a weapon — nothing in the item calls, summons, or
//       contacts the Prince; cf. the issue-329 Bazaar artifacts.
//   9 — "The Relics of Faerûn: Gifts From The Gods" (George Swan),
//       pp. 48-55, ruleset faerun. All nine work under the Complete
//       Divine relic rule, carried in every record: to use the
//       relic you must worship the named deity and sacrifice the
//       stated divine spell slot, or have the True Believer feat
//       and at least the stated Hit Dice. APOC note (drawn, not
//       granted) rides in SCREENING.md per the #328/#329 pattern.
//   1 — KNOWSTONE, from "Class Acts: Knowstones" (Joshua Cole),
//       p. 93 — the base item of a formula family; the formula is
//       the record, the printed sample knowstones digest in
//       reference.md, and the generated-family handling is flagged
//       in SCREENING.md.
//   7 — "Bazaar of the Bizarre: Treasure of the Gnomes" (Richard
//       Farrese), pp. 66-68.
// Every price, aura, CL, and weight line was verified against
// rendered page images (magazine pp. 49, 52, 54, and the Demonomicon
// sidebar) or, for the Gond pouch, against a full transcription of
// pp. 48-54 that agrees with the scan's OCR stream; the image
// governs over the OCR stream — it settles the War Widow's weight
// at 1 lb AS PRINTED (not the PHB warhammer's 5 lb; kept as
// printed, noted in MANIFEST) and the Ring of Fairhair's at 1 lb.
// Two print errata carried as printed and noted in MANIFEST: the
// magazine prints "3th-level" on the Gond and Ilmater relic lines
// (read as 3rd-level), and the Ring of Gnomekind's creation line
// prints Craft Wondrous Item for a ring (suspected Forge Ring
// error) — staged as printed, not silently fixed.

import type { MagicItemDefinition } from "@/engine/types";

const SRC_DEMON = "Dragon Magazine #333 — Demonomicon of Iggwilv: Fraz-Urb'luu (James Jacobs), p. 25";
const SRC_RELICS = "Dragon Magazine #333 — The Relics of Faerûn: Gifts From The Gods (George Swan), pp. 48-55";
const SRC_KNOWSTONE = "Dragon Magazine #333 — Class Acts: Knowstones (Joshua Cole), p. 93";
const SRC_BAZAAR = "Dragon Magazine #333 — Bazaar of the Bizarre: Treasure of the Gnomes (Richard Farrese), pp. 66-68";
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

export const DRAGON_333_MAGIC_ITEMS: MagicItemDefinition[] = [
  // ---- Demonomicon: the Prince's own artifact ----
  M({
    id: "staff-of-fraz-urbluu",
    name: "Staff of Fraz-Urb'luu",
    category: "artifact",
    source: SRC_DEMON,
    summary:
      "Major artifact — the personal sundered artifact of Fraz-Urb'luu, Prince of Deception: a +5 adamantine unholy greatclub that automatically applies both the Extend Spell and Enlarge Spell feats (with no increase in spell level or casting time) to any enchantment spell the wielder casts, including spells cast from other staffs and wands. Spell-like abilities (caster level 20th): at will — charm person, command, suggestion; 3/day — charm monster (DC 21), dominate person (DC 23), mind fog (DC 23); 1/day — mass charm monster (DC 26), demand (DC 26), dominate monster (DC 27). The staff also functions as a rod of rulership, except that creatures with Intelligence scores of 16 or higher receive a DC 22 Will save to negate its effect, and it can be used for up to 3 days per week (not necessarily continuous). CL 20th; Weight 8 lb. No price (artifact). APOC: staged as an item — flagged prominently in SCREENING.md.",
  }),
  // ---- The Relics of Faerûn (9) ----
  M({
    id: "rod-of-clenched-fists",
    name: "Rod of Clenched Fists",
    category: "rod",
    cost: "42,500 gp",
    source: SRC_RELICS,
    ruleset: "faerun",
    summary:
      "Relic of Bane — a +2 light mace that grants its wielder spell-like abilities (caster level 9th): bane at will (DC 11 Will save); vampiric touch 3/day, delivered on a successful hit as a free action, dealing 4d6 points of damage and healing the wielder by the same amount; and dominate person 1/day on touch (DC 17 Will save) — touching a dominated creature each following day extends the domination by 1 day without a new save and uses up that day's dominate person use. Only one of the rod's abilities can be used in any given round. Moderate enchantment; CL 9th; Craft Rod, Sanctify Relic, creator must worship Bane and must sever his own hand as part of the rod's construction (the hand cannot be regenerated unless the rod is destroyed); Weight 5 lb. To use this relic you must worship Bane and sacrifice a 5th-level divine spell slot, or have the True Believer feat and at least 9 Hit Dice.",
  }),
  M({
    id: "pouch-of-black-essence",
    name: "Pouch of Black Essence",
    cost: "6,500 gp",
    source: SRC_RELICS,
    ruleset: "faerun",
    summary:
      "Relic of Gond — once per tenday, the bearer of this pouch may draw from it 5 pounds (80 ounces) of smokepowder; smokepowder drawn from the pouch disappears 1 hour after its removal. The bearer's devotion grants him fire resistance 20 against smokepowder explosions (this resistance does not apply to other sources of fire damage). Moderate conjuration; CL 7th; Craft Wondrous Item, Sanctify Relic, Leomund's secret chest, creator must worship Gond and be able to create smokepowder; Weight 2 lb. To use this relic you must worship Gond and sacrifice a 3rd-level divine spell slot, or have the True Believer feat and at least 5 Hit Dice.",
  }),
  M({
    id: "ribbons-of-the-twice-martyred",
    name: "Ribbons of the Twice-Martyred",
    cost: "11,000 gp",
    source: SRC_RELICS,
    ruleset: "faerun",
    summary:
      "Relic of Ilmater — these ribbons are worn wound about the wearer's wrists and ankles. If the wearer dies while suffering for the benefit of others, in the round after his death the ribbons expand to encase his entire body; in the following round he is restored to life as if by a resurrection spell (the normal level loss for being raised applies). The ribbons never function twice for the same person, no matter how many times he dies. Strong conjuration; CL 13th; Craft Wondrous Item, Sanctify Relic, resurrection, creator must worship Ilmater; Weight 1 lb. To use this relic you must worship Ilmater and sacrifice a 3rd-level divine spell slot, or have the True Believer feat and at least 5 Hit Dice.",
  }),
  M({
    id: "ashen-staff-of-inevitability",
    name: "Ashen Staff of Inevitability",
    category: "weapon",
    cost: "16,600 gp",
    source: SRC_RELICS,
    ruleset: "faerun",
    summary:
      "Relic of Kelemvor — a +1 ghost touch/+1 ghost touch quarterstaff that creates a low droning sound whenever it is within 20 feet of one of the Faithless. When it strikes a Faithless (an intelligent, sentient native of the Material Plane capable of having a patron deity, who has none), that creature is struck with a vision of his own inevitable death and must succeed on a DC 13 Will save or be stunned for 1d4 rounds; whether or not the save succeeds, a creature cannot be affected by this power again for 24 hours. Moderate enchantment; CL 8th; Craft Magic Arms and Armor, Sanctify Relic, creator must worship Kelemvor; Weight 10 lb; Cost to Create 8,600 gp + 640 XP. To use this relic you must worship Kelemvor and sacrifice a 3rd-level divine spell slot, or have the True Believer feat and at least 5 Hit Dice.",
  }),
  M({
    id: "legendmaker",
    name: "Legendmaker",
    category: "weapon",
    cost: "124,115 gp",
    source: SRC_RELICS,
    ruleset: "faerun",
    summary:
      "Relic of Oghma — an intelligent longsword that grants its wielder Martial Weapon Proficiency (longsword) while held. Its enhancement bonus grows with the wielder: +1 for a 1st-level wielder, increasing by +1 for every four character levels the wielder possesses, to a maximum of +5 at 16th level. Alignment neutral; Intelligence 19, Wisdom 10, Charisma 19; speech and telepathy; 120 ft. darkvision, blindsense, and hearing; Ego 24. Its skills and lore reflect the divine knowledge of Oghma: Appraise +14, Perform (song) +14, Spellcraft +14, and bardic knowledge +9. While the sword is held (but not blooded in an attack), the wielder gains bardic music as a 4th-level bard; the music stops immediately if the blade is used to attack. Legendmaker speaks (but does not read) Common, Dwarven, Elven, Gnome, and Halfling. Strong enchantment; CL 20th; Craft Magic Arms and Armor, Sanctify Relic, legend lore, miracle, creator must worship Oghma; Weight 4 lb; Cost to Create 62,215 gp + 4,952 XP. To use this relic you must worship Oghma and sacrifice a 4th-level divine spell slot, or have the True Believer feat and at least 7 Hit Dice.",
  }),
  M({
    id: "amulet-of-perfect-night",
    name: "Amulet of Perfect Night",
    cost: "40,000 gp",
    source: SRC_RELICS,
    ruleset: "faerun",
    summary:
      "Relic of Shar — with a standard action, the bearer can enshroud the area around herself in shadowy illumination (as the darkness spell) with a 20-foot radius; this shadow comes from the perfect night of the Underdark and is not countered by daylight, though it is suppressed within an antimagic field. The bearer gains darkvision out to 60 feet (or improves existing darkvision by 60 feet) and can see through magical darkness. Creatures within the amulet's darkness take a -2 penalty on saves against Shadow Weave magic. Once per day, the bearer can use blindness (as the spell) on a single target within 30 feet (DC 13 Fortitude save negates). Strong evocation; CL 11th; Craft Wondrous Item, Sanctify Relic, blindness/deafness, darkness, creator must worship Shar and create the amulet in an unlit part of the Underdark; Weight 2 lb. To use this relic you must worship Shar and sacrifice a 3rd-level divine spell slot, or have the True Believer feat and at least 5 Hit Dice.",
  }),
  M({
    id: "ring-of-fairhair",
    name: "Ring of Fairhair",
    category: "ring",
    cost: "22,800 gp",
    source: SRC_RELICS,
    ruleset: "faerun",
    summary:
      "Relic of Sune — wearing the goddess's ring gives the bearer a +2 sacred bonus to Charisma, and others see this confidence, making initial NPC attitudes toward the wearer one level higher than they normally would be (indifferent NPCs become friendly, and so on). This ability affects only the wearer of the ring of fairhair, and any hostile action taken by the wearer breaks the power over the creatures or individual affected (many will see it as the deepest of betrayals, and might pursue the wearer above all others). This power cannot be turned off, takes 24 hours to take effect, and remains for 24 hours after the ring is taken off. Moderate enchantment; CL 7th; Forge Ring, Sanctify Relic, calm emotions, eagle's splendor, creator must worship Sune; Weight 1 lb. To use this relic you must worship Sune and sacrifice a 4th-level divine spell slot, or have the True Believer feat and at least 7 Hit Dice.",
  }),
  M({
    id: "the-war-widow",
    name: "The War Widow",
    category: "weapon",
    cost: "36,812 gp",
    source: SRC_RELICS,
    ruleset: "faerun",
    summary:
      "Relic of Tempus — a +2 anarchic warhammer. While carrying it (not necessarily wielding it), the bearer gains a +3 luck bonus on all saving throws made against disease, poison, and the effects of traps. The bearer must participate in a combat at least once a tenday or the relic ceases to function (even the enhancement bonus fades) until the next combat; the combat need not be to the death, but there must always be a chance of death — gladiatorial battles count, butchering sheep does not. Moderate conjuration; CL 9th; Craft Magic Arms and Armor, Sanctify Relic, align weapon, resistance, creator must worship Tempus; Weight 1 lb (as printed); Cost to Create 18,562 gp + 1,460 XP. To use this relic you must worship Tempus and sacrifice a 5th-level divine spell slot, or have the True Believer feat and at least 9 Hit Dice.",
  }),
  M({
    id: "trueword-buckler",
    name: "Trueword Buckler",
    category: "armor",
    cost: "27,415 gp",
    source: SRC_RELICS,
    ruleset: "faerun",
    summary:
      "Relic of Torm — a +1 darkwood buckler granting the wearer two additional powers: once per tenday, discern lies heightened to 4th level (DC 17 Will save); and once per day, hand of Torm (DC 16 Fortitude save), both cast at 9th level. At the DM's discretion, the Hit Dice restriction may be lowered if the user is one of the Martyr's Progeny. Strong abjuration; CL 13th; Craft Magic Arms and Armor, Sanctify Relic, discern lies, hand of Torm, creator must worship Torm; Weight 3 lb; Cost to Create 13,815 gp + 1,088 XP. To use this relic you must worship Torm and sacrifice a 5th-level divine spell slot, or have the True Believer feat and at least 9 Hit Dice.",
  }),
  // ---- Class Acts: Knowstones ----
  M({
    id: "knowstone",
    name: "Knowstone",
    source: SRC_KNOWSTONE,
    summary:
      "A semi-precious stone worth at least 50 gp, set in a piece of jewelry and inscribed with a single spell. A knowstone occupies no body slot (it may be affixed to another item); to use it, the stone's wearer must wear it for 24 hours to attune it to himself. Thereafter, the bearer of a knowstone can cast the inscribed spell exactly as if he knew the spell himself, expending his own spell slots — the inscribed spell must be on the bearer's spell list and he must be capable of casting spells of its level. The knowstone's base price is the inscribed spell's level squared, times 1,000 gp, plus the cost of any expensive material components or focuses (a knowstone of a 0-level spell costs 500 gp total). Creation requires Craft Wondrous Item and takes 1 day per 1,000 gp of the base price; creating one costs XP equal to 1/25 of the base price and raw materials equal to one-half the base price. (Printed sample knowstones, 0-level through 9th, are digested in the pack's reference.md.)",
  }),
  // ---- Bazaar of the Bizarre: Treasure of the Gnomes (7) ----
  M({
    id: "armbands-of-prestidigitation",
    name: "Armbands of Prestidigitation",
    cost: "11,700 gp",
    summary:
      "A pair of armbands that together grant a +2 enhancement bonus to Dexterity, a +5 competence bonus on Sleight of Hand checks, and the ability to cast mage hand and prestidigitation each 3 times per day. Both armbands must be worn for any of these effects to function. Moderate transmutation; CL 7th; Craft Wondrous Item; Weight 1 lb.",
  }),
  M({
    id: "battleplate",
    name: "Battleplate",
    category: "armor",
    cost: "31,050 gp",
    summary:
      "+2 mithral breastplate of improved silent moves, glamoured to appear as a simple tunic; the gnome who wears it also gains a +5 competence bonus on Jump and Tumble checks in addition to the silent moves bonus. As mithral armor it counts as light armor, so a bard can cast spells in it without arcane spell failure. Moderate transmutation; CL 9th; Craft Magic Arms and Armor, Still Spell, disguise self, jump, silence; Weight 30 lb.",
  }),
  M({
    id: "devils-paste",
    name: "Devil's Paste",
    cost: "8,000 gp",
    summary:
      "A wondrous goo, purchased in a full wineskin — one wineskin holds enough to cover four Small or two Medium creatures, and applying it takes 1 minute. Once applied, the paste grants fire resistance 20 and a +4 resistance bonus on saving throws made against fire and fire-based effects. The paste's protection lasts for 24 hours or until washed off (washing it off with soap and water takes 5 minutes). Moderate abjuration; CL 7th; Craft Wondrous Item; Weight 2 lb (full wineskin).",
  }),
  M({
    id: "moonrats-bane",
    name: "Moonrat's Bane",
    category: "weapon",
    cost: "15,530 gp",
    summary:
      "A Small +2 silver greatsword that continuously radiates light in a 20-foot radius. On a successful critical hit, rats and ratlike creatures (including rats, dire rats, moon rats, rat swarms, wererats in any form, and similar creatures) struck by the blade are shaken for 1 minute. Non-opponents of the wielder within the light's glow gain a +2 bonus on saving throws made to resist contracting a disease. Moderate abjuration; CL 11th; Craft Magic Arms and Armor, remove disease; Weight 8 lb.",
  }),
  M({
    id: "misleading-necklace",
    name: "Misleading Necklace",
    cost: "42,400 gp",
    summary:
      "Once per day, in response to taking damage from a magic item, spell, spell-like ability, or supernatural ability, the wearer can activate this necklace as an immediate action to receive instantaneous healing (as cure serious wounds) and the benefit of an extended mislead spell; the illusory figment left in the wearer's place appears to die in a particularly gruesome fashion and remains for 3 minutes. Strong illusion; CL 11th; Craft Wondrous Item, Extend Spell; Weight 1 lb.",
  }),
  M({
    id: "ring-of-gnomekind",
    name: "Ring of Gnomekind",
    category: "ring",
    cost: "20,000 gp",
    summary:
      "This ring grants its wearer a +2 bonus on Listen checks and Craft (alchemy) checks, and increases the save DCs of the wearer's illusion spells by +1. A Medium-size humanoid wearer of the ring of gnomekind is under the effects of a continuous reduce person spell while he wears it, along with a disguise self effect that makes him appear to be a gnome. Strong transmutation; CL 13th; Craft Wondrous Item (as printed; see MANIFEST errata note), reduce person, disguise self; Weight —.",
  }),
  M({
    id: "tiara-of-shadow-blending",
    name: "Tiara of Shadow Blending",
    cost: "30,000 gp",
    summary:
      "Three times per day, while in an area of shadowy illumination, the wearer of this tiara can become invisible (as the greater invisibility spell) for 10 minutes, as long as she remains in areas of shadowy illumination; the invisibility ends if the wearer is exposed to a spell or effect with the light descriptor. Moderate transmutation; CL 10th; Craft Wondrous Item, deeper darkness, greater invisibility; Weight 1 lb.",
  }),
];
