/**
 * Magic Item Compendium clothing (Chapter 3, pp. 67–148): worn
items by body slot. Filed under the DMG-style categories the app
already uses — "ring" for rings, "wondrous" for everything else —
rather than the book's slot organization; the body slot, aura,
and caster level are carried in each summary where the book
prints them. The fifteen Third Eye items (pp. 140–143), printed
as sub-entries in title case, keep their printed capitalization.
 *
 * Short mechanical summaries in our own words, cited to book
 * + page. Batch 11a of the "everything" program; see
 * REBUILD-NOTES.md.
 */
import type { MagicItemDefinition } from "@/engine/types";

export const MAGIC_ITEM_COMPENDIUM_CLOTHING: MagicItemDefinition[] = [
  {
    "id": "acrobat-boots",
    "name": "Acrobat Boots",
    "category": "wondrous",
    "cost": "900 gp",
    "summary": "A pair of acrobat boots grants you a +2 competence bonus on Tumble checks. This is a continuous effect and requires no activation. In addition, these boots have 3 charges, which are renewed each day at dawn. Spending 1 or more charges grants you an enhancement bonus to your speed for 1 round. 1 charge: +10-foot enhancement bonus. 2 charges: +15-foot enhancement bonus. 3 charges: +20-foot enhancement bonus. (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 67",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "adamantine-mind-blade-gauntlets",
    "name": "Adamantine Mind Blade Gauntlets",
    "category": "wondrous",
    "cost": "2,000 gp",
    "summary": "Adamantine mind blade gauntlets allow you to give your mind blade the properties of adamantine. (moderate transmutation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 68",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "amber-amulet-of-vermin",
    "name": "Amber Amulet of Vermin",
    "category": "wondrous",
    "cost": "500 gp (giant bee); 700 gp (giant praying mantis, giant queen ant, Huge monstrous centipede, Huge monstrous scorpion, or Large monstrous spider); 800 gp (giant wasp); 1,200 gp (giant stag beetle)",
    "summary": "This item summons a giant vermin that appears and obeys your commands for 1 minute (as if summoned by summon nature's ally); at the end of this duration, the creature vanishes. Eight varieties of the amber amulet of vermin exist (see the price list for the available versions). An amber amulet of vermin works once per day. (CL see table.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 68",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "amulet-of-aquatic-salvation",
    "name": "Amulet of Aquatic Salvation",
    "category": "wondrous",
    "cost": "500 gp",
    "summary": "These necklaces are boons to sailors and spelunkers alike, because they prevent accidental drowning. When activated, an amulet of aquatic salvation grants you the ability to breathe water (as the water breathing spell) for 5 rounds. An amulet of aquatic salvation functions once per day. (faint conjuration; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 68",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "amulet-of-catapsi",
    "name": "Amulet of Catapsi",
    "category": "wondrous",
    "cost": "16,000 gp",
    "summary": "When activated, this amulet emits a 30-foot-radius area of telepathic noise, centered on you, for 9 rounds. If any creature in this area (including you) attempts to manifest a power, it must succeed on a DC 17 Will save or pay 4 more power points than it otherwise would for that power manifestation. The limit on the number of power points a subject can spend on a power remains in effect, so a creature that fails its saving throw might not be able to manifest its highest-level powers. An amulet of catapsi functions once per day. (moderate enchantment; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 68",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "amulet-of-emergency-healing",
    "name": "Amulet of Emergency Healing",
    "category": "wondrous",
    "cost": "6,000 gp",
    "summary": "The wearer of an amulet of emergency healing can provide instantaneous aid to an injured ally. When it is activated, you can heal 1d4+5 points of damage to yourself or a creature within 30 feet. (faint conjuration; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 68",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "amulet-of-fortune-prevailing",
    "name": "Amulet of Fortune Prevailing",
    "category": "wondrous",
    "cost": "5,000 gp",
    "summary": "You can activate an amulet of fortune prevailing to reroll a saving throw. You must activate this ability before the success or failure of the saving throw has been determined, and you must use the second result, even if it's lower. You can't use this ability if you have already rerolled the save for any reason. (moderate abjuration; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 69",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "amulet-of-incarnum-shielding",
    "name": "Amulet of Incarnum Shielding",
    "category": "wondrous",
    "cost": "2,100 gp",
    "summary": "While you wear an amulet of incarnum shielding, you are immune to any effect that would drain your incarnum or unshape one of your soulmelds. An amulet of incarnum shielding has 7 charges when created. Each time your amulet negates an effect, it expends 1 charge. When an amulet loses its last charge, it crumbles into dust. (faint abjuration; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 69",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "amulet-of-inviolate-form",
    "name": "Amulet of Inviolate Form",
    "category": "wondrous",
    "cost": "11,000 gp",
    "summary": "This amulet protects you from spells and effects that would significantly change your bodily form or composition. Whenever you are the target of such an effect, you can expend 1 charge to negate the transformation. You must decide whether to use the charge before you attempt a saving throw. (moderate abjuration; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 69",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "amulet-of-retributive-healing",
    "name": "Amulet of Retributive Healing",
    "category": "wondrous",
    "cost": "2,000 gp",
    "summary": "Devoting your life to healing is often a thankless job. An amulet of retributive healing ensures that if you tend to your allies, you are renewed in turn. (moderate transmutation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 69",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "amulet-of-second-chances",
    "name": "Amulet of Second Chances",
    "category": "wondrous",
    "cost": "40,000 gp",
    "summary": "An amulet of second chances gives you the ability to reverse disastrous choices. When you activate the amulet, you undo all the events of your current turn and begin the turn again. (CL 17th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 70",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "amulet-of-teamwork",
    "name": "Amulet of Teamwork",
    "category": "wondrous",
    "cost": "2,000 gp",
    "summary": "An amulet of teamwork allows you to work more effectively as part of a team. When you successfully use the aid another action, the bonus granted to your ally improves from +2 to +3. When you flank an enemy, you and any allies also flanking that creature gain a +2 bonus on damage rolls. These are continuous effects and require no activation. In addition, you can activate the amulet to grant both you and an adjacent ally a +5 competence bonus to AC for 1 round; you must be adjacent to an ally to activate this power. This ability can be used once per day. (faint enchantment; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 70",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "amulet-of-tears",
    "name": "Amulet of Tears",
    "category": "wondrous",
    "cost": "2,300 gp",
    "summary": "This amulet has 3 charges, renewed each day at dawn. Spending charges when activated grants temporary hit points lasting up to 10 minutes (not stacking with other temporary hit points): 1 charge 12 points, 2 charges 18 points, 3 charges 24 points.",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 70",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "amulet-of-toxin-delay",
    "name": "Amulet of Toxin Delay",
    "category": "wondrous",
    "cost": "400 gp",
    "summary": "Once per day, when you would attempt a saving throw against poison (before rolling), you can activate this amulet to gain a delay poison effect on yourself, but with a duration of only 2 rounds.",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 70",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "amulet-of-wordtwisting",
    "name": "Amulet of Wordtwisting",
    "category": "wondrous",
    "cost": "6,000 gp",
    "summary": "An amulet of wordtwisting grants you a +2 insight bonus on Bluff, Diplomacy, Intimidate, and Sense Motive checks. This is a continuous effect and requires no activation. If you are an orc wearing an amulet of wordtwisting, you instead gain a +4 insight bonus on the indicated skill checks. (faint divination; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 71",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "angelhelm",
    "name": "Angelhelm",
    "category": "wondrous",
    "cost": "10,000 gp",
    "summary": "An angelhelm allows a good-aligned wearer to emulate certain traits of celestial beings. Your melee attacks are treated as good-aligned weapons for the purpose of overcoming damage reduction. This is a continuous effect and requires no activation. (moderate transmutation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 71",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ankh-of-ascension",
    "name": "Ankh of Ascension",
    "category": "wondrous",
    "cost": "9,000 gp",
    "summary": "When you activate an ankh of ascension, you must sacrifice a prepared divine spell or divine spell slot. The caster level of any divine spells of that level or lower that you cast before your next turn increases by 4. An ankh of ascension functions three times per day. (strong conjuration; CL 17th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 71",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "anklet-of-translocation",
    "name": "Anklet of Translocation",
    "category": "wondrous",
    "cost": "1,400 gp",
    "summary": "An anklet of translocation allows you to make short dimensional hops. When it is activated, you can instantly teleport (with no chance of error) up to 10 feet. The new space must be within line of sight and line of effect. (moderate conjuration; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 71",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "arcanists-gloves",
    "name": "Arcanist'S Gloves",
    "category": "wondrous",
    "cost": "500 gp",
    "summary": "When you activate arcanist's gloves, you add 2 to the caster level of the next 1stlevel arcane spell you cast before the end of your turn. Arcanist's gloves function two times per day. (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 72",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "armband-of-elusive-action",
    "name": "Armband of Elusive Action",
    "category": "wondrous",
    "cost": "800 gp",
    "summary": "An armband of elusive action allows you to protect yourself from the hazards of battlefield chaos. When it is activated, the band allows you to avoid provoking a single attack of opportunity that your actions would otherwise incur. An armband of elusive action functions once per day. (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 72",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "armband-of-maximized-healing",
    "name": "Armband of Maximized Healing",
    "category": "wondrous",
    "cost": "7,200 gp",
    "summary": "When you activate an armband of maximized healing, the next healing spell of 6th level or lower that you cast on your turn is automatically maximized (as the Maximize Spell feat, but with no adjustment to spell level or casting time). An armband of maximized healing functions three times per day. (strong conjuration; CL 17th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 72",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "armbands-of-might",
    "name": "Armbands of Might",
    "category": "wondrous",
    "cost": "4,100 gp",
    "summary": "When you wear these armbands, you gain a +2 bonus on Strength checks and Strength-based skill checks. If you have the Power Attack feat, you also gain a +2 bonus on melee damage rolls for any attack on which you use the Power Attack feat and take a penalty of at least –2 on your attack roll. (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 72",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "artificers-monocle",
    "name": "Artificer'S Monocle",
    "category": "wondrous",
    "cost": "1,500 gp",
    "summary": "Putting on a monocle is a standard action. While wearing an artificer's monocle, whenever you successfully use your artificer knowledge class feature (ECS 31) to detect an item's magical aura or you cast detect magic and have at least 5 ranks of Knowledge (arcana), you can spend 1 additional minute studying the item. (faint divination; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 72",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "badge-of-the-svirfneblin",
    "name": "Badge of the Svirfneblin",
    "category": "wondrous",
    "cost": "15,000 gp",
    "summary": "While wearing this item, you gain darkvision out to 30 feet and a +5 competence bonus on Hide checks. These are continuous effects and require no activation. Once per day, you can activate the badge to give yourself a blur effect (as the spell). (faint illusion; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 72",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "bear-helm",
    "name": "Bear Helm",
    "category": "wondrous",
    "cost": "1,500 gp",
    "summary": "While raging, you can halve the damage dealt by a single sneak attack or critical hit scored against you. You can activate this item after the damage from the attack has been determined. A bear helm functions once per day. (moderate abjuration; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 72",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "beholder-crown",
    "name": "Beholder Crown",
    "category": "wondrous",
    "cost": "20,000 gp",
    "summary": "These strange crowns can shoot rays from eyelike gems, much like the attacks of their namesake. Each gem can fire a different ray a single time at a target (doing this burns out the gem). Each ray extends up to 30 feet and requires a ranged touch attack to successfully strike a target. (CL 13th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 73",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "belt-of-battle",
    "name": "Belt of Battle",
    "category": "wondrous",
    "cost": "12,000 gp",
    "summary": "A belt of battle helps you avoid being caught off guard in combat and allows occasional bursts of extra activity. While worn, it grants you a +2 competence bonus on initiative checks. This is a continuous effect and requires no activation. In addition, a belt of battle has 3 charges, which are renewed each day at dawn. (moderate transmutation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 73",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "belt-of-growth",
    "name": "Belt of Growth",
    "category": "wondrous",
    "cost": "3,000 gp",
    "summary": "When you activate a belt of growth, you instantly increase in size (as if affected by enlarge person). This effect lasts for 10 minutes or until you command it to end. This ability doesn't stack with any other effect that increases your size. A belt of growth functions once per day. (moderate transmutation; CL 10th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 73",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "belt-of-hidden-pouches",
    "name": "Belt of Hidden Pouches",
    "category": "wondrous",
    "cost": "5,000 gp",
    "summary": "Hidden inside this belt are ten small pockets, each of which seems big enough to hold only a few coins. Each pocket actually functions as a small bag of holding and can hold up to 1/2 cubic foot or 5 pounds of nonliving matter. No object with any dimension exceeding 6 inches can be placed in a pocket. (moderate conjuration; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 74",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "belt-of-one-mighty-blow",
    "name": "Belt of One Mighty Blow",
    "category": "wondrous",
    "cost": "1,500 gp",
    "summary": "Activating a belt of one mighty blow grants extra damage on your next melee attack made before the end of your turn. A light weapon deals an extra 1d8 points of damage, a one-handed weapon deals an extra 2d6 points of damage, and a twohanded weapon deals an extra 3d6 points of damage. A belt of one mighty blow functions once per day. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 74",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "belt-of-priestly-might",
    "name": "Belt of Priestly Might",
    "category": "wondrous",
    "cost": "6,000 gp",
    "summary": "This belt features a deity's holy symbol. Followers of that deity or anyone of that deity's alignment can wear the belt safely. Any other creature gains one negative level when wearing the belt. The negative level remains for as long as the belt is worn. (CL 8th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 74",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "belt-of-the-champion",
    "name": "Belt of the Champion",
    "category": "wondrous",
    "cost": "4,500 gp",
    "summary": "These gem-studded belts are sacred to followers of Kord, the god of strength. When you wear one of these items, it functions as a belt of giant strength +2 if you are chaotic good, neutral good, or chaotic neutral. Relic item; additional relic power with the proper divine connection (see text). (CL 20th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 73",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "belt-of-theft-healing",
    "name": "Belt of Theft-Healing",
    "category": "wondrous",
    "cost": "2,000 gp",
    "summary": "Designed and used by spellthieves (CAd 13), belts of theft-healing heighten the payoff of stealing spells. When you steal a spell or spell-like ability from an unwilling target, you can activate the belt to also heal damage equal to the level of the spell or spell-like ability stolen. A belt of theft-healing functions three times per day. (moderate transmutation; CL 8th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 74",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "belt-of-ultimate-athleticism",
    "name": "Belt of Ultimate Athleticism",
    "category": "wondrous",
    "cost": "3,600 gp",
    "summary": "A belt of ultimate athleticism allows you to reliably perform normal athletic feats, or occasionally pull off a truly amazing stunt. When you activate the belt, you can take 10 on all Balance, Climb, Jump, Swim, and Tumble checks made in that round, even if you are in a stressful situation. (CL 9th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 75",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "blighters-hex-eye",
    "name": "Blighter'S Hex-Eye",
    "category": "wondrous",
    "cost": "1,400 gp",
    "summary": "When you activate a blighter's hex-eye, your melee attacks against elves and creatures of the plant type deal an extra 2d6 points of damage. This effect lasts for 1 round. A hex-eye functions three times per day, but it can't be activated in consecutive rounds. (moderate transmutation; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 75",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "blindfold-of-true-darkness",
    "name": "Blindfold of True Darkness",
    "category": "wondrous",
    "cost": "9,000 gp",
    "summary": "When you wear this blindfold, you gain the blindsight ability out to 30 feet (MM 306). Because your eyes are protected, you are also immune to gaze attacks and spells or effects that rely on sight. You cannot use vision in any way while wearing the blindfold. (faint divination; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 75",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "blindhelm",
    "name": "Blindhelm",
    "category": "wondrous",
    "cost": "15,000 gp",
    "summary": "Despite its appearance and name, a blindhelm doesn't restrict your vision in any way. More important, it grants you blindsense out to 5 feet and provides you with a +5 competence bonus on saves against gaze attacks. (strong divination; CL 11th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 75",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "bolt-shirt",
    "name": "Bolt Shirt",
    "category": "wondrous",
    "cost": "5,000 gp",
    "summary": "You can teleport (with no chance of error) to any location within 60 feet, as long as you have both line of sight and line of effect to that destination. A harmless trail of crackling sparks traces the path from your original location to your destination, making it obvious where you have landed. (moderate conjuration; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 75",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "bone-ring",
    "name": "Bone Ring",
    "category": "ring",
    "cost": "20,000 gp",
    "summary": "While wearing a bone ring, you are protected from energy drain and ability drain (but not ability damage). A bone ring has 3 charges, which are renewed each day at dawn. Every negative level or point of ability drain prevented uses 1 charge. (strong abjuration; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 75",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "boots-of-agile-leaping",
    "name": "Boots of Agile Leaping",
    "category": "wondrous",
    "cost": "600 gp",
    "summary": "While wearing boots of agile leaping, you can add your Dexterity modifier (instead of your Strength modifier) on Jump checks. If you have at least 5 ranks in Balance, you can stand from prone as a swift action. When standing from prone, you do not provoke attacks of opportunity. (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 76",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "boots-of-big-stepping",
    "name": "Boots of Big Stepping",
    "category": "wondrous",
    "cost": "6,000 gp",
    "summary": "While worn, these boots increase your caster level by 2 for all teleportation spells (continuous). Three times per day on command, you can teleport up to 60 ft. with no chance of error, as if using greater teleport.",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 76",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "boots-of-desperation",
    "name": "Boots of Desperation",
    "category": "wondrous",
    "cost": "2,800 gp",
    "summary": "You can activate boots of desperation only when your current hit point total is equal to or less than half your full normal hit points. When activated, the boots grant a +30-foot enhancement bonus to your base speed and a +5 dodge bonus to AC against attacks of opportunity. These benefits last for 1 round. This ability functions three times per day. (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 77",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "boots-of-dragonstriding",
    "name": "Boots of Dragonstriding",
    "category": "wondrous",
    "cost": "1,500 gp",
    "summary": "You gain a +2 competence bonus on Climb and Jump checks while wearing these boots. This is a continuous effect and requires no activation. Once per day, you can activate boots of dragonstriding to gain a climb speed equal to your land speed for 10 rounds. (moderate transmutation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 77",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "boots-of-jumping",
    "name": "Boots of Jumping",
    "category": "wondrous",
    "cost": "2,500 gp",
    "summary": "Boots of jumping allow you to jump exceptionally long distances. You only need to move at least 10 feet in a straight line to attempt a running jump (rather than 20 feet). This is a continuous effect and requires no activation. In addition, boots of jumping have 3 charges, which are renewed each day at dawn. Spending 1 or more charges grants you a competence bonus on Jump checks for 1 round. 1 charge: +10 competence bonus. 2 charges: +15 competence bonus. 3 charges: +20 competence bonus. (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 77",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "boots-of-landing",
    "name": "Boots of Landing",
    "category": "wondrous",
    "cost": "500 gp",
    "summary": "While wearing boots of landing, you land on your feet no matter how far you fall, and you take 2 fewer dice of damage from the fall than normal (thus, a fall of 20 feet or less deals you no damage). (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 77",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "boots-of-sidestepping",
    "name": "Boots of Sidestepping",
    "category": "wondrous",
    "cost": "6,000 gp",
    "summary": "Boots of sidestepping allow you to slide out of range of an enemy's attacks. When you activate the boots, you can take a 5-foot step (PH 144). Unlike a normal 5-foot step, you can take this action even if you have already moved during the round, and it doesn't prevent you from moving again afterward (or even taking your normal 5-foot step). (strong transmutation; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 78",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "boots-of-skating",
    "name": "Boots of Skating",
    "category": "wondrous",
    "cost": "7,000 gp",
    "summary": "These boots allow you to slide along the ground as if on smooth ice. You can gracefully skate along the ground, turn, or stop suddenly as desired. You gain a +10-foot enhancement bonus to your land speed while wearing the boots. This is a continuous effect and requires no activation. (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 78",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "boots-of-stomping",
    "name": "Boots of Stomping",
    "category": "wondrous",
    "cost": "600 gp",
    "summary": "When you stomp your feet and activate boots of stomping, you generate a 15-footlong cone-shaped burst of psychokinetic force that travels along the ground, toppling creatures and loose objects. The shock wave affects only creatures standing on the ground within the area. (faint evocation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 78",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "boots-of-swift-passage",
    "name": "Boots of Swift Passage",
    "category": "wondrous",
    "cost": "5,000 gp",
    "summary": "When activated, boots of swift passage teleport you up to 20 feet in any direction (with no chance of error). You must have line of sight and line of effect to your destination to use the boots. (moderate conjuration; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 78",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "boots-of-temporal-acceleration",
    "name": "Boots of Temporal Acceleration",
    "category": "wondrous",
    "cost": "43,000 gp",
    "summary": "Once per day, you can enter another time frame for 2 rounds, speeding up so greatly that all other creatures seem frozen, though they are actually moving at normal speed. (strong conjuration; CL 17th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 79",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "boots-of-the-battle-charger",
    "name": "Boots of the Battle Charger",
    "category": "wondrous",
    "cost": "2,000 gp",
    "summary": "When activated, boots of the battle charger allow you to make a charge attack as a standard action (rather than a full-round action), though the charge only includes movement up to your speed (rather than double your speed). You must make the charge attack in the round you activate the boots, or the effect is lost. (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 76",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "boots-of-the-mountain-king",
    "name": "Boots of the Mountain King",
    "category": "wondrous",
    "cost": "1,500 gp",
    "summary": "While wearing boots of the mountain king, you can move more easily than usual over rough and difficult terrain. These boots allow you to ignore increased movement costs and skill check DC increases for light and dense rubble. In addition, you can move up stairs and slopes at normal speed and run or charge downhill without making a Balance check (DMG 89). (moderate abjuration; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 78",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "boots-of-the-mountain-king-greater",
    "name": "Boots of the Mountain King, Greater",
    "category": "wondrous",
    "cost": "21,500 gp",
    "summary": "These boots function as boots of the mountain king. In addition, you can activate greater boots to gain the benefit of a stoneskin spell. This ability functions once per day.",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 78",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "boots-of-the-unending-journey",
    "name": "Boots of the Unending Journey",
    "category": "wondrous",
    "cost": "4,000 gp",
    "summary": "Travel is a way of life for the followers of Fharlanghn, and these boots give his chosen followers a spring in their step. While wearing boots of the unending journey, you gain a +10-foot enhancement bonus to your speed if you are neutral good, lawful neutral, neutral, chaotic neutral, or neutral evil. This is a continuous effect and requires no activation. Relic item; additional relic power with the proper divine connection (see text). (strong conjuration; CL 20th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 79",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "boots-of-tracklessness",
    "name": "Boots of Tracklessness",
    "category": "wondrous",
    "cost": "11,000 gp",
    "summary": "When you wear these boots, you leave no tracks (as if affected by pass without trace). This is a continuous effect and requires no activation. Once per day, you can activate the boots to become invisible (as greater invisibility) for 7 rounds. (moderate illusion; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 79",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "boots-of-tremorsense",
    "name": "Boots of Tremorsense",
    "category": "wondrous",
    "cost": "5,000 gp",
    "summary": "When you activate boots of tremorsense, you gain tremorsense out to 30 feet for 5 rounds. This ability functions three times per day. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 79",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "bracers-of-accuracy",
    "name": "Bracers of Accuracy",
    "category": "wondrous",
    "cost": "4,000 gp",
    "summary": "Wearing bracers of accuracy allows you to make ranged attacks with extreme precision. The bracers have 3 charges, which are renewed each day at dawn. Spending 1 or more charges grants a benefit to all ranged attacks you make before the end of your turn. 1 charge: Ignore AC bonus from cover (except total cover) for all targets. (faint divination; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 79",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "bracers-of-arcane-freedom",
    "name": "Bracers of Arcane Freedom",
    "category": "wondrous",
    "cost": "2,300 gp",
    "summary": "Bracers of arcane freedom allow you to cast arcane spells without the normal complex gestures required. When you activate these bracers, you omit the somatic component of the next arcane spell you cast before the end of your turn (as if applying the Still Spell feat to it, but without altering the spell's level or casting time). (moderate abjuration; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 80",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "bracers-of-dawn",
    "name": "Bracers of Dawn",
    "category": "wondrous",
    "cost": "26,000 gp",
    "summary": "When you turn the dial to the left, both bracers appear normal. When you turn the dial to the middle position, a beam of light emerges from the lens, illuminating your surroundings as a bullseye lantern would. Turning the dial to the left or back to the middle is a move action. (moderate evocation; CL 6th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 80",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "bracers-of-great-collision",
    "name": "Bracers of Great Collision",
    "category": "wondrous",
    "cost": "1,500 gp",
    "summary": "Bracers of great collision allow you to deliver particularly crushing attacks with bludgeoning weapons. When you score a successful critical hit with a bludgeoning melee weapon, you can activate the bracers to deal an extra 2d6 points of damage with that attack (or 3d6 points of damage if you wield the weapon with two hands). (moderate transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 80",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "bracers-of-opportunity",
    "name": "Bracers of Opportunity",
    "category": "wondrous",
    "cost": "2,300 gp",
    "summary": "Bracers of opportunity allow you to take advantage of opponents who let down their defenses. If you have the Combat Reflexes feat, you gain a +2 competence bonus on any attack of opportunity you make (whether the attack of opportunity is granted by the bracers or not). This is a continuous effect and requires no activation. (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 81",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "bracers-of-quick-strike",
    "name": "Bracers of Quick Strike",
    "category": "wondrous",
    "cost": "1,400 gp",
    "summary": "When you activate bracers of quick strike, you can make one extra attack with any weapon you are holding if you already made a full attack on this turn. This attack is made at your full base attack bonus, plus any modifiers appropriate to the situation. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 81",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "bracers-of-repulsion",
    "name": "Bracers of Repulsion",
    "category": "wondrous",
    "cost": "4,000 gp",
    "summary": "Bracers of repulsion produce an instantaneous wave of force that pushes back enemies. When you activate the bracers, all enemies within 10 feet must succeed on a DC 19 Fortitude save or be pushed 5 feet away from you. Huge and larger creatures are unaffected by bracers of repulsion, though incorporeal creatures can be affected. (moderate evocation; CL 11th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 81",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "bracers-of-retaliation",
    "name": "Bracers of Retaliation",
    "category": "wondrous",
    "cost": "5,000 gp",
    "summary": "Bracers of retaliation protect you from attacks and punish attackers for injuring you. They grant you a +1 armor bonus to AC (as bracers of armor). This is a continuous effect and requires no activation. (faint enchantment; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 82",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "bracers-of-the-blast-barrier",
    "name": "Bracers of the Blast Barrier",
    "category": "wondrous",
    "cost": "3,200 gp",
    "summary": "Bracers of the blast barrier allow you to turn a spell or spell-like ability into a temporary wall of magical energy. When you activate these bracers, the next spell you cast or spell-like ability you use before the end of your turn instead appears as a 10-footlong, 10-foot-high opaque wall that lasts for 1 round per level of the spell. (moderate evocation; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 80",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "bracers-of-the-entangling-blast",
    "name": "Bracers of the Entangling Blast",
    "category": "wondrous",
    "cost": "2,000 gp",
    "summary": "Bracers of the entangling blast allow you to reduce the damage dealt by your magic to ensnare those affected by it. (faint conjuration; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 80",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "bracers-of-wind",
    "name": "Bracers of Wind",
    "category": "wondrous",
    "cost": "10,000 gp",
    "summary": "Bracers of wind continuously emit a faint breeze, occasionally billowing your cloak or hair. Upon their activation, the winds around you swell and surge, imposing a –2 penalty on ranged attacks made against you, as if fired in a strong wind (DMG 95). Siege weapons, thrown boulders, and the like are unaffected. (moderate conjuration; CL 11th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 82",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "brawlers-gauntlets",
    "name": "Brawler'S Gauntlets",
    "category": "wondrous",
    "cost": "1,000 gp",
    "summary": "Wrestlers and priests of the brawler god Kord prize these gauntlets. When activated, for 1 round, they grant you a +2 bonus on grapple checks and damage rolls when making unarmed attacks. Brawler's gauntlets function three times per day. (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 82",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "brooch-of-avoidance",
    "name": "Brooch of Avoidance",
    "category": "wondrous",
    "cost": "3,100 gp",
    "summary": "A brooch of avoidance allows you to better escape attacks of opportunity. When activated, it grants you a +4 dodge bonus against attacks of opportunity until the end of your turn. A brooch of avoidance functions three times per day. (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 82",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "brooch-of-stability",
    "name": "Brooch of Stability",
    "category": "wondrous",
    "cost": "1,000 gp",
    "summary": "This brooch is useful in dangerous battles. When your hit points are reduced to –1 or lower, you automatically become stable (assuming the damage wasn't enough to kill you). A brooch of stability functions once per day. (faint conjuration; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 83",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "brute-gauntlets",
    "name": "Brute Gauntlets",
    "category": "wondrous",
    "cost": "500 gp",
    "summary": "Brute gauntlets allow you to temporarily increase your physical might. These gauntlets have 3 charges, which are renewed each Burnoose of 1,001 thorns day at dawn. Spending 1 or more charges grants you a morale bonus on Strength checks, Strength-based skill checks, and melee weapon damage for 1 round. 1 charge: +2 morale bonus. 2 charges: +3 morale bonus. (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 83",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "brute-ring",
    "name": "Brute Ring",
    "category": "ring",
    "cost": "2,300 gp",
    "summary": "A brute ring allows you to push another creature away from you with pure force. When you activate the ring, a blast of force issues forth, making a bull rush attack against a single creature up to 30 feet from you. You can use either the ring's check modifer (+5) or your own bull rush check modifier, whichever is higher. (strong transmutation; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 83",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "burnoose-of-1-001-thorns",
    "name": "Burnoose of 1,001 Thorns",
    "category": "wondrous",
    "cost": "3,000 gp",
    "summary": "A burnoose of 1,001 thorns grants you a +1 enhancement bonus to your existing natural armor bonus. (moderate transmutation; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 83",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "caduceus-bracers",
    "name": "Caduceus Bracers",
    "category": "wondrous",
    "cost": "2,000 gp",
    "summary": "Caduceus bracers allow you to convert your innate healing powers into other forms of restorative magic. (strong conjuration; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 84",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "cannith-goggles",
    "name": "Cannith Goggles",
    "category": "wondrous",
    "cost": "13,000 gp",
    "summary": "Cannith goggles grant a +5 competence bonus on Search and Spot checks. This is a continuous effect and requires no activation. In addition, an artificer (ECS 29) can power the goggles with infusions, granting them greater power. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 84",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "cape-of-the-viper",
    "name": "Cape of the Viper",
    "category": "wondrous",
    "cost": "2,000 gp",
    "summary": "A cape of the viper allows you to transform into a poisonous serpent. The cape has 3 charges, which are renewed each day at dawn. Spending 1 or more charges transforms you into a viper for 7 rounds. 1 charge: Small viper. 2 charges: Medium viper. 3 charges: Large viper; add +2 to the save DC of your bite's poison. (moderate transmutation; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 84",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "casting-glove",
    "name": "Casting Glove",
    "category": "wondrous",
    "cost": "20,000 gp",
    "summary": "Functions as a glove of storing, storing or retrieving a single item as a free action. In addition, once per round you can activate or consume a stored magic item as if holding it in your hand, using the item's normal activation action.",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 84",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "cats-eye-brooch",
    "name": "Cat'S-Eye Brooch",
    "category": "wondrous",
    "cost": "9,000 gp",
    "summary": "A cat's-eye brooch provides you with a +1 luck bonus on all saving throws and an Cat's-eye brooch additional +4 bonus on saving throws against disease. (faint conjuration; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 84",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "charm-of-countersong",
    "name": "Charm of Countersong",
    "category": "wondrous",
    "cost": "400 gp",
    "summary": "This small charm, usually pinned to the front of your shirt or tunic, allows you to use countersong to interrupt a sonic attack. Once per day, you can activate your countersong bardic music ability as an immediate action. (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 85",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "chasuble-of-fell-power",
    "name": "Chasuble of Fell Power",
    "category": "wondrous",
    "cost": "8,000 gp",
    "summary": "While wearing a chasuble of fell power, your eldritch blasts (CAr 7) or spells you cast that have the chaotic descriptor deal an extra 1d6 points of damage. Only a chaotic spell that deals hit point damage can benefit from this effect. (moderate evocation; CL 6th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 85",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "chasuble-of-fell-power-greater",
    "name": "Chasuble of Fell Power, Greater",
    "category": "wondrous",
    "cost": "18,000 gp",
    "summary": "As a chasuble of fell power, except the greater chasuble adds an extra 2d6 points of damage to your eldritch blasts or damaging spells you cast that have the chaotic descriptor. (moderate evocation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 85",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "chronocharm-of-the-celestial-wanderer",
    "name": "Chronocharm of the Celestial Wanderer",
    "category": "wondrous",
    "cost": "500 gp",
    "summary": "A chronocharm of the celestial wanderer slows your perception of time, allowing you a second chance to recognize potential danger. When you activate this chronocharm, you can immediately reroll a single Listen or Spot check that you just attempted. The result of the second roll replaces the first result. This ability functions once per day. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 85",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "chronocharm-of-the-fateweaver",
    "name": "Chronocharm of the Fateweaver",
    "category": "wondrous",
    "cost": "500 gp",
    "summary": "Chronocharm of the horizon A chronocharm of the fateweaver slows your perception of time, letting you avoid an ill-advised step. When you activate this chronocharm, you can immediately reroll a single Balance, Climb, or Tumble check that you just attempted. (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 85",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "chronocharm-of-the-grand-master",
    "name": "Chronocharm of the Grand Master",
    "category": "wondrous",
    "cost": "500 gp",
    "summary": "A chronocharm of the grand master slows your perception of time, allowing you to better dodge an incoming ranged attack. When it is activated, you gain a +5 dodge bonus to your AC against a single ranged attack. This ability functions once per day. (CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 86",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "chronocharm-of-the-horizon-walker",
    "name": "Chronocharm of the Horizon Walker",
    "category": "wondrous",
    "cost": "500 gp",
    "summary": "Like other chronocharms, this item slows your perception of time for a specific, singular purpose. When you activate a chronocharm of the horizon walker, you can move up to half your speed as part of the same swift action used to activate it; this movement does not provoke attacks of opportunity. (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 86",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "chronocharm-of-the-laughing-rogue",
    "name": "Chronocharm of the Laughing Rogue",
    "category": "wondrous",
    "cost": "500 gp",
    "summary": "First imagined by skilled temple raiders devoted to Olidammara, the god of rogues, chronocharms of the laughing rogue have found their way into the toolboxes of thieves of all stripes. When you activate this chronocharm, you can immediately reroll a single Disable Device skill check that you just attempted. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 86",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "chronocharm-of-the-uncaring-archmage",
    "name": "Chronocharm of the Uncaring Archmage",
    "category": "wondrous",
    "cost": "500 gp",
    "summary": "A chronocharm of the uncaring archmage alters your perception of time, allowing you to cast a single spell more quickly. When it is activated, the next spell of 3rd level or lower you cast that has a casting time of 1 full round can be cast as a standard action instead. If you don't cast such a spell by the end of your turn, the effect fades. (moderate transmutation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 86",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "circlet-of-mages",
    "name": "Circlet of Mages",
    "category": "wondrous",
    "cost": "5,000 gp",
    "summary": "A circlet of mages grants you a +2 competence bonus on Concentration checks. This is a continuous effect and requires no activation. In addition, this circlet has 3 charges, which are renewed each day at dawn. Spending 1 or more charges when you cast a spell allows you to avoid losing that prepared spell or spell slot (as if you hadn't cast it). (moderate transmutation; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 86",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "circlet-of-rapid-casting",
    "name": "Circlet of Rapid Casting",
    "category": "wondrous",
    "cost": "15,000 gp",
    "summary": "A circlet of rapid casting allows you to cast a small number of spells each day more quickly. This circlet has 3 charges, which are renewed each day at dawn. Spending 1 or more charges allows you to cast a single spell as part of the same swift action you used to activate the circlet. (moderate transmutation; CL 11th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 86",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "circlet-of-solace",
    "name": "Circlet of Solace",
    "category": "wondrous",
    "cost": "3,000 gp",
    "summary": "A circlet of solace allows you to bolster your healing spells. After activating the circlet, the next healing spell you cast on a living ally before the end of your turn also grants that creature a +5 morale bonus on saves against disease, fear, and poison for 1 minute. (faint abjuration; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 87",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "circlet-of-wild-surging",
    "name": "Circlet of Wild Surging",
    "category": "wondrous",
    "cost": "4,200 gp",
    "summary": "A circlet of wild surging allows you to enhance your emotional state to make your wild surges more powerful. When you use wild surge while manifesting a power, you can activate the circlet to increase the bonus to your manifester level by 1. The increased wild surge still requires the normal extra power point cost normally required to augment the power. (moderate transmutation; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 87",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "cloak-of-battle",
    "name": "Cloak of Battle",
    "category": "wondrous",
    "cost": "22,000 gp",
    "summary": "A cloak of battle grants you a +4 armor bonus to AC. This is a continuous effect and requires no activation. The cloak also has two other abilities tied to unique command words. The first command transforms the cloak into an iron +1/+1 quarterstaff that leaps into your hands (or falls at your feet if you don't have an open hand). (strong transmutation; CL 14th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 87",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "cloak-of-elemental-protection",
    "name": "Cloak of Elemental Protection",
    "category": "wondrous",
    "cost": "1,000 gp",
    "summary": "When you activate a cloak of elemental protection, you gain resistance 10 against a single energy type of your choice (acid, cold, electricity, fire, or sonic). This protection lasts until the start of your next turn. A cloak of elemental protection functions once per day. (faint abjuration; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 87",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "cloak-of-predatory-vigor",
    "name": "Cloak of Predatory Vigor",
    "category": "wondrous",
    "cost": "1,400 gp",
    "summary": "A cloak of predatory vigor helps you channel the power of your combat frenzy into rejuvenating energy. While in a rage or frenzy, you can activate this cloak to heal damage to yourself equal to your Hit Dice. This effect functions two times per day. (faint conjuration; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 87",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "cloak-of-quills",
    "name": "Cloak of Quills",
    "category": "wondrous",
    "cost": "2,500 gp",
    "summary": "While grappling, each time you roll a grapple check (other than the initial check to enter or resist the grapple), you can activate your cloak of quills. Doing this lodges quills in your opponent, dealing 1d6 points of damage to each other creature in the grapple (Reflex DC 16 negates). This ability functions five times per day. (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 87",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "cloak-of-soulbound-resistance",
    "name": "Cloak of Soulbound Resistance",
    "category": "wondrous",
    "cost": "5,000 gp",
    "summary": "A cloak of soulbound resistance grants you a +1 resistance bonus on your saving throws. In addition, it serves as a receptacle for your essentia, much as a soulmeld does. Every point of essentia invested in it increases the bonus by 1, subject to the maximum values noted below. (moderate abjuration; CL 6th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 88",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "cloak-of-soulbound-resistance-greater",
    "name": "Cloak of Soulbound Resistance, Greater",
    "category": "wondrous",
    "cost": "13,000 gp",
    "summary": "As a cloak of soulbound resistance, except its maximum essentia capacity is 4 and the maximum resistance bonus it can grant on saving throws is +5.",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 88",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "cloak-of-stone",
    "name": "Cloak of Stone",
    "category": "wondrous",
    "cost": "8,000 gp",
    "summary": "While wearing a cloak of stone, you gain a +5 competence bonus on Hide and Move Silently checks. This is a continuous effect and requires no activation. In addition, you can activate the cloak to merge with stone as though using the meld into stone spell. This ability functions once per day. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 88",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "cloak-of-the-salamander",
    "name": "Cloak of the Salamander",
    "category": "wondrous",
    "cost": "6,000 gp",
    "summary": "A cloak of the salamander deals fire damage to those who strike you in melee with natural weapons or nonreach manufactured weapons. The flames that cover it do not harm you or creatures or objects that you touch. When you activate a cloak of the salamander, any creatures that strike you with such weapons take 1d6+7 points of fire damage. (moderate evocation; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 88",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "cloak-of-the-salamander-greater",
    "name": "Cloak of the Salamander, Greater",
    "category": "wondrous",
    "cost": "36,000 gp",
    "summary": "As a cloak of the salamander, except the effect is continuous and requires no activation.",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 88",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "cloak-of-thorns",
    "name": "Cloak of Thorns",
    "category": "wondrous",
    "cost": "26,000 gp",
    "summary": "A cloak of thorns grants you a +2 enhancement bonus to your existing natural armor bonus. (A creature without natural armor has an effective natural armor bonus of +0.) In addition, any creature striking you in melee with a natural weapon or nonreach manufactured weapon takes 1d4+3 points of piercing damage. (moderate transmutation; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 88",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "cloak-of-turn-resistance",
    "name": "Cloak of Turn Resistance",
    "category": "wondrous",
    "cost": "11,000 gp",
    "summary": "While you wear this cloak, your turn resistance increases by 4. (moderate necromancy; CL 10th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 89",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "cloak-of-weaponry",
    "name": "Cloak of Weaponry",
    "category": "wondrous",
    "cost": "2,300 gp",
    "summary": "A cloak of weaponry has an extradimensional space within it that can hold a single Collar of healing weapon with a weight of up to 25 pounds and a size no larger than Medium. When you activate the cloak, you can draw forth the weapon (or stow a weapon, if the cloak is empty). Creatures and nonweapon objects can't be stored within the cloak. (moderate conjuration; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 89",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "collar-of-healing",
    "name": "Collar of Healing",
    "category": "wondrous",
    "cost": "5,000 gp",
    "summary": "This collar allows you to heal your trusted animal friend at a moment's notice. A collar of healing functions only when worn by your animal companion, familiar, or special mount. While that creature wears the collar, you always know its exact hit point total. This is a continuous effect and requires no activation. (moderate conjuration; CL 11th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 89",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "contact-medallion",
    "name": "Contact Medallion",
    "category": "wondrous",
    "cost": "3,000 gp",
    "summary": "When you activate a contact medallion, you forge a telepathic bond (as Rary's telepathic bond) with one person who is within 1 mile and known to you. This bond lasts for 1 minute. This ability functions three times per day. (moderate enchantment; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 90",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "corsairs-eyepatch",
    "name": "Corsair'S Eyepatch",
    "category": "wondrous",
    "cost": "3,000 gp",
    "summary": "Despite its name, the improved visual acuity provided by a corsair's eyepatch is equally useful to landlubbers. Wearing this eyepatch has no negative impact on your eyesight—it appears completely transparent to you. While you wear a corsair's eyepatch over your left eye, activating it grants you the ability to use see invisibility (as the spell) for 1 round. (faint divination; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 90",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "counterstrike-bracers",
    "name": "Counterstrike Bracers",
    "category": "wondrous",
    "cost": "2,500 gp",
    "summary": "Counterstrike bracers allow you to answer an unsuccessful melee attack against you with an unexpected riposte. You can activate the bracers immediately after an enemy has missed you with a melee attack. Doing this grants you a free attack of opportunity against that enemy (even if you have already used up your allotted attacks of opportunity for the round). (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 90",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "crest-of-bravery",
    "name": "Crest of Bravery",
    "category": "wondrous",
    "cost": "750 gp",
    "summary": "A crest of bravery adds a regal touch to your attire, emphasizing your bravery and loyalty to your comrades. A crest has 3 charges, which are renewed each day at dawn. Spending 1 or more charges enhances your ability to bolster your allies against fear, as described below. The effect lasts for 5 rounds. (faint abjuration; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 90",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "crimson-dragonhide-bracers",
    "name": "Crimson Dragonhide Bracers",
    "category": "wondrous",
    "cost": "5,000 gp",
    "summary": "Crimson dragonhide bracers grant you resistance to fire 5 and a +1 enhancement bonus to your existing natural armor bonus. (A creature without natural armor has an effective natural armor bonus of +0.). (faint abjuration; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 90",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "crystal-mask-of-detection",
    "name": "Crystal Mask of Detection",
    "category": "wondrous",
    "cost": "10,000 gp",
    "summary": "A crystal mask of detection grants you a +10 competence bonus on Search checks. (moderate divination; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 90",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "crystal-mask-of-discernment",
    "name": "Crystal Mask of Discernment",
    "category": "wondrous",
    "cost": "10,000 gp",
    "summary": "Crystal mask of A crystal mask of discernment grants you a +10 insight bonus on Sense Motive checks. (moderate divination; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 90",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "crystal-mask-of-dread",
    "name": "Crystal Mask of Dread",
    "category": "wondrous",
    "cost": "10,000 gp",
    "summary": "A crystal mask of dread grants you a +10 competence bonus on Intimidate checks. (moderate divination; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 91",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "crystal-mask-of-insight",
    "name": "Crystal Mask of Insight",
    "category": "wondrous",
    "cost": "20,000 gp",
    "summary": "A crystal mask of insightful detection grants you a +9 insight bonus on Search and Spot checks. (moderate divination; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 91",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "crystal-mask-of-knowledge",
    "name": "Crystal Mask of Knowledge",
    "category": "wondrous",
    "cost": "2,500 gp",
    "summary": "A crystal mask of knowledge grants you a +5 competence bonus on a specific type of Knowledge check. For instance, one mask would add the bonus on Knowledge (psionics) checks, while another would do so for Knowledge (history). (faint divination; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 91",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "crystal-mask-of-languages",
    "name": "Crystal Mask of Languages",
    "category": "wondrous",
    "cost": "2,500 gp",
    "summary": "Each of the various crystal masks of languages grants you the ability to speak, read, and write five different languages. For example, a mask might grant the ability to speak, read, and write Celestial, Draconic, Dwarven, Elven, and Infernal. (faint divination; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 91",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "crystal-mask-of-mindarmor",
    "name": "Crystal Mask of Mindarmor",
    "category": "wondrous",
    "cost": "10,000 gp",
    "summary": "A crystal mask of mindarmor grants you a +4 insight bonus on Will saving throws. (faint enchantment; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 92",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "crystal-mask-of-psionic-craft",
    "name": "Crystal Mask of Psionic Craft",
    "category": "wondrous",
    "cost": "10,000 gp",
    "summary": "A crystal mask of psionic craft grants you a +10 competence bonus on Psicraft checks. (moderate divination; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 92",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "crystal-mask-of-visual-insight",
    "name": "Crystal Mask of Visual Insight",
    "category": "wondrous",
    "cost": "10,000 gp",
    "summary": "When activated, a crystal mask of visual insight allows you to ignore the effects of concealment (but not invisibility) on any creature within 30 feet for 1 round. (strong divination; CL 15th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 92",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "deathguardian-bracers",
    "name": "Deathguardian Bracers",
    "category": "wondrous",
    "cost": "6,000 gp",
    "summary": "Deathguardian bracers allow you to trade arcane spells for protection from physical harm. When you activate the bracers, choose a prepared arcane spell or uncast spell slot. You lose that spell or spell slot (as if you had cast the spell) and gain damage reduction equal to twice the level of the spell or spell slot sacrificed. (moderate abjuration; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 93",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "deathstrike-bracers",
    "name": "Deathstrike Bracers",
    "category": "wondrous",
    "cost": "5,000 gp",
    "summary": "When activated, deathstrike bracers allow you to use melee weapons to deal extra damage from critical hits and sneak attacks to constructs, elementals, oozes, plants, and undead as if they were not immune to such extra damage. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 93",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "desperation-chain",
    "name": "Desperation Chain",
    "category": "wondrous",
    "cost": "15,000 gp",
    "summary": "A desperation chain gives an arcane spellcaster the opportunity to either avoid capture or strike back against an enemy. You can activate a desperation chain when you are being rendered helpless by an enemy (such as being pinned, paralyzed, or dropped to –1 or fewer hit points). (strong no school; CL 13th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 93",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "devastation-gauntlets",
    "name": "Devastation Gauntlets",
    "category": "wondrous",
    "cost": "2,000 gp",
    "summary": "Devastation gauntlets are prized by anyone who earns gold by fighting in melee, from raging barbarians to wily swashbucklers. These gauntlets have 3 charges, which are renewed each day at dawn. Spending 1 or more charges grants you a bonus to the damage dealt by a critical hit you make in melee. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 93",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "dimension-stride-boots",
    "name": "Dimension Stride Boots",
    "category": "wondrous",
    "cost": "2,000 gp",
    "summary": "While wearing dimension stride boots, you gain a +2 competence bonus on Jump checks. This is a continuous effect and requires no activation. In addition, the boots have 5 charges, which are renewed each day at dawn. Spending 1 or more charges allows you to teleport a short distance (with no chance of error). (faint conjuration; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 94",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "dispelling-cord",
    "name": "Dispelling Cord",
    "category": "wondrous",
    "cost": "1,000 gp",
    "summary": "A dispelling cord is worn wrapped loosely around your chest, its two ends slung over your shoulder. When you activate a dispelling cord, you gain a +2 competence bonus on any dispel checks you make until the end of your turn. A dispelling cord functions five times per day. (faint abjuration; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 94",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "dragon-mask",
    "name": "Dragon Mask",
    "category": "wondrous",
    "cost": "4,000 gp",
    "summary": "When activated, a dragon mask allows you to use see invisibility, as the spell, for 5 minutes. This ability functions two times per day. (moderate divination; CL 6th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 94",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "dragon-spirit-amulet",
    "name": "Dragon Spirit Amulet",
    "category": "wondrous",
    "cost": "2,000 gp",
    "summary": "Prized by dragon shamans (PH2 11), a dragon spirit amulet expands the range of the draconic aura channeled by those characters. When you activate this amulet, your draconic aura affects you and all allies within 60 feet to whom you have line of effect. This effect lasts for 1 round. (moderate transmutation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 95",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "dragon-spirit-cincture",
    "name": "Dragon Spirit Cincture",
    "category": "wondrous",
    "cost": "2,000 gp",
    "summary": "While you wear a dragon spirit cincture, your breath weapon damage is increased by one die (or by 1 point if your breath weapon doesn't deal damage expressed in dice). If you are also holding a magic weapon that deals the same type of damage as your breath weapon, your breath weapon save DC increases by 1. (moderate evocation; CL 6th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 95",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "dragons-eye-amulet",
    "name": "Dragon'S-Eye Amulet",
    "category": "wondrous",
    "cost": "55,000 gp",
    "summary": "While wearing this amulet, you gain a +10 competence bonus on Search and Spot checks, and blindsense out to 30 feet. (moderate transmutation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 95",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "dragonfang-gauntlets",
    "name": "Dragonfang Gauntlets",
    "category": "wondrous",
    "cost": "8,610 gp",
    "summary": "Dragonfang gauntlets function as masterwork spiked gauntlets and also grant you a +2 enhancement bonus to Strength. In addition, three times per day, you can activate the gauntlets to treat your next melee attack against a weapon or shield as though you had the Improved Sunder feat, even if you don't meet its prerequisites. (faint evocation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 95",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "dragonscale-cloak",
    "name": "Dragonscale Cloak",
    "category": "wondrous",
    "cost": "5,000 gp",
    "summary": "While wearing this cloak, you have resistance 5 to an energy type of your choice (acid, cold, electricity, or fire) provided that you are chaotic evil, neutral evil, or chaotic neutral. You can select or change the resistance by speaking the command word. Relic item; additional relic power with the proper divine connection (see text). (strong transmutation; CL 20th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 95",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "dreaming-blindfold",
    "name": "Dreaming Blindfold",
    "category": "wondrous",
    "cost": "7,500 gp",
    "summary": "While wearing a dreaming blindfold, you are effectively blinded, but you can send a useful or terrible dream to a sleeping creature. Once per day, the blindfold can produce either one of two effects (but not both in the same day): Dream: You send a phantasmal message to a specific known living creature. (moderate illusion; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 96",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "eagle-claw-talisman",
    "name": "Eagle Claw Talisman",
    "category": "wondrous",
    "cost": "1,000 gp",
    "summary": "The wearer of an eagle claw talisman is capable of delivering ruinous strikes against doors, locked chests, or other objects. When you activate an eagle claw talisman, you gain a +5 competence bonus on the next Strength check (or unarmed strike damage roll) you make to break or burst an item. This effect lasts for 1 round or until used. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 96",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "empowered-spellshard",
    "name": "Empowered Spellshard",
    "category": "wondrous",
    "cost": "1,500 gp (1st-level spell); 3,000 gp (2nd-level spell); 6,000 gp (3rd-level spell)",
    "summary": "An empowered spellshard is keyed to a specific spell of up to 3rd level. When you cast the attuned spell, you can use your empowered spellshard as a focus in addition to the spell's normal components (if any). Doing this empowers the spell (as though using the Empower Spell feat, but with no adjustment to spell level or casting time). (moderate varies; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 96",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "enduring-amulet",
    "name": "Enduring Amulet",
    "category": "wondrous",
    "cost": "1,500 gp",
    "summary": "An enduring amulet protects you from extremes of temperature, as if by the endure elements spell. This is a continuous effect and requires no activation. In addition, the amulet has 3 charges, which are renewed each day at dawn. Spending 1 or more charges grants you resistance to cold and fire for 1 round. 1 charge: Resistance to cold 10 and fire 10. (faint abjuration; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 97",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "enemy-spirit-pouch",
    "name": "Enemy Spirit Pouch",
    "category": "wondrous",
    "cost": "2,100 gp",
    "summary": "This item is keyed to a single type of creature (aberration, animal, magical beast, and so on). A pouch keyed to humanoids or outsiders must be keyed to a subtype as described in the ranger's favored enemy ability (PH 47). While wearing an enemy spirit pouch, you gain a +1 competence bonus on attack rolls against creatures of this type. (faint divination; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 97",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "essentia-helm",
    "name": "Essentia Helm",
    "category": "wondrous",
    "cost": "3,000 gp",
    "summary": "These imposing helmets are valued by incarnates and other meldshapers, because they can temporarily supercharge one or more of your soulmelds or other essentia receptacles (see Magic of Incarnum for details on incarnum). An essentia helm has 3 charges, which are renewed each day at dawn. (moderate transmutation; CL 11th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 97",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "executioners-hood",
    "name": "Executioner'S Hood",
    "category": "wondrous",
    "cost": "6,000 gp",
    "summary": "Death and destruction have accompanied the former wearers of an executioner's hood. Those who know of this item's dark history are terrified to look upon one. While wearing an executioner's hood, you can attempt a coup de grace attack as a standard action rather than a full-round action if you are chaotic evil, neutral evil, or chaotic neutral. Relic item; additional relic power with the proper divine connection (see text). (strong transmutation; CL 20th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 97",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "eyes-of-expanded-vision",
    "name": "Eyes of Expanded Vision",
    "category": "wondrous",
    "cost": "3,200 gp",
    "summary": "These lenses expand your field of vision. Flanking opponents gain only a +1 bonus when attacking you instead of +2 (attack benefits that are conditional on flanking, such as a rogue's sneak attack damage, still apply because you remain flanked). You gain a +2 competence bonus on Spot checks but take a –2 penalty on saves against gaze attacks. (faint divination; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 98",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "eyes-of-power-leech",
    "name": "Eyes of Power Leech",
    "category": "wondrous",
    "cost": "10,000 gp",
    "summary": "Once per day, you can drain power points from another psionic creature by meeting its gaze. A selected target within 40 feet must succeed on a DC 16 Will save, or a connection of crackling energy is formed between the wearer and the victim. (moderate enchantment; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 98",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "eyes-of-power-leech-vampiric",
    "name": "Eyes of Power Leech, Vampiric",
    "category": "wondrous",
    "cost": "20,000 gp",
    "summary": "As eyes of power leech, except that you gain power points from the subject even if doing so would bring you over your normal maximum. Furthermore, you can maintain concentration for up to 13 rounds. Power points you gain in excess of your maximum fade after 8 hours if they are not spent before that time. (strong enchantment; CL 15th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 98",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "eyes-of-truth",
    "name": "Eyes of Truth",
    "category": "wondrous",
    "cost": "5,500 gp",
    "summary": "Eyes of truth grant you improved visual acuity, and can allow you briefly to see the world as it truly is. While worn, the lenses grant you a +5 competence bonus on Spot checks. This is a continuous effect and requires no activation. In addition, you can activate the lenses to gain a true seeing effect (as the spell) for 1 round. (moderate divination; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 99",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "fanged-mask",
    "name": "Fanged Mask",
    "category": "wondrous",
    "cost": "8,300 gp",
    "summary": "When you activate a fanged mask, you can make a natural bite attack. The bite deals 1d6 points of damage plus your Strength modifier (assuming you are Medium; see DMG 28 for details on damage for larger and smaller creatures). (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 99",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "farspeaking-amulet",
    "name": "Farspeaking Amulet",
    "category": "wondrous",
    "cost": "6,000 gp",
    "summary": "To use a farspeaking amulet, one character wears the central crystal, while up to four others carry the four removable, red crystals. Removable crystals don't occupy a body slot, and can simply be carried. Charms can be removed or replaced as a standard action. (faint divination; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 99",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "fiendhelm",
    "name": "Fiendhelm",
    "category": "wondrous",
    "cost": "10,000 gp",
    "summary": "A fiendhelm allows an evil-aligned wearer to emulate certain traits of evil extraplanar creatures. Your melee attacks are treated as evil-aligned for the purpose of overcoming damage reduction. This is a continuous effect and requires no activation. (moderate abjuration; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 99",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "fiery-tunic",
    "name": "Fiery Tunic",
    "category": "wondrous",
    "cost": "5,000 gp",
    "summary": "A fiery tunic grants you resistance to fire 5. This is a continuous effect and requires no activation. When you activate the tunic, it generates a fire shield, as the spell (warm shield effect only), that lasts for 5 rounds. In addition, any melee weapons you hold while the fire shield is active are treated as flaming weapons (DMG 224). (moderate conjuration; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 99",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "finned-gauntlets",
    "name": "Finned Gauntlets",
    "category": "wondrous",
    "cost": "3,500 gp",
    "summary": "You gain a natural swim speed of 30 feet (which also grants you a +8 bonus on Swim checks to perform some special action or avoid a hazard). You can always take 10 on a Swim check, even if distracted or endangered, and can use the run action while swimming. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 100",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "fireflower-pendant",
    "name": "Fireflower Pendant",
    "category": "wondrous",
    "cost": "13,000 gp",
    "summary": "A fireflower pendant provides you with resistance—or even brief immunity—to fiery attacks. While it is worn, you gain resistance to fire 10. This is a continuous effect and requires no activation. When you activate the pendant, you gain immunity to fire until the start of your next turn. (strong abjuration; CL 13th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 100",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "flesh-ring-of-scorn",
    "name": "Flesh Ring of Scorn",
    "category": "wondrous",
    "cost": "8,000 gp",
    "summary": "To gain the benefit of a flesh ring of scorn, you must wear it as a piercing through the flesh of your upper chest. You can activate it whenever you score a critical threat on a creature. (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 100",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "formless-vest",
    "name": "Formless Vest",
    "category": "wondrous",
    "cost": "3,200 gp",
    "summary": "A formless vest allows you to briefly make your body amorphous, allowing you to avoid particularly deadly strikes. Once per day, you can activate this vest to take half of the damage dealt to you by a critical hit or sneak attack. (moderate transmutation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 100",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "gauntlet-of-gruumsh",
    "name": "Gauntlet of Gruumsh",
    "category": "wondrous",
    "cost": "8,302 gp",
    "summary": "Three times per day, this +1 gauntlet allows you to make a melee touch attack to blind a target creature for 1 hour (Fort DC 14 negates). Elves take a –4 penalty on this save. (faint necromancy; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 101",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "gauntlet-of-infinite-blades",
    "name": "Gauntlet of Infinite Blades",
    "category": "wondrous",
    "cost": "6,500 gp",
    "summary": "A gauntlet of infinite blades allows you to produce a weapon at a moment's notice. When it is activated, a dagger appears in the hand wearing the gauntlet. This ability functions as often as needed, though the dagger disappears 3 rounds after it is created. In addition, the gauntlet has 5 charges, which are renewed each day at dawn. (strong conjuration; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 101",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "gauntlets-of-arrow-reflection",
    "name": "Gauntlets of Arrow Reflection",
    "category": "wondrous",
    "cost": "2,000 gp",
    "summary": "Gauntlets of arrow reflection allow you to redirect a deflected thrown or projectile weapon back at your attacker. When you use the Deflect Arrows feat (PH 93) to deflect a ranged weapon attack, you can activate the gauntlets to cause the weapon to fly back at the character who made the attack. (faint abjuration; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 101",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "gauntlets-of-eldritch-energy",
    "name": "Gauntlets of Eldritch Energy",
    "category": "wondrous",
    "cost": "5,000 gp",
    "summary": "Gauntlets of eldritch energy let you imbue your eldritch blasts (CAr 7) with a particular type of energy. (moderate transmutation; CL 10th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 102",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "gauntlets-of-energy-transformation",
    "name": "Gauntlets of Energy Transformation",
    "category": "wondrous",
    "cost": "1,000 gp",
    "summary": "Gauntlets of energy transformation allow you to temporarily change the type of energy produced by any weapon you hold. (faint evocation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 102",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "gauntlets-of-extended-range",
    "name": "Gauntlets of Extended Range",
    "category": "wondrous",
    "cost": "2,000 gp",
    "summary": "Whenever you throw a weapon or other object, gauntlets of extended range give the weapon a telekinetic push, doubling its range increment. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 103",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "gauntlets-of-giantfelling",
    "name": "Gauntlets of Giantfelling",
    "category": "wondrous",
    "cost": "2,000 gp",
    "summary": "When you activate gauntlets of giantfelling, you gain a bonus on the next weapon damage roll you make against a creature larger than you before the end of your turn. The extra damage is based on how many size categories larger than you the target is: 1 category larger: +1d6 damage. 2 categories larger: +2d6 damage. 3 or more categories larger: +3d6 damage. This ability functions three times per day. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 103",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "gauntlets-of-lassitude",
    "name": "Gauntlets of Lassitude",
    "category": "wondrous",
    "cost": "5,000 gp",
    "summary": "Three times per day, you can make a melee touch attack with these gauntlets. If your attack is successful, the target is subjected to the effect of a slow spell for 5 rounds (Will DC 14 negates). (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 103",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "gauntlets-of-mindfire",
    "name": "Gauntlets of Mindfire",
    "category": "wondrous",
    "cost": "11,000 gp",
    "summary": "Once per day, gauntlets of mindfire can be activated to project a 15-foot cone-shaped burst of mental sickness. A successful DC 14 Fortitude save negates the effect. Any creature that fails its saving throw contracts a virulent form of mindfire. A victim can be infected only once; subsequent uses of this item on an infected target produce no further effect. Mindfire has no incubation period - a victim immediately takes 1d4 points of Intelligence damage. Each day thereafter, a victim must succeed on a DC 14 Fortitude save or take another 1d4 points of Intelligence damage. If a victim succeeds on its Fortitude save two days in a row, it fights off the disease and takes no more damage. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 103",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "gauntlets-of-the-blazing-arc",
    "name": "Gauntlets of the Blazing Arc",
    "category": "wondrous",
    "cost": "6,300 gp",
    "summary": "When activated, gauntlets of the blazing arc create a 15-foot cone-shaped burst of flame that deals 4d4+4 points of fire damage to all creatures in the area (Reflex DC 14 half). This ability functions three times per day. (moderate evocation; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 101",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "gauntlets-of-the-blood-lord",
    "name": "Gauntlets of the Blood-Lord",
    "category": "wondrous",
    "cost": "5,120 gp",
    "summary": "Said to harbor the blood of a thousand victims, each pair of these gauntlets has a long and grisly history. They function as +1 spiked gauntlets if you are lawful evil, lawful neutral, or neutral evil. Relic item; additional relic power with the proper divine connection (see text). (strong necromancy; CL 20th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 101",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "gauntlets-of-the-talon",
    "name": "Gauntlets of the Talon",
    "category": "wondrous",
    "cost": "4,000 gp",
    "summary": "Provided that you are lawful good, lawful neutral, or neutral good, gauntlets of the talon grant you two primary natural claw attacks that count as magic weapons for the purpose of overcoming damage reduction. Each claw deals 1d6 points of slashing damage (if you are Medium). Relic item; additional relic power with the proper divine connection (see text). (strong transmutation; CL 20th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 103",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "gauntlets-of-throwing",
    "name": "Gauntlets of Throwing",
    "category": "wondrous",
    "cost": "2,000 gp",
    "summary": "Gauntlets of throwing turn any handheld weapon into a deadly thrown weapon. When you activate gauntlets of throwing, you grant any one melee weapon you hold the throwing and returning properties (DMG 225–226) for 1 round. This ability functions three times per day. (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 104",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "gauntlets-of-weaponry-arcane",
    "name": "Gauntlets of Weaponry Arcane",
    "category": "wondrous",
    "cost": "6,000 gp",
    "summary": "Any weapon (even a nonmetallic one) you hold while wearing these gauntlets overcomes damage reduction as if it were a magic silvered weapon. (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 104",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "gem-of-the-glitterdepth",
    "name": "Gem of the Glitterdepth",
    "category": "wondrous",
    "cost": "4,500 gp",
    "summary": "To gnomes, these gems are the very embodiment of the earth's blessings. When you wear a gem of the glitterdepth, you gain a +2 enhancement bonus to Wisdom if you are neutral good, lawful good, chaotic good, or neutral. Relic Power: If you have established the proper divine connection, you also have blindsense out to 30 feet while wearing the gem. Relic item; additional relic power with the proper divine connection (see text). (strong transmutation; CL 20th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 104",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ghost-shroud",
    "name": "Ghost Shroud",
    "category": "wondrous",
    "cost": "5,000 gp",
    "summary": "While wearing a ghost shroud, you gain a +1 deflection bonus to Armor Class. In addition, all your melee attacks can affect incorporeal creatures as if you were wielding a ghost touch weapon. (strong necromancy; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 104",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ghoul-gauntlets",
    "name": "Ghoul Gauntlets",
    "category": "wondrous",
    "cost": "10,000 gp",
    "summary": "Ghoul gauntlets have no effect when worn by a construct or undead creature. If you are a living creature, however, these gauntlets virtually meld with your flesh when you put them on, making your hands appear gaunt and rotting. (faint necromancy; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 104",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "githborn-talisman",
    "name": "Githborn Talisman",
    "category": "wondrous",
    "cost": "1,800 gp",
    "summary": "Both githyanki knights who captain astral longships and githzerai monks who hunt in rrakmas are known to wear these stones, which are designed for use against their most hated enemies. (moderate transmutation; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 105",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "gloves-of-agile-striking",
    "name": "Gloves of Agile Striking",
    "category": "wondrous",
    "cost": "2,200 gp",
    "summary": "Gloves of agile striking grant you brief bursts of impressive dexterity in combat. When you activate these gloves, you deal an extra 1d6 points of damage with ranged weapons and light weapons (as well as nonlight weapons that can be used with Weapon Finesse, such as a rapier). (moderate transmutation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 105",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "gloves-of-eldritch-admixture",
    "name": "Gloves of Eldritch Admixture",
    "category": "wondrous",
    "cost": "2,500 gp",
    "summary": "Warlocks (CAr 5) prize these gloves, which allow them to enhance their eldritch blasts with pure energy. Gloves of eldritch admixture have 3 charges, which are renewed each day at dawn. Spending 1 or more charges adds extra damage to the next eldritch blast you make before the end of your turn. (faint evocation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 105",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "gloves-of-flame",
    "name": "Gloves of Flame",
    "category": "wondrous",
    "cost": "7,000 gp",
    "summary": "Gloves of flame provide you with the protection of an endure elements spell against cold temperatures and resistance to cold 5. These are continuous effects and require no activation. In addition, five times per day you can utter the word “burn” in Ignan to generate flame in the palm of one hand. (faint conjuration; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 105",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "gloves-of-fortunate-striking",
    "name": "Gloves of Fortunate Striking",
    "category": "wondrous",
    "cost": "2,000 gp",
    "summary": "You can activate gloves of fortunate striking to reroll an attack roll that you've made before you know whether the attack succeeded. You must use the second result, even if it's lower. You can't use this ability if you have already rerolled the attack for any reason. This ability functions once per day. (faint divination; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 105",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "gloves-of-incarnum-theft",
    "name": "Gloves of Incarnum Theft",
    "category": "wondrous",
    "cost": "8,000 gp",
    "summary": "While wearing gloves of incarnum theft, if you make a successful unarmed melee touch attack (as part of the activation) against a target with essentia, you gain 1 point of essentia and the target loses 1 point from its essentia pool (Will DC 15 negates). If the target has no essentia pool, the attack has no effect. (moderate necromancy; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 106",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "gloves-of-lightning",
    "name": "Gloves of Lightning",
    "category": "wondrous",
    "cost": "2,000 gp",
    "summary": "Three times per day, you can make a ranged touch attack (range 30 feet) that deals 1d8+5 points of electricity damage. You gain a +3 bonus on the attack if the target is wearing metal armor (or is made out of metal, is carrying a lot of metal, and so on). (faint evocation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 106",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "gloves-of-manual-prowess",
    "name": "Gloves of Manual Prowess",
    "category": "wondrous",
    "cost": "3,000 gp",
    "summary": "Gloves of manual prowess allow you to temporarily excel at tasks involving fine manual dexterity. These gloves have 3 charges, which are renewed each day at dawn. (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 106",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "gloves-of-object-reading",
    "name": "Gloves of Object Reading",
    "category": "wondrous",
    "cost": "3,000 gp",
    "summary": "While wearing these gloves and handling an inanimate object, you can learn details about that object's previous owner through the psychic impressions it has accumulated. The amount of information revealed depends on how long you study the object. 1st minute: Last owner's race. 2nd minute: Last owner's gender. 3rd minute: Last owner's age. (faint divination; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 107",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "gloves-of-spell-disruption",
    "name": "Gloves of Spell Disruption",
    "category": "wondrous",
    "cost": "1,000 gp",
    "summary": "If you hit a creature with a melee attack while it is casting a spell, add 5 to the DC of the Concentration check required to avoid losing the spell. (faint abjuration; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 107",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "gloves-of-the-balanced-hand",
    "name": "Gloves of the Balanced Hand",
    "category": "wondrous",
    "cost": "8,000 gp",
    "summary": "While wearing these gloves, you fight as though you possess the Two-Weapon Fighting feat. If you already have TwoWeapon Fighting, you can make an additional attack with your off hand as if using the Improved Two-Weapon Fighting feat. (strong transmutation; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 105",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "gloves-of-the-titans-grip",
    "name": "Gloves of the Titan'S Grip",
    "category": "wondrous",
    "cost": "14,000 gp",
    "summary": "While wearing these gloves, you gain a +8 enhancement bonus on grapple checks. These gloves automatically activate when you enter a grapple, and the effect lasts for 7 rounds. This ability functions three times per day. (moderate transmutation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 107",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "gloves-of-the-uldra-savant",
    "name": "Gloves of the Uldra Savant",
    "category": "wondrous",
    "cost": "3,100 gp",
    "summary": "While wearing these gloves, you can create a ray of frost at will. In addition, three times per day, you can imbue any melee weapon held in your hand with the frost property (DMG 224) for 5 rounds. (faint evocation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 107",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "goggles-of-day",
    "name": "Goggles of Day",
    "category": "wondrous",
    "cost": "4,500 gp",
    "summary": "When you place these goggles over your eyes, you can operate without penalty in preternaturally bright light, such as might result from a flare, sunbeam, or sunburst spell. These goggles also allow a vampire wearer to take a full-round action prior to dissolution when confronted with sunlight, as opposed to just a move or standard action. (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 107",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "goggles-of-draconic-vision",
    "name": "Goggles of Draconic Vision",
    "category": "wondrous",
    "cost": "16,000 gp",
    "summary": "Goggles of draconic vision grant you a +5 bonus on Spot checks, low-light vision, and darkvision out to 60 feet. In addition, while wearing them, you cannot be blinded by the cloud a hovering dragon creates (though the cloud still provides concealment for all within it). These are continuous effects and require no activation. (moderate transmutation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 107",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "goggles-of-foefinding",
    "name": "Goggles of Foefinding",
    "category": "wondrous",
    "cost": "2,500 gp",
    "summary": "When you attack foes that have cover while you wear goggles of foefinding, you can ignore the cover bonus to AC they would normally receive. The goggles do not, however, allow you to circumvent the effect of total cover. (faint divination; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 108",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "goggles-of-lifesight",
    "name": "Goggles of Lifesight",
    "category": "wondrous",
    "cost": "2,000 gp",
    "summary": "When you activate these goggles, you automatically know whether any visible creature within 30 feet is alive, dead, undead, or neither alive nor dead (such as a construct). This power can be blocked by any effect that would prevent the effect of a detect undead spell. This ability functions three times per day. (moderate divination; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 108",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "goggles-of-the-ebon-hunter",
    "name": "Goggles of the Ebon Hunter",
    "category": "wondrous",
    "cost": "18,000 gp",
    "summary": "Goggles of the ebon hunter grant you darkvision out to 30 feet, as well as a +1 competence bonus on attack rolls and damage rolls with ranged weapons. (CL 6th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 108",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "goodberry-bracelet",
    "name": "Goodberry Bracelet",
    "category": "wondrous",
    "cost": "2,000 gp",
    "summary": "A goodberry bracelet provides basic nourishment and minor healing to its wearer and her allies. Each day at dawn, as long as it is worn, this bracelet creates five silver, berry-shaped charms. (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 108",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "greater-piwafwi",
    "name": "Greater Piwafwi",
    "category": "wondrous",
    "cost": "6,500 gp",
    "summary": "A greater piwafwi grants you resistance to fire 5 and a +5 competence bonus on Hide checks. A lesser version of this item is equivalent to a cloak of elvenkind (DMG 253). (faint abjuration, illusion; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 108",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "greatreach-bracers",
    "name": "Greatreach Bracers",
    "category": "wondrous",
    "cost": "2,000 gp",
    "summary": "Sometimes called “choker sleeves” due to their appearance and effect, these pliable bracers allow you to attack from a surprising distance. When you activate greatreach bracers, your arms stretch and elongate, extending your reach by 10 feet for 1 round. This ability functions three times per day. (moderate transmutation; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 108",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "gwaerons-belt",
    "name": "Gwaeron'S Belt",
    "category": "wondrous",
    "cost": "21,000 gp",
    "summary": "A Gwaeron's belt has two abilities, each of which functions once per day. The first command causes your weapon to burst into flames (as the flaming weapon property; DMG 224) for 12 rounds. The second command produces a wind walk effect, as the spell, but affecting only you. (strong transmutation; CL 13th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 109",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "gwaerons-boots",
    "name": "Gwaeron'S Boots",
    "category": "wondrous",
    "cost": "6,000 gp",
    "summary": "While wearing these boots, you are affected as if by a pass without trace spell. In addition, you produce no smell and cannot be detected by the scent extraordinary ability. (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 109",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "hair-shirt-of-suffering",
    "name": "Hair Shirt of Suffering",
    "category": "wondrous",
    "cost": "3,400 gp",
    "summary": "A hair shirt of suffering provides a +1 enhancement bonus to your existing natural armor. (A creature without natural armor has an effective natural armor bonus of +0.) This is a continuous effect and requires no activation. (moderate conjuration; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 109",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "hand-of-the-oak-father",
    "name": "Hand of the Oak Father",
    "category": "wondrous",
    "cost": "5,000 gp",
    "summary": "A hand of the oak father has six abilities, each of which functions once per day: barkskin, entangle, goodberry, plant growth, speak with plants, and tree shape. All abilities function as the spells of the same name. A hand of the oak father has hardness 10 and resistance to acid 10, cold 10, electricity 10, fire 10, and sonic 10. (faint divination; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 109",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "hat-of-anonymity",
    "name": "Hat of Anonymity",
    "category": "wondrous",
    "cost": "12,500 gp",
    "summary": "This hat obscures you from detection, allowing you to blend into a crowd with ease. While you wear it, you are under a continuous nondetection effect and have a +5 bonus on Hide checks. (moderate abjuration; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 109",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "headband-of-conscious-effort",
    "name": "Headband of Conscious Effort",
    "category": "wondrous",
    "cost": "2,000 gp",
    "summary": "While wearing a headband of conscious effort, you can attempt a Concentration check instead of a required Fortitude saving throw once per day. (moderate transmutation; CL 6th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 109",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "headband-of-the-lorebinder",
    "name": "Headband of the Lorebinder",
    "category": "wondrous",
    "cost": "1,600 gp",
    "summary": "A headband of the lorebinder grants a +4 sacred bonus on bardic knowledge checks (and on a loremaster's lore checks). This is a continuous effect and requires no activation. Three times per day, you can activate the headband to gain the effect of a read magic spell. This ability lasts for 30 minutes. (faint divination; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 110",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "healing-belt",
    "name": "Healing Belt",
    "category": "wondrous",
    "cost": "750 gp",
    "summary": "While wearing a healing belt, you gain a +2 competence bonus on Heal checks. This is a continuous effect and requires no activation. In addition, the belt has 3 charges, which are renewed each day at dawn. Spending 1 or more charges allows you to channel positive energy and heal damage with a touch. (faint conjuration; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 110",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "heartseeking-amulet",
    "name": "Heartseeking Amulet",
    "category": "wondrous",
    "cost": "3,000 gp",
    "summary": "A heartseeking amulet allows your weapon to pierce armor and scaled hides as if they were air. When you activate this amulet, the next melee attack you make is made as a melee touch attack instead. If you don't make a melee attack by the end of your turn, the effect is wasted. (strong transmutation; CL 15th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 110",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "hellcat-gauntlets",
    "name": "Hellcat Gauntlets",
    "category": "wondrous",
    "cost": "3,200 gp",
    "summary": "When you activate hellcat gauntlets, the next spell you cast during your turn that targets a single creature also deals 1d6 points of slashing damage per level of the spell, unless the spell has no effect on the target (due to spell resistance or a save negating the spell, for example), in which case the extra damage is negated. (moderate transmutation; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 111",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "helm-of-battle",
    "name": "Helm of Battle",
    "category": "wondrous",
    "cost": "2,000 gp",
    "summary": "A helm of battle is a useful tool if you favor tactical maneuvers over brute force. When you activate the helm, you gain a +2 bonus on the next attack roll or ability check you make to attempt a bull rush, disarm, overrun, sunder, or trip attempt during your turn. This ability functions three times per day. (moderate transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 111",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "helm-of-gazes",
    "name": "Helm of Gazes",
    "category": "wondrous",
    "cost": "5,000 gp",
    "summary": "Each time you would be required to roll a save against a gaze attack, a helm of gazes automatically absorbs the gaze (with no action required). This ability functions three times per day. (strong abjuration; CL 13th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 111",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "helm-of-glorious-recovery",
    "name": "Helm of Glorious Recovery",
    "category": "wondrous",
    "cost": "5,600 gp",
    "summary": "Developed by a militant, lawful good sect for its paladins, these helmets are potent healing devices. Once per day, this helmet can heal you of 4d8+7 points of damage. (moderate conjuration; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 111",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "helm-of-heroes",
    "name": "Helm of Heroes",
    "category": "wondrous",
    "cost": "5,600 gp",
    "summary": "A helm of heroes is prized by marshals (MH 11), because it allows them to better direct their allies in battle. When you wear this helm and use your grant move action ability, you can choose instead to grant each affected character a single melee attack (using each ally's full base attack bonus). (moderate evocation; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 111",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "helm-of-the-purple-plume",
    "name": "Helm of the Purple Plume",
    "category": "wondrous",
    "cost": "4,500 gp",
    "summary": "Symbolic of honor and justice, the purple plume marks a warrior of particular valor and conspicuous honor. While wearing a helm of the purple plume, you have a +2 enhancement bonus to Charisma if you are lawful good, neutral good, or lawful neutral. Relic item; additional relic power with the proper divine connection (see text). (strong transmutation; CL 20th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 111",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "hexbands",
    "name": "Hexbands",
    "category": "wondrous",
    "cost": "3,100 gp",
    "summary": "Hexblades (CW 5) rely on these items to enhance their curse power and their combat prowess. While worn, hexbands increase the save DC of your hexblade's curse by 1. This is a continuous effect and requires no activation. (moderate transmutation; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 112",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "horned-helm",
    "name": "Horned Helm",
    "category": "wondrous",
    "cost": "8,000 gp",
    "summary": "When you place a horned helm on your head, the antlers join solidly with your skull. These antlers grant you a natural secondary gore attack that deals 1d8 points of damage plus half your Strength bonus. The antlers are treated as a magic weapon for the purpose of overcoming damage reduction. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 112",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "impervious-vestment",
    "name": "Impervious Vestment",
    "category": "wondrous",
    "cost": "34,000 gp",
    "summary": "An impervious vestment grants a +5 armor bonus to your Armor Class. This is a continuous effect and requires no activation. In addition, you can command it once per day to create a blade barrier as a ringed wall of whirling blades only (20 feet high, up to 90 feet in diameter, centered on your current location). (strong evocation; CL 18th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 112",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "incarnum-focus",
    "name": "Incarnum Focus",
    "category": "wondrous",
    "cost": "15,000 gp",
    "summary": "While worn, an incarnum focus adds 1 to the essentia capacity of any soulmeld occupying or bound to the chakra it matches (up to a maximum capacity equal to your Constitution bonus). Wearing an incarnum focus does not prevent you from binding a soulmeld to the corresponding chakra. Ten different kinds of incarnum focus exist, one for each chakra. Chakra Bind (Any): While an incarnum focus is bound to its chakra, any soulmeld occupying or bound to the same chakra can't be unshaped except by you, nor can any essentia invested in it be lost or drained, except as part of the normal reallocation process. (moderate transmutation; CL 6th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 112",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "inquisitor-bracers",
    "name": "Inquisitor Bracers",
    "category": "wondrous",
    "cost": "1,500 gp",
    "summary": "Inquisitor bracers provide a potent method for sorting out normal townsfolk from conniving vampires or similarly stealthy undead. After you activate these bracers, the next melee attack you make before the end of your turn includes a cure moderate wounds effect (in addition to the normal damage dealt by the attack). (faint conjuration; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 113",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ki-straps",
    "name": "Ki Straps",
    "category": "wondrous",
    "cost": "5,000 gp",
    "summary": "When wrapped around both hands, these straps grant a +2 enhancement bonus to the DC of your Stunning Fist attack (or any other effect gained by expending daily uses of that feat). (moderate transmutation; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 113",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "lenses-of-bright-vision",
    "name": "Lenses of Bright Vision",
    "category": "wondrous",
    "cost": "600 gp",
    "summary": "Lenses of bright vision allow you to project light from your eyes. When placed over your eyes (a standard action), these lenses meld into your face, and the irises of your eyes take on a faint yellow hue. When you activate the lenses, they create a 15-foot cone of bright light emanating from your eyes. (faint evocation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 113",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "lenses-of-true-form",
    "name": "Lenses of True Form",
    "category": "wondrous",
    "cost": "10,000 gp",
    "summary": "When you place these lenses over your eyes, they become all but invisible (Spot DC 30 to notice). While wearing the lenses, you gain a +10 circumstance bonus on Spot checks to see through a disguise. This is a continuous effect and requires no activation. (strong divination; CL 13th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 113",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "lightning-gauntlets",
    "name": "Lightning Gauntlets",
    "category": "wondrous",
    "cost": "1,000 gp",
    "summary": "Each pair of lightning gauntlets has 3 charges, which are renewed each day at dawn. Spending 1 or more charges allows you to deal electricity damage to an adjacent target. No attack roll is required, but a successful DC 14 Reflex save halves the damage dealt. 1 charge: 2d6 points of electricity damage. 2 charges: 3d6 points of electricity damage. (faint evocation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 113",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "lightning-tunic",
    "name": "Lightning Tunic",
    "category": "wondrous",
    "cost": "8,000 gp",
    "summary": "This tunic has 3 charges, renewed each day at dawn. Spending charges creates an electrical field around your body for 3 rounds that deals electricity damage to anyone striking you with a natural attack or nonreach melee weapon: 1 charge 2d6, 2 charges 3d6, 3 charges 4d6.",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 114",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "lockpicking-ring",
    "name": "Lockpicking Ring",
    "category": "ring",
    "cost": "3,500 gp",
    "summary": "Hidden below the stone in this ring is a set of tiny prongs, wires, and other small devices that spring out when the trigger is depressed. Using a lockpicking ring grants you a +5 competence bonus on Open Lock checks. This is a continuous effect and requires no activation. In addition, you can activate the ring once per day to use knock. (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 114",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "lore-gem",
    "name": "Lore Gem",
    "category": "wondrous",
    "cost": "7,500 gp",
    "summary": "Affixed to the forehead (standard action to apply or remove), this gem grants a +2 competence bonus on Knowledge checks when you spend a full round in contemplation. It also functions as a spellbook holding up to thirty spells of any levels, which can be recorded, prepared from, and erased (standard action) as normal for a spellbook.",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 114",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "mantle-of-second-chances",
    "name": "Mantle of Second Chances",
    "category": "wondrous",
    "cost": "12,000 gp",
    "summary": "Once per day you can tap into the power of good fortune. When you do so, you can reroll one roll that you have just made before the DM declares whether it resulted in success or failure. You must accept the result of the reroll, even if it's worse than the original roll. (CL 10th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 115",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "mask-of-blood",
    "name": "Mask of Blood",
    "category": "wondrous",
    "cost": "3,300 gp",
    "summary": "While worn, any rage or frenzy you enter lasts 1 round longer (continuous). Twice per day you can activate the mask to spit a stream of blood as a ranged touch attack (range 30 ft.) dealing 4d6 points of acid damage.",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 115",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "mask-of-lies",
    "name": "Mask of Lies",
    "category": "wondrous",
    "cost": "4,500 gp",
    "summary": "While worn, you gain a +5 competence bonus on Bluff checks and your alignment is disguised as by an undetectable alignment spell (continuous). Three times per day you can activate the mask to alter your appearance as by a disguise self spell.",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 115",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "mask-of-mental-armor",
    "name": "Mask of Mental Armor",
    "category": "wondrous",
    "cost": "4,000 gp",
    "summary": "While worn, you gain a +3 resistance bonus on saving throws against mind-affecting spells and abilities.",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 115",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "mask-of-silent-trickery",
    "name": "Mask of Silent Trickery",
    "category": "wondrous",
    "cost": "5,000 gp",
    "summary": "A mask of silent trickery allows you to cast certain spells without others hearing you. When you activate this mask, you can omit the verbal component of the next enchantment or illusion spell you cast before the end of your turn (as if applying the Silent Spell feat to it, but without altering the spell's level or casting time). (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 116",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "mask-of-sweet-air",
    "name": "Mask of Sweet Air",
    "category": "wondrous",
    "cost": "2,000 gp",
    "summary": "While wearing a mask of sweet air, you can breathe freely in air fouled by smoke, dust, and fumes without fear of suffocation. You gain a +5 bonus on saves against airborne stench attacks and inhaled poisons, such as the stench of a troglodyte or the effect of cloudkill. (moderate conjuration; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 116",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "medal-of-gallantry",
    "name": "Medal of Gallantry",
    "category": "wondrous",
    "cost": "1,350 gp",
    "summary": "A medal of gallantry grants you a +2 bonus on Diplomacy checks but imposes a –2 penalty on Bluff checks. This is a continuous effect and requires activation. Three times per day, you can activate the medal to use sanctuary on yourself. (faint abjuration; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 116",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "mesmerists-gloves",
    "name": "Mesmerist'S Gloves",
    "category": "wondrous",
    "cost": "8,000 gp",
    "summary": "Mesmerist's gloves allow a spellcaster to affect an extra target with her enchantment spells. Any time you cast an enchantment spell of 3rd level or lower that targets an enemy, you can activate this item to have the spell also target another enemy within 10 feet of the original target. This ability functions two times per day. (strong enchantment; CL 13th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 116",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "mind-blade-gauntlet",
    "name": "Mind Blade Gauntlet",
    "category": "wondrous",
    "cost": "24,000 gp",
    "summary": "A mind blade gauntlet allows a soulknife to enhance the power of his mind blade. Each mind blade gauntlet is created with a particular weapon property with a market price modifier of +2 (such as collision) that can be used by a soulknife with the mind blade enhancement class feature (see the soulknife class description, EPH 26). (moderate conjuration; CL 10th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 117",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "mind-blade-gauntlet-greater",
    "name": "Mind Blade Gauntlet, Greater",
    "category": "wondrous",
    "cost": "42,000 gp",
    "summary": "A greater mind blade gauntlet functions as a mind blade gauntlet, except that it holds a weapon property with a +3 bonus market price modifier that can be used by a soulknife with the mind blade enhancement class feature. (CL 15th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 117",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "mind-blade-gauntlet-lesser",
    "name": "Mind Blade Gauntlet, Lesser",
    "category": "wondrous",
    "cost": "10,000 gp",
    "summary": "A lesser mind blade gauntlet functions as a mind blade gauntlet, except that it holds a weapon property with a +1 bonus market price modifier that can be used by a soulknife with the mind blade enhancement class feature. (faint conjuration; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 117",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "mindvault",
    "name": "Mindvault",
    "category": "wondrous",
    "cost": "8,000 gp",
    "summary": "A mindvault offers its wearer temporary shelter from effects that would influence his mind. When you activate a mindvault, your consciousness is transferred into the gem held in the circlet for 1 round. While this effect lasts, you are immune to mind-affecting spells and abilities. However, you are dazed in that round as well. (moderate necromancy; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 117",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "mithral-bells",
    "name": "Mithral Bells",
    "category": "wondrous",
    "cost": "3,700 gp",
    "summary": "As long as at least one of the eleven bells that adorn this bracelet remain, it provides a +2 competence bonus on Perform checks. The bells are easily detached, allowing you to remove and throw one up to 40 feet. When it reaches the end of its trajectory, the bell explodes in a sound burst, as the spell. (faint evocation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 117",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "monocle-of-perusal",
    "name": "Monocle of Perusal",
    "category": "wondrous",
    "cost": "6,500 gp",
    "summary": "This lens grants a +5 competence bonus on Appraise checks (continuous) and allows you to use identify three times per day.",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 117",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "moonstone-mask",
    "name": "Moonstone Mask",
    "category": "wondrous",
    "cost": "15,000 gp",
    "summary": "A moonstone mask grants you a +5 competence bonus on Listen and Spot checks, as well as darkvision out to 30 feet. (faint divination; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 118",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "necklace-of-copper-dragon-scales",
    "name": "Necklace of Copper Dragon Scales",
    "category": "wondrous",
    "cost": "570 gp",
    "summary": "Upon touching one of the six scales that make up this necklace and uttering a command word, you gain resistance to acid 5 for 1 hour. Once all six scales are used, the necklace becomes dull and loses its magic. (faint abjuration; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 118",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "necklace-of-warning",
    "name": "Necklace of Warning",
    "category": "wondrous",
    "cost": "4,000 gp",
    "summary": "A necklace of warning warns you of impending danger, granting you a +2 bonus to your flat-footed AC (up to a maximum value equal to your normal AC). (faint divination; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 118",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "pearl-of-speech",
    "name": "Pearl of Speech",
    "category": "wondrous",
    "cost": "600 gp",
    "summary": "These items were originally created by drow and used to command their slaves without stooping to learn their foul languages. The secret of creating pearls of speech long ago became known to bards and others who rely on languages. (moderate divination; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 118",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "pendant-of-joy",
    "name": "Pendant of Joy",
    "category": "wondrous",
    "cost": "4,000 gp",
    "summary": "When it is worn by a character who has at least 1 power point, a pendant of joy subtly reaches out to nearby minds, touching them with feelings of pleasure and contentment. All creatures within 30 feet (including the wearer) gain a +2 morale bonus on Diplomacy checks. (moderate enchantment; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 118",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "phoenix-helm",
    "name": "Phoenix Helm",
    "category": "wondrous",
    "cost": "6,500 gp",
    "summary": "A phoenix helm grants you low-light vision. This is a continuous effect and requires no activation. In addition, you can use each of the following abilities once per day: feather fall, resist energy, and speak with animals (birds only). (moderate abjuration; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 118",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "piercer-cloak",
    "name": "Piercer Cloak",
    "category": "wondrous",
    "cost": "900 gp",
    "summary": "The wearer of a piercer cloak can make devastating attacks when positioned above her enemy. When you activate a piercer cloak, any attack you make on your current turn from higher ground (PH 151) deals an extra 1d6 points of damage. If you charge your enemy from at least 10 feet above him, this extra damage increases to 2d6. This benefit lasts for 1 round. (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 118",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "platinum-helm",
    "name": "Platinum Helm",
    "category": "wondrous",
    "cost": "5,000 gp",
    "summary": "A platinum helm imbues you with the essence of Bahamut, lord of the good dragons. While wearing it, you are immune to the frightful presence of evil dragons if you are lawful good, neutral good, or lawful neutral. Relic item; additional relic power with the proper divine connection (see text). (strong transmutation; CL 20th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 119",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "psionatrix",
    "name": "Psionatrix",
    "category": "wondrous",
    "cost": "8,000 gp",
    "summary": "Each discipline of psionics has its own psionatrix. Wearing one adds a +1 enhancement bonus to the save DC of powers of the appropriate discipline. For example, the DC to resist psionic suggestion is 1 higher when the caster wears a psionatrix of telepathy. (moderate varies; CL 8th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 119",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "quicksilver-boots",
    "name": "Quicksilver Boots",
    "category": "wondrous",
    "cost": "3,500 gp",
    "summary": "Quicksilver boots give you the ability to flash across the battlefield with a moment's impulse. When you activate these boots, you can move a distance up to your land speed (as if using a move action to do so). (faint illusion; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 119",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "rags-of-restraint",
    "name": "Rags of Restraint",
    "category": "wondrous",
    "cost": "3,200 gp",
    "summary": "Rags of restraint allow you to channel ki power to heal your own injuries. When you activate this item, you must either expend a daily use of your Stunning Fist feat (if you are a monk) or a daily use of your ki power class feature (if you are a ninja). (faint conjuration; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 119",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "rapidstrike-bracers",
    "name": "Rapidstrike Bracers",
    "category": "wondrous",
    "cost": "3,100 gp",
    "summary": "Rapidstrike bracers increase the accuracy of a monk's flurry of blows. When you activate these bracers, you gain a +2 competence bonus on attack rolls made as part of a flurry of blows until the end of your turn. This ability functions three times per day. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 119",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "reach-gauntlets",
    "name": "Reach Gauntlets",
    "category": "wondrous",
    "cost": "500 gp",
    "summary": "If you are a psionic character, reach gauntlets allow you to temporarily create a telekinetic extension of your normal attacks. You must spend 1 power point to activate the gauntlets, effectively extending your normal reach by 5 feet for all melee attacks you make until the end of your turn. This ability functions three times per day. (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 120",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "rearguards-cape",
    "name": "Rearguard'S Cape",
    "category": "wondrous",
    "cost": "2,000 gp",
    "summary": "If you are a marshal (MH 11), a rearguard's cape provides you with a potent ability whenever you and your allies are outnumbered. If the number of visible, active enemies within 60 feet of you exceeds the number of your visible, active allies (including yourself) within 60 feet, you can activate this cape. (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 120",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "reciprocal-bracers",
    "name": "Reciprocal Bracers",
    "category": "wondrous",
    "cost": "5,000 gp",
    "summary": "Warriors tired of taking more damage than they deal out appreciate the power of reciprocal bracers, which allow them to turn their enemies' powerful strikes against them. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 120",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "reins-of-ascension",
    "name": "Reins of Ascension",
    "category": "wondrous",
    "cost": "3,300 gp",
    "summary": "These reins allow your mount to briefly break the bonds of gravity. Reins of ascension have 3 charges, which are renewed each day at dawn. Spending 1 or more charges grants your mount a benefit as described below. 1 charge: +10 competence bonus on Jump checks for 10 rounds. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 120",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "reliquary-holy-symbol",
    "name": "Reliquary Holy Symbol",
    "category": "wondrous",
    "cost": "1,000 gp",
    "summary": "As the repository of a tiny fragment of a long-dead high priest of a particular deity, a reliquary holy symbol functions just like any other holy symbol. In addition, for each of the following prerequisites that you meet, the holy symbol grants you one additional daily use of your turn or rebuke undead ability. (faint evocation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 120",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "rending-gauntlets",
    "name": "Rending Gauntlets",
    "category": "wondrous",
    "cost": "3,610 gp",
    "summary": "These masterwork spiked gauntlets allow you to tear the flesh of any creature you strike with at least two weapons. If you deal damage to a creature with at least two different weapons or natural attacks on your turn, you can activate rending gauntlets to deal an extra 2d6 points of damage with the second attack. This ability functions three times per day. (faint evocation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 121",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "repelling-gauntlets",
    "name": "Repelling Gauntlets",
    "category": "wondrous",
    "cost": "2,300 gp",
    "summary": "Inspired by the spells of the legendary wizard Bigby, these gloves help keep enemies at a safe distance. You can activate repelling gauntlets only when a visible enemy moves into a square adjacent to you. (moderate conjuration; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 121",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "retributive-amulet",
    "name": "Retributive Amulet",
    "category": "wondrous",
    "cost": "9,000 gp",
    "summary": "You can activate a retributive amulet immediately after another creature has dealt damage to you with a melee attack. That creature takes damage equal to half the damage it dealt to you. This damage is of the same type (or types). This ability functions three times per day. (faint abjuration; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 121",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "riding-boots",
    "name": "Riding Boots",
    "category": "wondrous",
    "cost": "12,000 gp",
    "summary": "Riding boots react to your mount and correct it when necessary, almost without your guidance. While mounted, you gain a +5 competence bonus on Ride checks made during combat, plus the benefit of the Ride-By Attack feat, even if you lack the prerequisites for it. (moderate transmutation; CL 10th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 121",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ring-of-adamantine-touch",
    "name": "Ring of Adamantine Touch",
    "category": "ring",
    "cost": "6,000 gp",
    "summary": "While you wear this ring, your melee attacks (whether natural or with a weapon) are treated as adamantine for the purpose of overcoming damage reduction. (strong transmutation; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 121",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ring-of-antivenom",
    "name": "Ring of Antivenom",
    "category": "ring",
    "cost": "8,000 gp",
    "summary": "Once per day, you can activate the ring to gain the benefit of a neutralize poison effect. (moderate conjuration; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 121",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ring-of-arcane-might",
    "name": "Ring of Arcane Might",
    "category": "ring",
    "cost": "20,000 gp",
    "summary": "While wearing a ring of arcane might, you gain a +1 bonus to your arcane caster level for the purpose of spell penetration checks, caster level checks, and all level-based variables of any arcane spells you cast. (moderate no school; CL 8th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 121",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ring-of-arming",
    "name": "Ring of Arming",
    "category": "ring",
    "cost": "5,000 gp",
    "summary": "When you activate a ring of arming, any armor or weapons you currently wear disappear and are stored magically within the ring, and any armor or weapons currently stored within the ring appear in the appropriate places on your body (items that must be held appear at your feet if you don't have free hands). (moderate transmutation; CL 10th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 122",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ring-of-avoidance",
    "name": "Ring of Avoidance",
    "category": "ring",
    "cost": "10,000 gp",
    "summary": "A ring of avoidance protects you with a nearly impassable shield of invisible force. Three times per day, upon activating the ring, you gain a +20 deflection bonus to Armor Class that lasts until the beginning of your next turn. (strong abjuration; CL 15th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 122",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ring-of-brief-blessing",
    "name": "Ring of Brief Blessing",
    "category": "ring",
    "cost": "1,000 gp",
    "summary": "A ring of brief blessing, which functions only if you are good-aligned, allows your attacks to pierce the defenses of evil foes. When you activate this ring, choose a single melee weapon you hold (or your unarmed strike). (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 122",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ring-of-communication",
    "name": "Ring of Communication",
    "category": "ring",
    "cost": "2,000 gp",
    "summary": "When you activate a ring of communication, for the next minute you can clearly hear any words spoken by anyone within 1 mile who is wearing another ring of communication to which you are attuned. The volume of the speech and the background noise at either end make no difference; whispers are audible above even the sounds of combat. (faint divination; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 122",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ring-of-divergence",
    "name": "Ring of Divergence",
    "category": "ring",
    "cost": "18,000 gp",
    "summary": "A ring of divergence provides resistance 10 against a specific type of energy (acid, cold, electricity, fire, or sonic), determined when it is created. (strong abjuration; CL 13th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 122",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ring-of-dragon-friendship",
    "name": "Ring of Dragon Friendship",
    "category": "ring",
    "cost": "16,000 gp",
    "summary": "While wearing a ring of dragon friendship, you gain a +5 enhancement bonus on Diplomacy checks made to influence the attitudes of creatures of the dragon type. In addition, once per day, you can activate the ring to produce a suggestion effect directed at a creature of the dragon type. (strong enchantment; CL 17th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 122",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ring-of-entropic-deflection",
    "name": "Ring of Entropic Deflection",
    "category": "ring",
    "cost": "8,000 gp",
    "summary": "A ring of entropic deflection provides a mobile wearer with protection against ranged attacks. At the end of any turn, if you are at least 10 feet from the point where you started your turn, this ring creates a field of warping energy that lasts until the start of your next turn. This field functions as an entropic shield spell. (faint abjuration; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 123",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ring-of-essentia",
    "name": "Ring of Essentia",
    "category": "ring",
    "cost": "6,000 gp",
    "summary": "Any creature that has an essentia pool can transfer 1 point of essentia from its pool into a ring of essentia simply by touching it and willing the transfer to occur (a standard action). Doing so reduces the size of the donor's essentia pool by 1. The ring can hold no more than 1 point of essentia. (faint necromancy; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 123",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ring-of-floating",
    "name": "Ring of Floating",
    "category": "ring",
    "cost": "2,000 gp",
    "summary": "You float upon any liquid or similar surface, and cannot swim below the surface. If you are underwater when you put on a ring of floating, you rise toward the surface at a speed of 30 feet per round. (faint transmutation; CL 1st.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 123",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ring-of-four-winds",
    "name": "Ring of Four Winds",
    "category": "ring",
    "cost": "2,000 gp",
    "summary": "When you activate a ring of the four winds, it creates gusts of wind that grant you a +2 deflection bonus to AC against a single attack. Alternatively, you can activate it to use a feather fall effect on yourself. This ring functions a total of four times per day. (faint evocation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 124",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ring-of-greater-counterspells",
    "name": "Ring of Greater Counterspells",
    "category": "ring",
    "cost": "16,000 gp",
    "summary": "A ring of greater counterspells can hold a spell of 1st through 6th level, much like a ring of counterspells. You cannot cast a stored spell out of the ring, but should that spell ever be cast upon you, it is immediately countered, as a counterspell action, requiring no action (or even knowledge) on your part. (strong abjuration; CL 15th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 124",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ring-of-lightning-flashes",
    "name": "Ring of Lightning Flashes",
    "category": "ring",
    "cost": "11,500 gp",
    "summary": "When you activate a ring of lightning flashes, it emits a powerful blast of lightning that deals 5d6 points of electricity damage (Reflex DC 13 half) to all creatures within 5 feet (other than yourself). Any creature that is in physical contact with you at the time (grappling, engulfing, swallowing, or the like) receives no saving throw against the blast. (faint evocation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 125",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ring-of-master-artifice",
    "name": "Ring of Master Artifice",
    "category": "ring",
    "cost": "25,000 gp",
    "summary": "A ring of master artifice functions only if you can imbue infusions (see the EBERRON Campaign Setting). Assembling the ring from its various components requires 5 minutes and a successful DC 22 Intelligence check, which you can attempt any number of times. Once assembled, a ring of master artifice must be worn for 24 hours for its magic to take effect. (strong no school; CL 14th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 125",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ring-of-master-artifice-greater",
    "name": "Ring of Master Artifice, Greater",
    "category": "ring",
    "cost": "61,000 gp",
    "summary": "This item functions as a ring of master artifice, except a greater ring provides you with one bonus 5th-level infusion and one bonus 6th-level infusion (instead of one bonus 3rd-level infusion and one bonus 4th-level infusion). (strong no school; CL 16th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 125",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ring-of-master-artifice-lesser",
    "name": "Ring of Master Artifice, Lesser",
    "category": "ring",
    "cost": "5,000 gp",
    "summary": "This item functions as a ring of master artifice, except a lesser ring provides you with one bonus 1st-level infusion and one bonus 2nd-level infusion (instead of one bonus 3rd-level infusion and one bonus 4th-level infusion). (strong no school; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 125",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ring-of-mystic-defiance",
    "name": "Ring of Mystic Defiance",
    "category": "ring",
    "cost": "7,500 gp",
    "summary": "A ring of mystic defiance protects you from damaging magical effects. When you activate the ring, you ignore up to 10 points of damage dealt by a spell or spell-like ability. You can activate the ring after you learn the damage a spell or spell-like ability will deal to you, but before the damage is actually dealt. (moderate abjuration; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 125",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ring-of-mystic-fire",
    "name": "Ring of Mystic Fire",
    "category": "ring",
    "cost": "7,500 gp",
    "summary": "A ring of mystic fire provides a boost to your fire-based spells. When casting spells with the fire descriptor, you gain a +1 competence bonus to caster level. This is a continuous effect and requires no activation. In addition, this ring has 3 charges, which are renewed each day at dawn. (moderate evocation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 125",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ring-of-mystic-healing",
    "name": "Ring of Mystic Healing",
    "category": "ring",
    "cost": "3,500 gp",
    "summary": "A ring of mystic healing provides a boost to your healing spells. When casting cure spells, you gain a +1 competence bonus to your caster level. This is a continuous effect and requires no activation. In addition, this ring has 3 charges, which are renewed each day at dawn. (faint conjuration; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 126",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ring-of-mystic-lightning",
    "name": "Ring of Mystic Lightning",
    "category": "ring",
    "cost": "7,500 gp",
    "summary": "A ring of mystic lightning provides a boost to your electricity-based spells. When casting spells with the electricity descriptor, you gain a +1 competence bonus to caster level. This is a continuous effect and requires no activation. In addition, this ring has 3 charges, which are renewed each day at dawn. (moderate evocation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 126",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ring-of-negative-protection",
    "name": "Ring of Negative Protection",
    "category": "ring",
    "cost": "36,000 gp",
    "summary": "You can ignore the 1d6 points of damage dealt by negative-dominant planes, such as the Negative Energy Plane, each round. You also cannot gain negative levels. (strong abjuration; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 126",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ring-of-nine-lives",
    "name": "Ring of Nine Lives",
    "category": "ring",
    "cost": "45,000 gp",
    "summary": "If you ever drop to 0 hit points or below, a ring of nine lives expends one of its charges to heal 20 points of damage. This effect triggers automatically, requiring no action on your part. Also, once per day as an immediate action, you can expend a charge when you fail a saving throw to treat the saving throw as a success. (strong no school; CL 13th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 126",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ring-of-piercing-spells",
    "name": "Ring of Piercing Spells",
    "category": "ring",
    "cost": "2,000 gp",
    "summary": "A ring of piercing spells allows you to deal additional damage with your spells against a nearby, distracted target. When you activate this ring, the next melee touch spell you cast against an enemy you are flanking deals an extra 2d6 points of damage. Touch spells that don't normally deal hit point damage don't gain any benefit from this ability. (strong necromancy; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 126",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ring-of-positive-protection",
    "name": "Ring of Positive Protection",
    "category": "ring",
    "cost": "36,000 gp",
    "summary": "You can ignore the blinding effect of positive-dominant planes, such as the Positive Energy Plane. You also do not gain the fast healing ability usually conferred by such a plane, nor do you gain additional hit points when you reach your normal maximum. Furthermore, spells that channel positive energy—typically cure spells—have no effect on you. (strong abjuration; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 126",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ring-of-self-sufficiency",
    "name": "Ring of Self-Sufficiency",
    "category": "ring",
    "cost": "10,000 gp",
    "summary": "You gain a +10 competence bonus on Autohypnosis checks. (moderate transmutation; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 126",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ring-of-silent-spells",
    "name": "Ring of Silent Spells",
    "category": "ring",
    "cost": "2,000 gp",
    "summary": "When you activate a ring of silent spells, it creates a silence effect, as the spell, centered on you. While this effect lasts, you can cast up to three spells of 3rd level or lower without verbal components (as though using the Silent Spell feat, except that the spells do not require a higher level spell slot or increased casting time). (faint illusion; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 127",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ring-of-soulbound-protection",
    "name": "Ring of Soulbound Protection",
    "category": "ring",
    "cost": "10,000 gp",
    "summary": "While wearing a ring of soulbound protection, you gain a +1 deflection bonus to AC. In addition, the ring serves as a receptacle for your essentia, much like a soulmeld does. Every point of essentia invested in the ring increases its deflection bonus to AC by 1 (up to a maximum bonus of +3). (moderate abjuration; CL 6th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 127",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ring-of-soulbound-protection-greater",
    "name": "Ring of Soulbound Protection, Greater",
    "category": "ring",
    "cost": "26,000 gp",
    "summary": "This item functions as a ring of soulbound protection, except the maximum bonus to AC you can gain with this ring is +5 instead of +3. A greater ring of soulbound protection (set with four sapphires) has a maximum essentia capacity of 4. (strong abjuration; CL 18th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 127",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ring-of-spell-battle",
    "name": "Ring of Spell-Battle",
    "category": "ring",
    "cost": "12,000 gp",
    "summary": "A ring of spell-battle informs you of all spellcasting that occurs within 60 feet of you, as well as allowing you to attempt a Spellcraft check (DC 15 + spell level) to identify the spell being cast (even if you can't see its casting or effect). This is a continuous effect and requires no activation. (strong abjuration; CL 14th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 127",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ring-of-the-darkhidden",
    "name": "Ring of the Darkhidden",
    "category": "ring",
    "cost": "2,000 gp",
    "summary": "You are invisible to darkvision, although you are fully visible in normal light. (faint illusion; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 122",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ring-of-the-forcewall",
    "name": "Ring of the Forcewall",
    "category": "ring",
    "cost": "5,100 gp",
    "summary": "A ring of the forcewall creates a small, nigh-impenetrable barrier. This ring has 3 charges, which are renewed each day at dawn. Spending 1 or more charges creates a 10-foot-square vertical wall of force (as the spell) up to 30 feet away from you. The number of charges spent determines the duration of the wall. (strong transmutation; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 123",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ring-of-the-icy-soul",
    "name": "Ring of the Icy Soul",
    "category": "ring",
    "cost": "18,000 gp",
    "summary": "You gain resistance to cold 20, but you also gain vulnerability to fire and lose any resistance or immunity to fire you already have. You take 1-1/2 times the normal amount of damage from fire, regardless of whether a saving throw is allowed, or if the save is a success or a failure. (moderate transmutation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 124",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ring-of-thunderclaps",
    "name": "Ring of Thunderclaps",
    "category": "ring",
    "cost": "6,000 gp",
    "summary": "You can activate this ring as a swift (command) action to make a melee touch attack before the end of your turn that deals 1d8+5 points of electricity damage if successful. This ability functions three times per day. (moderate evocation; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 127",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ring-of-universal-energy-resistance",
    "name": "Ring of Universal Energy Resistance",
    "category": "ring",
    "cost": "60,000 gp (minor); 120,000 gp (major); 180,000 gp (greater)",
    "summary": "A ring of universal energy resistance functions as a ring of energy resistance (DMG 232) for all types of energy: fire, cold, electricity, acid, and sonic. A minor ring provides resistance 10, a major ring resistance 20, and a greater ring resistance 30. (strong abjuration; CL 15th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 128",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ring-of-vanishing",
    "name": "Ring of Vanishing",
    "category": "ring",
    "cost": "30,000 gp",
    "summary": "A ring of vanishing allows you to briefly become almost entirely imperceptible. When you activate this ring, you become invisible (as greater invisibility), as well as undetectable by hearing, scent, blindsense, blindsight, or tremorsense, for 2 rounds. (moderate illusion; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 128",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ring-of-vengeance",
    "name": "Ring of Vengeance",
    "category": "ring",
    "cost": "4,500 gp",
    "summary": "A ring of vengeance glows softly when worn by a good-aligned creature. Nongood creatures gain no benefit from the ring. Whenever a creature scores a critical hit on you with a melee weapon, this ring unleashes an arc of divine energy that deals 5d6 points of damage to the creature that scored the critical hit. This ability functions three times per day. (strong abjuration; CL 15th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 128",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ring-of-water-breathing",
    "name": "Ring of Water Breathing",
    "category": "ring",
    "cost": "6,000 gp",
    "summary": "While wearing this ring, you can breathe freely underwater. This has no effect on your ability to breathe air. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 128",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "rings-of-force-armor",
    "name": "Rings of Force Armor",
    "category": "ring",
    "cost": "30,000 gp",
    "summary": "This pair of black iron rings must be worn as a set, one on each hand, to function. When so worn, they sheathe you in a field of magical force, granting you a +5 armor bonus to AC. This bonus applies even against incorporeal touch attacks. (moderate evocation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 128",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "robe-of-arcane-might",
    "name": "Robe of Arcane Might",
    "category": "wondrous",
    "cost": "21,000 gp",
    "summary": "A robe of arcane might grants you a +4 armor bonus to AC. In addition, each robe is attuned to one of the eight schools of magic, chosen during creation (and identifiable with a successful DC 20 Spellcraft check). When casting a spell from that school, you gain a +1 competence bonus to your caster level. (faint abjuration; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 129",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "robe-of-mysterious-conjuration",
    "name": "Robe of Mysterious Conjuration",
    "category": "wondrous",
    "cost": "10,000 gp",
    "summary": "A robe of mysterious conjuration intensifies your connection to other planes, linking your mind to the distant realms from which a puissant mage can pluck servants and bind them to his will. (moderate conjuration; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 130",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "robe-of-retaliation",
    "name": "Robe of Retaliation",
    "category": "wondrous",
    "cost": "6,500 gp",
    "summary": "A robe of retaliation allows you to react to attacks with a burst of magical power. If you are struck by a creature wielding a melee weapon or a natural weapon, you can activate the robe and sacrifice an arcane spell of 1st level or higher to deal damage to your attacker equal to 1d6 points per level of the spell sacrificed. (moderate evocation; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 130",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "robe-of-the-inferno",
    "name": "Robe of the Inferno",
    "category": "wondrous",
    "cost": "37,000 gp",
    "summary": "While you wear this robe, it provides you with a +4 armor bonus to AC. This is a continuous effect and requires no activation. The robe can also be activated as a swift (command) action by speaking a word in Ignan that causes four fiery orbs, each about 6 inches in diameter, to spring from the sleeves. (moderate abjuration; CL 10th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 129",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "rock-boots",
    "name": "Rock Boots",
    "category": "wondrous",
    "cost": "2,000 gp",
    "summary": "Rock boots feel rigid, though they do not significantly impede movement. They grant you a +4 bonus on Strength checks made to resist being bull rushed or tripped when standing on the ground. This is a continuous effect and requires no activation. (moderate conjuration; CL 11th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 130",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "rogues-vest",
    "name": "Rogue'S Vest",
    "category": "wondrous",
    "cost": "18,000 gp",
    "summary": "While wearing this vest, you gain a +2 competence bonus on Hide and Move Silently checks, and a +2 competence bonus on Reflex saves. In addition, if you have the skirmish, sneak attack, or sudden strike ability, you deal an extra 1d6 points of damage when making such an attack. (strong divination; CL 13th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 130",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "ruby-cincture-of-immutability",
    "name": "Ruby Cincture of Immutability",
    "category": "wondrous",
    "cost": "12,000 gp",
    "summary": "Wearing a ruby cincture of immutability provides you with a safeguard against attacks that change your form. Once per day, you can instantly counter any effect that would significantly change your bodily form or composition. (moderate abjuration; CL 11th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 131",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "safewing-emblem",
    "name": "Safewing Emblem",
    "category": "wondrous",
    "cost": "250 gp",
    "summary": "If you fall at least 10 feet, a safewing emblem becomes a pair of feathery wings that grant you a feather fall effect, allowing you to descend safely from any height up to 180 feet. When you land, the emblem shatters, its magic expended. (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 131",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "sandals-of-springing",
    "name": "Sandals of Springing",
    "category": "wondrous",
    "cost": "10,000 gp",
    "summary": "Sandals of springing grant you a +10 enhancement bonus on Jump checks. (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 131",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "sandals-of-sprinting",
    "name": "Sandals of Sprinting",
    "category": "wondrous",
    "cost": "2,300 gp",
    "summary": "When you activate sandals of sprinting, you gain a +30-foot enhancement bonus to your land speed (to a maximum of twice your normal speed) until the start of your next turn. This ability functions three times per day. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 131",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "scarab-of-invulnerability",
    "name": "Scarab of Invulnerability",
    "category": "wondrous",
    "cost": "40,000 gp",
    "summary": "A scarab of invulnerability provides you with brief but complete protection from all forms of damage. For 1 round after activating the scarab, you are immune to all forms of damage (including ability damage), whether from weapons, spells, psionic powers, poison, environmental effects, or any other cause. (strong transmutation; CL 15th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 132",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "scarab-of-stabilization",
    "name": "Scarab of Stabilization",
    "category": "wondrous",
    "cost": "20,000 gp",
    "summary": "If your hit points drop below 0 but you are still alive (above –10 hit points), a scarab of stabilization automatically stabilizes you. You are still unconscious from your wounds, but you need not make a stabilization check each round to prevent further hit point loss. (moderate evocation; CL 11th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 132",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "scentblinder",
    "name": "Scentblinder",
    "category": "wondrous",
    "cost": "8,000 gp",
    "summary": "A scentblinder masks your odor, making the scent ability ineffective against you. Creatures cannot track you or detect your location by scent. It also masks the effect of extraordinary, spell-like, and supernatural abilities that you possess that are based on scent, such as a troglodyte's stench. (moderate illusion; CL 11th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 132",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "scouts-headband",
    "name": "Scout'S Headband",
    "category": "wondrous",
    "cost": "3,400 gp",
    "summary": "A scout's headband grants you a +2 competence bonus on Spot checks. This is a continuous effect and requires no activation. In addition, this circlet has 3 charges, which are renewed each day at dawn. Spending 1 or more charges enhances your visual acuity as described below. 1 charge: You gain darkvision out to 60 feet for 1 hour. (moderate divination; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 132",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "scry-shroud",
    "name": "Scry Shroud",
    "category": "wondrous",
    "cost": "4,000 gp",
    "summary": "While wearing a scry shroud, you gain a +5 competence bonus on saves against divination spells. This is a continuous effect and requires no activation. Additionally, if you see or otherwise detect a magical sensor created by a scrying spell, you can activate the cloak to become invisible (as the invisibility spell) for 10 rounds. (moderate illusion; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 133",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "sepulchral-vest",
    "name": "Sepulchral Vest",
    "category": "wondrous",
    "cost": "2,000 gp",
    "summary": "Sometimes jokingly dubbed “gravedigger's shirts,” these items help characters who battle undead. When activated, a sepulchral vest grants you a +5 sacred bonus on saves against any effect generated by an undead creature for 1 round. This ability functions three times per day. (moderate abjuration; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 133",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "shadow-maniple",
    "name": "Shadow Maniple",
    "category": "wondrous",
    "cost": "3,700 gp",
    "summary": "Actually a small rift between the Plane of Shadow and the Material Plane, a shadow maniple allows characters adept at shadow magic to derive healing from their use of such magic. (moderate illusion; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 133",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "shadow-veil",
    "name": "Shadow Veil",
    "category": "wondrous",
    "cost": "16,000 gp",
    "summary": "A shadow veil is crafted from the essence of the undead creatures known as shadows. While wearing it, you gain a +1 deflection bonus to AC. In addition, while in shadowy areas, you are treated as if you had concealment against creatures lacking darkvision, blindsight, or some other sensory ability that does not rely on light. (strong necromancy; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 133",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "shiftweave",
    "name": "Shiftweave",
    "category": "wondrous",
    "cost": "500 gp",
    "summary": "When you activate shiftweave, it changes your garb to resemble any of five specific outfits designated during its creation. Shiftweave has no effect on any armor you wear (nor can it mimic armor) and does not change the effect of any magical clothing you wear. (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 133",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "shirt-of-angels",
    "name": "Shirt of Angels",
    "category": "wondrous",
    "cost": "15,000 gp",
    "summary": "Despite its composition, a shirt of angels is as durable as the sturdiest homespun. This item grants you damage reduction 3/evil. (moderate transmutation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 134",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "shirt-of-bone",
    "name": "Shirt of Bone",
    "category": "wondrous",
    "cost": "9,000 gp",
    "summary": "This shirt grants you damage reduction 3/bludgeoning. (moderate transmutation; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 134",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "shirt-of-chains",
    "name": "Shirt of Chains",
    "category": "wondrous",
    "cost": "9,000 gp",
    "summary": "This shirt grants you damage reduction 3/piercing. (moderate transmutation; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 134",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "shirt-of-demonskin",
    "name": "Shirt of Demonskin",
    "category": "wondrous",
    "cost": "15,000 gp",
    "summary": "This shirt grants you damage reduction 3/good. (moderate transmutation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 134",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "shirt-of-ironskin",
    "name": "Shirt of Ironskin",
    "category": "wondrous",
    "cost": "15,000 gp",
    "summary": "This shirt grants you damage reduction 3/adamantine. (moderate transmutation; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 135",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "shirt-of-resilience",
    "name": "Shirt of Resilience",
    "category": "wondrous",
    "cost": "12,000 gp",
    "summary": "This shirt grants you damage reduction 3/magic. (moderate transmutation; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 135",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "shirt-of-slaadskin",
    "name": "Shirt of Slaadskin",
    "category": "wondrous",
    "cost": "15,000 gp",
    "summary": "This shirt is made from the skin of a slaad. It grants you damage reduction 3/lawful. (moderate transmutation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 135",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "shirt-of-the-fey",
    "name": "Shirt of the Fey",
    "category": "wondrous",
    "cost": "15,000 gp",
    "summary": "When donned, a shirt of the fey fades away, becoming almost impossible to see. This shirt grants you damage reduction 3/cold iron. (moderate transmutation; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 134",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "shirt-of-the-inevitable",
    "name": "Shirt of the Inevitable",
    "category": "wondrous",
    "cost": "15,000 gp",
    "summary": "This shirt is actually the metallic chestplate from one of the constructs of Mechanus—a noble inevitable. It grants you damage reduction 3/chaotic. (moderate transmutation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 134",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "shirt-of-the-leech",
    "name": "Shirt of the Leech",
    "category": "wondrous",
    "cost": "8,000 gp",
    "summary": "Whenever a healing spell of 4th level or lower is cast within 30 feet of you, you instantly recognize the spell being cast. This is a continuous effect and requires no activation. (moderate conjuration; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 135",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "shirt-of-the-moon",
    "name": "Shirt of the Moon",
    "category": "wondrous",
    "cost": "15,000 gp",
    "summary": "This shirt grants you damage reduction 3/silver. (moderate transmutation; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 135",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "shirt-of-the-treant",
    "name": "Shirt of the Treant",
    "category": "wondrous",
    "cost": "9,000 gp",
    "summary": "The leaves that make up the fabric of this shirt were gathered from living treants. This shirt grants you damage reduction 3/slashing. (moderate transmutation; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 136",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "shroud-of-scales",
    "name": "Shroud of Scales",
    "category": "wondrous",
    "cost": "24,000 gp",
    "summary": "While wearing a shroud of scales, you can use your arms and hands normally and see through the garment despite its apparent opacity. You gain damage reduction 5/magic and are immune to a dragon's frightful presence. (moderate abjuration; CL 6th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 136",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "silkslick-belt",
    "name": "Silkslick Belt",
    "category": "wondrous",
    "cost": "2,000 gp",
    "summary": "A silkslick belt is a boon to burglars and contortionists, but also to anyone who wants to avoid being caught in a tight spot. You can attempt an Escape Artist check to escape from a grapple or pin as a move action (rather than as a standard action). This is a continuous effect and requires no activation. (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 136",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "skirmisher-boots",
    "name": "Skirmisher Boots",
    "category": "wondrous",
    "cost": "3,200 gp",
    "summary": "Scouts (CAd 10) prize skirmisher boots, but any character can use them to increase combat prowess in a mobile battle. You gain a +2 bonus on damage rolls when you make a skirmish attack. This is a continuous effect and requires no activation. A character without the skirmish class feature does not gain this benefit. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 136",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "skull-plaque",
    "name": "Skull Plaque",
    "category": "wondrous",
    "cost": "6,200 gp",
    "summary": "Undead creatures take a –2 penalty on attack rolls against the wearer of a skull plaque. This is a continuous effect and requires no activation. A skull plaque also has two additional abilities, each of which can be activated once per day: death knell and detect undead. (faint enchantment; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 136",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "snakeblood-tooth",
    "name": "Snakeblood Tooth",
    "category": "wondrous",
    "cost": "1,350 gp",
    "summary": "When placed into an empty tooth socket, a snakeblood tooth adheres to your jawbone until removed. Placing or removing a tooth requires a standard action. A snakeblood tooth grants you a +5 alchemical bonus on saves against ingested poisons. This is a continuous effect and requires no activation. (moderate conjuration; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 136",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "soulsmite-gauntlets",
    "name": "Soulsmite Gauntlets",
    "category": "wondrous",
    "cost": "3,000 gp",
    "summary": "Soulsmite gauntlets allow a soulborn (MoI 25) to channel the power of a soulmeld into her smite opposition ability. When you use smite opposition, you can select one soulmeld you have shaped. All essentia invested in that soulmeld becomes uninvested, and you gain an additional bonus on your attack roll and damage roll equal to the essentia that was invested. (faint evocation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 136",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "soulstone",
    "name": "Soulstone",
    "category": "wondrous",
    "cost": "10,000 gp",
    "summary": "Soulstones are boons to all those who channel the power of incarnum (see Magic of Incarnum). When you use the proper command thought, this gem adheres to the center of your forehead (the same command thought causes the soulstone to disengage). (moderate transmutation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 137",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "spare-hand",
    "name": "Spare Hand",
    "category": "wondrous",
    "cost": "12,000 gp",
    "summary": "As its most basic function, a spare hand can grasp or carry any object you could normally carry in one hand, freeing your normal hands for other tasks. A spare hand can hold magic items such as wands and rods for easy access, but you cannot activate those items while they are so held. Transferring an item to or from a spare hand is a free action. (moderate transmutation; CL 11th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 137",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "spellmight-bracers",
    "name": "Spellmight Bracers",
    "category": "wondrous",
    "cost": "3,300 gp",
    "summary": "When casting a spell that requires a touch attack and deals hit point damage, you can take a -5 penalty on the attack roll to deal an extra 1d6 points of damage with the spell. A duskblade can use these bracers when delivering a touch spell through a melee weapon, even if the spell deals no hit point damage; the weapon then deals the extra 1d6 damage.",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 137",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "spellsight-spectacles",
    "name": "Spellsight Spectacles",
    "category": "wondrous",
    "cost": "2,500 gp",
    "summary": "Spellsight spectacles grant you a +5 competence bonus on Spellcraft checks made to decipher scrolls and Use Magic Device checks made to use scrolls. (faint divination; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 138",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "spellsink-scarab",
    "name": "Spellsink Scarab",
    "category": "wondrous",
    "cost": "2,000 gp",
    "summary": "You can activate a spellsink scarab whenever you would take hit point damage from a spell or psionic power. A scarab has 3 charges, which are renewed each day at dawn. Spending 1 or more charges reduces the damage dealt to you by the spell or power (to a minimum of 0 points of damage). 1 charge: Reduce damage by 2d6 points. (moderate abjuration; CL 11th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 138",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "steadfast-boots",
    "name": "Steadfast Boots",
    "category": "wondrous",
    "cost": "1,400 gp",
    "summary": "Steadfast boots help keep you on your feet. You gain a +4 bonus on checks made to avoid being bull rushed, overrun, or tripped. (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 138",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "storm-gauntlets",
    "name": "Storm Gauntlets",
    "category": "wondrous",
    "cost": "10,604 gp",
    "summary": "When worn together, this pair of +1 spiked gauntlets grants you resistance to electricity 5. This is a continuous effect and requires no activation. In addition, storm gauntlets have 4 charges, which are renewed each day at dawn. Spending 1 or more charges allows you to generate a number of electricity-based effects. 1 charge: shocking grasp. (moderate evocation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 139",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "strongarm-bracers",
    "name": "Strongarm Bracers",
    "category": "wondrous",
    "cost": "6,000 gp",
    "summary": "When wearing strongarm bracers, you can wield weapons as if you were one size category larger than normal. (You don't take any penalty when using weapons as normal for your size.) For example, a human wearing these bracers could wield Large or Medium weapons without penalty. (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 139",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "surcoat-of-valor",
    "name": "Surcoat of Valor",
    "category": "wondrous",
    "cost": "4,000 gp",
    "summary": "If you are a knight (PH2 24), a surcoat of valor grants you various benefits associated with your challenge ability. You can increase the save DC of your knight's challenge by 1. If you also wear a magic item that provides a bonus on Will saves (or on all saves), the duration of your knight's challenge increases by 1 round. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 139",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "surge-crystal",
    "name": "Surge Crystal",
    "category": "wondrous",
    "cost": "18,000 gp",
    "summary": "A surge crystal allows you to exceed your normal manifesting limits briefly. A crystal has 5 charges, which are renewed each day at dawn. Spending 1 or more charges increases your manifester level for the next psionic power you manifest in that round. (moderate transmutation; CL 10th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 139",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "symbol-of-transfiguration",
    "name": "Symbol of Transfiguration",
    "category": "wondrous",
    "cost": "500 gp",
    "summary": "Many good-aligned religions have some especially well-wrought holy symbols that are actually symbols of transfiguration. Three times per day, a symbol of transfiguration allows you to produce a purify food and drink effect. Once per day, you can use align weapon (good only) on any weapon you hold, though the duration is only 1 round. (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 139",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "tabard-of-the-disembodied",
    "name": "Tabard of the Disembodied",
    "category": "wondrous",
    "cost": "6,000 gp",
    "summary": "A tabard of the disembodied is connected to the Ethereal Plane, the realm where ghosts hold sway. Once per day, you can activate this tabard to become ethereal for 1 round, provided that you are neutral evil, lawful evil, chaotic evil, or neutral. Relic item; additional relic power with the proper divine connection (see text). (strong transmutation; CL 20th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 140",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "tabard-of-the-great-crusade",
    "name": "Tabard of the Great Crusade",
    "category": "wondrous",
    "cost": "5,500 gp",
    "summary": "Because of its association with uncommon valor and amazing healing power, a tabard of the great crusade is a welcome sight at any scene of armed conflict. When you wear one of these garments over armor, you and every ally within 20 feet gains a +1 morale bonus on saving throws, provided that you are lawful neutral, lawful good, lawful evil, or neutral. Relic item; additional relic power with the proper divine connection (see text). (strong conjuration; CL 20th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 140",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "third-eye-aware",
    "name": "Third Eye Aware",
    "category": "wondrous",
    "cost": "10,000 gp",
    "summary": "This crystal continually grants you a +10 competence bonus on Spot checks. (moderate divination; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 140",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "third-eye-clarity",
    "name": "Third Eye Clarity",
    "category": "wondrous",
    "cost": "3,000 gp",
    "summary": "You can activate this crystal to negate any one of the following conditions affecting you: confused, dazed, fascinated, or stunned. You can activate the eye in response to an effect that would impose one of these conditions (for instance, after failing your save against a monk's Stunning Fist attack but before the stun takes effect). (moderate conjuration; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 141",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "third-eye-conceal",
    "name": "Third Eye Conceal",
    "category": "wondrous",
    "cost": "120,000 gp",
    "summary": "A third eye conceal protects you from view by all devices, spells, or powers that detect, influence, or read emotions or thoughts, as well as those with mind-affecting or scrying descriptors. (strong enchantment; CL 15th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 141",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "third-eye-concentrate",
    "name": "Third Eye Concentrate",
    "category": "wondrous",
    "cost": "10,000 gp",
    "summary": "This crystal grants you a +10 competence bonus on Concentration checks. (moderate transmutation; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 141",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "third-eye-dampening",
    "name": "Third Eye Dampening",
    "category": "wondrous",
    "cost": "2,500 gp",
    "summary": "You can activate a third eye dampening to reduce all variable numeric effects of the next power, psi-like ability, spell, or spell-like ability that affects you to the minimum value (if this power or spell would affect multiple creatures, only you are protected). This protection lasts until the end of your next turn. This ability functions once per day. (faint abjuration; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 141",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "third-eye-dominate",
    "name": "Third Eye Dominate",
    "category": "wondrous",
    "cost": "120,000 gp",
    "summary": "A third eye dominate allows you to use dominate monster (as the spell) once per day on any creature within 60 feet (Will DC 23 negates). (strong enchantment; CL 17th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 141",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "third-eye-expose",
    "name": "Third Eye Expose",
    "category": "wondrous",
    "cost": "2,500 gp",
    "summary": "This crystal grants you a +5 competence bonus on Sense Motive checks. (strong transmutation; CL 15th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 141",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "third-eye-freedom",
    "name": "Third Eye Freedom",
    "category": "wondrous",
    "cost": "2,600 gp",
    "summary": "You can activate a third eye freedom to trigger a freedom of movement effect lasting for 1 round. Since this ability suppresses only the effect hindering your movement, you must either find some other method of removing or eliminating the effect, or it will resume after the duration ends. This ability functions once per day. (moderate abjuration; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 141",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "third-eye-gather",
    "name": "Third Eye Gather",
    "category": "wondrous",
    "cost": "10,000 gp",
    "summary": "This crystal grants you a +10 competence bonus on Gather Information checks. (moderate divination; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 141",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "third-eye-improvisation",
    "name": "Third Eye Improvisation",
    "category": "wondrous",
    "cost": "1,000 gp",
    "summary": "You can activate this crystal to gain a +5 competence bonus on a single skill check for a skill in which you have no ranks. You are treated as being trained in the skill for the purpose of making this check. You must begin the check before the end of your turn to gain this benefit, and the check must be completed within 10 minutes. (faint divination; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 141",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "third-eye-penetrate",
    "name": "Third Eye Penetrate",
    "category": "wondrous",
    "cost": "8,000 gp",
    "summary": "A third eye penetrate grants you a +2 bonus on caster level checks to overcome a creature's spell resistance. (strong no school; CL 15th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 142",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "third-eye-powerthieve",
    "name": "Third Eye Powerthieve",
    "category": "wondrous",
    "cost": "10,000 gp",
    "summary": "A third eye powerthieve allows you to borrow one power from a psionic target within 40 feet once per day. If the target fails a DC 16 Will save, it instantly loses one power of your choice, and you instantly gain temporary knowledge of that power. (moderate enchantment; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 142",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "third-eye-repudiate",
    "name": "Third Eye Repudiate",
    "category": "wondrous",
    "cost": "15,000 gp",
    "summary": "A third eye repudiate allows you to use dispel magic (as the spell) once per day. (moderate abjuration; CL 10th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 142",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "third-eye-sense",
    "name": "Third Eye Sense",
    "category": "wondrous",
    "cost": "24,000 gp",
    "summary": "At will, you can activate this crystal to see and hear a distant location. Line of sight or line of effect is not necessary, but the locale must be a place familiar to you or an obvious one, such as behind a door, around a corner, or in a grove of trees. (faint divination; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 142",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "third-eye-surge",
    "name": "Third Eye Surge",
    "category": "wondrous",
    "cost": "2,100 gp",
    "summary": "A third eye surge has 3 charges, which are renewed each day at dawn. Spending 1 or more charges grants you an insight bonus on Strength checks, Dexterity checks, Strengthand Dexterity-based skill checks, and weapon damage rolls for 1 round. 1 charge: +2 insight bonus. 2 charges: +3 insight bonus. 3 charges: +4 insight bonus. (strong transmutation; CL 13th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 143",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "torc-of-displacement",
    "name": "Torc of Displacement",
    "category": "wondrous",
    "cost": "2,000 gp",
    "summary": "A torc of displacement allows you to temporarily shift your image slightly away from your current location. A torc has 3 charges, which are renewed each day at dawn. Spending 1 or more charges grants you concealment for 1 round. The effectiveness of this concealment (the miss chance provided) varies depending on the number of charges spent. (faint illusion; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 143",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "torc-of-heroic-sacrifice",
    "name": "Torc of Heroic Sacrifice",
    "category": "wondrous",
    "cost": "6,000 gp",
    "summary": "A torc of heroic sacrifice allows you to take an injury meant for your ally. When you activate this torc, you take all the damage dealt to a single ally by a single attack or effect that has just occurred. The damage dealt to you has no type, and therefore ignores any energy resistance, damage reduction, or immunities you might have. (strong enchantment; CL 13th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 143",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "torc-of-power-preservation",
    "name": "Torc of Power Preservation",
    "category": "wondrous",
    "cost": "4,000 gp",
    "summary": "Five times per day, you can manifest a power by paying power points equal to the standard cost minus 1 (minimum 1). (strong no school; CL 15th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 143",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "torc-of-the-titans",
    "name": "Torc of the Titans",
    "category": "wondrous",
    "cost": "3,300 gp",
    "summary": "When you activate a torc of the titans, you gain a +5 morale bonus on Strength checks, Strength-based skill checks, and melee weapon damage rolls for 1 round. This ability functions three times per day. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 143",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "toxic-gloves",
    "name": "Toxic Gloves",
    "category": "wondrous",
    "cost": "6,000 gp",
    "summary": "Toxic gloves allow you to imbue a held weapon with poison without any risk to yourself. When you activate these gloves, choose a single melee weapon you hold. The next attack made with that weapon before the end of your turn also poisons the target (injury; 1d6 Con/1d6 Con; Fort DC 16 negates). This ability functions three times per day. (moderate necromancy; CL 7th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 144",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "transposer-cloak",
    "name": "Transposer Cloak",
    "category": "wondrous",
    "cost": "6,000 gp",
    "summary": "A transposer cloak allows you to switch positions with another creature. When you activate this cloak, you and any one creature within 30 feet swap positions. Both you and the target must occupy the same size of space on the battlefield (for instance, a human could swap places with a dwarf or a goblin, but not with an ogre or a cat). (strong conjuration; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 144",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "true-strike-gauntlets",
    "name": "True Strike Gauntlets",
    "category": "wondrous",
    "cost": "3,500 gp",
    "summary": "When you activate true strike gauntlets, you gain a +20 insight bonus on the next attack you make before the end of your next turn. This ability functions once per day. (faint divination; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 144",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "tunic-of-steady-spellcasting",
    "name": "Tunic of Steady Spellcasting",
    "category": "wondrous",
    "cost": "2,500 gp",
    "summary": "You gain a +5 competence bonus on Concentration checks. Despite the name, the tunic's bonus applies on all Concentration checks, not just those made to cast spells. (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 144",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "unicorn-pendant",
    "name": "Unicorn Pendant",
    "category": "wondrous",
    "cost": "6,000 gp",
    "summary": "A unicorn pendant has two abilities, each of which can be activated once per day: cure moderate wounds (2d8+10 points of damage) and neutralize poison. In addition, if you are a paladin wearing a unicorn pendant, you treat your Charisma as 4 points higher than normal for the purpose of your lay on hands ability. (moderate conjuration; CL 10th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 144",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "vambraces-of-warding",
    "name": "Vambraces of Warding",
    "category": "wondrous",
    "cost": "8,000 gp",
    "summary": "Vambraces of warding fit snugly over the arms of any creature that dons them. A good-aligned wearer gains a +2 sacred bonus to AC against ranged attacks. (faint abjuration; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 144",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "vampire-torc",
    "name": "Vampire Torc",
    "category": "wondrous",
    "cost": "5,000 gp",
    "summary": "A vampire torc allows you to heal your own wounds when you deal damage to an enemy. When you activate this torc, the next successful melee attack you make before the end of your turn also heals you of an amount of damage equal to half the damage your attack dealt. This ability functions equally well regardless of your creature type. (faint necromancy; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 144",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "vanguard-treads",
    "name": "Vanguard Treads",
    "category": "wondrous",
    "cost": "3,100 gp",
    "summary": "Vanguard treads provide you with superior traction and stability, which provides the following effects: • You can move through difficult terrain (such as rubble, undergrowth, steep slopes, stairs, or snow) at normal speed and without suffering any other impairment. (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 145",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "vanisher-cloak",
    "name": "Vanisher Cloak",
    "category": "wondrous",
    "cost": "2,500 gp",
    "summary": "A vanisher cloak allows you and nearby allies to briefly disappear from sight. A cloak has 3 charges, which are renewed each day at dawn. Spending 1 or more charges turns you (and perhaps one or more allies) invisible, as the invisibility spell, for 1 or more rounds. 1 charge: You become invisible for 4 rounds. (faint illusion; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 145",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "veil-of-allure",
    "name": "Veil of Allure",
    "category": "wondrous",
    "cost": "14,000 gp",
    "summary": "A veil of allure increases the save DC of your enchantment spells or spell-like abilities, as well as the Charisma-based save DCs of your extraordinary or supernatural abilities, by 2. (faint transmutation; CL 5th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 145",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "vest-of-defense",
    "name": "Vest of Defense",
    "category": "wondrous",
    "cost": "2,000 gp",
    "summary": "A vest of defense improves your ability to dodge attacks. When activated, this vest improves the dodge bonus to AC granted by fighting defensively, the total defense action, or the Combat Expertise feat by 2. Using more than one of these techniques doesn't provide more than a +2 bonus. This bonus lasts for 1 round. This ability functions three times per day. (faint transmutation; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 146",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "vest-of-resistance",
    "name": "Vest of Resistance",
    "category": "wondrous",
    "cost": "1,000 gp (+1); 4,000 (+2); 9,000 (+3); 16,000 (+4); 25,000 (+5)",
    "summary": "A vest of resistance offers magical protection in the form of a +1 to +5 resistance bonus on saving throws. (moderate abjuration; CL 10th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 147",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "vest-of-the-archmagi",
    "name": "Vest of the Archmagi",
    "category": "wondrous",
    "cost": "200,000 gp",
    "summary": "The vest of the archmagi is legendary. It fills the dreams of every apprentice sent to clean the inkpots and dust the tomes, but rumors of this item are unfounded. (strong no school; CL 20th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 145",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "vest-of-the-master-evoker",
    "name": "Vest of the Master Evoker",
    "category": "wondrous",
    "cost": "10,000 gp",
    "summary": "Crackling with power, a vest of the master evoker intensifies arcane evocation spells you cast. Many an ambitious evoker sees gaining this vest as a rite of passage, much like casting his first magic missile or fireball, and among elite warmages (CAr 10) it serves as an unparalleled status symbol. (moderate evocation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 146",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "vestments-of-ebonsilk",
    "name": "Vestments of Ebonsilk",
    "category": "wondrous",
    "cost": "5,000 gp",
    "summary": "Thus far, the only known vestments of ebonsilk have been found in the possession of drow clerics. If you are chaotic evil, neutral evil, or chaotic neutral, wearing these vestments grants you a +2 resistance bonus on saving throws. Relic Power: If you have established the proper divine connection, the vestments also grant you a continual spider climb effect. Relic item; additional relic power with the proper divine connection (see text). (strong abjuration; CL 20th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 147",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "wand-bracelet",
    "name": "Wand Bracelet",
    "category": "wondrous",
    "cost": "12,000 gp",
    "summary": "A wand bracelet can store up to four items, which appear as charms along the bracelet. You can grab one of the charms from the bracelet as a swift (manipulation) action, causing it to appear in your hand. (CL 6th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 147",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "war-wizard-cloak",
    "name": "War Wizard Cloak",
    "category": "wondrous",
    "cost": "16,000 gp",
    "summary": "A war wizard cloak protects you from the elements (as endure elements) and also activates a feather fall effect on you automatically if you fall more than 5 feet. This is a continuous effect and requires no activation. (moderate evocation; CL 9th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 147",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "watch-lamp",
    "name": "Watch Lamp",
    "category": "wondrous",
    "cost": "500 gp",
    "summary": "When activated, a watch lamp creates a globe of light that hovers at your shoulder and sheds light as a torch. The light follows you wherever you move. It can be extinguished with a second command. (faint evocation; CL 1st.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 147",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "water-cloak",
    "name": "Water Cloak",
    "category": "wondrous",
    "cost": "12,000 gp",
    "summary": "Despite its damp appearance, a water cloak always feels completely dry to its wearer, even in pouring rain. This cloak grants you a +5 bonus on Reflex saves against any effect that deals fire damage and allows you to avoid fire damage as if you had evasion. (moderate conjuration; CL 10th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 148",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "white-cloak-of-the-spider",
    "name": "White Cloak of the Spider",
    "category": "wondrous",
    "cost": "4,200 gp",
    "summary": "You gain a +2 bonus on saves against poison. This is a continuous effect and requires no activation. In addition, this cloak has two other abilities, each of which can be activated once per day: spider climb and hold person. (moderate enchantment; CL 6th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 148",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "wink-brooch",
    "name": "Wink Brooch",
    "category": "wondrous",
    "cost": "600 gp",
    "summary": "Many a diplomat wears a wink brooch to court to gain an edge in conversation. When activated, this brooch grants you a +2 competence bonus on a single Bluff or Diplomacy check attempted before the end of your turn. This ability functions three times per day. (faint enchantment; CL 3rd.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 148",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  },
  {
    "id": "wyrmfang-amulet",
    "name": "Wyrmfang Amulet",
    "category": "wondrous",
    "cost": "1,350 gp",
    "summary": "All attacks you make with natural weapons or unarmed strikes while wearing this amulet overcome damage reduction as through they were magic weapons. (The attacks don't gain an enhancement bonus, just the ability to overcome some creatures' damage reduction.). (strong transmutation; CL 12th.)",
    "source": "Magic Item Compendium — Chapter 3: Clothing, p. 148",
    "sourceUrl": "/A POC PC related/5.Splat/D20 - WotC - D&D3.5 - Magic Item Compendium - #OCR#BM#ERRATA.pdf",
    "ruleset": "core"
  }
];
