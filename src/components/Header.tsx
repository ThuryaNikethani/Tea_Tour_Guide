import { Languages } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import logo from "../assets/brand/athu-BZCrr7Wr.png";

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-10 bg-green-800/95 backdrop-blur-sm shadow-md print:hidden">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="" className="w-9 h-9 rounded-full object-contain" />
          <span className="text-lg font-extrabold bg-gradient-to-r from-lime-300 via-white to-lime-200 bg-clip-text text-transparent drop-shadow">
            {t("appTitle")}
          </span>
        </Link>
        <ChangeLanguageButton />
      </div>
    </header>
  );
}

function ChangeLanguageButton() {
  const { t } = useLanguage();
  return (
    <Link
      to="/language"
      className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-sm border border-white/20 hover:border-white/30 backdrop-blur-sm rounded-lg px-3 py-1.5 transition-all"
    >
      <Languages size={16} />
      <span className="hidden sm:inline">{t("changeLanguage")}</span>
    </Link>
  );
}
