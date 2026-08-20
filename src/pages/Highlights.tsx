import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { STATIONS, getStation } from "../data/stations";
import { localizeStation } from "../data/localize";
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

export function Highlights() {
  const { t, language } = useLanguage();
  const nurseryStation = getStation("nursery")!;
  const cultivarIndex = nurseryStation.sections?.findIndex((s) => s.heading === "Tea Cultivars") ?? -1;
  const cultivarSection = cultivarIndex >= 0 ? localizeStation(nurseryStation, language).sections?.[cultivarIndex] : undefined;

  return (
    <div className="bg-white">
      {/* ---------- Story: real content, text overlaid on full-bleed photography ---------- */}
      <section className="max-w-5xl mx-auto px-4 pt-10">
        <div className="grid md:grid-cols-2 gap-px bg-gold-500/25 border border-gold-500/25">
          <PhotoStoryCard
            image={featuredImg}
            eyebrow={t("stationOf").replace("{current}", String(nurseryStation.order)).replace("{total}", String(STATIONS.length))}
            heading={localizeStation(nurseryStation, language).name}
            body={localizeStation(nurseryStation, language).heroTagline}
            href={`/station/${nurseryStation.id}`}
            ctaLabel={t("startTour")}
          />
          {cultivarSection?.image && (
            <PhotoStoryCard
              image={cultivarSection.image}
              heading={cultivarSection.heading}
              body={cultivarSection.body}
              href={`/station/${nurseryStation.id}#section-${cultivarIndex}`}
              ctaLabel={t("startTour")}
            />
          )}
        </div>
      </section>

      {/* ---------- Cultivar photo strip: real signposted plants from the nursery, each linking to its own section ---------- */}
      <section className="max-w-4xl mx-auto px-4 pt-8 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gold-500/25 border border-gold-500/25">
          {CULTIVAR_PHOTOS.map(({ img, code }) => {
            const sectionIndex = nurseryStation.sections?.findIndex((s) => s.heading === code) ?? -1;
            const href = sectionIndex >= 0 ? `/station/${nurseryStation.id}#section-${sectionIndex}` : `/station/${nurseryStation.id}`;
            return (
              <Link key={code} to={href} className="relative block bg-white group">
                <img src={img} alt={code} loading="lazy" className="w-full h-40 object-cover group-hover:opacity-85 transition-opacity" />
                <figcaption className="absolute bottom-0 inset-x-0 bg-tea-950/70 group-hover:bg-tea-950/85 text-gold-200 text-[11px] font-semibold uppercase tracking-[0.1em] text-center py-1.5 transition-colors">
                  {code}
                </figcaption>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function PhotoStoryCard({
  image,
  eyebrow,
  heading,
  body,
  href,
  ctaLabel,
}: {
  image: string;
  eyebrow?: string;
  heading?: string;
  body?: string;
  href: string;
  ctaLabel: string;
}) {
  return (
    <div
      className="relative h-96 bg-cover bg-center flex flex-col justify-end p-7"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-tea-950/90 via-tea-950/35 to-transparent" />
      <div className="relative">
        {eyebrow && (
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-gold-300 mb-2">
            <CheckCircle2 size={12} />
            {eyebrow}
          </span>
        )}
        {heading && <h2 className="font-heading font-semibold text-2xl text-white mb-2">{heading}</h2>}
        {body && <p className="text-white/85 text-sm leading-relaxed font-light mb-4 line-clamp-3">{body}</p>}
        <Link
          to={href}
          className="inline-flex items-center gap-2 border border-white/70 hover:border-gold-400 hover:text-gold-300 text-white font-semibold text-xs uppercase tracking-[0.15em] px-5 py-2.5 transition-colors"
        >
          {ctaLabel}
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
