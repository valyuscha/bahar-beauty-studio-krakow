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
