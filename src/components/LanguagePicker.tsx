import { motion } from "framer-motion";
import { LANGUAGES } from "../i18n/languages";
import { useLanguage } from "../context/LanguageContext";

export function LanguagePicker({ onPick }: { onPick?: () => void }) {
  const { setLanguage } = useLanguage();

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.04 } } }}
      className="flex flex-col gap-3 w-full max-w-md"
    >
      {LANGUAGES.map((lang) => (
        <motion.button
          key={lang.code}
          variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
          type="button"
          onClick={() => {
            setLanguage(lang.code);
            onPick?.();
          }}
          className="font-modern flex items-center justify-center gap-3 rounded-2xl bg-white hover:bg-brass-300/15 border border-transparent hover:border-brass-400 shadow-lg shadow-tea-950/20 px-4 py-4 transition-colors"
        >
          <span className="text-xl leading-none">{lang.flag}</span>
          <div className="text-center">
            <div className="text-tea-900 font-medium">{lang.nativeName}</div>
            {lang.nativeName !== lang.englishName && (
              <div className="text-sage-600 text-sm">{lang.englishName}</div>
            )}
          </div>
        </motion.button>
      ))}
    </motion.div>
  );
}
