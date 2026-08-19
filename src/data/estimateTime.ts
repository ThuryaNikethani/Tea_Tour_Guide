import type { Station } from "./stations";

const WORDS_PER_MINUTE = 200;
const MINUTES_PER_VIDEO = 1.5;

function countWords(text?: string): number {
  return text ? text.trim().split(/\s+/).filter(Boolean).length : 0;
}

/** Estimated minutes to read/watch a station's content, derived from its actual text length — not a fixed guess. */
export function estimateStationMinutes(station: Station): number {
  let words = countWords(station.description) + countWords(station.keyPoints);

  if (station.sections) {
    words += station.sections.reduce((sum, s) => sum + countWords(s.heading) + countWords(s.body), 0);
  }

  let minutes = words / WORDS_PER_MINUTE;
  if (station.heroVideo) minutes += MINUTES_PER_VIDEO;
  if (station.processVideo) minutes += MINUTES_PER_VIDEO;

  return Math.max(1, Math.round(minutes));
}

export function estimateTotalMinutes(stations: Station[]): number {
  return stations.reduce((sum, s) => sum + estimateStationMinutes(s), 0);
}
