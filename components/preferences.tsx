"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  defaultLocale,
  localeCookieName,
  switchLocaleInPathname,
  type Locale,
} from "@/lib/i18n";

type Theme = "light" | "dark";
const explicitPreferenceKey = "oc101-lang-explicit";

type PreferencesProps = {
  defaultTheme?: Theme;
  defaultLang?: Locale;
};

function getInitialTheme(defaultTheme: Theme): Theme {
  if (typeof window === "undefined") {
    return defaultTheme;
  }

  return (
    (localStorage.getItem("oc101-theme") as Theme) ||
    (document.body.dataset.theme as Theme) ||
    defaultTheme
  );
}

function getInitialLang(defaultLang: Locale): Locale {
  if (typeof window === "undefined") {
    return defaultLang;
  }

  const storedLang =
    (localStorage.getItem(localeCookieName) as Locale | null) ||
    (document.body.dataset.lang as Locale | undefined);

  return storedLang === "en" ? "en" : defaultLang;
}

export function PreferenceControls({
  defaultTheme = "light",
  defaultLang = defaultLocale,
}: PreferencesProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme(defaultTheme));
  const [lang, setLang] = useState<Locale>(() => getInitialLang(defaultLang));

  function persistLang(nextLang: Locale) {
    document.body.dataset.lang = nextLang;
    document.documentElement.lang = nextLang === "zh" ? "zh-CN" : "en";
    document.cookie = `${localeCookieName}=${nextLang}; path=/; max-age=31536000; samesite=lax`;
    localStorage.setItem(localeCookieName, nextLang);
  }

  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem("oc101-theme", theme);
  }, [theme]);

  useEffect(() => {
    persistLang(lang);
  }, [lang]);

  function handleLanguageChange(nextLang: Locale) {
    if (nextLang === lang) {
      return;
    }

    setLang(nextLang);
    localStorage.setItem(explicitPreferenceKey, "1");
    const nextPath = switchLocaleInPathname(pathname, nextLang);
    const hash = window.location.hash || "";
    router.push(`${nextPath}${hash}`);
  }

  return (
    <>
      <div className="switcher switcher-theme" aria-label="Theme switcher">
        <button
          aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          className="is-on"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          type="button"
        >
          <span aria-hidden="true" className="theme-icon">
            {theme === "light" ? "☀" : "☾"}
          </span>
        </button>
      </div>
      <div className="switcher switcher-lang" aria-label="Language switcher">
        <button
          aria-pressed={lang === "zh"}
          className={lang === "zh" ? "is-on" : undefined}
          onClick={() => handleLanguageChange("zh")}
          type="button"
        >
          中
        </button>
        <button
          aria-pressed={lang === "en"}
          className={lang === "en" ? "is-on" : undefined}
          onClick={() => handleLanguageChange("en")}
          type="button"
        >
          EN
        </button>
      </div>
    </>
  );
}
