import { motion } from "framer-motion";
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
      <div className="fixed inset-0 bg-gradient-to-b from-tea-950/75 via-tea-950/85 to-tea-950 -z-10" />

      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center mb-10"
      >
        <img src={logo} alt="" className="w-16 h-16 rounded-full object-contain mb-5 shadow-lg" />
        <p className="font-modern text-brass-400 text-xs uppercase tracking-[0.2em] mb-3">
          Visitor Tour Guide
        </p>
        <h1 className="font-editorial italic font-medium text-3xl md:text-4xl text-tea-50 mb-4">
          {t("appTitle")}
        </h1>
        <p className="font-modern text-tea-100 border border-tea-600 rounded-full px-4 py-1.5 text-sm">
          {t("selectLanguage")}
        </p>
      </motion.div>

      <LanguagePicker />
    </div>
  );
}
