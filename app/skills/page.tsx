import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { SkillsTabs } from "@/components/skills-tabs";
import { JsonLd } from "@/components/json-ld";
import { skillTabs, skillsIntro } from "@/content/skills";
import { createPageMetadata } from "@/lib/metadata";
import { getRequestLocale } from "@/lib/i18n-server";
import { absoluteLocalizedUrl, siteName, siteUrl } from "@/lib/site";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();

  return createPageMetadata({
    locale,
    title: {
      en: "Curated OpenClaw Skills",
      zh: "OpenClaw 精选技能库",
    },
    description: {
      en: "A curated set of OpenClaw skills organized by task category — research, content, productivity, DevOps, communications, and Chinese ecosystem — with risk level and starter guidance.",
      zh: "按任务类别精选的 OpenClaw 技能集合：调研、内容、效率、DevOps、通讯和中文生态，附带风险等级和新手建议。",
    },
    path: "/skills",
    keywords: {
      en: [
        "OpenClaw skills",
        "OpenClaw automation skills",
        "OpenClaw curated skills",
        "OpenClaw skill install",
      ],
      zh: [
        "OpenClaw 技能",
        "OpenClaw 自动化技能",
        "OpenClaw 精选技能",
        "OpenClaw 技能安装",
      ],
    },
  });
}

export default async function SkillsPage() {
  const locale = await getRequestLocale();

  return (
    <SiteShell active="skills" defaultTheme="light">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: locale === "zh" ? "OpenClaw 精选技能库" : "Curated OpenClaw Skills",
            url: absoluteLocalizedUrl("/skills", locale),
            inLanguage: locale === "zh" ? "zh-CN" : "en",
            description:
              locale === "zh"
                ? "按任务类别精选的 OpenClaw 技能集合，附带风险等级和新手建议。"
                : "A curated set of OpenClaw skills organized by task category, with risk level and starter guidance.",
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
                name: "Skills",
                item: absoluteLocalizedUrl("/skills", locale),
              },
            ],
          },
        ]}
      />
      <PageHero
        className="page-hero skills-hero"
        kicker={skillsIntro.kicker}
        title={skillsIntro.title}
        summary={skillsIntro.summary}
        ctas={[
          {
            label: { en: "Browse by task category", zh: "按任务类别浏览" },
            href: "#skills-directory",
            variant: "primary",
          },
          {
            label: { en: "Read safety guide first", zh: "先读安全指南" },
            href: "/learn/choose-safer-starter-skills",
            variant: "secondary",
          },
        ]}
      />

      <div id="skills-directory">
        <SkillsTabs locale={locale} tabs={skillTabs} />
      </div>
    </SiteShell>
  );
}
