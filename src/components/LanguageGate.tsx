import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { LanguagePicker } from "./LanguagePicker";
import bgImg from "../assets/brand/ath-CFusSk2P.jpg";
import logo from "../assets/brand/athu-BZCrr7Wr.png";

export function LanguageGate({ children }: { children: React.ReactNode }) {
  const { hasChosenLanguage, t } = useLanguage();

  if (hasChosenLanguage) return <>{children}</>;

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center">
      <div
        className="fixed inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${bgImg})` }}
      />
      <div className="fixed inset-0 bg-white/40 -z-10" />

      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center mb-10"
      >
        <img src={logo} alt="" className="w-16 h-16 rounded-full object-contain mb-4 shadow-lg" />
        <h1 className="font-display text-3xl md:text-4xl text-tea-900 mb-2 drop-shadow-sm">
          {t("appTitle")}
        </h1>
        <p className="text-tea-800 bg-white/60 rounded-full px-4 py-1">{t("selectLanguage")}</p>
      </motion.div>

      <LanguagePicker />
    </div>
  );
}
