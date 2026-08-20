import { Link } from "react-router-dom";
import { ChevronLeft, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { localizeVilla } from "../data/villa";
import bgImg from "../assets/brand/ath-CFusSk2P.jpg";

export function VillaPage() {
  const { t, language } = useLanguage();
  const villa = localizeVilla(language);

  return (
    <div>
      <div className="relative w-full h-64 md:h-[420px] overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="absolute inset-0 bg-tea-950/55 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-heading font-semibold text-3xl md:text-5xl text-white mb-3 drop-shadow-lg">{villa.name}</h1>
          <p className="text-white/90 max-w-xl">{villa.tagline}</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">
        <Link to="/stations" className="inline-flex items-center gap-1 text-tea-600 hover:text-tea-900 text-sm mb-6">
          <ChevronLeft size={16} />
          {t("backToStations")}
        </Link>

        <div className="flex items-start gap-2 bg-brass-300/15 border border-brass-300/50 text-brass-600 rounded-md px-4 py-3 text-sm mb-6">
          <Sparkles size={16} className="mt-0.5 shrink-0" />
          <p>{villa.comingSoon}</p>
        </div>

        <p className="text-tea-800 leading-relaxed mb-8">{villa.body}</p>

        <div className="bg-tea-50 border border-tea-200 rounded-md p-4">
          <div className="flex items-center gap-1.5 text-tea-700 font-medium text-sm mb-3">
            <Sparkles size={15} />
            {t("contactUs")}
          </div>
          <ul className="space-y-2 text-sm text-tea-800">
            <li className="flex items-center gap-2">
              <Phone size={14} className="shrink-0 text-gold-600" />
              <a href="tel:+94912291123" className="hover:text-tea-900">
                091-229 1123 / 091-779 1123
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="shrink-0 text-gold-600" />
              <a href="mailto:atf@athukoralagroup.com" className="hover:text-tea-900">
                atf@athukoralagroup.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={14} className="shrink-0 mt-0.5 text-gold-600" />
              <span>Kurunduwatta No 01, Pitigala, Sri Lanka</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
