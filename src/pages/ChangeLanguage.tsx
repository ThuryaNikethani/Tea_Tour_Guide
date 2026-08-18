import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { LanguagePicker } from "../components/LanguagePicker";
import logo from "../assets/brand/athu-BZCrr7Wr.png";

export function ChangeLanguage() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-57px)] bg-tea-50 flex flex-col items-center justify-center px-6 py-12 text-center">
      <div className="flex flex-col items-center mb-10">
        <img src={logo} alt="" className="w-12 h-12 rounded-full object-contain mb-4" />
        <h1 className="font-display text-2xl md:text-3xl text-tea-900 mb-2">{t("changeLanguage")}</h1>
      </div>
      <LanguagePicker onPick={() => navigate(-1)} />
    </div>
  );
}
