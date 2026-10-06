import { Link } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import { CheckCircle2, Printer, Scissors } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { STATIONS } from "../data/stations";
import { localizeStation } from "../data/localize";
import { localizeVilla } from "../data/villa";
import logo from "../assets/brand/athu-BZCrr7Wr.png";
// Real on-site photo of the estate's own "Story of Ceylon Tea" signboard, used as the
// "introduction" station's QR watermark specifically (see getWatermarkImage below) instead of
// its own heroImage, since the user supplied this one directly for that card. This is a crop of
// the original photo with its own bottom contact-banner strip removed (that banner isn't used
// elsewhere on this page, so the crop just keeps the watermark to the scene itself).
import introductionWatermarkImg from "../assets/introduction/story-of-ceylon-tea-signboard-scene.jpg";
// "nursery" has a heroVideo but no heroImage, so it falls back to this section photo instead.
import nurseryWatermarkImg from "../assets/nursery/prepa-WnVZlTRI.jpeg";
// "mushroom-hut" has neither a heroImage nor a heroVideo, so it falls back to this section photo.
import mushroomHutWatermarkImg from "../assets/mushroom-hut/pink-oyster.jpg";
// 17 stations' heroImage is a generated multi-photo collage (several photos side by side) rather
// than a single photo — fine as a hero banner, but busy/seamy as a faded watermark. Each of these
// uses a single existing photo instead: the same one already used in that station's own sections
// where one exists, or (for the four with no other section photo at all) one panel cropped out of
// their own collage, so it's still the exact same photographic content already on the site.
import pahatharataManufacturingWatermarkImg from "../assets/pahatharata-manufacturing/factory-floor-worker.jpg";
import cinnamonWatermarkImg from "../assets/cinnamon/cinnamon-fruit.jpg";
import gingerTurmericWatermarkImg from "../assets/ginger/ginger-rhizome.jpg";
import turmericWatermarkImg from "../assets/turmeric/turmeric-flower.webp";
import beeWatermarkImg from "../assets/bee/bee-flight.jpg";
import coconutFieldWatermarkImg from "../assets/coconut/coconut-inflorescence.jpg";
import jaggeryPalmWatermarkImg from "../assets/kithul/kithul-leaves.jpg";
import uniqueFruitsWatermarkImg from "../assets/dragon-fruit/dragon-fruit-vine.jpg";
import handmadeFactoryWatermarkImg from "../assets/handmade-factory/withering-rolling-hands.jpg";
import sortingWatermarkImg from "../assets/sorting/grading-machinery-worker.jpg";
import packingWatermarkImg from "../assets/packing/graded-tea-sacks.jpg";
import teaCenterWatermarkImg from "../assets/tea-center/tea-centre-entrance.jpg";
import clonalTeaWatermarkImg from "../assets/nursery/gallery/pla9-moj4O07C.jpg";
// These four collages have no other section photo anywhere in the app, so each is one panel
// cropped directly out of its own existing collage file instead.
import shadeManagementWatermarkImg from "../assets/shade-management/shade-tree-signboard.jpg";
import pruningWatermarkImg from "../assets/pruning/first-crosscut-sign.jpg";
import pluckingWatermarkImg from "../assets/plucking/visitors-plucking.jpg";
import teaFactoryWatermarkImg from "../assets/tea-factory/factory-building-signage.jpg";

const COLLAGE_WATERMARK_OVERRIDES: Record<string, string> = {
  "pahatharata-manufacturing": pahatharataManufacturingWatermarkImg,
  cinnamon: cinnamonWatermarkImg,
  "ginger-turmeric": gingerTurmericWatermarkImg,
  turmeric: turmericWatermarkImg,
  bee: beeWatermarkImg,
  "coconut-field": coconutFieldWatermarkImg,
  "jaggery-palm": jaggeryPalmWatermarkImg,
  "unique-fruits": uniqueFruitsWatermarkImg,
  "handmade-factory": handmadeFactoryWatermarkImg,
  "shade-management": shadeManagementWatermarkImg,
  pruning: pruningWatermarkImg,
  sorting: sortingWatermarkImg,
  packing: packingWatermarkImg,
  plucking: pluckingWatermarkImg,
  "tea-factory": teaFactoryWatermarkImg,
  "tea-center": teaCenterWatermarkImg,
  "clonal-tea": clonalTeaWatermarkImg,
};

/** Every QR card gets a faint background watermark using a real photo already in the app —
 * each station's own heroImage where it has one, with explicit overrides for the few stations
 * whose heroImage is a multi-photo collage (see COLLAGE_WATERMARK_OVERRIDES) or that have no
 * heroImage at all (see imports above). */
function getWatermarkImage(station: { id: string; heroImage?: string }): string | undefined {
  if (station.id === "introduction") return introductionWatermarkImg;
  if (station.id === "nursery") return nurseryWatermarkImg;
  if (station.id === "mushroom-hut") return mushroomHutWatermarkImg;
  if (COLLAGE_WATERMARK_OVERRIDES[station.id]) return COLLAGE_WATERMARK_OVERRIDES[station.id];
  return station.heroImage;
}

/**
 * Batch print sheet: one QR code per station, meant to be printed and
 * physically placed at each stage of the factory tour. Scanning a code
 * on-site takes a visitor straight to that station's info page.
 */
export function QrSheet() {
  const { t, language } = useLanguage();
  const origin = window.location.origin;
  const printedOn = new Intl.DateTimeFormat(language, { dateStyle: "long" }).format(new Date());
  const villa = localizeVilla(language);

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 print:max-w-none print:px-6 print:py-6">
      {/* Screen-only controls */}
      <div className="flex items-center justify-between gap-3 mb-6 print:hidden">
        <div className="min-w-0">
          <h1 className="font-heading font-semibold text-2xl text-tea-900 dark:text-white truncate">{t("qrSheetTitle")}</h1>
          <p className="text-tea-600 dark:text-tea-400 text-sm truncate">{t("qrSheetSubtitle")}</p>
        </div>
        <button
          type="button"
          onClick={() => window.print()}
          className="flex items-center gap-1.5 bg-tea-700 hover:bg-tea-800 text-white rounded-lg px-4 py-2 text-sm font-medium shrink-0"
        >
          <Printer size={16} />
          {t("printButton")}
        </button>
      </div>

      {/* Print-only letterhead */}
      <div className="hidden print:flex items-center gap-3 border-b-2 border-tea-900 pb-4 mb-6">
        <img src={logo} alt="" className="w-10 h-10 rounded-full object-contain" />
        <div>
          <p className="font-heading font-semibold text-lg text-tea-900 leading-tight">{t("appTitle")}</p>
          <p className="text-tea-500 text-xs">
            {t("qrSheetTitle")} · {printedOn}
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5 print:!grid-cols-1 print:!gap-0">
        {STATIONS.map((station, index) => {
          const localized = localizeStation(station, language);
          const url = `${origin}/station/${station.id}`;
          const watermarkSrc = getWatermarkImage(station);
          return (
            <div
              key={station.id}
              className={`relative isolate overflow-hidden flex flex-col items-center gap-3 bg-white border-2 border-dashed border-tea-300 rounded-md p-6 print:break-inside-avoid print:border-tea-400 print:min-h-[250mm] print:justify-center ${
                index < STATIONS.length - 1 ? "print:break-after-page" : ""
              }`}
            >
              {watermarkSrc && (
                <img
                  src={watermarkSrc}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover opacity-35 -z-10"
                />
              )}

              <Scissors
                size={14}
                className="absolute -top-2 -left-2 text-tea-400 bg-tea-50 rounded-full p-0.5 print:hidden"
              />

              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-tea-700 text-white font-semibold text-xs shrink-0">
                  {station.order}
                </span>
                <span className="text-tea-500 text-xs font-medium uppercase tracking-wide">
                  {t("stationOf").replace("{current}", String(station.order)).replace("{total}", String(STATIONS.length))}
                </span>
                {station.verified ? (
                  <CheckCircle2 size={14} className="text-tea-600" />
                ) : (
                  <span className="text-[10px] uppercase tracking-wide text-brass-600 bg-brass-300/15 border border-brass-300/50 rounded-full px-2 py-0.5">
                    {t("draftLabel")}
                  </span>
                )}
              </div>

              <h2 className="font-heading font-semibold text-xl text-tea-900 text-center print:text-3xl">{localized.name}</h2>

              <div className="p-3 bg-white rounded-xl border border-tea-100 shadow-sm">
                <QRCodeSVG
                  value={url}
                  size={170}
                  className="print:!w-[320px] print:!h-[320px]"
                  level="H"
                  fgColor="#1a2e17"
                  imageSettings={{ src: logo, height: 32, width: 32, excavate: true }}
                />
              </div>

              <p className="text-tea-600 text-xs font-medium print:text-base">{t("scanQrHint")}</p>
              <p className="text-tea-400 text-[11px] break-all text-center font-mono">{url}</p>

              <div className="w-full flex items-center gap-2 pt-3 mt-1 border-t border-tea-100">
                <img src={logo} alt="" className="w-5 h-5 rounded-full object-contain opacity-80" />
                <span className="text-tea-400 text-[11px]">{t("appTitle")}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Special QR codes: entrance overview and villa marketing, separate from the per-station tour codes above */}
      <div className="mt-10 pt-8 border-t-2 border-tea-200 dark:border-tea-700 print:break-before-page">
        <div className="grid sm:grid-cols-2 gap-5 print:!grid-cols-1 print:!gap-0">
          <div className="relative flex flex-col items-center gap-3 bg-white border-2 border-dashed border-gold-400 rounded-md p-6 print:break-inside-avoid print:break-after-page print:border-gold-500 print:min-h-[250mm] print:justify-center">
            <Scissors size={14} className="absolute -top-2 -left-2 text-tea-400 bg-tea-50 rounded-full p-0.5 print:hidden" />
            <h2 className="font-heading font-semibold text-xl text-tea-900 text-center print:text-3xl">{t("appTitle")}</h2>
            <p className="text-tea-500 text-xs text-center">{t("tagline")}</p>
            <div className="p-3 bg-white rounded-xl border border-tea-100 shadow-sm">
              <QRCodeSVG
                value={`${origin}/`}
                size={170}
                className="print:!w-[320px] print:!h-[320px]"
                level="H"
                fgColor="#1a2e17"
                imageSettings={{ src: logo, height: 32, width: 32, excavate: true }}
              />
            </div>
            <p className="text-tea-600 text-xs font-medium print:text-base">{t("scanQrHint")}</p>
            <p className="text-tea-400 text-[11px] break-all text-center font-mono">{`${origin}/`}</p>
            <div className="w-full flex items-center gap-2 pt-3 mt-1 border-t border-tea-100">
              <img src={logo} alt="" className="w-5 h-5 rounded-full object-contain opacity-80" />
              <span className="text-tea-400 text-[11px]">{t("appTitle")}</span>
            </div>
          </div>

          <div className="relative flex flex-col items-center gap-3 bg-white border-2 border-dashed border-gold-400 rounded-md p-6 print:break-inside-avoid print:border-gold-500 print:min-h-[250mm] print:justify-center">
            <Scissors size={14} className="absolute -top-2 -left-2 text-tea-400 bg-tea-50 rounded-full p-0.5 print:hidden" />
            <h2 className="font-heading font-semibold text-xl text-tea-900 text-center print:text-3xl">{villa.name}</h2>
            <p className="text-tea-500 text-xs text-center">{villa.tagline}</p>
            <div className="p-3 bg-white rounded-xl border border-tea-100 shadow-sm">
              <QRCodeSVG
                value={`${origin}/villa`}
                size={170}
                className="print:!w-[320px] print:!h-[320px]"
                level="H"
                fgColor="#1a2e17"
                imageSettings={{ src: logo, height: 32, width: 32, excavate: true }}
              />
            </div>
            <p className="text-tea-600 text-xs font-medium print:text-base">{t("scanQrHint")}</p>
            <p className="text-tea-400 text-[11px] break-all text-center font-mono">{`${origin}/villa`}</p>
            <div className="w-full flex items-center gap-2 pt-3 mt-1 border-t border-tea-100">
              <img src={logo} alt="" className="w-5 h-5 rounded-full object-contain opacity-80" />
              <span className="text-tea-400 text-[11px]">{t("appTitle")}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 print:hidden">
        <Link to="/" className="text-tea-600 dark:text-tea-400 hover:text-tea-900 dark:hover:text-white text-sm">
          ← {t("backToApp")}
        </Link>
      </div>
    </div>
  );
}
