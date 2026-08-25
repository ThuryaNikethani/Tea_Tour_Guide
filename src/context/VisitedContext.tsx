import { createContext, useContext, useState, type ReactNode } from "react";

interface VisitedContextValue {
  visited: Set<string>;
  isVisited: (stationId: string) => boolean;
  markVisited: (stationId: string) => void;
}

const VisitedContext = createContext<VisitedContextValue | undefined>(undefined);

// In-memory only, on purpose: a page reload starts the visited count over
// at 0, treating it as a fresh walk-through.
export function VisitedProvider({ children }: { children: ReactNode }) {
  const [visited, setVisited] = useState<Set<string>>(() => new Set());

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
