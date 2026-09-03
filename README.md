# 🍃 Athukorala Tea Factory — Visitor Tour Guide

A multilingual, QR-code-driven tour guide web app for **Athukorala Tea Factory**, a Ceylon tea producer in Pitigala, Sri Lanka. Visitors scan a QR code at each physical stop on the factory tour and land straight on that stage's story, in their own language — no app download required.

## ✨ Features

- 📱 **QR-code navigation** — each of the 26 tour stations has its own code; scanning one jumps straight to that stage, no menu-hunting
- 🌍 **11 languages**, including right-to-left Arabic — English, Chinese, Japanese, Spanish, French, Russian, Sinhala, Arabic, Italian, German, Tamil
- 🔄 **In-place language switching** — pick a language from the header dropdown, no page reload or navigation away
- ✅ **26 fully verified stations** — real photos, videos, and process details sourced from the working factory and its own crop microsites, covering the full black-tea line (Plucking → Packing), the Tea Nursery (with hero and process video), artisanal/handmade specialty teas, and estate crops like cinnamon, ginger, turmeric, coconut, kithul/jaggery palm, and honeybees
- 🍓 **Fruit gallery** — the Unique Fruits station opens on an island-wide intro, then lets visitors pick a fruit (Dragon Fruit, Pineapple) from a card gallery to see that one fruit's full detail — botany, characteristics, uses, and its own factory tea product where one exists — on a single page
- 📍 **Optional on-site confirmation** — a lightweight, privacy-friendly badge that appears once a visitor's device GPS is within range of the estate, purely additive and never gates any content
- 🏡 **Kurunduwaththa Villa page** — a marketing page for the estate's stay-on-site accommodation, with its own QR code
- 🔖 **Favorites** — bookmark stations to revisit, saved locally on-device
- ⏱️ **Reading-time estimates** — calculated from actual content length, not guessed
- 📴 **Offline-ready (PWA)** — installable to a home screen, tour content and video cached for spotty factory Wi-Fi
- 🖨️ **Staff QR print sheet** — a ready-to-print page of every station's code plus two special codes (entrance overview, villa marketing), letterhead included

## 🛠️ Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [React Router](https://reactrouter.com/) for routing
- [Framer Motion](https://motion.dev/) for animation
- [qrcode.react](https://github.com/zpao/qrcode.react) for QR code generation
- [vite-plugin-pwa](https://vite-pwa-org.netlify.app/) for offline support

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser. Use `-- --host` to expose the dev server on your LAN for testing on a phone:

```bash
npm run dev -- --host
```

Other scripts:

```bash
npm run build       # type-check and build for production
npm run preview     # preview the production build locally
npm run lint         # run Oxlint
npm run check-links  # scan for hardcoded https:// URLs and flag any that don't respond
```

## 📂 Project Structure

```
src/
├── pages/           # Home, AllStations, Highlights, StationDetail, VillaPage, QrSheet
├── components/       # Header, LanguageGate, LanguagePicker
├── context/          # LanguageContext, FavoritesContext, VisitedContext
├── hooks/             # useOnSiteConfirmation
├── data/             # stations.ts, translations.ts, villa.ts, localize.ts,
│                     # estimateTime.ts, estateLocation.ts, stations.schema.ts
├── i18n/              # languages.ts, ui.ts
└── assets/            # station photos, video, brand imagery
```

The Home page is a short landing page (hero, stats, and two buttons). The station list lives on its own `/stations` page, and the two real-photo highlight cards plus the cultivar photo strip live on `/highlights` — both reachable from Home.

## 🌐 Content Policy

Every station is `verified: true`, sourced from the factory itself — either directly (on-site video/audio transcripts, real photos) or from the factory's own crop microsites, each checked photo-by-photo for third-party watermarks before use. Where a newer source conflicts with an already-verified fact, the more specific, deliberately-sourced fact wins; every such call is documented in the doc comment at the top of `src/data/stations.ts`, which also tracks exactly where each station's content and images came from.

Translations (`src/data/translations.ts`) are a separate concern: most of the text in all 10 non-English languages is machine-translated and not yet reviewed by a native speaker — see that file's own doc comment for which strings are the exception (a few pulled directly from the factory's own multilingual site).

## 🖨️ Printing Station QR Codes

Visit `/qr-codes` for a print-ready sheet with one QR code per station, cut-line markers, and letterhead — meant for staff to print and post at each physical stop on the tour. The same sheet includes two special codes, visually separated from the rest: one for the entrance that gives visitors a quick overview, and one marketing code for Kurunduwaththa Villa.
