import { z } from "zod";

/**
 * Mirrors the Station/StationSection interfaces in stations.ts. Only used
 * for dev-time validation (see the bottom of stations.ts) — never imported
 * by the production bundle.
 */
const stationSubItemSchema = z.object({
  heading: z.string().min(1),
  body: z.string().min(1),
  image: z.union([z.string(), z.array(z.string()).min(1)]).optional(),
  tags: z.string().optional(),
});

const stationSectionSchema = z.object({
  heading: z.string().min(1),
  body: z.string().min(1),
  image: z.union([z.string(), z.array(z.string()).min(1)]).optional(),
  items: z.array(stationSubItemSchema).optional(),
});

const stationSchema = z.object({
  id: z.string().min(1),
  order: z.number().int().positive(),
  name: z.string().min(1),
  shortName: z.string().min(1),
  icon: z.string().min(1),
  verified: z.boolean(),
  lastVerified: z.string().optional(),
  description: z.string().optional(),
  keyPoints: z.string().optional(),
  duration: z.string().optional(),
  heroVideo: z.string().optional(),
  heroTagline: z.string().optional(),
  sections: z.array(stationSectionSchema).optional(),
  processVideo: z.string().optional(),
  virtualTourUrl: z.string().optional(),
});

export const stationsSchema = z.array(stationSchema).superRefine((stations, ctx) => {
  const seenIds = new Set<string>();
  const seenOrders = new Set<number>();

  stations.forEach((station, index) => {
    if (seenIds.has(station.id)) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: [index, "id"], message: `Duplicate station id "${station.id}"` });
    }
    seenIds.add(station.id);

    if (seenOrders.has(station.order)) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: [index, "order"], message: `Duplicate station order ${station.order}` });
    }
    seenOrders.add(station.order);

    const hasSimpleContent = Boolean(station.description && station.keyPoints && station.duration);
    const hasRichContent = Boolean(station.sections && station.sections.length > 0);
    if (!hasSimpleContent && !hasRichContent) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: [index],
        message: `Station "${station.id}" has neither simple content (description/keyPoints/duration) nor sections`,
      });
    }

    if (station.verified && !station.lastVerified) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: [index, "lastVerified"],
        message: `Station "${station.id}" is marked verified but has no lastVerified date`,
      });
    }
  });
});
