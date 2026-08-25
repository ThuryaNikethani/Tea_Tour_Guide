import { useEffect, useState } from "react";
import { CONFIRMATION_RADIUS_METERS, ESTATE_LOCATION } from "../data/estateLocation";

const STORAGE_KEY = "atf-tour-onsite-confirmed";

function haversineMeters(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371000;
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

/**
 * Best-effort "near the estate" signal, purely additive — never gates or
 * changes visited-tracking. Silently no-ops if geolocation is unavailable,
 * denied, or errors out. See data/estateLocation.ts for accuracy caveats
 * on the reference point.
 */
export function useOnSiteConfirmation(): boolean {
  const [confirmed, setConfirmed] = useState(() => {
    try {
      return window.localStorage.getItem(STORAGE_KEY) === "true";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (confirmed) return;
    if (!("geolocation" in navigator)) return;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const distance = haversineMeters(
          position.coords.latitude,
          position.coords.longitude,
          ESTATE_LOCATION.lat,
          ESTATE_LOCATION.lon
        );
        if (distance <= CONFIRMATION_RADIUS_METERS) {
          setConfirmed(true);
          try {
            window.localStorage.setItem(STORAGE_KEY, "true");
          } catch {
            // storage unavailable — confirmation just won't persist across sessions
          }
        }
      },
      () => {
        // permission denied or position unavailable — silently no-op
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return confirmed;
}
