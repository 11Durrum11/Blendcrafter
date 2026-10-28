/**
 * Races of Faerun template data pack: the shade (Chapter 9)
 * and the yuan-ti tainted one (Chapter 9), the two templates
 * the book presents for characters. Built 2026-10-27 from the
 * copy in Shaun's Dropbox library:
 *   /A POC PC related/5.Splat/Races of series/Races of Faerun.pdf
 *
 * Races of Faerun is a Forgotten Realms book filed under
 * ruleset "core" (no Faerun toggle exists in the app's sorting
 * scheme), and a 3.0-era book (March 2003) recorded in the
 * app's 3.5 conventions.
 *
 * The book's lycanthrope chapter (pp. 142–146) prints a full
 * revised lycanthrope template, but a lycanthrope record
 * already exists in the core data (from the SRD), so the
 * printing here is a duplicate and was skipped; the addendum
 * notes where its numbers differ from the existing record.
 *
 * Neither template's character presentation in this book
 * prints a Challenge Rating adjustment, so crModifier is 0
 * and the fact is stated in each summary rather than guessed.
 * All of the shade's bonuses are conditional on being in
 * shadow or darkness, so per house style they are recorded as
 * feature text, not always-on modifiers.
 */
import type { TemplateDefinition } from "@/engine/types";

const ROF = "Races of Faerun";
const ROF_PATH =
  "/A POC PC related/5.Splat/Races of series/Races of Faerun.pdf";

export const RACES_OF_FAERUN_TEMPLATES: TemplateDefinition[] = [
  {
    id: "shade",
    name: "Shade",
    ruleset: "core",
    timing: "acquired",
    summary:
      "A humanoid transformed by the Shadovar of Netheril into a creature of the Plane of Shadow: considered an outsider, +2 Constitution and +2 Charisma, and — only while in shadow or darkness — faster movement, a +4 deflection bonus to AC, +2 competence bonus on attacks and damage, +4 luck bonus on all saves, skill bonuses, control light, fast healing 2, invisibility, shadesight, shadow image, and (at higher levels) shadow stride and shadow travel, plus spell resistance. None of the shade's powers function in well-lit surroundings (daylight or the radius of a daylight spell). This book's character presentation prints no Challenge Rating adjustment, so crModifier is 0.",
    source: `${ROF} — Chapter 9: Minor Races, Shade (pp. 147–149)`,
    sourceUrl: ROF_PATH,
    crModifier: 0,
    levelAdjustment: 4,
    prerequisites: [
      {
        allowedBaseTypes: ["Humanoid"],
        note: "A shade is created from a humanoid by the Princes of Shade (in practice, a Shadovar human). Shades must be of a nongood alignment. The book notes the Shadovar do not create shades from characters of less than 5th level.",
      },
    ],
    abilityModifiers: { con: 2, cha: 2 },
    patches: [
      {
        op: "set-type",
        value: "Outsider",
        note: "As creatures of the Plane of Shadow, shades are considered to be of the outsider type.",
      },
    ],
    features: [
      {
        key: "shade-shadowbound",
        name: "Shadowbound Powers",
        description:
          "All of the shade's template powers function only while the shade is within shadows or darkness. In well-lit surroundings (daylight or the radius of a daylight spell) none of these powers function.",
        category: "special-quality",
        source: `${ROF} — Shade (p. 148)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "shade-bonuses",
        name: "Shade Bonuses (in shadow or darkness)",
        description:
          "While in shadow or darkness: speed increases by 20 feet (or 10 feet if the character wears medium or heavy armor); +4 deflection bonus to AC; +2 competence bonus on attacks and damage; +4 luck bonus on all saving throws; +4 racial bonus on Listen and Spot checks and +8 racial bonus on Hide and Move Silently checks, with no skill check penalties due to darkness. These bonuses are conditional, so they are recorded here rather than as always-on modifiers.",
        category: "special-quality",
        source: `${ROF} — Shade (p. 149)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "shade-control-light",
        name: "Control Light",
        description:
          "The shade can decrease the levels of light within a 100-foot radius by a factor of 10% per level. For characters and creatures dependent on light to see, this decreases the effective range of vision by the same percentage. For each 25% decrease in light, anyone within the area gains a +1 circumstance bonus on Hide checks (spell-like ability).",
        category: "special-quality",
        source: `${ROF} — Shade (p. 149)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "shade-fast-healing",
        name: "Fast Healing",
        description: "A shade has fast healing 2 (in shadow or darkness; see Shadowbound Powers).",
        category: "special-quality",
        source: `${ROF} — Shade (p. 149)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "shade-invisibility",
        name: "Invisibility",
        description:
          "The shade can use invisibility once per round as a sorcerer of his level (spell-like ability; in shadow or darkness, see Shadowbound Powers).",
        category: "special-quality",
        source: `${ROF} — Shade (p. 149)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "shade-shadesight",
        name: "Shadesight",
        description:
          "The shade has 60-foot darkvision and can see normally through any darkness effects, but not through fog, invisibility, obscuring mist, and so on (spell-like quality; in shadow or darkness, see Shadowbound Powers).",
        category: "special-quality",
        source: `${ROF} — Shade (p. 149)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "shade-shadow-image",
        name: "Shadow Image",
        description:
          "Three times per day, the shade can use a spell-like ability similar to the mirror image spell, as a sorcerer of his level, creating 1d4 figments of the shade, +1 per three levels.",
        category: "special-quality",
        source: `${ROF} — Shade (p. 149)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "shade-shadow-stride",
        name: "Shadow Stride",
        description:
          "As often as once every 2 rounds, a shade of 8th level or higher can vanish from his current location and reappear in any shadowy area within 300 feet, as a move-equivalent action (spell-like ability).",
        category: "special-quality",
        source: `${ROF} — Shade (p. 149)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "shade-shadow-travel",
        name: "Shadow Travel",
        description:
          "If the shade is 12th level or higher, he can use teleport without error to reach a shadowy locale on the same world, or plane shift to access the Plane of Shadow, once per day (spell-like ability).",
        category: "special-quality",
        source: `${ROF} — Shade (p. 149)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "shade-spell-resistance",
        name: "Spell Resistance",
        description: "A shade has spell resistance of 11 + character level.",
        category: "special-quality",
        source: `${ROF} — Shade (p. 149)`,
        sourceUrl: ROF_PATH,
      },
    ],
  },
  {
    id: "yuan-ti-tainted-one",
    name: "Yuan-ti Tainted One",
    ruleset: "core",
    timing: "acquired",
    summary:
      "A humanoid corrupted by drinking the yuan-ti servitor draught, gaining the listed traits in addition to the traits of the base creature: +2 Constitution, a venomous bite (delivered by grapple, not a natural attack), immunity to snake venom, spell resistance that scales with level, two psionic spell-like abilities, and the Alertness feat. This book's presentation prints no Challenge Rating adjustment, so crModifier is 0.",
    source: `${ROF} — Chapter 9: Minor Races, Yuan-ti (pp. 153–154)`,
    sourceUrl: ROF_PATH,
    crModifier: 0,
    levelAdjustment: 2,
    prerequisites: [
      {
        allowedBaseTypes: ["Humanoid"],
        note: "A tainted one is a humanoid who has drunk the yuan-ti servitor draught (the tainted transformation ritual of the yuan-ti). Abominations, halfbloods, and broodguards are stated in the book to be unsuitable as player character races and are not converted.",
      },
    ],
    abilityModifiers: { con: 2 },
    patches: [],
    features: [
      {
        key: "tainted-one-poison-bite",
        name: "Poison Bite",
        description:
          "A tainted one gains a venomous bite, although he does not gain a natural attack with which to deliver it. To use his poison, he must make a successful grapple check against a foe and then a successful melee attack. Fortitude save (DC 10 + the tainted one's Con modifier) negates; initial and secondary damage 1d4 temporary Constitution. The poison can also be injected against an unresisting foe with a kiss.",
        category: "special-attack",
        source: `${ROF} — Yuan-ti Tainted One racial traits (pp. 153–154)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "tainted-one-poison-immunity",
        name: "Poison Immunity",
        description:
          "A tainted one is immune to all forms of snake venom, including his own.",
        category: "special-quality",
        source: `${ROF} — Yuan-ti Tainted One racial traits (pp. 153–154)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "tainted-one-spell-resistance",
        name: "Spell Resistance",
        description:
          "A tainted one has spell resistance of 12 + 1 per two levels, as printed.",
        category: "special-quality",
        source: `${ROF} — Yuan-ti Tainted One racial traits (pp. 153–154)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "tainted-one-psionics",
        name: "Psionics",
        description:
          "The tainted one can produce the following effects (spell-like abilities, treated as if cast by a sorcerer of the tainted one's level): poison 1/day (Fort save DC 13 + the tainted one's Con modifier), and polymorph 3/day, into viper forms only, as printed in the book's italic psionics list.",
        category: "special-quality",
        source: `${ROF} — Yuan-ti Tainted One racial traits (pp. 153–154)`,
        sourceUrl: ROF_PATH,
      },
      {
        key: "tainted-one-alertness",
        name: "Alertness",
        description:
          "The tainted one gains Alertness as a bonus feat. Favored class is by base creature. Automatic languages are as the base race; bonus languages: Abyssal, Common, Draconic, Yuan-Ti.",
        category: "feat",
        source: `${ROF} — Yuan-ti Tainted One racial traits (pp. 153–154)`,
        sourceUrl: ROF_PATH,
      },
    ],
  },
];
