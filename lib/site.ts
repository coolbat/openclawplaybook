import { localizeHref, type Locale } from "@/lib/i18n";

export const siteName = "OpenClaw Playbook";

function normalizeSiteUrl(rawUrl: string) {
  const url = new URL(rawUrl);

  if (
    url.protocol === "http:" &&
    url.hostname !== "localhost" &&
    url.hostname !== "127.0.0.1" &&
    !url.hostname.endsWith(".local")
  ) {
    url.protocol = "https:";
  }

  return url.toString().replace(/\/$/, "");
}

function normalizeRoutePath(path: string) {
  if (!path || path === "/") {
    return "/";
  }

  const [pathnameWithSearch, hash = ""] = path.split("#");
  const [pathname = "/", search = ""] = pathnameWithSearch.split("?");
  const isFilePath = /\/[^/]+\.[^/]+$/.test(pathname);
  const normalizedPathname =
    isFilePath || pathname.endsWith("/") ? pathname : `${pathname}/`;
  const query = search ? `?${search}` : "";
  const hashSuffix = hash ? `#${hash}` : "";

  return `${normalizedPathname}${query}${hashSuffix}`;
}

export const siteUrl = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL || "https://openclaw101.example.com",
);

export const officialLinks = [
  { label: "OpenClaw", href: "https://openclaw.ai" },
  { label: "ClawHub", href: "https://clawhub.ai" },
  { label: "GitHub", href: "https://github.com/openclaw/openclaw" },
] as const;

export function absoluteAssetUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function absoluteUrl(path = "/") {
  return new URL(normalizeRoutePath(path), siteUrl).toString();
}

export function absoluteLocalizedUrl(path: string, locale: Locale) {
  return absoluteUrl(localizeHref(path, locale));
}
