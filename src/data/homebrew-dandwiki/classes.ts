/**
 * Homebrew pack — D&D Wiki ("dandwiki") classes from Shaun's
 * "CURRENT LIST OF IN USE SRD WIKI LINKS" document (uploaded
 * 2026-11-02; Shaun's order: "Find those, integrate those.").
 * Every record carries ruleset "homebrew", a source naming the
 * D&D Wiki page, and sourceUrl = the exact page URL as written
 * in Shaun's document.
 *
 * Fetch outcomes and fallbacks (2026-11-02):
 * - Elemental Bender: the document's class-page URL is deleted
 *   on the live wiki; the live successor page, "Bender, 2nd
 *   Variant (3.5e Class)" (whose introduction reads "Elemental
 *   Bender is a Utility fighter…"), was fetched and governs.
 *   The document's concept-page link is also gone. The record
 *   keeps the document's name and URL.
 * - Mechanic (3.5e Class): NOT INTEGRATED — the page has been
 *   deleted from the live wiki and no successor exists. The
 *   live "Mechanist (3.5e Class)" is a different class
 *   (golem/mechanical-arms themed) and was not substituted.
 * - Mad Alchemist: fetched live; the page carries the wiki's
 *   "April Fools" banner ("This content is not designed for use
 *   in regular games…"). Integrated as ordered, banner noted.
 * - Battle Chemist, Gadgeteer: fetched live.
 * - Night Doctor: the document's URL is a 2017 web.archive.org
 *   snapshot (archive unreachable); the class's surviving live
 *   home, dnd-wiki.org "User:Lucii/Night Doctor (3.5e Class)"
 *   — same class name and distinctive feature set — was
 *   fetched and governs. sourceUrl stays the document's URL.
 *
 * House conventions follow the earlier packs: progression rows
 * for levels 1–10 only, short own-words mechanical summaries,
 * class features modeled per the IKCG pack's levelsNeeded
 * pattern, and casting systems that have no app profile carried
 * in feature text (the Gun Mage precedent). No selectable
 * bonus-feat list is wired here; findings were reported to the
 * parent for src/lib/class-bonus-feats.ts.
 */
import type { ClassDefinition, ClassLevelProgressionRow, FeatureDefinition } from "@/engine/types";

type F = FeatureDefinition & { levelsNeeded?: number };

function makeFeat(source: string, sourceUrl: string) {
  return function f(
    name: string,
    description: string,
    levelsNeeded?: number,
    category: FeatureDefinition["category"] = "special-quality",
  ): F {
    return {
      key: name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, ""),
      name,
      description,
      category,
      source,
      sourceUrl,
      ...(levelsNeeded ? { levelsNeeded } : {}),
    };
  };
}

function rows(bab: number[], fort: number[], ref: number[], will: number[]): ClassLevelProgressionRow[] {
  return bab.map((b, i) => ({ level: i + 1, bab: b, fort: fort[i], ref: ref[i], will: will[i] }));
}

const GOOD = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7];
const POOR = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3];
const THREE_QUARTER = [0, 1, 2, 3, 3, 4, 5, 6, 6, 7];

const BENDER = "D&D Wiki — Elemental Bender (3.5e Class)";
const BENDER_URL = "http://www.dandwiki.com/wiki/Elemental_Bender_(3.5e_Class)";
const MAD_ALCHEMIST = "D&D Wiki — Mad Alchemist (3.5e Class)";
const MAD_ALCHEMIST_URL = "http://www.dandwiki.com/wiki/Mad_Alchemist_(3.5e_Class)";
const BATTLE_CHEMIST = "D&D Wiki — Battle Chemist (3.5e Class)";
const BATTLE_CHEMIST_URL = "http://www.dandwiki.com/wiki/Battle_Chemist_(3.5e_Class)";
const GADGETEER = "D&D Wiki — Gadgeteer (3.5e Class)";
const GADGETEER_URL = "http://www.dandwiki.com/wiki/Gadgeteer_(3.5e_Class)";
const NIGHT_DOCTOR = "D&D Wiki — Night Doctor (3.5e Class)";
const NIGHT_DOCTOR_URL =
  "https://web.archive.org/web/20170725230844/https://www.dandwiki.com/wiki/Night_Doctor_(3.5e_Class)";

const bf = makeFeat(BENDER, BENDER_URL);
const mf = makeFeat(MAD_ALCHEMIST, MAD_ALCHEMIST_URL);
const cf = makeFeat(BATTLE_CHEMIST, BATTLE_CHEMIST_URL);
const gf = makeFeat(GADGETEER, GADGETEER_URL);
const nf = makeFeat(NIGHT_DOCTOR, NIGHT_DOCTOR_URL);

const CLASSES_PART_1: ClassDefinition[] = [
  {
    id: "elemental-bender",
    name: "Elemental Bender",
    ruleset: "homebrew",
    source: BENDER,
    sourceUrl: BENDER_URL,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    progression: rows(THREE_QUARTER, POOR, GOOD, GOOD),
    classSkills: [
      "Balance", "Climb", "Concentration", "Craft", "Diplomacy", "Escape Artist",
      "Hide", "Jump", "Knowledge (the planes)", "Listen", "Move Silently",
      "Perform", "Profession", "Sense Motive", "Spot", "Swim", "Tumble",
    ],
    features: [
      bf("Elemental Bender Basics", "Alignment: any. A utility fighter, like a cross between a rogue and a sorcerer, built around one chosen element (air, earth, fire, or water). Charisma drives his bending; Wisdom adds to his AC. Weapon and armor proficiencies: all simple weapons plus one chosen weapon (which may be exotic); no armor and no shields — wearing armor or carrying a heavy load causes him to lose all class abilities. Starting gold: 3d4 × 30 gp. (Record built from the live successor page \"Bender, 2nd Variant\"; the original class page named in Shaun's list has been deleted from the wiki.)", undefined),
      bf("Bend Element (Su)", "The bender manipulates his chosen element within 30 feet. Bending is a supernatural ability usable a number of times per day equal to his Charisma modifier plus his bends known (bends known: 2 at 1st level, +2 per level — 20 at 10th); it is a standard action, needs a free hand, and does not provoke attacks of opportunity. Four forms: a touch attack (bend damage and the target is pushed 5 feet), a 15-foot cone, a 45-foot line, or a 20-foot burst; the area forms allow a Reflex save (DC 10 + 1/2 class level + Charisma modifier) for half damage. Bend damage is 1d6 at 1st level, rising every two levels (2d6 at 3rd, 3d6 at 5th, 4d6 at 7th, 5d6 at 9th). Bend damage overcomes energy resistance up to his class level + Charisma modifier, counts as magical for overcoming damage reduction, but a creature immune to the element's type still takes only half damage from it.", 1, "special-attack"),
      bf("Unarmed Strike", "The bender gains Improved Unarmed Strike as a bonus feat; his unarmed damage is 1d6 and increases as a monk's unarmed damage as he advances.", 1, "feat"),
      bf("Unarmored AC Bonus", "While unarmored, the bender adds his Wisdom modifier to his AC, plus a +1 bonus per three class levels (+1 at 3rd, +2 at 6th, +3 at 9th).", 1),
      bf("Elemental Resistance", "The bender gains resistance/damage reduction 6 against his element's type — air: bludgeoning, fire: fire, water: cold, earth: bludgeoning — increasing by +1 per two class levels. From 11th level it also applies to a second type, and his original type deals him no damage at all.", 1),
      bf("Bonus Feat", "The bender gains a bonus feat at 1st, 2nd, 4th, 6th, 8th, and 10th level (and every even level beyond). The page prints no list or restriction for these bonus feats.", 1, "feat"),
      bf("Evasion", "At 2nd level, as the rogue ability: on a successful Reflex save against an effect that normally allows half damage, the bender takes no damage.", 2),
      bf("Increase Speed", "At 3rd level, by spending a bend the bender gains an element-specific movement mode for a number of rounds equal to his Charisma modifier: air — flight; earth — tunneling; water — walking on water; fire — increased land speed. The mode grants 20 feet of movement (fire: 10 feet).", 3),
      bf("Talented Bend", "At 4th level, the bender can bend without using his hands. Each element also gains an extra talented use, each costing an extra bend: air — wind wall; fire — feather fall via a jet of fire; earth — tremorsense 30 feet; water — cure moderate wounds. A talented effect can be sustained with a Concentration check (DC 10, +3 per extra round).", 4),
      bf("Improved Disarm", "At 4th level the bender gains Improved Disarm as a bonus feat. (The class table places it at 4th level; the feature text says 3rd — the table is followed here, as printed in the progression.)", 4, "feat"),
      bf("Element Burst (Su)", "At 6th level, three times per day the bender can release a 20-foot burst of his element: 4d6 damage plus his bending ability modifier, Reflex DC 18 for half. Element burst does not count against his daily bends. It improves further at 12th and 16th level.", 6, "special-attack"),
      bf("Channel Bend", "At 8th level, the bender can channel a bend into the first or last attack of a full attack.", 8),
      bf("Improved Trip", "At 9th level the bender gains Improved Trip as a bonus feat.", 9, "feat"),
      bf("Improved Evasion", "At 10th level, as the rogue ability: on a failed Reflex save against an effect that normally allows half damage, the bender still takes only half damage.", 10),
      bf("Create Element", "At 10th level, the bender can create his element at will, concentrated around his fists.", 10),
      bf("Beyond 10th Level", "The page's higher-level features, beyond this app's 1–10 progression rows: Greater Bend Element (11th), Improved Channel Bend (14th), Death Bend (18th), and Primal Elemental Shape (20th, once per day).", 11),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "mad-alchemist",
    name: "Mad Alchemist",
    ruleset: "homebrew",
    source: MAD_ALCHEMIST,
    sourceUrl: MAD_ALCHEMIST_URL,
    hitDie: "d6",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["will"],
    progression: rows(THREE_QUARTER, POOR, POOR, GOOD),
    classSkills: [
      "Concentration", "Craft", "Decipher Script",
      "Knowledge (all skills, taken individually)", "Profession", "Spellcraft",
    ],
    features: [
      mf("Mad Alchemist Basics", "Alignment: must be chaotic. Intelligence is the class's key ability. Weapon and armor proficiencies: all simple weapons and light armor. Starting gold: as sorcerer. Starting age: as wizard. The wiki page carries an \"April Fools\" banner stating the content is not designed for use in regular games; it is integrated here as printed, at Shaun's direction.", undefined),
      mf("Blood Alchemy", "The mad alchemist learns spells from the sorcerer/wizard list, but only from the Abjuration, Conjuration, Divination, Enchantment, Transmutation, and Universal schools. Only Universal spells can be cast directly; every other spell must be imbued into an item (see Imbuement). To learn or imbue a spell he needs an Intelligence score of at least 10 + the spell level; the save DC for his spells is 10 + spell level + his Intelligence modifier. He may know any number of spells; instead of a spellbook he memorizes 1 spell per day perfectly and can scribe scrolls from memory. Every 3 levels he also gains a 0-level spell he can use at will. Spells learned by class level (levels 1–10; columns are spell levels 0/1st/2nd/3rd/4th/5th): L1 3/1/—/—/—/—; L2 4/2/—/—/—/—; L3 4/2/1/—/—/—; L4 4/3/2/—/—/—; L5 4/3/2/1/—/—; L6 4/3/3/2/—/—; L7 4/4/3/2/1/—; L8 4/4/3/3/2/—; L9 4/4/4/3/2/1; L10 4/4/4/3/3/2 (the full table continues to 9th-level spells at higher class levels). This learning progression is recorded here in text; the app carries no casting profile for the class.", 1),
      mf("Imbuement (Sp)", "At 1st, 5th, and every 5 levels afterward (imbuement +1 at 1st, +2 at 5th, +3 at 10th, +4 at 15th, +5 at 20th), the mad alchemist can warp a mundane item by imbuing it with a spell. A spell's level sets the imbuement bonus it consumes: 0-level +1/2; 1st–2nd +1; 3rd–4th +2; 5th–6th +3; 7th–8th +4; 9th +5. Imbuing takes 1 minute per spell level and an Intelligence check (Intelligence + 1/2 level) against DC 10 + spell level + the trigger's DC addition; his total imbuement bonus across items cannot exceed his caster level + Intelligence modifier. Triggers: Offensive +0, Trap +1, Command Word +1, React +2, Defensive +3, Proximity +5, Chain +1 per object in the chain. After 4 hours he may swap the spells in imbued items without a check. He can cast permanency on an imbued object so it no longer counts against his maximum, as printed on the page.", 1),
      mf("Scribe Scroll", "At 1st level the mad alchemist gains Scribe Scroll as a bonus feat (a fixed grant, not a selectable list).", 1, "feat"),
      mf("Descent into Madness (Ex)", "The table lists this feature at 1st, 5th, 9th, and 14th level, but the feature text stages its effects at 1st, 4th, 8th, and 14th; the text stages are recorded here. 1st: he no longer sleeps and is immune to sleep effects. 4th: −4 on Charisma-based skill checks, but immune to mind-affecting effects. 8th: low-light vision and darkvision 60 feet. 14th: he no longer needs to eat or sleep, and is immune to poison.", 1),
      mf("Doomsday Device", "Stages of the mad alchemist's masterwork of destruction. Blueprints (4th level): +4 on Wisdom- and Charisma-based skill checks related to making the device (this bonus negates the Descent into Madness penalty on such checks). Research (8th level): by adding +3 to an imbuement's DC he may change an imbued spell's area type, or add +3 DC per extra target. Final Design (12th level): damaging spells add his Intelligence modifier as force damage. Prototype (16th level): he can replace a magic weapon's enhancements with spells. Doomsday (20th level): one object with a maximum imbuement bonus equal to his Intelligence modifier, automatically permanent; its spells are usable at will (0–3rd level), 3/day (4th–6th), or 1/day (7th–9th), and he may change each spell's trigger daily.", 4),
      mf("Ex-Mad Alchemists", "A mad alchemist who reforms (sleeps, respects the law, and so on) loses the benefits of Descent into Madness, all imbuement abilities, and his memorized spells, until some traumatic event sets his madness going again.", undefined),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "battle-chemist",
    name: "Battle Chemist",
    ruleset: "homebrew",
    source: BATTLE_CHEMIST,
    sourceUrl: BATTLE_CHEMIST_URL,
    hitDie: "d8",
    skillPointsPerLevel: 4,
    babProgression: "three-quarter",
    goodSaves: ["ref"],
    progression: rows(THREE_QUARTER, POOR, GOOD, POOR),
    classSkills: [
      "Concentration", "Craft", "Decipher Script",
      "Knowledge (all skills but Arcana and Religion, taken individually)", "Profession",
    ],
    features: [
      cf("Battle Chemist Basics", "Alignment: any. Intelligence is the class's key ability. Weapon and armor proficiencies: all simple weapons, hand crossbows, light armor, and shields. Starting gold: 6d4 × 10 gp.", undefined),
      cf("Chemical Mixture (Ex)", "After 8 hours of sleep, each day the battle chemist produces his mixtures: 8 mixtures of his highest mixture level, 16 of the next lower level, 32 of the next, and so on (he may trade down to lower-level mixtures). He knows 3 mixtures at 1st level and +1 at each odd level after 1st; his maximum mixture level rises by 1 at 3rd, 6th, 9th, 12th, 15th, and 18th level. Prepared mixtures stay active for 24 hours. Mixture save DC is 10 + 1/2 class level + his Intelligence modifier. Mixture menu by minimum level — Level 1: Tin-Base Bomb, Grease-Chlorine Bomb, Caffeine, Alcohol, Chemical Bandage, Skingrowth Salve, Mind Lens, Insulation Jelly, Smoke Bomb, Web, Instant Adhesive, Blinding Glitter, Stunning Burst, Mirage Salve, Blinding Venom, Fearful Mist, Enhanced Acid. Level 2: Flash Bomb, Adrenalin, Liquid Grindstone, Sleeping Gas, Nauseating Vapors, Numbing Gas, Immobilizing Sedative. Level 3: Dust Bomb. Level 4: Ironthorn Salve, Opiates, Regenerative Salve, Instant Evolution. Level 5: Gunpowder, Dioxygen Flouride. Level 6: Amphetamines. Level 7: Instant Healing, Adamantine Salve, Hydrogen Flouride. (Individual mixture effects are printed on the class page.)", 1),
      cf("Chemist's Lab (Ex)", "The chemist's lab grants a bonus of +1 at 1st level, increasing by +1 every 3 levels (+2 at 4th, +3 at 7th, +4 at 10th). Each point of the bonus, allocated once per day, halves either the money cost or the time needed to make a mixture.", 1),
      cf("Techniques", "The battle chemist learns 2 techniques at 1st level and +1 every 4th level starting at 4th. His maximum technique level equals his techniques known − 1 (so it rises to 2 at 4th level and 3 at 8th, as the class table's Technique column shows). Techniques are prepared like mixtures, on a separate counter, and stay active 24 hours. Named techniques: Bottled Chemicals, Pressure Bomb, Needle, Oil Admixture, Sprayer, Drugged Weapon, Drug Admixture, Arrow, Poison Admixture, Explosive Admixture, Needle Gun, Grenade Launcher, Ultimate Admixture, Needler, Rocket Revolver. (Individual technique effects are printed on the class page.)", 1),
    ].map((x) => x as FeatureDefinition),
  },
];
const CLASSES_PART_2: ClassDefinition[] = [
  {
    id: "gadgeteer",
    name: "Gadgeteer",
    ruleset: "homebrew",
    source: GADGETEER,
    sourceUrl: GADGETEER_URL,
    hitDie: "d8",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["fort", "ref"],
    progression: rows(THREE_QUARTER, GOOD, GOOD, POOR),
    classSkills: [
      "Appraise", "Bluff", "Concentration", "Craft", "Decipher Script",
      "Disable Device", "Jump", "Knowledge (Any)", "Search", "Spot", "Use Magic Device",
    ],
    features: [
      gf("Gadgeteer Basics", "Alignment: any. Intelligence is the class's key ability. Weapon and armor proficiencies: all simple weapons plus any weapon built as a Gadget; light and medium armor (but not shields), plus any armor built as a Gadget. Starting gold: 6d6 × 10 gp (210 gp average). Starting age: as fighter. (This is the Tome/Book of Gears gadgeteer as hosted on D&D Wiki.)", undefined),
      gf("Gadgetry (Ex)", "The gadgeteer builds Gadgets from blueprints he has learned, per the class table (blueprints per day / charged gadgets: 1/2 at 1st level, rising to 7/7 at 10th). Daily gadgets are prepared at the start of the day (1 hour of work total) and each is usable once that day; Charged gadgets work at will while they hold a charge. He has six slots for inventions (see Invention). Gadget save DC is 10 + 1/2 level + his Intelligence modifier. First-level blueprints — Daily: Flamethrower, Shotgun, Mining Drill, Hover Pack, Dynamite, Extend-O-Fist. Charged: Helper, Shock Staff, Glider, Launch Boots, Harpoon, Steam Spray, Wind-up Flare Lantern, Proximity Detector. (Individual gadget write-ups are printed on the class page.)", 1),
      gf("Coax Device (Su)", "The gadgeteer can always take 10 on Use Magic Device and Disable Device checks, even when threatened or rushed.", 1),
      gf("Invention (Ex)", "At 2nd, 5th, and 9th level (and again at 13th and 17th), the gadgeteer upgrades a gadget built from a known blueprint with one improvement: +1 per 3 levels enhancement bonus to Intelligence, +1 per 4 levels deflection bonus to AC, +1 per 3 levels resistance bonus to saves, +1 per 4 levels enhancement bonus to damage rolls, or damage reduction 1 per 2 levels overcome by adamantine. An improved Daily invention is usable twice per day; an improved Charged invention works truly at will.", 2),
      gf("Evasion (Ex)", "At 3rd level, as the rogue ability: on a successful Reflex save against an effect that normally allows half damage, the gadgeteer takes no damage.", 3),
      gf("Good Gadgets", "At 4th level the gadgeteer learns the Good Gadgets blueprint tier — Daily: Pressure Jetpack, Oil Spray, Gatling Gun, Cannon, Defibrillator, Spy Balloon. Charged: Static Blade, Cog Powered Fist, Pump-Action, Frost Blaster, Lightning Rod, Jetskates, Fuel-Efficient Flamethrower, Flashbang Generator.", 4),
      gf("Duct Tape (Sp)", "At 5th level the gadgeteer can cast mending, make whole, and repair light damage at will, with caster level equal to his character level.", 5),
      gf("Confuse Magic Device (Su)", "At 6th level the gadgeteer can push magic devices past their design with an Abuse Magic Device check: activate a charged item without spending a charge (+10 DC), change a spell's damage or protection type (+5 DC), or add the Widen or Extend effect (+5 DC). Magic-detecting traps do not trigger on him.", 6),
      gf("Specialty Field (Ex)", "At 7th level (and again at 14th) the gadgeteer chooses a specialty field — Energy, Locomotion, Durability, Efficiency, Destruction, Overcharge, or Homing — and gains its printed benefits (see the class page).", 7),
      gf("Greater Gadgets", "At 8th level the gadgeteer learns the Greater Gadgets blueprint tier — Daily: Cog Staff, Teleport-Pump, Fume Engine, Boiler-Powered Armour, Turbine Laser, Wand-Gatler, Makai Cannon. Charged: Elemental Microwave, Aero-Amplifier, Simple-Ammo Gat, Turbo Boost, Clockwork Chainsaw, Buggy, Perpetual Pressure Jetpack.", 8),
      gf("Crafted Companion (Ex)", "At 10th level the gadgeteer can build a Construct cohort, mount, or familiar with a CR at least 3 below his own level; construction takes 8 hours, and a destroyed companion can be rebuilt or repaired.", 10),
      gf("Beyond 10th Level", "The page's higher-level features, beyond this app's 1–10 progression rows: Rapid Rebuild (11th), Giga Gadgets (12th), Percussive Maintenance (13th), Command Magic Device (15th), Galactic Gadgets (16th), Throw a Spanner At It (17th), Stronger, Faster, More Expensive (18th), Cybernetic Soldier (19th), and The Grand Contraption (20th).", 11),
    ].map((x) => x as FeatureDefinition),
  },
  {
    id: "night-doctor",
    name: "Night Doctor",
    ruleset: "homebrew",
    source: NIGHT_DOCTOR,
    sourceUrl: NIGHT_DOCTOR_URL,
    hitDie: "d6",
    skillPointsPerLevel: 6,
    babProgression: "three-quarter",
    goodSaves: ["ref", "will"],
    progression: rows(THREE_QUARTER, POOR, GOOD, GOOD),
    classSkills: [
      "Bluff", "Concentration", "Craft", "Heal", "Hide", "Intimidate",
      "Listen", "Move Silently", "Sleight of Hand",
    ],
    features: [
      nf("Night Doctor Basics", "Alignment: must be non-lawful — a night doctor who becomes lawful becomes an ex-Night Doctor and loses all class abilities. Weapon and armor proficiencies: simple weapons and light armor, but not shields. Starting gold: 4d4 × 10 gp (100 gp). Starting age: as fighter. (The document's link is a 2017 archive snapshot of the D&D Wiki page; the record was built from the class's surviving live page on dnd-wiki.org, \"User:Lucii/Night Doctor (3.5e Class)\".)", undefined),
      nf("Backstreet Surgery", "The night doctor gains a +4 bonus on Heal checks, can use improvised surgical tools without penalty, and learns 5 new languages.", 1),
      nf("Barber-Surgeon", "The night doctor gains a +2 bonus on Heal checks and uses his Intelligence modifier instead of his Wisdom modifier on Heal checks.", 1),
      nf("Stitch Up", "The night doctor can heal an ally for 1d8 + his Intelligence modifier hit points (2d8 at 4th level, 3d6 at 10th). Each target can benefit a number of times per day equal to his Intelligence modifier.", 1),
      nf("Sneak Attack", "As the rogue's sneak attack: 1d6 extra damage at 1st level, 2d6 at 2nd, 3d6 at 4th, 4d6 at 7th, and 5d6 at 10th, as the class table prints.", 1, "special-attack"),
      nf("Self-Testing", "The night doctor experiments on himself, choosing one: Ocular Overdrive — darkvision 60 feet; Natural Steroids — +2 Strength, +10 feet of speed, −2 Intelligence; or Pheromone Control — an aura of fear out to 30 feet, toggled as a swift action.", 1),
      nf("Self-Sufficient", "At 2nd level the night doctor gains the Self-Sufficient feat for free (a fixed grant, not a selectable list).", 2, "feat"),
      nf("Bedside Manner", "At 2nd level the night doctor gains a +2 bonus on Bluff and Intimidate checks.", 2),
      nf("Cure Ailment", "At 2nd level, a Heal check (DC 22) lets the night doctor cure one disease.", 2),
      nf("Synthesize Drugs", "At 3rd level, with a laboratory the night doctor can synthesize drugs: Craft check DC 15 (Intelligence-based); a dose has a market value of 100 gp and a batch of up to 5 doses per day costs about 35 gp each to make. His basic formulary is Lurcher, Chopper, and Smiler (effects as printed on the class page).", 3),
      nf("Toxin Syringe", "At 3rd level the night doctor gains a +2 bonus on Heal checks and is always equipped with his toxin syringe, with which he is automatically proficient: a light weapon dealing 1d6 piercing damage (critical 19–20/×2). Depressing the syringe adds +1d8 damage and a poison dealing 1d4 damage per round with pain effects; a Fortitude save (DC 15 + his Craft (Alchemy) result, as printed) negates the ability effect. Refilling the syringe takes a day and a Craft (Alchemy) check (DC 20).", 3, "special-attack"),
      nf("Self Testing II", "At 3rd level the night doctor chooses a second self-modification: Adrenaline Boost — +2 Strength and +2 initiative; Retcher — an acid vomit in a 20-foot line dealing 2d6 + Constitution modifier damage (Reflex DC 15 for half), usable twice per short rest and thereafter at a cost of 4 hit points per use; or Creature — two claw attacks (1d4) and a bite (1d6). He also becomes immune to all diseases.", 3),
      nf("Size Up", "At 4th level, as a standard action the night doctor can make a special Sense Motive check (DC 10 + the creature's Hit Dice) to learn a creature's Hit Dice. He can attempt this a number of times per day equal to half his class level.", 4),
      nf("Chop Shop Artiste", "At 4th level the night doctor can use Heal while threatened without provoking attacks of opportunity, can take 10 on Heal checks, and can reattach limbs severed within the last 6 hours.", 4),
      nf("Randomized Surgery", "At 5th level, once per day the night doctor can enter a surgical frenzy: +2 Strength, +4 Constitution, +2 on Will saves, and one extra attack at a −2 penalty on all attacks. The frenzy lasts 3 rounds plus his new Constitution modifier, after which he is fatigued.", 5),
      nf("Diehard", "At 5th level the night doctor gains the Diehard feat (a fixed grant, not a selectable list).", 5, "feat"),
      nf("Improved Synthesize Drugs", "At 6th level the beneficial effects of his basic drugs are doubled and their variable effects gain +1 die. New drugs join the formulary: Demon, Creeper, and Morphia, the last with a d6 mutation table (as printed on the class page).", 6),
      nf("Portable Pharmacy", "At 6th level the night doctor's backpack laboratory lets him synthesize drugs and syringe poison anywhere, with the full benefits of an alchemy lab.", 6),
      nf("Peer Review", "At 6th level the night doctor attracts followers as if he had the Leadership feat — insalubrious practitioners and volunteers.", 6),
      nf("Surgical Specialist", "At 6th level the night doctor chooses a creature type in the manner of a ranger's favored enemy: +5 on attack rolls and Survival checks to track that type, +1d4 damage per night doctor level against it, and his poisons affect it regardless of immunity. He gains an additional type every 4 levels after 6th.", 6),
      nf("Self Testing III", "At 7th level the night doctor chooses a third self-modification: Leaper — +10 on Jump checks; Proofed — resistance 5 to fire, cold, and acid; or Chem'd — immune to fear, pain, and mind-influencing effects.", 7),
      nf("Reputation", "At 8th level the night doctor gains a +4 bonus on Diplomacy or Intimidate checks (his choice).", 8),
      nf("Superior Synthesize Drugs", "At 9th level the basic drugs' effects are doubled again and their variable effects gain another +1 die. New drugs: Doc's Special, Choker, and Time-bomb. Superior drugs need a Craft (Alchemy) check (DC 20), have a market value of 300 gp, and can be made in batches of 3 per day.", 9),
      nf("God Given Talent", "At 10th level the night doctor gains the Sage feat, even if he does not meet its prerequisites (a fixed grant, not a selectable list).", 10, "feat"),
      nf("Beyond 10th Level", "The page's higher-level features, beyond this app's 1–10 progression rows: Devil in Disguise (11th), Reaper Syndrome (12th), Red Death Suit (13th), Devils Double (14th), Euthanize (15th), Mass Producer and Anatomy Style Combatant (16th), Advanced Procedures (17th), a bonus feat at 18th (any combat feat), Blast Syringe (19th), and World Geneticist, Vile Syringe, and Plague Eater (20th).", 11),
    ].map((x) => x as FeatureDefinition),
  },
];

export const DANDWIKI_CLASSES: ClassDefinition[] = [...CLASSES_PART_1, ...CLASSES_PART_2];
