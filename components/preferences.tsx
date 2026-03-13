"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";
type Lang = "zh" | "en" | "both";

type PreferencesProps = {
  defaultTheme?: Theme;
};

export function PreferenceControls({
  defaultTheme = "light",
}: PreferencesProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [lang, setLang] = useState<Lang>("zh");

  useEffect(() => {
    const storedTheme = (localStorage.getItem("oc101-theme") as Theme) || defaultTheme;
    const storedLang = (localStorage.getItem("oc101-lang") as Lang) || "zh";
    setTheme(storedTheme);
    setLang(storedLang);
  }, [defaultTheme]);

  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem("oc101-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.body.dataset.lang = lang;
    localStorage.setItem("oc101-lang", lang);
  }, [lang]);

  return (
    <>
      <div className="switcher" aria-label="Theme switcher">
        <button
          className={theme === "light" ? "is-on" : undefined}
          onClick={() => setTheme("light")}
          type="button"
        >
          Light
        </button>
        <button
          className={theme === "dark" ? "is-on" : undefined}
          onClick={() => setTheme("dark")}
          type="button"
        >
          Dark
        </button>
      </div>
      <div className="switcher" aria-label="Language switcher">
        <button
          className={lang === "zh" ? "is-on" : undefined}
          onClick={() => setLang("zh")}
          type="button"
        >
          中
        </button>
        <button
          className={lang === "en" ? "is-on" : undefined}
          onClick={() => setLang("en")}
          type="button"
        >
          EN
        </button>
        <button
          className={lang === "both" ? "is-on" : undefined}
          onClick={() => setLang("both")}
          type="button"
        >
          双语
        </button>
      </div>
    </>
  );
}
