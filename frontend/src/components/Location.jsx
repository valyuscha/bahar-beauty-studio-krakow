import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Reveal from "@/components/Reveal";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { SITE } from "@/constants/site";

export const Location = () => {
  const { t } = useLanguage();
  return (
    <section id="location" data-testid="location-section" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="rounded-[2rem] overflow-hidden border border-border/70 bg-card">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Map preview */}
            <div className="relative min-h-[320px] lg:min-h-[520px]">
              <img
                src="https://images.unsplash.com/photo-1573487895669-c98ce2e9d2cf?crop=entropy&cs=srgb&fm=jpg&w=1400&q=85"
                alt="Kraków street view"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-foreground/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                <div className="rounded-2xl bg-background/85 backdrop-blur-md px-5 py-4 border border-border/60">
                  <p className="text-[11px] tracking-luxury uppercase text-muted-foreground">
                    Kraków
                  </p>
                  <p className="font-display text-xl mt-1">{SITE.address.split(",")[0]}</p>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="p-8 sm:p-12 flex flex-col gap-8 justify-center">
              <Reveal>
                <span className="text-xs tracking-luxury uppercase text-primary">
                  {t.location.eyebrow}
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="font-display text-4xl sm:text-5xl leading-[1.05]">
                  {t.location.title}
                </h2>
              </Reveal>

              <div className="grid grid-cols-1 gap-5">
                <Reveal delay={0.1}>
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-secondary text-primary flex items-center justify-center shrink-0">
                      <MapPin className="h-4 w-4" strokeWidth={1.4} />
                    </div>
                    <div>
                      <p className="text-[11px] tracking-luxury uppercase text-muted-foreground">
                        {t.location.addressLabel}
                      </p>
                      <p className="font-display text-xl mt-1">{SITE.address}</p>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={0.15}>
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-secondary text-primary flex items-center justify-center shrink-0">
                      <Clock className="h-4 w-4" strokeWidth={1.4} />
                    </div>
                    <div>
                      <p className="text-[11px] tracking-luxury uppercase text-muted-foreground">
                        {t.location.hoursLabel}
                      </p>
                      <p className="font-display text-xl mt-1">{t.location.hours}</p>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={0.2}>
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-secondary text-primary flex items-center justify-center shrink-0">
                      <Phone className="h-4 w-4" strokeWidth={1.4} />
                    </div>
                    <div>
                      <p className="text-[11px] tracking-luxury uppercase text-muted-foreground">
                        {t.location.phoneLabel}
                      </p>
                      <a
                        href={`tel:${SITE.phoneTel}`}
                        data-testid="location-phone"
                        className="font-display text-xl mt-1 inline-block hover:text-primary transition-colors"
                      >
                        {SITE.phone}
                      </a>
                    </div>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.25}>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                  <a
                    href={SITE.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="location-navigate-btn"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background hover:bg-primary px-8 py-4 text-xs tracking-luxury uppercase transition-colors"
                  >
                    <Navigation className="h-4 w-4" strokeWidth={1.5} />
                    {t.location.navigate}
                  </a>
                  <a
                    href={`tel:${SITE.phoneTel}`}
                    data-testid="location-call-btn"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 hover:border-foreground/60 px-8 py-4 text-xs tracking-luxury uppercase transition-colors"
                  >
                    <Phone className="h-4 w-4" strokeWidth={1.5} />
                    {t.location.call}
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
