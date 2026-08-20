import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bookmark,
  CheckCircle2,
  Citrus,
  Clock,
  Coffee,
  Factory,
  Flame,
  FlaskConical,
  Filter,
  Gem,
  Hand,
  HandHeart,
  Layers,
  Leaf,
  Mountain,
  Package,
  Palmtree,
  QrCode,
  Recycle,
  RotateCw,
  Sprout,
  TreePine,
  Trees,
  Wheat,
  Wind,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useFavorites } from "../context/FavoritesContext";
import { STATIONS } from "../data/stations";
import { localizeStation } from "../data/localize";
import { estimateStationMinutes } from "../data/estimateTime";

function Flourish() {
  return (
    <div className="flex items-center justify-center gap-2" aria-hidden="true">
      <span className="w-8 h-px bg-gold-400" />
      <span className="w-1.5 h-1.5 bg-gold-400 rotate-45" />
      <span className="w-8 h-px bg-gold-400" />
    </div>
  );
}

const STATION_ICONS: Record<string, LucideIcon> = {
  Sprout,
  Hand,
  Wind,
  RotateCw,
  FlaskConical,
  Flame,
  Filter,
  Package,
  TreePine,
  Leaf,
  Layers,
  Recycle,
  Gem,
  Wheat,
  Trees,
  Citrus,
  Factory,
  HandHeart,
  Coffee,
  Palmtree,
  Mountain,
};

export function AllStations() {
  const { t, language } = useLanguage();

  return (
    <div className="bg-white">
      {/* ---------- Station grid ---------- */}
      <section id="stations" className="max-w-4xl mx-auto px-4 py-12 scroll-mt-32">
        <div className="text-center mb-8">
          <div className="mb-4">
            <Flourish />
          </div>
          <h2 className="font-heading font-semibold text-3xl text-tea-900 mb-2">{t("allStations")}</h2>
          <p className="text-tea-500 text-sm inline-flex items-center gap-1.5 font-light">
            <QrCode size={15} />
            {t("scanQrHint")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 items-start">
          {STATIONS.map((station) => {
            const localized = localizeStation(station, language);
            const Icon = STATION_ICONS[station.icon] ?? Sprout;
            const teaser = localized.heroTagline ?? localized.keyPoints ?? localized.description;
            return <StationCard key={station.id} station={station} localized={localized} Icon={Icon} teaser={teaser} />;
          })}
        </div>
      </section>

      <SavedStations />
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
    <Link
      to={`/station/${station.id}`}
      className="group flex flex-col gap-3 bg-white border border-tea-200 hover:border-gold-500/60 hover:shadow-lg p-6 transition-all"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center justify-center w-11 h-11 border border-gold-500/40 text-tea-800">
          <Icon size={19} strokeWidth={1.5} />
        </div>
        <div className="flex items-center gap-1.5">
          {station.verified ? (
            <span className="flex items-center gap-1 text-[11px] font-semibold text-tea-700">
              <CheckCircle2 size={12} />
            </span>
          ) : (
            <span className="text-[10px] uppercase tracking-[0.1em] font-semibold text-gold-700 border border-gold-500/40 px-2 py-0.5">
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
            className="flex items-center justify-center w-7 h-7 text-tea-400 hover:text-gold-600 transition-colors"
          >
            <Bookmark size={16} fill={favorited ? "currentColor" : "none"} className={favorited ? "text-gold-600" : ""} />
          </button>
        </div>
      </div>

      <div>
        <span className="text-gold-700 text-[11px] font-semibold tracking-[0.15em] uppercase">
          {t("stationOf").replace("{current}", String(station.order)).replace("{total}", String(STATIONS.length))}
        </span>
        <h3 className="font-heading font-semibold text-lg text-tea-900 leading-snug">{localized.name}</h3>
      </div>

      {teaser && <p className="text-tea-500 text-sm leading-relaxed line-clamp-2 font-light">{teaser}</p>}

      <div className="mt-auto flex items-center justify-between pt-1">
        <span className="flex items-center gap-1 text-tea-400 text-xs">
          <Clock size={12} />
          {t("minRead").replace("{minutes}", String(minutes))}
        </span>
        <span className="flex items-center text-gold-600 group-hover:translate-x-0.5 transition-transform">
          <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  );
}

function SavedStations() {
  const { t, language } = useLanguage();
  const { favorites } = useFavorites();
  const saved = STATIONS.filter((s) => favorites.has(s.id));

  return (
    <section className="max-w-4xl mx-auto px-4 pt-8 pb-12">
      <h2 className="flex items-center justify-center gap-1.5 text-tea-700 text-xs font-semibold uppercase tracking-[0.15em] mb-3">
        <Bookmark size={13} />
        {t("savedStations")}
      </h2>
      {saved.length === 0 ? (
        <p className="text-tea-400 text-sm text-center font-light">{t("noSavedStations")}</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-2">
          {saved.map((station) => {
            const localized = localizeStation(station, language);
            return (
              <Link
                key={station.id}
                to={`/station/${station.id}`}
                className="flex items-center gap-1.5 bg-white border border-gold-500/40 hover:border-gold-500 pl-2 pr-3 py-1.5 text-sm text-tea-800 transition-colors"
              >
                <Bookmark size={13} fill="currentColor" className="text-gold-600" />
                {localized.name}
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
}
