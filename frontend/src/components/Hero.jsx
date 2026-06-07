import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Check, ArrowRight } from "lucide-react";
import { HERO_IMAGE, SITE } from "@/constants/site";

export const Hero = () => {
  const { t } = useLanguage();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-[100svh] w-full overflow-hidden isolate"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Moon Beauty Space salon"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-32 sm:pt-40 pb-16 sm:pb-24 min-h-[100svh] flex items-end sm:items-center">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 backdrop-blur px-4 py-1.5 text-[11px] tracking-luxury uppercase text-foreground/80"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {t.hero.eyebrow}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1] text-foreground"
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 sm:mt-8 max-w-xl text-base sm:text-lg text-foreground/80 leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <button
              data-testid="hero-cta-book"
              onClick={() => scrollTo("booking")}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background hover:bg-primary px-8 py-4 text-xs tracking-luxury uppercase transition-colors"
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} />
            </button>
            <button
              data-testid="hero-cta-services"
              onClick={() => scrollTo("services")}
              className="inline-flex items-center justify-center rounded-full border border-foreground/30 hover:border-foreground/70 bg-background/20 backdrop-blur px-8 py-4 text-xs tracking-luxury uppercase text-foreground transition-colors"
            >
              {t.hero.ctaSecondary}
            </button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-3 max-w-2xl"
          >
            {t.hero.bullets.map((b, i) => (
              <li
                key={i}
                data-testid={`hero-bullet-${i}`}
                className="flex items-center gap-2 text-sm text-foreground/80"
              >
                <Check className="h-3.5 w-3.5 text-primary shrink-0" strokeWidth={2} />
                <span>{b}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>

      {/* Floating side info on large screens */}
      <div className="hidden xl:flex absolute right-10 bottom-10 z-10 flex-col items-end gap-2">
        <div className="rounded-2xl border border-border/50 bg-background/60 backdrop-blur-md px-5 py-4 text-right">
          <p className="text-[11px] tracking-luxury uppercase text-muted-foreground">Kraków</p>
          <p className="font-display text-2xl text-foreground">{SITE.address.split(",")[0]}</p>
          <p className="text-xs text-muted-foreground">{SITE.hoursDaily}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
