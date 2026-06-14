import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import { Star, Quote, ArrowUpRight } from "lucide-react";
import { SITE } from "@/constants/site";

export const Reviews = () => {
  const { t } = useLanguage();
  const items = t.reviews.items;
  // Duplicate for seamless marquee
  const loop = [...items, ...items];

  return (
    <section id="reviews" data-testid="reviews-section" className="py-16 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeader eyebrow={t.reviews.eyebrow} title={t.reviews.title} testId="reviews-header" />

        <Reveal delay={0.1}>
          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10"
            data-testid="reviews-rating"
          >
            {[t.hero.ratings.google, t.hero.ratings.booksy].map((r, i) => (
              <div key={i} data-testid={`reviews-rating-${i}`} className="flex items-center gap-3">
                <div className="flex items-center gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" strokeWidth={0} />
                  ))}
                </div>
                <div className="leading-tight text-left">
                  <p className="font-display text-2xl text-foreground">
                    {r.score} <span className="text-base text-foreground/70">{r.source}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="mt-16 relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex gap-5 sm:gap-6 animate-marquee w-max">
          {loop.map((r, i) => (
            <div
              key={i}
              data-testid={`review-card-${i}`}
              className="shrink-0 w-max max-w-[88vw] rounded-3xl border border-border/70 bg-card p-6 sm:p-8"
            >
              <Quote className="h-6 w-6 text-primary" strokeWidth={1.4} />
              <p className="mt-4 font-display text-xl sm:text-2xl leading-snug text-foreground whitespace-nowrap">
                „{r.text}&rdquo;
              </p>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
                  ))}
                </div>
                <span className="text-sm text-foreground/60">{r.source}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Reveal delay={0.15}>
        <div className="mt-12 flex justify-center">
          <a
            href={SITE.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="reviews-cta"
            className="group inline-flex items-center gap-2 rounded-full border border-foreground/20 hover:bg-foreground hover:text-background px-9 py-4 text-xs tracking-luxury uppercase transition-colors"
          >
            {t.reviews.cta}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
          </a>
        </div>
      </Reveal>
    </section>
  );
};

export default Reviews;
