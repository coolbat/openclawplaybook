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
      en: "Terms of Use",
      zh: "使用条款",
    },
    description: {
      en: "Terms of use for OpenClaw Playbook, including content scope, no-warranty language, and acceptable use expectations.",
      zh: "OpenClaw Playbook 的使用条款，说明内容边界、免责声明和基本使用预期。",
    },
    path: "/terms",
    keywords: {
      en: ["OpenClaw Playbook terms", "site terms of use"],
      zh: ["OpenClaw Playbook 条款", "站点使用条款"],
    },
  });
}

export default async function TermsPage() {
  const locale = await getRequestLocale();
  const { content } = await renderPageMdx("terms", locale);

  return (
    <SiteShell active="none" defaultTheme="light">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: locale === "zh" ? "使用条款" : "Terms of Use",
            url: absoluteLocalizedUrl("/terms", locale),
            description:
              locale === "zh"
                ? "OpenClaw Playbook 的使用条款。"
                : "Terms of use for OpenClaw Playbook.",
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
                name: locale === "zh" ? "条款" : "Terms",
                item: absoluteLocalizedUrl("/terms", locale),
              },
            ],
          },
        ]}
      />
      <PageHero
        className="page-hero hero-single"
        kicker="TERMS"
        title={{
          en: "The basic rules for using this site.",
          zh: "使用这个站点的基本规则。",
        }}
        summary={{
          en: "OpenClaw Playbook is an informational site. It is meant to support learning and onboarding, not to replace official documentation or professional advice.",
          zh: "OpenClaw Playbook 是一个信息型站点，主要用于辅助学习和 onboarding，不替代官方文档或专业意见。",
        }}
      />

      <section className="section page-section">
        <div className="page-prose">{content}</div>
      </section>
    </SiteShell>
  );
}
