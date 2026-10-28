# Superior Skill Synergy — accounting & integration spec

**Status: BUILT AND LIVE (2026-10-28 — Shaun tapped "Build it now").** House-rule toggle "Superior Synergy" in `src/engine/house-rules.ts` (default OFF), table + engine in `src/engine/skill-synergy.ts`, applied in the resolver's skill pass, notes rendered in the Skills step. Suite `~/race-split-work/verify-synergy.ts` 22/22 (thresholds, supersession, cross-source stacking, conditional-as-note, toggle-off no-op). One documented judgment call stands: specials persist across tiers and same-channel benefits supersede (module header). Feat synergy (Part 2) remains a separate follow-up, unbuilt.

## The source

- Shaun's file: **"Superior Skill Synergys.pdf"** (his spelling), 615 KB, in his Dropbox at `/A POC PC related/1.house rules for a poc/1.Main stuff/` — his APOC house-rules folder.
- The book: *Superior Skill Synergy*, Steven Trustrum, **Misfit Studios, © 2005**. Mechanics are declared Open Game Content; the publisher's trade dress is Product Identity (we use mechanics + citations only, as everywhere else in this app).
- Premise: standard synergy stops at 5 ranks (+2). This book adds benchmarks at **10, 15, and 20 ranks**.

## What the builder does today

Nothing — the engine applies **no** synergy bonuses at all (not even the standard PHB +2 at 5 ranks). Verified 2026-10-28: no synergy handling in `src/engine`, `src/lib`, or `src/components`.

## Part 1 — Superior skill synergy (the numbers, verified against the PDF text layer)

14 source skills, 4 tiers each = 56 tier blocks, all accounted below. Pure-bonus lines run the ladder **+2 (5) / +3 (10) / +4 (15) / +5 (20)**. Mixed lines carry a special benefit at 10 and 20 instead of the +3/+5.

| Source skill | 5 ranks | 10 ranks | 15 ranks | 20 ranks |
|---|---|---|---|---|
| Bluff | +2 Diplomacy, Intimidate, Sleight of Hand; +2 Disguise when observed & acting in character | Diplomacy attitude changes in ~½ time; Intimidate effect lasts 2d6×10 min; frisker's Search bonus +4→+2; may Bluff to cancel one failed Disguise vs a specific observer | +4 (same list as 5) | Diplomacy in ~¼ time; Intimidate lasts 3d6×10 min; frisker's Search bonus negated; Spot vs your Disguise on meeting + every 2 hrs (not hourly) |
| Craft (any) | +2 Appraise on items of that Craft | One Appraise retry (takes 2× as long) | +4 Appraise (same scope) | Two Appraise retries (each 2× the previous attempt) |
| Decipher Script | +2 UMD on scrolls | May use Decipher Script instead of UMD for "emulate an ability" with scrolls | +4 UMD on scrolls | Natural 1 on UMD scroll mishap: roll again; only a second natural 1 locks you out for 24 hrs |
| Escape Artist | +2 Use Rope (bind) | +3 | +4 | +5 |
| Handle Animal | +2 Ride, wild empathy | +3 | +4 | +5 |
| Jump | +2 Tumble | DC 15 Tumble: treat fall as 15 ft shorter | +4 Tumble | DC 15 Tumble: treat fall as 20 ft shorter |
| Knowledge (each subskill, below) | +2 | +3 | +4 | +5, except the three 20-rank specials noted |
| Search | +2 Survival (find/follow tracks) | Track-finding time halved (full-round → standard action) | +4 Survival (tracks) | Track-finding time ¼ (full-round → free action) |
| Sense Motive | +2 Diplomacy | +3 | +4 | +5 |
| Spellcraft | +2 UMD on scrolls | Familiar empathic link range → 2 miles | +4 UMD on scrolls | Familiar's granted bonus +1 |
| Survival | +2 Knowledge (nature) | +3 | +4 | +5 |
| Tumble | +2 Balance, Jump | Hop jump for 5 ft of movement; DC 10 Reflex to grab an edge when a long jump fails by <5 | +4 Balance, Jump | Jump speed modifier: −4 per 10 ft under 30 speed; **+6 per 10 ft over 30** |
| Use Magic Device | +2 Spellcraft to decipher scrolls | Learn spell from scroll in 4 hrs; decipher scroll = standard action | +4 Spellcraft to decipher scrolls | Learn spell from scroll in 2 hrs; decipher may be attempted twice/day — **book typo: the body text says "10 or more ranks"; the tier header (20) governs** |
| Use Rope | +2 Climb on ropes; +2 Escape Artist vs rope bonds | Accelerated-climb penalty only −2 on ropes; Escape Artist vs ropes takes 30 sec | +4 Climb on ropes; +4 Escape Artist vs rope bonds | Accelerated climb at ¾ speed (not ½); Escape Artist vs ropes takes 3 rounds |

**Knowledge subskills** (each runs the +2/+3/+4/+5 ladder on its target, with these targets):
arcana → Spellcraft · architecture & engineering → Search (secret doors/compartments) · geography → Survival (lost/hazards) · history → bardic knowledge · local → Gather Information · nature → Survival (aboveground natural environments) · nobility & royalty → Diplomacy · religion → turning checks vs undead · the planes → Survival (on other planes) · dungeoneering → Survival (underground).
**20-rank specials instead of +5:** architecture & engineering — Search for secret doors/compartments takes only a standard action · local — a typical Gather Information check takes 1d2 hours · nobility & royalty — Diplomacy checks take half the normal time.

Numbers cross-checked for internal consistency (ladder holds in all 10 Knowledge lines and all pure-bonus lines; 56 tier blocks found in the text = 14 skills × 4). At build time, re-verify the special tiers against page images before shipping.

## Part 2 — Feat synergy (also in the PDF)

Named **feat combinations** grant extra abilities (e.g., Acrobatic + Athletic: catch-yourself Climb DC is wall DC +10 instead of +20; the Enhanced Deflect Arrows combo: Combat Reflexes + Deflect Arrows + Improved Unarmed Strike + Lightning Reflexes). All qualitative — maneuvers and special cases, no sheet numbers. The book itself flags this section optional ("If you feel feat synergy treads too closely to replacing feats, simply ignore it"). **Accounting decision:** if built, treat like the body-modifications index — a cited index surfaced when a character holds the whole combo, no mechanical automation. Full combo enumeration is build-time work, verified against the PDF.

## Integration spec (when Shaun gives the go)

1. **Form: a house rule toggle "Superior Synergy"** — it is a rule from Shaun's house-rules folder, not content records; it does not belong to a book ruleset. Default **off**; the existing three house rules are untouched (settings lock respected — this adds, never alters). Like every toggle, it inherits through prefs and stays off until Shaun turns it on.
2. **Toggle ON:** the resolver computes synergy from the character's actual ranks per the table above — numeric bonuses at the 5/10/15/20 thresholds applied to the target skill totals (conditional scopes, e.g. "UMD on scrolls," shown in the skill breakdown), qualitative tier benefits listed as notes on the Skills step. The 5-rank tier **is** the standard PHB synergy, so it comes with the toggle.
3. **Toggle OFF:** exactly today's behavior — no synergy applied. No existing character changes unless Shaun flips the switch.
4. Data lives in one cited table file (every row cited to *Superior Skill Synergy*, Misfit Studios 2005, with Shaun's Dropbox path as sourceUrl). Feat-synergy index, if wanted, is a separate follow-up under the homebrew ruleset.
5. Tests: threshold suite (4/5/9/10/14/15/19/20 ranks per representative lines — pure ladder, mixed special, Knowledge subskill, Use Rope's two targets), plus a no-op suite proving toggle-off builds resolve identically to today.
