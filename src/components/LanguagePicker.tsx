import { LANGUAGES } from "../i18n/languages";
import { useLanguage } from "../context/LanguageContext";

export function LanguagePicker({ onPick }: { onPick?: () => void }) {
  const { setLanguage } = useLanguage();

  return (
    <div className="flex flex-col gap-2 w-full max-w-md">
      {LANGUAGES.map((lang) => (
        <button
          key={lang.code}
          type="button"
          onClick={() => {
            setLanguage(lang.code);
            onPick?.();
          }}
          className="flex items-center justify-center gap-3 bg-white/95 hover:bg-white border border-transparent hover:border-gold-400 px-4 py-3 transition-colors"
        >
          <span className="text-xl leading-none">{lang.flag}</span>
          <div className="text-center">
            <div className="text-tea-900 font-medium">{lang.nativeName}</div>
            {lang.nativeName !== lang.englishName && (
              <div className="text-tea-500 text-sm">{lang.englishName}</div>
            )}
          </div>
        </button>
      ))}
    </div>
  );
}
