"use client";

import { useState } from "react";
import Link from "next/link";

import type { LearnTab } from "@/content/learn";
import { localizeHref, pickLocalizedList, pickLocalizedText, type Locale } from "@/lib/i18n";

type LearnTabsProps = {
  locale: Locale;
  tabs: LearnTab[];
};

export function LearnTabs({ locale, tabs }: LearnTabsProps) {
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id ?? "");
  const activeTab = tabs.find((tab) => tab.id === activeTabId) ?? tabs[0];

  if (!activeTab) {
    return null;
  }

  return (
    <section className="section page-section learn-tabs-section">
      <div className="learn-tabs-rail" role="tablist" aria-label="Learn topic tabs">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab.id;

          return (
            <button
              key={tab.id}
              aria-selected={isActive}
              className={`learn-tab-trigger${isActive ? " is-active" : ""}`}
              onClick={() => setActiveTabId(tab.id)}
              role="tab"
              type="button"
            >
              {pickLocalizedText(tab.label, locale)}
            </button>
          );
        })}
      </div>

      <div className="learn-tab-panel" role="tabpanel">
        <div className="learn-tab-intro">
          <p>{pickLocalizedText(activeTab.intro, locale)}</p>
        </div>

        <div className="grid cols-3 learn-tutorial-grid">
          {activeTab.tutorials.map((tutorial) => (
            <article className="card learn-tutorial-card" key={tutorial.id}>
              <div className="learn-tutorial-meta">{pickLocalizedText(tutorial.meta, locale)}</div>
              <h3>{pickLocalizedText(tutorial.title, locale)}</h3>
              <p>{pickLocalizedText(tutorial.summary, locale)}</p>
              <div className="tag-row">
                {pickLocalizedList(tutorial.tags, locale).map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="cta-row">
                <Link
                  className={`btn ${tutorial.cta.variant ?? "secondary"}`}
                  href={localizeHref(tutorial.cta.href, locale)}
                >
                  {pickLocalizedText(tutorial.cta.label, locale)}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
