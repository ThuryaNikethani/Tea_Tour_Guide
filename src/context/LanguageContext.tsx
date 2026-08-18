import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { DEFAULT_LANGUAGE, LANGUAGES, type LanguageCode } from "../i18n/languages";
import { t as translate, type UIStrings } from "../i18n/ui";

const STORAGE_KEY = "atf-tour-language";

interface LanguageContextValue {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  hasChosenLanguage: boolean;
  t: (key: keyof UIStrings) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function readStoredLanguage(): LanguageCode | null {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && LANGUAGES.some((l) => l.code === stored)) {
    return stored as LanguageCode;
  }
  return null;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>(
    () => readStoredLanguage() ?? DEFAULT_LANGUAGE
  );
  const [hasChosenLanguage, setHasChosenLanguage] = useState(() => readStoredLanguage() !== null);

  useEffect(() => {
    const info = LANGUAGES.find((l) => l.code === language);
    document.documentElement.lang = language;
    document.documentElement.dir = info?.dir === "rtl" ? "rtl" : "ltr";
    document.title = translate(language, "appTitle");
  }, [language]);

  function setLanguage(lang: LanguageCode) {
    setLanguageState(lang);
    setHasChosenLanguage(true);
    window.localStorage.setItem(STORAGE_KEY, lang);
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        hasChosenLanguage,
        t: (key) => translate(language, key),
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
