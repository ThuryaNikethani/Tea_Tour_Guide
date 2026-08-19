import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

const STORAGE_KEY = "atf-tour-favorites";

interface FavoritesContextValue {
  favorites: Set<string>;
  isFavorite: (stationId: string) => boolean;
  toggleFavorite: (stationId: string) => void;
}

const FavoritesContext = createContext<FavoritesContextValue | undefined>(undefined);

function readStored(): Set<string> {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Set<string>>(readStored);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...favorites]));
  }, [favorites]);

  function toggleFavorite(stationId: string) {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(stationId)) next.delete(stationId);
      else next.add(stationId);
      return next;
    });
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, isFavorite: (id) => favorites.has(id), toggleFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites must be used within FavoritesProvider");
  return ctx;
}
