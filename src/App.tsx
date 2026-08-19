import { Link, Route, Routes } from "react-router-dom";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { Header } from "./components/Header";
import { LanguageGate } from "./components/LanguageGate";
import { useLanguage } from "./context/LanguageContext";
import { Home } from "./pages/Home";
import { StationDetail } from "./pages/StationDetail";
import { QrSheet } from "./pages/QrSheet";
import footerImg from "./assets/brand/ath-CFusSk2P.jpg";

function App() {
  return (
    <LanguageGate>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/station/:id" element={<StationDetail />} />
            <Route path="/qr-codes" element={<QrSheet />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </LanguageGate>
  );
}

function Footer() {
  const { t } = useLanguage();
  return (
    <footer
      id="contact"
      className="relative bg-tea-950 text-tea-200 border-t border-gold-500/40 print:hidden scroll-mt-32 bg-cover bg-center"
      style={{ backgroundImage: `url(${footerImg})` }}
    >
      <div className="absolute inset-0 bg-tea-950" style={{ opacity: 0.94 }} />
      <div className="relative max-w-4xl mx-auto px-4 py-10 grid sm:grid-cols-2 gap-8 text-center sm:text-left">
        <div>
          <h3 className="font-heading font-semibold text-white text-lg mb-4">{t("contactUs")}</h3>
          <ul className="space-y-2.5 text-sm font-light">
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <Phone size={14} className="shrink-0 text-gold-400" />
              <a href="tel:+94912291123" className="hover:text-white">
                091-229 1123 / 091-779 1123
              </a>
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <Mail size={14} className="shrink-0 text-gold-400" />
              <a href="mailto:atf@athukoralagroup.com" className="hover:text-white">
                atf@athukoralagroup.com
              </a>
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <MapPin size={14} className="shrink-0 text-gold-400" />
              <span>Kurunduwatta No 01, Pitigala, Sri Lanka</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-heading font-semibold text-white text-lg mb-4">{t("followUs")}</h3>
          <a
            href="https://www.facebook.com/athukorala.tea.1/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-light hover:text-white"
          >
            <ExternalLink size={14} className="text-gold-400" />
            Facebook
          </a>
        </div>
      </div>
      <div className="relative border-t border-white/10 py-4 text-center text-[11px] uppercase tracking-[0.15em] text-tea-400">
        <p>{t("footer")}</p>
        <Link to="/qr-codes" className="hover:text-white underline">
          {t("staffPrintQr")}
        </Link>
      </div>
    </footer>
  );
}

export default App;
