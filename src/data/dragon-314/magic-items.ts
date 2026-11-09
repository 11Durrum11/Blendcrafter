import type { MagicItemDefinition } from "@/engine/types";

// STAGING DRAFT — Dragon Magazine #314 pack (library-staging/packs/dragon-magazine/issue-314)
// The issue's eighteen magic items, from four articles:
//   * "The Brotherhood of the Burning Heart" (pp. 18–25): gauntlets
//     of heartfelt blows, girdle of hate.
//   * "Dust to Dust" (pp. 26–32): boots of stability, clay of
//     sculpting, ring of earth's grasp, staff of earthen might.
//   * "Master of the Four Winds" (pp. 33–42): the intelligent flying
//     carpet, a typical master of the east wind's carpet.
//   * "Silicon Sorcery: Magic Item Sets" (pp. 86–91): eleven
//     artifacts in three sets — the Archmage's Apparel (wayfarer
//     boots, archmage's hat, angelfeather cloak, ring of flares,
//     staff of disruption), the Sorcerer's Regalia (flame of chaos,
//     scales of ice, necklace of balance), and the Bardic Ensemble
//     (harmonic chain, necklace of muses, Aiffe's mandolin).
// Transcribed from the magazine text on archive.org
// (DragonMagazine314_djvu.txt). Summaries are mechanical paraphrases
// in our own words; no magazine prose is reproduced.
//
// Silicon Sorcery adjudication (see MANIFEST.md): the eleven set
// items are ARTIFACTS converted from the artifact sets of Heroes of
// Might and Magic IV's expansion The Gathering Storm. The article
// prints NO price, caster level, aura, or creation lines for them, so
// each carries cost "— (artifact; no market price)" and its full
// power text, including the "Pieces Possessed" scaling, in its
// summary. Set rule, applying to all eleven: when a creature
// possesses more than one item of the same set, each item grows in
// power with each other item of the set possessed, per the scaling
// given in each summary. The Staff of Earthen Might's creation line
// reads "Craft Wondrous Item" in the magazine OCR where a staff
// would take Craft Staff — flagged in MANIFEST.md, carried as
// printed.

const DM314 = "Dragon Magazine #314";
const DM314_PATH = "https://archive.org/download/DragonMagazine260_201801/DragonMagazine314_djvu.txt";

export const DRAGON_314_MAGIC_ITEMS: MagicItemDefinition[] = [
  {
    id: "gauntlets-of-heartfelt-blows",
    name: "Gauntlets of Heartfelt Blows",
    category: "wondrous item",
    cost: "12,000 gp",
    summary: "The wearer's melee attacks (including touch attacks) deal extra fire damage equal to his Charisma bonus (minimum +1). This fire damage does not harm the wearer or anything he carries. Faint transmutation; CL 5th; Craft Wondrous Item, burning hands. Weight 1 lb.",
    source: DM314,
    sourceUrl: DM314_PATH,
    ruleset: "core",
  },
  {
    id: "girdle-of-hate",
    name: "Girdle of Hate",
    category: "wondrous item",
    cost: "16,000 gp",
    summary: "When a wearer who has a racial enemy or a favored enemy dons this girdle and speaks a command word, it appears to be constructed from a creature representative of one chosen enemy (chosen when first donned, if he has several). Trophies of the appropriate enemy mounted on its hooks smoke, then cure and are preserved within 1 round. The girdle doubles all bonuses the wearer gains against the chosen racial or favored enemy (for example, dwarven racial bonuses or a ranger's favored enemy bonuses). Moderate conjuration; CL 7th; Craft Wondrous Item, creator must have a racial or favored enemy. Weight 2 lb.",
    source: DM314,
    sourceUrl: DM314_PATH,
    ruleset: "core",
  },
  {
    id: "boots-of-stability",
    name: "Boots of Stability",
    category: "wondrous item",
    cost: "9,850 gp",
    summary: "On command, as a free action, the boots root the wearer to the ground as the mountain stance spell, for a total of 10 rounds per day (the rounds need not be consecutive). The wearer also gains a constant +5 competence bonus on Balance and Climb checks. Faint transmutation; CL 5th; Craft Wondrous Item, mountain stance. Weight 2 lb.",
    source: DM314,
    sourceUrl: DM314_PATH,
    ruleset: "core",
  },
  {
    id: "clay-of-sculpting",
    name: "Clay of Sculpting",
    category: "wondrous item",
    cost: "20,000 gp",
    summary: "A fist-sized lump of gray clay. On command, it stretches and molds itself, following the user's vision, into a perfect likeness of a desired object of up to Medium size, taking 1 full round plus 1 full round per size category above Tiny; if the process is interrupted it holds at that point, and can be continued or begun anew with the command word. When finished, it becomes a solid stone version of the object until a second command word is spoken or the object is broken or destroyed, whereupon it reverts to a fist-sized lump of clay. Moderate transmutation; CL 9th; Craft Wondrous Item, stone shape, transmute mud to rock. Weight 1 lb.",
    source: DM314,
    sourceUrl: DM314_PATH,
    ruleset: "core",
  },
  {
    id: "ring-of-earths-grasp",
    name: "Ring of Earth's Grasp",
    category: "ring",
    cost: "10,000 gp",
    summary: "The wearer gains a +4 bonus on Climb checks, grapple checks, checks to resist being disarmed, and any other Strength-based checks for which grip is a factor. Moderate transmutation; CL 10th; Craft Wondrous Item, bull's strength. Weight — (none printed).",
    source: DM314,
    sourceUrl: DM314_PATH,
    ruleset: "core",
  },
  {
    id: "staff-of-earthen-might",
    name: "Staff of Earthen Might",
    category: "staff",
    cost: "46,406 gp",
    summary: "A stone staff tipped with a gem or sculpted marble. It allows use of the following spells: soften earth and stone (1 charge), stone shape (1 charge), tremor (1 charge), transmute mud to rock (2 charges), transmute rock to mud (2 charges). Moderate transmutation; CL 10th; creation line as printed in the magazine: Craft Wondrous Item, soften earth and stone, stone shape, tremor, transmute mud to rock, transmute rock to mud (the expected creation feat for a staff is Craft Staff — see MANIFEST.md).",
    source: DM314,
    sourceUrl: DM314_PATH,
    ruleset: "core",
  },
  {
    id: "intelligent-flying-carpet",
    name: "Intelligent Flying Carpet",
    category: "wondrous item",
    cost: "27,060 gp",
    summary: "A carpet of flying (5 ft. by 5 ft.) with intelligence — the typical carpet of a master of the east wind. AL LN; Int 10, Wis 13, Cha 13; communicates by empathy; senses with 60 ft. vision and hearing; Ego score 3. Lesser power: the carpet has 10 ranks in Spot (total modifier +11). Personality: content to soar with its master atop it, it asks only to cavort among the clouds every few days; in combat it generally spends two move actions flying, leaving its master free to cast full-round spells, retrieve wands or potions, and the like. Moderate transmutation; CL 10th; Craft Wondrous Item, overland flight, permanency. Weight 8 lb.",
    source: DM314,
    sourceUrl: DM314_PATH,
    ruleset: "core",
  },
  {
    id: "wayfarer-boots",
    name: "Wayfarer Boots",
    category: "wondrous item",
    cost: "— (artifact; no market price)",
    summary: "Artifact; part of the Archmage's Apparel set (Silicon Sorcery — converted from Heroes of Might and Magic IV: The Gathering Storm). Stout leather boots with fur trim; each item of the Apparel embodies one race's outlook on wizardry, and the boots are the orcish one — toughness. Movement: the wearer's base movement rate increases by +10 feet while he wears nothing heavier than medium armor and does not carry a heavy load. Powers by pieces of the set possessed: 1 piece — +10 ft. movement, +4 competence bonus on Concentration checks; 2 pieces — +10 ft., +6 Concentration, +2 bonus on Fortitude saves against magic; 3 pieces — +10 ft., +12 Concentration, +4 Fortitude vs. magic, spellcasting damage reduction 5/—; 4 pieces — +10 ft., +16 Concentration, +6 Fortitude vs. magic, spellcasting DR 10/—; 5 pieces — +10 ft., +20 Concentration, +8 Fortitude vs. magic, spellcasting DR 15/—. The Fortitude bonus applies only against spells and magical effects (it works against contagion, but not against nonmagical poison), and the spellcasting damage reduction applies only for the action during which the wearer casts a spell, so it is effective against readied actions meant to disrupt his casting.",
    source: DM314,
    sourceUrl: DM314_PATH,
    ruleset: "core",
  },
  {
    id: "archmages-hat",
    name: "Archmage's Hat",
    category: "wondrous item",
    cost: "— (artifact; no market price)",
    summary: "Artifact; part of the Archmage's Apparel set (Silicon Sorcery — converted from Heroes of Might and Magic IV: The Gathering Storm). A tall blue felt cone speckled with golden stars — the human piece of the Apparel. Intelligence: the wearer gains an enhancement bonus to Intelligence by pieces possessed (+2 with 1–2 pieces, +4 with 3–4, +6 with 5). Skill Pool: each day the wearer has a pool of skill ranks equal to his (enhanced) Intelligence modifier multiplied by 2 (1 piece), 4 (2), 6 (3), 8 (4), or 10 (5); as a free action he may assign ranks from the pool to any skill — including cross-class skills, which are treated as cross-class only if the skill appears on none of his class lists, and cost ranks accordingly — and use the modified rank for one skill check; assigned ranks can exceed the normal maximum ranks for a skill and disappear after one use. Mental Might: by taking a full-round action to cast a spell, a wizard wearing the hat may apply 150% (2–3 pieces) or 200% (4–5 pieces) of his Intelligence modifier to the spell's save DC instead of simply adding it; casters who use another ability score for their spells (bards, sorcerers) gain no benefit from mental might.",
    source: DM314,
    sourceUrl: DM314_PATH,
    ruleset: "core",
  },
  {
    id: "angelfeather-cloak",
    name: "Angelfeather Cloak",
    category: "wondrous item",
    cost: "— (artifact; no market price)",
    summary: "Artifact; part of the Archmage's Apparel set (Silicon Sorcery — converted from Heroes of Might and Magic IV: The Gathering Storm). A large garment woven from thick white feathers, peaked at the shoulders like wings — the halfling piece of the Apparel. Deflection Bonus: the wearer gains a deflection bonus to AC by pieces possessed (+2 with 1 piece, +4 with 2, +6 with 3, +8 with 4, +10 with 5). Deep Pockets: two interior pockets, each functioning as a bag of holding of type I (1 piece), II (2), III (3), or IV (4–5). Quill: the wearer may pluck a feather and use it as a quill with a never-ending supply of ink; this functions only for the wearer, though the supply is limitless. Spell Resistance: at 2 or more pieces, the wearer gains spell resistance equal to his Intelligence modifier × 3 (2–3 pieces), × 4 (4 pieces), or × 5 (5 pieces). Material Substitution (3+ pieces): the wearer can transform a plucked feather into the material components for any spell being cast, provided the components cost no more than 1 gp; this works only for the wearer. Greater Substitution (5 pieces): components of any cost can be supplied this way, but for every 10 gp worth of components summoned (or fraction thereof), the caster suffers 1 point of nonlethal damage; the feather transforms only in the midst of casting, so the materials cannot be sold or used for any other purpose, and if the spell is not completed the materials revert to feathers but the nonlethal damage remains.",
    source: DM314,
    sourceUrl: DM314_PATH,
    ruleset: "core",
  },
  {
    id: "ring-of-flares",
    name: "Ring of Flares",
    category: "ring",
    cost: "— (artifact; no market price)",
    summary: "Artifact; part of the Archmage's Apparel set (Silicon Sorcery — converted from Heroes of Might and Magic IV: The Gathering Storm). A band of interwoven ruby and gold in overlapping starburst patterns — the dwarven piece of the Apparel. Spell Storing: the ring stores spells just as a ring of spell storing, holding 10 levels worth of spells per item of the Apparel the wearer has collected (10/20/30/40/50 levels with 1–5 pieces). Spell Crafting: the ring can also hold metamagic feats the wizard knows; each feat takes up spell levels equal to three times its level adjustment, but thereafter applies to every spell stored within the ring without adjusting the spell's level. Stored feats can be removed and replaced with a spell or another feat at any time; when the wearer loses Apparel items (and thus stored-spell capacity), he chooses which spells or feats are lost until the ring stores an appropriate amount.",
    source: DM314,
    sourceUrl: DM314_PATH,
    ruleset: "core",
  },
  {
    id: "staff-of-disruption",
    name: "Staff of Disruption",
    category: "staff",
    cost: "— (artifact; no market price)",
    summary: "Artifact; part of the Archmage's Apparel set (Silicon Sorcery — converted from Heroes of Might and Magic IV: The Gathering Storm). Six slightly twisted feet of oak topped with a golden band and a small clear crystal — the gnome-made piece of the Apparel. Lingering Distractions: any time the wielder casts a spell with a target entry, he can force the target to make an additional Will save at the same DC as the spell cast (for spells that normally allow no save, calculate the DC from the spell's level); failure fills the target's mind with a continual stream of phantom images and sounds, imposing a penalty on all Concentration checks and Will saves (−2 with 1–2 pieces, −4 with 3–4, −6 with 5), and an affected spellcaster must make a Concentration check (DC 15 + spell level) each time he casts a spell or lose it. The penalty lasts a number of rounds equal to the wielder's Intelligence bonus (minimum 1 round). This is a mind-affecting phantasm effect; it has no effect on creatures that resist the spell with spell resistance, but creatures that succeed on the original spell's saving throw must still save against this effect. Scramble Magic (2+ pieces): the wielder places a spell he can cast into the staff (it must be cast by the wielder himself, not by a scroll or surrogate caster); the staff holds one spell of any level per item of the Apparel collected. On a successful touch attack with the staff, the stored spell discharges and attempts to scramble the target's natural resistances, lowering its spell resistance or one of its elemental resistances by the stored spell's level × 2 (2–3 pieces) or × 5 (4–5 pieces) for one day; the target can resist with a Will save at the DC of a spell of the stored spell's level, and spell resistance does not apply to this attack. If the target has multiple resistances the wielder chooses one; a single resistance is affected per strike and the reduction cannot be split. Immunity is too strong to be overcome.",
    source: DM314,
    sourceUrl: DM314_PATH,
    ruleset: "core",
  },
  {
    id: "flame-of-chaos",
    name: "Flame of Chaos",
    category: "wondrous item",
    cost: "— (artifact; no market price)",
    summary: "Artifact; part of the Sorcerer's Regalia set (Silicon Sorcery — converted from Heroes of Might and Magic IV: The Gathering Storm). The Regalia are not forged paraphernalia but the raw essence of magic given form. The flame is an ever-burning puff of radiance no larger than a man's hand, blasting through all the colors of the spectrum; it typically rests in a brazier, censer, or lantern, though reports disagree. Random Metamagic: to use it, a sorcerer must wield it in hand and take a full-round action to cast a spell; the flame adds random metamagic feats to the spell by pieces possessed — 1 piece: roll 1d4 (1 Enlarge Spell, 2 Extend Spell, 3 Silent Spell, 4 Still Spell); 2 pieces: roll 1d4 (1 Empower Spell, 2 Heighten Spell [2 levels], 3 Extend Spell and Enlarge Spell, 4 Silent Spell and Still Spell); 3 pieces: roll 1d4 (1 Maximize Spell, 2 Heighten Spell [3 levels], 3 Empower Spell and Enlarge Spell, 4 Silent Spell, Still Spell, and Extend Spell). A granted feat that cannot apply to the spell has no effect, and if the flame's use has no effect at all it is still considered used for the day. Without the Necklace of Balance, a caster can use only the Flame of Chaos or the Scales of Ice on any given day — once one is used, the other will not function for that sorcerer until the following day — though each still counts the other's presence for power level. Protection from Law: a sorcerer bearing all three Regalia artifacts gains a permanent protection from law effect as cast by a 20th-level caster.",
    source: DM314,
    sourceUrl: DM314_PATH,
    ruleset: "core",
  },
  {
    id: "scales-of-ice",
    name: "Scales of Ice",
    category: "wondrous item",
    cost: "— (artifact; no market price)",
    summary: "Artifact; part of the Sorcerer's Regalia set (Silicon Sorcery — converted from Heroes of Might and Magic IV: The Gathering Storm). A fully functioning balance sculpted from ice. Until it is first used (attuned to a new wielder), it radiates bitter, biting cold — uncomfortable to be near and nearly unbearable to hold; once attuned, it becomes soothingly cool. Extra Spell Slots: to use it, a sorcerer wields it in hand and takes a full-round action to cast a spell; the scales measure out the absolute minimum energy needed, granting extra spell slots equal to the sorcerer's Charisma modifier × 2 (1 piece), × 3 (2 pieces), or × 4 (3 pieces). The extra slots are available only while casting with the scales in hand, can be combined to cast higher-level spells the sorcerer knows and can cast (0-level spells count as half a slot), and are renewed each day. Once a sorcerer has used the scales in a day, they will not function for any other sorcerer until the next day. Without the Necklace of Balance, a caster can use only the Scales of Ice or the Flame of Chaos on any given day, though each still counts the other's presence for power level. Protection from Chaos: a sorcerer bearing all three Regalia artifacts gains a permanent protection from chaos effect as cast by a 20th-level caster.",
    source: DM314,
    sourceUrl: DM314_PATH,
    ruleset: "core",
  },
  {
    id: "necklace-of-balance",
    name: "Necklace of Balance",
    category: "wondrous item",
    cost: "— (artifact; no market price)",
    summary: "Artifact; part of the Sorcerer's Regalia set (Silicon Sorcery — converted from Heroes of Might and Magic IV: The Gathering Storm). A disk on a simple cord whose appearance changes from viewer to viewer — a yin-yang, a carved serpentine dragon, a flat gray disk. Balance: the wearer gains a competence bonus on all Balance checks of +4 (1 piece), +8 (2 pieces), or +12 (3 pieces). Will Bonus: the wearer gains a bonus on all Will saves of +2 (1 piece), +4 (2 pieces), or +6 (3 pieces) — the item's table gives this +2/+4/+6 progression and governs over the prose (see MANIFEST.md). Balance Ice and Flame: a sorcerer possessing all three Regalia items and wearing the necklace can use both the Scales of Ice and the Flame of Chaos, each once per day.",
    source: DM314,
    sourceUrl: DM314_PATH,
    ruleset: "core",
  },
  {
    id: "harmonic-chain",
    name: "Harmonic Chain",
    category: "armor",
    cost: "— (artifact; no market price)",
    summary: "Artifact; part of the Bardic Ensemble set (Silicon Sorcery — converted from Heroes of Might and Magic IV: The Gathering Storm). A suit of chainmail laced through with groupings of chimes. Magic Armor: it is a +4 chain shirt that imposes a −6 circumstance penalty on all Move Silently checks. Denouement: the ringing of the armor can continue a bardic music melody, extending the effects of the bard's bardic music for an additional 3 rounds after the bard stops singing. Terrifying Clatter: any time the bard is hit by a melee or ranged weapon while flat-footed, fighting defensively, using Combat Expertise, or using the total defense action, the chimes cause such a din that all foes within 30 feet must succeed on a Will save (DC 10 + the wearer's bard class level + his Charisma modifier) or suffer a −3 morale penalty on all attack and damage rolls until the end of the combat; this is a sonic, mind-affecting attack. Spell Interruption: when the bard uses countersong, friendly targets may still replace their saving throws with the bard's Perform check, but hostile spellcasters within 30 feet attempting to cast a spell must make a Concentration check exceeding the bard's Perform check or lose the spell.",
    source: DM314,
    sourceUrl: DM314_PATH,
    ruleset: "core",
  },
  {
    id: "necklace-of-muses",
    name: "Necklace of Muses",
    category: "wondrous item",
    cost: "— (artifact; no market price)",
    summary: "Artifact; part of the Bardic Ensemble set (Silicon Sorcery — converted from Heroes of Might and Magic IV: The Gathering Storm). A large, elaborate necklace whose links are carved with stories in pictograph and whose hollow charms hold small scrolls of stories and songs — the masterpieces of its past wearers. Accumulated Lore: the wearer gains a +10 competence bonus on all bardic knowledge checks. Creative Combat: when the bard uses the inspire greatness bardic music ability, he may grant the target phantom feats — any feats he wishes that the target qualifies for. By pieces possessed: 1 piece — accumulated lore; 2 pieces — accumulated lore and creative combat (2 feats); 3 pieces — accumulated lore and creative combat (5 feats). (The article's layout interleaves this item's Pieces Possessed table with the Harmonic Chain's text; the table is carried here, where its powers belong — see MANIFEST.md.)",
    source: DM314,
    sourceUrl: DM314_PATH,
    ruleset: "core",
  },
  {
    id: "aiffes-mandolin",
    name: "Aiffe's Mandolin",
    category: "wondrous item",
    cost: "— (artifact; no market price)",
    summary: "Artifact; part of the Bardic Ensemble set (Silicon Sorcery — converted from Heroes of Might and Magic IV: The Gathering Storm). The instrument of Aiffe, a self-styled elven bladesinger bard. Dancing: when the bard uses any bardic music ability whose duration is limited by the length of the music itself, the mandolin may continue playing while the bard takes other actions, hovering beside him (it cannot be left behind). The bard must first play it for 3 rounds (2 rounds with two Ensemble items, 1 round with all three), then set it loose as a free action, and it continues to play for 3 rounds + the bard's Charisma modifier (4 + Cha with two items, 5 + Cha with three). This combines with the Harmonic Chain's denouement, so that after the dancing mandolin stops, the music's effects continue for another 3 rounds. Heartstrings: by expending one use of bardic music, the bard grants all allies within a 30-foot radius who can hear him a pool of points equal to his Charisma bonus multiplied by the number of Ensemble items he wields (×1, ×2, or ×3); the points may be allocated as a single morale bonus or several morale bonuses to allies' attack rolls, damage rolls, AC, or any kind of saving throws, split and distributed in any combination, and may be shifted from round to round. The effect lasts as long as the bard performs.",
    source: DM314,
    sourceUrl: DM314_PATH,
    ruleset: "core",
  },
];
