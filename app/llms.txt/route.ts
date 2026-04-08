import { getAllLearnTutorialSlugs } from "@/lib/learn";
import { getAllQuickStartSlugs } from "@/lib/quick-start";
import { getAllTemplateSlugs } from "@/lib/templates";
import { getAllTroubleshootSlugs } from "@/lib/troubleshoot";
import { absoluteLocalizedUrl, siteName, siteUrl } from "@/lib/site";

export function GET() {
  const learnArticles = getAllLearnTutorialSlugs();
  const quickStartArticles = getAllQuickStartSlugs();
  const templateArticles = getAllTemplateSlugs();
  const troubleshootArticles = getAllTroubleshootSlugs();
  const body = [
    `# ${siteName}`,
    "",
    "> Bilingual OpenClaw quick-start and learning hub for beginners.",
    "",
    `Site: ${siteUrl}`,
    "",
    "## Key pages",
    `- Home (EN): ${absoluteLocalizedUrl("/", "en")}`,
    `- Home (ZH): ${absoluteLocalizedUrl("/", "zh")}`,
    `- Quick Start path (EN): ${absoluteLocalizedUrl("/", "en")}#quick-start`,
    `- Quick Start path (ZH): ${absoluteLocalizedUrl("/", "zh")}#quick-start`,
    `- Learn (EN): ${absoluteLocalizedUrl("/learn", "en")}`,
    `- Learn (ZH): ${absoluteLocalizedUrl("/learn", "zh")}`,
    `- Templates (EN): ${absoluteLocalizedUrl("/templates", "en")}`,
    `- Templates (ZH): ${absoluteLocalizedUrl("/templates", "zh")}`,
    `- Troubleshoot (EN): ${absoluteLocalizedUrl("/troubleshoot", "en")}`,
    `- Troubleshoot (ZH): ${absoluteLocalizedUrl("/troubleshoot", "zh")}`,
    "",
    "## Focus",
    "- OpenClaw quick start",
    "- Starter workflow templates",
    "- Setup strategy and workflow design",
    "- Symptom-first troubleshooting",
    "",
    "## Quick Start articles",
    ...quickStartArticles.map((slug) => `- ${slug} (EN): ${absoluteLocalizedUrl(`/quick-start/${slug}`, "en")}`),
    ...quickStartArticles.map((slug) => `- ${slug} (ZH): ${absoluteLocalizedUrl(`/quick-start/${slug}`, "zh")}`),
    "",
    "## Learn articles",
    ...learnArticles.map((slug) => `- ${slug} (EN): ${absoluteLocalizedUrl(`/learn/${slug}`, "en")}`),
    ...learnArticles.map((slug) => `- ${slug} (ZH): ${absoluteLocalizedUrl(`/learn/${slug}`, "zh")}`),
    "",
    "## Template articles",
    ...templateArticles.map((slug) => `- ${slug} (EN): ${absoluteLocalizedUrl(`/templates/${slug}`, "en")}`),
    ...templateArticles.map((slug) => `- ${slug} (ZH): ${absoluteLocalizedUrl(`/templates/${slug}`, "zh")}`),
    "",
    "## Troubleshoot articles",
    ...troubleshootArticles.map((slug) => `- ${slug} (EN): ${absoluteLocalizedUrl(`/troubleshoot/${slug}`, "en")}`),
    ...troubleshootArticles.map((slug) => `- ${slug} (ZH): ${absoluteLocalizedUrl(`/troubleshoot/${slug}`, "zh")}`),
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
