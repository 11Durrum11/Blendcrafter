// Dragon Magazine #340 (February 2006) — trait draft: 20 records.
// TWELVE star signs — "The Stars Are Right" (Hal Maclean), pp. 27-32.
// ⚠️ SHAPE NOTE (flagged in SCREENING.md for Shaun's call): in print the
// signs are not traits — each sign prints three benefits gated by the
// article's feat chain (Optimal Career via Startouched, Lucky Action via
// Starborn, Birthstone via Starblessed plus a carried gem worth 100 gp
// or more). They stage as traits because traits are the catalog's record
// shape for a fixed birth-granted package, with the full gating carried
// in every record's text and the three feats staged in feats-draft.ts.
// EIGHT backgrounds — Class Acts: "Starcasters" (Hal Maclean),
// pp. 88-89: astrology-themed background vignettes for arcane casters,
// each pairing a benefit with an offsetting penalty (if any) — the
// trait shape exactly. The article states the optional benefits and
// penalties of these backgrounds require the DM's approval; each record
// says so. Three backgrounds name the wu jen among their best-suited
// classes as printed; the name is carried as printed and flagged in
// SCREENING.md (no wu jen record is staged).
// All sign benefits were verified against rendered page images
// (magazine pp. 27-32); the image governs over the OCR stream.

import type { FlawTraitDefinition } from "@/engine/types";

const SRC_SIGNS = "Dragon Magazine #340 — The Stars Are Right (Hal Maclean), pp. 27-32";
const SRC_BG = "Dragon Magazine #340 — Class Acts: Starcasters (Hal Maclean), pp. 88-89";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

const SIGN_FRAME =
  " Star sign (staged as a trait; in print the sign's benefits are gated by feats): the Optimal Career bonus requires the Startouched feat, the Lucky Action bonus requires the Starborn feat, and the Birthstone property requires the Starblessed feat and carrying a gemstone of the appropriate type worth 100 gp or more. A character's astrological sign is determined at birth and cannot be changed.";

const BG_FRAME =
  " Starcasters background: the use of the optional benefits and penalties of these background vignettes requires the DM's approval.";

type TraitSeed = Partial<FlawTraitDefinition> & Pick<FlawTraitDefinition, "id" | "name" | "summary" | "description">;

function T(seed: TraitSeed): FlawTraitDefinition {
  return {
    kind: "trait",
    ruleset: "core",
    source: SRC_SIGNS,
    sourceUrl: SRC_URL,
    prerequisite: "Born under this astrological sign.",
    ...seed,
  } as FlawTraitDefinition;
}

export const DRAGON_340_TRAITS: FlawTraitDefinition[] = [
  // ---- The twelve signs ----
  T({
    id: "sign-of-the-beholder",
    name: "Sign of the Beholder",
    summary:
      "Born under the sign of the beholder: +2 on Decipher Script checks (Optimal Career, via Startouched), +2 on Spot checks (Lucky Action, via Starborn), and with an agate worth 100 gp or more (via Starblessed) a +2 luck bonus on saving throws against illusion spells and effects.",
    description:
      "Curious and aware, driven by a never-ending quest for novelty and spectacle, the sign of the beholder creates the ultimate observer. Optimal Career: a natural scribe and spy, endowed with a flair for recognizing patterns and making intuitive leaps, you gain a +2 bonus on Decipher Script checks. Lucky Action: eternally curious and aware of your surroundings, you gain a +2 bonus on Spot checks. Birthstone: Agate, the stone of alertness and uncanny perception, gives you a +2 luck bonus on saving throws to resist illusion spells and effects." +
      SIGN_FRAME,
  }),
  T({
    id: "sign-of-the-harpy",
    name: "Sign of the Harpy",
    summary:
      "Born under the sign of the harpy: +2 on Perform (sing) and Perform (oratory) checks (Optimal Career), +2 on Bluff checks (Lucky Action), and with a turquoise worth 100 gp or more a +1 luck bonus to AC against ranged attacks.",
    description:
      "Charming and socially gifted, the sign of the harpy blends the art of politics with the talent of a born salesman. Optimal Career: born with a voice to make the angels weep, you gain a +2 bonus on Perform (sing) and Perform (oratory) checks. Lucky Action: the most glib and persuasive of all the signs, you gain a +2 bonus on Bluff checks. Birthstone: Turquoise, the stone of air and weather, grants you a +1 luck bonus to Armor Class against ranged attacks." +
      SIGN_FRAME,
  }),
  T({
    id: "sign-of-the-ettin",
    name: "Sign of the Ettin",
    summary:
      "Born under the sign of the ettin: +2 on Sleight of Hand checks (Optimal Career), +2 on Disable Device checks (Lucky Action), and with an opal worth 100 gp or more a +1 luck bonus to AC against attacks of opportunity.",
    description:
      "Two-headed and two-minded, the sign of the ettin produces folk whose hands and wits work at cross purposes to everyone else's. Optimal Career: you gain a +2 bonus on Sleight of Hand checks. Lucky Action: focusing on dangerous mechanisms comes naturally to you, granting you a +2 bonus on Disable Device checks. Birthstone: Opal, the stone of spontaneity and good fortune, grants you a +1 luck bonus to Armor Class against attacks of opportunity." +
      SIGN_FRAME,
  }),
  T({
    id: "sign-of-the-dryad",
    name: "Sign of the Dryad",
    summary:
      "Born under the sign of the dryad: +2 on Handle Animal checks (Optimal Career), +2 on Heal checks (Lucky Action), and with a pearl worth 100 gp or more a +1 luck bonus to AC when an ally occupies an adjacent square.",
    description:
      "Gentle keepers of living things, those born under the sign of the dryad turn instinctively to nurture and mend. Optimal Career: you gain a +2 bonus on Handle Animal checks. Lucky Action: you gain a +2 bonus on Heal checks. Birthstone: Pearl, the stone of security and friendship, grants you a +1 luck bonus to Armor Class when an ally occupies an adjacent square." +
      SIGN_FRAME,
  }),
  T({
    id: "sign-of-the-stirge",
    name: "Sign of the Stirge",
    summary:
      "Born under the sign of the stirge: +2 on Craft (alchemy) checks (Optimal Career), +2 on Concentration checks (Lucky Action), and with an emerald worth 100 gp or more a +2 luck bonus on Will saves against enchantment spells and effects.",
    description:
      "Patient, methodical, and drawn to measurement and observation, the sign of the stirge produces naturally skilled scientists. Optimal Career: your attention to even the slightest minutia makes you a naturally skilled scientist, giving you a +2 bonus on Craft (alchemy) checks. Lucky Action: possessing a focus and intensity that startles many others, you gain a +2 bonus on Concentration checks. Birthstone: Emerald, the stone of mental clarity and self-knowledge, offers you a +2 luck bonus on Will saves against enchantment spells and effects." +
      SIGN_FRAME,
  }),
  T({
    id: "sign-of-the-wyvern",
    name: "Sign of the Wyvern",
    summary:
      "Born under the sign of the wyvern: +2 on Survival checks (Optimal Career), +2 on Ride checks (Lucky Action), and with a sapphire worth 100 gp or more a +1 luck bonus to AC on any round in which you move more than 5 feet.",
    description:
      "Wanderers and risk takers, the sign of the wyvern creates the ultimate free spirit, consumed by wanderlust. Optimal Career: consumed by wanderlust for most of your life, you possess a singular talent for looking after yourself, giving you a +2 bonus on Survival checks. Lucky Action: never one to let yourself get tied down, you are always on the move, gaining a +2 bonus on Ride checks. Birthstone: Sapphire, the gem that protects travelers from harm, grants you a +1 luck bonus to AC on any round in which you move more than 5 feet." +
      SIGN_FRAME,
  }),
  T({
    id: "sign-of-the-dragon",
    name: "Sign of the Dragon",
    summary:
      "Born under the sign of the dragon: +2 on Appraise checks (Optimal Career), +2 on Listen checks (Lucky Action), and with a garnet worth 100 gp or more a +1 bonus to AC for 1 round whenever you use the aid another action.",
    description:
      "Magnificent and conscious of their unique destinies, the sign of the dragon produces people driven to acquire and to lead. Optimal Career: you possess a keen esthetic sense and a shrewd eye for bargains, giving you a +2 bonus on Appraise checks. Lucky Action: ever vigilant for grumbling or calls of distress from those in your care, you gain a +2 bonus on Listen checks. Birthstone: Garnet, the gemstone of celebrity and fame, grants you a +1 bonus to AC for one round whenever you use the aid another action." +
      SIGN_FRAME,
  }),
  T({
    id: "sign-of-the-unicorn",
    name: "Sign of the Unicorn",
    summary:
      "Born under the sign of the unicorn: +2 on Climb checks (Optimal Career), +2 on Jump checks (Lucky Action), and with a topaz worth 100 gp or more a +2 luck bonus on all saves against poison and disease.",
    description:
      "Aggressive and straightforward, the sign of the unicorn produces natural heroes who see the world in simplistic terms: good and evil, black and white, right and wrong. Optimal Career: your ability to ignore danger and focus on the task at hand gives you an excellent head for heights; you gain a +2 bonus on Climb checks. Lucky Action: explosive energy and the drive to push your body beyond its limits gives you a +2 bonus on Jump checks. Birthstone: Topaz, the stone that magnifies the physical health and vigor of its bearer, grants you a +2 luck bonus on all saves versus poison and disease." +
      SIGN_FRAME,
  }),
  T({
    id: "sign-of-the-hydra",
    name: "Sign of the Hydra",
    summary:
      "Born under the sign of the hydra: +2 on Gather Information checks (Optimal Career), +2 on Tumble checks (Lucky Action), and with a diamond worth 100 gp or more a +2 luck bonus to AC against attack rolls made to confirm critical hits.",
    description:
      "Optimistic and durable, the sign of the hydra produces the most resilient people imaginable; nothing gets you down for very long. Optimal Career: your friendly personality and dogged tenacity often help you find out what you need to know, granting you a +2 bonus on Gather Information checks. Lucky Action: agile and resilient, you find that dodging blows and snaking through enemies comes naturally to you, granting you a +2 bonus on Tumble checks. Birthstone: Diamond, the stone of strength and resiliency, gives you a +2 luck bonus to AC versus attack rolls made to confirm critical hits against you." +
      SIGN_FRAME,
  }),
  T({
    id: "sign-of-the-chimera",
    name: "Sign of the Chimera",
    summary:
      "Born under the sign of the chimera: +2 on Diplomacy checks (Optimal Career), +2 on Move Silently checks (Lucky Action), and with an amethyst worth 100 gp or more a +2 luck bonus on Reflex saves against evocation spells and effects.",
    description:
      "Suave and friendly, the sign of the chimera produces people with a gift for finding consensus and unity among even the most diverse groups. Optimal Career: ingratiating and amiable, your ability to get along with others aids you in many fields, giving you a +2 bonus on Diplomacy checks. Lucky Action: comfortable with tiptoeing around awkward issues, both figuratively and literally, you gain a +2 bonus on Move Silently checks. Birthstone: Amethyst, the stone of prescience, gives you a flair for stepping aside in just the nick of time; you gain a +2 luck bonus on any Reflex saving throw against evocation spells and effects." +
      SIGN_FRAME,
  }),
  T({
    id: "sign-of-the-kraken",
    name: "Sign of the Kraken",
    summary:
      "Born under the sign of the kraken: +2 on Swim checks (Optimal Career), +2 on Hide checks (Lucky Action), and with an aquamarine worth 100 gp or more a +1 luck bonus to AC against touch attacks.",
    description:
      "Dabblers with a plan for every eventuality, the sign of the kraken produces natural tacticians and conspirators. Optimal Career: you are comfortable operating in chaotic, fluid environments, granting you a +2 bonus on Swim checks. Lucky Action: you are accustomed to operating from behind the scenes, remaining out of sight to those that would do you harm, granting you a +2 bonus on Hide checks. Birthstone: Aquamarine, the stone of the sea, gives a certain fluidity to your movements, offering you a +1 luck bonus on AC against touch attacks." +
      SIGN_FRAME,
  }),
  T({
    id: "sign-of-the-basilisk",
    name: "Sign of the Basilisk",
    summary:
      "Born under the sign of the basilisk: +2 on Intimidate checks (Optimal Career), +2 on Sense Motive checks (Lucky Action), and with a ruby worth 100 gp or more a +2 bonus on Fortitude saves against transmutation spells and effects.",
    description:
      "Dour and often gloomy, those born under the sign of the basilisk expect the worst, yet this endows them with an uncanny foresight and independence. Optimal Career: you possess a glare like a basilisk, granting you a +2 bonus on Intimidate checks. Lucky Action: a skeptic, you make an excellent watchman or purchaser of goods, giving you a +2 bonus on Sense Motive checks. Birthstone: Ruby, the stone of substance, protecting property as well as flesh, grants you a +2 bonus on any Fortitude saves against transmutation spells and effects (printed without the luck descriptor the other birthstones carry)." +
      SIGN_FRAME,
  }),
  // ---- Class Acts: Starcasters backgrounds (8) ----
  T({
    id: "celestial-twin",
    name: "Celestial Twin",
    source: SRC_BG,
    prerequisite: "Background (Starcasters); best suited for bard, sorcerer, warlock.",
    summary:
      "Background: although born to different parents, the whim of the stars granted you a twin who shares your exact moment of birth. You and your twin gain a +1 bonus on saving throws against death effects and each have a 20% chance of stabilizing while you both live, but your connection manifests randomly: you take a -2 penalty on initiative checks.",
    description:
      "Although born to two different sets of parents, the whim of the stars granted you a twin, a person sharing your exact moment of birth and with a destiny intertwined with your own; baffling visions, incomprehensible cravings, and moments of stark terror connect and sustain you, even though you have never met. Effect: You and your twin gain a +1 bonus on saving throws made to resist death effects and you both have a 20% chance of stabilizing so long as you both continue to live. Your connection manifests randomly, though, giving you a -2 penalty on initiative checks." +
      BG_FRAME,
  }),
  T({
    id: "court-astrologer",
    name: "Court Astrologer",
    source: SRC_BG,
    prerequisite: "Background (Starcasters); best suited for bard, wizard, wu jen (class named as printed; see SCREENING.md).",
    summary:
      "Background: you once served as personal astrological advisor to royalty. You gain a +2 bonus on Diplomacy checks when dealing with nobility or royalty, but take a -1 penalty on all Intimidate and Sense Motive checks.",
    description:
      "You once served as the personal advisor to royalty, consulting the stars to provide insight and advantages over rivals; forced to interrupt your research for petty questions, you learned to hide your frustration behind a mask of docility and loyalty. Effect: Well versed in etiquette and the protocol of deferring to your betters, you possess an instinct for putting the ruling class at ease. You gain a +2 bonus on Diplomacy checks when dealing with nobility or royalty, but you take a -1 penalty on all Intimidate and Sense Motive checks." +
      BG_FRAME,
  }),
  T({
    id: "doomed",
    name: "Doomed",
    source: SRC_BG,
    prerequisite: "Background (Starcasters); best suited for bard, sorcerer, war mage.",
    summary:
      "Background: you dared to cast your own chart and learned the secret of your own death. You gain a +1 bonus on saves against fear effects, but your gloom makes you take a -1 penalty on all Charisma-based skill checks and Charisma ability checks.",
    description:
      "You scorned the warnings of your elders and dared to peer into the one place every devotee of the stars must avoid: delving into forbidden lore you cast your own chart, and now you know the secret of your own death. Effect: Since you know the precise moment and manner of your death, lesser terrors seem but shadows. You gain a +1 bonus on saves made to resist fear effects. Your general gloom makes you reserved and uncommunicative: you take a -1 penalty on all Charisma-based skill checks and Charisma ability checks." +
      BG_FRAME,
  }),
  T({
    id: "gift-of-the-magi",
    name: "Gift of the Magi",
    source: SRC_BG,
    prerequisite: "Background (Starcasters); best suited for bard, wizard, wu jen (class named as printed; see SCREENING.md).",
    summary:
      "Background: the stargazing astrologer of your town granted you a small gift before departing on pressing business far away. You begin play with a spyglass; if it ever breaks or is otherwise removed from your possession, you take a -1 penalty on all skill checks until you recover or repair it.",
    description:
      "Ancient and knowledgeable, the stargazing astrologer who lived in your town always greeted you warmly and patiently answered your every question; when you declared your intent of becoming his apprentice he only nodded and winked, until one morning he told you he had pressing business far away, wiped away your tears, and granted you a small gift you have grown to treasure. Effect: You begin play with a spyglass. If the spyglass ever breaks or is otherwise removed from your possession you become morose and take a -1 penalty on all skill checks until you recover or repair it." +
      BG_FRAME,
  }),
  T({
    id: "pledged-to-the-stars",
    name: "Pledged to the Stars",
    source: SRC_BG,
    prerequisite: "Background (Starcasters); best suited for hexblade, sorcerer, war mage.",
    summary:
      "Background: chosen at birth and raised to be sacrificed for speaking to the deities directly, you rebelled and learned never again to surrender your will. You have spell resistance 10 against divine spells and spell-like abilities, and you cannot voluntarily lower this spell resistance.",
    description:
      "Chosen at birth and separated from kith and kin, some quirk of your horoscope forever robbed you of any hope for a normal life; only when you learned your destiny meant being sent into the afterlife by knife and fire did you rebel, taught by betrayal to never again surrender your will to those who claimed to speak for deities. Effect: You have spell resistance 10 against divine spells and spell-like abilities. You cannot voluntarily lower this spell resistance." +
      BG_FRAME,
  }),
  T({
    id: "star-gazer",
    name: "Star Gazer",
    source: SRC_BG,
    prerequisite: "Background (Starcasters); best suited for sorcerer, wizard, wu jen (class named as printed; see SCREENING.md).",
    summary:
      "Background: schooled in the relentless craft of one who studies the stars, you find examining the heavens almost a compulsion. You gain a +1 bonus on Spot checks, but take a -1 penalty on initiative checks.",
    description:
      "Bleary eyed and schooled in the demanding craft of one who studies the stars, you sometimes seem to spend more nighttime hours pondering the skies than sleeping, and even during the day find yourself glancing upward out of habit. Effect: You gain a +1 bonus on Spot checks — the old habit of occasionally throwing your gaze skyward sometimes prevents you from falling prey to dangers that come from unexpected directions. As a result of your inattention to certain parts of your surroundings, however, you take a -1 penalty on initiative checks." +
      BG_FRAME,
  }),
  T({
    id: "the-tattooed-mystic",
    name: "The Tattooed Mystic",
    source: SRC_BG,
    prerequisite: "Background (Starcasters); best suited for sorcerer, wizard, wu jen (class named as printed; see SCREENING.md).",
    summary:
      "Background: when engulfed by fury, the twelve symbols of the zodiac appear on your face, lit as if by the fires of the heavens. The save DC of any spell you cast with the fear descriptor increases by +1 if the target is within 20 feet and can see your face.",
    description:
      "Perhaps due to some secret ritual you once performed or a mystical birthmark never fully explained, your wrath sometimes takes on a tangible form: when engulfed by fury, the twelve symbols of the zodiac appear on your face and promenade across your features in keeping with the shifts of the stars, and those who meet your fury head on pause at the might of your eldritch lore. Effect: Increase the save DC of any spell you cast with the fear descriptor by +1 if the target is within 20 feet and can see your face." +
      BG_FRAME,
  }),
  T({
    id: "village-seer",
    name: "Village Seer",
    source: SRC_BG,
    prerequisite: "Background (Starcasters); best suited for bard, sorcerer, warlock.",
    summary:
      "Background: your powers came upon you suddenly in childhood, and the folk of your village came to take your every utterance as gospel. You gain a +2 bonus on Bluff checks when dealing with commoners, but take a -1 penalty on all Diplomacy and Sense Motive checks.",
    description:
      "Your powers came unto you suddenly and with no explanation early in your childhood; the others in the village came to look upon you as touched by destiny, a living conduit to the powers that be, and in self-defense you learned to couch your words in ambiguity and nuance, drawing upon half-understood lore of the stars to back your pronouncements. Effect: Playing upon the credulity and trust of those born to toil comes to you naturally. You gain a +2 bonus on Bluff checks when dealing with commoners, but you take a -1 penalty on all Diplomacy and Sense Motive checks." +
      BG_FRAME,
  }),
];
