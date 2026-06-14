import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Instagram, Phone, MapPin, Facebook, Clock, Navigation } from "lucide-react";
import { SITE } from "@/constants/site";

export const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer data-testid="site-footer" className="border-t border-border/70 bg-background">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-10">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <p className="font-display text-3xl sm:text-4xl leading-tight">
              Bahar<span className="text-primary">.</span> Beauty Studio
            </p>
            <p className="mt-4 text-muted-foreground max-w-sm">{t.footer.tagline}</p>
          </div>

          <div>
            <p className="text-[11px] tracking-luxury uppercase text-muted-foreground">
              {t.footer.columns.contact}
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-3.5 w-3.5 mt-1 text-primary shrink-0" strokeWidth={1.5} />
                <a
                  href={`tel:${SITE.phoneTel}`}
                  data-testid="footer-phone"
                  className="hover:text-primary transition-colors"
                >
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 mt-1 text-primary shrink-0" strokeWidth={1.5} />
                <span className="text-foreground/80">{SITE.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] tracking-luxury uppercase text-muted-foreground">
              {t.footer.columns.hours}
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Clock className="h-3.5 w-3.5 mt-1 text-primary shrink-0" strokeWidth={1.5} />
                <span className="text-foreground/80">{t.location.hours}</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] tracking-luxury uppercase text-muted-foreground">
              {t.footer.columns.instagram}
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={SITE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="footer-instagram"
                  className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Instagram className="h-3.5 w-3.5" strokeWidth={1.5} />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={SITE.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="footer-facebook"
                  className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Facebook className="h-3.5 w-3.5" strokeWidth={1.5} />
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] tracking-luxury uppercase text-muted-foreground">
              {t.footer.columns.booksy}
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={SITE.booksyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="footer-booksy"
                  className="hover:text-primary transition-colors"
                >
                  Booksy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] tracking-luxury uppercase text-muted-foreground">
              {t.footer.columns.map}
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="footer-map"
                  className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Navigation className="h-3.5 w-3.5" strokeWidth={1.5} />
                  {t.location.navigate}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border/60 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted-foreground">
            © {year} {SITE.brand}. {t.footer.rights}
          </p>
          <p className="text-[11px] tracking-luxury uppercase text-muted-foreground">
            Kraków · Polska
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
