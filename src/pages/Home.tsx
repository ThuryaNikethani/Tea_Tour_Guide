import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bookmark,
  CheckCircle2,
  Clock,
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
import { useFavorites } from "../context/FavoritesContext";
import { STATIONS } from "../data/stations";
import { LANGUAGES } from "../i18n/languages";
import { localizeStation } from "../data/localize";
import { estimateStationMinutes, estimateTotalMinutes } from "../data/estimateTime";
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
  const totalMinutes = estimateTotalMinutes(STATIONS);

  return (
    <div className="bg-tea-50">
      {/* ---------- Hero: Estate Reserve ---------- */}
      <section className="relative">
        <div
          className="h-80 md:h-[26rem] w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-tea-950/70 via-tea-900/85 to-tea-900" />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.img
            src={logo}
            alt=""
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="w-14 h-14 rounded-full object-contain mb-4 shadow-lg"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-modern text-brass-400 text-xs uppercase tracking-[0.2em] mb-3"
          >
            Visitor Tour Guide
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="font-editorial italic font-medium text-4xl md:text-5xl text-tea-50 mb-3"
          >
            {t("appTitle")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-modern text-tea-100 max-w-md mb-7"
          >
            {t("tagline")}
          </motion.p>
          <Link
            to={`/station/${STATIONS[0].id}`}
            className="font-modern inline-flex items-center gap-2 bg-brass-500 hover:bg-brass-400 text-tea-950 font-semibold text-sm px-6 py-3 rounded-full shadow-lg shadow-tea-950/40 transition-colors"
          >
            {t("startTour")}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ---------- Boarding-pass stat strip: Field Guide ---------- */}
      <div className="max-w-4xl mx-auto px-4 -mt-7 relative z-[1]">
        <div className="bg-white rounded-2xl shadow-xl shadow-tea-900/10 border border-tea-100 flex divide-x divide-tea-100">
          <Stat value={String(STATIONS.length)} label={t("statStations")} />
          <Stat value={t("minRead").replace("{minutes}", String(totalMinutes))} label={t("statFullTour")} />
          <Stat value={String(LANGUAGES.length)} label={t("statLanguages")} />
        </div>
      </div>

      <SavedStations />

      {/* ---------- Station grid: Field Guide structure, Estate Reserve palette ---------- */}
      <section className="max-w-4xl mx-auto px-4 py-14">
        <div className="text-center mb-9">
          <h2 className="font-editorial italic font-medium text-2xl text-tea-900 mb-1.5">{t("allStations")}</h2>
          <p className="font-modern text-tea-600/70 text-sm inline-flex items-center gap-1.5">
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
            return <StationCard key={station.id} station={station} localized={localized} Icon={Icon} teaser={teaser} />;
          })}
        </motion.div>
      </section>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center py-4 px-2 text-center">
      <span className="font-editorial italic font-medium text-xl text-tea-900">{value}</span>
      <span className="font-modern text-[10px] uppercase tracking-wide text-tea-600/60 mt-0.5">{label}</span>
    </div>
  );
}

function StationCard({
  station,
  localized,
  Icon,
  teaser,
}: {
  station: (typeof STATIONS)[number];
  localized: ReturnType<typeof localizeStation>;
  Icon: LucideIcon;
  teaser?: string;
}) {
  const { t } = useLanguage();
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorited = isFavorite(station.id);
  const minutes = estimateStationMinutes(station);

  return (
    <motion.div variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}>
      <Link
        to={`/station/${station.id}`}
        className="group relative flex flex-col gap-3 bg-white border border-tea-100 hover:border-brass-400 rounded-2xl p-5 h-full shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-tea-900 text-brass-400 shadow-sm group-hover:scale-105 transition-transform">
            <Icon size={20} strokeWidth={2} />
          </div>
          <div className="flex items-center gap-1.5">
            {station.verified ? (
              <span className="flex items-center gap-1 text-[11px] font-medium text-sage-600 bg-sage-400/10 border border-sage-400/30 rounded-full px-2 py-0.5">
                <CheckCircle2 size={12} />
              </span>
            ) : (
              <span className="font-modern text-[10px] uppercase tracking-wide font-semibold text-brass-600 bg-brass-300/20 border border-brass-300/50 rounded-full px-2 py-0.5">
                {t("draftLabel")}
              </span>
            )}
            <button
              type="button"
              aria-label={favorited ? t("unsaveStation") : t("saveStation")}
              onClick={(e) => {
                e.preventDefault();
                toggleFavorite(station.id);
              }}
              className="flex items-center justify-center w-7 h-7 rounded-full text-tea-400 hover:text-brass-600 hover:bg-tea-50 transition-colors"
            >
              <Bookmark size={16} fill={favorited ? "currentColor" : "none"} className={favorited ? "text-brass-500" : ""} />
            </button>
          </div>
        </div>

        <div>
          <span className="font-modern text-sage-600 text-xs font-semibold tracking-wide uppercase">
            {t("stationOf").replace("{current}", String(station.order)).replace("{total}", String(STATIONS.length))}
          </span>
          <h3 className="font-editorial italic font-medium text-lg text-tea-900 leading-snug">{localized.name}</h3>
        </div>

        {teaser && <p className="font-modern text-tea-600/80 text-sm leading-relaxed line-clamp-2">{teaser}</p>}

        <div className="mt-auto flex items-center justify-between">
          <span className="font-modern flex items-center gap-1 text-tea-400 text-xs">
            <Clock size={12} />
            {t("minRead").replace("{minutes}", String(minutes))}
          </span>
          <span className="flex items-center text-brass-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
            <ArrowRight size={16} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

function SavedStations() {
  const { t, language } = useLanguage();
  const { favorites } = useFavorites();
  const saved = STATIONS.filter((s) => favorites.has(s.id));

  return (
    <section className="max-w-4xl mx-auto px-4 pt-9">
      <h2 className="font-modern flex items-center gap-1.5 text-tea-700 text-sm font-semibold uppercase tracking-wide mb-3">
        <Bookmark size={14} />
        {t("savedStations")}
      </h2>
      {saved.length === 0 ? (
        <p className="font-modern text-tea-400 text-sm">{t("noSavedStations")}</p>
      ) : (
        <div className="flex flex-wrap gap-2">
          {saved.map((station) => {
            const localized = localizeStation(station, language);
            return (
              <Link
                key={station.id}
                to={`/station/${station.id}`}
                className="font-modern flex items-center gap-1.5 bg-white border border-brass-300 hover:border-brass-500 rounded-full pl-2 pr-3 py-1.5 text-sm text-tea-800 shadow-sm transition-colors"
              >
                <Bookmark size={13} fill="currentColor" className="text-brass-500" />
                {localized.name}
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
}
