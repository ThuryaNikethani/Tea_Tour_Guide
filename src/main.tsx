import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { registerSW } from 'virtual:pwa-register'
import './index.css'
import App from './App.tsx'
import { LanguageProvider } from './context/LanguageContext.tsx'
import { FavoritesProvider } from './context/FavoritesContext.tsx'
import { VisitedProvider } from './context/VisitedContext.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'

// `autoUpdate` installs a new service worker in the background as soon as one is published, but
// an already-open tab keeps running on the old cached version until it's reloaded — visitors
// don't know to do that themselves, so an already-open tab could keep showing stale content
// (including this app's printable QR sheet) indefinitely. Reloading as soon as the new version is
// ready means everyone ends up on the latest deploy within moments, without a manual refresh.
registerSW({ immediate: true, onNeedRefresh: () => window.location.reload() })

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
          <FavoritesProvider>
            <VisitedProvider>
              <App />
            </VisitedProvider>
          </FavoritesProvider>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
