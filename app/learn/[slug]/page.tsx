import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { CrossResourceLinks } from "@/components/cross-resource-links";
import { LocalizedLink } from "@/components/localized-link";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { createPageMetadata } from "@/lib/metadata";
import { pickLocalizedText } from "@/lib/i18n";
import { getRequestLocale } from "@/lib/i18n-server";
import { renderLearnArticleMdx } from "@/lib/mdx";
import {
  getLearnNeighbors,
  getLearnTabByTutorialSlug,
  getLearnTutorialPosition,
  getLearnTutorialBySlug,
  getRelatedLearnTutorials,
} from "@/lib/learn";
import { absoluteLocalizedUrl, siteName, siteUrl } from "@/lib/site";
import { getLearnCrossLinks } from "@/lib/cross-links";

type LearnArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: LearnArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getRequestLocale();
  const tutorial = getLearnTutorialBySlug(slug);

  if (!tutorial) {
    return {};
  }

  return createPageMetadata({
    locale,
    title: pickLocalizedText(tutorial.title, locale),
    description: pickLocalizedText(tutorial.summary, locale),
    path: `/learn/${slug}`,
    keywords: tutorial.tags,
  });
}

export default async function LearnArticlePage({ params }: LearnArticlePageProps) {
  const { slug } = await params;
  const locale = await getRequestLocale();
  const tutorial = getLearnTutorialBySlug(slug);

  if (!tutorial) {
    notFound();
  }

  const tutorialTitle = pickLocalizedText(tutorial.title, locale);
  const tutorialSummary = pickLocalizedText(tutorial.summary, locale);
  const { content, frontmatter } = await renderLearnArticleMdx(slug, locale);
  const currentTab = getLearnTabByTutorialSlug(slug);
  const { previous, next } = getLearnNeighbors(slug);
  const related = getRelatedLearnTutorials(slug);
  const crossLinks = getLearnCrossLinks(slug);
  const position = getLearnTutorialPosition(slug);
  const currentTabLabel = currentTab ? pickLocalizedText(currentTab.label, locale) : "Learn";

  return (
    <SiteShell active="learn" defaultTheme="light">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: tutorialTitle,
            description: tutorialSummary,
            inLanguage: locale === "zh" ? "zh-CN" : "en",
            url: absoluteLocalizedUrl(`/learn/${slug}`, locale),
            mainEntityOfPage: absoluteLocalizedUrl(`/learn/${slug}`, locale),
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
                name: "Learn",
                item: absoluteLocalizedUrl("/learn", locale),
              },
              {
                "@type": "ListItem",
                position: 3,
                name: tutorialTitle,
                item: absoluteLocalizedUrl(`/learn/${slug}`, locale),
              },
            ],
          },
        ]}
      />

      <PageHero
        className="page-hero hero-single learn-article-hero"
        kicker={`LEARN ARTICLE${frontmatter.readingTime ? ` · ${frontmatter.readingTime}` : ""}`}
        title={{
          en: tutorialTitle,
          zh: tutorialTitle,
        }}
        summary={{
          en: tutorialSummary,
          zh: tutorialSummary,
        }}
        ctas={[
          {
            label: {
              en: "Back to Learn hub",
              zh: "返回 Learn 资源中心",
            },
            href: "/learn",
            variant: "secondary",
          },
        ]}
      />

      <section className="section page-section">
        <nav aria-label="Breadcrumb" className="detail-breadcrumb learn-breadcrumb">
          <LocalizedLink href="/">{locale === "zh" ? "首页" : "Home"}</LocalizedLink>
          <span>/</span>
          <LocalizedLink href="/learn">Learn</LocalizedLink>
          {currentTab ? (
            <>
              <span>/</span>
              <span>{currentTabLabel}</span>
            </>
          ) : null}
          <span>/</span>
          <span>{tutorialTitle}</span>
        </nav>

        <div className="detail-layout learn-article-layout">
          <article className="detail-body learn-article-body">
            <div className="detail-context learn-article-context">
              <span className="detail-chip learn-article-chip">{currentTabLabel}</span>
              {frontmatter.readingTime ? (
                <span className="detail-chip learn-article-chip">{frontmatter.readingTime}</span>
              ) : null}
            </div>
            <div className="page-prose detail-prose learn-article-prose">{content}</div>
          </article>

          <aside className="detail-sidebar learn-article-sidebar">
            <div className="card detail-sidebar-card learn-article-sidebar-card">
              <p className="eyebrow">{locale === "zh" ? "阅读地图" : "Reading map"}</p>
              <h3>{currentTabLabel}</h3>
              <p>{tutorialSummary}</p>
              <div className="detail-stats learn-article-sidebar-stats">
                {frontmatter.readingTime ? (
                  <div>
                    <span>{locale === "zh" ? "阅读时长" : "Reading time"}</span>
                    <strong>{frontmatter.readingTime}</strong>
                  </div>
                ) : null}
                {position ? (
                  <div>
                    <span>{locale === "zh" ? "主题内位置" : "In this topic"}</span>
                    <strong>
                      {position.tabIndex}/{position.tabTotal}
                    </strong>
                  </div>
                ) : null}
                {position ? (
                  <div>
                    <span>{locale === "zh" ? "全库进度" : "Library position"}</span>
                    <strong>
                      {position.overallIndex}/{position.overallTotal}
                    </strong>
                  </div>
                ) : null}
              </div>
              <div className="tag-row">
                {tutorial.tags[locale].map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {next ? (
              <LocalizedLink className="card detail-sidebar-card detail-next-card learn-article-sidebar-card learn-article-next-card" href={`/learn/${next.slug}`}>
                <p className="eyebrow">{locale === "zh" ? "建议下一篇" : "Suggested next"}</p>
                <h3>{pickLocalizedText(next.title, locale)}</h3>
                <p>{pickLocalizedText(next.summary, locale)}</p>
                <span className="detail-next-link learn-article-next-link">
                  {locale === "zh" ? "继续进入下一篇" : "Continue to next article"}
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
              <LocalizedLink className="card detail-nav-card learn-article-nav-card" href={`/learn/${previous.slug}`}>
                <p className="eyebrow">{locale === "zh" ? "上一篇" : "Previous"}</p>
                <h3>{pickLocalizedText(previous.title, locale)}</h3>
                <p>{pickLocalizedText(previous.summary, locale)}</p>
              </LocalizedLink>
            ) : (
              <div />
            )}

            {next ? (
              <LocalizedLink className="card detail-nav-card learn-article-nav-card" href={`/learn/${next.slug}`}>
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
              <h2>{locale === "zh" ? "继续阅读" : "Keep Reading"}</h2>
              <p className="small">
                {locale === "zh"
                  ? "同一主题下的其他教程。"
                  : "More tutorials from the same Learn topic."}
              </p>
            </div>
          </div>
          <div className="grid cols-3 learn-related-grid">
            {related.map((item) => (
              <article className="card learn-tutorial-card" key={item.slug}>
                <div className="learn-tutorial-meta">{pickLocalizedText(item.meta, locale)}</div>
                <h3>{pickLocalizedText(item.title, locale)}</h3>
                <p>{pickLocalizedText(item.summary, locale)}</p>
                <div className="tag-row">
                  {item.tags[locale].map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="cta-row">
                  <LocalizedLink className={`btn ${item.cta.variant ?? "secondary"}`} href={`/learn/${item.slug}`}>
                    {pickLocalizedText(item.cta.label, locale)}
                  </LocalizedLink>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <CrossResourceLinks
        items={crossLinks}
        locale={locale}
        summary={{
          en: "When a tutorial becomes real work, these two paths usually help next.",
          zh: "当一篇教程开始进入真实工作，这两个方向通常最值得继续往下看。",
        }}
        title={{
          en: "Next Best Moves",
          zh: "下一步最值得做的事",
        }}
      />
    </SiteShell>
  );
}
