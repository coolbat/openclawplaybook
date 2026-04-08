import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { CrossResourceLinks } from "@/components/cross-resource-links";
import { JsonLd } from "@/components/json-ld";
import { LocalizedLink } from "@/components/localized-link";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { createPageMetadata } from "@/lib/metadata";
import { pickLocalizedText } from "@/lib/i18n";
import { getRequestLocale } from "@/lib/i18n-server";
import { renderQuickStartArticleMdx } from "@/lib/mdx";
import {
  getQuickStartEntryBySlug,
  getQuickStartNeighbors,
  getQuickStartPosition,
  getRelatedQuickStartEntries,
} from "@/lib/quick-start";
import { absoluteLocalizedUrl, siteName, siteUrl } from "@/lib/site";
import { getQuickStartCrossLinks } from "@/lib/cross-links";

type QuickStartArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: QuickStartArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getRequestLocale();
  const entry = getQuickStartEntryBySlug(slug);

  if (!entry) {
    return {};
  }

  return createPageMetadata({
    locale,
    title: pickLocalizedText(entry.title, locale),
    description: pickLocalizedText(entry.summary, locale),
    path: `/quick-start/${slug}`,
    keywords: entry.bullets,
  });
}

export default async function QuickStartArticlePage({ params }: QuickStartArticlePageProps) {
  const { slug } = await params;
  const locale = await getRequestLocale();
  const entry = getQuickStartEntryBySlug(slug);

  if (!entry) {
    notFound();
  }

  const entryTitle = pickLocalizedText(entry.title, locale);
  const entrySummary = pickLocalizedText(entry.summary, locale);
  const { content, frontmatter } = await renderQuickStartArticleMdx(slug, locale);
  const { previous, next } = getQuickStartNeighbors(slug);
  const related = getRelatedQuickStartEntries(slug);
  const crossLinks = getQuickStartCrossLinks(slug);
  const position = getQuickStartPosition(slug);
  const quickStartLabel = locale === "zh" ? "Quick Start" : "Quick Start";

  return (
    <SiteShell active="home" defaultTheme="light">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: entryTitle,
            description: entrySummary,
            inLanguage: locale === "zh" ? "zh-CN" : "en",
            url: absoluteLocalizedUrl(`/quick-start/${slug}`, locale),
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
                name: "Quick Start",
                item: `${absoluteLocalizedUrl("/", locale)}#quick-start`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: entryTitle,
                item: absoluteLocalizedUrl(`/quick-start/${slug}`, locale),
              },
            ],
          },
        ]}
      />

      <PageHero
        className="page-hero hero-single quick-start-article-hero"
        kicker={`QUICK START · ${entry.step}${frontmatter.readingTime ? ` · ${frontmatter.readingTime}` : ""}`}
        title={{ en: entryTitle, zh: entryTitle }}
        summary={{ en: entrySummary, zh: entrySummary }}
        ctas={[
          {
            label: { en: "Back to Quick Start", zh: "返回 Quick Start" },
            href: "/#quick-start",
            variant: "secondary",
          },
          {
            label: { en: "Open Learn hub", zh: "进入 Learn 资源中心" },
            href: "/learn",
            variant: "link",
          },
        ]}
        aside={
          <div className="template-hero-briefing">
            <div className="template-hero-briefing-head">
              <p className="eyebrow">{locale === "zh" ? "步骤快照" : "Step snapshot"}</p>
              <h2>
                {quickStartLabel} · {entry.step}
              </h2>
            </div>
            <div className="template-hero-briefing-stats">
              <div>
                <span>{locale === "zh" ? "阶段" : "Stage"}</span>
                <strong>{entry.step}</strong>
              </div>
              {frontmatter.readingTime ? (
                <div>
                  <span>{locale === "zh" ? "阅读时长" : "Reading time"}</span>
                  <strong>{frontmatter.readingTime}</strong>
                </div>
              ) : null}
              {position ? (
                <div>
                  <span>{locale === "zh" ? "路径进度" : "Path progress"}</span>
                  <strong>
                    {position.overallIndex}/{position.overallTotal}
                  </strong>
                </div>
              ) : null}
            </div>
            <div className="tag-row">
              {entry.bullets[locale].slice(0, 3).map((item) => (
                <span className="tag" key={item}>
                  {item}
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
          <LocalizedLink href="/#quick-start">Quick Start</LocalizedLink>
          <span>/</span>
          <span>{entryTitle}</span>
        </nav>

        <div className="detail-layout learn-article-layout">
          <article className="detail-body learn-article-body">
            <div className="detail-context learn-article-context">
              <span className="detail-chip learn-article-chip">{quickStartLabel}</span>
              <span className="detail-chip learn-article-chip">{entry.step}</span>
              {frontmatter.readingTime ? (
                <span className="detail-chip learn-article-chip">{frontmatter.readingTime}</span>
              ) : null}
            </div>
            <div className="page-prose detail-prose learn-article-prose">{content}</div>
          </article>

          <aside className="detail-sidebar learn-article-sidebar">
            <div className="card detail-sidebar-card learn-article-sidebar-card">
              <p className="eyebrow">{locale === "zh" ? "步骤地图" : "Step map"}</p>
              <h3>{entryTitle}</h3>
              <p>{entrySummary}</p>
              <div className="detail-stats learn-article-sidebar-stats">
                <div>
                  <span>{locale === "zh" ? "步骤编号" : "Step"}</span>
                  <strong>{entry.step}</strong>
                </div>
                {frontmatter.readingTime ? (
                  <div>
                    <span>{locale === "zh" ? "阅读时长" : "Reading time"}</span>
                    <strong>{frontmatter.readingTime}</strong>
                  </div>
                ) : null}
                {position ? (
                  <div>
                    <span>{locale === "zh" ? "整体进度" : "Overall progress"}</span>
                    <strong>
                      {position.overallIndex}/{position.overallTotal}
                    </strong>
                  </div>
                ) : null}
              </div>
              <div className="tag-row">
                {entry.bullets[locale].map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {next ? (
              <LocalizedLink
                className="card detail-sidebar-card detail-next-card learn-article-sidebar-card learn-article-next-card"
                href={`/quick-start/${next.slug}`}
              >
                <p className="eyebrow">{locale === "zh" ? "建议下一步" : "Suggested next"}</p>
                <h3>{pickLocalizedText(next.title, locale)}</h3>
                <p>{pickLocalizedText(next.summary, locale)}</p>
                <span className="detail-next-link learn-article-next-link">
                  {locale === "zh" ? "继续下一个步骤" : "Continue to the next step"}
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
              <LocalizedLink className="card detail-nav-card learn-article-nav-card" href={`/quick-start/${previous.slug}`}>
                <p className="eyebrow">{locale === "zh" ? "上一步" : "Previous"}</p>
                <h3>{pickLocalizedText(previous.title, locale)}</h3>
                <p>{pickLocalizedText(previous.summary, locale)}</p>
              </LocalizedLink>
            ) : (
              <div />
            )}

            {next ? (
              <LocalizedLink className="card detail-nav-card learn-article-nav-card" href={`/quick-start/${next.slug}`}>
                <p className="eyebrow">{locale === "zh" ? "下一步" : "Next"}</p>
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
              <h2>{locale === "zh" ? "继续走完整条路径" : "Keep Moving Through the Path"}</h2>
              <p className="small">
                {locale === "zh"
                  ? "同一条 Quick Start 路径里的其他关键步骤。"
                  : "Other core steps from the same Quick Start path."}
              </p>
            </div>
          </div>
          <div className="grid cols-2 cross-resource-grid">
            {related.map((item) => (
              <LocalizedLink className="card cross-resource-card" href={`/quick-start/${item.slug}`} key={item.slug}>
                <p className="eyebrow">
                  {quickStartLabel} · {item.step}
                </p>
                <h3>{pickLocalizedText(item.title, locale)}</h3>
                <p>{pickLocalizedText(item.summary, locale)}</p>
                <span className="learn-article-next-link">
                  {locale === "zh" ? "继续查看" : "Explore next"}
                </span>
              </LocalizedLink>
            ))}
          </div>
        </section>
      ) : null}

      <CrossResourceLinks
        items={crossLinks}
        locale={locale}
        title={{
          en: "What Usually Helps Next",
          zh: "下一步通常最有帮助的内容",
        }}
        summary={{
          en: "Once this step is clear, these are usually the most useful places to continue.",
          zh: "当这一步已经清楚之后，通常接下来最值得进入的是这几个方向。",
        }}
      />
    </SiteShell>
  );
}
