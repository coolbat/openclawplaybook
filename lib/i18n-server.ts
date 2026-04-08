import { headers, cookies } from "next/headers";
import { localeHeaderName, normalizeLocale, type Locale } from "@/lib/i18n";

export async function getRequestLocale(): Promise<Locale> {
  const headerStore = await headers();
  const localeFromHeader = headerStore.get(localeHeaderName);

  if (localeFromHeader) {
    return normalizeLocale(localeFromHeader);
  }

  const cookieStore = await cookies();
  return normalizeLocale(cookieStore.get("oc101-lang")?.value);
}
