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

/**
 * The "nursery" station's text, images and videos are all real — sourced
 * from the factory's own live site (tea-tourism-guide.netlify.app), copied
 * on 2026-08-18. The 7 manufacturing-process stations below it (plucking
 * through packing) are standard Ceylon tea-production knowledge, not yet
 * confirmed against Athukorala's own actual process — each is marked
 * `verified: false` and the UI shows a caution banner on them for that
 * reason. Swap in real, factory-specific content for those as soon as it's
 * available; don't remove the stations themselves.
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
    heroTagline: "Let's take a step-by-step look at how to plant a healthy tea plant.",
    processVideo: "/videos/w-2xBsbRpT.mp4",
    virtualTourUrl: "https://ceylonteatourism.com/",
    sections: [
      {
        heading: "Site Selection",
        body: "The site should be well sheltered from the prevailing wind. Exposed to the sun so that the developing plants may benefit from the sun's warmth. In cold areas site should be chosen to maximize on the sun while in hot areas some sheltering from full sun's heat is essential. Low-lying areas which are susceptible to flooding during rains or frost attack during dry months should be avoided. Closeness to a good source of water is prerequisite. The locality's soil should be free draining and friable. Well-drained soils in the wet tropics are usually reddish in colour. Both the topsoil and sub-soil should be tested for pH. pH between 4.5 and 5.8 is ok but the optimal range from 4.5 to 5.5 is generally accepted.",
      },
      {
        heading: "Nursery Preparation",
        image: prepaImg,
        body: "To establish a nursery, choose a location near or on a suitable propagation site to minimize soil transportation. Select flat land or gently sloping land for bed preparation. If sloping land is used, construct the beds along the contours. Each bed should be 1.07 meters (3.5 feet) wide and of any convenient length, with a one-foot path on either side. Excavate the soil to a depth of 38 cm (15 inches), then fill the bottom with a 5–7 cm (2–3 inch) layer of rubble and stones for drainage, followed by soil to raise the bed 15–23 cm (6–9 inches) above ground level. However, the drainage layer is not required for sandy soils. The surface of the bed should have a gentle slope towards the drains for proper water flow.",
      },
      {
        heading: "Nursery soil",
        image: soil1Img,
        body: "A good soil media should have a pH range of 4.5 to 5.5, be free from pests and diseases, possess proper water holding capacity, and ensure good drainage. Additionally, it should not be too fertile, as excessive fertility can lead to imbalanced plant growth and reduced quality. Always test the pH of both topsoil and subsoil before use, ensuring that no soil with a pH exceeding 5.5 is utilized. For tea nurseries, suitable soil media include Guatemala or Mana soil, jungle soil, sub soil, and tea soil. These soils are chosen for their good drainage, organic content, and compatibility with tea plants, ensuring healthy seedling growth.",
      },
      {
        heading: "Filling sleeves",
        image: fillingImg,
        body: "For preparing nursery bags in tea planting, use gauge 150 transparent, two-side open polythene sleeves. The standard size is 23 cm (9 inches) in height and 10 cm (4 inches) in width. To ensure proper drainage, punch about 20–30 small holes on the sides of each sleeve. When filling sleeves, ensure the soil is packed firmly but not too hard or loose, and maintain consistent dampness. If the soil is dry before filling, it will easily fall out of spot-sealed sleeves. Allowing the soil in the sleeves to dry out will make re-wetting very difficult later. Before filling, remove all roots, hard soil lumps, and stones from the soil.",
      },
      {
        heading: "Preparation Of Cuttings",
        image: preImg,
        body: "For tea cuttings, select healthy, vigorously growing erect shoots from mother bushes over 4 years old, aged 3–4 months in low country and 6–8 months in up country. Reject shoots with flower buds or signs of pests and diseases. Use the semi-hardwood portion by removing the hard and soft ends, and prepare single-node cuttings with one leaf and one axillary bud, 1–1.5 inches in length. Cuttings should be taken in shade, placed in water immediately, and cut smoothly and slantly — just above the node and 1–1.5 inches below the node near the bud.",
      },
      {
        heading: "Planting the Cuttings",
        body: "Before planting, the soil should be lightly wetted and gently pressed. The stem of the cutting should be held between the thumb and forefinger and inserted vertically down into the soil up to the axil of the leaf. Slant method is not preferred.",
      },
      {
        heading: "Care after planting cuttings",
        image: netImg,
        body: "In tea nurseries, shading is crucial after planting to prevent wilting, sun scorch, and maintain humidity. Low shade is provided using Gleichenia linearis, while high shade involves coir matting or synthetic nets supported by a 1.8 m iron frame, which improves nursery operations despite higher costs. Watering depends on climate, soil, plant age, and shade, with more frequent watering in dry weather and less in rainy periods. Overwatering can cause moss and disease. Fertilizer application should begin after root initiation — 6–8 weeks in the low country and 10–12 weeks in the up country — using T65 MAP or T65 DAP. Before transplanting, plants are hardened by gradually reducing water and shade from 4–6 months onward to prepare them for field conditions.",
      },
      {
        heading: "Land Preparation for Transplanting",
        image: transImg,
        body: "When selecting land for new tea planting, undulating, well-drained areas with soil depth greater than 50 cm and less than 20% rockiness are ideal, while steep, flat, eroded, or rocky lands near paddy fields or streams should be avoided. Land preparation begins by removing old vegetation, especially in areas infected with Poria disease, using winch machines, followed by deep-forking and burning infected roots, applying dolomite at 1250 kg/ha, and starting from the highest slope. Soil conservation practices must be followed, such as avoiding work during heavy rains, preparing land in small blocks, and planting immediately to reduce erosion. Soil rehabilitation is done by growing Guatemala or Mana grass for 18–24 months to enhance fertility, control pests and diseases, eliminate toxins from previous crops, improve soil structure, and provide mulch for moisture retention.",
      },
      {
        heading: "Transplanting",
        body: "Tea planting should begin early in the monsoon season by cutting rehabilitation grasses at ground level and placing them along contour rows, with tea planted between the original grass rows at a spacing of 1.2 m × 0.6 m. Although theoretical plant density may be higher, practical factors like drains, terraces, paths, and roads reduce the number, so a minimum density of 11,000 plants/ha (4,500 plants/ac) should be maintained. Planting holes or trenches, marked using an 'A' frame or road tracer along contour lines, must be dug to the recommended size and filled with compost or organic matter 2–3 weeks before planting. Healthy, vigorous 6–12 month-old tea plants should be used, and in nematode-infested areas, a nematicide like Furadan or Nemacur (7g/hole) should be applied. After planting, grass loppings should be used as mulch between rows, stakes should be used to support plants against wind, and low creeping cover crops like Desmodium ovalifolium or Stylosanthus gracilis may be grown to reduce soil erosion.",
      },
      {
        heading: "Tea Cultivars",
        body: "TRI 4049 is a high-yielding tea cultivar developed by the Tea Research Institute of Sri Lanka, ideal for mid to low elevations. It is a vegetatively propagated variety of Camellia sinensis, known for its vigorous growth, dark green leaves, and resistance to common diseases. TRI 4049 produces bright, aromatic liquors suitable for both CTC and orthodox tea, making it a popular choice for replanting and commercial cultivation.",
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
