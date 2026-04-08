"use client";

import { useState } from "react";

import { TroubleshootCard } from "@/components/troubleshoot-card";
import type { TroubleshootTab } from "@/content/troubleshoot";
import { pickLocalizedText, type Locale } from "@/lib/i18n";

type TroubleshootTabsProps = {
  locale: Locale;
  tabs: TroubleshootTab[];
};

export function TroubleshootTabs({ locale, tabs }: TroubleshootTabsProps) {
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id ?? "");
  const activeTab = tabs.find((tab) => tab.id === activeTabId) ?? tabs[0];

  if (!activeTab) {
    return null;
  }

  return (
    <section className="section page-section troubleshoot-tabs-section" id="troubleshoot-directory">
      <div className="troubleshoot-tabs-rail" role="tablist" aria-label="Troubleshoot symptom tabs">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab.id;

          return (
            <button
              key={tab.id}
              aria-selected={isActive}
              className={`troubleshoot-tab-trigger${isActive ? " is-active" : ""}`}
              onClick={() => setActiveTabId(tab.id)}
              role="tab"
              type="button"
            >
              {pickLocalizedText(tab.label, locale)}
            </button>
          );
        })}
      </div>

      <div className="troubleshoot-tab-panel" role="tabpanel">
        <div className="troubleshoot-tab-intro">
          <p>{pickLocalizedText(activeTab.intro, locale)}</p>
        </div>

        <div className="grid cols-3 troubleshoot-grid">
          {activeTab.entries.map((entry) => (
            <TroubleshootCard entry={entry} key={entry.id} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
