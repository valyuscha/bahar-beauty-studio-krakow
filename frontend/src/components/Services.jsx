import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";
import { SERVICE_IMAGES } from "@/constants/site";

export const Services = () => {
  const { t } = useLanguage();

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="services"
      data-testid="services-section"
      className="py-24 sm:py-32 bg-secondary/40"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          subtitle={t.services.subtitle}
          testId="services-header"
        />

        <div className="mt-14 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.items.map((item, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <article
                data-testid={`service-card-${i}`}
                className="group rounded-3xl overflow-hidden bg-card border border-border/70 hover:border-primary/40 transition-all duration-500 h-full flex flex-col"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={SERVICE_IMAGES[i % SERVICE_IMAGES.length]}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-2xl leading-tight">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 flex-1">{item.desc}</p>
                  <button
                    onClick={scrollToBooking}
                    data-testid={`service-cta-${i}`}
                    className="mt-5 inline-flex items-center gap-1 text-xs tracking-luxury uppercase text-foreground hover:text-primary transition-colors w-fit"
                  >
                    {t.services.cta}
                    <ArrowUpRight
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={1.5}
                    />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
