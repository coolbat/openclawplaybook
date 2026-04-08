import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { createPageMetadata } from "@/lib/metadata";
import { renderPageMdx } from "@/lib/mdx";
import { getRequestLocale } from "@/lib/i18n-server";
import { absoluteLocalizedUrl, siteName, siteUrl } from "@/lib/site";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();

  return createPageMetadata({
    locale,
    title: {
      en: "Editorial Policy",
      zh: "编辑政策",
    },
    description: {
      en: "Editorial policy for OpenClaw Playbook, covering scope, update criteria, and quality standards.",
      zh: "OpenClaw Playbook 的编辑政策，说明内容范围、更新条件和质量标准。",
    },
    path: "/editorial",
    keywords: {
      en: ["OpenClaw Playbook editorial policy", "OpenClaw content standards"],
      zh: ["OpenClaw Playbook 编辑政策", "OpenClaw 内容标准"],
    },
  });
}

export default async function EditorialPage() {
  const locale = await getRequestLocale();
  const { content } = await renderPageMdx("editorial", locale);

  return (
    <SiteShell active="none" defaultTheme="light">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: locale === "zh" ? "编辑政策" : "Editorial Policy",
            url: absoluteLocalizedUrl("/editorial", locale),
            description:
              locale === "zh"
                ? "OpenClaw Playbook 的编辑标准与更新规则。"
                : "Editorial standards and update rules for OpenClaw Playbook.",
            inLanguage: locale === "zh" ? "zh-CN" : "en",
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
                name: locale === "zh" ? "编辑政策" : "Editorial",
                item: absoluteLocalizedUrl("/editorial", locale),
              },
            ],
          },
        ]}
      />
      <PageHero
        className="page-hero hero-single"
        kicker="EDITORIAL"
        title={{
          en: "How content is selected and updated.",
          zh: "内容是如何被筛选和更新的。",
        }}
        summary={{
          en: "OpenClaw Playbook prioritizes clear onboarding paths, practical workflow guidance, and corrections when previous guidance becomes misleading.",
          zh: "OpenClaw Playbook 优先提供清楚的上手路径、实用的工作流指导，以及在旧内容开始误导用户时及时修正。",
        }}
      />

      <section className="section page-section">
        <div className="page-prose">{content}</div>
      </section>
    </SiteShell>
  );
}
