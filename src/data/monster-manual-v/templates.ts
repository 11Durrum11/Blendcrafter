import type { TemplateDefinition } from "@/engine/types";

// Monster Manual V templates: the six God-Blooded templates
// (pp. 62–67). "God-blooded" is a family of acquired templates
// created by bathing in a god's (or demon prince's) blood; all
// six printed variants share the same frame — Challenge Rating
// +1, Level Adjustment +1, and the Divine Endurance special
// action — and each adds two abilities of its own, detailed in
// its record below. The book's other templates print no level
// adjustment and are not converted: Phantom (pp. 130–131) and
// Thoon Thrall (pp. 112–113) both print "Level Adjustment: —".
// Short mechanical summaries in our
// own words, cited to book + page.
// Source PDF: /A POC PC related/4.Core books/monster manuals/Monster Manual 5.pdf
//
// Also converted: the Xorvintaal Exarch template (Dragons of
// the Great Game, p. 47), which prints "Level Adjustment: +2"
// and has its own "PCs as Exarchs" sidebar. The Xorvintaal
// Dragon template in the same section (pp. 43–44) prints no
// level adjustment and is not converted.

const MM5 = "Monster Manual V";
const MM5_PATH = "/A POC PC related/4.Core books/monster manuals/Monster Manual 5.pdf";
const GB = `${MM5} — God-Blooded Creature`;

function divineEndurance(source: string): TemplateDefinition["features"] {
  return [
    {
      key: "divine-endurance",
      name: "Divine Endurance",
      description:
        "As a free action, a god-blooded creature gains damage reduction 10/— from the mingling of divine blood with its material form; it can suppress the ability with another free action. Once the damage reduction has prevented 40 points of damage, the creature loses all benefits of the god-blooded template, including this ability, except when otherwise noted.",
      category: "special-quality",
      source,
      sourceUrl: MM5_PATH,
    },
  ];
}

export const MONSTER_MANUAL_V_TEMPLATES: TemplateDefinition[] = [
  {
    id: "xorvintaal-exarch",
    name: "Xorvintaal Exarch",
    ruleset: "core",
    timing: "acquired",
    summary:
      "A creature designated as an exarch in the dragons' great game of xorvintaal by an hour-long ritual of its xorvintaal dragon master: it gains five favor tokens to spend on draconic benefits — energy immunity, borrowed flight, draconic reverie, and returns to its master's lair — and telepathy with its master.",
    source: `${MM5} — Xorvintaal Exarch (p. 47)`,
    sourceUrl: MM5_PATH,
    crModifier: 1,
    levelAdjustment: 2,
    prerequisites: [
      {
        note: "“Xorvintaal exarch” is an acquired template that can be added to any humanoid, living construct, monstrous humanoid, fey, giant, or undead creature (referred to hereafter as the base creature), designated by a xorvintaal dragon through the Create Exarchs ritual. A xorvintaal exarch can communicate telepathically at a range of 100 miles with the xorvintaal dragon that turned it into an exarch. The book's \"PCs as Exarchs\" sidebar (p. 47) covers player characters receiving this template; the dragon can renew the ritual on an exarch to restore its five favor tokens, limited by the dragon's success in the great game.",
      },
    ],
    patches: [],
    features: [
      {
        key: "dragons-favor",
        name: "Dragon's Favor (Su)",
        description:
          "A xorvintaal exarch has five favor tokens. It can spend tokens as an immediate action to gain one of the following benefits. Energy immunity: spend a token to gain immunity to the energy type of its master's breath weapon for 10 minutes (if the master has no breath weapon, the exarch cannot gain this benefit). Flight: spend a token to gain the fly speed of its xorvintaal dragon master for as long as it keeps holding the hand of at least one fellow exarch. Draconic reverie: spend a token to tap into the draconic wisdom that flows through all those connected by the Ritual of Xorvintaal, gaining a glimpse of a possible future — a +4 bonus on its next saving throw or on its next attack roll. Lair's return: spend two tokens to use word of recall; the exarch's sanctuary is always the lair of its xorvintaal dragon master. Lair's rebirth: if the exarch takes damage that would reduce it to 0 hit points, it can instead spend all its remaining tokens (at least one) to instantly return to its master's lair, unconscious and with 0 hit points.",
        category: "special-quality",
        source: `${MM5} — Xorvintaal Exarch (p. 47)`,
        sourceUrl: MM5_PATH,
      },
    ],
  },
  {
    id: "gruumsh-blooded",
    name: "Gruumsh-Blooded",
    ruleset: "core",
    timing: "acquired",
    summary:
      "An orc bathed in the bubbling green blood of Gruumsh at an unholy site: its left eye shrivels and falls out (and does not regrow even if the template is lost), and it gains the god-blooded Divine Endurance, Gruumsh's Glare, and Gruumsh's Fury.",
    source: `${GB} — Gruumsh-Blooded (p. 65)`,
    sourceUrl: MM5_PATH,
    crModifier: 1,
    levelAdjustment: 1,
    prerequisites: [
      {
        note: "“Gruumsh-blooded” is an acquired template that can be added to any orc.",
      },
    ],
    patches: [],
    features: [
      ...(divineEndurance(`${GB} (p. 65)`) ?? []),
      {
        key: "gruumshs-glare",
        name: "Gruumsh's Glare (Su)",
        description:
          "Once per day, a Gruumsh-blooded orc can cause a baleful, glowing red eye to appear in his empty eye socket, creating a 60-foot cone of red energy: all creatures in the area must succeed on Fortitude saves (DC 10 + 1/2 the orc's HD + his Con modifier) or be paralyzed for 1 round. Elves take a –4 penalty on this save.",
        category: "special-attack",
        source: `${GB} — Gruumsh-Blooded (p. 65)`,
        sourceUrl: MM5_PATH,
      },
      {
        key: "gruumshs-fury",
        name: "Gruumsh's Fury (Su)",
        description:
          "Once per day, as a swift action, a Gruumsh-blooded orc can draw upon the power of the divine blood within his body to gain a +4 bonus on damage rolls (+8 against elves) for the rest of his turn.",
        category: "special-attack",
        source: `${GB} — Gruumsh-Blooded (p. 65)`,
        sourceUrl: MM5_PATH,
      },
    ],
  },
  {
    id: "imix-blooded",
    name: "Imix-Blooded",
    ruleset: "core",
    timing: "acquired",
    summary:
      "A creature rewarded by Imix, Prince of Evil Fire Elementals, with a drop of his fiery blood: it gains the fire subtype, the god-blooded Divine Endurance, flames that wreath its weapons and lash out at attackers, and a fiery death throes.",
    source: `${GB} — Imix-Blooded (p. 65)`,
    sourceUrl: MM5_PATH,
    crModifier: 1,
    levelAdjustment: 1,
    prerequisites: [
      {
        note: "“Imix-blooded” is an acquired template that can be added to any evil creature, gained through service to Imix and a ritual immersion in burning oil.",
      },
    ],
    patches: [
      { op: "add-subtype", value: "Fire", note: "An Imix-blooded creature gains the fire subtype." },
    ],
    features: [
      ...(divineEndurance(`${GB} (p. 65)`) ?? []),
      {
        key: "imixs-wrath",
        name: "Imix's Wrath (Su) and Burn (Su)",
        description:
          "The creature is wreathed in flames that don't harm its equipment. Once per day, as a swift action, it can cause fire to flow from its body over its weapons: all its melee attacks deal an extra 4 points of fire damage until the end of its turn, and if it casts a fire spell while so affected, that spell deals extra damage equal to its caster level. Burn: any creature that hits an Imix-blooded creature with a melee attack takes 3 points of fire damage.",
        category: "special-attack",
        source: `${GB} — Imix-Blooded (p. 65)`,
        sourceUrl: MM5_PATH,
      },
      {
        key: "imix-death-throes",
        name: "Death Throes (Su)",
        description:
          "When killed, an Imix-blooded creature explodes in a 30-foot-radius burst that deals fire damage to each creature or object in the area equal to 1d6 × 1/2 the creature's Challenge Rating; a successful Reflex save (DC 10 + 1/2 the creature's HD + its Cha modifier) halves the damage.",
        category: "special-attack",
        source: `${GB} — Imix-Blooded (p. 65)`,
        sourceUrl: MM5_PATH,
      },
    ],
  },
  {
    id: "kord-blooded",
    name: "Kord-Blooded",
    ruleset: "core",
    timing: "acquired",
    summary:
      "A mighty wrestler blessed with a drop of Kord's blood: it gains the god-blooded Divine Endurance, a +4 bonus on saves against poison and disease, a once-daily surge of athletic prowess, and halved Constitution damage.",
    source: `${GB} — Kord-Blooded (p. 66)`,
    sourceUrl: MM5_PATH,
    crModifier: 1,
    levelAdjustment: 1,
    prerequisites: [
      {
        note: "“Kord-blooded” is an acquired template that can be added to any non-evil living creature that has a Strength score of 16 or higher.",
      },
    ],
    patches: [],
    features: [
      ...(divineEndurance(`${GB} (p. 65)`) ?? []),
      {
        key: "kords-athleticism",
        name: "Kord's Athleticism (Su)",
        description:
          "Once per day, as a swift action, a Kord-blooded creature can call upon the blood invested in him to gain a tremendous surge of prowess for the next minute: a +4 bonus on Strength and Dexterity checks, Strength- and Dexterity-based skill checks, and grapple checks, and a +1 bonus on damage rolls to which Strength normally applies.",
        category: "special-attack",
        source: `${GB} — Kord-Blooded (p. 66)`,
        sourceUrl: MM5_PATH,
      },
      {
        key: "kords-toughness",
        name: "Kord's Toughness (Su) and Resist Poison and Disease",
        description:
          "Whenever a Kord-blooded creature would take Constitution damage, that damage is halved. A Kord-blooded creature also gains a +4 bonus on saves against poison and disease.",
        category: "special-quality",
        source: `${GB} — Kord-Blooded (p. 66)`,
        sourceUrl: MM5_PATH,
      },
    ],
  },
  {
    id: "orcus-blooded",
    name: "Orcus-Blooded",
    ruleset: "core",
    timing: "acquired",
    summary:
      "An undead creature bathed in the black, tarry blood of Orcus, growing goatlike horns: it gains the god-blooded Divine Endurance, +4 turn resistance, a herald's bonus to necromancy save DCs, and the power to summon a minor wand of Orcus.",
    source: `${GB} — Orcus-Blooded (p. 66)`,
    sourceUrl: MM5_PATH,
    crModifier: 1,
    levelAdjustment: 1,
    prerequisites: [
      {
        note: "“Orcus-blooded” is an acquired template that can be added to any evil undead creature. The horns disappear when the template is lost.",
      },
    ],
    patches: [],
    features: [
      ...(divineEndurance(`${GB} (p. 65)`) ?? []),
      {
        key: "herald-of-orcus",
        name: "Herald of Orcus (Su)",
        description:
          "An Orcus-blooded creature gains a +1 bonus to the save DCs of necromancy spells it casts, as well as a +1 bonus to the save DCs of its spell-like and supernatural abilities. It also gains +4 turn resistance.",
        category: "special-quality",
        source: `${GB} — Orcus-Blooded (p. 66)`,
        sourceUrl: MM5_PATH,
      },
      {
        key: "wand-of-orcus",
        name: "Wand of Orcus (Su)",
        description:
          "Once per day, as a swift action, an Orcus-blooded creature can summon a minor wand of Orcus, which appears in its hand and lasts for 1 minute, functioning as a +2 morningstar. Once per day, while the wand exists, the creature can use it to deliver a melee touch attack: an opponent so touched must succeed on a Fortitude save (DC 10 + 1/2 the creature's HD + its Cha modifier) or take 4 points of Constitution damage, and if the foe fails, the creature gains 2 temporary hit points per Hit Die the enemy possesses, lasting 1 hour.",
        category: "special-attack",
        source: `${GB} — Orcus-Blooded (p. 66)`,
        sourceUrl: MM5_PATH,
      },
    ],
  },
  {
    id: "vecna-blooded",
    name: "Vecna-Blooded",
    ruleset: "core",
    timing: "acquired",
    summary:
      "An arcane spellcaster who unraveled the Seven Riddles of Vecna and survived the Oubliette of Secrets, its features permanently scoured away: it gains the god-blooded Divine Endurance, an enigma aura, hidden spells, and the Cloak of Mystery, which it keeps even if the template is lost.",
    source: `${GB} — Vecna-Blooded (pp. 66–67)`,
    sourceUrl: MM5_PATH,
    crModifier: 1,
    levelAdjustment: 1,
    prerequisites: [
      {
        note: "“Vecna-blooded” is an acquired template that can be added to any evil creature capable of casting 2nd-level or higher arcane spells.",
      },
    ],
    patches: [],
    features: [
      ...(divineEndurance(`${GB} (p. 65)`) ?? []),
      {
        key: "enigma-aura",
        name: "Enigma Aura (Su) and Hidden Spell (Su)",
        description:
          "Enigma aura: once per day, as a standard action, a Vecna-blooded creature can wrap itself in an aura that makes creatures within 120 feet intermittently forget it is there — at the start of each affected creature's turn, that creature has a 50% chance to be unable to attack the Vecna-blooded creature; the aura lasts for 1 minute. Hidden spell: once per day, as a swift action, the creature can cause flat-footed opponents to take a –4 penalty on saves against spells it casts on that same turn.",
        category: "special-attack",
        source: `${GB} — Vecna-Blooded (p. 66)`,
        sourceUrl: MM5_PATH,
      },
      {
        key: "cloak-of-mystery",
        name: "Cloak of Mystery (Su)",
        description:
          "All knowledge of the Vecna-blooded creature fades from the world: its original name, its deeds before becoming Vecna-blooded, and so forth disappear from memory; only Vecna and the creature itself retain this knowledge. The creature gains immunity to all divination spells cast against it or cast to learn information about it — such divination fails to reveal any information — and it immediately learns the name, appearance, and location of any caster who attempts such divination. Unlike other god-blooded abilities, the creature retains this special quality after it loses the other abilities from the template.",
        category: "special-quality",
        source: `${GB} — Vecna-Blooded (p. 67)`,
        sourceUrl: MM5_PATH,
      },
    ],
  },
  {
    id: "yeenoghu-blooded",
    name: "Yeenoghu-Blooded",
    ruleset: "core",
    timing: "acquired",
    summary:
      "A gnoll champion who killed a Yeenoghu-blooded predecessor and drank his blood, shrouded in noxious, putrid air and swarming flies: it gains the god-blooded Divine Endurance, a secondary bite, necrotic Rot Fangs, and a sickening Gore Stench.",
    source: `${GB} — Yeenoghu-Blooded (p. 67)`,
    sourceUrl: MM5_PATH,
    crModifier: 1,
    levelAdjustment: 1,
    prerequisites: [
      {
        note: "“Yeenoghu-blooded” is an acquired template that can be added to any gnoll.",
      },
    ],
    patches: [],
    features: [
      ...(divineEndurance(`${GB} (p. 65)`) ?? []),
      {
        key: "rot-fangs",
        name: "Rot Fangs (Ex) and Bite",
        description:
          "A Yeenoghu-blooded creature gains a secondary bite attack that deals 1d6 points of damage. Rot fangs: once per day, as a swift action, it can imbue its bite with dreadful necrotic energy — the next time it hits an opponent with a bite, that foe must succeed on a Fortitude save (DC 10 + 1/2 the creature's HD + its Con modifier) or take 1d6 points of Constitution damage.",
        category: "special-attack",
        source: `${GB} — Yeenoghu-Blooded (p. 67)`,
        sourceUrl: MM5_PATH,
      },
      {
        key: "gore-stench",
        name: "Gore Stench (Su)",
        description:
          "The creature is caked with putrid filth, dried blood, and gore; maggots crawl through its fur, and a horrific stench and a swarm of flies surround it at all times. Living creatures (except for gnolls) within 10 feet must succeed on a Fortitude save (DC 10 + 1/2 the creature's HD + its Con modifier) or be sickened for 1 minute; a creature that successfully saves need not save again for 24 hours, and a delay poison or neutralize poison spell removes the effect from a sickened creature. Creatures immune to poison (or with a saving throw bonus against poison, which applies here) are protected as noted in the template.",
        category: "special-quality",
        source: `${GB} — Yeenoghu-Blooded (p. 67)`,
        sourceUrl: MM5_PATH,
      },
    ],
  },
];
