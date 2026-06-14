# Bahar Beauty Studio Krakow

Marketing website for **Bahar Beauty Studio Krakow** — a modern beauty studio in central Kraków offering manicure, pedicure, brow, and lash services.

- **Live repo**: https://github.com/valyuscha/bahar-beauty-studio-krakow
- **Booksy**: https://booksy.com/pl-pl/321503_bahar-beauty-studio-krakow_paznokcie_8820_krakow#ba_s=seo
- **Instagram**: https://www.instagram.com/bahar_beautystudio_krakow/
- **Facebook**: https://www.facebook.com/p/Bahar-beautystudio-Krakow-61581734564297/
- **Address**: Józefa Dietla 93, 31-031 Kraków
- **Phone**: 571 927 824
- **Hours**: Daily 10:00 – 21:00

## Tech stack

- React (CRA + craco) frontend with Tailwind CSS, framer-motion, lucide-react
- Multi-language support (PL / EN / UA) via `LanguageContext`
- FastAPI backend (`backend/`)

## Development

```bash
# install frontend deps
npm run install:frontend

# run frontend dev server (http://localhost:3000)
npm run dev

# production build
npm run build
```

## Project structure

- `frontend/` — React application
  - `src/constants/site.js` — business info (contact, hours, booking/social links, gallery)
  - `src/i18n/translations.js` — PL/EN/UA copy
  - `src/components/` — page sections (Hero, About, Services, Gallery, Reviews, Booking, Location, Footer, ...)
- `backend/` — FastAPI service
