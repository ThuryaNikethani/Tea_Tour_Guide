import { useEffect, useRef, useState } from "react";
import { ChevronDown, Languages } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { LANGUAGES } from "../i18n/languages";
import logo from "../assets/brand/athu-BZCrr7Wr.png";

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-20 bg-tea-900/95 backdrop-blur-sm border-b border-tea-600 print:hidden">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="" className="w-9 h-9 rounded-full object-contain" />
          <span className="font-editorial italic font-medium text-lg text-tea-50">
            {t("appTitle")}
          </span>
        </Link>
        <LanguageDropdown />
      </div>
    </header>
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
        className="flex items-center gap-1.5 font-modern text-brass-400 hover:text-brass-300 text-xs uppercase tracking-wide border-b border-brass-600 hover:border-brass-400 pb-0.5 transition-colors"
      >
        <Languages size={14} />
        <span className="hidden sm:inline">{t("changeLanguage")}</span>
        <span className="sm:hidden">{current?.flag}</span>
        <ChevronDown size={13} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="listbox"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-3 w-64 max-h-96 overflow-y-auto bg-white rounded-2xl shadow-2xl shadow-tea-950/30 border border-tea-100 p-2 z-30"
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
                className={`w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${
                  lang.code === language ? "bg-brass-300/25" : "hover:bg-tea-50"
                }`}
              >
                <span className="text-lg leading-none">{lang.flag}</span>
                <span className="flex-1">
                  <span className="block font-modern text-tea-900 font-medium text-sm">{lang.nativeName}</span>
                  {lang.nativeName !== lang.englishName && (
                    <span className="block font-modern text-tea-400 text-xs">{lang.englishName}</span>
                  )}
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
