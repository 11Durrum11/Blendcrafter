// Dragon Magazine #331 (May 2005) — spell draft: 7 spells.
// "Spellcraft: Spell Strips of the Black Pyramid" (Mike Mearls),
// pp. 70-73 — the seven spells of the stolen desert spell-strips (the
// program survey estimated ~6; the article prints seven). Egyptian /
// world-myth lore strips; the mechanics stage, the lore (Arzarran, the
// curse, the tome itself) digests in reference.md. Typed SpellDefinition
// in the house shape of recent packs: targetOrArea carries the printed
// Target/Area/Effect text without a label; material components ride in
// `note`.
// Every header was verified against rendered page images (magazine
// pp. 71-72); the image governs over the OCR stream — it confirms, among
// others, camel's tenacity's unusual printed duration (1 day/3 levels),
// desert burial's printed school (Evocation), and sand spiral's level
// (Sor/Wiz 6). The article's sidebar spell list gives screen of heat's
// blurb as a "25% miss chance" while the spell text grants concealment
// (20% miss chance); the spell text governs — see MANIFEST.
// APOC screening: none of the seven summons, calls, teleports, or opens a
// plane. Desert burial is printed as Evocation (a Sandstorm-style burial
// effect in an evocation wrapper) — staged as printed. See SCREENING.md.

import type { SpellDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #331 — Spellcraft: Spell Strips of the Black Pyramid (Mike Mearls), pp. 70-73";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

const STRIP_NOTE =
  "One of the Spell Strips of the Black Pyramid spells; the article's Curse of the Black Pyramid sidebar (a cumulative curse on arcane casters who use these spells) is adventure lore, digested in the pack's reference.md.";

type SpellSeed = Partial<SpellDefinition> & Pick<SpellDefinition, "id" | "name" | "summary">;

function C(seed: SpellSeed): SpellDefinition {
  return {
    school: "Evocation",
    descriptors: [],
    levels: {},
    components: "V, S",
    castingTime: "1 standard action",
    range: "Medium (100 ft. + 10 ft./level)",
    targetOrArea: "One creature",
    duration: "Instantaneous",
    savingThrow: "None",
    spellResistance: "No",
    source: SRC,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as SpellDefinition;
}

export const DRAGON_331_SPELLS: SpellDefinition[] = [
  C({
    id: "camels-tenacity",
    name: "Camel's Tenacity",
    school: "Transmutation",
    levels: { Cleric: 4, Druid: 3 },
    components: "V, S, M",
    range: "Touch",
    targetOrArea: "Creature or creatures touched (up to one/level)",
    duration: "1 day/3 levels",
    savingThrow: "Will negates (harmless)",
    spellResistance: "Yes",
    note: "Material component: a fistful of camel hair. " + STRIP_NOTE,
    summary:
      "You grant the targets of this spell the ability to survive without food or water. The targets gain sufficient internal reserves of nourishment to sustain them for as long as this spell is in effect. This spell does not protect targets from the effects of magical dehydration (see Sandstorm for a complete description of the effects of dehydration).",
  }),
  C({
    id: "desert-burial",
    name: "Desert Burial",
    levels: { Druid: 4, "Sorcerer/Wizard": 4 },
    components: "V, S, M",
    targetOrArea: "20-ft.-radius spread",
    savingThrow: "Reflex negates",
    note: "Material component: a paper funnel and a handful of dirt, mud, or sand. Printed as an Evocation spell; staged as printed. " + STRIP_NOTE,
    summary:
      "This sadistic spell draws those within the area of effect down into the sand, leaving only the victims' heads exposed. Creatures within the area of effect must make a Reflex saving throw. Those that fail are sucked into the ground — for most living creatures this means being buried up to their necks, though for some it might be a branch or pseudopod; creatures are never buried in a manner that prevents them from breathing. Once a creature is buried by this spell it is rendered helpless unless it can succeed at a Strength or Escape Artist check with a DC equal to 15 + 1 for every two caster levels you possess. This check requires a full-round action. Spellcasters caught by this spell cannot cast any spell with a somatic component or a spell with a material component unless the spellcaster has the component in hand when affected by this spell. A creature not caught by the spell can aid a trapped creature in its escape attempt. This spell only affects loose earth, such as dirt, mud, and sand. It is ineffectual when cast upon stone, wood, or other solid surfaces.",
  }),
  C({
    id: "dust-storm",
    name: "Dust Storm",
    school: "Conjuration",
    subschool: "Creation",
    levels: { Druid: 3, "Sorcerer/Wizard": 3 },
    targetOrArea: "Sand storm cylinder 60 ft. across and 30 ft. high",
    duration: "1 round/level",
    note: STRIP_NOTE,
    summary:
      "A howling windstorm appears within the spell's area of effect, filling it with a dark bank of whirling sand that obscures vision while injuring those caught within it. The sand obscures all sight, including darkvision, beyond 5 feet. All targets within 5 feet are treated as having concealment (attacks have a 20% miss chance). Creatures farther away have total concealment (50% miss chance, and the attacker can't use sight to locate the target). If a creature ends its action within the sand storm, it suffers 1d6 points of slashing damage from the stinging sand.",
  }),
  C({
    id: "screen-of-heat",
    name: "Screen of Heat",
    school: "Illusion",
    subschool: "Glamer",
    levels: { Cleric: 3, Druid: 3 },
    components: "V, S, DF",
    targetOrArea: "Screen up to one 10-ft. square/level, less than 1 inch thick",
    duration: "1 min/level",
    note: STRIP_NOTE,
    summary:
      "You create a wavering screen of heat that distorts the perception of creatures that look through it. The heat haze is not an illusionary double or duplicate, but rather a wavering mirage that obscures the exact positions of creatures behind the heat screen. An attack made through a screen of heat has a 20% miss chance due to concealment; the screen may have one or two sides, as you choose when casting. A see invisibility spell does not counter the effects of this spell, but a true seeing spell negates its effects entirely.",
  }),
  C({
    id: "touch-of-the-pharaoh",
    name: "Touch of the Pharaoh",
    school: "Necromancy",
    descriptors: ["Evil"],
    levels: { Cleric: 5 },
    range: "Touch",
    targetOrArea: "Creature touched",
    savingThrow: "Fortitude negates",
    spellResistance: "Yes",
    note: STRIP_NOTE,
    summary:
      "With a successful touch attack, you cause your target to contract mummy rot as if bitten or touched by a mummy (see page 191 of the Monster Manual). The subject immediately contracts the disease and suffers 1d6 points of Constitution damage and 1d6 points of Charisma damage, as is normal for contracting mummy rot. In addition, the accursed effect of mummy rot makes it difficult to heal the ability damage: any conjuration (healing) spells cast on the subject must succeed on a caster level check (DC 20) to restore any of the ability damage suffered.",
  }),
  C({
    id: "sand-spiral",
    name: "Sand Spiral",
    levels: { "Sorcerer/Wizard": 6 },
    components: "V, S, M",
    range: "60 ft.",
    targetOrArea: "Cone-shaped burst",
    savingThrow: "Reflex half and Fortitude negates (see text)",
    note: "Material component: a fistful of sand, which is thrown forward as you cast the spell, forming the basis of the sand spiral. " + STRIP_NOTE,
    summary:
      "A swirling blast of the desert's elements assaults your opponents. Creatures within the spell's area cough and gag as the sand pours into their mouths and noses, scratches their eyes, and scours their flesh, dealing 1d6 points of damage per caster level (maximum 15d6). Targets are allowed a Reflex save for half. In addition, any creature within the spell's area of effect must make a Fortitude save or suffer a -2 penalty on all attacks, checks, and saving throws for 1 minute due to the painful, searing sand. Creatures immune to critical hits ignore this penalty and take only half damage from this spell (none if they make their Reflex save).",
  }),
  C({
    id: "crown-of-despair",
    name: "Crown of Despair",
    school: "Enchantment",
    subschool: "Compulsion",
    descriptors: ["Mind-Affecting"],
    levels: { "Sorcerer/Wizard": 7 },
    components: "V, S, M",
    range: "Personal",
    targetOrArea: "You",
    duration: "1 round/level",
    savingThrow: "Will negates",
    spellResistance: "Yes",
    note: "Material component: a scrap of a mummy's burial linen. " + STRIP_NOTE,
    summary:
      "Upon casting this spell your head is crowned in ghostly black burial wrappings. All creatures that see you must succeed at a Will save or be paralyzed for 1d4 rounds. Whether a creature succeeds at its save or not, that creature cannot be affected by this casting of the spell again for its remaining duration.",
  }),
];
