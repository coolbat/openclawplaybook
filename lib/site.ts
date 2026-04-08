import { localizeHref, type Locale } from "@/lib/i18n";

export const siteName = "OpenClaw Playbook";
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://openclaw101.example.com";

export const officialLinks = [
  { label: "OpenClaw", href: "https://openclaw.ai" },
  { label: "ClawHub", href: "https://clawhub.ai" },
  { label: "GitHub", href: "https://github.com/openclaw/openclaw" },
] as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function absoluteLocalizedUrl(path: string, locale: Locale) {
  return absoluteUrl(localizeHref(path, locale));
}
