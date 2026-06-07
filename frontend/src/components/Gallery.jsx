import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import { GALLERY_IMAGES } from "@/constants/site";

// Bento-style spans for visual interest
const SPANS = [
  "sm:col-span-2 sm:row-span-2",
  "",
  "",
  "sm:row-span-2",
  "",
  "",
];

export const Gallery = () => {
  const { t } = useLanguage();
  return (
    <section
      id="gallery"
      data-testid="gallery-section"
      className="py-24 sm:py-32 bg-secondary/40"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow={t.gallery.eyebrow}
          title={t.gallery.title}
          subtitle={t.gallery.subtitle}
          testId="gallery-header"
        />

        <div className="mt-14 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-3 sm:gap-4">
          {GALLERY_IMAGES.map((src, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <figure
                data-testid={`gallery-item-${i}`}
                className={`group relative overflow-hidden rounded-2xl bg-card h-full w-full ${SPANS[i] || ""}`}
              >
                <img
                  src={src}
                  alt={`Moon Beauty Space gallery ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/15 transition-colors duration-500" />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
