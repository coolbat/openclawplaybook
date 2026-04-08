import Link from "next/link";

import type { TroubleshootEntry } from "@/content/troubleshoot";
import { localizeHref, pickLocalizedList, pickLocalizedText, type Locale } from "@/lib/i18n";

type TroubleshootCardProps = {
  entry: TroubleshootEntry;
  locale: Locale;
};

export function TroubleshootCard({ entry, locale }: TroubleshootCardProps) {
  const copy = {
    openGuide: locale === "zh" ? "查看排错指南" : "Open guide",
  };

  return (
    <article className="card troubleshoot-card">
      <div className="troubleshoot-card-head">
        <h3>{pickLocalizedText(entry.title, locale)}</h3>
        <p className="meta">{pickLocalizedText(entry.symptom, locale)}</p>
      </div>

      <p>{pickLocalizedText(entry.summary, locale)}</p>

      <div className="troubleshoot-card-section">
        <h4 className="subhead">{locale === "zh" ? "常见原因" : "Common causes"}</h4>
        <ul className="troubleshoot-list">
          {pickLocalizedList(entry.commonCauses, locale).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="troubleshoot-card-section">
        <h4 className="subhead">{locale === "zh" ? "第一轮检查" : "First checks"}</h4>
        <ul className="troubleshoot-list">
          {pickLocalizedList(entry.checks, locale).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="cta-row">
        <Link className={`btn ${entry.cta.variant ?? "secondary"}`} href={localizeHref(`/troubleshoot/${entry.slug}`, locale)}>
          {copy.openGuide}
        </Link>
      </div>
    </article>
  );
}
