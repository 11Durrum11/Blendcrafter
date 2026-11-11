// Dragon Magazine #337 (November 2005) — magic item draft: 21 records.
// "Bazaar of the Bizarre: Magic Face Paints" (Troy E. Taylor),
// pp. 82-84 — the program survey estimated ~6 items; the column prints
// NINETEEN face-paint designs. Leap of the Wild Ones prints three
// priced variants (grasshopper / jackrabbit / antelope, differing in
// trigger DC, caster level, bonus, and price) and stages as three
// records, on the issue-330 quiet-dagger ranks precedent; the other
// eighteen designs stage one record each: 18 + 3 = 21.
// Face paints in general (article frame, carried in each record's
// short form): single-use wondrous items made with Craft Wondrous
// Item that act in some ways like potions. Applying a paint takes 10
// minutes on a clean face (paints cannot be layered; the wearer needs
// a mirror or other reflective surface to apply his own) and requires
// a Craft (painting) check at the design's printed DC, made by the
// wearer or an ally; failing the check uses up the paint with no
// benefit. Once properly applied, a simple sound or gesture (the
// design's trigger) and willful desire activate the magic. Applied
// paint remains potent for 24 hours or until triggered.
// Every price, aura, CL, trigger DC, and duration was verified against
// rendered page images (magazine pp. 82-84); the image governs over
// the OCR stream — it corrects, among others, Badger Protector's
// prerequisite spell (summon monster III, not II), Glow of the
// Fireflies' price (22 gp), Mask the Living's duration (10 minutes),
// and Whirlwind's Arrow's price (135 gp).
// ⚠️ APOC FLAG — see SCREENING.md: Badger Protector conjures a dire
// badger via summon monster III; summoning spells don't work in APOC.
// It stages as printed (an item, on the issue-331 vehicle precedent)
// with the flag on the record.

import type { MagicItemDefinition } from "@/engine/types";

const SRC = "Dragon Magazine #337 — Bazaar of the Bizarre: Magic Face Paints (Troy E. Taylor), pp. 82-84";
const SRC_URL = "https://archive.org/details/DragonMagazine260_201801";

const FRAME =
  "Magic face paint (single-use wondrous item). Applying takes 10 minutes on a clean face and a Craft (painting) check at the printed DC (by the wearer or an ally; failure uses up the paint with no benefit); the applied paint stays potent for 24 hours or until its trigger is used.";

type ItemSeed = Partial<MagicItemDefinition> & Pick<MagicItemDefinition, "id" | "name" | "summary">;

function M(seed: ItemSeed): MagicItemDefinition {
  return {
    category: "wondrous",
    cost: "—",
    source: SRC,
    sourceUrl: SRC_URL,
    ruleset: "core",
    ...seed,
  } as MagicItemDefinition;
}

export const DRAGON_337_MAGIC_ITEMS: MagicItemDefinition[] = [
  M({
    id: "face-paint-badger-protector",
    name: "Face Paint, Badger Protector",
    cost: "675 gp",
    summary:
      FRAME +
      " Painted in an elaborate likeness of a badger's head, with a sigil of protection on the forehead. Clawing the ground with both hands conjures a dire badger capable of going into rage once it takes damage in combat; the badger protector can carry its caster plus 40 pounds and exists for 5 rounds or until dismissed, when it vanishes in a wisp of smoke. Trigger: Craft (painting) DC 16; claw the ground with both hands (move action). Faint conjuration; CL 5th; Craft Wondrous Item, summon monster III; Weight —. APOC: the paint works by summoning — summoning spells don't work in APOC; see SCREENING.md.",
  }),
  M({
    id: "face-paint-black-roses",
    name: "Face Paint, Black Roses",
    cost: "2,025 gp",
    summary:
      FRAME +
      " The wearer's face is coated in red, each cheek bearing the black silhouette of a rose with a particularly pronounced thorny stem. A pinprick capable of causing blood to well up activates the magic, causing poison thorns to grow from the wearer's body: anyone who grapples with the wearer takes 1d6 points of damage plus poison (DC 15; initial and secondary 1d4 Strength damage). These thorns last for 1 minute. Trigger: Craft (painting) DC 20; pinprick (1 point of nonlethal damage, standard action). Moderate transmutation; CL 9th; Craft Wondrous Item, poison, wall of thorns; Weight —.",
  }),
  M({
    id: "face-paint-bulls-might",
    name: "Face Paint, Bull's Might",
    cost: "270 gp",
    summary:
      FRAME +
      " The wearer's face, elbows, and knees are painted crimson, with a stylized bull's head in black prominent on the forehead. Snorting triggers the magic, granting the effects of bull's strength for 3 minutes. Trigger: Craft (painting) DC 14; snorting like a bull (free action). Faint transmutation; CL 3rd; Craft Wondrous Item, bull's strength; Weight —.",
  }),
  M({
    id: "face-paint-dashing-cheetah",
    name: "Face Paint, Dashing Cheetah",
    cost: "45 gp",
    summary:
      FRAME +
      " The user's face is painted sandy tan and spotted brown like a cheetah's coat. Running in place for a few seconds activates the magic, which improves the user's base speed by +20 feet for 10 minutes. Trigger: Craft (painting) DC 12; running in place (move action). Faint transmutation; CL 1st; Craft Wondrous Item, longstrider; Weight —.",
  }),
  M({
    id: "face-paint-eagles-talons",
    name: "Face Paint, Eagle's Talons",
    cost: "675 gp",
    summary:
      FRAME +
      " The entire face is painted light blue, each cheek bearing the black silhouette of an eagle swooping down, claws outstretched. Clenching a fist three times activates the magic: the user's hands become +1 steel slashing weapons that cannot be sundered or disarmed (1d6+1 damage [Medium], 1d4+1 damage [Small], 19-20/x2) for 5 minutes. Trigger: Craft (painting) DC 16; clench and unclench fists three times (move action). Faint transmutation; CL 5th; Craft Wondrous Item, greater magic fang; Weight —.",
  }),
  M({
    id: "face-paint-forestfold",
    name: "Face Paint, Forestfold",
    cost: "270 gp",
    summary:
      FRAME +
      " The user's face is painted in camouflage patterns and colors appropriate to the terrain (blues for marine, greens for forests, browns for deserts); if used in the wrong environment the face paint does not activate and confers no bonus. Momentarily closing the eyes (and willing the face paint to work) activates the magic, granting a +20 bonus on Hide checks so long as the subject does not move more than 10 feet from the point where he triggered the magic (which then ends the magic). This effect lasts 30 minutes. Trigger: Craft (painting) DC 14; closing eyes (free action). Faint transmutation; CL 3rd; Craft Wondrous Item, invisibility; Weight —.",
  }),
  M({
    id: "face-paint-glow-of-the-fireflies",
    name: "Face Paint, Glow of the Fireflies",
    cost: "22 gp",
    summary:
      FRAME +
      " A deep blue coating covers the user's face, with a crescent moon in yellow over the forehead and an array of yellow fireflies dotting the face. Passing one hand in front of the face activates the magic, causing the fireflies to fly off, swarm above the user, and grant him the benefits of a light spell centered just above the user's head for 10 minutes. Trigger: Craft (painting) DC 12; pass hand over face (free action). Faint evocation; CL 1st; Craft Wondrous Item, light; Weight —.",
  }),
  M({
    id: "face-paint-hawkeyes-sure-sight",
    name: "Face Paint, Hawkeye's Sure Sight",
    cost: "270 gp",
    summary:
      FRAME +
      " The right half of the user's face is painted white, with a ring of blue dots encircling the left eye. Blinking three times in quick succession triggers the magic, granting a +5 bonus on Search and Spot checks and halving penalties based on range for 3 minutes. Trigger: Craft (painting) DC 14; blink three times (free action). Faint transmutation; CL 3rd; Craft Wondrous Item, owl's wisdom; Weight —.",
  }),
  M({
    id: "face-paint-last-man-standing",
    name: "Face Paint, Last Man Standing",
    cost: "270 gp",
    summary:
      FRAME +
      " Large panels of blue and white adorn the face (either half and half or quartered in a checkerboard pattern). A battlefield whoop or howl activates the magic, which grants the effects of bear's endurance for 3 minutes. Trigger: Craft (painting) DC 14; whoop or howl (free action). Faint transmutation; CL 3rd; Craft Wondrous Item, bear's endurance; Weight —.",
  }),
  M({
    id: "face-paint-leap-of-the-wild-ones-grasshopper",
    name: "Face Paint, Leap of the Wild Ones (Grasshopper)",
    cost: "45 gp",
    summary:
      FRAME +
      " One of the three printed variants of Leap of the Wild Ones: painted light green (grasshopper), gray and white (jackrabbit), or light brown (antelope), with the desired creature's footprints drawn in black on the forehead. A high jump activates the magic, which lasts for 1 minute. The grasshopper variant grants a +10 bonus on Jump checks. Trigger: Craft (painting) DC 12; high jump (move action). Faint transmutation; CL 1st; Craft Wondrous Item, jump; Weight —.",
  }),
  M({
    id: "face-paint-leap-of-the-wild-ones-jackrabbit",
    name: "Face Paint, Leap of the Wild Ones (Jackrabbit)",
    cost: "225 gp",
    summary:
      FRAME +
      " One of the three printed variants of Leap of the Wild Ones: painted light green (grasshopper), gray and white (jackrabbit), or light brown (antelope), with the desired creature's footprints drawn in black on the forehead. A high jump activates the magic, which lasts for 1 minute. The jackrabbit variant grants a +20 bonus on Jump checks. Trigger: Craft (painting) DC 16; high jump (move action). Moderate transmutation; CL 5th; Craft Wondrous Item, jump; Weight —.",
  }),
  M({
    id: "face-paint-leap-of-the-wild-ones-antelope",
    name: "Face Paint, Leap of the Wild Ones (Antelope)",
    cost: "405 gp",
    summary:
      FRAME +
      " One of the three printed variants of Leap of the Wild Ones: painted light green (grasshopper), gray and white (jackrabbit), or light brown (antelope), with the desired creature's footprints drawn in black on the forehead. A high jump activates the magic, which lasts for 1 minute. The antelope variant grants a +30 bonus on Jump checks. Trigger: Craft (painting) DC 20; high jump (move action). Moderate transmutation; CL 9th; Craft Wondrous Item, jump; Weight —.",
  }),
  M({
    id: "face-paint-leave-no-sign",
    name: "Face Paint, Leave No Sign",
    cost: "675 gp",
    summary:
      FRAME +
      " The user's face, painted light brown, is arrayed with tracks of tiny black footprints. Standing on tiptoes activates the magic, which grants the pass without trace spell; as ground is covered, the prints on the face disappear. Trigger: Craft (painting) DC 17; stand on tiptoes (move action). Moderate transmutation; CL 5th; Craft Wondrous Item, trackless step class ability; Weight —.",
  }),
  M({
    id: "face-paint-mask-the-living",
    name: "Face Paint, Mask the Living",
    cost: "45 gp",
    summary:
      FRAME +
      " Black paint coats all of the user's visible skin, with a white skeleton painted on top of it. Snapping fingers triggers the magic, granting all benefits of the hide from undead spell for 10 minutes. Trigger: Craft (painting) DC 12; snapping fingers (free action). Faint abjuration; CL 1st; Craft Wondrous Item, hide from undead; Weight —.",
  }),
  M({
    id: "face-paint-prowling-tiger",
    name: "Face Paint, Prowling Tiger",
    cost: "675 gp",
    summary:
      FRAME +
      " The user's face is painted with orange and black tiger stripes. Emitting a long growl triggers the magic, granting the effects of both cat's grace and jump (+20 on Jump checks) for 3 minutes. Trigger: Craft (painting) DC 16; long growl (move action). Faint transmutation; CL 5th; Craft Wondrous Item, cat's grace, jump; Weight —.",
  }),
  M({
    id: "face-paint-ram-bash",
    name: "Face Paint, Ram Bash",
    cost: "2,025 gp",
    summary:
      FRAME +
      " Painted curved ram horns adorn each side of the user's face. Stamping the ground with the left foot triggers the magic, granting the benefits of the Improved Bull Rush feat even if the user does not meet the prerequisites. The effect lasts for 10 minutes. Trigger: Craft (painting) DC 20; stamping the ground (move action). Faint transmutation; CL 9th; Craft Wondrous Item, bull's strength, telekinesis; Weight —.",
  }),
  M({
    id: "face-paint-shout-at-the-storm",
    name: "Face Paint, Shout at the Storm",
    cost: "675 gp",
    summary:
      FRAME +
      " Intricately painted pictures covering the entire face depict severe weather conditions, such as blasting white snow or streaks of blue rain with bolts of lightning. A sharp hand clap activates the effects of protection from energy for 10 minutes; the type of energy must be chosen when the paint is applied. Trigger: Craft (painting) DC 16; hand clap (move action). Faint abjuration; CL 5th; Craft Wondrous Item, protection from energy; Weight —.",
  }),
  M({
    id: "face-paint-warpaint",
    name: "Face Paint, Warpaint",
    cost: "2,430 gp",
    summary:
      FRAME +
      " A simple design, warpaint consists of parallel horizontal red bars. A primal scream activates the magic, granting the wearer the effects of both haste and rage for 9 rounds. Trigger: Craft (painting) DC 20; primal scream (standard action). Moderate transmutation; CL 9th; Craft Wondrous Item, haste, rage; Weight —.",
  }),
  M({
    id: "face-paint-webwalker",
    name: "Face Paint, Webwalker",
    cost: "675 gp",
    summary:
      FRAME +
      " An elaborate design of webbing done in white lines covers the user's black-painted face, hands, and feet; each cheek bears a red hourglass, and the red silhouette of a spider is drawn on the backs of the user's hands and feet. Once he presses together his fingertips, a web spell immediately goes off (in a location determined by the wearer within 150 feet) and the wearer gains the ability to spider climb (as the spell). Both effects last for 30 minutes. Trigger: Craft (painting) DC 16; finger tips pressed together (move action). Faint conjuration; CL 5th; Craft Wondrous Item, spider climb, web; Weight —.",
  }),
  M({
    id: "face-paint-whirlwinds-arrow",
    name: "Face Paint, Whirlwind's Arrow",
    cost: "135 gp",
    summary:
      FRAME +
      " Her face and hands are painted yellow, two red arrows stripe each cheek, and a red bull's eye marks the back of each hand. To trigger the magic, the user must spin around in place twice, arms outstretched, pointing with one hand; once she finishes the spins she unleashes a magic missile that deals 1d4+1 points of damage to the pointed-at target. A second magic missile can be delivered by spinning again and pointing with the other hand. Trigger: Craft (painting) DC 14; spinning motion (standard action; provokes attacks of opportunity). Faint evocation; CL 3rd; Craft Wondrous Item, magic missile; Weight —.",
  }),
  M({
    id: "face-paint-wolfs-wariness",
    name: "Face Paint, Wolf's Wariness",
    cost: "675 gp",
    summary:
      FRAME +
      " His face is painted the gray and white patterns of a wolf; the user bears a black X within a circle on the back of each hand. Clasping hands together activates the magic, granting the user the ability to detect snares and traps, both natural and mechanical (but not magical), as the spell detect snares and pits, for a period of 10 minutes. In addition to the normal workings of the spell, the user can also detect traps made of metal or other inorganic materials as well as complex mechanical traps. Trigger: Craft (painting) DC 16; clasping hands (move action). Faint divination; CL 5th; Craft Wondrous Item, detect snares and pits; Weight —.",
  }),
];
