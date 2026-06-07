# Moon Beauty Space — PRD

## Original Problem Statement
Build a premium modern marketing website for the beauty salon "Moon Beauty Space" in Kraków. Style: luxury but warm, soft beige + white + warm black, elegant typography, smooth reveal animations, mobile-first, high conversion for bookings, feminine but not overloaded. Polish default with EN/UA versions. Sections: Hero, About, Services, Why Us, Gallery, Reviews, Booking, Location, Footer. Tech: React + Tailwind, light/dark mode, accessible contrast.

## User Choices (from clarification)
- Backend: simple contact form saved to MongoDB + Booksy redirect link
- Images: professional stock photos (Unsplash/Pexels)
- Map: button that redirects to Google Maps (no embed)
- i18n: PL / EN / UA all active from start
- Stack: React JSX (no TS)

## User Personas
- **Primary**: Polish-speaking women in Kraków looking for a premium beauty salon to book a visit
- **Secondary**: International visitors (EN) or Ukrainian-speaking residents (UA)
- **Operator**: Salon owner who wants to receive contact-form leads and direct people to Booksy

## Core Requirements
- One-page premium marketing site with smooth scroll between sections
- Trilingual content (PL/EN/UA) via runtime language switcher with localStorage persistence
- Light/Dark theme toggle with `prefers-color-scheme` detection
- Booking form persists to MongoDB (`bookings` collection) and shows success state
- External CTAs: Booksy (open new tab), Google Maps directions, tel: links
- Mobile-first responsive layout, reveal animations on scroll (framer-motion)

## What's Been Implemented (2026-06-07)
- Backend: `POST/GET /api/bookings`, kept `/api/status` template endpoints
- Frontend providers: `ThemeProvider`, `LanguageProvider` (PL/EN/UA)
- Components: `Navbar` (sticky glass), `Hero`, `About`, `Services`, `WhyUs`, `Gallery`, `Reviews` (marquee), `Booking` (form + success state + Booksy), `Location`, `Footer`, `LanguageSwitcher`, `ThemeToggle`
- Custom typography: Cormorant Garamond (display) + Manrope (body)
- Custom palette: soft beige / white / warm black (light + dark variants)
- E2E tested via testing_agent_v3 — 100% backend (7/7) and frontend flows green

## PREMIUM NAIL-STUDIO REDESIGN (2026-06-07)
Re-positioned the site from a generic beauty salon to a premium **nail studio** brand (per new owner brief). All content rewritten in PL/EN/UA.
- **Hero**: split layout (master-at-work image left, text right) + rating chip (4.9 / 632+ opinii) + 2 CTAs. Headline "Paznokcie, do których chcesz wracać".
- **About**: "Więcej niż salon paznokci" + 3 paragraphs + 4 value cards (Precyzja / Komfort / Nowoczesne techniki / Indywidualne podejście).
- **Services**: editorial category list — Manicure / Przedłużanie / Pedicure / Brwi i rzęsy (no price list); "Pełna oferta" → Booksy.
- **Why us**: 6-item grid.
- **Gallery**: filterable tabs (Natural, French, Extensions, Minimal, Elegant, Pedicure) via `GALLERY`/`GALLERY_TABS` in `constants/site.js`.
- **Reviews**: 4.9 / 632+ opinii marquee.
- **Booking**: large form (saves to DB) + Zadzwoń + Booksy buttons; service dropdown built from service categories.
- **Location**: address updated to **Długa 47/1, 31-147 Kraków** + amenities (Wi-Fi, Parking, Płatność kartą, Przyjazne miejsce) + Maps/tel.
- **NEW Instagram section** (`InstagramFeed.jsx`): image grid + "Obserwuj nas" CTA.
- Verified end-to-end via testing_agent — 100% backend (7/7) + 100% frontend. Report: `/app/test_reports/iteration_2.json`.
- NOTE: Booksy (`booksy.com`) and Instagram (`instagram.com`) links are still PLACEHOLDERS in `constants/site.js`.

## Prioritized Backlog
### P1
- Replace generic `https://booksy.com/` with the salon's real Booksy page (constant `SITE.booksyUrl`)
- Add salon's real Instagram URL (`SITE.instagramUrl`)
- Add real salon images (the customer can replace stock ones in `/app/frontend/src/constants/site.js`)

### P2
- Add basic rate limiting / honeypot for `POST /api/bookings`
- Email notification on new booking (Resend / SendGrid) so the salon receives leads instantly
- Split translations into per-locale files when adding more languages
- SEO: `sitemap.xml`, `robots.txt`, structured data (LocalBusiness JSON-LD)
- Admin panel to view incoming bookings

## Next Tasks
- Collect real Booksy + Instagram URLs from owner
- Optionally connect email/SMS notifications for new bookings
