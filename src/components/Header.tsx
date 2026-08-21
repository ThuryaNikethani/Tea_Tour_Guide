import { useEffect, useRef, useState } from "react";
import { ChevronDown, Languages, Menu, Moon, Sun, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { LANGUAGES } from "../i18n/languages";
import { STATIONS } from "../data/stations";
import logo from "../assets/brand/athu-BZCrr7Wr.png";

const LEFT_NAV: Array<{ to: string; key: "startTour" | "allStations" }> = [
  { to: `/station/${STATIONS[0].id}`, key: "startTour" },
  { to: "/stations", key: "allStations" },
];

const NAV_LINKS: Array<{ to: string; key: "startTour" | "allStations" | "contactUs" }> = [
  ...LEFT_NAV,
  { to: "/#contact", key: "contactUs" },
];

export function Header() {
  const { t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="sticky top-0 z-20 print:hidden">
      <div className="bg-tea-950 h-2" />

      <header className="bg-white dark:bg-tea-950 border-b border-gold-500/30">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between md:grid md:grid-cols-3">
          <div className="hidden md:flex items-center gap-7 text-xs font-semibold uppercase tracking-[0.12em] text-tea-700 dark:text-tea-200 justify-self-start">
            {LEFT_NAV.map(({ to, key }) => (
              <Link key={key} to={to} className="hover:text-gold-600 transition-colors">
                {t(key)}
              </Link>
            ))}
          </div>

          <Link to="/" className="flex items-center gap-3 justify-self-start md:justify-self-center">
            <img src={logo} alt="" className="w-10 h-10 rounded-full object-contain" />
            <span className="font-heading font-semibold text-xl text-tea-900 dark:text-white">{t("appTitle")}</span>
          </Link>

          <div className="flex items-center gap-3 justify-self-end">
            <Link to="/#contact" className="hidden md:inline shrink-0 whitespace-nowrap hover:text-gold-600 text-xs font-semibold uppercase tracking-[0.12em] text-tea-700 dark:text-tea-200 transition-colors">
              {t("contactUs")}
            </Link>
            <ThemeToggle />
            <LanguageDropdown />
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden flex items-center justify-center w-9 h-9 border border-gold-500/50 text-tea-900 dark:text-tea-100"
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-gold-500/20 px-4 py-3 flex flex-col gap-1 text-sm font-semibold uppercase tracking-[0.1em] text-tea-700 dark:text-tea-200">
            {NAV_LINKS.map(({ to, key }) => (
              <Link
                key={key}
                to={to}
                onClick={() => setMobileOpen(false)}
                className="py-2.5 border-b border-tea-100 dark:border-tea-800 last:border-b-0 hover:text-gold-600 transition-colors"
              >
                {t(key)}
              </Link>
            ))}
          </div>
        )}
      </header>
    </div>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      type="button"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggleTheme}
      className="flex items-center justify-center w-9 h-9 border border-gold-500/50 hover:border-gold-500 text-tea-900 dark:text-tea-100 transition-colors"
    >
      {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}

function LanguageDropdown() {
  const { t, language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const current = LANGUAGES.find((l) => l.code === language);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(e: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 text-tea-900 dark:text-tea-100 hover:text-gold-600 text-xs font-semibold uppercase tracking-wide border border-gold-500/50 hover:border-gold-500 rounded-sm px-3 py-2 transition-colors"
      >
        <Languages size={13} />
        <span className="hidden sm:inline">{t("changeLanguage")}</span>
        <span className="sm:hidden">{current?.flag}</span>
        <ChevronDown size={12} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 mt-2 w-64 max-h-96 overflow-y-auto bg-white dark:bg-tea-900 rounded-sm shadow-xl border border-gold-500/30 p-1.5 z-30"
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              type="button"
              role="option"
              aria-selected={lang.code === language}
              onClick={() => {
                setLanguage(lang.code);
                setOpen(false);
              }}
              className={`w-full flex items-center gap-3 rounded-sm px-3 py-2.5 text-left transition-colors ${
                lang.code === language ? "bg-gold-500/10 border border-gold-500/40" : "hover:bg-tea-50 dark:hover:bg-tea-800"
              }`}
            >
              <span className="text-lg leading-none">{lang.flag}</span>
              <span className="flex-1">
                <span className="block text-tea-900 dark:text-tea-50 font-medium text-sm">{lang.nativeName}</span>
                {lang.nativeName !== lang.englishName && (
                  <span className="block text-tea-400 dark:text-tea-500 text-xs">{lang.englishName}</span>
                )}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
