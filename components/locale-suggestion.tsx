"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { localeCookieName, switchLocaleInPathname, type Locale } from "@/lib/i18n";

const dismissedKey = "oc101-lang-suggestion-dismissed";
const explicitPreferenceKey = "oc101-lang-explicit";

export function LocaleSuggestion({ locale }: { locale: Locale }) {
  const router = useRouter();
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (locale !== "en") {
      return;
    }

    if (typeof window === "undefined") {
      return;
    }

    if (
      localStorage.getItem(dismissedKey) === "1" ||
      localStorage.getItem(explicitPreferenceKey) === "1"
    ) {
      return;
    }

    const browserLanguages = navigator.languages ?? [navigator.language];
    const prefersChinese = browserLanguages.some((value) => value.toLowerCase().startsWith("zh"));

    if (prefersChinese) {
      setVisible(true);
    }
  }, [locale]);

  if (!visible) {
    return null;
  }

  function dismiss() {
    localStorage.setItem(dismissedKey, "1");
    setVisible(false);
  }

  function switchToChinese() {
    const nextPath = switchLocaleInPathname(pathname, "zh");
    document.cookie = `${localeCookieName}=zh; path=/; max-age=31536000; samesite=lax`;
    localStorage.setItem(localeCookieName, "zh");
    localStorage.setItem(explicitPreferenceKey, "1");
    setVisible(false);
    router.push(`${nextPath}${window.location.hash || ""}`);
  }

  return (
    <div className="locale-suggestion" role="status">
      <p>Prefer Chinese? 可切换到中文浏览。</p>
      <div className="locale-suggestion-actions">
        <button className="btn primary" onClick={switchToChinese} type="button">
          切换到中文
        </button>
        <button className="btn ghost" onClick={dismiss} type="button">
          Stay in English
        </button>
      </div>
    </div>
  );
}
