// Dragon Magazine #321 (Jul 2004) prestige classes — integrated in
// the Dragon Magazine treatment program (issue #321 pass). Staging
// pack: ~/workspace/library-staging/packs/dragon-magazine/issue-321/
// (MANIFEST.md / SCREENING.md / reference.md).
//   * "The Infused" (pp. 16–22): mortals bonded to celestial souls —
//     staged as the two tracks the article prints over one chassis,
//     INFUSED WARRIOR and INFUSED SPELLCASTER (the spellcaster's BAB
//     is three-quarter and its caster levels fall at class levels
//     1/3/5/7/9, both read off the printed page images).
//   * "Arvoreen's Keepers" (pp. 76–82): the halfling god's two
//     defender orders — ARVOREEN'S KEEPER (martial) and ARVOREEN'S
//     WARDER (divine), ruleset "faerun" as printed.
//   * "Champions of Fate" (pp. 84–90): four Al-Qadim prestige
//     classes — BARBER, CORSAIR, HOLY SLAYER, MAMLUK — staged as
//     core mechanics with the setting lore stripped (the issue-315
//     sha'ir precedent). The corsair carries the -321 suffix: the
//     bare id is the Dragon #310 fighter-variant base class.
// Advancement tables and requirements were verified against the
// printed page images throughout (the OCR garbles digits badly in
// this issue). Feature descriptions are faithful mechanical
// paraphrases in our own words; no magazine prose is reproduced.

import type {
  ClassLevelProgressionRow,
  FeatureDefinition,
  PrestigeClassDefinition,
} from "@/engine/types";

type F = FeatureDefinition & { levelsNeeded?: number };

function f(
  name: string,
  description: string,
  level: number | undefined,
  source: string,
  sourceUrl: string,
): F {
  const base: F = {
    key: name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, ""),
    name,
    description,
    category: "special-quality",
    source,
    sourceUrl,
  };
  return level ? { ...base, levelsNeeded: level } : base;
}

interface RawFeature {
  name: string;
  description: string;
  level?: number;
}

interface RawPrestige {
  id: string;
  name: string;
  ruleset: string;
  source: string;
  sourceUrl: string;
  hitDie: string;
  skillPointsPerLevel: number;
  babProgression: string;
  goodSaves: string[];
  progression: ClassLevelProgressionRow[];
  classSkills: string[];
  prerequisites: string[];
  features: RawFeature[];
}

const DM321 = "Dragon Magazine #321";
const DM321_URL =
  "https://archive.org/download/DragonMagazine260_201801/DragonMagazine321_djvu.txt";

const INFUSED_PREREQS = [
  "Base Attack Bonus: +4",
  "Base Will Save: +2",
  "Alignment: Any alignment to enter; an infused cannot advance in the class while she possesses an evil alignment",
  "Special: Must share her soul with a particular celestial, bonded to that one celestial for life; a character may progress as an infused warrior or an infused spellcaster, but never both",
];

const INFUSED_SKILLS = [
  "Climb",
  "Concentration",
  "Craft",
  "Diplomacy",
  "Heal",
  "Jump",
  "Knowledge (arcana)",
  "Knowledge (religion)",
  "Knowledge (the planes)",
  "Listen",
  "Ride",
  "Search",
  "Spellcraft",
  "Spot",
];

const INFUSED_FEATURES = [
  {
    "name": "Icon of Glory (Ex)",
    "description": "A powerful glyph — a rune in the Celestial tongue, the holy symbol of a good deity, or another emblem of righteousness — is encoded into the infused's flesh. It grants her a +2 bonus on all Charisma-based skill checks when dealing with individuals of good alignment.",
    "level": 1
  },
  {
    "name": "Celestial Power I",
    "description": "At 2nd level the bonded celestial begins to gift the infused with its powers; the gift depends on the celestial's kind. When the celestial grants spell-like abilities, their caster level equals the infused's character level. Astral Deva — Spell-Like Abilities (Sp): 3/day—detect evil; 1/day—remove fear. Planetar — Resilient (Ex): immune to petrification, and gains a bonus on all saving throws against poison equal to half her infused level. Solar — Archery Mastery (Ex): proficiency with longbows and composite longbows; any bow she uses, and the arrows it fires, are treated as good-aligned for the purpose of overcoming damage reduction. Lantern Archon — Improved Initiative: gains the Improved Initiative feat as a bonus feat. Hound Archon — Expert Tracker (Ex): gains the Track feat as a bonus feat, and Survival is always a class skill for her. Trumpet Archon — Minor Trumpet (Su): the day after she gains this power she awakens to find a gleaming trumpet at her feet, functioning as a masterwork musical instrument; as a free action she can transform it into a masterwork greatsword, once per day per infused level, each transformation lasting 1 round per infused level; she gains Martial Weapon Proficiency (greatsword) as a bonus feat. If the trumpet is stolen it becomes a useless chunk of metal until she recovers it; if it is destroyed, she must receive an atonement spell, and a new trumpet appears the day after she atones. Bralani — Spell-Like Abilities (Sp): 1/day—detect evil and gust of wind. Ghaele — Holy Energy (Ex): whenever she attacks with a natural weapon, an unarmed attack, or a melee weapon, she deals an additional 1 point of damage to evil creatures and an additional 1d6 points of damage to evil outsiders and undead; this bonus damage does not stack with the holy weapon special ability. Avoral — Lay on Hands (Su): as the paladin ability of the same name; her infused levels and paladin levels stack for determining how much healing she can do. Leonal — Lay on Hands (Su): as the paladin ability of the same name; her infused levels and paladin levels stack for determining how much healing she can do.",
    "level": 2
  },
  {
    "name": "Minor Physical Change",
    "description": "At 3rd level the infused's body begins to show the positive influence inside her; the change grants no bonuses or penalties but often draws attention. By celestial: Astral Deva — her skin takes on a bronze sheen. Planetar — she becomes completely bald. Solar — her eyes become a shining topaz shade. Lantern Archon — her skin takes on a silvery shine. Hound Archon — she grows a doglike muzzle. Trumpet Archon — her skin takes on a green shade. Bralani — her hair and clothes always appear windswept. Ghaele — her eyes become pupilless and pearly white. Avoral — her arms grow feathers and her hair takes on a feathered style. Leonal — a thick mane surrounds her head.",
    "level": 3
  },
  {
    "name": "Celestial Power II",
    "description": "At 4th level the infused is deemed worthy of more powerful gifts. Astral Deva — Spell-Like Abilities (Sp): 1/day—discern lies and remove disease. Planetar — Spell-Like Abilities (Sp): 1/day—dispel magic and remove disease. Solar — Spell-Like Abilities (Sp): 1/day—dimensional anchor and invisibility. Lantern Archon — Spell-Like Abilities (Sp): 1/day—teleport. Hound Archon — Change Shape (Su): once per day she can turn into any canine form of Small to Large size and back again as a standard action; the ability functions like the polymorph spell except as noted here, lasts 1 hour per infused level or until she changes back, and changing form does not provoke an attack of opportunity; the form must be that of a doglike creature (any doglike or wolflike creature with the animal type); she loses her ability to speak while in animal form and is limited to the sounds a normal untrained canine can make, but she can communicate normally with other doglike beings of the same kind as her chosen form. Trumpet Archon — Greater Trumpet Sword (Su): when in greatsword form, her trumpet acts as a +2 greatsword. Bralani — Wind Column (Su): two times per day, as a move action, she can surround herself with a column of wind; while within it she gains a fly speed equal to her base land speed with average maneuverability, and she can maintain the column for 1 minute per infused level. Ghaele — Gaze (Su): evil creatures of 5 HD or less within 30 feet that meet her gaze become shaken for 1d10 rounds; nonevil creatures and evil creatures with more than 5 Hit Dice can make a Will save (DC 10 + infused level + Charisma modifier) to resist the effect. Avoral — Spell-Like Abilities (Sp): 3/day—magic missile. Leonal — Spell-Like Abilities (Sp): at will—speak with animals.",
    "level": 4
  },
  {
    "name": "Beneficence",
    "description": "At 5th level the infused begins to show signs of her bonded celestial's positive influence. If she fails to help a person in need or perform another act of goodness when the opportunity presents itself, the celestial becomes slightly disgusted with her, causing her to suffer a −1 penalty on all attacks, saves, and checks for 1 day.",
    "level": 5
  },
  {
    "name": "Moderate Physical Change",
    "description": "At 6th level the infused's body undergoes a more dramatic change. By celestial: Astral Deva — her muscles grow, increasing her Strength by +2. Planetar — she grows beautiful wings, giving her a fly speed equal to her base land speed with average maneuverability. Solar — she grows majestic wings, giving her a fly speed equal to her base land speed with average maneuverability. Lantern Archon — her skin gleams and her nose, ears, and lips become less pronounced; she gains resistance to electricity 10 and immunity to petrification. Hound Archon — her teeth sharpen into fangs, granting her a bite attack, a natural weapon that deals 1d6 points of damage (1d4 for a Small infused); it can be a primary or secondary attack, and she does not gain multiple natural attacks for having a high base attack bonus. Trumpet Archon — she grows beautiful wings, giving her a fly speed equal to her base land speed with average maneuverability. Bralani — she gains the grace of the wind, increasing her Dexterity by +2. Ghaele — her muscles bulge with the might of the eladrin, increasing her Strength by +2. Avoral — her arms meld into wings, giving her a fly speed equal to her base land speed with average maneuverability; her hands are unaffected, but she can't use an item held in her hands while flying. Leonal — her jaw extends and her teeth sharpen into fangs, granting her a bite attack, a natural weapon that deals 1d6 points of damage (1d4 for a Small infused); it can be a primary or secondary attack, and she does not gain multiple natural attacks for having a high base attack bonus.",
    "level": 6
  },
  {
    "name": "Celestial Power III",
    "description": "At 7th level the infused is gifted with even more powerful benefits. Astral Deva — Spell-Like Abilities (Sp): 1/day—cure serious wounds and greater invisibility. Planetar — Spell-Like Abilities (Sp): 1/day—blade barrier and remove fear. Solar — Spell-Like Abilities (Sp): 1/day—cure serious wounds and holy sword. Lantern Archon — Light Ray (Ex): at will, she can shoot light rays that deal 1d6 points of damage and ignore damage reduction of any type; the rays have a range of 30 feet and require a ranged touch attack to hit. Hound Archon — Immunities (Ex): immunity to petrification and poison. Trumpet Archon — Complete Trumpet (Su): her trumpet reaches its full potential, functioning as a +4 greatsword while in sword form; in trumpet form she can now create a blast of paralyzing energy three times per day — all nonarchons and noninfused within 100 feet that can hear it must succeed at a Fortitude save (DC 10 + her Charisma modifier + class level) or be paralyzed for 1 round. Bralani — Spell-Like Abilities (Sp): 1/day—cure serious wounds and wind wall. Ghaele — Alternate Form (Su): once per day, for a number of rounds equal to her infused level, she can switch between her natural form and that of a glowing globe of eldritch colors; while in globe form she is incorporeal and thus has no Strength score; while incorporeal she can only be harmed by other incorporeal creatures, +1 or better magical weapons, and spells, spell-like abilities, or supernatural abilities; she is immune to all nonmagical attack forms, and even when hit by spells or magic weapons she has a 50% chance to ignore any damage from a corporeal source (except force effects or attacks made with ghost touch weapons). Avoral — Spell-Like Abilities (Sp): 1/day—lightning bolt and magic circle against evil. Leonal — Improved Grab (Ex): to use this ability she must hit with her bite attack; she may then attempt to start a grapple as a free action that does not provoke an attack of opportunity, against creatures at least one size category smaller than she is.",
    "level": 7
  },
  {
    "name": "Tongues (Su)",
    "description": "At 8th level, the infused gains the ability to speak with any creature that has a language, as though using the tongues spell.",
    "level": 8
  },
  {
    "name": "Major Physical Change",
    "description": "At 9th level the infused undergoes an extremely obvious physical change, so much so that she now resembles the celestial she shares her soul with. By celestial: Astral Deva — she is filled with an otherworldly grace, increasing her Charisma by +2. Planetar — her skin turns emerald green, and she gains immunity to cold and petrification. Solar — her skin appears silver, and she gains damage reduction 5/epic or evil. Lantern Archon — she glows with the brightness of a torch in the dark (20-foot radius of light); she can suppress or resume this aura at will as a free action; while she glows, she gains immunity to electricity and petrification, but she suffers a −8 penalty on all Hide checks. Hound Archon — her skin becomes tougher, granting her a +2 natural armor bonus, and her increasingly muscular legs improve her base land speed by 10 feet. Trumpet Archon — the incredible power of the trumpet archon flows through her, increasing her Constitution by +2. Bralani — she is filled with the endurance of the eternal gale, increasing her Constitution by +2. Ghaele — she gains the resiliency of the eladrin, granting her damage reduction 5/cold iron or evil. Avoral — her eyes become hawklike, granting her a +8 bonus on Spot checks, and her skin hardens, giving her a +2 natural armor bonus. Leonal — the majestic power of the leonal grants her spell resistance equal to 11 + infused level.",
    "level": 9
  },
  {
    "name": "Celestial Power IV",
    "description": "At 10th level the celestial deems the infused worthy of its most powerful gifts. Astral Deva — Spell-Like Abilities (Sp): 1/day—blade barrier and dispel evil. Planetar — Spell-Like Abilities (Sp): 1/day—greater restoration and polymorph (self only). Solar — Slaying Arrows (Su): once per day, she can make an arrow she fires from a bow into a slaying arrow; she must declare the creature type the arrow is to affect before she draws it from her quiver. Lantern Archon — Aura of Menace (Su): a righteous aura surrounds her when angry or fighting; any hostile creature within a 20-foot radius must succeed on a Will save (DC 10 + 1/2 infused level + Charisma modifier) to resist its effects — those who fail take a −2 penalty on attacks, AC, and saves for 24 hours or until they successfully hit the infused that generated the aura; a creature that has resisted this effect cannot be affected again by the same infused's aura for 24 hours. Hound Archon — Teleport (Su): she gains the ability to greater teleport twice per day, as the spell cast by a 14th-level sorcerer, except that she can only teleport herself and up to 50 pounds of objects. Trumpet Archon — Call to the Heavens (Sp): her trumpet can be used to call for aid; twice per day she can blow the trumpet and invoke a summon monster IX spell that can only summon creatures of lawful good alignment. Bralani — Spell-Like Abilities (Sp): 3/day—blur and lightning bolt. Ghaele — Spell-Like Abilities (Sp): 2/day—lesser globe of invulnerability and magic circle against evil. Avoral — Spell-Like Abilities (Sp): 3/day—true seeing; 1/day—lightning bolt. Leonal — Rake (Ex): a leonal-infused that successfully grapples using her bite attack can make two rake attacks with her hind legs, each dealing 1d4 points of damage plus her Strength bonus (1d3 for Small characters).",
    "level": 10
  },
];

const ARVOREEN_PREREQS_BASE = [
  "Race: Halfling",
  "Religion: Arvoreen",
  "Alignment: Lawful good, neutral good, or lawful neutral",
  "Base Attack Bonus: +4",
  "Skills: Craft (trapmaking) 4 ranks, Listen 4 ranks, Sense Motive 4 ranks, Spot 4 ranks, Survival 4 ranks",
  "Feats: Alertness, Martial Weapon Proficiency (short sword), Track, and Simple Weapon Proficiency (sling) or Martial Weapon Proficiency (shortbow)",
  "Special: Must be accepted for training and judged worthy by a cleric of Arvoreen",
];

const ARVOREEN_SKILLS = [
  "Appraise",
  "Climb",
  "Concentration",
  "Craft",
  "Diplomacy",
  "Disable Device",
  "Gather Information",
  "Handle Animal",
  "Heal",
  "Hide",
  "Jump",
  "Knowledge (local)",
  "Knowledge (nature)",
  "Knowledge (religion)",
  "Listen",
  "Move Silently",
  "Profession",
  "Ride",
  "Search",
  "Sense Motive",
  "Spot",
  "Survival",
  "Use Rope",
];

const ARVOREEN_SHARED_FEATURES = [
  {
    "name": "Trapfinding",
    "description": "Arvoreen's keepers and warders have the trapfinding ability just as rogues do: they can use the Search skill to locate magic traps and mundane traps with DCs higher than 20.",
    "level": 1
  },
  {
    "name": "Uncanny Dodge (Ex)",
    "description": "At 3rd level, the character gains uncanny dodge, just as a 4th-level rogue: he retains his Dexterity bonus to Armor Class (if any) even if he is caught flat-footed or struck by an invisible attacker.",
    "level": 3
  },
  {
    "name": "Defensive Parry (Ex)",
    "description": "At 5th level, the character has truly mastered the defensive maneuvers of combat. When executing the fight defensively standard or full-round action, he gains an additional +1 dodge bonus to his Armor Class; when executing the total defense standard action, he gains an additional +2 dodge bonus to his Armor Class.",
    "level": 5
  },
  {
    "name": "Subduing Strikes (Ex)",
    "description": "At 7th level, the character can deal nonlethal damage with a weapon that deals normal damage without suffering the usual −4 penalty on the attack roll.",
    "level": 7
  },
  {
    "name": "Team Player (Ex)",
    "description": "At 9th level, when using the aid another action, the character grants a +4 bonus instead of the usual +2 bonus.",
    "level": 9
  },
  {
    "name": "Defensive Roll (Ex)",
    "description": "At 10th level, the character can roll with a potentially lethal blow to take less damage from it. Once per day, when he would be reduced to 0 hit points or less by damage in combat (from a weapon or other blow, not a spell or special ability), he can attempt a Reflex saving throw (DC equals the damage dealt) to take only half damage from the blow.",
    "level": 10
  },
  {
    "name": "Code of Conduct",
    "description": "Keepers and warders must be lawful good, neutral good, or lawful neutral, and adhere to the same code: never attack first (although preemptive strikes against known raiders or invaders, who are considered to have attacked first, are generally acceptable); aid and protect those in their charge or their community; never flee from an enemy unless all those under their protection have safely escaped, even if it means their own death; defend the honor of their god and race; and respect and obey the clergy of the halfling gods. One who ceases to be of a permitted alignment, or who grossly violates the code, loses all supernatural, spell-like, and spellcasting abilities (regardless of class) and the ability to progress in the class, regaining both if he atones for his violations. Members of both orders are allowed to multiclass freely as paladins."
  },
];

const RAW: RawPrestige[] = [
  {
    "id": "infused-warrior",
    "name": "Infused Warrior",
    "ruleset": "core",
    "source": DM321,
    "sourceUrl": DM321_URL,
    "hitDie": "d12",
    "skillPointsPerLevel": 2,
    "babProgression": "full",
    "goodSaves": ["fort"],
    "prerequisites": INFUSED_PREREQS,
    "progression": [
      { "level": 1, "bab": 1, "fort": 2, "ref": 0, "will": 0 },
      { "level": 2, "bab": 2, "fort": 3, "ref": 0, "will": 0 },
      { "level": 3, "bab": 3, "fort": 3, "ref": 1, "will": 1 },
      { "level": 4, "bab": 4, "fort": 4, "ref": 1, "will": 1 },
      { "level": 5, "bab": 5, "fort": 4, "ref": 1, "will": 1 },
      { "level": 6, "bab": 6, "fort": 5, "ref": 2, "will": 2 },
      { "level": 7, "bab": 7, "fort": 5, "ref": 2, "will": 2 },
      { "level": 8, "bab": 8, "fort": 6, "ref": 2, "will": 2 },
      { "level": 9, "bab": 9, "fort": 6, "ref": 3, "will": 3 },
      { "level": 10, "bab": 10, "fort": 7, "ref": 3, "will": 3 }
    ],
    "classSkills": INFUSED_SKILLS,
    "features": [
      {
        "name": "Basics",
        "description": "Hit Die d12. The infused gains no new weapon or armor proficiencies. No matter what their alignment, infused spellcasters cannot cast spells of the Evil descriptor. Clerics who used negative energy to rebuke undead and spontaneously cast inflict spells now use positive energy to turn undead and spontaneously cast cure spells; they do not increase their turning ability when they take levels of this class. The infused warrior is the martial track of the infused prestige class: the two tracks share requirements, class skills, and class features, and a character may take levels in only one of them."
      },
      ...INFUSED_FEATURES
    ]
  },
  {
    "id": "infused-spellcaster",
    "name": "Infused Spellcaster",
    "ruleset": "core",
    "source": DM321,
    "sourceUrl": DM321_URL,
    "hitDie": "d8",
    "skillPointsPerLevel": 2,
    "babProgression": "three-quarter",
    "goodSaves": ["will"],
    "prerequisites": INFUSED_PREREQS,
    "progression": [
      { "level": 1, "bab": 0, "fort": 0, "ref": 0, "will": 2 },
      { "level": 2, "bab": 1, "fort": 0, "ref": 0, "will": 3 },
      { "level": 3, "bab": 2, "fort": 1, "ref": 1, "will": 3 },
      { "level": 4, "bab": 3, "fort": 1, "ref": 1, "will": 4 },
      { "level": 5, "bab": 3, "fort": 1, "ref": 1, "will": 4 },
      { "level": 6, "bab": 4, "fort": 2, "ref": 2, "will": 5 },
      { "level": 7, "bab": 5, "fort": 2, "ref": 2, "will": 5 },
      { "level": 8, "bab": 6, "fort": 2, "ref": 2, "will": 6 },
      { "level": 9, "bab": 6, "fort": 3, "ref": 3, "will": 6 },
      { "level": 10, "bab": 7, "fort": 3, "ref": 3, "will": 7 }
    ],
    "classSkills": INFUSED_SKILLS,
    "features": [
      {
        "name": "Basics",
        "description": "Hit Die d8. The infused gains no new weapon or armor proficiencies. No matter what their alignment, infused spellcasters cannot cast spells of the Evil descriptor. Clerics who used negative energy to rebuke undead and spontaneously cast inflict spells now use positive energy to turn undead and spontaneously cast cure spells; they do not increase their turning ability when they take levels of this class. Spellcasting: at 1st, 3rd, 5th, 7th, and 9th level, the character gains new spells per day and new spells known as if she had also gained a level in a spellcasting class she belonged to before adding the prestige class; she gains no other benefit a character of that class would have gained. The infused spellcaster is the casting track of the infused prestige class: the two tracks share requirements, class skills, and class features, and a character may take levels in only one of them."
      },
      ...INFUSED_FEATURES
    ]
  },
  {
    "id": "arvoreens-keeper",
    "name": "Arvoreen's Keeper",
    "ruleset": "faerun",
    "source": DM321,
    "sourceUrl": DM321_URL,
    "hitDie": "d8",
    "skillPointsPerLevel": 4,
    "babProgression": "three-quarter",
    "goodSaves": ["ref", "will"],
    "prerequisites": [
      ...ARVOREEN_PREREQS_BASE,
      "Spellcasting: Ability to cast divine spells",
    ],
    "progression": [
      { "level": 1, "bab": 0, "fort": 0, "ref": 2, "will": 2 },
      { "level": 2, "bab": 1, "fort": 0, "ref": 3, "will": 3 },
      { "level": 3, "bab": 2, "fort": 1, "ref": 3, "will": 3 },
      { "level": 4, "bab": 3, "fort": 1, "ref": 4, "will": 4 },
      { "level": 5, "bab": 3, "fort": 1, "ref": 4, "will": 4 },
      { "level": 6, "bab": 4, "fort": 2, "ref": 5, "will": 5 },
      { "level": 7, "bab": 5, "fort": 2, "ref": 5, "will": 5 },
      { "level": 8, "bab": 6, "fort": 2, "ref": 6, "will": 6 },
      { "level": 9, "bab": 6, "fort": 3, "ref": 6, "will": 6 },
      { "level": 10, "bab": 7, "fort": 3, "ref": 7, "will": 7 }
    ],
    "classSkills": ARVOREEN_SKILLS,
    "features": [
      {
        "name": "Basics",
        "description": "Hit Die d8. Arvoreen's keepers are proficient with all simple and martial weapons, light and medium armor, and shields. Spells per Day: whenever a keeper gains a new level, he may gain new spells per day as if he had gained a level in a divine spellcasting class he belonged to before adding the prestige class (+1 level of existing class at every keeper level); he does not gain any other benefit a character of that class would have gained (increased turning abilities, animal companions, and so on). If the character had more than one divine spellcasting class before becoming a keeper, he must decide to which class he adds each level of keeper for purposes of spells per day. An ex-keeper who violates his alignment or code loses spellcasting granted by keeper levels (see Code of Conduct)."
      },
      ...ARVOREEN_SHARED_FEATURES
    ]
  },
  {
    "id": "arvoreens-warder",
    "name": "Arvoreen's Warder",
    "ruleset": "faerun",
    "source": DM321,
    "sourceUrl": DM321_URL,
    "hitDie": "d8",
    "skillPointsPerLevel": 4,
    "babProgression": "full",
    "goodSaves": ["ref"],
    "prerequisites": ARVOREEN_PREREQS_BASE,
    "progression": [
      { "level": 1, "bab": 1, "fort": 0, "ref": 2, "will": 0 },
      { "level": 2, "bab": 2, "fort": 0, "ref": 3, "will": 0 },
      { "level": 3, "bab": 3, "fort": 1, "ref": 3, "will": 1 },
      { "level": 4, "bab": 4, "fort": 1, "ref": 4, "will": 1 },
      { "level": 5, "bab": 5, "fort": 1, "ref": 4, "will": 1 },
      { "level": 6, "bab": 6, "fort": 2, "ref": 5, "will": 2 },
      { "level": 7, "bab": 7, "fort": 2, "ref": 5, "will": 2 },
      { "level": 8, "bab": 8, "fort": 2, "ref": 6, "will": 2 },
      { "level": 9, "bab": 9, "fort": 3, "ref": 6, "will": 3 },
      { "level": 10, "bab": 10, "fort": 3, "ref": 7, "will": 3 }
    ],
    "classSkills": ARVOREEN_SKILLS,
    "features": [
      {
        "name": "Basics",
        "description": "Hit Die d8. Arvoreen's warders share the keeper's proficiencies — all simple and martial weapons, light and medium armor, and shields — and the keeper's class abilities, gained at the same levels, but they have no spellcasting advancement; instead they are far more adept in combat, gaining short sword bonus feats at 2nd, 4th, 6th, and 8th level (see below). Warders follow the same code of conduct as keepers."
      },
      ARVOREEN_SHARED_FEATURES[0],
      {
        "name": "Bonus Feat: Weapon Focus (Short Sword)",
        "description": "At 2nd level, an Arvoreen's warder gains Weapon Focus (short sword) as a bonus feat.",
        "level": 2
      },
      ARVOREEN_SHARED_FEATURES[1],
      {
        "name": "Bonus Feat: Weapon Specialization (Short Sword)",
        "description": "At 4th level, an Arvoreen's warder gains Weapon Specialization (short sword) as a bonus feat.",
        "level": 4
      },
      ARVOREEN_SHARED_FEATURES[2],
      {
        "name": "Bonus Feat: Greater Weapon Focus (Short Sword)",
        "description": "At 6th level, an Arvoreen's warder gains Greater Weapon Focus (short sword) as a bonus feat.",
        "level": 6
      },
      ARVOREEN_SHARED_FEATURES[3],
      {
        "name": "Bonus Feat: Greater Weapon Specialization (Short Sword)",
        "description": "At 8th level, an Arvoreen's warder gains Greater Weapon Specialization (short sword) as a bonus feat.",
        "level": 8
      },
      ARVOREEN_SHARED_FEATURES[4],
      ARVOREEN_SHARED_FEATURES[5],
      ARVOREEN_SHARED_FEATURES[6]
    ]
  },
  {
    "id": "barber",
    "name": "Barber",
    "ruleset": "core",
    "source": DM321,
    "sourceUrl": DM321_URL,
    "hitDie": "d8",
    "skillPointsPerLevel": 8,
    "babProgression": "three-quarter",
    "goodSaves": ["will"],
    "prerequisites": [
      "Base Attack Bonus: +3",
      "Skills: Bluff 5 ranks, Diplomacy 5 ranks, Disguise 5 ranks, Gather Information 8 ranks, Heal 2 ranks, Profession (barber) 2 ranks",
      "Feat: Investigator or Negotiator",
    ],
    "progression": [
      { "level": 1, "bab": 0, "fort": 0, "ref": 0, "will": 2 },
      { "level": 2, "bab": 1, "fort": 0, "ref": 0, "will": 3 },
      { "level": 3, "bab": 2, "fort": 1, "ref": 1, "will": 3 },
      { "level": 4, "bab": 3, "fort": 1, "ref": 1, "will": 4 },
      { "level": 5, "bab": 3, "fort": 1, "ref": 1, "will": 4 }
    ],
    "classSkills": [
      "Appraise",
      "Bluff",
      "Craft",
      "Decipher Script",
      "Diplomacy",
      "Disguise",
      "Forgery",
      "Gather Information",
      "Heal",
      "Intimidate",
      "Knowledge (all)",
      "Listen",
      "Perform",
      "Profession",
      "Search",
      "Sense Motive",
      "Sleight of Hand",
      "Spot",
    ],
    "features": [
      {
        "name": "Basics",
        "description": "Hit Die d8. Barbers gain no proficiency with any weapon or armor. The barber is a 5-level prestige class from \"Champions of Fate: Prestige Classes of Al-Qadim\"; its Zakharan framing is setting lore (see reference.md) and the mechanics are carried as printed."
      },
      {
        "name": "Gentle Touch (Ex)",
        "description": "Whenever a barber can make physical contact with a creature of Intelligence 3 or higher, she doubles her Charisma bonus when making Bluff, Diplomacy, Intimidate, and Perform checks against that creature. She also gains a +2 bonus on any Sleight of Hand checks made against a person she's touching.",
        "level": 1
      },
      {
        "name": "Craft Tonics (Ex)",
        "description": "Barbers can use the Craft (alchemy) skill to make hair tonics, lotions, shaving creams, and other alchemical goods even if they don't have any spellcasting abilities.",
        "level": 1
      },
      {
        "name": "Poison Use",
        "description": "Barbers are trained in the use of poison and never risk accidentally poisoning themselves when applying poison to a blade.",
        "level": 1
      },
      {
        "name": "Save Bonus against Poison",
        "description": "At 2nd level, a barber gains a +1 bonus on saving throws against poisons. This bonus increases by +1 at every additional barber level (+2 at 3rd, +3 at 4th, +4 at 5th).",
        "level": 2
      },
      {
        "name": "Charm Person (Sp)",
        "description": "Beginning at 2nd level, a barber may use charm person as a spell-like ability a number of times per day equal to her Charisma bonus (at least once per day). If the barber touches the target when using this ability, the save DC increases by +2.",
        "level": 2
      },
      {
        "name": "Chameleon (Ex)",
        "description": "At 3rd level, the barber receives a +2 morale bonus on Disguise checks to act in character. Furthermore, anyone wearing a disguise the barber creates also gains a +2 morale bonus on Disguise checks to act in character, as the barber ably details how to act when in the disguise.",
        "level": 3
      },
      {
        "name": "Potent Tonics (Su)",
        "description": "At 4th level, damage-dealing poisons the barber creates and applies deal additional damage equal to 1 point per die rolled (a poison that normally deals 3d6 points of Constitution damage instead deals 3d6+3 when created and applied by the barber; a damage-dealing poison that only deals 1 point of ability damage deals 2 points instead). Poisons with non-damaging effects have their durations increased by 1 additional die (paralysis lasting 2d6 minutes instead of the normal 1d6 minutes, or unconsciousness lasting 2d3 hours instead of 1d3 hours). This ability does not work with poisons the barber uses that she didn't create, nor for others who might use a poison she creates.",
        "level": 4
      },
      {
        "name": "Suggestion (Sp)",
        "description": "At 5th level, a barber may use suggestion as a spell-like ability a number of times per day equal to her Charisma modifier (at least once per day). If the barber touches the target when using this ability, the save DC increases by +2.",
        "level": 5
      }
    ]
  },
  {
    "id": "corsair-321",
    "name": "Corsair",
    "ruleset": "core",
    "source": DM321,
    "sourceUrl": DM321_URL,
    "hitDie": "d8",
    "skillPointsPerLevel": 6,
    "babProgression": "full",
    "goodSaves": ["ref"],
    "prerequisites": [
      "Base Attack Bonus: +4",
      "Skills: Balance 4 ranks, Climb 4 ranks, Intimidate 6 ranks, Use Rope 4 ranks",
      "Feats: Two-Weapon Fighting, Weapon Finesse, Weapon Focus (scimitar)",
    ],
    "progression": [
      { "level": 1, "bab": 1, "fort": 0, "ref": 2, "will": 0 },
      { "level": 2, "bab": 2, "fort": 0, "ref": 3, "will": 0 },
      { "level": 3, "bab": 3, "fort": 1, "ref": 3, "will": 1 },
      { "level": 4, "bab": 4, "fort": 1, "ref": 4, "will": 1 },
      { "level": 5, "bab": 5, "fort": 1, "ref": 4, "will": 1 },
      { "level": 6, "bab": 6, "fort": 2, "ref": 5, "will": 2 },
      { "level": 7, "bab": 7, "fort": 2, "ref": 5, "will": 2 },
      { "level": 8, "bab": 8, "fort": 2, "ref": 6, "will": 2 },
      { "level": 9, "bab": 9, "fort": 3, "ref": 6, "will": 3 },
      { "level": 10, "bab": 10, "fort": 3, "ref": 7, "will": 3 }
    ],
    "classSkills": [
      "Balance",
      "Bluff",
      "Climb",
      "Craft",
      "Diplomacy",
      "Intimidate",
      "Jump",
      "Move Silently",
      "Profession",
      "Search",
      "Sense Motive",
      "Spot",
      "Swim",
      "Tumble",
      "Use Rope",
    ],
    "features": [
      {
        "name": "Basics",
        "description": "Hit Die d8. Corsairs gain no proficiency with any weapon or armor. From \"Champions of Fate: Prestige Classes of Al-Qadim\"; the -321 suffix distinguishes this prestige class from the unrelated Dragon #310 fighter-variant base class named Corsair already in the catalog."
      },
      {
        "name": "Skill Bonus",
        "description": "A corsair receives an insight bonus on all Profession (sailor), Swim, and Use Rope checks equal to his corsair level.",
        "level": 1
      },
      {
        "name": "Evasion (Ex)",
        "description": "At 2nd level, a corsair gains the evasion special ability, functioning exactly like the rogue ability of the same name. If he has evasion already, he gains improved evasion instead.",
        "level": 2
      },
      {
        "name": "World Traveler",
        "description": "At 3rd level, a corsair adds Aquan to the list of languages he can speak, plus one language of his choice (the DM may restrict this choice based on the corsair's travels). At 7th level, he gains two more languages of his choice.",
        "level": 3
      },
      {
        "name": "Combat Expertise",
        "description": "At 4th level, a corsair gains Combat Expertise as a bonus feat, even if he doesn't meet the prerequisites for the feat.",
        "level": 4
      },
      {
        "name": "Swells Rider",
        "description": "Beginning at 5th level, a corsair can always choose to take 10 on Balance, Climb, or Jump checks made while aboard a ship, even when conditions would normally prevent him from doing so.",
        "level": 5
      },
      {
        "name": "Intrepid Move",
        "description": "Beginning at 6th level, at the start of each round the corsair chooses to gain either a +1 competence bonus to Armor Class or a +1 competence bonus on attack rolls for that round.",
        "level": 6
      },
      {
        "name": "Balanced Blades",
        "description": "Beginning at 8th level, the corsair can wield any one-handed weapon he has Weapon Focus in as though it were a light weapon (for the purposes of the Weapon Finesse feat and for penalties when fighting with two weapons), as long as he's not wearing medium or heavy armor.",
        "level": 8
      },
      {
        "name": "Roiling Sea",
        "description": "Starting at 9th level, a corsair uses his Dexterity modifier instead of his Strength modifier when making damage rolls with a light weapon (or a weapon that Balanced Blades allows him to treat as a light weapon). For off-hand attacks, he still adds only half of this amount.",
        "level": 9
      },
      {
        "name": "Corsair Retreat",
        "description": "At 10th level, when an opponent makes an attack of opportunity against a corsair because the corsair moved within or out of a threatened area, and the opponent's attack misses, the corsair can immediately make a counterattack against that opponent with whatever weapon he's holding at the time, as long as it's a light weapon or one affected by Balanced Blades.",
        "level": 10
      }
    ]
  },
  {
    "id": "holy-slayer",
    "name": "Holy Slayer",
    "ruleset": "core",
    "source": DM321,
    "sourceUrl": DM321_URL,
    "hitDie": "d8",
    "skillPointsPerLevel": 4,
    "babProgression": "three-quarter",
    "goodSaves": ["will"],
    "prerequisites": [
      "Alignment: Any lawful",
      "Base Attack Bonus: +4",
      "Skills: Disguise 2 ranks, Hide 2 ranks, Intimidate 8 ranks, Knowledge (religion) 2 ranks, Move Silently 2 ranks",
      "Feat: Weapon Focus (weapon of choice for the slayer brotherhood, which is always a one-handed weapon)",
    ],
    "progression": [
      { "level": 1, "bab": 0, "fort": 0, "ref": 0, "will": 2 },
      { "level": 2, "bab": 1, "fort": 0, "ref": 0, "will": 3 },
      { "level": 3, "bab": 2, "fort": 1, "ref": 1, "will": 3 },
      { "level": 4, "bab": 3, "fort": 1, "ref": 1, "will": 4 },
      { "level": 5, "bab": 3, "fort": 1, "ref": 1, "will": 4 },
      { "level": 6, "bab": 4, "fort": 2, "ref": 2, "will": 5 },
      { "level": 7, "bab": 5, "fort": 2, "ref": 2, "will": 5 },
      { "level": 8, "bab": 6, "fort": 2, "ref": 2, "will": 6 },
      { "level": 9, "bab": 6, "fort": 3, "ref": 3, "will": 6 },
      { "level": 10, "bab": 7, "fort": 3, "ref": 3, "will": 7 }
    ],
    "classSkills": [
      "Balance",
      "Bluff",
      "Climb",
      "Craft",
      "Disguise",
      "Escape Artist",
      "Gather Information",
      "Hide",
      "Intimidate",
      "Jump",
      "Listen",
      "Move Silently",
      "Open Lock",
      "Sleight of Hand",
      "Search",
      "Sense Motive",
      "Spot",
      "Tumble",
      "Use Rope",
    ],
    "features": [
      {
        "name": "Basics",
        "description": "Hit Die d8. Holy slayers are proficient with all simple and martial weapons and with light and medium armor, but not with shields. From \"Champions of Fate: Prestige Classes of Al-Qadim\"; the brotherhood framing (the Grandfather of Assassins who designates smite targets) is carried in the feature texts as printed."
      },
      {
        "name": "Poison Use",
        "description": "A holy slayer's training includes the use of poison. She never risks accidentally poisoning herself when applying poison to a blade.",
        "level": 1
      },
      {
        "name": "Skill Bonus",
        "description": "A holy slayer receives an insight bonus on all Bluff, Disguise, and Intimidate checks equal to her holy slayer level.",
        "level": 1
      },
      {
        "name": "Weapon Specialization",
        "description": "At 2nd level, a holy slayer gains Weapon Specialization with the signature weapon of her order as a bonus feat, if she does not already have it. If she also has it, she may gain Weapon Specialization with another weapon for which she already has the Weapon Focus feat.",
        "level": 2
      },
      {
        "name": "Faithful Resolve (Su)",
        "description": "At 3rd level, a holy slayer gains a +4 bonus on all saves against fear effects.",
        "level": 3
      },
      {
        "name": "Sneak Attack (Ex)",
        "description": "This ability functions exactly like the rogue ability of the same name. At 4th level, the holy slayer deals +1d6 points of damage with a sneak attack; the extra damage increases by an additional +1d6 every even level thereafter (+2d6 at 6th, +3d6 at 8th, +4d6 at 10th). If the holy slayer already has the sneak attack ability from another class, the damage bonuses stack.",
        "level": 4
      },
      {
        "name": "Smite Infidel (Su)",
        "description": "Beginning at 5th level, a holy slayer may make smite attacks against a person or group designated by her order's Grandfather of Assassins. To use this ability, she must personally visit her Grandfather of Assassins, who assigns her the individual or group she may smite; she may then smite that group until he assigns a new one. She may smite once per day at 5th level, and twice per day at 9th level. She adds her Wisdom bonus (if any) to her attack roll and deals 1 extra point of damage per holy slayer level. If she accidentally smites a creature that is not of the designated group, the smite has no effect but the ability is still used up for that day. A paladin/holy slayer can both smite evil and smite infidel in the same day, potentially against the same target, and may perform a smite with a sneak attack provided the prerequisites for both types of attacks are met.",
        "level": 5
      },
      {
        "name": "Unshakable Pillar (Su)",
        "description": "Beginning at 7th level, a holy slayer's soul is so grounded in her faith that she becomes immune to fear effects.",
        "level": 7
      },
      {
        "name": "Guided Doom (Ex)",
        "description": "By 10th level, the holy slayer has learned to allow Fate to guide her hand. An opponent damaged by one of her sneak attacks also takes 2 points of Constitution damage.",
        "level": 10
      }
    ]
  },
  {
    "id": "mamluk",
    "name": "Mamluk",
    "ruleset": "core",
    "source": DM321,
    "sourceUrl": DM321_URL,
    "hitDie": "d12",
    "skillPointsPerLevel": 4,
    "babProgression": "full",
    "goodSaves": ["fort"],
    "prerequisites": [
      "Alignment: Any lawful",
      "Base Attack Bonus: +5",
      "Base Fortitude Save: +4",
      "Skills: Knowledge (history) 4 ranks, Survival 4 ranks",
      "Feats: Great Fortitude, Toughness",
    ],
    "progression": [
      { "level": 1, "bab": 1, "fort": 2, "ref": 0, "will": 0 },
      { "level": 2, "bab": 2, "fort": 3, "ref": 0, "will": 0 },
      { "level": 3, "bab": 3, "fort": 3, "ref": 1, "will": 1 },
      { "level": 4, "bab": 4, "fort": 4, "ref": 1, "will": 1 },
      { "level": 5, "bab": 5, "fort": 4, "ref": 1, "will": 1 },
      { "level": 6, "bab": 6, "fort": 5, "ref": 2, "will": 2 },
      { "level": 7, "bab": 7, "fort": 5, "ref": 2, "will": 2 },
      { "level": 8, "bab": 8, "fort": 6, "ref": 2, "will": 2 },
      { "level": 9, "bab": 9, "fort": 6, "ref": 3, "will": 3 },
      { "level": 10, "bab": 10, "fort": 7, "ref": 3, "will": 3 }
    ],
    "classSkills": [
      "Climb",
      "Craft",
      "Diplomacy",
      "Handle Animal",
      "Heal",
      "Intimidate",
      "Jump",
      "Knowledge (geography)",
      "Knowledge (history)",
      "Knowledge (local)",
      "Knowledge (nobility and royalty)",
      "Ride",
      "Search",
      "Sense Motive",
      "Spot",
      "Survival",
    ],
    "features": [
      {
        "name": "Basics",
        "description": "Hit Die d12. Mamluks are proficient with all simple and martial weapons, as well as with light, medium, and heavy armor and with shields of all types. From \"Champions of Fate: Prestige Classes of Al-Qadim.\" Rank within a mamluk legion is the final arbiter in disputes of authority: any mamluk may give orders to another of lower rank in the same legion and expect those orders to be carried out, unless they are countermanded by a mamluk who is superior to both."
      },
      {
        "name": "Hardened (Ex)",
        "description": "Mamluks train in the harshest desert environments. At 1st level, a mamluk can ignore the −4 penalty to resist the effects of heat while wearing medium or light armor. When wearing no armor, a mamluk gains a +4 bonus on saves made to resist the effects of heat. Due to their constant training, mamluks can move at their full speed when wearing medium armor.",
        "level": 1
      },
      {
        "name": "Authority",
        "description": "At 2nd level, a mamluk gains a bonus equal to +1 per mamluk level on all Charisma-based skill checks made against mamluks of lower rank.",
        "level": 2
      },
      {
        "name": "Endurance",
        "description": "At 3rd level, a mamluk gains Endurance as a bonus feat.",
        "level": 3
      },
      {
        "name": "Rally (Ex)",
        "description": "Also at 3rd level, a mamluk learns to fight beside his brothers with ferocious tenacity. When fighting within 10 feet of at least one other mamluk, he gains a +1 morale bonus on his attack rolls, damage rolls, and saving throws against mind-affecting effects. This bonus increases to +2 at 6th level and +3 at 9th level.",
        "level": 3
      },
      {
        "name": "Iron Focus (Ex)",
        "description": "A mamluk of 4th level or higher gains a +4 morale bonus on all saves against fear effects.",
        "level": 4
      },
      {
        "name": "Toughness",
        "description": "At 5th level, a mamluk gains Toughness as a bonus feat.",
        "level": 5
      },
      {
        "name": "Zealot (Ex)",
        "description": "A 6th-level mamluk gains a +2 bonus on all saves against mind-affecting, sleep, paralysis, stunning, and death effects.",
        "level": 6
      },
      {
        "name": "War-Hardened (Ex)",
        "description": "When a mamluk reaches 7th level, he can move at his normal speed even in heavy armor.",
        "level": 7
      },
      {
        "name": "Diehard",
        "description": "At 8th level, a mamluk gains Diehard as a bonus feat.",
        "level": 8
      },
      {
        "name": "Desert Survivor (Ex)",
        "description": "Beginning at 9th level, a mamluk is immune to the nonlethal damage dealt by hot environments. In addition, whenever the mamluk makes a Fortitude save for which he gains the bonus granted from the Endurance feat, he does not automatically fail on a natural 1 (he might still fail the save if his saving throw bonus isn't high enough to meet or exceed the DC).",
        "level": 9
      },
      {
        "name": "Fanaticism (Su)",
        "description": "Due to the fanatical mind of a 10th-level mamluk, he is able to shrug off the effects of some wounds: he gains damage reduction 2/—.",
        "level": 10
      }
    ]
  },
];

export const DRAGON_321_PRESTIGE: PrestigeClassDefinition[] = RAW.map((c) => ({
  id: c.id,
  name: c.name,
  ruleset: c.ruleset as PrestigeClassDefinition["ruleset"],
  source: c.source,
  sourceUrl: c.sourceUrl,
  hitDie: c.hitDie,
  skillPointsPerLevel: c.skillPointsPerLevel,
  babProgression: c.babProgression as PrestigeClassDefinition["babProgression"],
  goodSaves: c.goodSaves as PrestigeClassDefinition["goodSaves"],
  progression: c.progression,
  classSkills: c.classSkills,
  prerequisites: c.prerequisites,
  features: c.features.map((ft) =>
    f(ft.name, ft.description, ft.level, c.source, c.sourceUrl),
  ),
}));
