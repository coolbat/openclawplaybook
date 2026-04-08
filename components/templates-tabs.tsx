"use client";

import { useState } from "react";

import { TemplateCard } from "@/components/template-card";
import type { TemplateTab } from "@/content/templates";
import { pickLocalizedText, type Locale } from "@/lib/i18n";

type TemplatesTabsProps = {
  locale: Locale;
  tabs: TemplateTab[];
};

export function TemplatesTabs({ locale, tabs }: TemplatesTabsProps) {
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id ?? "");
  const activeTab = tabs.find((tab) => tab.id === activeTabId) ?? tabs[0];

  if (!activeTab) {
    return null;
  }

  return (
    <section className="section page-section templates-tabs-section">
      <div className="templates-tabs-rail" role="tablist" aria-label="Template category tabs">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab.id;

          return (
            <button
              key={tab.id}
              aria-selected={isActive}
              className={`templates-tab-trigger${isActive ? " is-active" : ""}`}
              onClick={() => setActiveTabId(tab.id)}
              role="tab"
              type="button"
            >
              {pickLocalizedText(tab.label, locale)}
            </button>
          );
        })}
      </div>

      <div className="templates-tab-panel" role="tabpanel">
        <div className="templates-tab-intro">
          <p>{pickLocalizedText(activeTab.intro, locale)}</p>
        </div>

        <div className="grid cols-3 templates-grid">
          {activeTab.templates.map((entry) => (
            <TemplateCard entry={entry} key={entry.slug} locale={locale} variant="default" />
          ))}
        </div>
      </div>
    </section>
  );
}
