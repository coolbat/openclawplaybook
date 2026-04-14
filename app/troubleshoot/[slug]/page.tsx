import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { CrossResourceLinks } from "@/components/cross-resource-links";
import { LocalizedLink } from "@/components/localized-link";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { TroubleshootCard } from "@/components/troubleshoot-card";
import { createPageMetadata } from "@/lib/metadata";
import { pickLocalizedText } from "@/lib/i18n";
import { getRequestLocale } from "@/lib/i18n-server";
import { renderTroubleshootArticleMdx } from "@/lib/mdx";
import {
  getRelatedTroubleshootEntries,
  getTroubleshootEntryBySlug,
  getTroubleshootNeighbors,
  getTroubleshootPosition,
  getTroubleshootTabBySlug,
} from "@/lib/troubleshoot";
import { absoluteLocalizedUrl, siteName, siteUrl } from "@/lib/site";
import { getTroubleshootCrossLinks } from "@/lib/cross-links";

type TroubleshootArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: TroubleshootArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getRequestLocale();
  const entry = getTroubleshootEntryBySlug(slug);

  if (!entry) {
    return {};
  }

  return createPageMetadata({
    locale,
    title: pickLocalizedText(entry.title, locale),
    description: pickLocalizedText(entry.summary, locale),
    path: `/troubleshoot/${slug}`,
    keywords: entry.commonCauses,
  });
}

export default async function TroubleshootArticlePage({ params }: TroubleshootArticlePageProps) {
  const { slug } = await params;
  const locale = await getRequestLocale();
  const entry = getTroubleshootEntryBySlug(slug);

  if (!entry) {
    notFound();
  }

  const entryTitle = pickLocalizedText(entry.title, locale);
  const entrySummary = pickLocalizedText(entry.summary, locale);
  const entrySymptom = pickLocalizedText(entry.symptom, locale);
  const { content, frontmatter } = await renderTroubleshootArticleMdx(slug, locale);
  const currentTab = getTroubleshootTabBySlug(slug);
  const { previous, next } = getTroubleshootNeighbors(slug);
  const related = getRelatedTroubleshootEntries(slug);
  const crossLinks = getTroubleshootCrossLinks(slug);
  const position = getTroubleshootPosition(slug);
  const currentTabLabel = currentTab ? pickLocalizedText(currentTab.label, locale) : "Troubleshoot";

  return (
    <SiteShell active="troubleshoot" defaultTheme="light">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: entryTitle,
            description: entrySummary,
            inLanguage: locale === "zh" ? "zh-CN" : "en",
            url: absoluteLocalizedUrl(`/troubleshoot/${slug}`, locale),
            mainEntityOfPage: absoluteLocalizedUrl(`/troubleshoot/${slug}`, locale),
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
                name: "Troubleshoot",
                item: absoluteLocalizedUrl("/troubleshoot", locale),
              },
              {
                "@type": "ListItem",
                position: 3,
                name: entryTitle,
                item: absoluteLocalizedUrl(`/troubleshoot/${slug}`, locale),
              },
            ],
          },
        ]}
      />

      <PageHero
        className="page-hero hero-single troubleshoot-article-hero"
        kicker={`TROUBLESHOOT GUIDE${frontmatter.readingTime ? ` · ${frontmatter.readingTime}` : ""}`}
        title={{ en: entryTitle, zh: entryTitle }}
        summary={{ en: entrySummary, zh: entrySummary }}
        ctas={[
          {
            label: { en: "Back to Troubleshoot", zh: "返回 Troubleshoot" },
            href: "/troubleshoot",
            variant: "secondary",
          },
          {
            label: { en: "Review Learn hub", zh: "查看 Learn 资源中心" },
            href: "/learn",
            variant: "link",
          },
        ]}
        aside={
          <div className="troubleshoot-hero-briefing">
            <div className="troubleshoot-hero-briefing-head">
              <p className="eyebrow">{locale === "zh" ? "症状快照" : "Symptom snapshot"}</p>
              <h2>{currentTabLabel}</h2>
            </div>
            <p className="troubleshoot-hero-symptom">{entrySymptom}</p>
            <div className="troubleshoot-hero-checks">
              <span>{locale === "zh" ? "先检查" : "First checks"}</span>
              <ul>
                {entry.checks[locale].slice(0, 3).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        }
      />

      <section className="section page-section">
        <nav aria-label="Breadcrumb" className="detail-breadcrumb learn-breadcrumb">
          <LocalizedLink href="/">{locale === "zh" ? "首页" : "Home"}</LocalizedLink>
          <span>/</span>
          <LocalizedLink href="/troubleshoot">Troubleshoot</LocalizedLink>
          {currentTab ? (
            <>
              <span>/</span>
              <span>{currentTabLabel}</span>
            </>
          ) : null}
          <span>/</span>
          <span>{entryTitle}</span>
        </nav>

        <div className="detail-layout troubleshoot-article-layout">
          <article className="detail-body troubleshoot-article-body">
            <div className="detail-context troubleshoot-article-context">
              <span className="detail-chip learn-article-chip">{currentTabLabel}</span>
              {frontmatter.readingTime ? (
                <span className="detail-chip learn-article-chip">{frontmatter.readingTime}</span>
              ) : null}
              <span className="detail-chip learn-article-chip">{entrySymptom}</span>
            </div>

            <div className="troubleshoot-article-snapshot">
              <article className="card troubleshoot-article-snapshot-card">
                <p className="eyebrow">{locale === "zh" ? "你看到的现象" : "Visible symptom"}</p>
                <h3>{locale === "zh" ? "从可观察信号开始" : "Start from the visible signal"}</h3>
                <p>{entrySymptom}</p>
              </article>
              <article className="card troubleshoot-article-snapshot-card">
                <p className="eyebrow">{locale === "zh" ? "常见原因" : "Common causes"}</p>
                <h3>{locale === "zh" ? "优先缩小哪一层" : "Which layer to narrow first"}</h3>
                <div className="tag-row">
                  {entry.commonCauses[locale].map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
              <article className="card troubleshoot-article-snapshot-card">
                <p className="eyebrow">{locale === "zh" ? "恢复动作" : "Recovery path"}</p>
                <h3>{locale === "zh" ? "先执行最短检查环路" : "Run the shortest recovery loop"}</h3>
                <p className="troubleshoot-article-snapshot-copy">
                  {locale === "zh"
                    ? "如果你已经缩小了问题范围，就沿着这条动作继续推进，而不是重新随机改配置。"
                    : "Once you narrow the fault, continue with one recovery move instead of changing random variables again."}
                </p>
                <LinkLikeButton href={entry.cta.href} label={pickLocalizedText(entry.cta.label, locale)} variant={entry.cta.variant ?? "secondary"} />
              </article>
            </div>

            <div className="page-prose detail-prose troubleshoot-article-prose">{content}</div>
          </article>

          <aside className="detail-sidebar troubleshoot-article-sidebar">
            <div className="card detail-sidebar-card troubleshoot-article-sidebar-card">
              <p className="eyebrow">{locale === "zh" ? "诊断地图" : "Diagnostic map"}</p>
              <h3>{currentTabLabel}</h3>
              <p>{entrySummary}</p>
              <div className="detail-stats learn-article-sidebar-stats">
                {frontmatter.readingTime ? (
                  <div>
                    <span>{locale === "zh" ? "阅读时长" : "Reading time"}</span>
                    <strong>{frontmatter.readingTime}</strong>
                  </div>
                ) : null}
                {position ? (
                  <div>
                    <span>{locale === "zh" ? "主题内位置" : "In this symptom group"}</span>
                    <strong>
                      {position.tabIndex}/{position.tabTotal}
                    </strong>
                  </div>
                ) : null}
                {position ? (
                  <div>
                    <span>{locale === "zh" ? "全库位置" : "Library position"}</span>
                    <strong>
                      {position.overallIndex}/{position.overallTotal}
                    </strong>
                  </div>
                ) : null}
              </div>
              <p className="troubleshoot-article-sidebar-label">
                {locale === "zh" ? "第一轮检查" : "First checks"}
              </p>
              <div className="tag-row">
                {entry.checks[locale].map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {next ? (
              <LocalizedLink
                className="card detail-sidebar-card detail-next-card learn-article-sidebar-card learn-article-next-card"
                href={`/troubleshoot/${next.slug}`}
              >
                <p className="eyebrow">{locale === "zh" ? "建议下一篇" : "Suggested next"}</p>
                <h3>{pickLocalizedText(next.title, locale)}</h3>
                <p>{pickLocalizedText(next.summary, locale)}</p>
                <span className="detail-next-link learn-article-next-link">
                  {locale === "zh" ? "继续查看下一篇排错指南" : "Open the next troubleshooting guide"}
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
              <LocalizedLink className="card detail-nav-card learn-article-nav-card" href={`/troubleshoot/${previous.slug}`}>
                <p className="eyebrow">{locale === "zh" ? "上一篇" : "Previous"}</p>
                <h3>{pickLocalizedText(previous.title, locale)}</h3>
                <p>{pickLocalizedText(previous.summary, locale)}</p>
              </LocalizedLink>
            ) : (
              <div />
            )}

            {next ? (
              <LocalizedLink className="card detail-nav-card learn-article-nav-card" href={`/troubleshoot/${next.slug}`}>
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
              <h2>{locale === "zh" ? "同类排错指南" : "More in this symptom group"}</h2>
              <p className="small">
                {locale === "zh"
                  ? "同一症状分类下的其他排错入口。"
                  : "Other troubleshooting guides from the same symptom group."}
              </p>
            </div>
          </div>
          <div className="grid cols-3 troubleshoot-grid">
            {related.map((item) => (
              <TroubleshootCard entry={item} key={item.slug} locale={locale} />
            ))}
          </div>
        </section>
      ) : null}

      <CrossResourceLinks
        items={crossLinks}
        locale={locale}
        summary={{
          en: "After you shrink the fault, these are usually the two best places to continue.",
          zh: "当你已经缩小故障范围之后，通常这两个入口最值得继续往下走。",
        }}
        title={{
          en: "Recover and Rebuild",
          zh: "恢复之后，接着重建",
        }}
      />
    </SiteShell>
  );
}

function LinkLikeButton({
  href,
  label,
  variant,
}: {
  href: string;
  label: string;
  variant: "primary" | "secondary" | "link";
}) {
  return (
    <LocalizedLink className={`btn ${variant}`} href={href}>
      {label}
    </LocalizedLink>
  );
}
