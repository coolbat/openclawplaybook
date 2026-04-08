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
      en: "About OpenClaw Playbook",
      zh: "关于 OpenClaw Playbook",
    },
    description: {
      en: "About OpenClaw Playbook: what this onboarding site is for, who it helps, and what content boundaries it follows.",
      zh: "关于 OpenClaw Playbook：这个 onboarding 站点服务谁、解决什么问题，以及它遵守哪些内容边界。",
    },
    path: "/about",
    keywords: {
      en: ["OpenClaw Playbook about", "OpenClaw onboarding site", "OpenClaw learning hub"],
      zh: ["OpenClaw Playbook 关于", "OpenClaw onboarding 站点", "OpenClaw 学习中心"],
    },
  });
}

export default async function AboutPage() {
  const locale = await getRequestLocale();
  const { content } = await renderPageMdx("about", locale);

  return (
    <SiteShell active="none" defaultTheme="light">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: locale === "zh" ? "关于 OpenClaw Playbook" : "About OpenClaw Playbook",
            url: absoluteLocalizedUrl("/about", locale),
            description:
              locale === "zh"
                ? "说明 OpenClaw Playbook 的定位、发布内容，以及它不试图成为什么。"
                : "What OpenClaw Playbook is for, what it publishes, and what it does not try to be.",
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
                name: locale === "zh" ? "关于" : "About",
                item: absoluteLocalizedUrl("/about", locale),
              },
            ],
          },
        ]}
      />
      <PageHero
        className="page-hero hero-single"
        kicker="ABOUT"
        title={{
          en: "What OpenClaw Playbook is for.",
          zh: "OpenClaw Playbook 是做什么的。",
        }}
        summary={{
          en: "This site exists to give beginners a shorter, clearer path from setup to a first useful OpenClaw workflow.",
          zh: "这个站点的目标，是给新手一条更短、更清楚的路径，从 setup 一直走到第一个真正有用的 OpenClaw 工作流。",
        }}
      />

      <section className="section page-section">
        <div className="page-prose">{content}</div>
      </section>
    </SiteShell>
  );
}
