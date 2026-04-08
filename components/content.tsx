import type { LocalizedText } from "@/content/types";
import { pickLocalizedText } from "@/lib/i18n";
import { getRequestLocale } from "@/lib/i18n-server";

type CopyPairProps = {
  en: React.ReactNode;
  zh: React.ReactNode;
  inline?: boolean;
};

export async function CopyPair({ en, zh }: CopyPairProps) {
  const locale = await getRequestLocale();
  return <>{locale === "en" ? en : zh}</>;
}

export async function LocalizedInline({ value }: { value: LocalizedText }) {
  const locale = await getRequestLocale();
  return <>{pickLocalizedText(value, locale)}</>;
}
