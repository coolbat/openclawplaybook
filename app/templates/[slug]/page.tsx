import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { CrossResourceLinks } from "@/components/cross-resource-links";
import { LocalizedLink } from "@/components/localized-link";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { TemplateCard } from "@/components/template-card";
import { createPageMetadata } from "@/lib/metadata";
import { pickLocalizedText } from "@/lib/i18n";
import { getRequestLocale } from "@/lib/i18n-server";
import { renderTemplateArticleMdx } from "@/lib/mdx";
import {
  getRelatedTemplates,
  getTemplateBySlug,
  getTemplateNeighbors,
  getTemplatePosition,
  getTemplateTabBySlug,
} from "@/lib/templates";
import { absoluteLocalizedUrl, siteName, siteUrl } from "@/lib/site";
import { getTemplateCrossLinks } from "@/lib/cross-links";

type TemplateArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: TemplateArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getRequestLocale();
  const template = getTemplateBySlug(slug);

  if (!template) {
    return {};
  }

  return createPageMetadata({
    locale,
    title: pickLocalizedText(template.title, locale),
    description: pickLocalizedText(template.summary, locale),
    path: `/templates/${slug}`,
    keywords: template.tags,
  });
}

export default async function TemplateArticlePage({ params }: TemplateArticlePageProps) {
  const { slug } = await params;
  const locale = await getRequestLocale();
  const template = getTemplateBySlug(slug);

  if (!template) {
    notFound();
  }

  const templateTitle = pickLocalizedText(template.title, locale);
  const templateSummary = pickLocalizedText(template.summary, locale);
  const { content, frontmatter } = await renderTemplateArticleMdx(slug, locale);
  const currentTab = getTemplateTabBySlug(slug);
  const { previous, next } = getTemplateNeighbors(slug);
  const related = getRelatedTemplates(slug);
  const crossLinks = getTemplateCrossLinks(slug);
  const position = getTemplatePosition(slug);
  const currentTabLabel = currentTab ? pickLocalizedText(currentTab.label, locale) : "Templates";

  return (
    <SiteShell active="templates" defaultTheme="light">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: templateTitle,
            description: templateSummary,
            inLanguage: locale === "zh" ? "zh-CN" : "en",
            url: absoluteLocalizedUrl(`/templates/${slug}`, locale),
            mainEntityOfPage: absoluteLocalizedUrl(`/templates/${slug}`, locale),
            author: {
              "@type": "Organization",
              name: siteName,
              url: siteUrl,
            },
            publisher: {
              "@type": "Organization",
              name: siteName,
              url: siteUrl,
            },
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
                name: "Templates",
                item: absoluteLocalizedUrl("/templates", locale),
              },
              {
                "@type": "ListItem",
                position: 3,
                name: templateTitle,
                item: absoluteLocalizedUrl(`/templates/${slug}`, locale),
              },
            ],
          },
        ]}
      />

      <PageHero
        className="page-hero hero-single template-article-hero"
        kicker={`TEMPLATE DETAIL${frontmatter.readingTime ? ` · ${frontmatter.readingTime}` : ""}`}
        title={{
          en: templateTitle,
          zh: templateTitle,
        }}
        summary={{
          en: templateSummary,
          zh: templateSummary,
        }}
        ctas={[
          {
            label: { en: "Back to Templates", zh: "返回 Templates" },
            href: "/templates",
            variant: "secondary",
          },
          {
            label: { en: "Review Learn hub", zh: "查看 Learn 资源中心" },
            href: "/learn",
            variant: "link",
          },
        ]}
        aside={
          <div className="template-hero-briefing">
            <div className="template-hero-briefing-head">
              <p className="eyebrow">{locale === "zh" ? "模板快照" : "Template snapshot"}</p>
              <h2>{currentTabLabel}</h2>
            </div>
            <div className="template-hero-briefing-stats">
              <div>
                <span>{locale === "zh" ? "难度" : "Difficulty"}</span>
                <strong>{template.difficulty[locale]}</strong>
              </div>
              <div>
                <span>{locale === "zh" ? "耗时" : "Setup time"}</span>
                <strong>{template.time[locale]}</strong>
              </div>
              <div>
                <span>{locale === "zh" ? "风险" : "Risk"}</span>
                <strong>{template.risk[locale]}</strong>
              </div>
            </div>
            <p className="template-hero-briefing-copy">{template.recommendedFor[locale]}</p>
            <div className="tag-row">
              {template.channels[locale].map((channel) => (
                <span className="tag" key={channel}>
                  {channel}
                </span>
              ))}
            </div>
          </div>
        }
      />

      <section className="section page-section">
        <nav aria-label="Breadcrumb" className="detail-breadcrumb learn-breadcrumb">
          <LocalizedLink href="/">{locale === "zh" ? "首页" : "Home"}</LocalizedLink>
          <span>/</span>
          <LocalizedLink href="/templates">Templates</LocalizedLink>
          {currentTab ? (
            <>
              <span>/</span>
              <span>{currentTabLabel}</span>
            </>
          ) : null}
          <span>/</span>
          <span>{templateTitle}</span>
        </nav>

        <div className="detail-layout template-article-layout">
          <article className="detail-body template-article-body">
            <div className="detail-context template-article-context">
              <span className="detail-chip learn-article-chip">{currentTabLabel}</span>
              <span className="detail-chip learn-article-chip">
                {template.difficulty[locale]} · {template.time[locale]}
              </span>
              <span className="detail-chip learn-article-chip">{template.risk[locale]}</span>
            </div>

            <div className="template-article-snapshot">
              <article className="card template-article-snapshot-card">
                <p className="eyebrow">{locale === "zh" ? "适合谁" : "Best fit"}</p>
                <h3>{locale === "zh" ? "从这个场景开始" : "Start with this scenario"}</h3>
                <p>{template.recommendedFor[locale]}</p>
              </article>
              <article className="card template-article-snapshot-card">
                <p className="eyebrow">{locale === "zh" ? "交付界面" : "Delivery surfaces"}</p>
                <h3>{locale === "zh" ? "先选一个主去向" : "Choose one main destination"}</h3>
                <div className="tag-row">
                  {template.channels[locale].map((channel) => (
                    <span className="tag" key={channel}>
                      {channel}
                    </span>
                  ))}
                </div>
              </article>
              <article className="card template-article-snapshot-card">
                <p className="eyebrow">{locale === "zh" ? "起步信号" : "Starter signal"}</p>
                <h3>{locale === "zh" ? "先跑最短闭环" : "Prove the shortest loop first"}</h3>
                <div className="tag-row">
                  {template.tags[locale].map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </div>

            <div className="page-prose detail-prose template-article-prose">{content}</div>
          </article>

          <aside className="detail-sidebar template-article-sidebar">
            <div className="card detail-sidebar-card template-article-sidebar-card">
              <p className="eyebrow">{locale === "zh" ? "模板地图" : "Template map"}</p>
              <h3>{currentTabLabel}</h3>
              <p>{template.recommendedFor[locale]}</p>
              <div className="detail-stats learn-article-sidebar-stats">
                <div>
                  <span>{locale === "zh" ? "难度" : "Difficulty"}</span>
                  <strong>{template.difficulty[locale]}</strong>
                </div>
                <div>
                  <span>{locale === "zh" ? "耗时" : "Setup time"}</span>
                  <strong>{template.time[locale]}</strong>
                </div>
                <div>
                  <span>{locale === "zh" ? "风险" : "Risk"}</span>
                  <strong>{template.risk[locale]}</strong>
                </div>
                {position ? (
                  <div>
                    <span>{locale === "zh" ? "分类位置" : "In this category"}</span>
                    <strong>
                      {position.tabIndex}/{position.tabTotal}
                    </strong>
                  </div>
                ) : null}
              </div>
              {position ? (
                <p className="template-article-sidebar-note">
                  {locale === "zh"
                    ? `这是该分类下第 ${position.tabIndex} 个模板，全库共 ${position.overallTotal} 个起步模板。`
                    : `This is template ${position.tabIndex} in its category and one of ${position.overallTotal} starter templates in the library.`}
                </p>
              ) : null}
              <p className="template-article-sidebar-label">
                {locale === "zh" ? "适用渠道" : "Channels"}
              </p>
              <div className="tag-row">
                {template.channels[locale].map((channel) => (
                  <span className="tag" key={channel}>
                    {channel}
                  </span>
                ))}
              </div>
              <p className="template-article-sidebar-label">
                {locale === "zh" ? "关键词" : "Tags"}
              </p>
              <div className="tag-row">
                {template.tags[locale].map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {next ? (
              <LocalizedLink
                className="card detail-sidebar-card detail-next-card learn-article-sidebar-card learn-article-next-card"
                href={`/templates/${next.slug}`}
              >
                <p className="eyebrow">{locale === "zh" ? "建议下一项" : "Suggested next"}</p>
                <h3>{pickLocalizedText(next.title, locale)}</h3>
                <p>{pickLocalizedText(next.summary, locale)}</p>
                <span className="detail-next-link learn-article-next-link">
                  {locale === "zh" ? "继续查看下一个模板" : "Open the next template"}
                </span>
              </LocalizedLink>
            ) : null}
          </aside>
        </div>
      </section>

      {previous || next ? (
        <section className="section page-section detail-nav-section learn-article-nav-section">
          <div className="dual detail-nav learn-article-nav">
            {previous ? (
              <LocalizedLink className="card detail-nav-card learn-article-nav-card" href={`/templates/${previous.slug}`}>
                <p className="eyebrow">{locale === "zh" ? "上一篇" : "Previous"}</p>
                <h3>{pickLocalizedText(previous.title, locale)}</h3>
                <p>{pickLocalizedText(previous.summary, locale)}</p>
              </LocalizedLink>
            ) : (
              <div />
            )}

            {next ? (
              <LocalizedLink className="card detail-nav-card learn-article-nav-card" href={`/templates/${next.slug}`}>
                <p className="eyebrow">{locale === "zh" ? "下一篇" : "Next"}</p>
                <h3>{pickLocalizedText(next.title, locale)}</h3>
                <p>{pickLocalizedText(next.summary, locale)}</p>
              </LocalizedLink>
            ) : (
              <div />
            )}
          </div>
        </section>
      ) : null}

      {related.length > 0 ? (
        <section className="section page-section">
          <div className="section-head">
            <div>
              <h2>{locale === "zh" ? "同类模板" : "More in this category"}</h2>
              <p className="small">
                {locale === "zh"
                  ? "同一模板分类下的其他起步选项。"
                  : "Other starter templates from the same category."}
              </p>
            </div>
          </div>
          <div className="grid cols-3 templates-grid">
            {related.map((item) => (
              <TemplateCard entry={item} key={item.slug} locale={locale} variant="default" />
            ))}
          </div>
        </section>
      ) : null}

      <CrossResourceLinks
        items={crossLinks}
        locale={locale}
        summary={{
          en: "If you want this template to work in a real environment, pair it with one guide and one recovery path.",
          zh: "如果你想让这个模板真正跑起来，通常要配一篇教程和一条恢复路径。",
        }}
        title={{
          en: "Bridge This Template Into Practice",
          zh: "把这个模板接到真实场景里",
        }}
      />
    </SiteShell>
  );
}
