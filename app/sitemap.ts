import type { MetadataRoute } from "next";
import { getAllLearnTutorialSlugs } from "@/lib/learn";
import { getAllQuickStartSlugs } from "@/lib/quick-start";
import { getAllTemplateSlugs } from "@/lib/templates";
import { getAllTroubleshootSlugs } from "@/lib/troubleshoot";
import { absoluteLocalizedUrl } from "@/lib/site";
import { supportedLocales } from "@/lib/i18n";

const routes = [
  "/",
  "/learn",
  "/templates",
  "/skills",
  "/troubleshoot",
  "/about",
  "/editorial",
  "/privacy",
  "/terms",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const quickStartArticleRoutes = getAllQuickStartSlugs().map((slug) => `/quick-start/${slug}`);
  const learnArticleRoutes = getAllLearnTutorialSlugs().map((slug) => `/learn/${slug}`);
  const templateArticleRoutes = getAllTemplateSlugs().map((slug) => `/templates/${slug}`);
  const troubleshootArticleRoutes = getAllTroubleshootSlugs().map((slug) => `/troubleshoot/${slug}`);
  const allRoutes = [
    ...routes,
    ...quickStartArticleRoutes,
    ...learnArticleRoutes,
    ...templateArticleRoutes,
    ...troubleshootArticleRoutes,
  ];

  return supportedLocales.flatMap((locale) =>
    allRoutes.map((route) => ({
      url: absoluteLocalizedUrl(route, locale),
      changeFrequency: route === "/" ? "weekly" : route.startsWith("/learn/") ? "monthly" : "monthly",
      priority:
        route === "/"
          ? 1
          : route.startsWith("/quick-start/")
            ? 0.8
          : route.startsWith("/learn/")
            ? 0.7
            : route.startsWith("/templates/")
              ? 0.7
              : route.startsWith("/troubleshoot/")
                ? 0.7
            : route === "/about" ||
              route === "/privacy" ||
              route === "/terms" ||
              route === "/editorial"
                  ? 0.5
                  : route === "/skills"
                    ? 0.7
                    : 0.8,
    })),
  );
}
