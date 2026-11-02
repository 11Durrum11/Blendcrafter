/**
 * Homebrew pack — D&D Wiki reference indexes from Shaun's
 * "CURRENT LIST OF IN USE SRD WIKI LINKS" document (2026-11-02),
 * mirroring the body-modifications index pattern: named entries
 * with a one-line own-words gist and the source page URL. These
 * are reference data, not picker collections; they are exported
 * through the barrel as ALL_DANDWIKI_REFERENCE_INDEX and merge
 * nothing into the existing ALL_* lists.
 *
 * Contents and counts (all fetched live 2026-11-02):
 * - 3.5e Flaws: the 99 flaws in the list page's main table.
 *   Gists are condensed from the list page's own summary column
 *   (many are flavor one-liners; the exact mechanics live on
 *   each flaw's own page), with prerequisites folded in where
 *   the page prints them. The page's April-Fools, supplement,
 *   and needs-work sections print no further entries.
 * - 3.5e Traits: the 154 traits in the main table plus Positive
 *   Energy Conduit from the page's "improving" section (155).
 *   Same gist convention as Flaws; four traits print no summary
 *   on the list page and are marked as such.
 * - Wild Magic (3.5e Variant Rule): the rule's named components
 *   (the two surge tables themselves are in ./tables.ts as
 *   RandomTableDefinitions). A different system from Shaun's
 *   own homebrew wild-magic tables.
 * - Building a Better Masterwork (3.5e Variant Rule): the
 *   rule's named components and price tables.
 * - Legal System (3.5e Variant Rule): the rule's named
 *   components (Open Game Content from Atlas Games' Crime and
 *   Punishment).
 * - 3.5e Homebrew Feats: the link is a category portal with
 *   several thousand feat links (the alphabetical listing runs
 *   to thousands of entries); per the integration brief it is
 *   indexed as the single portal entry below, not crawled.
 * - The document's 3.5e NPCs link is a category index of NPC
 *   stat blocks; the app has no NPC record type, so it is NOT
 *   integrated (reported to Shaun). The SRD index link is a hub
 *   page with nothing to integrate.
 */
import type { Ruleset } from "@/engine/types";

export interface DandwikiReferenceEntry {
  id: string;
  name: string;
  /** The list or rule the entry belongs to. */
  list: string;
  ruleset: Ruleset;
  /** One-line own-words gist. */
  summary: string;
  source: string;
  sourceUrl: string;
}

const FLAWS = "D&D Wiki — 3.5e Flaws";
const FLAWS_URL = "http://www.dandwiki.com/wiki/3.5e_Flaws";
const TRAITS = "D&D Wiki — 3.5e Traits";
const TRAITS_URL = "http://www.dandwiki.com/wiki/3.5e_Traits";
const WILD_MAGIC = "D&D Wiki — Wild Magic (3.5e Variant Rule)";
const WILD_MAGIC_URL = "http://www.dandwiki.com/wiki/Wild_Magic_(3.5e_Variant_Rule)";
const MASTERWORK = "D&D Wiki — Building a Better Masterwork (3.5e Variant Rule)";
const MASTERWORK_URL = "http://www.dandwiki.com/wiki/Building_a_Better_Masterwork_(3.5e_Variant_Rule)";
const LEGAL = "D&D Wiki — Legal System (3.5e Variant Rule)";
const LEGAL_URL = "http://www.dandwiki.com/wiki/Legal_System_(3.5e_Variant_Rule)";
const FEATS_PORTAL = "D&D Wiki — 3.5e Homebrew Feats";
const FEATS_PORTAL_URL = "http://www.dandwiki.com/wiki/3.5e_Homebrew_Feats";

function e(list: string, source: string, sourceUrl: string, idPrefix: string, name: string, summary: string): DandwikiReferenceEntry {
  return {
    id: `${idPrefix}-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`,
    name,
    list,
    ruleset: "homebrew",
    summary,
    source,
    sourceUrl,
  };
}

const flaw = (name: string, summary: string) => e("3.5e Flaws", FLAWS, FLAWS_URL, "flaw", name, summary);
const trait = (name: string, summary: string) => e("3.5e Traits", TRAITS, TRAITS_URL, "trait", name, summary);
const wm = (name: string, summary: string) => e("Wild Magic (variant rule)", WILD_MAGIC, WILD_MAGIC_URL, "wild-magic-rule", name, summary);
const mwk = (name: string, summary: string) => e("Building a Better Masterwork (variant rule)", MASTERWORK, MASTERWORK_URL, "masterwork", name, summary);
const law = (name: string, summary: string) => e("Legal System (variant rule)", LEGAL, LEGAL_URL, "legal", name, summary);

export const DANDWIKI_FLAWS: DandwikiReferenceEntry[] = [
  flaw("Abandonment Issues", "Abandonment by a parent figure shapes the character's behavior."),
  flaw("Amateur's Pride", "Prerequisite: at least 4 ranks in any Craft, Open Lock, or Disable Device skill. Overconfident improvisation: believes any skilled work can be faked with improvised tools."),
  flaw("Anxious Helper", "Nervous and panicky when trying to help others."),
  flaw("Attention Deficit Disorder", "Hard to keep focused on a subject; easily pulled off track, especially by shiny objects."),
  flaw("Attention Deficit Hyperactivity Disorder", "Struggles with patience, focus, and concentration; impulsive."),
  flaw("Beady Eyes", "Prerequisite: must have eyes. His beady eyes make him seem untrustworthy to others."),
  flaw("Callous", "Naturally insensitive to others' feelings; tramples or snubs people socially."),
  flaw("Chivalrous", "Whether by vow or inclination, the character does not fight women."),
  flaw("Clumsiness", "Prerequisite: race with functional eyes and limbs. Terrible coordination between eyes and limbs."),
  flaw("Cold-Blooded", "Raised in the arctic; cannot tolerate heat."),
  flaw("Combat Anxiety", "Prerequisite: must not have immunity to fear effects. Cannot handle the pressure of combat."),
  flaw("Command Word", "Prerequisite: living construct or construct type. A secret command word, known to himself and his creator, forces him to do the bidding of whoever speaks it."),
  flaw("Corruptible", "Prerequisite: any non-good alignment. Easily led astray, even to the party's potentially fatal detriment."),
  flaw("Coward", "Prerequisite: must not be immune to fear. Especially susceptible to fear."),
  flaw("Curse Collector", "Compulsively drawn to curses — he just thinks they're neat."),
  flaw("Deaf", "Prerequisite: functional ears or equivalent organs. The character cannot hear."),
  flaw("Deep Scar", "An old deep wound prohibits greatly strenuous activity."),
  flaw("Defenestrative Urge", "Suffers an irresistible urge fixated on windows."),
  flaw("Devil Curse", "Using magic or power from the underworld, or messing with the laws of the world, sprouts devilish features (horns, a tail, wings) that mark a loss of humanity."),
  flaw("Disorganized", "Disorganized; clutter seems to follow the character wherever he goes."),
  flaw("Ditzy", "Airheadedness that can make even saints lose patience."),
  flaw("Dyslexia", "Prerequisite: must be literate. Reading is difficult and writing commonly misspelled despite literacy."),
  flaw("Easily Distracted", "Constantly distracted mid-task by whatever catches the eye."),
  flaw("Family Curse", "A vengeful curse earned by someone in the family hangs over them all."),
  flaw("Fear of Magic", "Finds magic incredibly frightening."),
  flaw("Fearless", "Courage and overconfidence extreme to the point of foolhardiness."),
  flaw("Forgetful", "Chronically forgetful; cannot retain what he was just told."),
  flaw("Froggy Throat", "Prerequisite: must be able to perform bard spells. A 'frog in the throat' that ruins his singing."),
  flaw("Gullible", "Believes things no matter how far-fetched they seem."),
  flaw("Haemophilia", "Prerequisite: must have a Constitution score. His blood does not form clots normally."),
  flaw("Haunted", "The character is haunted."),
  flaw("Hemeralopia", "Prerequisite: not a race with light sensitivity, and no daylight adaptation feat. Cannot see in bright light (day blindness)."),
  flaw("High Metabolism", "Prerequisite: a race that requires eating regularly. Burns calories at a greater rate and must eat more, without gaining weight."),
  flaw("Honest", "Cannot lie, and is disturbed when others do so."),
  flaw("Hot-Blooded", "Raised in the desert; cannot tolerate cold."),
  flaw("Hunted", "Enemies who will stop at nothing hunt the character, and he is vulnerable to them."),
  flaw("Hypochondriasis", "Constantly worried about becoming sick; every bodily function is heavily scrutinized."),
  flaw("Impatient", "Finds it unbearable to wait any longer than necessary."),
  flaw("Incompetent", "Cannot be trusted to get anything right; even simple errands go wrong."),
  flaw("Informal Training", "Learned the basics of fighting but cannot apply his techniques in situations he didn't train for."),
  flaw("Introvert", "Socializing ('people-ing') is hard and tiring for the character."),
  flaw("Loud", "Loud in some fashion: speaks his thoughts aloud, heavy-footed, or similar."),
  flaw("Love of Nature", "Does not wish harm upon any natural creature."),
  flaw("Lovestruck", "Loves someone with his whole heart, and it shows when they're not around."),
  flaw("Magic Corrupting Touch", "Corrupts magical items that he touches."),
  flaw("Magical Mania", "Prerequisite: ability to cast arcane spells. Touched by the arcane to the point of it shaking his mind."),
  flaw("Magnetic", "Prerequisite: wholly or partially made of a ferromagnetic material such as iron or steel. His body attracts metal — 'very attractive, but not in the way you might have hoped.'"),
  flaw("Malformed Vocal Cords", "Prerequisite: able to cast spells and has a breath weapon. Gaining the breath weapon altered his vocal cords so he speaks exclusively in Draconic."),
  flaw("Masochist", "Incapable of spending a day without having pain inflicted on him by another creature."),
  flaw("Merciful", "Prerequisite: good alignment. Many times he doesn't have it in his heart to kill."),
  flaw("Motion Sickness", "Has a hard time getting around on anything but his own feet."),
  flaw("Music Hater", "Prerequisite: ears or similarly functioning organs. Cannot stand the noise of performed melodies."),
  flaw("Music Lover", "Absolutely loves to listen to music."),
  flaw("Mute", "Prerequisite: a race that can speak intelligibly. No longer has the capability to speak."),
  flaw("Narcissistic", "Devotion to his own beauty tends to be distracting."),
  flaw("Narcolepsy", "Has difficulty staying awake."),
  flaw("Naïve", "Lacks experience, wisdom, and judgment; gives everyone the benefit of the doubt and all of his trust, to his teammates' detriment."),
  flaw("Near Sighted", "Finds it hard to see things at greater distances."),
  flaw("Night Blindness", "Prerequisite: eyes; cannot have darkvision or low-light vision. Horrible night vision due to a birth defect."),
  flaw("No I in Team", "Rejects teamwork outright — 'who ever said those posters were good for you.'"),
  flaw("Nyctalopia", "Prerequisite: functional eyes. Cannot see in the dark."),
  flaw("Obese", "Prerequisite: Dexterity 13 or lower. Enjoys a good feast — ten times a day."),
  flaw("One-Armed", "Prerequisite: functional arms. One arm over-trained while the other suffered from lack of use."),
  flaw("Painful Aberrant Mark", "Prerequisite: Aberrant Dragonmark (Eberron Campaign Setting). His aberrant mark is especially painful to use."),
  flaw("Petit Mal Seizures", "A neurological disorder (absence seizures) that can be quite the interruption."),
  flaw("Phobia", "Afraid of something (a chosen phobia)."),
  flaw("Polished Hand", "Prerequisite: more than one hand. Trained one hand and never the other."),
  flaw("Poor Saves", "Bad things happen to him: it's rather unfortunate (see the flaw's page for its exact effect)."),
  flaw("Pride", "No matter the odds, refuses to retreat from battle out of overwhelming pride and honor."),
  flaw("Purse Blind", "Bad with money and trade."),
  flaw("Reincarnated Misfortune", "Prerequisite: affected by reincarnate or another means of reincarnation. Things in this life remind him of his last, and make him sad."),
  flaw("Self-Centered", "Only he can help himself; looks out for himself alone."),
  flaw("Short Attention Span", "His mind switches from one thought to another, wrecking his focus."),
  flaw("Short Temper", "Gets enraged easily, going berserk whenever he suffers damage."),
  flaw("Skinny Dipper", "Likes to swim with no clothes on — compulsively."),
  flaw("Slaughter Fodder", "Leaves himself open in combat — a lot."),
  flaw("Stiff", "His joints are not very flexible."),
  flaw("Storm Chaser", "Longs for the flash of thunder and the wail of wind; calm days are painfully uncomfortable."),
  flaw("Substance Abuse", "Depends (or used to depend) on alcohol or drugs to make it through the day, and it shows."),
  flaw("Substance Addiction", "Physically or mentally dependent on some kind of addictive substance."),
  flaw("Sunblind", "Sensitive eyes: difficulty functioning in direct sunlight."),
  flaw("Superstar", "Acts as though everyone's watching him."),
  flaw("Surgical Scars", "Prerequisite: 3 or more grafts that have been removed. The removals left his body weakened and scarred."),
  flaw("Terrible Tumbler", "Hopeless at tumbling: flails like a dying fish where others roll gracefully."),
  flaw("Tourette Syndrome", "The character has Tourette syndrome."),
  flaw("Traplover", "If he sees a trap, he has the urge to set it off."),
  flaw("Uncontrollable Phasing", "Prerequisite: must exist in physical form. Randomly disappears from existence for short periods, then phases back with no memory of the interval."),
  flaw("Uncontrollable Spell Resistance", "Prerequisite: spell resistance. He has no control over his own spell resistance."),
  flaw("Unfocused", "Cannot concentrate on anything for too long."),
  flaw("Unlucky", "Always falls short at the worst possible moment, right when it matters most."),
  flaw("Unready", "Never ready for combat."),
  flaw("Unusually Formed Body", "Prerequisite: humanoid. Parts of his body are different from most other humanoids'."),
  flaw("Urbanite", "Always feels more at home in a large town or city; wilderness life simply isn't for him."),
  flaw("Vendetta", "A race, monster, or group (DM's discretion) wronged him in the past; his hatred leaves him ill-tempered and seeking revenge."),
  flaw("Waste Not", "Hates to leave a corpse behind."),
  flaw("Weak Mind", "A weak mind: pretty much anything scares him with ease."),
  flaw("Weak Stomach", "Cannot hold food and drink down; frail and often malnourished."),
  flaw("Weakened Power", "His lifeblood (innate power) is greatly weakened."),
  flaw("Weathered Wound", "An old wound: the worse the weather gets, the more he hurts."),
];

const TRAITS_PART_1: DandwikiReferenceEntry[] = [
  trait("Adhd", "Attention deficit hyperactivity disorder: heightened spontaneity and difficulty focusing on long-term tasks."),
  {
    // A second, distinct trait page from "Adhd" above; its name
    // differs only by capitalization, so the id is suffixed to
    // keep the two records distinct.
    id: "trait-adhd-bright",
    name: "ADHD",
    list: "3.5e Traits",
    ruleset: "homebrew",
    summary: "Bright, unusually so, but extremely easily distracted. (A second, distinct trait page from 'Adhd' above.)",
    source: TRAITS,
    sourceUrl: TRAITS_URL,
  },
  trait("Adorableness", "Unnaturally adorable and cute to everyone, drawing attention whether wanted or not — or knowingly used to further his goals."),
  trait("Agender", "The character has no gender."),
  trait("Agile", "Quicker on his feet than most people, but lacks the strength of body others possess."),
  trait("All Brawn No Brain", "'SMASH GOOD!' 'BOOK BAD!' — strength over intellect, as the list puts it."),
  trait("Anosmia", "Lacks any sense of smell, but his other senses pick up the slack."),
  trait("Arachnophobia", "Has quite the fear of spiders and other arachnids."),
  trait("Aspie", "The character has Asperger syndrome."),
  trait("Autism", "A unique perspective, heightened focus, and attention to detail, characteristic of those on the autism spectrum."),
  trait("Automatonophobia", "Afraid of things that resemble life, such as dolls and puppets."),
  trait("Avenger", "Has a grudge that must be settled."),
  trait("Bandit's Child", "Bandits will often ignore him — but what about enemies?"),
  trait("Bear Grylls", "A survivalist in the mold of Bear Grylls."),
  trait("Berserk", "Normal most of the time, but flies into a rage when injured enough in battle."),
  trait("Bibliophile", "Unable to resist reading."),
  trait("Bigender", "Can change gender at will: a 1-hour extraordinary transformation (helpless during it), in all respects as a total gender swap."),
  trait("Blind As a Bat", "Permanently blinded, but has adapted to sense everything in his immediate area."),
  trait("Blind, Born", "Born blind, but gained better hearing than most as a result."),
  trait("Blood Frenzied", "When his life is in danger, the feel of his own blood being shed drives him into a berserk rage."),
  trait("Book Worm", "Widely read with encyclopedic knowledge, but lacks an expert's depth of understanding."),
  trait("Born Big", "Born bigger than others of his race."),
  trait("Buxom Bombshell", "Gifted with great curves beyond the ordinary."),
  trait("Cassandra's Curse", "Can see the future almost effortlessly — too bad no one else can know."),
  trait("Child of Druid", "Has tapped into an inner druid, being raised by or blood-related to a druid."),
  trait("Child Soldier", "A warrior at an early age whose maturity doesn't match his years; no one takes him seriously until it's too late. The character must be under the starting age for his race, and loses the trait if he ages past it or is affected by age-altering magic."),
  trait("Cold Homeland", "Born and raised in frigid polar regions; his body has become attuned to cold."),
  trait("Color Blindness, Complete", "His color vision is non-existent."),
  trait("Complete Apathy", "Incapable of emotions; seems soulless to others."),
  trait("Compulsive Truthteller", "Has a hard time not telling the truth; it takes a strong will to even attempt to lie."),
  trait("Conservative", "Stuck in his ways; sticks to traditional ways of thinking."),
  trait("Cool", "The most interesting person around, but all the attention left him unable to fully perceive the world."),
  trait("Craftsman", "Exceptionally gifted in all forms of the crafts — smithing, writing, enchanting, brewing — and looked to when something needs fixing."),
  trait("Cross Trained.", "Training in skills foreign to his profession left his body slightly behind his peers. (Name as printed, with trailing period.)"),
  trait("Curse of the Wild", "A potent lycanthropic affliction: barely able to control his changes, but able to assume his savage form on a whim."),
  trait("Dat Booty Doe", "A slim waist with wide hips and a plump derriere — with a few drawbacks."),
  trait("Dead Nerves", "A weak sense of touch; incapable of feeling pain."),
  trait("Dedicated Magician", "So focused on his specialty of magic that others have little hope of resisting his spells — but such dedication leads to folly."),
  trait("Dense Skeleton", "A denser skeleton: tougher, but heavier and harder to heal."),
  trait("Dependable", "The party's stone to base itself upon."),
  trait("Desid", "An irreversible injury to mind and brain caused a permanent migraine."),
  trait("Digestive Versatility", "Can eat a wider range of foods, even of questionable freshness — with disturbing results at the other end."),
  trait("Diminished Lifeforce", "Negative-planar energy destroyed part of his life force (marked by an obvious scar), leaving him a full size category smaller."),
  trait("Diplomatic Leader", "A born leader, able to lead comrades into battle, but prefers to negotiate for peace."),
  trait("Divinely Spellgifted", "The list page prints no summary for this trait; see the trait's own page for its benefit and drawback."),
  trait("Dragon Power Mark", "A rune drawn on the back of the shoulder grants the ability to use dragon powers."),
  trait("Elder Wisdom", "Much older than he seems; carries elder wisdom."),
  trait("Electrical Generator", "Electrical energy flows through his body."),
  trait("Elemental Bloodline", "A small amount of elemental power resides in him."),
  trait("Elementalist", "A master of elemental magic, but falters when casting certain other types of spells."),
  trait("Emotionless", "Emotion has run dry: he simply lacks any."),
  trait("Excessively Fat", "Noticeably fat — not obese, but could stand to lose a few pounds."),
  trait("Excessively Fat, Variant", "Noticeably fat (a variant of the Excessively Fat trait)."),
  trait("Extremely Feminine", "Disturbingly feminine; people tend to believe him to be a girl, whether he is or isn't."),
  trait("Extremely Masculine", "Disturbingly masculine; people tend to believe him to be a guy, whether he is or isn't."),
  trait("Extroversion", "The life of the party — outgoing and fun-loving, but somewhat blunt."),
  trait("Feminine", "Very feminine."),
  trait("Fidgetophoric", "Can't seem to hold still, at all; must always be moving."),
  trait("Fleet but Frail", "Fast enough to avoid a hit — and had better, because he can't take one."),
  trait("Focused Fighting", "Prefers one-on-one combat."),
  trait("Focused Training", "Trained to master one skill at the cost of others."),
  trait("Form Mastery", "Varying degrees of control over his transformation abilities."),
  trait("Full Power Awakening", "Specialized training unlocked his full power: additional strength, constitution, and improved defense."),
  trait("Ghost-Warped", "His body reacts strangely to ghosts and incorporeal creatures, briefly gaining some of their disabilities."),
  trait("Giantism", "A rare gene makes him much larger than most members of his race."),
  trait("God-Like Beauty", "Beauty with the best features of his race and gender — can stop others in their tracks with a look; vanity clouds his ability to see through illusions that pander to his ego."),
  trait("Good Shot, Mate", "A professional's standards: respect for others in his profession."),
  trait("Graced by Calamity", "One of the true Kalosians / Katoterans (a setting-specific trait, as printed on the list)."),
  trait("Hardened", "His emotions were torn from him by tragedy, or by brutal illegal military combat schooling that forced him not to feel."),
  trait("Hardy", "Incredibly resistant to disease."),
  trait("Headless", "His head has become detached from his body."),
  trait("Heightened Smell", "Extraordinary olfactory ability."),
  trait("Hermaphroditic", "Bears both genders."),
  trait("High Society", "Exudes an aura of class and expects the same in return."),
  trait("Hooded", "Always wears a hood."),
  trait("Hot Homeland", "Born and raised in hot equatorial regions; his body has become attuned to heat."),
  trait("Insane anarchist", "Insane, with no regard for rules or authority; also very impulsive."),
  trait("Introversion", "Finds pleasure in spending hours alone; not at all comfortable in large groups."),
  trait("Iron Liver", "Immune to the intoxicating effects of alcoholic beverages."),
  trait("Jack of all Trades", "Knowledgeable in a wider than average number of areas, but lacks the focus to become a true expert in anything."),
  trait("Joker", "Always making fun of people and their flaws."),
  trait("Ki Flight", "Through intense concentration of ki energy, has unlocked the ability to fly."),
  trait("Ki System", "An inherent connection to the ki system, granting awareness and a customizable ki aura."),
  trait("Kleptomaniac", "Finds surprising things in his pockets — where could they have come from?"),
  trait("Legendary Saiyan", "Descended from a line of legendary warriors; possesses the latent power of the Saiyan race."),
  trait("Liberal", "The list page prints no summary for this trait; see the trait's own page for its benefit and drawback."),
  trait("Light Sleeper", "Whether by training or nature, wakes up to almost any noise."),
  trait("Lithe", "An extraordinary intuition gives him a remarkable sense for danger."),
  trait("Little Brother/Sister", "A little brother or sister follows him around constantly — annoying, but loved with every fiber of his being."),
  trait("Logical", "Very understanding in math and science, though the arts of society elude him."),
  trait("Magic-Sight", "Can see magic — but it distracts him."),
  trait("Mana Blood", "Born with mana flowing through his body: may sacrifice hit points to cast spells (1 hp per spell level); if the damage from this exceeds half his hit points he becomes fatigued, and beyond three quarters, exhausted."),
  trait("Mana Blooded", "Born to be a spellcaster but physically incapable of casting with somatic or verbal components; casts through pure force of will, at a toll on his body."),
];

const TRAITS_PART_2: DandwikiReferenceEntry[] = [
  trait("Masculine", "Very masculine."),
  trait("Masochist", "Enjoys the feeling of pain."),
  trait("Master Performer", "An excellent performer who spent his student years mastering performance rather than more lucrative studies."),
  trait("Merchant's Bearing", "So frugal from years around skilled merchants that, given sufficient time, he always pays less for his supplies than others."),
  trait("Midget", "A rare gene makes him much smaller than most members of his race."),
  trait("Misgendered Body", "His appearance is strongly deceiving, fooling many — if not all — into believing he is of a gender he is not."),
  trait("Moderate", "The list page prints no summary for this trait; see the trait's own page for its benefit and drawback."),
  trait("Modern", "Kids today are very smart, but they don't know their history (as the list puts it)."),
  trait("Mute", "Unable to speak by any means."),
  trait("Needy", "Always has to be the center of attention."),
  trait("Negative Energy Conduit", "His body hums with the suppressed power of the Negative Energy Plane; he can control it, but it has drawbacks."),
  trait("Night Hunter", "Gains an attack bonus in darkness, but a penalty when exposed to light."),
  trait("Nightmares", "Sometimes, after a long day, the plane of dreams denies him rest and shunts him into someone else's nightmare."),
  trait("Nimble Fingers", "His hands are quick and precise, but he lacks upper-body strength."),
  trait("Numb to Pain", "A strange affliction makes him incapable of feeling pain."),
  trait("One with the Psionic Plane", "Has a connection with the psionic plane."),
  trait("Outlaw Reputation", "Well known for his outlawish past (or present) — or just looks like an outlaw."),
  trait("Overresearched", "Thinks too much about what he's saying, and tends to mix languages because of it."),
  trait("Overresearched, Condensed", "Thinks too much about what he's saying, and tends to mix languages because of it. (A condensed second printing of Overresearched.)"),
  trait("Peasant Weapon Specialist", "The only weapon he cares about is the pitchfork he used on the farm to chase away wolves."),
  trait("Perpetual Chaos", "His mental powers are great, but have weakened his attention to the real world."),
  trait("Phantasmagorist", "An arcanist gifted in the art of illusion."),
  trait("Power Level", "Excels in various aspects, contributing to a higher Power Level (PL)."),
  trait("Preparedness", "His body is fragile, but his mind is sharp."),
  trait("Prestige", "On reaching the pinnacle of his current abilities, he can undergo a transformative experience, gaining new insights and powers."),
  trait("Problem with Authority", "Hates being told what to do by anyone other than himself."),
  trait("Proud", "Very prideful in who he is and what he does."),
  trait("Psychic Potential", "Born with the seed of psionic potential, but took longer to grow, leaving him less skillful than some counterparts."),
  trait("Quiet Anger", "Bottled within himself, no emotions visible — but inside is a mix of everything kept inside."),
  trait("Quiet Type, Simple Phrase", "Doesn't say much."),
  trait("Quiet Type, Single Insight", "Doesn't say much. (A second Quiet Type variant.)"),
  trait("Reckless", "Total chaos once battle arises; cares little what happens to himself."),
  trait("Savage Tendencies", "The list page prints no summary for this trait; see the trait's own page for its benefit and drawback."),
  trait("Sexist", "Has something against the opposite sex and believes his own sex is superior."),
  trait("Shrewd Merchant", "Knows the value of money like the back of his hand."),
  trait("Sociopath", "Finds it hard to empathize with others; feels he knows what is most important and does not pity the ignorant."),
  trait("Spontaneous Combustion", "An uncanny ability to light himself on fire has followed him throughout his life."),
  trait("Stagnophobia", "A fear of staying in one place for too long."),
  trait("Steel Ranger", "Is, was, or will be a member of the ancient order of paladins known as the Steel Rangers/Paladins."),
  trait("Submissive", "Likes following orders and has trouble disobeying them."),
  trait("Synesthesia", "His senses are mixed up: he can see sounds and hear with his eyes."),
  trait("Tall", "Taller than most other members of his race."),
  trait("The Redeemed", "Through personal tragedy, came out of a dark place with a sense of peace."),
  trait("Tidiness", "Everything must be clean, tidy, and immaculate, or he might not even sleep that night."),
  trait("Trained in Class", "Knows what he trained in, and knows it well; with classes using Archetypes, he can change between them 3 times per day."),
  trait("True Believer", "Has a habit of evangelizing to most people he meets."),
  trait("Twin Sibling", "Has a twin he has lived with his entire life."),
  trait("Two souls", "Was supposed to be a twin; the twin died before birth and its soul is attached to him, aiding him — seeing through its eyes, moving objects, mind-controlling the weak-minded."),
  trait("Unidextrous", "Favored one hand his entire life; all that work made it better."),
  trait("Unique Handwriting", "His writing is sloppy, small, hastily written, and often abbreviated."),
  trait("Unnatural Aura", "His growth is tainted by a strange creepiness that scares others; sensitive creatures find the aura disturbing and threatening."),
  trait("Vision Inversion", "The bright light–darkness spectrum works the opposite way for him."),
  trait("We Are Many", "A man with a broken mind may be unstable, but he will not be controlled."),
  trait("Wealthy Family", "His family is rather well-off (lucrative merchant trade or nobility); he enjoys a one-time benefit to his starting finances."),
  trait("Weapon Specialist", "Has trained with only one type of weapon his entire life."),
  trait("Wingless", "His body rejects wings completely, but the will to fly is still within him."),
  trait("World Historian", "Keen on events that happened in the past, but suffers with keeping up to date."),
  trait("Worshiped", "Was worshiped as a child."),
  trait("Xenophilia", "An extreme attraction to exotic species, though his interaction with his own kind suffers for it."),
  trait("Xenophobic", "Aggressive, disapproving, or racist against those not of his own race, and goes out of his way to make his feelings known."),
  trait("Zealous", "A drive to win battles with ardent determination."),
  trait("Positive Energy Conduit", "Listed in the page's 'traits being improved' section rather than the main table: a conduit for positive energy (see the trait's own page for its mechanics)."),
];

export const DANDWIKI_TRAITS: DandwikiReferenceEntry[] = [...TRAITS_PART_1, ...TRAITS_PART_2];

export const DANDWIKI_WILD_MAGIC_RULES: DandwikiReferenceEntry[] = [
  wm("The [Wild] Descriptor", "Spells with the Wild descriptor risk wild surges; a Wild spell cannot be affected by any other metamagic feat except ones that only modify casting time or components (others fail but still consume the higher slot or charges)."),
  wm("Wild Magic Zone", "Any spell cast by a spellcaster inside a wild magic zone automatically gains the [Wild] descriptor; spells cast into the zone from outside behave normally."),
  wm("Casting a Wild Spell", "A seven-step procedure: pick targets/area, make a Wild Magic skill roll, roll d100 on the surge tables if needed, apply the minor surge and any pre-cast major surges, determine whether the spell is successfully cast, apply remaining major surges, then resolve the spell."),
  wm("Minor Wild Surge", "A d100 table (integrated in this pack as a random table) that adjusts the spell's caster level by −2 to +2; several bands also trigger a Major Wild Surge. No spell resistance or saving throw prevents a minor surge, and if caster level falls below zero the spell automatically fails."),
  wm("Major Wild Surge", "A d100 table of 50 named results (integrated in this pack as a random table) — stunned/dazed casters or targets, dispels, antimagic, spell failure or swapping, displays, blur, DC/range/duration/level changes, elemental portals, and Double Surge. A spell that completely fails produces no major surge; none is prevented by SR or saves."),
  wm("Skill: Wild Magic (Wis)", "A Wisdom skill, cross-class for all classes by default, used to prevent wild surges: DC 20 + spell level negates all surges, DC 15 + spell level negates only the Major Surge chance (choose before rolling, once per casting, no retry). Synergy: 5+ ranks in Concentration give +2 on Wild Magic checks; 5+ ranks in Wild Magic give +2 on Use Magic Device checks to activate an item blindly."),
  wm("Feat: Imbue With Wildness [Metamagic]", "Prerequisite: 2+ ranks in Wild Magic and having learned and cast at least two different Wild spells. A spell enhanced with this feat gains the Wild descriptor (and its restrictions); it takes up a spell slot one level higher. No effect on a spell that already has the Wild descriptor."),
  wm("Feat: Wild Mage [General]", "Prerequisite: Imbue With Wildness, 2+ ranks in Wild Magic, and having learned and cast at least two different Wild spells. Grants a +2 insight bonus on Wild Magic checks and makes Wild Magic a class skill. A wizard may select it as a bonus feat."),
  wm("Feat: Wild Master [General]", "Prerequisite: Wild Mage, Imbue With Wildness, 9+ ranks in Wild Magic, and having learned and cast at least four different Wild spells. The Wild Magic insight bonus rises to +4, and once per day the character may reroll any one wild magic result (skill roll or surge roll), taking the reroll even if worse. A wizard may select it as a bonus feat."),
  wm("Feat: Wild Savant [General]", "Prerequisite: Wild Master, Wild Mage, Imbue With Wildness, 15+ ranks in Wild Magic, and having learned and cast at least six different Wild spells. As Wild Master, but two rerolls per day; additionally, before any major surge roll he may choose which of the spell's targets receives the surge, or take it himself. A wizard may select it as a bonus feat."),
  wm("Spell: Dispel Wild Surge", "Abjuration; Brd 1, Clr 2, Drd 3, Pal 2, Sor/Wiz 2; V, S; 1 standard action; medium range; instant. As dispel magic, but it only dispels the ongoing effects of major wild surges — only the asterisk-marked surges on the table, and never instantaneous surge effects; a caster level check is required (with a +2 circumstance bonus when dispelling his own surges)."),
];

export const DANDWIKI_MASTERWORK_RULES: DandwikiReferenceEntry[] = [
  mwk("Degrees of Quality", "A superior masterwork item needs a second Craft check beyond the standard masterwork check: 2nd degree at DC 40, 3rd degree at DC 60, and +20 DC per degree beyond that."),
  mwk("The Price of Perfection", "Each degree multiplies the standard masterwork surcharge steeply (the prose gives ×30 per degree); the printed price tables for each item type govern in practice."),
  mwk("Masterwork Weapons", "Price/benefit by degree — 1st (+300 gp): +1 on attacks. 2nd (+3,000 gp): +2 attacks, +10 hp, +1 threat range. 3rd (+15,000 gp): +3, +20 hp, +2 threat range. 4th (+60,000 gp): +4, +30 hp, +3 threat range. 5th (+120,000 gp): +5, +40 hp, +4 threat range. Threat-range gains stack with keen and Improved Critical but are not doubled by them."),
  mwk("Masterwork Armour", "Price/benefit by degree — 1st (+150 gp): armor check penalty −1. 2nd (+4,500 gp): ACP −2, +10 hp, −5% arcane spell failure. 3rd (+25,000 gp): ACP −3, +20 hp, −10% ASF. 4th (+75,000 gp): ACP −4, +30 hp, −15% ASF. 5th (+500,000 gp): ACP −5, +40 hp, −20% ASF."),
  mwk("Masterwork Musical Instruments", "Price/Perform bonus by degree — 1st (+100 gp): +2 Perform. 2nd (+2,000 gp): +4. 3rd (+20,000 gp): +6. 4th (+100,000 gp): +8. 5th (+500,000 gp): +10."),
  mwk("Masterwork Tools", "Price/circumstance bonus on the relevant Craft by degree — 1st (+50 gp): +2. 2nd (+1,500 gp): +4. 3rd (+45,000 gp): +6. 4th (+1,350,000 gp): +8. 5th (+40,500,000 gp): +10."),
  mwk("Masterwork Gems and Jewellery", "The same price ladder as masterwork tools, with quality grades running from 'flaws minimal' at the low degrees to 'totally flawless' at 5th degree."),
  mwk("The Time Factor", "Higher degrees take far longer to craft: work progresses at a rate of the Craft check × 10 gp of value per day, and the craftsman can always take 10 on the chosen Craft skill."),
  mwk("Efficient Craftsman [Epic]", "An epic feat printed with the rule, tied to its time factor: the craftsman works at the accelerated daily rate above and can always take 10 on the chosen Craft skill."),
  mwk("Option: Better Materials", "Refined raw materials track the same degrees (per pound: +50 / +1,500 / +45,000 / +1,350,000 / +40,500,000 gp). Refined metals gain +2 hardness and +10 hp per inch of thickness per degree; refined mithral raises maximum Dexterity bonus by +1 per degree; refined adamantine adds DR 1/− per degree on armor and hardness penetration on weapons."),
  mwk("The Adamantine Ceiling", "5th degree is the practical cap on masterwork quality."),
];

export const DANDWIKI_LEGAL_SYSTEM: DandwikiReferenceEntry[] = [
  law("Law in a Secular Society", "How law and courts operate in a secular society — the rule's baseline framework."),
  law("Pleading Your Case", "A defendant pleads with a single Diplomacy check to shift the judge's attitude; a helpful judge may dismiss the case."),
  law("Bribery", "Whether bribery is itself a crime locally takes Knowledge (law) DC 15 to know; judging a official's receptiveness takes Sense Motive DC 20; Gather Information finds the going rate."),
  law("Status Modifiers", "Modifiers to court dealings: stranger −3; distrusted race, class, or religion, or a hostile nation, −2 each; prior offenses −2; long-time resident +2; valuable community member +2; community leader +4."),
  law("Influencing NPC Attitudes", "Judges and officials are swayed using the standard Diplomacy attitude DC table."),
  law("The Court of Common Law", "5+ ranks of Knowledge (law) give a +2 synergy bonus in court; even a friendly judge cannot simply ignore the law."),
  law("The Role of the Jury", "How juries fit into trials under the rule."),
  law("The Hue and Cry", "The communal alarm-and-pursuit custom: how a community raises the hue and cry after a crime."),
  law("Political Alignment: Lawful Good", "How a lawful good society frames its laws, courts, and punishments (the rule treats each alignment's legal culture in turn)."),
  law("Political Alignment: Lawful Neutral", "How a lawful neutral society frames its laws, courts, and punishments."),
  law("Political Alignment: Lawful Evil", "How a lawful evil society frames its laws, courts, and punishments."),
  law("Political Alignment: Neutral Good", "How a neutral good society frames its laws, courts, and punishments."),
  law("Political Alignment: True Neutral", "How a true neutral society frames its laws, courts, and punishments."),
  law("Political Alignment: Neutral Evil", "How a neutral evil society frames its laws, courts, and punishments."),
  law("Political Alignment: Chaotic Good", "How a chaotic good society frames its laws, courts, and punishments."),
  law("Political Alignment: Chaotic Neutral", "How a chaotic neutral society frames its laws, courts, and punishments."),
  law("Political Alignment: Chaotic Evil", "How a chaotic evil society frames its laws, courts, and punishments."),
  law("The Nature of Crime: Smuggling", "Learning what counts as contraband locally: Knowledge (law) DC 15, Knowledge (local) DC 10, or Profession (merchant) DC 18."),
  law("The Nature of Crime: Treason", "Identifying and treating treason: Bardic Lore DC 23, Knowledge (history) DC 22, Knowledge (nobility) or Knowledge (religion) DC 17."),
  law("The Role of Magic: High Magic", "In high-magic societies, truthreaders — vetted casters who testify mystically — serve the courts, and courtrooms are monitored with detect magic."),
  law("The Role of Magic: Typical Magic", "How magic is used and controlled in trials in a typical-magic society."),
  law("The Role of Magic: Low Magic", "How trials proceed where magic is rare or distrusted."),
  law("Theocratic Society", "Law under a theocracy: religious authority as legal authority."),
  law("Monotheism vs Polytheism", "How the number of gods a society worships changes its laws and courts."),
  law("The Power of Tradition", "In tradition-bound societies both Diplomacy and Bluff can shift judges, and advocates are rarely allowed."),
  law("Life Among the Ruins", "Justice in collapsed societies: trial by ordeal, or a plea hearing before the leader."),
  law("A Society of Sorcerers", "Sorcerer-run societies use magic in trials, and may sever a criminal from the source of magic as punishment."),
  law("Ignorance of the Law", "Learning local taboos and laws: Bardic Lore DC 20, Knowledge (geography) DC 20, Knowledge (local) DC 10, or Knowledge (law) DC 15 (+5 in one's homeland, local excepted); Gather Information DC 10."),
  law("Witchcraft and Blasphemy", "How societies treat witchcraft and blasphemy as crimes."),
  law("Vigilante Action", "How the law regards vigilantes and their actions."),
  law("Methods of Punishment: Enforced Action", "Compelled service as a sentence: geas/quest, mark of justice, and sentinel stones used as probation."),
  law("Methods of Punishment: Exile", "Banishment as a sentence, and its terms."),
  law("Methods of Punishment: Incarceration", "Prisons wear prisoners down (Fortitude save DC 10 per week or lose 1 point of Constitution temporarily). Printed facilities include the Simple Dungeon, the Dedicated Prison, and the Fortress of Justice (adamantine manacles, arcane locks, glyphs of warding, silent cells, hell cells), plus island castaways and unusual imprisonments: the Empty Prison (imprisonment spell), the Menagerie (baleful polymorph zoo), the Reliquary Ward (ashes held against resurrection), the Soul Vault (trap the soul gems), and the Stone Garden (flesh to stone)."),
  law("Methods of Punishment: Corporeal Punishment", "Beating comes in light, moderate, and heavy grades (20%, 40%, or 60% of hit points lost, plus Dexterity damage, with Fortitude saves). Disfigurement covers branding (3 damage, with attitude and −1 to −3 check effects), and mutilation has a printed effects table for ears, eyes, hands, fingers, nose, and tongue."),
  law("Methods of Punishment: Capital Punishment", "Execution as a sentence, and its forms."),
  law("Methods of Punishment: Magical Retribution", "Magical sentences: bestow curse, blindness/deafness, energy drain, feeblemind, plane shift exile, and similar."),
];

export const DANDWIKI_FEAT_PORTAL: DandwikiReferenceEntry[] = [
  {
    id: "homebrew-feats-portal",
    name: "3.5e Homebrew Feats (portal)",
    list: "3.5e Homebrew Feats",
    ruleset: "homebrew",
    summary: "A category portal, not a bounded list: an alphabetical index of several thousand homebrew feat pages hosted on D&D Wiki. Indexed as this single portal entry per the integration brief; the individual feat pages were not crawled.",
    source: FEATS_PORTAL,
    sourceUrl: FEATS_PORTAL_URL,
  },
];

export const ALL_DANDWIKI_REFERENCE_INDEX: DandwikiReferenceEntry[] = [
  ...DANDWIKI_FLAWS,
  ...DANDWIKI_TRAITS,
  ...DANDWIKI_WILD_MAGIC_RULES,
  ...DANDWIKI_MASTERWORK_RULES,
  ...DANDWIKI_LEGAL_SYSTEM,
  ...DANDWIKI_FEAT_PORTAL,
];
