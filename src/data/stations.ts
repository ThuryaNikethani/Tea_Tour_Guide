/** A single distinct item within a section, e.g. one product on a "products" page. */
export interface StationSubItem {
  heading: string;
  body: string;
  image?: string | string[];
  /** Short pipe-separated highlights, e.g. "100% Natural | No Artificial Flavors | Rich Aroma". */
  tags?: string;
}

export interface StationSection {
  heading: string;
  body: string;
  /** A single page can show one image, or a couple side by side (e.g. two product photos). */
  image?: string | string[];
  /** When set, renders each as its own card (image + heading + body + tags) instead of one blended paragraph. */
  items?: StationSubItem[];
}

export interface Station {
  id: string;
  order: number;
  name: string;
  shortName: string;
  /** lucide-react icon name used on the station directory card. */
  icon: string;
  /** Real, verified content sourced from the factory's own site vs. generic placeholder copy. */
  verified: boolean;
  /** ISO date (YYYY-MM-DD) this station's facts were last checked against the source. Only set for `verified: true` stations. */
  lastVerified?: string;
  /** Simple stations (placeholder ones) use description/keyPoints/duration. */
  description?: string;
  keyPoints?: string;
  duration?: string;
  /** Rich stations (Tea Nursery) use a full-bleed hero video/image plus ordered sections. */
  heroVideo?: string;
  heroTagline?: string;
  sections?: StationSection[];
  processVideo?: string;
  virtualTourUrl?: string;
}

/**
 * Per-language overrides for a station's text. `sectionHeadings`/`sectionBodies`
 * line up by index with `Station.sections` — image and order stay the same
 * across languages, only the text swaps. See src/data/translations.ts for
 * which of these are real (factory-verified) vs. machine-translated.
 */
export interface StationTranslation {
  name?: string;
  heroTagline?: string;
  sectionHeadings?: string[];
  sectionBodies?: string[];
  /** Indexed [sectionIndex][itemIndex] — only needed for sections that use `items` (see StationSection). */
  itemHeadings?: string[][];
  itemBodies?: string[][];
  itemTags?: string[][];
  description?: string;
  keyPoints?: string;
  duration?: string;
}

import prepaImg from "../assets/nursery/prepa-WnVZlTRI.jpeg";
import soil1Img from "../assets/nursery/soil1-CWcvC-F8.png";
import fillingImg from "../assets/nursery/filling-DzWgtuDC.png";
import preImg from "../assets/nursery/pre-Cw0O8LPA.png";
import netImg from "../assets/nursery/net-CeM99paf.png";
import transImg from "../assets/nursery/trans-_636LT1K.png";
// Real, factory-labelled photos of the specific TRI cultivars grown in this
// nursery — each signpost is legible in the photo itself.
import tri4049Img from "../assets/nursery/gallery/pla1-DxzHBDYN.jpg";
import tri3069Img from "../assets/nursery/gallery/pla2-DHcKY4nG.jpg";
import tri4053Img from "../assets/nursery/gallery/pla3-Dk5ZTCwz.jpg";
import tri3055Img from "../assets/nursery/gallery/pla4-CxT3mr36.jpg";
import tri2022Img from "../assets/nursery/gallery/pla5-BlOJ1RbK.jpg";
import tri2043Img from "../assets/nursery/gallery/pla9-moj4O07C.jpg";
import tri4006Img from "../assets/nursery/gallery/pla13-CsUH1VFU.jpg";
import tri3025Img from "../assets/nursery/gallery/pla17-CN4UIDLb.jpg";
// Real photos from the factory's own cinnamon plantation and product line.
import cinnamonTreeImg from "../assets/cinnamon/cinnamon-tree.webp";
import cinnamonFruitImg from "../assets/cinnamon/cinnamon-fruit.jpg";
import cinnamonPlantationImg from "../assets/cinnamon/cinnamon-plantation.jpg";
import cinnamonLeavesImg from "../assets/cinnamon/cinnamon-leaves.webp";
import cinnamonTeaBoxImg from "../assets/cinnamon/cinnamon-tea-box.jpg";
import flavouredCinnamonTeaImg from "../assets/cinnamon/flavoured-cinnamon-tea.jpg";
// Real photos from the factory's own ginger plantation and product line.
import gingerPlantImg from "../assets/ginger/ginger-plant.jpg";
import gingerRhizomeImg from "../assets/ginger/ginger-rhizome.jpg";
import gingerField1Img from "../assets/ginger/ginger-field-1.jpg";
import gingerField2Img from "../assets/ginger/ginger-field-2.webp";
import gingerTeaBoxImg from "../assets/ginger/ginger-tea-box.jpg";
import flavouredGingerTeaImg from "../assets/ginger/flavoured-ginger-tea.jpg";
// Real photos from the factory's own bee/pollinator microsite. Each file is
// pre-cropped to this station's banner/pair aspect ratio so the whole bee
// stays in frame instead of being cut off by the object-cover crop.
import beeFlightImg from "../assets/bee/bee-flight.jpg";
import beeOnYellowFlowerImg from "../assets/bee/bee-on-yellow-flower.jpg";
import beePollenBasketImg from "../assets/bee/bee-pollen-basket.jpg";
import beeWildflowerImg from "../assets/bee/bee-wildflower.jpeg";
// Openly-licensed stock photos (Wikimedia Commons) illustrating the generic
// peeling tools — not photos of this factory's own tools. See the provenance
// note near the "cinnamon" station below for sourcing and licenses.
import scraperToolImg from "../assets/cinnamon/tools/scraper.jpg";
import peelingKnifeToolImg from "../assets/cinnamon/tools/peeling-knife.jpg";
import brassRodToolImg from "../assets/cinnamon/tools/brass-rod.jpg";
import kaththaToolImg from "../assets/cinnamon/tools/kaththa.jpg";
import kathuraToolImg from "../assets/cinnamon/tools/kathura.jpg";
import angiliKopuwaToolImg from "../assets/cinnamon/tools/angili-kopuwa.jpg";
import measuringRodToolImg from "../assets/cinnamon/tools/measuring-rod.jpg";

/**
 * The "nursery" station's images and videos are real — sourced from the
 * factory's own live site (tea-tourism-guide.netlify.app). Its section text
 * conveys the same real facts as that site (pH ranges, measurements,
 * product names, steps) but is written in fresh, original wording rather
 * than copied verbatim, per the user's 2026-08-19 instruction: only take
 * images/video directly from the source, write unique content around them.
 * On 2026-08-28 it was enriched with a second real source: a recording of
 * the estate's own guide narrating this exact stop. Rather than replacing
 * anything, the new facts were merged in only where they filled a real gap
 * — a new opening section on why propagation happens here at all (VP clone
 * terminology, the 95% field-establishment rate, seed- vs. cutting-grown
 * history), a new "Growth Timeline" section giving the 0–3 / 3–6 / 12–18
 * month stage overview the existing steps never stated outright, and a
 * lead-in sentence on the Tea Cultivars section naming the TRI 2000 series
 * and T65 as clones the estate favours. The existing steps (site selection,
 * bed prep, cutting selection, per-cultivar signposted entries, and the
 * Transplanting section's own six-to-twelve-month planting-age figure) were
 * left untouched rather than overwritten with the guide's rounder numbers,
 * since both are plausible descriptions of the same process at different
 * levels of detail and neither is clearly wrong.
 * The "introduction" station's facts (1824 Peradeniya planting, the 1869
 * coffee rust collapse, the seven tea-growing regions) are likewise real,
 * sourced from a physical "Story of Ceylon Tea" signboard photographed
 * on-site at the estate on 2026-08-26, rewritten rather than copied verbatim.
 * The "cinnamon" station's facts and the two product photos are sourced
 * from the factory's own cinnamon microsite (cinnamon-atf.netlify.app) on
 * 2026-08-26 — rewritten rather than copied verbatim. Only the two branded
 * product-packaging photos were reused here; the rest of that site's plant
 * photography was skipped because at least one image there (a leaf close-up)
 * carried a visible third-party watermark ("tradewindsfruit.com"). The user
 * confirmed on 2026-08-26 that the remaining plant/plantation photos are the
 * factory's own, so those were added too (tree, fruit, leaves, plantation
 * row); the watermarked photo itself was still excluded. Its "Peeling
 * Cinnamon: Tools & Process" section, added on 2026-08-31, started out with
 * four guessed/generic tool names (including a fabricated "Whetstone" that
 * isn't actually part of the traditional toolkit); the user then supplied a
 * labelled reference photo of the real tool set — Kaththa, Gaana Kokaththa,
 * Thalana Kokaththa, Piththala Danda, Kathura, Angili Kopuwa, and a
 * measuring rod — and the item list was corrected to match on 2026-08-31.
 * Descriptions of what each tool does are still standard, well-documented
 * Ceylon cinnamon-peeling knowledge rather than confirmed against this
 * factory's own process — swap in the factory's own explanations once
 * available. All seven items now have a photo. Gaana Kokaththa and Thalana
 * Kokaththa kept their earlier generic web-search finds, chosen only from
 * openly-licensed Wikimedia Commons results (matched by function, not by
 * name): "Skrobaki.jpg" (public domain) and "JA Henckels Twin Cuisine line
 * peeling knife.JPG" (public domain), respectively — neither depicts this
 * factory's actual tools. The other five (Piththala Danda, Kaththa, Kathura,
 * Angili Kopuwa, Measuring Rod) crop the matching labelled item out of the
 * same tools-display-board photo on Sri Lanka's official Department of
 * Cinnamon Development site (cinnamon.gov.lk) that the user's own reference
 * photo also came from — that site's only copyright line is a generic
 * web-agency footer with no open license attached, so treat these five as
 * lower-confidence provenance than the Commons two, and swap them out if a
 * better-licensed source turns up. All seven photos were padded (never
 * cropped into the subject) with a colour sampled from each photo's own
 * edges to a shared 3:2 aspect ratio, purely so the item cards stay a
 * consistent size next to each other — the same uncropped `h-auto`
 * item-image treatment used everywhere else in the app. (The Measuring Rod
 * crop was additionally rotated 90°, since a thin vertical rod padded out
 * to a 3:2 landscape frame shrank to an illegible sliver; rotated to run
 * horizontally, it reads clearly at the same aspect ratio.) The earlier
 * dropped "Whetstone" image ("Whetstone Knife Sharpening, 2015-(01).jpg"
 * by Didriks, CC BY 2.0) and its asset file were removed along with the
 * fabricated item it illustrated. The "Cinnamon Tea Products" section body
 * was extended on 2026-08-31 to frame the factory's teas as a value-added
 * use of cinnamon, plus a closing sentence naming other value-added goods
 * (bark/leaf oil, powder, oleoresin) the wider cinnamon industry typically
 * makes — general industry knowledge, not a claim about this factory's own
 * product line, which is still just the two confirmed cinnamon teas.
 * The "ginger-turmeric" station (now "Ginger Plantation") was similarly
 * sourced from the factory's ginger microsite (ginger-atf.netlify.app) on
 * 2026-08-26 — rewritten rather than copied verbatim. One image there (a
 * top-down leaf shot) carried a visible "dreamstime" stock-photo watermark
 * and was excluded; the rest are the factory's own. That site only covers
 * ginger, not turmeric, so turmeric was split out into its own separate
 * "turmeric" station (kept unverified, as before) rather than guessing at
 * verified turmeric facts that don't exist yet.
 * The "bee" station's facts are likewise sourced from the factory's own
 * pollinator microsite (bee-atf.netlify.app) on 2026-08-26, rewritten rather
 * than copied verbatim. That site's photos are professional-quality macro
 * shots (studio lighting, extreme focus-stacking) unlike the casual phone
 * photography on the cinnamon/ginger sites, so they were initially withheld
 * pending confirmation; the user confirmed on 2026-08-26 that these were
 * taken on their own farm, so four were added (intro, characteristics, and
 * a pair for habitat/behaviour). Every one of the four is pre-cropped
 * (before being imported here) to the exact aspect ratio its slot renders
 * at — 2.86:1 for the two single-image banners, 1.41:1 for the side-by-side
 * habitat pair — centred on the bee's own bounding box rather than the
 * photo's centre, so the component's object-cover crop has nothing left to
 * trim and the whole insect stays in frame. An earlier extreme close-up
 * (just the compound eyes/antennae) was dropped entirely since no crop of
 * it read as a recognisable bee once squeezed into the banner ratio.
 * The "artisanal-tea-grades" station's facts come from a recording the user
 * made of the estate's own tour guide narrating a field visit on 2026-08-28,
 * transcribed and lightly reworded rather than copied verbatim. That same
 * recording's origin-story and seven-region material duplicated what the
 * "introduction" station already covers (verified against the on-site
 * signboard on 2026-08-26) almost word-for-word, so only the new part — the
 * artisanal grades (Silver/Golden Tips, white tea, purple/pink teas) — was
 * added as its own station; no photos were supplied for it.
 * The "shade-management" station was upgraded the same way from a generic
 * placeholder to `verified: true` using a second recording from the same
 * 2026-08-28 field visit, specifically about the estate's low-shade vs.
 * high-shade (Albizia) tree layers — again transcribed and lightly
 * reworded, not copied verbatim. The low shade tree is a single species
 * known by three local names (Makulatha, Ladappa, Vatamara), not three
 * separate species, per the user's 2026-08-28 correction.
 * The "clonal-tea" station was similarly upgraded from a generic placeholder
 * to `verified: true` on 2026-08-31, using a transcript the user supplied of
 * a Sinhala dialogue (with English translation) from another on-site video
 * clip, in which the estate's own staff explain why TRI-bred clonal
 * varieties differ — bred for drought or rain tolerance and yield, or for
 * the distinctive red-/green-tipped young buds used in hand-made specialty
 * teas — that the widely-planted high-yield cultivars in the dialogue are
 * TRI 2023, TRI 2025, and TRI 2026, that those specialty buds fetch roughly
 * Rs. 100 more per kilogram than standard leaf, and that TRI numbers are
 * just assigned identifiers rather than release years. This is a distinct
 * set of cultivars from the ones signposted in the "nursery" station's "Tea
 * Cultivars" trial plots (TRI 4049, 3069, 3055, 4053, 2022, 2043, 3025),
 * which were left untouched.
 * The "plucking" station was upgraded from a generic placeholder to
 * `verified: true` on 2026-08-31 using a transcript the user supplied of a
 * third on-site video dialogue, in which estate staff explain the actual
 * plucking standard here — locally called "deka hamara" (two and a half
 * leaves), often three and a half, rather than the stricter "two leaves and
 * a bud" rule generic sources quote — and that black tea and green tea are
 * plucked to a different leaf count (the dialogue doesn't say how; that
 * detail is still missing). `keyPoints` and `duration` weren't contradicted
 * by the dialogue, so they're unchanged.
 * The "sorting" station was upgraded the same way on 2026-08-31, from a
 * transcript of a fourth on-site dialogue in which the guide explains: Green
 * and Black Tea come from the same bush and leaf, differing only by the
 * fermentation step Black Tea goes through (this factory's own output is
 * mostly Black Tea); grading separates dried leaf by which part of the
 * original shoot it came from in a single machine pass, from FBOPF Extra
 * Special (the tender tip, ~2% of each shoot, the priciest grade) down
 * through BOP and Pekoe to Dust (the most mature leaf, mostly destined for
 * flavoured tea bags) and Refuse (unusable stalks and scraps, discarded).
 * This replaced the earlier generic claim that grading is "not really about
 * quality," which the dialogue directly contradicts — grade tracks position
 * on the shoot, and higher/more-tender leaf is explicitly worth more. The
 * grade names used in the dialogue (FBOPF Extra Special, BOP, Pekoe, Dust,
 * Refuse) replaced the placeholder's generic "Orange Pekoe, Broken Orange
 * Pekoe" examples, which weren't actually said on camera.
 * The "artisanal-tea-grades" station's `lastVerified` was bumped to
 * 2026-08-31 after a fifth on-site dialogue transcript filled in specifics
 * the 2026-08-28 recording hadn't covered: the distinctive purple-hued
 * shoot these grades mostly come from gets its colour from anthocyanin;
 * Golden Tip is picked from that shoot's fully matured bud and Silver Tip
 * from the same shoot's paler, immature bud; White Tea takes two and a half
 * leaves, steamed and dried rather than fermented and rolled; and most of
 * these grades are actually finished by hand at the separate
 * "handmade-factory" station rather than the main black tea line, which is
 * why they're called "artisanal" in the first place. Purple and pink tea's
 * own process is mentioned as being covered "at the handmade tea factory"
 * but wasn't actually explained in this dialogue, so it's still not
 * documented — don't guess at it. Blooming Tea and flower-infused blends
 * (lotus was the example given) were added as additional real products from
 * the same shoots. The "handmade-factory" station was upgraded from a
 * generic placeholder to `verified: true` the same day using the same
 * transcript, adding the specific list of grades finished there.
 * The remaining 5 manufacturing-process stations (withering, rolling,
 * fermentation, drying, packing) are standard Ceylon tea-production
 * knowledge — supplementary content the old site doesn't cover at all,
 * added deliberately to fill out the tour. Each is marked `verified: false`
 * and the UI shows a caution banner, since none of it is yet confirmed
 * against Athukorala's own actual
 * process. Swap in real, factory-specific content for those as soon as it's
 * available.
 * The "pruning" station was added new on 2026-09-01 (there was no existing
 * station covering tea bush pruning), sourced from a short on-site video
 * dialogue in which estate staff explain that the bush is deliberately left
 * to grow out before pruning starts, letting nourishment build up in the
 * bush first — that's the one fact in the dialogue, so the content stays
 * brief rather than padding it out with unconfirmed detail (e.g. how long
 * the rest period lasts, or how often the estate prunes, aren't mentioned
 * and weren't guessed at). Added `verified: true` since it's sourced the
 * same way as plucking/sorting/artisanal-tea-grades this week. Appended at
 * the end of the array with `order: 26` rather than renumbering nearby
 * stations, since existing `order` values are already non-sequential
 * relative to array position (e.g. "turmeric" is order 23 but sits right
 * after "ginger-turmeric," order 11) — order numbers appear to be assigned
 * once and kept stable rather than re-sorted when new stations are added.
 * The user separately confirmed on 2026-09-01 that pruned bushes are cut
 * back to roughly knee height, added as a closing clause on `description`.
 * The "polytunnel" station was likewise added new on 2026-09-01 (no
 * existing station covered it), sourced two ways: an on-site video dialogue
 * confirms the estate has a greenhouse already and is setting up a
 * polytunnel that isn't in use yet, planned for bell peppers, tomatoes, and
 * similar vegetables; the guest-experience angle — that villa/cabana guests
 * will be able to freshly pick vegetables grown here — was stated directly
 * by the user, not the dialogue, and is written in future tense since the
 * polytunnel isn't operational yet. `order: 27`, appended at the end for
 * the same reason as "pruning" above.
 * On 2026-09-01 the user supplied a transcript of a full guided walkthrough
 * of the main factory floor, which upgraded six stations at once —
 * "tea-factory" (the overview), "withering", "rolling", "fermentation",
 * "drying", and "packing" — all to `verified: true` ("sorting" was already
 * verified from the 2026-08-31 tea-grades dialogue and just got one more
 * sentence added). Specifics added: withering uses large fans and is what
 * staff call the "modern" process; rolling breaks the leaf into small
 * particles as well as twisting it; fermentation here specifically takes
 * about 1.5 hours (replacing the generic 1.5–3 hour placeholder range);
 * drying is noticeably hot on the factory floor; the grading machinery
 * includes a camera-based colour separator that distinguishes leaf from
 * flower and other debris; and the packing area shows real grades side by
 * side — Dust for tea bags, OP1, Pekoe, BOP, and OP — with OP1/OP popular in
 * Arabic-speaking markets and Pekoe in Russia/Iran, packed in foil-lined
 * bags printed with the company's logo, registration number, the Ceylon Tea
 * Symbol, and its food certificate. The transcript also corrected a wrong
 * assumption in the old "packing" placeholder text, which implied the
 * factory ships tea "around the world" directly — the guide states plainly
 * that they don't export directly, selling instead through the Colombo Tea
 * Auction to buyers who handle export themselves. One transcription
 * artifact was silently corrected rather than reproduced: the ASR heard the
 * company name as "Oakray Tea Factory," which is obviously a mishearing of
 * "Athukorala Tea Factory" — the name used consistently everywhere else in
 * this app and confirmed by the guide's own mention of "ATF," the Ceylon
 * Tea Symbol, and the food certificate in the same breath.
 * A second, longer factory-floor transcript (also 2026-09-01, a different
 * guided walkthrough) added more detail on top of the above:
 * - "fermentation": adds that a humidifier keeps the room's air moist enough
 *   for oxidation to proceed, and that the colour comes from natural
 *   oxidation only — no dyes or added colour, a point the guide states
 *   explicitly later in the same tour. Its `duration` changed from a flat
 *   "about 1.5 hours" to a "1.5 to 2.5 hours" range: this second dialogue
 *   states 2.5 hours for the same step. Rather than picking one transcript
 *   over the other, both real, guide-stated figures are kept as a range,
 *   consistent with `keyPoints` already saying timing "has to be judged
 *   precisely" — i.e. it varies by batch. `keyPoints` also gained a
 *   step-by-step comparison of the tea types made here: black tea
 *   (withering → rolling → fermentation → firing) vs. green tea (withering
 *   → rolling → drying, no fermentation, described as milder and mostly
 *   drunk for its medicinal character) vs. white tea (skips both withering
 *   and fermentation, straight from fresh leaf to steaming and drying).
 *   Oolong tea is mentioned only as something this factory does NOT make —
 *   the guide describes it, unprompted by a visitor question, as a
 *   black-tea-like fermented style made by repeated steaming and
 *   hand-brushing rather than machine rolling; kept as a brief aside since
 *   it's explicitly not part of this factory's own process.
 * - "artisanal-tea-grades": the White Tea clause was tightened to say it
 *   "skips withering entirely," matching this transcript's more explicit
 *   description of the White Tea process; `lastVerified` bumped to
 *   2026-09-01.
 * - "drying": adds a specific temperature, "around 240°C," for the firing
 *   dryer. Provenance note: this figure was stated by the visitor, not the
 *   guide — the guide's reply ("What they say about that is...") was cut
 *   off in the transcript before confirming or correcting it. Treated as
 *   real but slightly lower-confidence than guide-stated facts, phrased as
 *   "reportedly" rather than asserted outright.
 * - "sorting": adds two more real pieces of grading machinery beyond the
 *   camera-based colour separator already documented: sieves of different
 *   mesh sizes separating particles by size across multiple passes, and an
 *   electrostatic separator that charges leftover brown stalk fragments on
 *   rollers so they can be pulled aside. Also adds the guide's explicit
 *   confirmation, in response to a visitor's direct question, that no dyes
 *   or artificial colour are used anywhere in the process.
 * The transcript's Stage 1 (leaf-crushing/rolling overview) and parts of
 * Stage 3 weren't specific enough to add — vague phrases like "two rollers
 * needed for the back process" and an unfinished exchange about whether
 * firing "creates" the golden colour weren't clear enough to state as fact,
 * so nothing was added from those parts rather than guessing at their
 * meaning.
 * A third transcript (2026-09-01, in the packing/export area) added more to
 * "packing": a new grade name, SFOPE1 ("Flowery Tippy" — the tip pieces
 * from the very top of the shoot, prized more for delicate character than
 * strength); that bag weight varies by grade because a fixed-size bag
 * holds more of a dense grade like Dust (~58kg) than a bulkier one like OPE
 * (~30kg); and a fuller, more accurate export picture than the earlier
 * placeholder's "sells through the Colombo Tea Auction" line — mostly the
 * factory hands finished tea to Colombo brokers (real, clearly-stated names
 * Forbes & Walker, Akbar Brothers, and Finlays came up) who bring it to
 * auction for buyers, who often re-export it under their own brand after
 * adding further value, but direct export under the Athukorala name itself
 * does happen too, for occasional special buyer orders (a China buyer was
 * given as an example). `keyPoints` gained the market-matching point: which
 * part of the shoot a grade comes from is matched to each export market's
 * palate (e.g. Arabic-speaking markets requesting specific grades), and the
 * finest export grades aren't part of everyday local drinking habits.
 * One transcription detail was deliberately left out rather than guessed
 * at: a second broker name, heard as "Barclays," doesn't match any known
 * Colombo tea broker clearly enough to confidently correct (unlike the
 * earlier "Oakray" → "Athukorala" fix, there's no strong same-sentence
 * corroboration here), so only the clearly-stated names were kept.
 * A fourth transcript (2026-09-01, filmed inside the Handmade Tea Factory
 * itself) filled in process detail for "handmade-factory": withering there
 * uses a small trough with natural airflow (not the main factory's forced
 * fans), monitored with a hygrometer, down to roughly 50% moisture; leaf is
 * then hand-rolled on a tray by feel, though small mechanical "mini
 * rollers" substitute for hand-rolling on bulk orders since hand-rolling
 * alone can't keep pace. It also named a new specialty product, "Vita
 * Glow," made from the green-hued shoot's bud (distinct from Golden/Silver
 * Tip's purple-hued shoot), and — importantly — finally answered a question
 * left open on 2026-08-31: the guide initially says Purple Tea is
 * fermented, then immediately self-corrects to "not fermented, straight to
 * drying," matching White Tea's process. The corrected statement is what's
 * recorded here; `artisanal-tea-grades`'s Purple Tea clause was updated to
 * match, and its Pink Tea process remains undocumented since this
 * transcript didn't cover it either. Also added: a specific hand-rolled
 * black-tea "ring" item (about two shoots per ring, ~25g per person per
 * day, hence its expense) that's mostly bought as a souvenir by wealthy
 * overseas tea enthusiasts rather than used for everyday local drinking —
 * consistent with the export-market-mismatch theme already documented on
 * "packing".
 * A fifth transcript (2026-09-01, walking the same handmade building) added
 * a bit more to "handmade-factory": a dedicated green tea machine that
 * steams and presses that grade separately (noted as out of service for a
 * minor repair at the time of filming — a snapshot, not a permanent state,
 * included anyway since it's what the guide actually said); the building's
 * small oven doing double duty as a bakery for tea-based snacks like
 * biscuits; and its small dryers also handling other small-batch products
 * — cardamom, cloves, ginger, and Innala (a local sweet potato) were all
 * named as currently drying there alongside the tea. The dialogue also
 * confirmed explicitly that handmade output, including Purple Tea, is
 * mostly made to order in small batches rather than continuous bulk
 * production, which is now in `keyPoints`.
 * The "pahatharata-manufacturing" station was upgraded from a generic
 * placeholder to `verified: true` on 2026-09-01, not from a new transcript
 * but by recognising it had become redundant with facts already confirmed
 * elsewhere: the "rolling" station's real, dialogue-sourced detail that
 * leaf here is broken down into "small particles" (rather than twisted
 * into whole orthodox leaf) is the defining trait of CTC processing, which
 * this station's placeholder text already named generically. Rather than
 * duplicating the plucking/rolling/sorting detail a third time, the
 * description was rewritten to point back at the stage-by-stage stations
 * earlier in the tour as the evidence for the low-country/CTC framing,
 * rather than re-explaining it from scratch.
 * A sixth transcript (2026-09-01, at the handmade building's dryers)
 * sharpened the drying detail on "handmade-factory": the "small dryers"
 * mentioned generically before are specifically two units — one
 * traditional firewood-fired, one electric — each with 34 trays, used for
 * tea right after rolling and confirmed again (ginger, cardamom) as the
 * same dryers used for other small-batch products.
 * A seventh transcript (2026-09-01, at the tea center) built out that
 * station from a one-line generic placeholder to `verified: true`, and along
 * the way resolved two questions earlier entries in this comment had left
 * open. First, the Purple Tea fermentation question: the fourth transcript's
 * guide had self-corrected mid-sentence to "not fermented, straight to
 * drying," which was recorded as-is at the time. This seventh, separate
 * dialogue states — clearly and deliberately, contrasted directly against
 * White Tea's "skips withering and fermentation" process and Pink Tea's own
 * — that Purple Tea goes through the full black-tea process: withering,
 * rolling, and fermenting. Given a choice between an ambiguous verbal
 * stumble and a later, explicit, contrastive explanation, the latter is
 * trusted; "artisanal-tea-grades" and "handmade-factory" were both updated
 * to move Purple Tea into the fermented category, reversing the earlier
 * placement. Second, Pink Tea's process — undocumented since the
 * 2026-08-31 dialogue only said it was covered "at the handmade tea
 * factory" without actually explaining it — is now answered: Pink Tea
 * starts out colourless like White Tea, and only turns pink once a couple
 * of drops of lime are added, the citrus triggering a colour change in the
 * same anthocyanin pigment that gives the purple-hued shoot its colour; a
 * couple of drops of honey are also typical, and it's recommended served as
 * iced tea. The purple-hued shoot itself finally got a specific ID, TRI
 * 2043, a Tea Research Institute clone — the same clone number already
 * listed among the "nursery" station's unrelated trial-plot cultivars, now
 * confirmed as the one behind Golden Tip, Silver Tip, Pink Tea, Purple Tea,
 * and White Tea. On "handmade-factory", the generic "hand-rolled black-tea
 * ring" item from the fourth transcript was given its real name, Flower
 * Chakra, alongside a second small-batch specialty, Tea Coin — both limited
 * to about 25g per person per day by hand, hence their expense. For the tea
 * center itself: a tasting/QC panel checks batches for defects
 * (over-fermentation, under-fermentation, scorching) not just here but
 * whenever tea moves to the local market or comes in for packing, tasting
 * by a wine-tasting-style method (smell, then a slurp to draw air across the
 * tongue, spitting rather than swallowing, up to 50 teas a day) though
 * visitors are welcome to actually drink what they sample; Flower Chakra and
 * Tea Coin are displayed here and, unlike standard once-boiled black tea,
 * can be re-infused up to three times at about 80°C rather than boiling
 * (roughly 2, 5, and 8 minutes per steep); proper brewing takes 2.5–3
 * minutes covered, not a quick dip; BOPF and BOPF Special are the
 * everyday-local grades, while Dust and Dust 1 never go to export and are
 * what typically ends up, with added colouring, in cheap supermarket tea
 * bags (blended with bought-in tea, unlike this estate's own unblended
 * output); the finest grades (FF Extra Special, FF Special, FBOP) are only
 * about 1% of the harvest and sell around $25/100g against $5–6/200g for
 * bulkier OPA/OP; white tip particles add sweetness and skew toward European
 * buyers, while Arabic markets prefer a stronger cup; and beyond tea, the
 * estate blends its own tea (~90%) with local herbs (~10%) — gotukola,
 * heenbovitiya, moringa — and makes Masala (a seven-spice recipe naming
 * cardamom, cinnamon, ginger, and black pepper, the rest kept secret by the
 * guide), Cinnamon, and Ginger spice teas, with masala or BOP recommended
 * for milk tea. One aside from the transcript — a Jaffna-style pouring
 * custom the guide mentioned — was left out as a cultural tangent rather
 * than a tea-production fact relevant to this stop.
 */
export const STATIONS: Station[] = [
  {
    id: "introduction",
    order: 1,
    name: "Introduction to Ceylon Tea",
    shortName: "Introduction",
    icon: "Mountain",
    verified: true,
    lastVerified: "2026-08-26",
    virtualTourUrl: "https://ceylonteatourism.com/",
    description:
      "Since the early 1800s, the name \"Ceylon\" has been synonymous with tea. The history of Ceylon tea runs back to the British rule in Sri Lanka over two hundred years ago. The first recorded tea plant in Sri Lanka arrived in 1824, when the British brought a tea plant from China and planted it in Peradeniya's Royal Botanical Garden for non-commercial use. A few years later, more tea crops were brought down from Assam and Calcutta for experimental purposes. However, the actual birth of tea plantations in Sri Lanka came as the result of the death of the island's one successful coffee industry: in 1869, Sri Lanka's flourishing coffee plantations were struck by a new plant disease named coffee rust, and the coffee enterprise in Sri Lanka was wiped out in less than a decade. Thus began the mass cultivation of tea in Sri Lanka.",
    keyPoints:
      "The story of Ceylon tea started on a 19-acre plot of land in Kandy as part of a diversification experiment. Through the years, it grew into seven tea-growing regions, which include Kandy, Uva, Ruhuna (South), Udapussellawa, Nuwara Eliya, Dimbula, and Sabaragamuwa. High-grown tea (above roughly 1,200m, as in Nuwara Eliya and Uva) tends to be delicate and aromatic; low-grown tea (below about 600m, as produced here) is typically stronger and darker — this estate is a low-country, or 'Pahatharata,' producer.",
    duration: "5-10 minutes",
  },
  {
    id: "nursery",
    order: 2,
    name: "Tea Nursery",
    shortName: "Nursery",
    icon: "Sprout",
    verified: true,
    lastVerified: "2026-08-28",
    heroVideo: "/videos/up-BFVRBJ77.mp4",
    heroTagline: "Follow along step by step as we grow a tea plant from cutting to field-ready sapling.",
    processVideo: "/videos/w-2xBsbRpT.mp4",
    sections: [
      {
        heading: "Why We Propagate Here",
        body: "Rather than growing tea plants directly in the open fields, the estate propagates uniform, high-quality VP (Vegetatively Propagated) clone saplings here under controlled conditions — a single-leaf cutting taken from a proven mother bush, rooted and raised until it's strong enough for the field. Sri Lanka's tea was traditionally grown from seed, but modern plantations use cuttings almost exclusively today, since cloning preserves the exact traits of a proven parent bush. The extra care this nursery gives young plants pays off: roughly 95% of the saplings that leave it go on to establish successfully once transplanted.",
      },
      {
        heading: "Site Selection",
        body: "Choosing where to build a nursery starts with the wind and the sun. The spot needs shelter from prevailing winds, yet enough daylight for young plants to draw warmth from it — in cooler zones that usually means maximizing sun exposure, while warmer zones call for a bit of shade instead. Low ground that floods in the rains or catches frost in the dry season is off the table, and a reliable water source nearby is non-negotiable. The soil itself should drain freely and crumble easily underhand — in humid tropical climates, well-drained ground typically shows a reddish tint. Before committing to a site, both the topsoil and the layer beneath it get tested for pH: anything from 4.5 to 5.8 will work, though 4.5 to 5.5 is where growers aim.",
      },
      {
        heading: "Nursery Preparation",
        image: prepaImg,
        body: "Once a site is chosen, the nursery itself is built as close to it as possible, cutting down on how far soil has to be hauled. The ground for the beds should be flat or only gently sloped — and if it does slope, the beds run along the contour lines rather than straight down the hill. Each bed comes in at 1.07 metres (3.5 feet) wide, however long is convenient, with a foot-wide walking path on either side. Workers dig down 38 centimetres (15 inches), pack the bottom with 5 to 7 centimetres of rubble and stone for drainage, then backfill with soil until the bed sits 15 to 23 centimetres above the surrounding ground — sandy plots can skip the drainage layer entirely. The finished bed slopes gently toward the drains so water has somewhere to go.",
      },
      {
        heading: "Nursery soil",
        image: soil1Img,
        body: "The growing medium itself needs to sit between pH 4.5 and 5.5, stay free of pests and disease, hold water well without staying waterlogged, and drain cleanly. Counterintuitively, it shouldn't be too rich either — overly fertile soil throws off a seedling's growth and can hurt quality down the line. Both soil layers get pH-tested before anything goes into a sleeve, and nothing above pH 5.5 makes the cut. Guatemala or Mana soil, jungle soil, subsoil, and soil taken from existing tea land all work well here, prized for their drainage, organic content, and general compatibility with young tea plants.",
      },
      {
        heading: "Filling sleeves",
        image: fillingImg,
        body: "Seedlings grow in gauge-150 clear polythene sleeves, open at both ends, sized at 23 centimetres tall by 10 centimetres wide. Each one gets 20 to 30 small holes punched along the sides for drainage before anything goes in. Filling is a balance — the soil needs to be packed firm without turning hard, and kept evenly damp throughout, because dry soil simply falls out of an open-ended sleeve, and soil that's dried out inside one is brutally hard to re-wet later. Roots, hard clumps, and stones all get sorted out of the soil before it goes anywhere near a sleeve.",
      },
      {
        heading: "Preparation Of Cuttings",
        image: preImg,
        body: "Cuttings come from vigorous, upright shoots on mother bushes at least four years old — three to four months of growth in the low country, six to eight months at higher elevations. Anything showing flower buds, pests, or disease gets passed over. Growers use the semi-hardwood section of the shoot, trimming away both the woody end and the too-soft tip, to prepare single-node cuttings: one leaf, one axillary bud, roughly 1 to 1.5 inches long. The cutting is taken in the shade and dropped into water right away, with a clean, angled cut made just above the node and another 1 to 1.5 inches below it, close to the bud.",
      },
      {
        heading: "Planting the Cuttings",
        body: "Before a cutting goes in, the soil gets a light misting and a gentle press-down. The cutting itself is held between thumb and forefinger and pushed straight down into the soil until the leaf axil sits at the surface — planting it at an angle isn't recommended.",
      },
      {
        heading: "Care after planting cuttings",
        image: netImg,
        body: "Shade is everything in the weeks right after planting — without it, cuttings wilt and scorch in the sun, and humidity drops too fast. A low canopy of Gleichenia linearis fern handles light shading; for heavier coverage, growers stretch coir matting or synthetic netting over a 1.8-metre iron frame, which costs more but pays off in easier nursery management. How often to water depends on climate, soil, the age of the plant, and how much shade it's under — more frequently in dry spells, less during the rains, since overwatering invites moss and disease. Fertilizer only starts once roots have taken hold — six to eight weeks in for the low country, ten to twelve weeks at altitude — using T65 MAP or T65 DAP. In the run-up to transplanting, plants are gradually toughened up by cutting back both water and shade starting around the four-to-six-month mark, readying them for life in the open field.",
      },
      {
        heading: "Growth Timeline",
        body: "From cutting to field-ready sapling generally follows three broad stages. In the rooting phase, roughly the first 0 to 3 months, cuttings are kept under high-humidity polythene tents or covers to stop moisture loss while roots develop. Once rooted, plants enter a hardening and maturation phase, around 3 to 6 months, where they're gradually exposed to ambient air and sunlight to prepare them for open-field conditions. By around 12 to 18 months, nursery plants have typically built a strong root system and multiple leaves, making them ready for transplanting into the main fields.",
      },
      {
        heading: "Land Preparation for Transplanting",
        image: transImg,
        body: "Land destined for new tea has to roll gently, drain well, run deeper than 50 centimetres of topsoil, and carry less than 20 percent rock — steep ground, dead-flat ground, eroded patches, and rocky land near paddy fields or streams are all ruled out. Clearing starts with winch machines pulling out old growth, with particular attention to anything infected with Poria root disease; infected roots are then dug out deep and burned, dolomite goes down at 1,250 kilograms per hectare, and the whole operation works from the highest point of the slope downward. Soil-conservation rules apply throughout — no work during heavy rain, land cleared in small blocks, and planting done immediately after to keep erosion in check. Where the soil needs rehabilitating, Guatemala or Mana grass goes in for 18 to 24 months first, rebuilding fertility, starving out pests and disease, clearing toxins left by earlier crops, improving soil structure, and mulching the ground to hold moisture.",
      },
      {
        heading: "Transplanting",
        body: "Transplanting begins early in the monsoon. The rehabilitation grass is cut down at ground level and laid along the contour rows, and tea goes in between those original grass rows at a spacing of 1.2 by 0.6 metres. The theoretical planting density could run higher, but drains, terraces, paths, and access roads inevitably eat into the count, so the working minimum is 11,000 plants per hectare — about 4,500 per acre. Planting holes or trenches are marked out along the contour using an 'A'-frame or a road tracer, dug to size, and packed with compost or other organic matter two to three weeks ahead of planting. Only healthy, vigorous plants aged six to twelve months go in, and in areas with a nematode problem, a nematicide like Furadan or Nemacur goes into each hole at 7 grams. Once planted, cut grass serves as mulch between the rows, stakes brace young plants against the wind, and low, creeping cover crops such as Desmodium ovalifolium or Stylosanthus gracilis help hold the soil in place.",
      },
      {
        heading: "Tea Cultivars",
        image: tri4049Img,
        body: "The estate favours high-yielding, pest-resistant clones bred by the Tea Research Institute (TRI) — including varieties from the TRI 2000 series and T65 — for how reliably they perform in the local soil and weather. Among the cultivars grown here, TRI 4049 stands out — a high-yielding variety bred by the Tea Research Institute of Sri Lanka and best suited to mid- and low-elevation estates. It's a vegetatively propagated cultivar of Camellia sinensis, known in the field for vigorous growth, deep green foliage, and solid resistance to the diseases that trouble other varieties. The liquor it produces is bright and aromatic, working equally well for CTC and orthodox manufacture, which is why it's become a go-to choice when replanting or expanding commercial acreage.",
      },
      {
        heading: "TRI 3069",
        image: tri3069Img,
        body: "A few rows over, this signposted plant is TRI 3069 — another Tea Research Institute-registered cultivar, grown side by side with TRI 4049 so the nursery can compare how each performs on this particular soil before either one gets planted out at scale.",
      },
      {
        heading: "TRI 3055",
        image: tri3055Img,
        body: "TRI 3055 sits in the same trial rows. Every cultivar plot here is tagged and tracked individually, which is how the factory builds up its own evidence for which varieties are actually worth expanding, rather than going on reputation alone.",
      },
      {
        heading: "TRI 4053",
        image: tri4053Img,
        body: "TRI 4053 rounds out the cultivar trial plots pictured here. Keeping several registered varieties growing side by side, each clearly labelled, is standard practice on the estate before committing a cultivar to a full field.",
      },
      {
        heading: "TRI 2022",
        image: tri2022Img,
        body: "TRI 2022 is planted in the same cultivar trial section, its signpost tagged and tracked just like its neighbours. Growing several registered varieties side by side on identical ground is how the nursery builds real evidence of which ones perform best here.",
      },
      {
        heading: "TRI 2043",
        image: tri2043Img,
        body: "TRI 2043 stands a little further down the row. Like the other numbered plants in this trial plot, it's being grown out and monitored before any decision is made about planting it out at scale.",
      },
      {
        heading: "TRI 4006",
        image: tri4006Img,
        body: "TRI 4006 is one more entry in the same cultivar trial. The nursery keeps each variety in its own clearly marked spot, which makes it easy to track and compare growth over time.",
      },
      {
        heading: "TRI 3025",
        image: tri3025Img,
        body: "TRI 3025 marks the edge of the trial plot, next to a bilingual 'Tea Cultivars' signboard and a dated planting plaque. Together, the labelled plants here form the nursery's working record of which cultivars are worth expanding.",
      },
    ],
  },
  {
    id: "plucking",
    order: 3,
    name: "Plucking",
    shortName: "Pluck",
    icon: "Hand",
    verified: true,
    lastVerified: "2026-08-31",
    description:
      "Every leaf begins in the tea garden, where pluckers hand-pick each shoot down to what staff call 'deka hamara' — two and a half leaves — often three and a half, rather than a strict two-leaves-and-a-bud count. This fine plucking standard is what gives Ceylon tea its delicate character — coarser leaves are left on the bush. The exact leaf count plucked differs between black tea and green tea.",
    keyPoints:
      "Only the youngest growth is used. Hand plucking protects the bush and selects the leaves with the highest concentration of flavour compounds, something machines can't replicate at this quality level.",
    duration: "Leaves are plucked daily, year-round, and rushed to the factory within hours to stay fresh.",
  },
  {
    id: "withering",
    order: 4,
    name: "Withering",
    shortName: "Wither",
    icon: "Wind",
    verified: true,
    lastVerified: "2026-09-01",
    description:
      "Fresh leaves are spread thinly across long troughs, where large fans force air through them to steadily remove moisture — what the estate calls the 'modern' withering process. The leaf turns limp and pliable, ready for rolling without shattering.",
    keyPoints:
      "Withering evens out moisture across the leaf and lets natural enzymes begin the chemical changes that will later create the tea's aroma and colour.",
    duration: "This stage typically takes 12 to 17 hours, depending on humidity and airflow.",
  },
  {
    id: "rolling",
    order: 5,
    name: "Rolling",
    shortName: "Roll",
    icon: "RotateCw",
    verified: true,
    lastVerified: "2026-09-01",
    description:
      "Withered leaves pass through rolling machines that twist and break the leaf's cell walls, releasing the juices and oils locked inside and breaking the leaf down into small particles. This is where the leaf's shape and the tea's strength are formed.",
    keyPoints:
      "Breaking the cell walls exposes enzymes to oxygen, kicking off oxidation. How hard and how long the leaf is rolled shapes the final tea's strength and appearance.",
    duration: "Rolling usually runs for 45 minutes to an hour, often in multiple passes.",
  },
  {
    id: "fermentation",
    order: 6,
    name: "Fermentation (Oxidation)",
    shortName: "Ferment",
    icon: "FlaskConical",
    verified: true,
    lastVerified: "2026-09-01",
    description:
      "Rolled leaf is spread out in a cool, humid room and left to oxidise, with a humidifier keeping the air moist enough for the reaction to happen. The green leaf gradually turns a coppery brown as it develops the colour, body, and aroma associated with black tea — entirely from natural oxidation, with no dyes or added colour.",
    keyPoints:
      "This is the single most important step for flavour. Timing has to be judged precisely — too little and the tea is thin, too much and it turns flat and dull. It's also what separates the tea types made here: black tea goes withering, rolling, fermentation, then firing, while green tea skips fermentation entirely (withering, rolling, drying only) and is milder — mostly drunk for its gentler, more medicinal character; white tea skips both withering and fermentation, going straight from fresh leaf to steaming and drying. The factory doesn't produce Oolong tea, which the guide describes as a black-tea-like fermented style made by repeated steaming and hand-brushing rather than machine rolling.",
    duration: "At this factory, fermentation typically takes 1.5 to 2.5 hours depending on conditions, before the leaf moves on to drying.",
  },
  {
    id: "drying",
    order: 7,
    name: "Drying (Firing)",
    shortName: "Dry",
    icon: "Flame",
    verified: true,
    lastVerified: "2026-09-01",
    description:
      "The oxidised leaf passes through hot-air dryers — reportedly running at around 240°C — that halt oxidation instantly and lock in the tea's character. What comes out the other end is the familiar black, crisp tea leaf. Visitors notice the heat immediately — it's one of the warmest stops on the factory floor.",
    keyPoints:
      "Firing stops the chemical changes at exactly the right moment and reduces moisture to about 2-3%, which is essential for the tea to stay fresh during storage and shipping.",
    duration: "Leaf passes through the dryer in around 20 minutes at carefully controlled temperatures.",
  },
  {
    id: "sorting",
    order: 8,
    name: "Sorting & Grading",
    shortName: "Sort",
    icon: "Filter",
    verified: true,
    lastVerified: "2026-09-01",
    description:
      "Green Tea and Black Tea both start from the very same bush and leaf — what actually separates them is fermentation (oxidation), a step Black Tea goes through that Green Tea skips. This factory's production is mostly Black Tea. As dried leaf passes through the grading machinery, it's separated in a single pass by which part of the original shoot it came from: the tender, easily-snapped tip and topmost leaves — only about 2% of each shoot — become FBOPF Extra Special, the finest and most expensive grade, while leaf further down becomes solid grades like BOP and Pekoe. The most mature, lowest leaf becomes Dust, and any unusable stalks and scraps are discarded as Refuse. That grading machinery includes a colour separator with a camera system that can tell apart particles like leaf and flower, filtering out anything that doesn't belong. Sieves of different mesh sizes further separate particles by size over several passes, and an electrostatic separator gives any remaining brown stalk fragments a static charge on rollers so they can be pulled aside — none of this colour or character comes from dyes or additives, only natural processing.",
    keyPoints:
      "Value follows position on the shoot, not just leaf size — the higher and more tender the leaf, the higher its grade and price. Dust grade, not the premium leaf, is what typically ends up in flavoured tea bags; the finest grades like FBOPF Extra Special are rarely sold locally because of how much they're worth on export markets.",
    duration: "Sorting runs continuously on machinery and takes roughly 30 to 45 minutes per batch.",
  },
  {
    id: "packing",
    order: 9,
    name: "Packing",
    shortName: "Pack",
    icon: "Package",
    verified: true,
    lastVerified: "2026-09-01",
    description:
      "Graded tea is weighed, tasted for quality, and sealed into moisture-proof packaging lined with aluminium foil, printed with the factory's name and logo, its registration number, the Ceylon Tea Symbol, and its food safety certificate. The packing area is where several finished grades sit side by side — Dust (destined mainly for tea bags), OP1, Pekoe, BOP (Broken Orange Pekoe), and OP (Orange Pekoe) — with OP1 and OP especially popular across Arabic-speaking markets and Pekoe well known in Russia and Iran. The rarest and most valuable grade made here is SFOPE1, a 'Flowery Tippy' grade named for the pale, silvery tip pieces it contains from the very top of the shoot — prized more for its delicate character than raw strength. Bag weights vary by grade too: a fixed-size bag holds far more of a fine, dense grade like Dust (around 58kg) than a bulkier, leafier grade like OPE (around 30kg). Mostly, the factory hands its finished tea to Colombo tea brokers — names like Forbes & Walker, Akbar Brothers, and Finlays came up — who bring it to the Colombo Tea Auction, where buyers purchase it and often export it under their own brand after adding further value; direct export under the Athukorala name itself does happen too, but mainly for occasional special orders from overseas buyers.",
    keyPoints:
      "Airtight packing protects the tea from moisture and odours, preserving the flavour that was carefully built through every earlier stage of the process. Different countries want different things from their tea — some prefer a strong, astringent cup, others don't — so which part of the shoot a grade comes from is effectively matched to each export market's palate; Arabic-speaking markets, for instance, specifically request grades that aren't part of everyday drinking habits back home. Selling mostly through brokers rather than exporting directly means outside buyers usually handle onward international shipment and branding.",
    duration: "The final batch is packed and ready for dispatch the same day it's graded.",
  },
  {
    id: "cinnamon",
    order: 10,
    name: "Cinnamon Plantation",
    shortName: "Cinnamon",
    icon: "TreePine",
    verified: true,
    lastVerified: "2026-08-26",
    heroTagline: "From a fragrant evergreen tree to the factory's own cinnamon teas.",
    sections: [
      {
        heading: "About the Cinnamon Tree",
        image: cinnamonTreeImg,
        body: "Cinnamomum verum — sold as 'true cinnamon' or Ceylon cinnamon — is a small evergreen tree in the laurel family, native to Sri Lanka and southern India. It's the tree's inner bark that matters commercially: peeled, dried, and rolled into the familiar cinnamon quills. Given well-drained soil and steady tropical rainfall, the tree also yields leaves and an essential oil valued in cooking and traditional medicine worldwide.",
      },
      {
        heading: "Characteristics",
        image: cinnamonFruitImg,
        body: "A quick look at the tree itself:",
        items: [
          { heading: "Height", body: "Up to 10 to 15 metres tall." },
          { heading: "Leaves", body: "Glossy, oval leaves 7 to 18 centimetres long, each marked by three prominent veins and releasing a spicy scent when crushed." },
          { heading: "Flowers", body: "Small, greenish-white to yellow flowers, arranged in loose, mildly fragrant panicles." },
          { heading: "Fruit", body: "A small, dark purple-to-black drupe about a centimetre long, containing a single seed." },
          { heading: "Habitat", body: "Tropical evergreen forest, with warm conditions and well-drained loamy soil." },
        ],
      },
      {
        heading: "Peeling Cinnamon: Tools & Process",
        body: "Harvested shoots are left to rest for about a day so the bark loosens before peeling begins — a skill passed down through generations of peelers. The tools involved are simple but essential:",
        items: [
          { heading: "Kaththa (Large Knife)", image: kaththaToolImg, body: "A large, hook-shaped knife used to cut the harvested shoots to length and split the bark lengthwise before the fine peeling work begins." },
          { heading: "Gaana Kokaththa (Scraper)", image: scraperToolImg, body: "A short-handled hooked tool drawn along the shoot to scrape off the thin, rough outer bark before the real peeling starts — 'gaanawa' means 'to scrape' in Sinhala." },
          { heading: "Thalana Kokaththa (Peeling Knife)", image: peelingKnifeToolImg, body: "A small, curved blade used to score the loosened inner bark along its length and lift it away from the woody stem in a single strip — 'thalanawa' means 'to peel' in Sinhala." },
          { heading: "Piththala Danda (Brass Rod)", image: brassRodToolImg, body: "A smooth, rounded metal rod worked in beneath the scored bark to gently separate it from the wood along the full length of the shoot without tearing it." },
          { heading: "Kathura (Scissors)", image: kathuraToolImg, body: "Used to trim the peeled bark strips to a consistent length before they're rolled and dried into quills." },
          { heading: "Angili Kopuwa (Finger Guard)", image: angiliKopuwaToolImg, body: "A protective cover worn on the fingers to guard against cuts while handling the sharp peeling tools for hours at a stretch." },
          { heading: "Measuring Rod", image: measuringRodToolImg, body: "A calibrated rod used to measure and mark consistent lengths as the bark strips are cut and prepared for rolling." },
        ],
      },
      {
        heading: "Benefits",
        image: [cinnamonLeavesImg, cinnamonPlantationImg],
        body: "Cinnamon's value goes well beyond the kitchen:",
        items: [
          { heading: "Culinary Uses", body: "Used in both sweet and savoury dishes, drinks, and baking — Ceylon cinnamon has a milder, more delicate sweetness than the stronger, thicker-barked cassia varieties sold in many markets." },
          { heading: "Medicinal Properties", body: "Carries antioxidant, anti-inflammatory, and antimicrobial properties, traditionally used to help regulate blood sugar, support digestion, and promote heart health; its essential oil has a long history in traditional medicine and aromatherapy." },
          { heading: "Ecological Importance", body: "The trees add to the biodiversity of tropical forests, provide nectar for pollinators, and support agroforestry systems that let local farmers grow cinnamon alongside other crops sustainably." },
        ],
      },
      {
        heading: "Cinnamon Tea Products",
        body: "Rather than selling all of its cinnamon as a raw spice, the factory also uses it as a value-added ingredient in its own tea range — blending it into two premium cinnamon teas crafted from natural Sri Lankan cinnamon for a pure, aromatic experience. More broadly, the cinnamon industry typically turns the bark and leaves into other value-added goods too — bark and leaf oil for cooking, cosmetics, and aromatherapy, ground cinnamon powder, and food-grade oleoresin.",
        items: [
          {
            heading: "Cinnamon Tea",
            image: cinnamonTeaBoxImg,
            body: "Pure Ceylon cinnamon combined with fine tea leaves offers a warm, soothing beverage with subtle spice notes — ideal for relaxing after meals or starting your morning with a refreshing kick.",
            tags: "100% Natural | No Artificial Flavors | Rich Aroma",
          },
          {
            heading: "Flavoured Cinnamon Tea",
            image: flavouredCinnamonTeaImg,
            body: "A unique blend infused with natural cinnamon flavour and aromatic herbs, bringing out a harmony of sweetness, spice, and fragrance — one of the factory's signature blends.",
            tags: "Naturally Flavored | Smooth & Refreshing | Premium Quality",
          },
        ],
      },
    ],
  },
  {
    id: "ginger-turmeric",
    order: 11,
    name: "Ginger Plantation",
    shortName: "Ginger",
    icon: "Leaf",
    verified: true,
    lastVerified: "2026-08-26",
    heroTagline: "From a fragrant tropical rhizome to the factory's own ginger teas.",
    sections: [
      {
        heading: "About the Ginger Plant",
        image: gingerPlantImg,
        body: "Zingiber officinale — the ginger plant — is a perennial herb in the Zingiberaceae family, widely grown in tropical and subtropical regions including Sri Lanka and India. It's the underground rhizome that matters most: used as a spice and medicine for centuries. Ginger thrives in warm, humid climates with rich, well-drained soil, and plays a central role in traditional cuisine and herbal medicine across many cultures.",
      },
      {
        heading: "Characteristics",
        image: gingerRhizomeImg,
        body: "A quick look at the plant itself:",
        items: [
          { heading: "Height", body: "Up to 1 to 1.5 metres tall." },
          { heading: "Leaves", body: "Long, narrow, lance-shaped leaves 15 to 30 centimetres long, arranged alternately along the stem." },
          { heading: "Flowers", body: "Small, yellowish-green flowers with purple lips, borne on separate shoots emerging from the rhizome." },
          { heading: "Fruit", body: "Rarely produced in cultivation; a small capsule containing several seeds." },
          { heading: "Habitat", body: "Warm, humid climates with partial shade and fertile, well-drained soil." },
        ],
      },
      {
        heading: "Benefits",
        image: [gingerField1Img, gingerField2Img],
        body: "Ginger's value goes well beyond the kitchen:",
        items: [
          { heading: "Culinary Uses", body: "Fresh and dried ginger are essential in cuisines worldwide, used in curries, soups, sweets, beverages, and sauces for their pungent, spicy flavour and aroma." },
          { heading: "Medicinal Properties", body: "Contains bioactive compounds like gingerol with anti-inflammatory, antioxidant, and digestive benefits; commonly used to relieve nausea, improve digestion, and reduce cold symptoms." },
          { heading: "Ecological Importance", body: "Ginger cultivation supports sustainable farming systems, enriches soil biodiversity, and provides income for smallholder farmers in tropical regions." },
        ],
      },
      {
        heading: "Ginger Tea Products",
        body: "The factory produces two ginger tea blends, made from high-quality Sri Lankan ginger for a naturally spicy and refreshing experience.",
        items: [
          {
            heading: "Ginger Tea",
            image: gingerTeaBoxImg,
            body: "Pure Ceylon tea infused with natural ginger extract offers a revitalising and aromatic drink — perfect for soothing the throat and aiding digestion.",
            tags: "100% Natural | No Artificial Flavors | Rich Aroma",
          },
          {
            heading: "Flavoured Ginger Tea",
            image: flavouredGingerTeaImg,
            body: "A delightful fusion of ginger and herbal flavours, providing warmth, freshness, and balance in every sip — a true harmony of nature and flavour.",
            tags: "Naturally Flavored | Smooth & Refreshing | Premium Quality",
          },
        ],
      },
    ],
  },
  {
    id: "turmeric",
    order: 23,
    name: "Turmeric Plantation",
    shortName: "Turmeric",
    icon: "Leaf",
    verified: false,
    description:
      "Turmeric is grown alongside ginger and tea on many Sri Lankan estates. This stop covers how the rhizome is grown, harvested, and used in cooking and traditional medicine.",
    keyPoints:
      "Like ginger, turmeric is a rhizome crop harvested by digging up the root rather than picking leaves, valued both as a spice and for its use in traditional Ayurvedic medicine.",
    duration: "5-10 minutes",
  },
  {
    id: "bee",
    order: 24,
    name: "Honeybees",
    shortName: "Bees",
    icon: "Bug",
    verified: true,
    lastVerified: "2026-08-26",
    heroTagline: "Nature's tireless pollinator, hard at work across the estate.",
    sections: [
      {
        heading: "About the Honeybee",
        image: beeWildflowerImg,
        body: "Apis mellifera — the honeybee — is one of the world's most important pollinators, admired for its remarkable teamwork, honey production, and essential role in ecosystems everywhere. A small, striped insect with two pairs of wings, a stinger, and an excellent sense of smell, it has adapted to life in highly organised colonies found on nearly every continent.",
      },
      {
        heading: "Characteristics",
        image: beeFlightImg,
        body: "A quick look at what makes a honeybee tick:",
        items: [
          { heading: "Common Name", body: "Known simply as the honeybee." },
          { heading: "Speed", body: "Can fly at speeds of up to 15 mph (24 km/h)." },
          { heading: "Heart Rate", body: "A very high metabolism drives a heart rate of around 150 to 200 beats per minute." },
          { heading: "Wings", body: "Two pairs of transparent wings beat up to 230 times per second." },
          { heading: "Memory", body: "An excellent memory helps bees recognise flowers, hive locations, and scents." },
          { heading: "Main Features", body: "A small body with yellow and black stripes, two pairs of wings, a stinger, compound eyes, and a strong sense of smell." },
        ],
      },
      {
        heading: "Habitat & Behaviour",
        image: [beeOnYellowFlowerImg, beePollenBasketImg],
        body: "Where bees live, and why they matter:",
        items: [
          { heading: "Natural Habitat", body: "Found worldwide in meadows, gardens, woodlands, orchards, and farms, building hives in tree hollows, man-made structures, or underground cavities depending on the species." },
          { heading: "Diet & Behaviour", body: "Bees feed mainly on nectar for energy and pollen for protein. They're highly social insects, living in colonies with a queen, workers, and drones, and play a crucial role in pollination." },
          { heading: "Conservation Status", body: "Many bee populations are declining due to pesticide use, habitat loss, disease, and climate change, so conservation efforts now focus on sustainable farming, reducing pesticide use, and protecting natural habitats." },
        ],
      },
    ],
  },
  {
    id: "artisanal-tea-grades",
    order: 25,
    name: "Artisanal Tea Grades",
    shortName: "Artisanal Teas",
    icon: "Sparkles",
    verified: true,
    lastVerified: "2026-09-01",
    description:
      "In addition to standard black tea, the estate also produces rare, handcrafted artisanal teas — mostly finished by hand at the separate Handmade Tea Factory rather than the main black tea line, which is why these grades are also called 'Artisanal Tea Grades': it's closer to a craft than mass production. Many of them come from a distinctive purple-hued shoot — TRI 2043, a Tea Research Institute clone — whose colour comes from anthocyanin. Golden Tip uses that shoot's fully matured bud, while Silver Tip uses the same shoot's paler, still-immature bud. White tea takes two and a half leaves from the shoot and skips withering entirely — steamed and dried rather than fermented and rolled like black tea — for a very lightly processed, naturally sweet taste. Purple tea uses the same pluck but, unlike white tea, goes through the full black-tea process — withering, rolling, and fermenting. Pink tea starts out essentially colourless like white tea, and only turns pink once a couple of drops of lime are added — the citrus triggers a colour change in the same anthocyanin pigment that gives the shoot its hue; it also takes well to a couple of drops of honey and is recommended served as iced tea. Vita Glow is made instead from the ordinary green-hued shoot's bud rather than the purple one. The estate also crafts value-added blends — such as tea infused with lotus flowers — and hand-tied Blooming Tea from the same shoots.",
    keyPoints:
      "These artisanal grades are picked and processed in far smaller quantities than standard black tea, which is what makes them rarer and more prized — ask at the tasting counter to sample them. Either the purple-hued or the regular green shoot can be used for most of these grades, though the estate mostly uses the purple-hued one.",
    duration: "5 minutes",
  },
  {
    id: "pahatharata-manufacturing",
    order: 12,
    name: "Tea Manufacturing (Pahatharata)",
    shortName: "Pahatharata",
    icon: "Layers",
    verified: true,
    lastVerified: "2026-09-01",
    description:
      "Low-country ('Pahatharata') estates like this one process tea differently from high-grown estates further inland — and the estate's own manufacturing process, covered stage by stage earlier on this tour, bears that out: rolling here breaks the leaf down into small, dense particles rather than twisting it into whole orthodox leaf, the hallmark of CTC (Crush-Tear-Curl) processing. This stop is a quick recap of what that low-country approach means for plucking, processing, and grading.",
    keyPoints:
      "CTC (Crush-Tear-Curl) mechanically processes the leaf into small, dense granules, producing the strong, brisk character low-country Ceylon tea is known for — the same leaf particles seen earlier at the rolling and sorting stops on this tour.",
    duration: "10-15 minutes",
  },
  {
    id: "organic-cultivation",
    order: 13,
    name: "Organic Tea Cultivation",
    shortName: "Organic Tea",
    icon: "Recycle",
    verified: false,
    description:
      "Organic cultivation avoids synthetic pesticides and fertilizers. This stop covers what sets an organic tea plot apart from conventional cultivation.",
    keyPoints:
      "Organic certification typically requires several years of chemical-free cultivation before a plot can be certified, and yields are often lower than conventional plots.",
    duration: "5-10 minutes",
  },
  {
    id: "clonal-tea",
    order: 14,
    name: "Clonal Tea",
    shortName: "Clonal Tea",
    icon: "Gem",
    verified: true,
    lastVerified: "2026-08-31",
    description:
      "Some of the most sought-after teas come from clonal plants — cuttings propagated from a single exceptional parent bush rather than grown from seed. This stop covers how clonal tea is propagated and why it can command a premium price. The Tea Research Institute (TRI) breeds clonal varieties for different needs — some for drought or rain tolerance and higher yield, others for the distinctive red- or green-tipped young buds prized for hand-made specialty teas. Widely planted, high-yielding cultivars such as TRI 2023, TRI 2025, and TRI 2026 are common on both estates and in home gardens, while the rarer specialty cultivars are mostly grown on larger estates for handcrafted tea rather than everyday cultivation. Despite looking like years, these TRI numbers are simply assigned identifiers, not the year each cultivar was released.",
    keyPoints:
      "Clonal propagation preserves a prized plant's exact characteristics; the finest clonal teas are often produced in very limited quantities. Buds from the specialty red- or green-tipped cultivars are hand-picked for rare grades like Golden Tips and Silver Tips, and estates typically pay around Rs. 100 more per kilogram for them than for standard plucked leaf.",
    duration: "5-10 minutes",
  },
  {
    id: "organic-fertilizer",
    order: 15,
    name: "Organic Fertilizer Application",
    shortName: "Organic Fertilizer",
    icon: "Wheat",
    verified: false,
    description:
      "Healthy tea soil depends on regular fertilizing. This stop covers how organic fertilizers — compost, manure, and other natural amendments — are prepared and applied without synthetic chemical inputs.",
    keyPoints:
      "Organic fertilizers release nutrients more slowly than synthetic ones, which means application timing and soil health both matter more.",
    duration: "5 minutes",
  },
  {
    id: "shade-management",
    order: 16,
    name: "Shade Tree Management",
    shortName: "Shade Trees",
    icon: "Trees",
    verified: true,
    lastVerified: "2026-08-28",
    description:
      "Tea plants need balanced sunlight — too harsh and the leaves burn, too dark and they won't grow — so the estate manages this with two layers of shade trees planted among the bushes. The low shade tree — known locally as Makulatha (Ladappa, Vatamara) — is planted closer to the tea bushes to moderate ground temperature, retain soil moisture, and act as a natural windbreak. High shade trees such as Albizia are tall, wide-canopy trees that filter intense direct sunlight across large sections of the estate while enriching the soil with falling organic matter.",
    keyPoints:
      "Estate managers regularly prune both layers to fine-tune shade conditions for the season and altitude, tracking the botanical names and characteristics of each shade species alongside the tea cultivars to protect biodiversity and crop health.",
    duration: "5 minutes",
  },
  {
    id: "unique-fruits",
    order: 17,
    name: "Unique Fruits of Sri Lanka",
    shortName: "Unique Fruits",
    icon: "Citrus",
    verified: false,
    description:
      "Sri Lanka's climate supports a range of fruits not commonly seen elsewhere. This stop introduces some of the island's distinctive fruit varieties, often grown alongside tea and other estate crops.",
    keyPoints:
      "Sri Lanka's fruit varieties reflect its tropical, monsoon-influenced climate and centuries of cultivation across different elevation zones.",
    duration: "5 minutes",
  },
  {
    id: "tea-factory",
    order: 18,
    name: "The Tea Factory",
    shortName: "Tea Factory",
    icon: "Factory",
    verified: true,
    lastVerified: "2026-09-01",
    description:
      "The main factory building is where plucked leaf is turned into finished tea, from withering through to packing. This stop is an overview of the working factory floor and the equipment used at each stage — withering, rolling, fermentation (oxidation), drying, tea separating (grading), and final packing, in that order.",
    keyPoints:
      "A working tea factory runs the full withering-to-packing sequence under one roof, timed closely with each day's leaf intake.",
    duration: "10-15 minutes",
  },
  {
    id: "handmade-factory",
    order: 19,
    name: "Handmade Tea Factory",
    shortName: "Handmade Factory",
    icon: "HandHeart",
    verified: true,
    lastVerified: "2026-09-01",
    description:
      "Alongside mechanized production, some tea is processed entirely by hand rather than machine at every stage. Most of the estate's artisanal specialty grades — Golden Tip, Silver Tip, White Tea, Purple Tea, Pink Tea, Vita Glow (made from the green-hued shoot's bud, unlike Golden and Silver Tip's purple-hued one), hand-tied Blooming Tea, and flower-infused blends such as lotus tea — are finished here rather than in the main black tea factory. Withering happens naturally here, in a small trough monitored with a hygrometer rather than the main factory's forced-air fans, bringing moisture down to around 50% before rolling. Leaf is then hand-rolled on a tray, judged by feel rather than the clock; for larger bulk orders, small mechanical rollers step in for the same purpose, since hand-rolling alone can't keep pace with volume. A dedicated green tea machine — steaming and pressing the leaf — handles that grade separately, though it's currently out of service for a minor repair; the building's small oven doubles as a bakery for tea-based snacks like biscuits. Drying, done right after rolling, runs on two separate dryers here — one traditional firewood-fired, one electric — each holding 34 trays, and both are also put to use on other small-batch products, from cardamom, cloves, and ginger to Innala (a local sweet potato). This stop covers what distinguishes hand-made tea from factory-line production.",
    keyPoints:
      "Hand-rolling and hand-processing produce smaller batches with more variation between leaves, often prized for their distinct character. Handmade teas fall into two broad categories — fermented, black-tea-style ones (identifiable by their black colour), which include Purple Tea despite its unusual source shoot, and non-fermented ones like White Tea, which skip fermentation entirely and go straight to drying. The most labour-intensive items made here are two small-batch specialties — Flower Chakra, a hand-rolled black-tea ring using about two shoots each, and Tea Coin — a single person can hand-roll only around 25 grams of either a day, which is why they're so expensive and mostly bought as a souvenir by wealthy tea enthusiasts rather than used for everyday drinking. Most handmade output, including Purple Tea, is made to order in small batches rather than produced continuously in bulk.",
    duration: "10 minutes",
  },
  {
    id: "tea-center",
    order: 20,
    name: "Tea Center",
    shortName: "Tea Center",
    icon: "Coffee",
    verified: true,
    lastVerified: "2026-09-01",
    description:
      "The tour ends at the tea center, where a tasting panel checks every batch — not just here, but earlier too, whenever tea leaves the main factory for the local market or comes in for packing — for defects like over-fermentation, under-fermentation, or scorching, discarding anything that fails before it's sold. On display here are two more small-batch specialties from the handmade factory, Flower Chakra and Tea Coin. Artisanal teas like these can be re-infused up to three times using water heated to about 80°C rather than boiling — roughly 2, 5, and 8 minutes per steep with fresh hot water each time — unlike standard black tea, which is brewed once at full boiling point.",
    keyPoints:
      "Tasting follows a method similar to wine tasting — smelling first, then slurping to pull the tea across the taste buds on the sides of the tongue with a draw of air; the panel spits rather than swallows while tasting up to 50 teas a day, though visitors are welcome to actually drink what they try. Properly brewed black tea needs about 2.5 to 3 minutes of covered steeping, not just a quick dip. BOPF and BOPF Special are the grades most Sri Lankans actually drink day to day; Dust and Dust 1, the lowest grades, are never sent to export markets and are what typically ends up — with added colouring — in cheap supermarket tea bags, which is why the colour appears the instant they're dipped rather than after a proper steep. Much of what's sold in supermarkets is also blended with cheaper tea bought in from elsewhere, unlike the estate's own unblended, single-origin teas. The very finest grades — FF Extra Special, FF Special, FBOP — come from only about 1% of the harvest, the most immature part of the bud, and sell for around $25 per 100g; bulkier grades like OPA and OP run closer to $5-6 per 200g. The white tip particles visible in the finest grades add extra sweetness and mostly go to European buyers, while Arabic markets tend to prefer a stronger cup. Beyond tea, the estate blends its own green and black tea (about 90%) with local herbs (about 10%) — gotukola, heenbovitiya, and moringa — and makes Masala, Cinnamon, and Ginger spice teas from its own spices; the masala recipe uses seven Sri Lankan spices, including cardamom, cinnamon, ginger, and black pepper (the rest a kept secret), and masala or BOP tea is what's recommended for milk tea.",
    duration: "10-15 minutes",
  },
  {
    id: "coconut-field",
    order: 21,
    name: "Coconut Field",
    shortName: "Coconut Field",
    icon: "Palmtree",
    verified: false,
    description:
      "Coconut palms are grown across many Sri Lankan estates alongside tea, providing fruit, oil, and materials used throughout the property. This stop covers how coconut is grown, harvested, and used on the estate.",
    keyPoints:
      "A single coconut palm can bear fruit for decades, and nearly every part of it — the fruit, husk, shell, and leaves — is put to some use on a working estate.",
    duration: "5-10 minutes",
  },
  {
    id: "jaggery-palm",
    order: 22,
    name: "Jaggery Palm (Kithul)",
    shortName: "Jaggery Palm",
    icon: "Droplet",
    verified: false,
    description:
      "Sap tapped from the flower stalks of the kithul palm is boiled down into jaggery, a traditional Sri Lankan unrefined sugar. This stop covers how the sap is collected and processed into jaggery on the estate.",
    keyPoints:
      "Kithul jaggery is prized for its rich, caramel-like flavor and is a staple sweetener in Sri Lankan desserts; the same sap can also be fermented into toddy or distilled into arrack.",
    duration: "5-10 minutes",
  },
  {
    id: "pruning",
    order: 26,
    name: "Pruning",
    shortName: "Pruning",
    icon: "Scissors",
    verified: true,
    lastVerified: "2026-09-01",
    description:
      "Before pruning, the estate deliberately leaves the tea bush to grow out for a period rather than cutting it back right away — letting new growth come in fully so the bush builds up nourishment. Only once that build-up is complete does pruning begin, cutting the bush back down to roughly knee height.",
    keyPoints:
      "Letting the bush grow out first, rather than pruning on a fixed schedule regardless of condition, gives the plant time to channel nourishment upward before it's cut back.",
    duration: "5 minutes",
  },
  {
    id: "polytunnel",
    order: 27,
    name: "Polytunnel & Greenhouse",
    shortName: "Polytunnel",
    icon: "Carrot",
    verified: true,
    lastVerified: "2026-09-01",
    description:
      "Alongside an existing greenhouse, the estate is setting up a polytunnel that isn't in use yet — it's still being built out — for growing vegetables such as bell peppers and tomatoes. Once it's up and running, guests staying at the villa or cabana will be able to freshly pick vegetables grown here themselves.",
    keyPoints:
      "The polytunnel is still under construction rather than already in production, so there's nothing to pick just yet — check back once it's operational.",
    duration: "5 minutes",
  },
];

export function getStation(id: string): Station | undefined {
  return STATIONS.find((s) => s.id === id);
}

// Dev-only schema check — code-split out of the production bundle so it
// never runs (or ships) for real visitors. Fails loudly in `npm run dev`
// if a station is missing required fields, has a duplicate id/order, or
// is marked verified without a lastVerified date.
if (import.meta.env.DEV) {
  import("./stations.schema").then(({ stationsSchema }) => {
    const result = stationsSchema.safeParse(STATIONS);
    if (!result.success) {
      const issues = result.error.issues.map((issue) => `  - [${issue.path.join(".")}] ${issue.message}`).join("\n");
      throw new Error(`STATIONS data failed schema validation:\n${issues}`);
    }
  });
}
