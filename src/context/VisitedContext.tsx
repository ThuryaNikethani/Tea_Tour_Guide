import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

const STORAGE_KEY = "atf-tour-visited";

interface VisitedContextValue {
  visited: Set<string>;
  isVisited: (stationId: string) => boolean;
  markVisited: (stationId: string) => void;
}

const VisitedContext = createContext<VisitedContextValue | undefined>(undefined);

function readStored(): Set<string> {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

export function VisitedProvider({ children }: { children: ReactNode }) {
  const [visited, setVisited] = useState<Set<string>>(readStored);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...visited]));
  }, [visited]);

  function markVisited(stationId: string) {
    setVisited((prev) => {
      if (prev.has(stationId)) return prev;
      const next = new Set(prev);
      next.add(stationId);
      return next;
    });
  }

  return (
    <VisitedContext.Provider value={{ visited, isVisited: (id) => visited.has(id), markVisited }}>
      {children}
    </VisitedContext.Provider>
  );
}

export function useVisited() {
  const ctx = useContext(VisitedContext);
  if (!ctx) throw new Error("useVisited must be used within VisitedProvider");
  return ctx;
}
