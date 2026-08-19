import { Link } from "react-router-dom";
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
import featuredImg from "../assets/nursery/net-CeM99paf.png";
import cultivar2022Img from "../assets/nursery/gallery/pla5-BlOJ1RbK.jpg";
import cultivar2043Img from "../assets/nursery/gallery/pla9-moj4O07C.jpg";
import cultivar4006Img from "../assets/nursery/gallery/pla13-CsUH1VFU.jpg";
import cultivar3025Img from "../assets/nursery/gallery/pla17-CN4UIDLb.jpg";

const CULTIVAR_PHOTOS = [
  { img: cultivar2022Img, code: "TRI 2022" },
  { img: cultivar2043Img, code: "TRI 2043" },
  { img: cultivar4006Img, code: "TRI 4006" },
  { img: cultivar3025Img, code: "TRI 3025" },
];

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
};

export function Home() {
  const { t, language } = useLanguage();
  const totalMinutes = estimateTotalMinutes(STATIONS);

  return (
    <div className="bg-white">
      {/* ---------- Hero: centered, symmetric ---------- */}
      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-tea-950/70" />
        <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24 flex flex-col items-center text-center">
          <p className="text-gold-300 text-xs font-semibold uppercase tracking-[0.3em] mb-4">
            Visitor Tour Guide
          </p>
          <div className="mb-4">
            <Flourish />
          </div>
          <h1 className="font-heading font-semibold text-4xl md:text-6xl text-white leading-tight mb-5">
            {t("appTitle")}
          </h1>
          <p className="text-white/85 text-base md:text-lg max-w-md mb-9 font-light">{t("tagline")}</p>
          <Link
            to={`/station/${STATIONS[0].id}`}
            className="inline-flex items-center gap-2 border border-gold-400 text-gold-300 hover:bg-gold-400 hover:text-tea-950 font-semibold text-xs uppercase tracking-[0.2em] px-9 py-3.5 transition-colors"
          >
            {t("startTour")}
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* ---------- Stat row: quiet, gold-bordered ---------- */}
      <div className="border-b border-gold-500/25 bg-tea-50">
        <div className="max-w-3xl mx-auto px-4 flex divide-x divide-gold-500/25">
          <Stat value={String(STATIONS.length)} label={t("statStations")} />
          <Stat value={t("minRead").replace("{minutes}", String(totalMinutes))} label={t("statFullTour")} />
          <Stat value={String(LANGUAGES.length)} label={t("statLanguages")} />
        </div>
      </div>

      <SavedStations />

      {/* ---------- Featured: the one fully real, verified station ---------- */}
      <section className="max-w-4xl mx-auto px-4 pt-10">
        <div className="grid md:grid-cols-2 gap-0 border border-gold-500/30">
          <div
            className="h-64 md:h-auto bg-cover bg-center"
            style={{ backgroundImage: `url(${featuredImg})` }}
          />
          <div className="flex flex-col justify-center gap-3 p-8">
            <span className="inline-flex items-center gap-1.5 self-start text-[11px] font-semibold uppercase tracking-[0.15em] text-gold-700">
              <CheckCircle2 size={13} />
              {t("stationOf").replace("{current}", "1").replace("{total}", String(STATIONS.length))}
            </span>
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-tea-900">
              {localizeStation(STATIONS[0], language).name}
            </h2>
            <p className="text-tea-600 leading-relaxed font-light">
              {localizeStation(STATIONS[0], language).heroTagline}
            </p>
            <Link
              to={`/station/${STATIONS[0].id}`}
              className="inline-flex items-center gap-2 self-start border-b border-tea-900 text-tea-900 hover:text-gold-600 hover:border-gold-600 font-semibold text-xs uppercase tracking-[0.15em] pb-1 mt-3 transition-colors"
            >
              {t("startTour")}
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Cultivar photo strip: real signposted plants from the nursery ---------- */}
      <section className="max-w-4xl mx-auto px-4 pt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gold-500/25 border border-gold-500/25">
          {CULTIVAR_PHOTOS.map(({ img, code }) => (
            <figure key={code} className="relative bg-white">
              <img src={img} alt={code} loading="lazy" className="w-full h-40 object-cover" />
              <figcaption className="absolute bottom-0 inset-x-0 bg-tea-950/70 text-gold-200 text-[11px] font-semibold uppercase tracking-[0.1em] text-center py-1.5">
                {code}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

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
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center py-5 px-2 text-center">
      <span className="font-heading font-semibold text-2xl text-tea-900">{value}</span>
      <span className="text-[10px] uppercase tracking-[0.15em] text-tea-500 mt-1 font-semibold">{label}</span>
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
    <section className="max-w-4xl mx-auto px-4 pt-8">
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
