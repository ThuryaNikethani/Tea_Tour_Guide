import { Link, Route, Routes } from "react-router-dom";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { Header } from "./components/Header";
import { LanguageGate } from "./components/LanguageGate";
import { useLanguage } from "./context/LanguageContext";
import { Home } from "./pages/Home";
import { StationDetail } from "./pages/StationDetail";
import { ChangeLanguage } from "./pages/ChangeLanguage";
import { QrSheet } from "./pages/QrSheet";

function App() {
  return (
    <LanguageGate>
      <div className="min-h-screen bg-tea-50 flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/station/:id" element={<StationDetail />} />
            <Route path="/language" element={<ChangeLanguage />} />
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
    <footer className="bg-green-900 text-green-100 print:hidden">
      <div className="max-w-4xl mx-auto px-4 py-10 grid sm:grid-cols-2 gap-8">
        <div>
          <h3 className="text-white font-semibold mb-3">{t("contactUs")}</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={15} className="shrink-0" />
              <a href="tel:+94912291123" className="hover:text-white">
                091-229 1123 / 091-779 1123
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={15} className="shrink-0" />
              <a href="mailto:atf@athukoralagroup.com" className="hover:text-white">
                atf@athukoralagroup.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={15} className="shrink-0 mt-0.5" />
              <span>Kurunduwatta No 01, Pitigala, Sri Lanka</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">{t("followUs")}</h3>
          <a
            href="https://www.facebook.com/athukorala.tea.1/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm hover:text-white w-fit"
          >
            <ExternalLink size={15} />
            Facebook
          </a>
        </div>
      </div>
      <div className="border-t border-green-800 py-4 text-center text-xs text-green-300">
        <p>{t("footer")}</p>
        <Link to="/qr-codes" className="hover:text-white underline">
          {t("staffPrintQr")}
        </Link>
      </div>
    </footer>
  );
}

export default App;
