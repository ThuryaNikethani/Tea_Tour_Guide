import { useLanguage } from "../context/LanguageContext";
import { LanguagePicker } from "./LanguagePicker";
import bgImg from "../assets/brand/ath-CFusSk2P.jpg";
import logo from "../assets/brand/athu-BZCrr7Wr.png";

export function LanguageGate({ children }: { children: React.ReactNode }) {
  const { hasChosenLanguage, t } = useLanguage();

  if (hasChosenLanguage) return <>{children}</>;

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center overflow-hidden">
      <div
        className="fixed inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${bgImg})` }}
      />
      <div className="fixed inset-0 bg-tea-950/78 -z-10" />

      <div className="flex flex-col items-center mb-7">
        <img src={logo} alt="" className="w-16 h-16 rounded-full object-contain mb-4 bg-white" />
        <p className="text-gold-300 text-xs font-semibold uppercase tracking-[0.3em] mb-3">
          Visitor Tour Guide
        </p>
        <div className="w-10 h-px bg-gold-400 mb-3" />
        <h1 className="font-heading font-semibold text-3xl md:text-4xl text-white mb-4">{t("appTitle")}</h1>
        <p className="text-gold-200 text-xs font-semibold uppercase tracking-[0.2em] border border-gold-400/60 px-5 py-2">
          {t("selectLanguage")}
        </p>
      </div>

      <LanguagePicker />
    </div>
  );
}
