import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Reveal from "@/components/Reveal";
import { MapPin, Clock, Phone, Navigation, Wifi, Car, CreditCard, Heart } from "lucide-react";
import { SITE } from "@/constants/site";

const AMENITY_ICONS = [Wifi, Car, CreditCard, Heart];
const MOON_EMBLEM = "/moon-emblem.png";

const InfoItem = ({ icon: Icon, label, children, delay, testId }) => (
  <Reveal delay={delay}>
    <div
      data-testid={testId}
      className="flex flex-col items-center text-center gap-3 px-2"
    >
      <div className="h-12 w-12 rounded-full bg-secondary text-primary flex items-center justify-center">
        <Icon className="h-5 w-5" strokeWidth={1.4} />
      </div>
      <div>
        <p className="text-[11px] tracking-luxury uppercase text-muted-foreground">
          {label}
        </p>
        <div className="font-display text-lg sm:text-xl mt-1">{children}</div>
      </div>
    </div>
  </Reveal>
);

export const Location = () => {
  const { t } = useLanguage();
  return (
    <section id="location" data-testid="location-section" className="py-16 sm:py-32">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="relative rounded-[2.5rem] border border-border/70 bg-card overflow-hidden">
          {/* subtle warm glow backdrop */}
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />

          <div className="relative px-6 py-12 sm:px-14 sm:py-16 text-center">
            {/* Moon emblem */}
            <Reveal>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="location-map-link"
                className="group mx-auto block h-24 w-24 sm:h-28 sm:w-28 rounded-full overflow-hidden ring-1 ring-border bg-[#0d0c0b] shadow-xl shadow-black/10"
              >
                <img
                  src={MOON_EMBLEM}
                  alt="Moon Beauty Space"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </a>
            </Reveal>

            <Reveal delay={0.05}>
              <span className="mt-6 inline-block text-xs tracking-luxury uppercase text-primary">
                {t.location.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl leading-[1.05] max-w-2xl mx-auto">
                {t.location.title}
              </h2>
            </Reveal>

            {/* Info trio */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 max-w-3xl mx-auto">
              <InfoItem icon={MapPin} label={t.location.addressLabel} delay={0.15} testId="location-address">
                {SITE.address}
              </InfoItem>
              <InfoItem icon={Clock} label={t.location.hoursLabel} delay={0.2} testId="location-hours">
                {t.location.hours}
              </InfoItem>
              <InfoItem icon={Phone} label={t.location.phoneLabel} delay={0.25} testId="location-phone-wrap">
                <a
                  href={`tel:${SITE.phoneTel}`}
                  data-testid="location-phone"
                  className="hover:text-primary transition-colors"
                >
                  {SITE.phone}
                </a>
              </InfoItem>
            </div>

            {/* Amenities */}
            <Reveal delay={0.3}>
              <div
                className="mt-12 flex flex-wrap justify-center gap-2.5"
                data-testid="location-amenities"
              >
                {t.location.amenities.map((a, i) => {
                  const Icon = AMENITY_ICONS[i % AMENITY_ICONS.length];
                  return (
                    <span
                      key={i}
                      data-testid={`location-amenity-${i}`}
                      className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-secondary/40 px-4 py-2 text-sm text-foreground/80"
                    >
                      <Icon className="h-4 w-4 text-primary" strokeWidth={1.5} />
                      {a}
                    </span>
                  );
                })}
              </div>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.35}>
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="location-navigate-btn"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background hover:bg-primary px-8 py-4 text-xs tracking-luxury uppercase transition-colors whitespace-nowrap"
                >
                  <Navigation className="h-4 w-4" strokeWidth={1.5} />
                  {t.location.navigate}
                </a>
                <a
                  href={`tel:${SITE.phoneTel}`}
                  data-testid="location-call-btn"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 hover:border-foreground/60 px-8 py-4 text-xs tracking-luxury uppercase transition-colors whitespace-nowrap"
                >
                  <Phone className="h-4 w-4" strokeWidth={1.5} />
                  {t.location.call}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
