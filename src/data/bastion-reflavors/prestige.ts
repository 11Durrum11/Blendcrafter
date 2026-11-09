/**
 * Bastion reflavors — prestige classes .
 * Two Complete Warrior prestige classes, restored at Shaun's order
 * and reframed for the Bastion's Southeast Brigade — "the
 * Southie," as everyone calls it: the Watch's detective arm,
 * private eyes, door-workers, and hard-drinking ex-Watch dicks in
 * a city where the Watch is judge and jury. See
 * SOUTHEAST-BRIGADE.md for the full lore. Mechanics are byte-identical in substance to the printed classes;
 * only names, framing, and flavor text have changed. Each record
 * keeps its original publication citation and carries the APOC
 * house reflavor line.
 */
import type { ClassLevelProgressionRow, FeatureDefinition, PrestigeClassDefinition } from "@/engine/types";

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const G = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7]; // good save, 10 levels
const P = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3]; // poor save, 10 levels
const TQ = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];

const CW = "Complete Warrior";
const CW_PATH = "/A POC PC related/5.Splat/Complete sereies/D&D 3.5 - Complete Warrior.pdf";
const CH2 = `${CW} — Chapter 2: Prestige Classes`;

export const BASTION_PRESTIGE: PrestigeClassDefinition[] = [
  {
    id: "stillhouse-brawler",
    name: "Stillhouse Brawler",
    ruleset: "core",
    source: `${CH2} — Stillhouse Brawler (p. 27)`,
    sourceUrl: CW_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref"],
    progression: rows(TQ, G, G, P),
    classSkills: [
      "Balance", "Bluff", "Climb", "Craft", "Escape Artist", "Hide", "Jump",
      "Listen", "Move Silently", "Perform", "Profession", "Swim", "Tumble",
    ],
    prerequisites: [
      "Skills: Tumble 8 ranks",
      "Feats: Dodge, Great Fortitude, Improved Unarmed Strike (or the monk's unarmed strike ability)",
      "Special: Flurry of blows ability and evasion ability",
      "Special: Must be taken in by the stillhouse circle and survive a night of drinking among them",
    ],
    features: [
      {
        key: "stillhouse-brawler-features",
        name: "Stillhouse Brawler Features",
        category: "trait",
        description:
          "A staggering pugilist — most often a burnt-out ex-Watch dick working the dockside stillhouses — who fights with whatever is at hand: drink like a demon turns strong alchemical spirits into Strength and Constitution at the cost of Intelligence, Wisdom, and Dexterity (1st), and his improvised weapons deal ever-increasing damage (1st; improved at 4th, greater at 5th, superior at 9th). Also gains stagger, a surprise charge that need not run straight (2nd), swaying waist dodge bonus (3rd), an AC bonus (+1 at 4th, +2 at 9th), Improved Feint (6th) and Improved Grapple (7th) as bonus feats, for medicinal purposes healing (8th), corkscrew rush (9th), and a breath of flame at 10th. APOC house reflavor — renamed and reframed for the Bastion.",
        source: `${CH2} — Stillhouse Brawler (pp. 27–29)`,
        sourceUrl: CW_PATH,
      },
    ],
  },
  {
    id: "inkbound-bruiser",
    name: "Inkbound Bruiser",
    ruleset: "core",
    source: `${CH2} — Inkbound Bruiser (p. 82)`,
    sourceUrl: CW_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref", "will"],
    progression: rows(TQ, G, G, G),
    classSkills: [
      "Balance", "Climb", "Concentration", "Craft", "Diplomacy", "Escape Artist",
      "Hide", "Jump", "Knowledge", "Listen", "Move Silently", "Perform",
      "Profession", "Swim", "Tumble",
    ],
    prerequisites: [
      "Alignment: Any lawful",
      "Base Attack Bonus: +3",
      "Skills: Knowledge (religion) 8 ranks",
      "Feats: Endurance, Improved Grapple, Improved Unarmed Strike",
      "Note: The book lists the class skill simply as Knowledge; entered as printed",
    ],
    features: [
      {
        key: "inkbound-bruiser-features",
        name: "Inkbound Bruiser Features",
        category: "trait",
        description:
          "A door-and-dockside bruiser of the Southie whose alchemical sigil-ink tattoos, etched by the quarter's hereditary ink-smiths, do the work of monastic discipline: his inkbound bruiser levels stack with monk levels for AC, unarmed damage, and speed (monk abilities, 1st), and he gains a sigil tattoo at 1st and every two levels after (3rd, 5th, 7th, 9th), chosen from the ink-smiths' pattern book (anchor, anvil, badge, bell, boiler, chain, cog, crane, dagger, falcon, gavel, gear, gull, key, lantern, lion, moth, net, piston, rat, raven, rope, saw, scales, scorpion, shield, spider, valve, wall, whistle, and others), each granting its described power, often a number of times per day equal to his tattoo count. APOC house reflavor — renamed and reframed for the Bastion.",
        source: `${CH2} — Inkbound Bruiser (pp. 82–85)`,
        sourceUrl: CW_PATH,
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// The Southie street styles (Shaun's order, 2026-11-09): the seven
// animal styles of Dragon Magazine #319's "Animal Fist: The Shen"
// (Patrick Younts, pp. 67–75), restored and reframed as the
// hand-to-hand schools of the Southeast Brigade — harbor-crane
// crews, ropewalk grapplers, roof-runners, and the rest of the
// quarter's street tradition. Mechanics are identical in substance
// to the printed classes; only names, framing, and flavor text
// have changed. Each record keeps its original publication
// citation and carries the APOC house reflavor line (in Basics).
// ---------------------------------------------------------------------------

const DM319 = "Dragon Magazine #319 — Animal Fist: The Shen";
const DM319_URL = "https://archive.org/download/DragonMagazine260_201801/DragonMagazine319_djvu.txt";

function sf(name: string, description: string): FeatureDefinition {
  return {
    key: name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, ""),
    name,
    description,
    category: "special-quality",
    source: DM319,
    sourceUrl: DM319_URL,
  };
}

const STREET_SKILLS_BASE = [
  "Balance", "Climb", "Concentration", "Craft", "Escape Artist", "Hide", "Jump",
  "Knowledge (nature)", "Listen", "Move Silently", "Sense Motive", "Spot",
  "Survival", "Swim", "Tumble",
];

const STREET_REQ_BASE = [
  "Base Attack Bonus: +5",
  "Skills: Knowledge (nature) 2 ranks, Survival 3 ranks",
  "Feat: Improved Unarmed Strike",
];

const STREET_BASICS =
  "Hit Die d8. Street-style chassis shared by all seven Southie street styles: no new weapon, armor, or shield proficiencies. AC Bonus (Ex): as the monk class feature — Wisdom bonus to AC when unarmored and unencumbered, improving by +1 per five combined monk and street-style levels (+1 at 5th, +2 at 10th); monk levels and levels of the different street styles stack for this increase. Unarmed Damage (Ex): increases as a monk's, starting at 1d6 at 1st level for a Medium creature; monk levels and levels of the different street styles stack. Tempered Strike (Su): at 2nd level unarmed attacks count as silver weapons for overcoming damage reduction; at 8th level they also count as cold iron. Second Skin (Su): from 3rd level, take on a humanoid shape of the style's street totem — a thing of ink, training, and the Fog that the Watch officially does not discuss — 1/day at 3rd, 2/day at 5th, 3/day at 7th, 4/day at 9th; a standard action that provokes attacks of opportunity, heals damage equal to a day's rest, and lasts 1 minute per two class levels. In second skin: +5 bonus on Spot, Listen, and Survival checks; low-light vision; unarmed attacks count as magic ghost touch weapons, and the practitioner can grab and grapple incorporeal creatures; plus the style's own second-skin benefits (below). Uncanny Dodge (Ex) at 5th level; Evasion (Ex) at 6th (if the practitioner already has evasion from another class, he gains improved evasion instead); Improved Uncanny Dodge (Ex) at 7th. Wild Spirit (Ex) at 9th level: +4 bonus on all saves against effects that specifically target humanoids, such as charm person; animals that attempt to attack or charge the practitioner must succeed at a Will save (DC 10 + street-style level + Cha modifier) or be unable to complete the action and lose it for the round; and the practitioner permanently gains a minor animalistic feature of his style (cat eyes, pointed ears, whiskers, multifaceted eyes, feathers instead of hair, a forked tongue, or similar). APOC house reflavor — renamed and reframed for the Bastion.";

export const BASTION_SHEN_PRESTIGE: PrestigeClassDefinition[] = [
  {
    id: "cranehand",
    name: "Cranehand",
    ruleset: "core",
    source: DM319,
    sourceUrl: DM319_URL,
    hitDie: "d8",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref", "will"],
    progression: rows(TQ, G, G, G),
    classSkills: [...STREET_SKILLS_BASE, "Bluff"],
    prerequisites: [
      ...STREET_REQ_BASE,
      "Feats: Combat Expertise, Dodge",
      "Skills: Balance 5 ranks, Jump 5 ranks",
    ],
    features: [
      sf("Basics", STREET_BASICS),
      sf(
        "Catch What's Thrown (Ex) — 1st style ability (2nd level)",
        "The cranehand receives Deflect Arrows as a bonus feat. In second skin she can also use the feat to deflect magic missile, Melf's acid arrow, and ray spells of 2nd level or lower.",
      ),
      sf(
        "Counterweight Stance (Ex) — 2nd style ability (4th level)",
        "When fighting defensively, using Combat Expertise, or using the total defense option, the cranehand receives an additional +2 bonus to AC.",
      ),
      sf(
        "Beamwalker's Leap (Ex) — 3rd style ability (6th level)",
        "The cranehand receives a +10 competence bonus on Jump checks and determines the distance jumped as if making a running jump even if standing still.",
      ),
      sf(
        "Blind the Lookout (Su) — 4th style ability (8th level)",
        "Using the full attack action, the cranehand makes one attack at her highest attack bonus. If it hits, her opponent must make a Fortitude save (DC 10 + damage dealt) or be blinded. This works even if the opponent's eyes are shielded, and it affects creatures with primary senses other than vision, \"blinding\" even blindsight and tremorsense. Usable once per day per two cranehand levels.",
      ),
      sf(
        "Walks the Shallows (Su) — 5th style ability (10th level)",
        "For 2 rounds per cranehand level per day (the rounds need not be consecutive), the cranehand may move across or stand on any liquid surface as if it were solid ground. She is not immune to damage caused by traversing dangerous surfaces, but receives a +4 bonus on applicable saving throws.",
      ),
      sf(
        "Second Skin — the Crane",
        "In second skin the cranehand takes the shape of the white harbor crane of the shallows: a long beak, a graceful neck, and great white wings; feathers cover every part of the body but the beak and legs, ranging from snow white to dark gray. In second skin the cranehand gains a +2 bonus to Dexterity and can fly at a speed equal to half her land speed with good maneuverability.",
      ),
    ],
  },
  {
    id: "foghorn",
    name: "Foghorn",
    ruleset: "core",
    source: DM319,
    sourceUrl: DM319_URL,
    hitDie: "d8",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref", "will"],
    progression: rows(TQ, G, G, G),
    classSkills: [...STREET_SKILLS_BASE, "Diplomacy", "Intimidate"],
    prerequisites: [
      ...STREET_REQ_BASE,
      "Feat: Weapon Focus (unarmed strike)",
      "Skills: Concentration 4 ranks, Intimidate 3 ranks",
    ],
    features: [
      sf("Basics", STREET_BASICS),
      sf(
        "Heart of the Horn (Ex) — 1st style ability (2nd level)",
        "The foghorn gains Great Fortitude as a bonus feat.",
      ),
      sf(
        "The Standing Order (Ex) — 2nd style ability (4th level)",
        "The foghorn gains Iron Will as a bonus feat.",
      ),
      sf(
        "The Horn's Blast (Sp) — 3rd style ability (6th level)",
        "By clapping his hands together, the foghorn causes a fan of energy to explode out from his hands, mimicking the burning hands spell except that he can choose to have it deal acid, cold, electricity, or fire damage. Caster level equals the foghorn's class level. Usable once per day per two class levels, as a standard action.",
      ),
      sf(
        "Four Calls (Su) — 4th style ability (8th level)",
        "By sounding one of four calls — the harbor's foghorn blasts, breathed out at the strike — the foghorn's unarmed strikes deal normal damage plus 1d6 points of acid, cold, electricity, or fire damage, as he chooses. It affects all unarmed attacks for 1 round, only one energy type per round. Usable once per day per two class levels; enabling it is a free action.",
      ),
      sf(
        "The Silencing Hand (Ex) — 5th style ability (10th level)",
        "By focusing his will, the foghorn resolves all his unarmed attacks for 1 round as though he and the foes he attacks stand in an antimagic field. Usable once per day.",
      ),
      sf(
        "Second Skin — the Horn",
        "In second skin the foghorn becomes the thing dockers swear walks the fog on the worst nights: a sinewy, whip-thin tail; a scaled, maned head with a wide snout of dagger-sharp teeth and a long mane of deep red or black; a flexible, thin body with scales that shimmer in rainbow colors; and short, powerful limbs tipped with gleaming claws. In second skin the foghorn gains a +2 bonus to Strength and Constitution, and he may choose to deal slashing damage with his unarmed attacks.",
      ),
    ],
  },
  {
    id: "hookhand",
    name: "Hookhand",
    ruleset: "core",
    source: DM319,
    sourceUrl: DM319_URL,
    hitDie: "d8",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref", "will"],
    progression: rows(TQ, G, G, G),
    classSkills: [...STREET_SKILLS_BASE, "Intimidate"],
    prerequisites: [
      ...STREET_REQ_BASE,
      "Feats: Combat Expertise, Improved Trip",
      "Skills: Concentration 2 ranks, Escape Artist 5 ranks",
    ],
    features: [
      sf("Basics", STREET_BASICS),
      sf(
        "Improved Grapple (Ex) — 1st style ability (2nd level)",
        "The hookhand gains Improved Grapple as a bonus feat. If she already has the Improved Grapple feat, she gains a +6 bonus on grapple checks rather than the normal +4 bonus granted by the feat.",
      ),
      sf(
        "Sticky Hands (Ex) — 2nd style ability (4th level)",
        "Trained in sticky hands — the Ropewalks art of never letting go of a man's wrists — the hookhand gains Blind-Fight as a bonus feat.",
      ),
      sf(
        "Strip the Blade (Ex) — 3rd style ability (6th level)",
        "The hookhand is not penalized for using a light weapon (including an unarmed strike) when attempting to disarm a foe.",
      ),
      sf(
        "Superior Trip (Ex) — 4th style ability (8th level)",
        "A hookhand who succeeds at a trip attempt deals her unarmed strike damage in addition to knocking the target prone.",
      ),
      sf(
        "The Needle (Ex) — 5th style ability (10th level)",
        "Once per day per hookhand level, immediately after a foe is damaged by a successful unarmed strike, the hookhand can declare the attack the needle, piercing the enemy's flesh with one finger and causing a bleeding wound: 1 point of Constitution damage from blood loss in addition to the attack's normal damage. Creatures immune to critical hits are immune to this Constitution damage.",
      ),
      sf(
        "Second Skin — the Hook",
        "In second skin the hookhand is a long-limbed horror standing tall on spindly legs, with huge multifaceted eyes bulging over razor mandibles, a body armored in thick calloused plated hide, and fingers ending in long hook-claws. In second skin she gains a +4 enhancement bonus to natural armor and the Improved Grab ability, and her unarmed attacks inflict piercing, slashing, or bludgeoning damage, as she chooses.",
      ),
    ],
  },
  {
    id: "steeplejack",
    name: "Steeplejack",
    ruleset: "core",
    source: DM319,
    sourceUrl: DM319_URL,
    hitDie: "d8",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref", "will"],
    progression: rows(TQ, G, G, G),
    classSkills: [...STREET_SKILLS_BASE, "Bluff", "Perform"],
    prerequisites: [
      ...STREET_REQ_BASE,
      "Feat: Weapon Focus (quarterstaff)",
      "Skills: Balance 5 ranks, Tumble 5 ranks",
    ],
    features: [
      sf("Basics", STREET_BASICS),
      sf(
        "Up and Over (Ex) — 1st style ability (2nd level)",
        "The steeplejack can leap onto any inanimate object equal to or less than his height without a Jump check.",
      ),
      sf(
        "The Jack's Flourish (Ex) — 2nd style ability (4th level)",
        "The steeplejack may attack with the quarterstaff or with unarmed attacks as though he has the Improved Two-Weapon Fighting feat. If he already has that feat, he may attack with the quarterstaff as though he has the Greater Two-Weapon Fighting feat.",
      ),
      sf(
        "The Jack's Staff (Ex) — 3rd style ability (6th level)",
        "If the steeplejack has the Stunning Fist feat, he may deliver a stunning attack with a blow from a quarterstaff rather than an unarmed attack. He can also utilize the Weapon Finesse feat with both ends of the quarterstaff.",
      ),
      sf(
        "Slippery Jack (Ex) — 4th style ability (8th level)",
        "When provoking an attack of opportunity due to moving through an opponent's threatened area, the steeplejack gains a +2 dodge bonus to his AC.",
      ),
      sf(
        "Rooftop Tumbling (Ex) — 5th style ability (10th level)",
        "The steeplejack can take 10 whenever he attempts a tumbling maneuver, even when distracted or endangered. Additionally, he can attempt a Tumble check (DC 10 + the opponent's Strength score) when tripped or overrun; a success means he regains his footing immediately, negating the free attack granted by the Improved Trip feat.",
      ),
      sf(
        "Second Skin — the Jack",
        "In second skin the steeplejack is lean and wiry, with a pronounced stoop and arms reaching just past the knee; short fur the color of his own hair covers everything except the hands, feet, and face. In second skin he receives a +4 bonus to Dexterity, may use his feet interchangeably with his hands (and his hands as feet) for any action except casting spells, and gains a climb speed equal to his base land speed.",
      ),
    ],
  },
  {
    id: "alley-cat",
    name: "Alley Cat",
    ruleset: "core",
    source: DM319,
    sourceUrl: DM319_URL,
    hitDie: "d8",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref", "will"],
    progression: rows(TQ, G, G, G),
    classSkills: [...STREET_SKILLS_BASE, "Search"],
    prerequisites: [
      ...STREET_REQ_BASE,
      "Feat: Improved Initiative",
      "Skills: Hide 5 ranks, Move Silently 5 ranks",
    ],
    features: [
      sf("Basics", STREET_BASICS),
      sf(
        "Cat's Pace (Ex) — 1st style ability (2nd level)",
        "The alley cat receives a bonus to her speed when unarmored or wearing light armor and carrying no more than a light load, as if she were a monk of a level equal to her alley cat level + 1. (Table 3-10 of the Player's Handbook lists the monk's fast movement progression.) Monk levels count as alley cat levels when determining this bonus.",
      ),
      sf(
        "Like the Fog (Ex) — 2nd style ability (4th level)",
        "The alley cat gains Lightning Reflexes as a bonus feat.",
      ),
      sf(
        "Rain of Blows (Ex) — 3rd style ability (6th level)",
        "The alley cat has mastered the art of delivering rapid combinations of punches from all angles: whenever she uses the Flurry of Blows class ability, the alley cat's penalty on each attack roll is reduced by 1 (for example, a −1 penalty becomes no penalty).",
      ),
      sf(
        "Seize the Moment (Ex) — 4th style ability (8th level)",
        "The alley cat receives a +4 bonus on initiative checks.",
      ),
      sf(
        "Swift Reprisal (Ex) — 5th style ability (10th level)",
        "Whenever a foe's melee attack misses the alley cat, she may immediately take an attack of opportunity against that foe if it is within a square she threatens.",
      ),
      sf(
        "Second Skin — the Cat",
        "In second skin the alley cat is a feral-looking humanoid with slicked-back black hair and pronounced canine teeth; her eyes are pale blue or green and nightshine like a cat's, and fur covers most of her body. In second skin she gains a +2 bonus to Strength and Dexterity, is considered to have the Spring Attack feat even if she does not meet its requirements, and may choose to have her unarmed attacks deal bludgeoning or slashing damage.",
      ),
    ],
  },
  {
    id: "eelhand",
    name: "Eelhand",
    ruleset: "core",
    source: DM319,
    sourceUrl: DM319_URL,
    hitDie: "d8",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref", "will"],
    progression: rows(TQ, G, G, G),
    classSkills: [...STREET_SKILLS_BASE, "Heal", "Profession"],
    prerequisites: [
      ...STREET_REQ_BASE,
      "Feat: Stunning Fist",
      "Skills: Concentration 4 ranks, Heal 2 ranks",
    ],
    features: [
      sf("Basics", STREET_BASICS),
      sf(
        "Stunning Blow (Ex) — 1st style ability (2nd level)",
        "The eelhand may use his Intelligence modifier instead of his Wisdom modifier when determining the save DC for his Stunning Fist feat. He also gains one additional use of the Stunning Fist ability per day.",
      ),
      sf(
        "Calculated Blow (Ex) — 2nd style ability (4th level)",
        "The eelhand gains Improved Critical (unarmed strike) as a bonus feat.",
      ),
      sf(
        "Hands of a Surgeon (Ex) — 3rd style ability (6th level)",
        "When attacking humanoid creatures, the eelhand adds his Intelligence bonus rather than his Strength bonus to damage rolls with unarmed strikes, and his threat range for critical hits on unarmed strikes is increased to 18–20. This ability applies only to unarmed strike attacks and has no effect against creatures immune to critical hits, such as constructs, undead, and incorporeal creatures.",
      ),
      sf(
        "The Dosed Hand (Ex) — 4th style ability (8th level)",
        "Once per day per eelhand class level, before rolling an unarmed strike attack roll, the eelhand can declare he uses the dosed hand. If the attack hits, it is considered an automatic critical hit. If it misses, it still uses up one daily attempt. If the natural attack roll is itself a critical hit, the dosed hand deals triple damage. This use of the dosed hand does not affect creatures immune to critical hits.",
      ),
      sf(
        "Healing Touch (Su) — 5th style ability (10th level)",
        "The eelhand can touch a creature as a full-round action and choose one of the following effects: heal hit points equal to a day's rest, neutralize poison, cure blindness or deafness, remove paralysis, or cancel a hold spell. Usable once per day per two eelhand levels.",
      ),
      sf(
        "Second Skin — the Eel",
        "In second skin the eelhand's features become sharp and cruel, with sharp-toothed mandibles, penetrating green eyes, and a flickering forked tongue; the skin gains a slick, eel-like sheen, turning scaly in thick patches. In second skin the eelhand gains a +2 bonus to Dexterity and Intelligence, and a bite attack that delivers piercing damage as an unarmed strike.",
      ),
    ],
  },
  {
    id: "mastiff",
    name: "Mastiff",
    ruleset: "core",
    source: DM319,
    sourceUrl: DM319_URL,
    hitDie: "d8",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref", "will"],
    progression: rows(TQ, G, G, G),
    classSkills: [...STREET_SKILLS_BASE, "Intimidate"],
    prerequisites: [
      ...STREET_REQ_BASE,
      "Feat: Power Attack",
      "Skills: Concentration 2 ranks, Intimidate 4 ranks",
    ],
    features: [
      sf("Basics", STREET_BASICS),
      sf(
        "Paralyzing Stroke (Ex) — 1st style ability (2nd level)",
        "As a full-round action, the mastiff makes a single melee attack resolved as a touch attack but dealing normal unarmed strike damage. A creature damaged by the attack must succeed at a Fortitude save (DC 10 + mastiff level + the mastiff's Strength modifier) or be paralyzed for 1 round. Usable once per day per mastiff level; a killing stroke that misses uses one of the daily uses. (Print note: the original heads this \"Paralyzing Stroke\" but its text calls it the killing stroke — carried as printed.)",
      ),
      sf(
        "Mastiff's Hide (Ex) — 2nd style ability (4th level)",
        "The mastiff gains Toughness as a bonus feat.",
      ),
      sf(
        "Unflinching (Ex) — 3rd style ability (6th level)",
        "The mastiff becomes immune to fear effects.",
      ),
      sf(
        "Dogged (Ex) — 4th style ability (8th level)",
        "The mastiff gains Endurance as a bonus feat.",
      ),
      sf(
        "Frenzy (Ex) — 5th style ability (10th level)",
        "Once per day as a free action, the mastiff can enter a frenzy lasting a number of rounds equal to 1 + his new Constitution modifier: he gains +4 to Strength, damage reduction 1/—, cannot be stunned by any attack, and becomes immune to nonlethal damage. He does not become fatigued once the frenzy ends.",
      ),
      sf(
        "Second Skin — the Mastiff",
        "In second skin the mastiff is bulky, with a thick mane of hair and beard, clawed fingers, sharp teeth, and fur-covered skin brindled like a dockyard mastiff. In second skin the mastiff gains +4 Strength and may choose to deal bludgeoning or slashing damage with his unarmed attacks.",
      ),
    ],
  },
];
