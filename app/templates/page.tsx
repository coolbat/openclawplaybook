import Link from "next/link";
import { CopyPair } from "@/components/content";
import { SiteShell } from "@/components/site-shell";

export default function TemplatesPage() {
  const recommended = [
    {
      title: "Daily AI News Digest",
      desc: "Useful, easy to verify, and a strong first workflow for many users.",
      meta: "Beginner · 20 min · Low risk",
      tags: ["Research", "Scheduled", "Starter-friendly"],
    },
    {
      title: "Feishu AI Briefing Bot",
      desc: "A natural fit for Chinese work-tool users who want information delivered inside their existing routine.",
      meta: "Beginner · 25 min · Low risk",
      tags: ["Chinese Ecosystem", "Productivity"],
    },
    {
      title: "Server Health Alert Bot",
      desc: "A simple but real automation for developers who want something practical from day one.",
      meta: "30 min · Medium risk",
      tags: ["DevOps", "Monitoring"],
    },
  ];

  return (
    <SiteShell active="templates" defaultTheme="dark">
      <section className="hero" style={{ gridTemplateColumns: "1fr" }}>
        <article className="hero-main">
          <span className="kicker">TEMPLATES</span>
          <CopyPair
            en={
              <>
                <h1>Templates that help OpenClaw do useful work</h1>
                <p className="sub">
                  Ready-to-run workflows for research, content, productivity, operations, and
                  monitoring.
                </p>
              </>
            }
            zh={
              <>
                <h1>让 OpenClaw 做有用工作的模板库</h1>
                <p className="sub">面向调研、内容、效率、运营和监控等真实场景的现成工作流。</p>
              </>
            }
          />
          <div className="cta-row">
            <Link className="btn primary" href="#recommended">
              Start with beginner templates
            </Link>
          </div>
        </article>
      </section>

      <section className="section">
        <article className="callout">
          <CopyPair
            en={<p>These templates are designed to reduce setup guesswork and help you launch a useful workflow faster.</p>}
            zh={<p>这些模板的目标，是减少配置阶段的猜测成本，让你更快跑通一个真正有用的工作流。</p>}
          />
        </article>
      </section>

      <section className="section">
        <article className="card">
          <div className="filters">
            {[
              "Difficulty / 难度",
              "Use case / 使用场景",
              "Channel / 渠道",
              "Risk level / 风险等级",
              "Language support / 语言支持",
              "Local / Cloud / 本地与云端",
              "Chinese ecosystem / 中文生态",
            ].map((item) => (
              <span className="filter-pill" key={item}>
                {item}
              </span>
            ))}
          </div>
          <input className="search" placeholder="Search templates... / 搜索模板..." />
        </article>
      </section>

      <section className="section" id="recommended">
        <div className="section-head">
          <h2>Recommended starting points / 推荐起步模板</h2>
        </div>
        <div className="grid cols-3">
          {recommended.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <p className="meta">{item.meta}</p>
              <div className="tag-row">
                {item.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="cta-row">
                <Link className="btn secondary" href="#">
                  View Template
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Template library / 模板列表示例</h2>
        </div>
        <div className="grid cols-3">
          <article className="card">
            <h3>Daily AI News Digest</h3>
            <p>
              Collect selected AI updates, remove noise, summarize what matters, and deliver a
              useful briefing every morning.
            </p>
            <p className="meta">Beginner · 20 min · Low risk</p>
            <div className="tag-row">
              <span className="tag">Research</span>
              <span className="tag">Scheduled</span>
              <span className="tag">Starter-friendly</span>
            </div>
            <p className="meta">Requires: 2 to 3 skills · Channel: Telegram / Feishu / Discord</p>
            <div className="cta-row">
              <Link className="btn secondary" href="#">
                View Template
              </Link>
            </div>
          </article>
          <article className="card">
            <h3>YouTube Comment Pain Point Analyzer</h3>
            <p>Turn noisy public comments into structured pain points, unmet needs, and opportunity signals.</p>
            <p className="meta">Intermediate · 35 min · Medium risk</p>
            <div className="tag-row">
              <span className="tag">Research</span>
              <span className="tag">Growth</span>
              <span className="tag">Insight mining</span>
            </div>
            <div className="cta-row">
              <Link className="btn secondary" href="#">
                View Template
              </Link>
            </div>
          </article>
          <article className="card">
            <h3>Feishu AI Briefing Bot</h3>
            <p>Deliver short, structured updates to Feishu so your information workflow feels native, not bolted on.</p>
            <p className="meta">Beginner · 25 min · Low risk</p>
            <div className="tag-row">
              <span className="tag">Chinese Ecosystem</span>
              <span className="tag">Productivity</span>
              <span className="tag">Internal communication</span>
            </div>
            <div className="cta-row">
              <Link className="btn secondary" href="#">
                View Template
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <article className="card">
          <CopyPair
            en={
              <>
                <h3>No templates match your current filters</h3>
                <p>Try broader filters, or start from the beginner-friendly templates first.</p>
              </>
            }
            zh={
              <>
                <h3>没有模板符合当前筛选条件</h3>
                <p>试着放宽筛选条件，或者先从适合入门的模板开始。</p>
              </>
            }
          />
          <div className="cta-row">
            <Link className="btn secondary" href="#">
              Clear filters
            </Link>
            <Link className="btn primary" href="#">
              Browse beginner templates
            </Link>
          </div>
        </article>
      </section>

      <footer className="footer">OpenClaw Playbook · Templates</footer>
    </SiteShell>
  );
}
