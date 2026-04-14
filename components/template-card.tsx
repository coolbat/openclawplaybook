import Link from "next/link";
import type { TemplateEntry } from "@/content/templates";
import { localizeHref, type Locale } from "@/lib/i18n";

export function TemplateCard({
  entry,
  variant = "default",
  locale,
  showTags = true,
  ctaVariantOverride,
}: {
  entry: TemplateEntry;
  variant?: "default" | "featured";
  locale: Locale;
  showTags?: boolean;
  ctaVariantOverride?: "primary" | "secondary" | "ghost" | "link";
}) {
  const copy = {
    eyebrow: locale === "zh" ? "精选模板" : "Featured starter",
    recommendedFor: locale === "zh" ? "适合：" : "Recommended for: ",
    channels: locale === "zh" ? "渠道：" : "Channels: ",
    openTemplate:
      locale === "zh" ? `查看模板：${entry.title.zh}` : `Open template: ${entry.title.en}`,
  };

  return (
    <article className={`card template-card template-card-${variant}`}>
      <>
        {variant === "featured" ? <p className="eyebrow">{copy.eyebrow}</p> : null}
        <h3>{entry.title[locale]}</h3>
        <p>{entry.summary[locale]}</p>
        <p className="meta">
          {entry.difficulty[locale]} · {entry.time[locale]} · {entry.risk[locale]}
        </p>
        <p className="meta template-recommended">
          {copy.recommendedFor}
          {entry.recommendedFor[locale]}
        </p>
        <p className="meta">
          {copy.channels}
          {entry.channels[locale].join(" / ")}
        </p>
      </>
      {showTags ? (
        <div className="tag-row">
          {entry.tags[locale].map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      ) : null}
      <div className="cta-row">
        <Link
          className={`btn ${ctaVariantOverride ?? entry.cta.variant ?? "secondary"}`}
          href={localizeHref(`/templates/${entry.slug}`, locale)}
        >
          <>{copy.openTemplate}</>
        </Link>
      </div>
    </article>
  );
}
