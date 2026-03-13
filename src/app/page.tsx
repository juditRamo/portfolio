"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { defaultLocale } from "@/i18n/config";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const browserLang = navigator.language.slice(0, 2);
    const locale = browserLang === "es" ? "es" : defaultLocale;
    router.replace(`/${locale}`);
  }, [router]);

  return null;
}
