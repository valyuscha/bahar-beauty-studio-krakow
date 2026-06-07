import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, Check } from "lucide-react";

export const LanguageSwitcher = () => {
  const { lang, setLang, languages } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        data-testid="language-switcher-trigger"
        className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/40 hover:bg-secondary/70 transition-colors px-3 py-2 text-xs tracking-luxury uppercase"
        aria-label="Change language"
      >
        <Globe className="h-3.5 w-3.5" strokeWidth={1.5} />
        <span>{languages.find((l) => l.code === lang)?.short || "PL"}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[160px]">
        {languages.map((l) => (
          <DropdownMenuItem
            key={l.code}
            data-testid={`language-option-${l.code}`}
            onClick={() => setLang(l.code)}
            className="flex items-center justify-between gap-3 cursor-pointer"
          >
            <span className="text-sm">{l.label}</span>
            {lang === l.code && <Check className="h-3.5 w-3.5 text-primary" strokeWidth={2} />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
