import { CopyPair } from "@/components/content";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { QuickStartCard } from "@/components/quick-start-card";
import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";
import { TemplateCard } from "@/components/template-card";
import { createPageMetadata } from "@/lib/metadata";
import { getRequestLocale } from "@/lib/i18n-server";
import { pickLocalizedText } from "@/lib/i18n";
import {
  absoluteAssetUrl,
  absoluteLocalizedUrl,
  officialLinks,
  siteName,
  siteUrl,
} from "@/lib/site";
import {
  homeFaq,
  homeHero,
  learnPreview,
  quickStartEntries,
  quickStartIntro,
  templatePreview,
  troubleshootPreview,
} from "@/content/site";
import { featuredTemplates } from "@/content/templates";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();

  return createPageMetadata({
    locale,
    title: {
      en: "Quick Start for OpenClaw Beginners",
      zh: "OpenClaw 新手 Quick Start",
    },
    description: {
      en: "OpenClaw quick start for beginners: learn the system, finish setup, connect one channel, and run your first useful workflow.",
      zh: "OpenClaw 新手快速上手：先建立系统认知，完成 setup、渠道接通和首个入门工作流验证，再在首次失败时快速回到正确的排错路径，避免长期卡在环境和技能层面的伪问题里。",
    },
    path: "/",
    keywords: {
      en: [
        "OpenClaw quick start",
        "OpenClaw beginner guide",
        "OpenClaw setup",
        "OpenClaw first workflow",
        "OpenClaw onboarding",
      ],
      zh: [
        "OpenClaw 快速上手",
        "OpenClaw 新手指南",
        "OpenClaw setup",
        "OpenClaw 第一个工作流",
        "OpenClaw 入门",
      ],
    },
  });
}

export default async function HomePage() {
  const locale = await getRequestLocale();
  const homePageName =
    locale === "zh" ? "OpenClaw 新手 Quick Start" : "Quick Start for OpenClaw Beginners";
  const homepageSummary = pickLocalizedText(homeHero.summary, locale);
  const faqEntities = homeFaq.map((item) => ({
    "@type": "Question",
    name: pickLocalizedText(item.question, locale),
    acceptedAnswer: {
      "@type": "Answer",
      text: pickLocalizedText(item.answer, locale),
    },
  }));

  return (
    <SiteShell active="home" defaultTheme="light">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: siteName,
            url: siteUrl,
            inLanguage: locale === "zh" ? "zh-CN" : "en",
            description: homepageSummary,
            publisher: {
              "@type": "Organization",
              name: siteName,
              url: siteUrl,
            },
            sameAs: officialLinks.map((link) => link.href),
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: siteName,
            url: siteUrl,
            logo: absoluteAssetUrl("/icon.svg"),
            sameAs: officialLinks.map((link) => link.href),
          },
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: homePageName,
            url: absoluteLocalizedUrl("/", locale),
            inLanguage: locale === "zh" ? "zh-CN" : "en",
            description: homepageSummary,
            isPartOf: {
              "@type": "WebSite",
              name: siteName,
              url: siteUrl,
            },
            breadcrumb: {
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
                  item: absoluteLocalizedUrl("/", locale),
                },
              ],
            },
            mainEntity: faqEntities,
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
                item: absoluteLocalizedUrl("/", locale),
              },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqEntities,
          },
        ]}
      />
      <PageHero
        className="home-hero"
        kicker={homeHero.kicker}
        title={homeHero.title}
        summary={homeHero.summary}
        ctas={homeHero.ctas}
        children={
          <CopyPair
            en={
              <div className="home-signal-strip">
                <div className="home-signal-card home-signal-card-primary">
                  <span className="hero-rail-label">Primary route</span>
                  <strong>5 linked step guides</strong>
                  <p>One guided path from mental model to first useful loop.</p>
                </div>
                <div className="home-signal-card">
                  <span className="hero-rail-label">Outcome</span>
                  <strong>Channel + result + recovery</strong>
                  <p>Get one real loop working and know where to go when it fails.</p>
                </div>
              </div>
            }
            zh={
              <div className="home-signal-strip">
                <div className="home-signal-card home-signal-card-primary">
                  <span className="hero-rail-label">主路径</span>
                  <strong>5 个串联步骤指南</strong>
                  <p>从认知建立到第一个有用工作流，沿着一条路径往下走。</p>
                </div>
                <div className="home-signal-card">
                  <span className="hero-rail-label">结果</span>
                  <strong>渠道 + 结果 + 恢复路径</strong>
                  <p>先跑通一个真实闭环，并在失败时知道下一步去哪里。</p>
                </div>
              </div>
            }
          />
        }
        aside={
          <CopyPair
            en={
              <div className="hero-briefing">
                <div className="hero-briefing-head">
                  <p className="eyebrow">First-run control panel</p>
                  <h2>{homeHero.sideTitle.en}</h2>
                </div>
                <div className="hero-briefing-stack">
                  {homeHero.sideItems.map((item, index) => (
                    <div className="hero-briefing-row" key={item.en}>
                      <span>{`0${index + 1}`}</span>
                      <p>{item.en}</p>
                    </div>
                  ))}
                </div>
                <div className="hero-briefing-note">
                  <span>Target time</span>
                  <strong>30 minutes</strong>
                  <p>Enough to establish the mental model and prove one useful workflow.</p>
                </div>
              </div>
            }
            zh={
              <div className="hero-briefing">
                <div className="hero-briefing-head">
                  <p className="eyebrow">First-run control panel</p>
                  <h2>{homeHero.sideTitle.zh}</h2>
                </div>
                <div className="hero-briefing-stack">
                  {homeHero.sideItems.map((item, index) => (
                    <div className="hero-briefing-row" key={item.zh}>
                      <span>{`0${index + 1}`}</span>
                      <p>{item.zh}</p>
                    </div>
                  ))}
                </div>
                <div className="hero-briefing-note">
                  <span>目标时长</span>
                  <strong>30 分钟</strong>
                  <p>足够建立正确认知，并验证一个真实有用的工作流。</p>
                </div>
              </div>
            }
          />
        }
      />

      <section className="section section-quickstart" id="quick-start">
        <SectionHeading title={quickStartIntro.title} summary={quickStartIntro.summary} />
        <CopyPair
          en={
            <div className="quick-start-overview callout">
              <div className="quick-start-overview-item">
                <span className="hero-rail-label">Format</span>
                <strong>5 linked step guides</strong>
                <p>Each card opens a dedicated tutorial instead of hiding the detail in the homepage.</p>
              </div>
              <div className="quick-start-overview-item">
                <span className="hero-rail-label">Goal</span>
                <strong>From setup to one useful loop</strong>
                <p>Use the path to establish the mental model, verify the stack, connect one channel, and ship one result.</p>
              </div>
              <div className="quick-start-overview-item">
                <span className="hero-rail-label">If it breaks</span>
                <strong>Route into Troubleshoot quickly</strong>
                <p>The last step is there so first-run failure becomes a recoverable path instead of a dead end.</p>
              </div>
            </div>
          }
          zh={
            <div className="quick-start-overview callout">
              <div className="quick-start-overview-item">
                <span className="hero-rail-label">形式</span>
                <strong>5 个可点击步骤指南</strong>
                <p>每张卡片都会进入独立教程页，而不是把所有细节都塞在首页里。</p>
              </div>
              <div className="quick-start-overview-item">
                <span className="hero-rail-label">目标</span>
                <strong>从 setup 到一条有用闭环</strong>
                <p>沿着这条路径建立正确认知、验证环境、接通渠道，并跑出第一个真实结果。</p>
              </div>
              <div className="quick-start-overview-item">
                <span className="hero-rail-label">如果失败</span>
                <strong>快速切回 Troubleshoot</strong>
                <p>最后一步就是为了让首次失败变成可恢复路径，而不是直接卡死在首页。</p>
              </div>
            </div>
          }
        />
        <div className="grid cols-2 quick-start-grid">
          {quickStartEntries.map((entry) => (
            <QuickStartCard entry={entry} key={entry.id} />
          ))}
        </div>
      </section>

      <section className="section section-preview section-learn-preview home-module home-module-learn">
        <SectionHeading
          title={learnPreview.title}
          summary={learnPreview.summary}
          action={learnPreview.cta}
        />
        <div className="home-module-shell home-module-shell-learn">
          <article className="callout home-module-panel home-module-panel-learn">
            <CopyPair
              en={
                <>
                  <p className="eyebrow">Knowledge module</p>
                  <h3>Deepen the system model before you scale the setup.</h3>
                  <p>Use Learn for setup strategy, workflow design, and stronger recovery habits.</p>
                </>
              }
              zh={
                <>
                  <p className="eyebrow">Knowledge module</p>
                  <h3>在扩展 setup 之前，先把系统理解补扎实。</h3>
                  <p>Learn 负责补 setup 策略、工作流设计和更稳的恢复习惯。</p>
                </>
              }
            />
          </article>
          <div className="grid cols-3 preview-grid">
            {learnPreview.cards.map((card) => (
              <article className="card learn-preview-card" key={card.title.en}>
                <CopyPair
                  en={
                    <>
                      <h3>{card.title.en}</h3>
                      <p>{card.summary.en}</p>
                    </>
                  }
                  zh={
                    <>
                      <h3>{card.title.zh}</h3>
                      <p>{card.summary.zh}</p>
                    </>
                  }
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-preview section-templates-preview home-module home-module-templates">
        <SectionHeading title={templatePreview.title} summary={templatePreview.summary} />
        <div className="home-module-shell home-module-shell-templates">
          <article className="callout home-module-panel home-module-panel-templates">
            <CopyPair
              en={
                <>
                  <p className="eyebrow">Results module</p>
                  <h3>Use templates when you need proof, not more theory.</h3>
                  <p>Use templates to get to a visible result fast.</p>
                </>
              }
              zh={
                <>
                  <p className="eyebrow">Results module</p>
                  <h3>当你需要结果证明时，先跑模板，而不是继续补理论。</h3>
                  <p>模板的作用是尽快做出一个可见结果，证明系统真的能产出价值。</p>
                </>
              }
            />
            <div className="home-module-stats">
              <CopyPair
                en={
                  <>
                    <div>
                      <span>Use when</span>
                      <strong>Basics already work</strong>
                    </div>
                    <div>
                      <span>Best outcome</span>
                      <strong>One visible first workflow</strong>
                    </div>
                  </>
                }
                zh={
                  <>
                    <div>
                      <span>适用时机</span>
                      <strong>基础已经能跑</strong>
                    </div>
                    <div>
                      <span>最佳结果</span>
                      <strong>先跑出第一条可见工作流</strong>
                    </div>
                  </>
                }
              />
            </div>
          </article>
          <div className="grid cols-3 preview-grid">
            {featuredTemplates.slice(0, 3).map((entry, index) => (
              <TemplateCard
                entry={entry}
                key={entry.title.en}
                locale={locale}
                variant={index === 0 ? "featured" : "default"}
                showTags={false}
                ctaVariantOverride="secondary"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-preview section-troubleshoot-preview home-module home-module-troubleshoot">
        <SectionHeading
          title={troubleshootPreview.title}
          summary={troubleshootPreview.summary}
          action={troubleshootPreview.cta}
        />
        <div className="home-troubleshoot-board callout troubleshoot-preview">
          <CopyPair
            en={
              <>
                <div className="home-troubleshoot-main">
                  <p className="eyebrow">Recovery module</p>
                  <h3>Start from the visible symptom, not from panic.</h3>
                  <p>
                    When the first run fails, Troubleshoot helps you narrow the fault before you
                    change five variables at once.
                  </p>
                  <div className="tag-row">
                    {troubleshootPreview.bullets.en.map((item) => (
                      <span className="tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="troubleshoot-preview-strip">
                  <div>
                    <span className="hero-rail-label">Step 01</span>
                    <strong>Observed symptom</strong>
                    <p>What exactly failed: silence, install, credentials, or output.</p>
                  </div>
                  <div>
                    <span className="hero-rail-label">Step 02</span>
                    <strong>Status and logs</strong>
                    <p>Check the nearest process, log, or channel loop before reconfiguring.</p>
                  </div>
                  <div>
                    <span className="hero-rail-label">Step 03</span>
                    <strong>Route back into action</strong>
                    <p>Return to setup, templates, or a narrower workflow once the symptom is clear.</p>
                  </div>
                </div>
              </>
            }
            zh={
              <>
                <div className="home-troubleshoot-main">
                  <p className="eyebrow">Recovery module</p>
                  <h3>从可观察症状开始，而不是从慌乱开始。</h3>
                  <p>
                    当首次运行失败时，Troubleshoot 会先帮你缩小故障范围，而不是一口气改五个变量。
                  </p>
                  <div className="tag-row">
                    {troubleshootPreview.bullets.zh.map((item) => (
                      <span className="tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="troubleshoot-preview-strip">
                  <div>
                    <span className="hero-rail-label">步骤 01</span>
                    <strong>先看可见症状</strong>
                    <p>先确认到底是机器人沉默、安装失败、凭证问题，还是输出不对。</p>
                  </div>
                  <div>
                    <span className="hero-rail-label">步骤 02</span>
                    <strong>再看状态与日志</strong>
                    <p>先看离现象最近的进程、日志和渠道闭环，不要先重配系统。</p>
                  </div>
                  <div>
                    <span className="hero-rail-label">步骤 03</span>
                    <strong>然后回到行动路径</strong>
                    <p>症状明确后，再回到 setup、模板或更窄的工作流继续推进。</p>
                  </div>
                </div>
              </>
            }
          />
        </div>
      </section>

      <section className="section section-faq">
        <SectionHeading
          title={{ en: "FAQ for first-run users", zh: "面向首次上手用户的 FAQ" }}
          summary={{
            en: "This extra context supports beginner search intent without forcing users into a long article.",
            zh: "这些补充信息用来承接新手搜索意图，但不会把首页拉成长文章。",
          }}
        />
        <div className="grid cols-2 faq-grid">
          {homeFaq.map((item) => (
            <article className="card faq-card" key={item.question.en}>
              <CopyPair
                en={
                  <>
                    <h3>{item.question.en}</h3>
                    <p>{item.answer.en}</p>
                  </>
                }
                zh={
                  <>
                    <h3>{item.question.zh}</h3>
                    <p>{item.answer.zh}</p>
                  </>
                }
              />
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
