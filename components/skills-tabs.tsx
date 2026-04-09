"use client";

import { useState } from "react";

import type { SkillTab } from "@/content/skills";
import { pickLocalizedList, pickLocalizedText, type Locale } from "@/lib/i18n";

type SkillsTabsProps = {
  locale: Locale;
  tabs: SkillTab[];
};

export function SkillsTabs({ locale, tabs }: SkillsTabsProps) {
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id ?? "");
  const activeTab = tabs.find((tab) => tab.id === activeTabId) ?? tabs[0];

  if (!activeTab) {
    return null;
  }

  return (
    <section className="section page-section skills-tabs-section">
      <div className="skills-tabs-rail" role="tablist" aria-label="Skill category tabs">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab.id;
          return (
            <button
              key={tab.id}
              aria-selected={isActive}
              className={`skills-tab-trigger${isActive ? " is-active" : ""}`}
              onClick={() => setActiveTabId(tab.id)}
              role="tab"
              type="button"
            >
              {pickLocalizedText(tab.label, locale)}
            </button>
          );
        })}
      </div>

      <div className="skills-tab-panel" role="tabpanel">
        <div className="skills-tab-intro">
          <p>{pickLocalizedText(activeTab.intro, locale)}</p>
        </div>

        <div className="grid cols-3 skills-grid">
          {activeTab.skills.map((skill) => (
            <article className="card skill-card" key={skill.slug}>
              <div className="skill-card-head">
                <code className="skill-name">{skill.name.en}</code>
                {skill.starterFriendly && (
                  <span className="tag skill-starter-badge">
                    {locale === "zh" ? "适合新手" : "Starter-friendly"}
                  </span>
                )}
              </div>
              <p>{pickLocalizedText(skill.summary, locale)}</p>
              <div className="skill-meta">
                <span className="tag">{pickLocalizedText(skill.difficulty, locale)}</span>
                <span className="tag">{pickLocalizedText(skill.risk, locale)}</span>
              </div>
              <div className="skill-install">
                <span className="hero-rail-label">
                  {locale === "zh" ? "安装命令" : "Install"}
                </span>
                <code className="skill-install-cmd">{skill.installCmd}</code>
              </div>
              <div className="tag-row">
                {pickLocalizedList(skill.tags, locale).map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
              <div className="skill-use-cases">
                <span className="hero-rail-label">
                  {locale === "zh" ? "适用场景" : "Use cases"}
                </span>
                <ul>
                  {pickLocalizedList(skill.useCases, locale).map((uc) => (
                    <li key={uc}>{uc}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
