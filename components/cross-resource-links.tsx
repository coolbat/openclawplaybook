import { LocalizedLink } from "@/components/localized-link";
import type { CrossLinkCard } from "@/lib/cross-links";
import type { Locale } from "@/lib/i18n";
import { pickLocalizedText } from "@/lib/i18n";

type CrossResourceLinksProps = {
  locale: Locale;
  items: CrossLinkCard[];
  title: {
    en: string;
    zh: string;
  };
  summary: {
    en: string;
    zh: string;
  };
};

export function CrossResourceLinks({ locale, items, title, summary }: CrossResourceLinksProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="section page-section">
      <div className="section-head">
        <div>
          <h2>{title[locale]}</h2>
          <p className="small">{summary[locale]}</p>
        </div>
      </div>
      <div className="grid cols-2 cross-resource-grid">
        {items.map((item) => (
          <LocalizedLink className="card cross-resource-card" href={item.href} key={item.id}>
            <p className="eyebrow">{pickLocalizedText(item.eyebrow, locale)}</p>
            <h3>{pickLocalizedText(item.title, locale)}</h3>
            <p>{pickLocalizedText(item.summary, locale)}</p>
            <span className="learn-article-next-link">
              {locale === "zh" ? "继续查看" : "Explore next"}
            </span>
          </LocalizedLink>
        ))}
      </div>
    </section>
  );
}
