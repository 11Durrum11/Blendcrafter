/**
 * Homebrew pack — the two surge tables from the D&D Wiki
 * "Wild Magic (3.5e Variant Rule)" page (OGL material, from
 * dnd.jasontank.net), part of Shaun's "CURRENT LIST OF IN USE
 * SRD WIKI LINKS" (2026-11-02). This is a DIFFERENT wild-magic
 * system from Shaun's own homebrew surge tables in the homebrew
 * pack; it is filed under its own ids here. Like the homebrew
 * tables, these are reference data exported through the barrel's
 * ALL_RANDOM_TABLES. Effect text is condensed to one line per
 * entry in the house style. "Adjusted caster level" means the
 * caster level after the minor surge's adjustment. Surges marked
 * * can be dispelled with the page's dispel wild surge spell;
 * surges marked ‡ apply before determining whether the spell is
 * successfully cast; a surge affecting "the target" of a
 * multi-target or targetless spell picks a random target, or
 * the caster if the chosen target was not affected.
 */
import type { RandomTableDefinition } from "@/engine/types";

const WILD_MAGIC = "D&D Wiki — Wild Magic (3.5e Variant Rule)";
const WILD_MAGIC_URL = "http://www.dandwiki.com/wiki/Wild_Magic_(3.5e_Variant_Rule)";

export const DANDWIKI_TABLES: RandomTableDefinition[] = [
  {
    id: "dandwiki-wild-magic-minor-surge",
    name: "Wild Magic — Minor Wild Surge (D&D Wiki variant)",
    ruleset: "homebrew",
    die: "d100",
    source: WILD_MAGIC,
    sourceUrl: WILD_MAGIC_URL,
    entries: [
      { roll: "00-04", title: "Caster Level −2, Major Surge", effect: "Caster level −2 for this spell, and roll on the Major Wild Surge table." },
      { roll: "05-19", title: "Caster Level −2", effect: "Caster level −2 for this spell. If caster level falls below zero, the spell automatically fails." },
      { roll: "20-24", title: "Caster Level −1, Major Surge", effect: "Caster level −1 for this spell, and roll on the Major Wild Surge table." },
      { roll: "25-39", title: "Caster Level −1", effect: "Caster level −1 for this spell." },
      { roll: "40-44", title: "Caster Level +0, Major Surge", effect: "No caster level change, but roll on the Major Wild Surge table." },
      { roll: "45-59", title: "Caster Level +0", effect: "No change." },
      { roll: "60-64", title: "Caster Level +1, Major Surge", effect: "Caster level +1 for this spell, and roll on the Major Wild Surge table." },
      { roll: "65-79", title: "Caster Level +1", effect: "Caster level +1 for this spell." },
      { roll: "80-84", title: "Caster Level +2, Major Surge", effect: "Caster level +2 for this spell, and roll on the Major Wild Surge table." },
      { roll: "85-99", title: "Caster Level +2", effect: "Caster level +2 for this spell." },
    ],
  },
  {
    id: "dandwiki-wild-magic-major-surge",
    name: "Wild Magic — Major Wild Surge (D&D Wiki variant)",
    ruleset: "homebrew",
    die: "d100",
    source: WILD_MAGIC,
    sourceUrl: WILD_MAGIC_URL,
    entries: [
      { roll: "01-03", title: "Blind *", effect: "Uncontrolled clairvoyance for 1 round per adjusted caster level (minimum 1): effectively blinded, seeing only the remote location, which may be anywhere on the same plane." },
      { roll: "04-06", title: "Deaf *", effect: "Uncontrolled clairaudience for 1 round per adjusted caster level (minimum 1): effectively deafened, hearing only the remote location." },
      { roll: "07-08", title: "Caster Stunned *", effect: "The caster is stunned for adjusted caster level ÷ 2 rounds (minimum 1)." },
      { roll: "09-10", title: "Target Stunned * ‡", effect: "The target is stunned for adjusted caster level ÷ 2 rounds (minimum 1)." },
      { roll: "11-12", title: "Caster Dazed *", effect: "The caster is dazed for adjusted caster level ÷ 2 rounds (minimum 1)." },
      { roll: "13-14", title: "Target Dazed * ‡", effect: "The target is dazed for adjusted caster level ÷ 2 rounds (minimum 1)." },
      { roll: "15-16", title: "Quicken", effect: "The spell is effectively quickened; the caster may take another action unless he already cast a quickened spell this round. No effect if the casting time exceeds 1 round." },
      { roll: "17-18", title: "Teleport", effect: "The caster teleports randomly within the spell's range: direction by 1d8 on the grenade-like weapon table, distance random up to 1,000 feet or the spell's range, whichever is smaller; shunted to the nearest open space if the destination is solid." },
      { roll: "19-21", title: "Wild Caster *", effect: "The caster emanates a wild magic zone out to 30 feet for 1 round per adjusted caster level." },
      { roll: "22-24", title: "Wild Target * ‡", effect: "The target emanates a wild magic zone out to 30 feet for 1 round per adjusted caster level." },
      { roll: "25", title: "Caster Dispel", effect: "An area-effect greater dispelling is centered on the caster (dispel check 1d20 + adjusted caster level, maximum +20)." },
      { roll: "26", title: "Target Dispel ‡", effect: "An area-effect greater dispelling is centered on the target (dispel check 1d20 + adjusted caster level, maximum +20)." },
      { roll: "27", title: "Caster Antimagic", effect: "The caster emanates an antimagic field out to 10 feet for 1 round per adjusted caster level." },
      { roll: "28", title: "Target Antimagic ‡", effect: "The target emanates an antimagic field out to 10 feet for 1 round per adjusted caster level." },
      { roll: "29-30", title: "Drain Magic", effect: "The area within 30 feet is drained of magic for 1 round per adjusted caster level: spells, spell-like, and supernatural abilities cannot be invoked inside it, though effects invoked from outside may still reach in." },
      { roll: "31", title: "Caster Mirror *", effect: "The caster gains a single mirror image lasting 1 round per adjusted caster level." },
      { roll: "32", title: "Target Mirror * ‡", effect: "The target gains a single mirror image lasting 1 round per adjusted caster level." },
      { roll: "33-34", title: "Total Failure", effect: "The spell fails; material components and the spell (or slot) are used up." },
      { roll: "35-36", title: "Benign Failure", effect: "The spell fails, but material components and the spell (or slot) are not used up." },
      { roll: "37", title: "Swap and Lose ‡", effect: "A different spell of the same level is cast instead (random from prepared spells or spells known), on the same target or area where possible. Prepared casters lose both spells; spontaneous casters lose two slots. (No other spell available: treat as Total Failure.)" },
      { roll: "38", title: "Swap and Keep ‡", effect: "A different spell of the same level is cast instead (random from prepared spells or spells known), on the same target or area where possible, but the caster loses neither spell nor any extra slot. (No other spell available: treat as Benign Failure.)" },
      { roll: "39-40", title: "Go Again", effect: "The spell works normally and the spell (or slot) is not used up." },
      { roll: "41", title: "Delay", effect: "The spell's effects are delayed by adjusted caster level ÷ 2 rounds (minimum 1); a targeted spell affects the original targets only if they are still in range when it goes off." },
      { roll: "42-46", title: "Visual Display *", effect: "Harmless visual effects accompany the spell (mist, ghostly flames, color changes, illusory snakes) for the spell's duration." },
      { roll: "47-51", title: "Audio Display *", effect: "Harmless auditory effects accompany the spell (howls, hissing, thunder, keening) for the spell's duration." },
      { roll: "52-53", title: "Audio-Visual Display *", effect: "Harmless auditory and visual effects accompany the spell for its duration." },
      { roll: "54-55", title: "Psionic Display *", effect: "The caster manifests a random psionic display (auditory, visual, mental, olfactory, or material); if psionics do not exist in the campaign, Audio-Visual Display occurs instead." },
      { roll: "56-57", title: "Caster Blur *", effect: "The caster is blurred for 1 round per adjusted caster level." },
      { roll: "58-59", title: "Target Blur * ‡", effect: "The target is blurred for 1 round per adjusted caster level." },
      { roll: "60-61", title: "No DC ‡", effect: "The spell's DC becomes 0 and it cannot overcome any spell resistance." },
      { roll: "62-63", title: "Up DC ‡", effect: "The spell's DC increases by +2, and the caster gains a +2 bonus on checks to overcome spell resistance." },
      { roll: "64-65", title: "Half Range ‡", effect: "The spell's range is halved; no effect if the range is not distance-based." },
      { roll: "66-67", title: "Up Range ‡", effect: "The spell's range is increased by 20%; no effect if the range is not distance-based." },
      { roll: "68-69", title: "Half Duration", effect: "The spell's duration is halved; no effect on concentration, instantaneous, or permanent durations." },
      { roll: "70-71", title: "Up Duration", effect: "The spell's duration is increased by 20%; no effect on concentration, instantaneous, or permanent durations." },
      { roll: "72", title: "Level−2 ‡", effect: "The spell's actual level drops by 2 (the spell fails if it falls below 0), though the slot used is unchanged; all level-dependent effects use the new level." },
      { roll: "73", title: "Level−1 ‡", effect: "The spell's actual level drops by 1 (the spell fails if it falls below 0), though the slot used is unchanged; all level-dependent effects use the new level." },
      { roll: "74", title: "Level+1 ‡", effect: "The spell's actual level rises by 1 (the spell fails if it rises above what the caster can cast), though the slot used is unchanged; all level-dependent effects use the new level." },
      { roll: "75", title: "Level+2 ‡", effect: "The spell's actual level rises by 2 (the spell fails if it rises above what the caster can cast), though the slot used is unchanged; all level-dependent effects use the new level." },
      { roll: "76-77", title: "All Minimized ‡", effect: "All variable, numeric effects of the spell are minimized (every die counts as 1)." },
      { roll: "78-79", title: "All Halved ‡", effect: "All variable, numeric effects of the spell are halved." },
      { roll: "80-81", title: "All Up ‡", effect: "All variable, numeric effects of the spell are increased by 20%." },
      { roll: "82-83", title: "All Maximized ‡", effect: "All variable, numeric effects of the spell are maximized (every die counts as its maximum)." },
      { roll: "84-87", title: "Energy Change ‡", effect: "The spell's energy type changes (equal chances: acid, cold, electricity, fire, sonic); a damaging spell without an energy type deals that type instead. No effect if the spell deals no damage." },
      { roll: "88-89", title: "Air", effect: "A momentary portal to the Plane of Air blasts the caster and everyone within 10 feet for 1d4 sonic damage per two adjusted caster levels (minimum 1d4); audible 100 feet away, or 150 feet with a Listen check (DC 10)." },
      { roll: "90-91", title: "Earth", effect: "A momentary portal to the Plane of Earth drops a large stone near the caster (direction by 1d8, distance 1d10 feet) that fragments, damaging everyone within 5 feet for 1d6 per two adjusted caster levels (minimum 1d6)." },
      { roll: "92-93", title: "Water", effect: "A momentary portal to the Plane of Water drenches the caster and everyone within 5 feet with a sudden torrent; no damage, but the drenching itself may cause problems (such as dousing a torch)." },
      { roll: "94-95", title: "Fire", effect: "A momentary portal to the Plane of Fire accosts the caster with a gout of flame dealing 1d6 fire damage per two adjusted caster levels (minimum 1d6)." },
      { roll: "96-97", title: "Negative *", effect: "A momentary portal to the Negative Energy Plane deals the caster 1d6 damage per two adjusted caster levels (maximum 5d6, minimum 1d6), and he must make a Fortitude save or gain 1d3 negative levels for 1d8 hours (they can never become permanent)." },
      { roll: "98-99", title: "Positive *", effect: "A momentary portal to the Positive Energy Plane harmlessly removes 1d4 negative levels; otherwise it heals 1d6 damage per two adjusted caster levels (maximum 5d6, minimum 1d6), with excess becoming temporary hit points lasting 1d4 hours." },
      { roll: "100", title: "Double Surge ‡", effect: "Roll twice more on this table, ignoring duplicates and further roll-again results; both surges occur simultaneously, and where they affect the same aspect of the spell they apply in the order rolled." },
    ],
  },
];
