import type { LanguageCode } from "../i18n/languages";
import type { Station } from "./stations";
import { STATION_TRANSLATIONS } from "./translations";

/** Returns `station` with any text fields swapped for the given language's translation, where one exists. */
export function localizeStation(station: Station, lang: LanguageCode): Station {
  const tr = STATION_TRANSLATIONS[station.id]?.[lang];
  if (!tr) return station;

  return {
    ...station,
    name: tr.name ?? station.name,
    heroTagline: tr.heroTagline ?? station.heroTagline,
    description: tr.description ?? station.description,
    keyPoints: tr.keyPoints ?? station.keyPoints,
    duration: tr.duration ?? station.duration,
    sections: station.sections?.map((section, i) => ({
      ...section,
      heading: tr.sectionHeadings?.[i] ?? section.heading,
      body: tr.sectionBodies?.[i] ?? section.body,
      items: section.items?.map((item, j) => ({
        ...item,
        heading: tr.itemHeadings?.[i]?.[j] ?? item.heading,
        body: tr.itemBodies?.[i]?.[j] ?? item.body,
        tags: tr.itemTags?.[i]?.[j] ?? item.tags,
      })),
      fruits: section.fruits?.map((fruit, k) => ({
        ...fruit,
        name: tr.fruitNames?.[k] ?? fruit.name,
        sections: fruit.sections.map((fSection, fi) => ({
          ...fSection,
          heading: tr.fruitSectionHeadings?.[k]?.[fi] ?? fSection.heading,
          body: tr.fruitSectionBodies?.[k]?.[fi] ?? fSection.body,
          items: fSection.items?.map((fItem, fj) => ({
            ...fItem,
            heading: tr.fruitItemHeadings?.[k]?.[fi]?.[fj] ?? fItem.heading,
            body: tr.fruitItemBodies?.[k]?.[fi]?.[fj] ?? fItem.body,
          })),
        })),
      })),
    })),
  };
}
