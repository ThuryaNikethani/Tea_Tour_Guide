import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Bookmark, ChevronLeft, Clock, LoaderCircle, Sparkles, TriangleAlert } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useFavorites } from "../context/FavoritesContext";
import { STATIONS, getStation } from "../data/stations";
import { localizeStation } from "../data/localize";
import { estimateStationMinutes } from "../data/estimateTime";

export function StationDetail() {
  const { id } = useParams<{ id: string }>();
  const { t, language } = useLanguage();
  const { isFavorite, toggleFavorite } = useFavorites();
  const rawStation = id ? getStation(id) : undefined;
  const station = rawStation ? localizeStation(rawStation, language) : undefined;

  if (!station) return <Navigate to="/" replace />;

  const favorited = isFavorite(station.id);
  const minutes = estimateStationMinutes(station);

  return (
    <div>
      {station.heroVideo && (
        <div className="relative w-full h-64 md:h-[420px] overflow-hidden">
          <video
            src={station.heroVideo}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-tea-950/55 flex flex-col items-center justify-center text-center px-4">
            <h1 className="font-heading font-semibold text-3xl md:text-5xl text-white mb-3 drop-shadow-lg">{station.name}</h1>
            {station.heroTagline && (
              <p className="text-white/90 max-w-xl">{station.heroTagline}</p>
            )}
          </div>
        </div>
      )}

      <div className="max-w-2xl mx-auto px-4 py-6">
        <Link to="/" className="inline-flex items-center gap-1 text-tea-600 hover:text-tea-900 text-sm mb-6">
          <ChevronLeft size={16} />
          {t("backToStations")}
        </Link>

        <div className="flex items-center justify-between mb-1">
          <p className="text-gold-600 font-medium text-sm">
            {t("stationOf").replace("{current}", String(station.order)).replace("{total}", String(STATIONS.length))}
          </p>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-tea-400 text-xs">
              <Clock size={12} />
              {t("minRead").replace("{minutes}", String(minutes))}
            </span>
            <button
              type="button"
              aria-label={favorited ? t("unsaveStation") : t("saveStation")}
              onClick={() => toggleFavorite(station.id)}
              className="flex items-center justify-center w-8 h-8 rounded-full text-tea-400 hover:text-gold-600 hover:bg-tea-50 transition-colors"
            >
              <Bookmark size={18} fill={favorited ? "currentColor" : "none"} className={favorited ? "text-gold-500" : ""} />
            </button>
          </div>
        </div>
        {!station.heroVideo && <h1 className="font-heading font-semibold text-3xl text-tea-900 mb-4">{station.name}</h1>}

        {!station.verified && (
          <div className="flex items-start gap-2 bg-brass-300/15 border border-brass-300/50 text-brass-600 rounded-md px-4 py-3 text-sm mb-6">
            <TriangleAlert size={16} className="mt-0.5 shrink-0" />
            <p>{t("unverifiedNotice")}</p>
          </div>
        )}

        {station.sections ? (
          <div className="space-y-7">
            {station.sections.map((section, i) => (
              <motion.section
                key={section.heading}
                id={`section-${i}`}
                className="scroll-mt-32"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4 }}
              >
                {section.image && (
                  <img
                    src={section.image}
                    alt={section.heading}
                    loading="lazy"
                    className="w-full h-56 object-cover rounded-md mb-3 shadow-sm"
                  />
                )}
                <h2 className="font-heading font-semibold text-xl text-tea-900 mb-2">{section.heading}</h2>
                <p className="text-tea-800 leading-relaxed">{section.body}</p>
              </motion.section>
            ))}
          </div>
        ) : (
          <>
            <p className="text-tea-800 leading-relaxed mb-6">{station.description}</p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-tea-50 border border-tea-200 rounded-md p-4">
                <div className="flex items-center gap-1.5 text-tea-700 font-medium text-sm mb-1.5">
                  <Sparkles size={15} />
                  {t("keyPoints")}
                </div>
                <p className="text-tea-800 text-sm leading-relaxed">{station.keyPoints}</p>
              </div>
              <div className="bg-tea-50 border border-tea-200 rounded-md p-4">
                <div className="flex items-center gap-1.5 text-tea-700 font-medium text-sm mb-1.5">
                  <Clock size={15} />
                  {t("duration")}
                </div>
                <p className="text-tea-800 text-sm leading-relaxed">{station.duration}</p>
              </div>
            </div>
          </>
        )}

        {station.processVideo && (
          <section className="mt-8">
            <h2 className="font-heading font-semibold text-xl text-tea-900 mb-3">{t("watchProcess")}</h2>
            <video
              src={station.processVideo}
              controls
              preload="none"
              className="w-full rounded-md shadow-sm"
            />
          </section>
        )}

        {station.virtualTourUrl && (
          <section className="mt-8">
            <h2 className="font-heading font-semibold text-xl text-tea-900 mb-3">{t("virtualTour")}</h2>
            <VirtualTourEmbed url={station.virtualTourUrl} title={t("virtualTour")} />
          </section>
        )}

      </div>
    </div>
  );
}

function VirtualTourEmbed({ url, title }: { url: string; title: string }) {
  const { t } = useLanguage();
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-80 rounded-md overflow-hidden shadow-sm border border-tea-200">
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-tea-50 text-tea-500 text-sm">
          <LoaderCircle size={22} className="animate-spin" />
          <p>{t("loadingVirtualTour")}</p>
        </div>
      )}
      <iframe
        src={url}
        title={title}
        onLoad={() => setLoaded(true)}
        className="w-full h-full"
      />
    </div>
  );
}
