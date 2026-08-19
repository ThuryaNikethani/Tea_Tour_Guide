# 🍃 Athukorala Tea Factory — Visitor Tour Guide

A multilingual, QR-code-driven tour guide web app for **Athukorala Tea Factory**, a Ceylon tea producer in Pitigala, Sri Lanka. Visitors scan a QR code at each physical stop on the factory tour and land straight on that stage's story, in their own language — no app download required.

## ✨ Features

- 📱 **QR-code navigation** — each station has its own code; scanning one jumps straight to that stage, no menu-hunting
- 🌍 **11 languages**, including right-to-left Arabic — English, Chinese, Japanese, Spanish, French, Russian, Sinhala, Arabic, Italian, German, Tamil
- 🔄 **In-place language switching** — pick a language from the header dropdown, no page reload or navigation away
- 🌱 **Tea Nursery station** — real photos, real video, and real process details sourced from the working factory, covering everything from site selection to transplanting and cultivar trials
- 🏭 **Manufacturing stages** (Plucking → Packing) — supplementary walkthroughs clearly flagged as drafts, pending real on-site verification
- 🔖 **Favorites** — bookmark stations to revisit, saved locally on-device
- ⏱️ **Reading-time estimates** — calculated from actual content length, not guessed
- 📴 **Offline-ready (PWA)** — installable to a home screen, tour content and video cached for spotty factory Wi-Fi
- 🖨️ **Staff QR print sheet** — a ready-to-print page of every station's code, letterhead included

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
npm run build     # type-check and build for production
npm run preview   # preview the production build locally
npm run lint       # run Oxlint
```

## 📂 Project Structure

```
src/
├── pages/           # Home, StationDetail, QrSheet
├── components/       # Header, LanguageGate, LanguagePicker
├── context/          # LanguageContext, FavoritesContext
├── data/             # stations.ts, translations.ts, localize.ts, estimateTime.ts
├── i18n/              # languages.ts, ui.ts
└── assets/            # station photos, video, brand imagery
```

## 🌐 Content Policy

Station content is clearly split into two tiers:

- ✅ **Verified** — the Tea Nursery station's images, video, and facts are sourced directly from the working factory
- 🚧 **Draft** — the seven manufacturing stations are supplementary content flagged with an on-page notice, pending real verification before the tour is fully rolled out

## 🖨️ Printing Station QR Codes

Visit `/qr-codes` for a print-ready sheet with one QR code per station, cut-line markers, and letterhead — meant for staff to print and post at each physical stop on the tour.
