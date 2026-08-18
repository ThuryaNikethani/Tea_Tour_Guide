import { Link } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import { CheckCircle2, Printer, Scissors } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { STATIONS } from "../data/stations";
import { localizeStation } from "../data/localize";
import logo from "../assets/brand/athu-BZCrr7Wr.png";

/**
 * Batch print sheet: one QR code per station, meant to be printed and
 * physically placed at each stage of the factory tour. Scanning a code
 * on-site takes a visitor straight to that station's info page.
 */
export function QrSheet() {
  const { t, language } = useLanguage();
  const origin = window.location.origin;
  const printedOn = new Intl.DateTimeFormat(language, { dateStyle: "long" }).format(new Date());

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 print:max-w-none print:px-6 print:py-6">
      {/* Screen-only controls */}
      <div className="flex items-center justify-between mb-6 print:hidden">
        <div>
          <h1 className="font-display text-2xl text-tea-900">{t("qrSheetTitle")}</h1>
          <p className="text-tea-600 text-sm">{t("qrSheetSubtitle")}</p>
        </div>
        <button
          type="button"
          onClick={() => window.print()}
          className="flex items-center gap-1.5 bg-tea-700 hover:bg-tea-800 text-white rounded-lg px-4 py-2 text-sm font-medium"
        >
          <Printer size={16} />
          {t("printButton")}
        </button>
      </div>

      {/* Print-only letterhead */}
      <div className="hidden print:flex items-center gap-3 border-b-2 border-tea-900 pb-4 mb-6">
        <img src={logo} alt="" className="w-10 h-10 rounded-full object-contain" />
        <div>
          <p className="font-display text-lg text-tea-900 leading-tight">{t("appTitle")}</p>
          <p className="text-tea-500 text-xs">
            {t("qrSheetTitle")} · {printedOn}
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5 print:grid-cols-2 print:gap-x-6 print:gap-y-8">
        {STATIONS.map((station) => {
          const localized = localizeStation(station, language);
          const url = `${origin}/station/${station.id}`;
          return (
            <div
              key={station.id}
              className="relative flex flex-col items-center gap-3 bg-white border-2 border-dashed border-tea-300 rounded-2xl p-6 print:break-inside-avoid print:border-tea-400"
            >
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
                  <span className="text-[10px] uppercase tracking-wide text-amber-600 bg-amber-50 border border-amber-200 rounded-full px-2 py-0.5">
                    {t("draftLabel")}
                  </span>
                )}
              </div>

              <h2 className="font-display text-xl text-tea-900 text-center">{localized.name}</h2>

              <div className="p-3 bg-white rounded-xl border border-tea-100 shadow-sm">
                <QRCodeSVG
                  value={url}
                  size={170}
                  level="H"
                  fgColor="#1a2e17"
                  imageSettings={{ src: logo, height: 32, width: 32, excavate: true }}
                />
              </div>

              <p className="text-tea-600 text-xs font-medium">{t("scanQrHint")}</p>
              <p className="text-tea-400 text-[11px] break-all text-center font-mono">{url}</p>

              <div className="w-full flex items-center gap-2 pt-3 mt-1 border-t border-tea-100">
                <img src={logo} alt="" className="w-5 h-5 rounded-full object-contain opacity-80" />
                <span className="text-tea-400 text-[11px]">{t("appTitle")}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 print:hidden">
        <Link to="/" className="text-tea-600 hover:text-tea-900 text-sm">
          ← {t("backToApp")}
        </Link>
      </div>
    </div>
  );
}
