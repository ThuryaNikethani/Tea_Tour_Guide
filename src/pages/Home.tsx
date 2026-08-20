import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { STATIONS } from "../data/stations";
import { LANGUAGES } from "../i18n/languages";
import { estimateTotalMinutes } from "../data/estimateTime";
import bgImg from "../assets/brand/back-BBrcdcx-.png";

function Flourish() {
  return (
    <div className="flex items-center justify-center gap-2" aria-hidden="true">
      <span className="w-8 h-px bg-gold-400" />
      <span className="w-1.5 h-1.5 bg-gold-400 rotate-45" />
      <span className="w-8 h-px bg-gold-400" />
    </div>
  );
}

export function Home() {
  const { t } = useLanguage();
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

      {/* ---------- Navigate to the station list ---------- */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <div className="mb-4">
          <Flourish />
        </div>
        <p className="text-tea-500 text-sm font-light mb-6">{t("scanQrHint")}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/stations"
            className="inline-flex items-center gap-2 bg-tea-900 hover:bg-tea-800 text-white font-semibold text-xs uppercase tracking-[0.2em] px-9 py-3.5 transition-colors"
          >
            {t("allStations")}
            <ArrowRight size={15} />
          </Link>
          <Link
            to="/highlights"
            className="inline-flex items-center gap-2 border border-tea-900 text-tea-900 hover:bg-tea-900 hover:text-white font-semibold text-xs uppercase tracking-[0.2em] px-9 py-3.5 transition-colors"
          >
            Highlights
            <ArrowRight size={15} />
          </Link>
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
