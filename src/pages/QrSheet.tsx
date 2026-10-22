import { Link } from "react-router-dom";
import { CheckCircle2, Printer, Scissors } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { STATIONS } from "../data/stations";
import { localizeStation } from "../data/localize";
import { localizeVilla } from "../data/villa";
import { QrSignCard } from "../components/QrSignCard";
// Backgrounds for the two special cards: the tour entrance card shows the estate's tea field,
// and the villa card shows the aerial shot of the estate where the villa stands.
import tourEntranceImg from "../assets/introduction/ceylon-tea-field.jpg";
import villaImg from "../assets/brand/ath-CFusSk2P.jpg";
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
import clonalTeaWatermarkImg from "../assets/nursery/gallery/pla1-DxzHBDYN.jpg";
// These three collages have no other section photo anywhere in the app, so each is one panel
// cropped directly out of its own existing collage file instead.
import shadeManagementWatermarkImg from "../assets/shade-management/shade-tree-signboard.jpg";
import pluckingWatermarkImg from "../assets/plucking/visitors-plucking.jpg";
import teaFactoryWatermarkImg from "../assets/tea-factory/factory-building-signage.jpg";
// "pruning" has its own section photo, used here instead of a panel cropped out of its collage.
import pruningWatermarkImg from "../assets/pruning/worker-cutting-tool.jpg";
// User-supplied photo of the estate's own tea-tin display shelf, showing its artisanal grades
// (Pink, White, Purple, Silver Tips, Golden Tips) together — used for "artisanal-tea-grades"
// specifically instead of its heroImage (a text-heavy sign) or its own section photos (busy
// individual product-package shots).
import artisanalTeaGradesWatermarkImg from "../assets/artisanal-tea-grades/tea-tin-display-shelf.jpg";

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
  "artisanal-tea-grades": artisanalTeaGradesWatermarkImg,
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
  const villa = localizeVilla(language);

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 print:max-w-none print:p-0">
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

      <div className="grid sm:grid-cols-2 gap-5 print:!grid-cols-1 print:!gap-0">
        {STATIONS.map((station, index) => {
          const localized = localizeStation(station, language);
          const url = `${origin}/station/${station.id}`;
          const watermarkSrc = getWatermarkImage(station);
          return (
            <div
              key={station.id}
              className={`relative print:break-inside-avoid ${index < STATIONS.length - 1 ? "print:break-after-page" : ""}`}
            >
              <QrSignCard
                title={localized.name}
                url={url}
                footer={t("appTitle")}
                backgroundSrc={watermarkSrc}
                corner={
                  <Scissors
                    size={14}
                    className="absolute top-1 right-1 z-10 text-tea-400 bg-tea-50 rounded-full p-0.5 print:hidden"
                  />
                }
                badge={
                  <>
                    <span className="qr-sign-number">{station.order}</span>
                    <span className="qr-sign-chip">
                      {t("stationOf").replace("{current}", String(station.order)).replace("{total}", String(STATIONS.length))}
                      {station.verified ? (
                        <CheckCircle2 className="qr-sign-verified" />
                      ) : (
                        <span className="qr-sign-draft">{t("draftLabel")}</span>
                      )}
                    </span>
                  </>
                }
                tagline={<div className="qr-sign-hint">{t("scanQrHint")}</div>}
              />
            </div>
          );
        })}
      </div>

      {/* Special QR codes: entrance overview and villa marketing, separate from the per-station tour codes above */}
      <div className="mt-10 pt-8 border-t-2 border-tea-200 dark:border-tea-700 print:break-before-page print:m-0 print:p-0 print:border-0">
        <div className="grid sm:grid-cols-2 gap-5 print:!grid-cols-1 print:!gap-0">
          <div className="relative print:break-inside-avoid print:break-after-page">
            <QrSignCard
              title={t("appTitle")}
              url={`${origin}/`}
              footer={t("appTitle")}
              backgroundSrc={tourEntranceImg}
              corner={
                <Scissors
                  size={14}
                  className="absolute top-1 right-1 z-10 text-tea-400 bg-tea-50 rounded-full p-0.5 print:hidden"
                />
              }
              tagline={
                <>
                  <div>{t("tagline")}</div>
                  <div className="qr-sign-hint">{t("scanQrHint")}</div>
                </>
              }
            />
          </div>

          <div className="relative print:break-inside-avoid">
            <QrSignCard
              title={villa.name}
              url={`${origin}/villa`}
              footer={t("appTitle")}
              backgroundSrc={villaImg}
              corner={
                <Scissors
                  size={14}
                  className="absolute top-1 right-1 z-10 text-tea-400 bg-tea-50 rounded-full p-0.5 print:hidden"
                />
              }
              tagline={
                <>
                  <div>{villa.tagline}</div>
                  <div className="qr-sign-hint">{t("scanQrHint")}</div>
                </>
              }
            />
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
