import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import { ArrowUpRight, Phone } from "lucide-react";
import { SITE, BOOKING_IMAGE } from "@/constants/site";

export const Booking = () => {
  const { t } = useLanguage();

  return (
    <section
      id="booking"
      data-testid="booking-section"
      className="py-16 sm:py-32 bg-secondary/40"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow={t.booking.eyebrow}
          title={t.booking.title}
          subtitle={t.booking.subtitle}
          testId="booking-header"
        />

        <Reveal delay={0.1}>
          <div className="mt-14 sm:mt-20 max-w-3xl mx-auto relative rounded-3xl overflow-hidden border border-border/70 bg-card">
            <img
              src={BOOKING_IMAGE}
              alt="Bahar Beauty Studio Krakow"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
            <div className="relative z-10 flex flex-col items-center text-center gap-3 py-14 px-6 sm:py-20">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2">
                <a
                  href={SITE.booksyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="booking-booksy-link"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background hover:bg-primary px-8 py-4 text-xs tracking-luxury uppercase transition-colors whitespace-nowrap"
                >
                  {t.booking.booksy}
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.5}
                  />
                </a>
                <a
                  href={`tel:${SITE.phoneTel}`}
                  data-testid="booking-call-link"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/30 hover:border-foreground/70 px-8 py-4 text-xs tracking-luxury uppercase transition-colors whitespace-nowrap"
                >
                  <Phone className="h-3.5 w-3.5" strokeWidth={1.5} />
                  {t.booking.call}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Booking;
