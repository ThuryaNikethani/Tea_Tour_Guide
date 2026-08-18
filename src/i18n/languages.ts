export type LanguageCode =
  | "en"
  | "si"
  | "ta"
  | "ru"
  | "ar"
  | "it"
  | "de"
  | "zh"
  | "ja"
  | "es"
  | "fr";

export interface LanguageInfo {
  code: LanguageCode;
  /** Name written in the language's own script — safe to display as-is. */
  nativeName: string;
  englishName: string;
  /** Flag emoji shown next to the name, matching the factory's existing site. */
  flag: string;
  dir?: "rtl";
}

export const LANGUAGES: LanguageInfo[] = [
  { code: "en", nativeName: "English", englishName: "English", flag: "🇬🇧" },
  { code: "zh", nativeName: "中文", englishName: "Chinese", flag: "🇨🇳" },
  { code: "ja", nativeName: "日本語", englishName: "Japanese", flag: "🇯🇵" },
  { code: "es", nativeName: "Español", englishName: "Spanish", flag: "🇪🇸" },
  { code: "fr", nativeName: "Français", englishName: "French", flag: "🇫🇷" },
  { code: "ru", nativeName: "Русский", englishName: "Russian", flag: "🇷🇺" },
  { code: "si", nativeName: "සිංහල", englishName: "Sinhala", flag: "🇱🇰" },
  { code: "ar", nativeName: "العربية", englishName: "Arabic", flag: "🇸🇦", dir: "rtl" },
  { code: "it", nativeName: "Italiano", englishName: "Italian", flag: "🇮🇹" },
  { code: "de", nativeName: "Deutsch", englishName: "German", flag: "🇩🇪" },
  { code: "ta", nativeName: "தமிழ்", englishName: "Tamil", flag: "🇮🇳" },
];

export const DEFAULT_LANGUAGE: LanguageCode = "en";
