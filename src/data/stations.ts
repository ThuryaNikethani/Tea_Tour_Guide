export interface StationSection {
  heading: string;
  body: string;
  image?: string;
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

/**
 * The "nursery" station's images and videos are real — sourced from the
 * factory's own live site (tea-tourism-guide.netlify.app). Its section text
 * conveys the same real facts as that site (pH ranges, measurements,
 * product names, steps) but is written in fresh, original wording rather
 * than copied verbatim, per the user's 2026-08-19 instruction: only take
 * images/video directly from the source, write unique content around them.
 * The 7 manufacturing-process stations below it (plucking through packing)
 * are standard Ceylon tea-production knowledge — supplementary content the
 * old site doesn't cover at all, added deliberately to fill out the tour.
 * Each is marked `verified: false` and the UI shows a caution banner, since
 * none of it is yet confirmed against Athukorala's own actual process.
 * Swap in real, factory-specific content for those as soon as it's
 * available.
 */
export const STATIONS: Station[] = [
  {
    id: "nursery",
    order: 1,
    name: "Tea Nursery",
    shortName: "Nursery",
    icon: "Sprout",
    verified: true,
    heroVideo: "/videos/up-BFVRBJ77.mp4",
    heroTagline: "Follow along step by step as we grow a tea plant from cutting to field-ready sapling.",
    processVideo: "/videos/w-2xBsbRpT.mp4",
    virtualTourUrl: "https://ceylonteatourism.com/",
    sections: [
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
        body: "Among the cultivars grown here, TRI 4049 stands out — a high-yielding variety bred by the Tea Research Institute of Sri Lanka and best suited to mid- and low-elevation estates. It's a vegetatively propagated cultivar of Camellia sinensis, known in the field for vigorous growth, deep green foliage, and solid resistance to the diseases that trouble other varieties. The liquor it produces is bright and aromatic, working equally well for CTC and orthodox manufacture, which is why it's become a go-to choice when replanting or expanding commercial acreage.",
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
    ],
  },
  {
    id: "plucking",
    order: 2,
    name: "Plucking",
    shortName: "Pluck",
    icon: "Hand",
    verified: false,
    description:
      "Every leaf begins in the tea garden, where pluckers hand-pick the bud and two tender leaves from each shoot. This fine plucking standard is what gives Ceylon tea its delicate character — coarser leaves are left on the bush.",
    keyPoints:
      "Only the youngest growth is used. Hand plucking protects the bush and selects the leaves with the highest concentration of flavour compounds, something machines can't replicate at this quality level.",
    duration: "Leaves are plucked daily, year-round, and rushed to the factory within hours to stay fresh.",
  },
  {
    id: "withering",
    order: 3,
    name: "Withering",
    shortName: "Wither",
    icon: "Wind",
    verified: false,
    description:
      "Fresh leaves are spread thinly across long troughs where air is drawn through them, steadily removing moisture. The leaf turns limp and pliable, ready for rolling without shattering.",
    keyPoints:
      "Withering evens out moisture across the leaf and lets natural enzymes begin the chemical changes that will later create the tea's aroma and colour.",
    duration: "This stage typically takes 12 to 17 hours, depending on humidity and airflow.",
  },
  {
    id: "rolling",
    order: 4,
    name: "Rolling",
    shortName: "Roll",
    icon: "RotateCw",
    verified: false,
    description:
      "Withered leaves pass through rolling machines that twist and break the leaf's cell walls, releasing the juices and oils locked inside. This is where the leaf's shape and the tea's strength are formed.",
    keyPoints:
      "Breaking the cell walls exposes enzymes to oxygen, kicking off oxidation. How hard and how long the leaf is rolled shapes the final tea's strength and appearance.",
    duration: "Rolling usually runs for 45 minutes to an hour, often in multiple passes.",
  },
  {
    id: "fermentation",
    order: 5,
    name: "Fermentation (Oxidation)",
    shortName: "Ferment",
    icon: "FlaskConical",
    verified: false,
    description:
      "Rolled leaf is spread out in a cool, humid room and left to oxidise. The green leaf gradually turns a coppery brown as it develops the colour, body, and aroma associated with black tea.",
    keyPoints:
      "This is the single most important step for flavour. Timing has to be judged precisely — too little and the tea is thin, too much and it turns flat and dull.",
    duration: "Oxidation is controlled closely and generally lasts 1.5 to 3 hours.",
  },
  {
    id: "drying",
    order: 6,
    name: "Drying (Firing)",
    shortName: "Dry",
    icon: "Flame",
    verified: false,
    description:
      "The oxidised leaf passes through hot-air dryers that halt oxidation instantly and lock in the tea's character. What comes out the other end is the familiar black, crisp tea leaf.",
    keyPoints:
      "Firing stops the chemical changes at exactly the right moment and reduces moisture to about 2-3%, which is essential for the tea to stay fresh during storage and shipping.",
    duration: "Leaf passes through the dryer in around 20 minutes at carefully controlled temperatures.",
  },
  {
    id: "sorting",
    order: 7,
    name: "Sorting & Grading",
    shortName: "Sort",
    icon: "Filter",
    verified: false,
    description:
      "Dried tea is sifted through a series of mesh sieves that separate it by leaf size and shape into grades such as Orange Pekoe, Broken Orange Pekoe, and Dust.",
    keyPoints:
      "Grading isn't about quality so much as leaf particle size, which affects brewing time and strength — this is how factories match tea to different markets and brewing styles.",
    duration: "Sorting runs continuously on machinery and takes roughly 30 to 45 minutes per batch.",
  },
  {
    id: "packing",
    order: 8,
    name: "Packing",
    shortName: "Pack",
    icon: "Package",
    verified: false,
    description:
      "Graded tea is weighed, tasted for quality, and sealed into moisture-proof packaging or tea chests, ready to travel from this factory to cups around the world.",
    keyPoints:
      "Airtight packing protects the tea from moisture and odours, preserving the flavour that was carefully built through every earlier stage of the process.",
    duration: "The final batch is packed and ready for dispatch the same day it's graded.",
  },
];

export function getStation(id: string): Station | undefined {
  return STATIONS.find((s) => s.id === id);
}
