import type { ClassLevelProgressionRow, FeatureDefinition, PrestigeClassDefinition } from "@/engine/types";

// Five Fingers: Port of Deceit (Iron Kingdoms, Privateer
// Press) prestige classes, printed pp. 190-201, transcribed
// in full — progression tables included — from Shaun's own
// scanned copy (read visually, 2026-11-04). The Agent
// replaces the old Intelligence Liaison class for the Iron
// Kingdoms. Printing quirks are recorded as printed, not
// silently resolved: the Enforcer's Leadership gain is
// described inside its Street Tribute text while its table
// lists Leadership at 7th level, and the Malefactor's
// spells-per-day table (A-5) prints a garbled class-level
// column — its ten rows read as levels 1-10 in order, as the
// class text (new slots every other level) confirms.
// Summaries are short mechanical paraphrases in our own
// words; no book prose is reproduced.

const FF = "Five Fingers: Port of Deceit";
const FF_PATH = "/A POC PC related/5.Splat/Iron Kingdoms - Five Fingers- Port of Deceit.pdf";
const AGT = `${FF} — The Agent`;
const ENF = `${FF} — Enforcer`;
const MAL = `${FF} — Malefactor of Thamar`;

type F = FeatureDefinition & { levelsNeeded?: number };

function mk(source: string) {
  return function f(name: string, description: string, levelsNeeded: number | undefined): F {
    return {
      key:
        source.split("— ")[1].toLowerCase().replace(/[^a-z0-9]+/g, "-") +
        "-" +
        name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
      name,
      description,
      category: "special-quality",
      source,
      sourceUrl: FF_PATH,
      ...(levelsNeeded ? { levelsNeeded } : {}),
    };
  };
}

const fa = mk(AGT);
const fe = mk(ENF);
const fm = mk(MAL);

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const TQ10 = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];
const GOOD10 = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7];
const POOR10 = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3];
const ENF_FORT = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4];
const MAL_REF = [0, 0, 1, 1, 1, 2, 2, 3, 3, 3];

export const FIVE_FINGERS_PRESTIGE_CLASSES: PrestigeClassDefinition[] = [
  {
    id: "agent",
    name: "The Agent",
    ruleset: "iron_kingdoms",
    source: `${AGT} (pp. 190-195)`,
    sourceUrl: FF_PATH,
    hitDie: "d6",
    skillPointsPerLevel: 8,
    babProgression: "three-quarter",
    goodSaves: ["ref"],
    progression: rows(TQ10, POOR10, GOOD10, POOR10),
    classSkills: [
      "Bluff", "Climb", "Craft", "Craft (small arms)", "Decipher Script", "Diplomacy",
      "Disable Device", "Disguise", "Escape Artist", "Forgery", "Gather Information",
      "Hide", "Intimidate", "Knowledge", "Listen", "Move Silently", "Perform",
      "Profession", "Ride", "Search", "Sense Motive", "Sleight of Hand", "Spot",
      "Swim", "Tumble", "Use Rope",
    ],
    prerequisites: [
      "Base attack bonus +4",
      "Skills: Bluff 6 ranks or Diplomacy 6 ranks",
      "Skills: Disguise 5 ranks",
      "Skills: Forgery 3 ranks",
      "Skills: Gather Information 6 ranks or Search 6 ranks",
      "Skills: Sense Motive 6 ranks",
      "Feats: any two of Deceitful, Investigator, Negotiator, Persuasive, Stealthy",
      "Special: handpicked and trained by a current ranking member of the appropriate covert organization, government, major trade organization, mercenary group, or cabal (training can take several months)",
    ],
    features: [
      fa("Agent Proficiencies", "A nation's or organization's spy — gathers and manipulates information, master of disguise and fabricated identities; this class replaces the old Intelligence Liaison class for the Iron Kingdoms. The agent is proficient with stealth-favoring weapons including hand and light crossbow, dagger, dart, light mace, sap, shortbow, and short sword, plus two martial or exotic weapons of choice, and with all light armor. A Bluff check can fake familiarity with mundane nonproficient weapons and armor (exotic excluded unless studied 1-12 hours). The agent also chooses 3 additional skills as class skills on entry (never changeable; skills exclusive to other classes excluded).", undefined),
      fa("Fabricate Identity (Ex)", "Build a false identity per the book's Table A-2: Common — 1 day, DC 15, up to 1d6 gp, Disguise. Moderate — 1d4+2 days, DC 20, 3d20 gp, Disguise + Gather Information (sometimes Forgery). High-ranking — 3d12 days, DC 25, 3d6x100 gp, Disguise + Forgery + Gather Information. Very High — 7d10 days, DC 30+, 2d20x250 gp, Diplomacy + Disguise + Forgery + Gather Information. Each failed check adds 25% to time and cost; a second failure means the identity cannot be created at the agent's current level (retry after gaining a level). The agent can maintain a number of identities equal to half agent level (rounded up) + Int modifier. A created identity is foolproof under normal scrutiny with no further checks needed; it cannot imitate another race or a specific living individual, and is not protected from magical detection.", 1),
      fa("Cover Identity", "Free moderate cover identity at 1st level, with 5 free ranks in a related Profession; free high-ranking identity at 5th level; free very-high-ranking identity at 10th level.", 1),
      fa("Linguist", "At 1st level, learn 3 languages.", 1),
      fa("Spy Abilities", "Chosen at 1st level and every other level thereafter; each once unless noted. Aura of Charm (Ex): shift a reaction by one category as a full-round action, 3/day. Disguise Others (Ex): assist others' disguise fabrication, bonus equal to half the agent's skill. Escape (Ex): add Int modifier to AC and attack bonus when using total defense. Ear of Truth: know a lie when heard; may take 20 on Sense Motive outside combat. Eagle Eyed: Spot and Search at a -10 penalty while distracted, as a free action once per round. Field Mastery (Ex): choose two skills each time taken; may take 10 with them even under stress. Improvised Threat: use any improvised weapon as if proficient; +2 circumstance on Bluff when feinting. Presence: bonus to one Bluff, Intimidate, or Diplomacy check equal to half class level, once per day per point of Cha modifier. Poison Use: never risks accidentally poisoning himself. Slippery Mind: requires 5 agent levels; the rogue ability of the same name. Sneak Attack: +1d6, may be taken multiple times. Versatile: any one bonus feat, may be taken multiple times. Expert Impersonation (Ex): requires 3 agent levels — after at least twelve hours of direct observation plus a week-long Gather Information check (DC 30), impersonate that specific person; the disguise is non-magical and impervious to true seeing.", 1),
      fa("Charming (Ex)", "+2 competence bonus on Bluff, Diplomacy, Intimidate, and Gather Information.", 2),
      fa("Field Education (Ex)", "At 2nd level and every other level thereafter, pick an unknown Craft, Knowledge, Perform, or Profession skill and gain +2 ranks in it (field-learned; skill points can later raise it normally).", 2),
      fa("Conditioned Mind (Ex)", "+1 insight bonus on saves vs. divination and mind-affecting enchantment magic; +1 more at 6th, 8th, and 10th level.", 4),
      fa("Surprising Move (Ex)", "If the agent has the highest initiative at the start of combat, they may take a standard action before the first round.", 5),
      fa("Against the Odds (Ex)", "Reroll a failed attack roll, save, or skill check once per day.", 7),
      fa("Detect Ruse (Ex)", "Automatic Spot check (DC 25) to notice disguised individuals, magical areas of effect, forgeries, polymorphed entities, or an invisible being; success gives a hunch that something is wrong without identifying what.", 8),
      fa("Master of Persuasion (Ex)", "After at least one minute of private conversation, make an opposed Diplomacy check vs. the target's Sense Motive; on success the target must make a Will save (DC 11 + agent's Int modifier + agent's Cha modifier) or be treated as under charm person for 1 hour per point of the agent's combined Int + Cha modifiers.", 10),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "enforcer",
    name: "Enforcer",
    ruleset: "iron_kingdoms",
    source: `${ENF} (pp. 195-198)`,
    sourceUrl: FF_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    progression: rows(TQ10, ENF_FORT, GOOD10, GOOD10),
    classSkills: [
      "Appraise", "Bluff", "Climb", "Diplomacy", "Gather Information", "Hide",
      "Intimidate", "Jump", "Knowledge (laws)", "Knowledge (local)", "Listen",
      "Move Silently", "Profession", "Ride", "Search", "Sense Motive", "Spot",
      "Swim", "Use Rope",
    ],
    prerequisites: [
      "Base attack bonus +5",
      "Reputation 15 or better (the book's Reputation system, Ch. 4)",
      "Skills: Intimidate 7 ranks",
      "Skills: Sense Motive 4 ranks",
      "Special: must have acquired a criminal fiefdom in a city",
    ],
    features: [
      fe("Enforcer Proficiencies", "Leader of street gangs, smuggling rackets, and criminal syndicates — a syndicate's right hand who can rise to crime lord. The enforcer is proficient with martial weapons and with light and medium armor.", undefined),
      fe("Improved Unarmed Strike (Ex)", "Gains Improved Unarmed Strike as a bonus feat at 1st level.", 1),
      fe("Crippling Gouge (Ex)", "+2 competency bonus to unarmed damage while grappling.", 1),
      fe("Sneak Attack", "+1d6 sneak attack at 1st level, rising to +2d6 at 4th, +3d6 at 6th, and +4d6 at 9th.", 1),
      fe("Punishing Blow (Ex)", "Unarmed nonlethal attacks against a foe with no armor or light armor are automatically threatening; at 5th level the critical multiplier becomes x3.", 2),
      fe("Five Cant (Ex)", "Learn the Five Cant criminal dialect (treated like a language; learning another city's or district's cant takes about two weeks of interaction).", 2),
      fe("Word of Mouth (Ex)", "Knows any character in the city with Reputation 10+ (name, race, sex, class, approximate level band, and known criminal history). A successful Gather Information check (DC 20) reveals one of the character's current allies, repeatable with the DC rising by 2 per check until a failure or no allies remain. A character whose Reputation is a multiple of 10 can be heard of to gain an informant who follows the character, and the enforcer gains +2 on Bluff, Diplomacy, Intimidate, Profession (Blackmailer), and Sense Motive checks against that character.", 3),
      fe("Street Fighting (Ex)", "With a successful Bluff check, make a special feint masking the intention to attack, gaining a surprise round against anyone who fails to see through the Bluff before combat begins. At 8th level the flanking bonus is +4 instead of +2.", 4),
      fe("Gut Shot (Ex)", "Attack with a pistol as if it were a light weapon while grappling, with the usual -4 attack penalty halved.", 5),
      fe("Leadership", "The class table lists Leadership at 7th level; the gain is described in the Street Tribute text (8th level) — recorded both as printed, not resolved.", 7),
      fe("Street Tribute (Ex)", "Attracts a larger than usual group of followers with stronger loyalty — gains the Leadership feat immediately if not already held, or +1 to Leadership score if already held.", 8),
      fe("Succession", "Declare independence from the crime lord served (peaceful takeover or gang war). Once independent: +3 competence bonus on all Gather Information checks; coin and tribute equal to 5% of the gp value of his territory per month; and 1st-level enforcer followers (at least one, plus one per point of Charisma bonus) who serve loyally unless abused.", 10),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "malefactor-of-thamar",
    name: "Malefactor of Thamar",
    ruleset: "iron_kingdoms",
    source: `${MAL} (pp. 197-201)`,
    sourceUrl: FF_PATH,
    hitDie: "d8",
    skillPointsPerLevel: 2,
    babProgression: "three-quarter",
    goodSaves: ["fort", "will"],
    progression: rows(TQ10, GOOD10, MAL_REF, GOOD10),
    classSkills: [
      "Bluff", "Concentration", "Craft", "Diplomacy", "Disguise", "Forgery",
      "Gather Information", "Intimidate", "Jump", "Knowledge", "Listen",
      "Profession", "Search", "Sense Motive", "Spot",
    ],
    prerequisites: [
      "Base attack bonus +3",
      "Skills: Knowledge (religion) 5 ranks",
      "Alignment: any evil",
      "Special: must be a devout worshipper of Thamar with a particular patron scion, and must survive a Trial of the Scion",
    ],
    features: [
      fm("Malefactor Proficiencies", "Devout follower of Thamar, the Dark Goddess, bound to a patron scion and to one of three Voices — Tyrants (Voice of Tyranny), Subversives (Voice of Subversion), Discordists (Voice of Discord). The class text says it is intended primarily for villains but is playable. The malefactor is proficient with martial weapons, with light and medium armor, and with all spears, morningstars, and daggers (Thamar's favored weapons). Class skills include Knowledge (any).", undefined),
      fm("Malefactor Spells", "At 1st level, a malefactor who was not already a divine spellcaster gains the ability to cast divine spells from the malefactor spell list, prepared in advance and Wisdom-based (needs Wis 10 + spell level; save DC 10 + spell level + Wis modifier; bonus spells for high Wisdom apply). Spells per day (Table A-5, by class level, columns 1st-5th): L1: 0 at 1st; L2: 1; L3: 2/0; L4: 2/1; L5: 2/2/0; L6: 3/2/1; L7: 4/3/2/0; L8: 4/3/2/1; L9: 5/4/3/2/0; L10: 5/4/3/2/1 — plus 0-level spells as the table gives. (The printed table's class-level column repeats some numbers; its ten rows read as levels 1-10 in order, as the class text confirms — recorded as printed, not silently fixed.) The spell list (p. 201) is made of existing spells: 0 — cure minor wounds, detect magic, detect poison, guidance, inflict minor wounds, light, mending, purify food and drink, read magic, resistance. 1st — bane, cause fear, command, comprehend languages, cure light wounds, curse water, deathwatch, detect evil/good, detect undead, disguise self, divine favor, doom, false life, inflict light wounds, obscuring mist, protection from good/evil, shield of faith. 2nd — bear's endurance, bull's strength, charm person, cure moderate wounds, darkness, darkvision, death knell, delay poison, desecrate, detect thoughts, eagle's splendor, enthrall, find traps, hold person, hypnotism, inflict moderate wounds, owl's wisdom, lesser restoration, misdirection, produce flame, shatter, silence, sound burst, spiritual weapon, undetectable alignment. 3rd — animate dead, bestow curse, blindness/deafness, blur, contagion, deeper darkness, dispel magic, flaming sphere, glyph of warding, hypnotic pattern, inflict serious wounds, invisibility, locate object, magic circle against good/evil, nondetection, obscure object, prayer, spectral hand, speak with dead, stone shape, touch of idiocy, wind wall. 4th — arcane sight, clairaudience/clairvoyance, confusion, death ward, dismissal, displacement, divination, divine power, flame arrow, freedom of movement, inflict critical wounds, major image, neutralize poison, poison, protection from energy, rage, sending, spell immunity, suggestion, tongues, vampiric touch. 5th — break enchantment, charm monster, crushing despair, dream, false vision, greater command, commune, dispel good/evil, dominate person, fear, flame strike, lesser geas, locate creature, mass inflict light wounds, mind fog, nightmare, phantasmal killer, righteous might, scrying, seeming, shout, spell resistance, symbol of pain, true seeing, unhallow.", 1),
      fm("Choosing a Voice of Thamar", "At 1st level choose a Voice, permanently: Voice of Discord (scions Delesle, Khorva, Lukas, Roth, Aidan, Stacia; most often chaotic evil); Voice of Subversion (Drayce, Bolis, Aidan, Stacia, Nivara; most often neutral evil); Voice of Tyranny (Ekris, Delesle, Khorva, Roth, Nivara; most often lawful evil). The Voice and patron scion gate the Mask, Whisper, and Reward powers below.", 1),
      fm("Mask of Evil", "At 1st level, by Voice: The Changing Mask (Sp) — Subversion: disguise self 3/day, caster level = malefactor level. The War Mask (Su) — Discord: 1/day, a touch attack filled with unholy power inflicting 1d6 + class level points of negative energy damage and granting the malefactor that many temporary hit points (fade after an hour). The Tyrant's Mask (Sp) — Tyranny: command 3/day, caster level = malefactor level.", 1),
      fm("Dark Whispers", "At 3rd level choose one granted power, permanently. Cursing Whisper (Su) — Discord: once per day per class level, curse one subject with -2 on attack rolls, damage rolls, saves, and checks (Will save DC 10 + Cha bonus + half class level negates). Doom Whisper (Su) — Tyranny or Discord: twice per day speak a terrifying word; a failed Will save (same DC) leaves the opponent frightened, a made save leaves it shaken for 1 round. Whisper of Delesle (Su) — Tyranny with Scion Delesle: create a single permanent thrall lieutenant and 1d6 thrall warriors once per month with no XP or gold cost, requiring the equivalent number of corpses and 1 hour per Hit Die painting runes on the flesh; no limit on total created over time given a supply of corpses. The Gift's Whisper (Su) — patron Nivara (Tyranny or Subversion) or Stacia (Discord or Subversion): wizard, sorcerer, cleric, and malefactor levels stack when determining caster level (advances caster level only, not spell progression). Whisper of Lies (Sp) — Subversion: speak to and seduce foes 3/day as the spell suggestion, caster level = malefactor level.", 3),
      fm("Ambition's Reward", "At 5th level choose one granted power, permanently. Black Fire (Su) — Discord, twice per day: add unholy power to damage-dealing spells, adding 1d6 damage per malefactor level to the spell's damage roll (magical fire damage, resisted identically to the base spell); the same amount rolled is inflicted on the malefactor as nonlethal damage (no save). Corrupting Touch (Su) — Tyranny or Discord: ranged touch attack 3/day inflicting a negative level unless the target succeeds on a Fortitude save (DC 15 + half class levels). Word of Obedience (Sp) — Tyranny: greater command 3/day, caster level = malefactor level. Vanishing Hand (Su) — Subversion: once per day make a number of creatures invisible equal to half the malefactor class level (rounded down), lasting 1 minute per level, not ending if the subject attacks.", 5),
      fm("Beloved of Thamar (Su)", "Call on Thamar once per day and be possessed by a powerful evil spirit (\"The Chosen\") for a number of rounds equal to malefactor level: +4 divine bonus to Strength, Charisma, and Constitution; cast divine spells as a cleric two levels higher (no access to additional spell levels); -2 divine penalty to AC; gains the Evil subtype while possessed (the character remains in control); can be found with detect evil and warded against by magic circle against evil; dispel evil has no effect on the malefactor but banishes the spirit and ends the possession immediately.", 7),
      fm("Cultists (Ex)", "Attracts a larger than usual group of followers with stronger loyalty; gains Leadership if not already held, or +1 to Leadership score if already held. All followers are members or allies of the malefactor's own sept of Thamar.", 9),
      fm("Chosen Initiate (Su)", "Becomes an initiate to the Chosen of the dark goddess (on death, likely to become a Chosen divine servitor). A luminous Telgesh glyph appears on the brow, visible only to Thamarites and other malefactors, granting +4 divine bonus to Charisma-based skill checks when interacting with them, even of an opposing sept. Once per week the malefactor can manifest the symbol to unleash one Voice-based power: Manifestation of Discord (Su): all creatures within 60 ft must make a Will save (DC 15 + Cha bonus) or become permanently insane (as the insanity spell); those who save suffer a -2 divine penalty to Will saves for 10 rounds. Manifestation of Subversion (Sp): all creatures within 60 ft must make a Will save (DC 15 + Cha bonus) or be charmed (as charm monster) for 10 hours; savers suffer the same -2 penalty. Leash of Tyranny (Sp): all creatures within a 60-ft radius must make a Fortitude save (DC 15 + Cha bonus) or suffer 3d6 points of temporary Strength damage; savers suffer the same -2 penalty.", 10),
    ].map((x) => x as FeatureDefinition),
  },
];
