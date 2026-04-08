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
      en: "Privacy Policy",
      zh: "隐私政策",
    },
    description: {
      en: "Privacy policy for OpenClaw Playbook, including local preference storage and general site-operation data handling.",
      zh: "OpenClaw Playbook 的隐私政策，说明本地偏好存储以及站点运行层面的基础数据处理方式。",
    },
    path: "/privacy",
    keywords: {
      en: ["OpenClaw Playbook privacy", "site privacy policy"],
      zh: ["OpenClaw Playbook 隐私", "站点隐私政策"],
    },
  });
}

export default async function PrivacyPage() {
  const locale = await getRequestLocale();
  const { content } = await renderPageMdx("privacy", locale);

  return (
    <SiteShell active="none" defaultTheme="light">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: locale === "zh" ? "隐私政策" : "Privacy Policy",
            url: absoluteLocalizedUrl("/privacy", locale),
            description:
              locale === "zh"
                ? "OpenClaw Playbook 的隐私政策。"
                : "Privacy policy for OpenClaw Playbook.",
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
                name: locale === "zh" ? "隐私" : "Privacy",
                item: absoluteLocalizedUrl("/privacy", locale),
              },
            ],
          },
        ]}
      />
      <PageHero
        className="page-hero hero-single"
        kicker="PRIVACY"
        title={{
          en: "How this site handles basic data.",
          zh: "这个站点如何处理基础数据。",
        }}
        summary={{
          en: "OpenClaw Playbook is a content site. It stores only minimal preference data in the browser and does not currently offer user accounts.",
          zh: "OpenClaw Playbook 目前是内容型站点。它只在浏览器里保存最少量的偏好设置，不提供用户账户系统。",
        }}
      />

      <section className="section page-section">
        <div className="page-prose">{content}</div>
      </section>
    </SiteShell>
  );
}
