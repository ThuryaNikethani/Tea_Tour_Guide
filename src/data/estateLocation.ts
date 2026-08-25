/**
 * Approximate reference point for the estate — geocoded from "Pitigala,
 * Sri Lanka" (town-level, via OpenStreetMap Nominatim). The exact street
 * address ("Kurunduwatta No 01, Pitigala") doesn't resolve on Nominatim,
 * so this is the closest verified point available, NOT the factory's
 * actual GPS pin. Replace with real on-site coordinates (drop a pin at
 * the factory entrance in Google Maps and read its lat/lng) for a
 * tighter, more accurate radius.
 */
export const ESTATE_LOCATION = { lat: 6.3435755, lon: 80.2225563 };

/** Wide on purpose — the reference point above is town-level, not the exact gate. */
export const CONFIRMATION_RADIUS_METERS = 5000;
