import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Flame,
  FlaskConical,
  Filter,
  Hand,
  Package,
  QrCode,
  RotateCw,
  Sprout,
  Wind,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { STATIONS } from "../data/stations";
import { localizeStation } from "../data/localize";
import bgImg from "../assets/brand/back-BBrcdcx-.png";
import logo from "../assets/brand/athu-BZCrr7Wr.png";

const STATION_ICONS: Record<string, LucideIcon> = {
  Sprout,
  Hand,
  Wind,
  RotateCw,
  FlaskConical,
  Flame,
  Filter,
  Package,
};

export function Home() {
  const { t, language } = useLanguage();

  return (
    <div>
      <section className="relative">
        <div
          className="h-64 md:h-80 w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-6 pb-8">
          <motion.img
            src={logo}
            alt=""
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="w-14 h-14 rounded-full object-contain mb-3 shadow-lg"
          />
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-display text-3xl md:text-4xl text-white mb-2"
          >
            {t("appTitle")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-tea-100 max-w-md"
          >
            {t("tagline")}
          </motion.p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 -mt-6 relative z-[1]">
        <Link
          to={`/station/${STATIONS[0].id}`}
          className="flex items-center justify-center gap-2 w-full sm:w-auto sm:mx-auto bg-gold-500 hover:bg-gold-600 text-tea-950 font-semibold rounded-xl px-6 py-3 shadow-lg shadow-gold-900/10 transition-colors"
        >
          {t("startTour")}
          <ArrowRight size={18} />
        </Link>
      </div>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="font-display text-2xl text-tea-900 mb-1">{t("allStations")}</h2>
          <p className="text-tea-600 text-sm inline-flex items-center gap-1.5">
            <QrCode size={15} />
            {t("scanQrHint")}
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={{ show: { transition: { staggerChildren: 0.06 } } }}
          className="relative grid sm:grid-cols-2 gap-4"
        >
          {STATIONS.map((station) => {
            const localized = localizeStation(station, language);
            const Icon = STATION_ICONS[station.icon] ?? Sprout;
            const teaser = localized.heroTagline ?? localized.keyPoints ?? localized.description;
            return (
              <motion.div
                key={station.id}
                variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
              >
                <Link
                  to={`/station/${station.id}`}
                  className="group relative flex flex-col gap-3 bg-white border border-tea-200 hover:border-gold-400 rounded-2xl p-5 h-full shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-tea-600 to-tea-800 text-white shadow-sm group-hover:scale-105 transition-transform">
                      <Icon size={20} strokeWidth={2} />
                    </div>
                    {station.verified ? (
                      <span className="flex items-center gap-1 text-[11px] font-medium text-tea-600 bg-tea-50 border border-tea-200 rounded-full px-2 py-0.5">
                        <CheckCircle2 size={12} />
                      </span>
                    ) : (
                      <span className="text-[10px] uppercase tracking-wide font-semibold text-amber-600 bg-amber-50 border border-amber-200 rounded-full px-2 py-0.5">
                        {t("draftLabel")}
                      </span>
                    )}
                  </div>

                  <div>
                    <span className="text-gold-600 text-xs font-semibold tracking-wide uppercase">
                      {t("stationOf").replace("{current}", String(station.order)).replace("{total}", String(STATIONS.length))}
                    </span>
                    <h3 className="font-display text-lg text-tea-900 leading-snug">{localized.name}</h3>
                  </div>

                  {teaser && <p className="text-tea-500 text-sm leading-relaxed line-clamp-2">{teaser}</p>}

                  <span className="mt-auto flex items-center justify-end text-tea-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </div>
  );
}
