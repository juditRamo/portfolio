"use client";

import { usePathname, useRouter } from "next/navigation";
import { Locale } from "@/lib/types";

interface LanguageSwitchProps {
  locale: Locale;
}

export function LanguageSwitch({ locale }: LanguageSwitchProps) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: Locale) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-1 bg-foreground/5 rounded-full p-1">
      <button
        onClick={() => switchLocale("en")}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
          locale === "en"
            ? "bg-accent-violet text-white shadow-sm"
            : "text-muted hover:text-foreground"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => switchLocale("es")}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
          locale === "es"
            ? "bg-accent-violet text-white shadow-sm"
            : "text-muted hover:text-foreground"
        }`}
      >
        ES
      </button>
    </div>
  );
}
