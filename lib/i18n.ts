import type { LocalizedList, LocalizedText } from "@/content/types";

export const localeCookieName = "oc101-lang";
export const localeHeaderName = "x-openclaw-locale";
export const supportedLocales = ["zh", "en"] as const;

export type Locale = (typeof supportedLocales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string | null | undefined): value is Locale {
  return Boolean(value && supportedLocales.includes(value as Locale));
}

export function normalizeLocale(value: string | null | undefined): Locale {
  return isLocale(value) ? value : defaultLocale;
}

export function getHtmlLang(locale: Locale) {
  return locale === "zh" ? "zh-CN" : "en";
}

export function getLocalePrefix(locale: Locale) {
  return `/${locale}`;
}

export function hasLocalePrefix(pathname: string) {
  return supportedLocales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
}

export function getLocaleFromPathname(pathname: string): Locale | null {
  for (const locale of supportedLocales) {
    if (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)) {
      return locale;
    }
  }

  return null;
}

export function stripLocalePrefix(pathname: string) {
  const locale = getLocaleFromPathname(pathname);

  if (!locale) {
    return pathname || "/";
  }

  const stripped = pathname.slice(locale.length + 1);
  return stripped ? stripped : "/";
}

export function localizeHref(href: string, locale: Locale) {
  if (
    !href ||
    href.startsWith("#") ||
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  ) {
    return href;
  }

  const [pathnamePart, hashPart] = href.split("#");
  const [pathname = "/", search = ""] = pathnamePart.split("?");
  const normalizedPath = pathname || "/";

  if (hasLocalePrefix(normalizedPath)) {
    const strippedPath = stripLocalePrefix(normalizedPath);
    const localizedPath = `${getLocalePrefix(locale)}${strippedPath === "/" ? "" : strippedPath}`;
    const query = search ? `?${search}` : "";
    const hash = hashPart ? `#${hashPart}` : "";
    return `${localizedPath}${query}${hash}`;
  }

  const localizedPath = `${getLocalePrefix(locale)}${normalizedPath === "/" ? "" : normalizedPath}`;
  const query = search ? `?${search}` : "";
  const hash = hashPart ? `#${hashPart}` : "";
  return `${localizedPath}${query}${hash}`;
}

export function switchLocaleInPathname(pathname: string, locale: Locale) {
  const basePath = stripLocalePrefix(pathname);
  return localizeHref(basePath, locale);
}

export function pickLocalizedText(value: LocalizedText, locale: Locale) {
  return value[locale];
}

export function pickLocalizedList(value: LocalizedList, locale: Locale) {
  return value[locale];
}
