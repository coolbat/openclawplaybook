import type { LocalizedList, LocalizedText } from "@/content/types";
import { localizeHref, type Locale } from "@/lib/i18n";
import type { Metadata } from "next";
import { absoluteAssetUrl, absoluteUrl, siteName, siteUrl } from "@/lib/site";

type MaybeLocalizedText = string | LocalizedText;
type MaybeLocalizedList = string[] | LocalizedList;

type PageMetadataInput = {
  locale: Locale;
  title: MaybeLocalizedText;
  description: MaybeLocalizedText;
  path?: string;
  keywords?: MaybeLocalizedList;
};

function resolveText(value: MaybeLocalizedText, locale: Locale) {
  return typeof value === "string" ? value : value[locale];
}

function resolveList(value: MaybeLocalizedList, locale: Locale) {
  return Array.isArray(value) ? value : value[locale];
}

function getOpenGraphLocale(locale: Locale) {
  return locale === "zh" ? "zh_CN" : "en_US";
}

function getAlternateOpenGraphLocales(locale: Locale) {
  return locale === "zh" ? ["en_US"] : ["zh_CN"];
}

export function createPageMetadata({
  locale,
  title,
  description,
  path = "/",
  keywords = [],
}: PageMetadataInput): Metadata {
  const metadataBase = new URL(siteUrl);
  const localizedPath = localizeHref(path, locale);
  const url = new URL(localizedPath, metadataBase).toString();
  const resolvedTitle = resolveText(title, locale);
  const resolvedDescription = resolveText(description, locale);
  const resolvedKeywords = resolveList(keywords, locale);
  const fullTitle = resolvedTitle === siteName ? siteName : `${resolvedTitle} | ${siteName}`;
  const socialImage = absoluteAssetUrl("/opengraph-image");

  return {
    title: fullTitle,
    description: resolvedDescription,
    applicationName: siteName,
    metadataBase,
    keywords: resolvedKeywords,
    icons: {
      icon: "/icon.svg",
      shortcut: "/icon.svg",
      apple: "/icon.svg",
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: fullTitle,
      description: resolvedDescription,
      url,
      siteName,
      type: "website",
      locale: getOpenGraphLocale(locale),
      alternateLocale: getAlternateOpenGraphLocales(locale),
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt:
            locale === "zh"
              ? `${siteName} 社交分享预览`
              : `${siteName} social preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: resolvedDescription,
      images: [socialImage],
    },
    alternates: {
      canonical: url,
      languages: {
        en: new URL(localizeHref(path, "en"), metadataBase).toString(),
        "zh-CN": new URL(localizeHref(path, "zh"), metadataBase).toString(),
        "x-default": new URL(localizeHref(path, "en"), metadataBase).toString(),
      },
    },
  };
}
