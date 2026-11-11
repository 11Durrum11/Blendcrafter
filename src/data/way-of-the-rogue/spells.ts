import type { SpellDefinition } from "@/engine/types";

// Way of the Rogue — Chapter One of Traps & Treachery
// (Fantasy Flight Games, Legends & Lairs, 2001; the chapter
// identification is from the chapter's contents — Shaun's scan
// is the chapter alone, printed pp. 5-56, with no credits page).
// New Magic, printed pp. 52-56: the Thievery cleric domain
// (p. 52), New Divine Spells (pp. 53-55), and New Arcane
// Spells (p. 56). Transcribed from Shaun's own scanned copy
// (image-only; pages read visually, 2026-11-04). Stat lines
// are as printed (3.0-era forms kept: "1 action" casting
// times, "Wiz/Sor" and "Short" range wording normalized only
// in the levels/range fields as noted); summaries are short
// mechanical paraphrases in our own words.
//
// The Thievery Domain itself has no record type in this
// catalog, so it is carried here in full for reference:
// Granted Power — Pick Pocket, Open Lock, and Move Silently
// are class skills. Domain spells — 1: knock; 2: true filch*;
// 3: perfect crime*; 4: detect traps*; 5: dimension door;
// 6: greater knock*; 7: discern location; 8: lair*; 9: steal
// body*. (* = new spell, built below.) The domain is not
// assigned to any deity in the core rulebooks; the DM may add
// it to the portfolio of whatever gods he thinks should grant
// it. Only the six asterisked spells are new; knock, dimension
// door, and discern location are core spells and are not
// duplicated here.
//
// Notes on individual entries: Perfect Crime and Detect Traps
// print a material component ("M") in their Components lines
// but their entry text never describes one. Greater Knock and
// Lair print "Spell Resistance: None" (not "No"). Steal Body
// prints the range as "Short (25 ft. + 2 ft./level)" and its
// material component is likewise never described in the text.

const WOTR_PATH =
  "/A POC DM related/Desktop/Sourcebooks/d20_dungeons_and_dragons_Way Of The Rogue.pdf";
const DIV = "Way of the Rogue — New Divine Spells";
const ARC = "Way of the Rogue — New Arcane Spells";

export const WAY_OF_THE_ROGUE_SPELLS: SpellDefinition[] = [
  {
    id: "true-filch",
    name: "True Filch",
    ruleset: "core",
    school: "Divination",
    descriptors: [],
    levels: { Thievery: 2, "Sorcerer/Wizard": 2 },
    components: "S",
    castingTime: "1 action",
    range: "Close (25 ft. + 5 ft./2 levels)",
    targetOrArea: "You plus one victim",
    duration: "1 minute/level, or until used; see text",
    savingThrow: "None",
    spellResistance: "No",
    summary:
      "You immediately know the exact moment when it is optimal to use the Sleight of Hand skill on a single victim, selected when the spell is cast (the victim must be in range at casting but can then move farther away without affecting the spell). At any time while the spell remains in effect, one Sleight of Hand check against that victim receives a +20 insight bonus; only one attempt can be made per casting. The spell has only somatic components, so its use is not obvious to most bystanders.",
    source: `${DIV} (p. 53)`,
    sourceUrl: WOTR_PATH,
  },
  {
    id: "perfect-crime",
    name: "Perfect Crime",
    ruleset: "core",
    school: "Divination",
    descriptors: [],
    levels: { Thievery: 3 },
    components: "V, S, M",
    castingTime: "5 minutes",
    range: "Touch",
    targetOrArea: "You plus one associate per 4 levels",
    duration: "1 day",
    savingThrow: "None",
    spellResistance: "No",
    summary:
      "Enhances a specific criminal act, which must be specified in detail as the spell is cast ('I plan to enter the estate of Lord Jason Andrommi and steal the ruby from the top of the family crest in his sitting room' is adequate; 'I want to steal a big jewel!' is not). The crime must somehow advance the aims or principles of the caster's deity. The caster can include one associate per four class levels in addition to himself. From the casting until the crime is completed or one day passes, whichever comes first: all saving throws, skill checks, and attack rolls of the participants receive a +2 competence bonus; the DC of saving throws against all spells cast by the caster or his associates is increased by 2; and all participants gain a +2 competence bonus to AC while engaging in activities that further the crime. The DM decides whether a specific action furthers the specified crime.",
    source: `${DIV} (pp. 53-54)`,
    sourceUrl: WOTR_PATH,
  },
  {
    id: "detect-traps",
    name: "Detect Traps",
    ruleset: "core",
    school: "Divination",
    descriptors: [],
    levels: { Thievery: 4, "Sorcerer/Wizard": 3 },
    components: "V, S, M",
    castingTime: "1 action",
    range: "60 ft.",
    targetOrArea: "Quarter circle emanating from you to the extreme of the range",
    duration: "Concentration, up to 1 minute per level (D)",
    savingThrow: "None",
    spellResistance: "No",
    summary:
      "Reveals all artificial traps within the area, causing them to appear outlined by a pale nimbus visible only to the caster. It detects artificial constructions designed or intended to cause harm, from simple pit traps to the most complex creations of mad trapsmiths; it does not reveal incidental environmental hazards (a natural pit covered by fallen brush is not a 'trap', though a natural pit hidden by intentional act is). The spell reveals all aspects of a trap within range, including remote triggers, even if the trap the trigger activates is not within range. The initial casting reveals only that a trap is present; for each round the caster remains still and concentrates on a single revealed trap he learns more — first round: the trap's basic nature (pit, swinging pendulum, magic); second round: its general effectiveness (how deep the pit is, how many dice of damage the scything blade does); third round: an intuitive understanding of the mechanism, granting the caster a +4 insight bonus on his own Disable Device check to disarm it, or a +2 insight bonus to anyone the caster is directly advising.",
    source: `${DIV} (pp. 53-54)`,
    sourceUrl: WOTR_PATH,
  },
  {
    id: "greater-knock",
    name: "Greater Knock",
    ruleset: "core",
    school: "Transmutation",
    descriptors: [],
    levels: { Thievery: 6, "Sorcerer/Wizard": 6 },
    components: "V, M",
    castingTime: "1 action",
    range: "25 feet",
    targetOrArea: "Cone",
    duration: "Concentration, up to 1 round/level (D)",
    savingThrow: "None",
    spellResistance: "None (as printed)",
    summary:
      "Sometimes called 'The Golden Key' or 'Waymaker,' this spell lets the caster walk effectively unhindered through traps, locked doors, portcullises, and the like. Its area is a cone extending from the front of the caster that turns with him: locked doors within the cone fly open, spiked-shut doors burst inwards, traps misfire or deactivate harmlessly, portcullises slide out of the way, ropes uncoil, deadbolts slide back, and chains snap. Unlike most spells of the Thievery domain it is not subtle, and it requires full concentration to maintain. It will dispel a guards and wards spell. It has no effect on natural hazards or blockages (it will not clear a collapsed tunnel) and provides no means of motion (it may reveal a pit trap, but the pit must still be crossed by normal means). Material component: a masterwork jeweled platinum key ring holding four decorative keys — one gold, one silver, one copper, one iron — costing at least 1,000 gp, which is destroyed in the casting.",
    source: `${DIV} (p. 54)`,
    sourceUrl: WOTR_PATH,
  },
  {
    id: "lair",
    name: "Lair",
    ruleset: "core",
    school: "Conjuration",
    subschool: "Creation",
    descriptors: [],
    levels: { Thievery: 8 },
    components: "V, S",
    castingTime: "1 minute",
    range: "Touch",
    targetOrArea: "One doorframe, arch, or portal",
    duration: "Permanent (D)",
    savingThrow: "None",
    spellResistance: "None (as printed)",
    summary:
      "Creates a permanent extradimensional hideaway behind a doorframe, arch, or portal the caster touches, up to one 10-ft. cube per 2 levels. The target appears normal, but anyone who passes through it while speaking a command word specified by the caster enters the pocket dimension; the caster determines the Lair's exact appearance at casting (always an interior room or small suite with no windows and no outgoing doors other than the targeted one; walls and floor may be of any substance, though such substance dissolves instantly if brought back through the portal). The Lair has no furnishings, but they can be brought in through the door; it can be brightly lit or shrouded in darkness at the creator's will, and its temperature is likewise set by the creator (roughly 20 to 110 degrees). The only way to enter or leave is the pass phrase, which works for anyone who knows it; an unconscious person can be carried in by someone who speaks the phrase. Anyone passing through without speaking the phrase feels nothing unusual, and there is no way short of true seeing, wish, or miracle to detect a Lair. If the door is destroyed, the Lair is likewise destroyed and everything within it (including people) is expelled into the open space nearest the destroyed entrance; any entry to a Lair has its Hardness and hit points doubled. Creating a Lair costs 1,000 experience points, and only one Lair per caster can exist at a time (the caster can destroy his Lair at will, ejecting its contents, but recreating it costs the XP again).",
    source: `${DIV} (pp. 54-55)`,
    sourceUrl: WOTR_PATH,
  },
  {
    id: "steal-body",
    name: "Steal Body",
    ruleset: "core",
    school: "Transmutation",
    descriptors: [],
    levels: { Thievery: 9 },
    components: "V, M",
    castingTime: "1 action",
    range: "Short (25 ft. + 2 ft./level) (as printed)",
    targetOrArea: "One being",
    duration: "Permanent",
    savingThrow: "Will negates",
    spellResistance: "Yes",
    summary:
      "Transposes the caster's mind and the target's mind, each into the other's body; the effect is permanent until and unless steal body is cast again. The bodies remain where they were: physical abilities (Strength, Dexterity, Constitution) remain with the bodies, while mental abilities (Intelligence, Wisdom, Charisma) are transposed. All skills, feats, and levels remain with each being's consciousness; innate powers of a body (flight, elemental resistance, darkvision, etc.) remain with the body, except class abilities (such as a barbarian's rage); all equipment remains with the body. Each mind is instantly capable of using its new body normally. The victim, unless consenting or forewarned, is stunned for 2d4 rounds; a Will save (DC 28) halves this duration. If the original body is still alive and intact, dispel magic, limited wish, wish, or miracle will undo the spell. There are no limits on what body can be stolen. The XP cost of the spell equals the XP that would be received for defeating the target of the spell, based on its CR (DMG p. 166).",
    source: `${DIV} (pp. 55-56)`,
    sourceUrl: WOTR_PATH,
  },
  {
    id: "distraction",
    name: "Distraction",
    ruleset: "core",
    school: "Enchantment",
    subschool: "Compulsion",
    descriptors: [],
    levels: { "Sorcerer/Wizard": 0, Bard: 0 },
    components: "S, M",
    castingTime: "1 action",
    range: "Close (25 ft. + 2 ft./level)",
    targetOrArea: "One person",
    duration: "1 round",
    savingThrow: "Will negates",
    spellResistance: "Yes",
    summary:
      "Very common among rogues who dabble in magecraft (the book prints the level line as 'Wiz/Sor 0, Brd 0'). The target, if he has not yet spotted the caster, is caused to look away for a single round, allowing the caster to move quickly by; the victim also takes a -10 penalty to his Listen checks with regard to the caster for a single round. Material component: a small pebble, which is tossed behind the target of the spell.",
    source: `${ARC} (p. 56)`,
    sourceUrl: WOTR_PATH,
  },
  {
    id: "invisible-object",
    name: "Invisible Object",
    ruleset: "core",
    school: "Illusion",
    subschool: "Glamer",
    descriptors: [],
    levels: { "Sorcerer/Wizard": 1 },
    components: "V, S",
    castingTime: "1 action",
    range: "Touch",
    targetOrArea: "1 object of less than 10 lbs./level",
    duration: "10 minutes/level",
    savingThrow: "Will negates; see text",
    spellResistance: "No",
    summary:
      "Makes a single object invisible — useful for getting purloined goods back out again. The limitation cannot be circumvented by loading a chest with goods and casting the spell on the chest: the chest becomes invisible, but its contents remain quite plain to see. Someone who suspects a person is carrying an invisible object and succeeds at a Search check (DC 15 + caster's level) may then make a Will save to break the illusion; the object is not visible to casual inspection, so only a Search that reveals something out of the ordinary earns a Will save. The object remains invisible for the full duration even if the caster is no longer carrying or holding it. (This is the 'invisible object' on the Trapmaster prestige class's spell list, p. 31.)",
    source: `${ARC} (p. 56)`,
    sourceUrl: WOTR_PATH,
  },
];
