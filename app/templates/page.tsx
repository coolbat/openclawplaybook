import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { TemplatesTabs } from "@/components/templates-tabs";
import { JsonLd } from "@/components/json-ld";
import { templateTabs, templatesIntro } from "@/content/templates";
import { createPageMetadata } from "@/lib/metadata";
import { getRequestLocale } from "@/lib/i18n-server";
import { absoluteLocalizedUrl, siteName, siteUrl } from "@/lib/site";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();

  return createPageMetadata({
    locale,
    title: {
      en: "OpenClaw Templates Directory",
      zh: "OpenClaw 模板目录",
    },
    description: {
      en: "Browse OpenClaw templates by work goal: briefings, content production, team collaboration, research analysis, monitoring alerts, and Chinese ecosystem workflows.",
      zh: "按工作目标浏览 OpenClaw 模板：信息简报、内容生产、团队协作、调研分析、监控告警和中文生态工作流。",
    },
    path: "/templates",
    keywords: {
      en: [
        "OpenClaw templates",
        "OpenClaw starter workflows",
        "OpenClaw automation examples",
        "OpenClaw first workflow",
      ],
      zh: [
        "OpenClaw 模板",
        "OpenClaw 起步工作流",
        "OpenClaw 自动化示例",
        "OpenClaw 第一个工作流",
      ],
    },
  });
}

export default async function TemplatesPage() {
  const locale = await getRequestLocale();

  return (
    <SiteShell active="templates" defaultTheme="light">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: locale === "zh" ? "OpenClaw 起步模板库" : "Starter Templates for OpenClaw",
            url: absoluteLocalizedUrl("/templates", locale),
            inLanguage: locale === "zh" ? "zh-CN" : "en",
            description:
              locale === "zh"
                ? "按工作目标浏览 OpenClaw 模板，结合难度、耗时、风险和渠道建议，选择更贴合当前场景的起步工作流。"
                : "Browse OpenClaw templates by work goal, with difficulty, time, risk, and channel guidance to help you choose a practical starter workflow.",
            isPartOf: {
              "@type": "WebSite",
              name: siteName,
              url: siteUrl,
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: locale === "zh" ? "首页" : "Home",
                item: absoluteLocalizedUrl("/", locale),
              },
              {
                "@type": "ListItem",
                position: 2,
                name: locale === "zh" ? "Templates" : "Templates",
                item: absoluteLocalizedUrl("/templates", locale),
              },
            ],
          },
        ]}
      />
      <PageHero
        className="page-hero templates-hero"
        kicker={templatesIntro.kicker}
        title={templatesIntro.title}
        summary={templatesIntro.summary}
        ctas={[
          {
            label: { en: "Browse by work goal", zh: "按工作目标浏览" },
            href: "#templates-directory",
            variant: "primary",
          },
          {
            label: { en: "Review Quick Start first", zh: "先回看 Quick Start" },
            href: "/#quick-start",
            variant: "secondary",
          },
        ]}
      />

      <div id="templates-directory">
        <TemplatesTabs locale={locale} tabs={templateTabs} />
      </div>
    </SiteShell>
  );
}
