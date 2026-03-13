import Link from "next/link";
import { CopyPair } from "@/components/content";
import { SiteShell } from "@/components/site-shell";

const popularTemplates = [
  {
    title: "Daily AI News Digest",
    desc: "Track what matters, remove noise, and send a concise daily briefing.",
    tags: ["Research", "Beginner", "Scheduled"],
    meta: "20 min · Low risk",
  },
  {
    title: "YouTube Comment Pain Point Analyzer",
    desc: "Collect comments, identify repeated pain points, and surface unmet user needs.",
    tags: ["Research", "Growth"],
    meta: "35 min · Medium risk",
  },
  {
    title: "Feishu AI Briefing Bot",
    desc: "Push structured updates to Feishu for your personal workflow or team routine.",
    tags: ["Chinese Ecosystem", "Productivity"],
    meta: "25 min · Low risk",
  },
  {
    title: "Weekly Market Research Summary",
    desc: "Monitor changes, compare signals, and generate a weekly research memo.",
    tags: ["Strategy", "Operator"],
    meta: "40 min · Medium risk",
  },
  {
    title: "Server Health Alert Bot",
    desc: "Watch service health and send alerts before small issues turn into bigger ones.",
    tags: ["DevOps", "Monitoring"],
    meta: "30 min · Medium risk",
  },
  {
    title: "Content Idea Collector",
    desc: "Turn scattered sources into structured ideas for writing, strategy, or publishing.",
    tags: ["Creator", "Productivity"],
    meta: "20 min · Low risk",
  },
];

export default function HomePage() {
  return (
    <SiteShell active="home" defaultTheme="light">
      <section className="hero">
        <article className="hero-main">
          <span className="kicker">Lobster-light. Agent-right.</span>
          <CopyPair
            en={
              <>
                <h1>Learn OpenClaw by building real workflows</h1>
                <p className="sub">
                  Bilingual guides, practical templates, curated skills, and troubleshooting
                  paths for people who want to make OpenClaw actually work.
                </p>
              </>
            }
            zh={
              <>
                <h1>用真正能跑起来的工作流，学会 OpenClaw</h1>
                <p className="sub">
                  面向英文与中文用户的双语学习平台，提供实战教程、可复用模板、精选技能和排错路径，
                  帮你把 OpenClaw 真正跑起来。
                </p>
              </>
            }
          />
          <div className="cta-row">
            <Link className="btn primary" href="/learn">
              Start Learning
            </Link>
            <Link className="btn secondary" href="/templates">
              Browse Templates
            </Link>
            <Link className="btn link" href="/troubleshoot">
              Already stuck? Open Troubleshoot
            </Link>
          </div>
          <div className="badges">
            <span className="badge">English + Chinese</span>
            <span className="badge">Beginner-friendly</span>
            <span className="badge">Real workflows</span>
            <span className="badge">Safer skill guidance</span>
          </div>
        </article>
        <aside className="hero-side">
          <CopyPair
            en={
              <>
                <h3>Featured workflow</h3>
                <p className="sub">Daily AI News Digest</p>
                <p className="meta">
                  Collect the most important AI updates, summarize them, and send a clean daily
                  briefing to your channel.
                </p>
                <h3 style={{ marginTop: 18 }}>Starter skill pack</h3>
                <p className="meta">
                  Install the research essentials and get a useful workflow running faster.
                </p>
                <h3 style={{ marginTop: 18 }}>Need a fix?</h3>
                <p className="meta">
                  Bot not responding? Start with channel pairing, daemon status, and API
                  verification.
                </p>
              </>
            }
            zh={
              <>
                <h3>推荐工作流</h3>
                <p className="sub">每日 AI 资讯简报</p>
                <p className="meta">聚合重要 AI 动态，自动摘要，并发送到你常用的聊天渠道。</p>
                <h3 style={{ marginTop: 18 }}>入门技能包</h3>
                <p className="meta">先安装基础研究技能，能更快把第一个工作流跑起来。</p>
                <h3 style={{ marginTop: 18 }}>遇到问题？</h3>
                <p className="meta">
                  机器人没回复？先检查渠道配对、后台进程状态和 API 配置。
                </p>
              </>
            }
          />
        </aside>
      </section>

      <section className="section">
        <div className="section-head">
          <CopyPair
            en={<h2>Choose the fastest path for where you are</h2>}
            zh={<h2>根据你现在的阶段，选择最快的起步路径</h2>}
          />
        </div>
        <div className="grid cols-3">
          <article className="card">
            <CopyPair
              en={
                <>
                  <h3>I’m new to OpenClaw</h3>
                  <p>
                    Start from the basics, understand how OpenClaw works, and get your first bot
                    running with confidence.
                  </p>
                </>
              }
              zh={
                <>
                  <h3>我是 OpenClaw 新手</h3>
                  <p>从基础开始，理解 OpenClaw 的工作方式，并把第一个机器人顺利跑起来。</p>
                </>
              }
            />
            <div className="cta-row">
              <Link className="btn secondary" href="/learn">
                Start from Learn
              </Link>
            </div>
          </article>
          <article className="card">
            <CopyPair
              en={
                <>
                  <h3>I want a ready-to-use workflow</h3>
                  <p>Skip the abstract setup maze and start with templates that solve real tasks.</p>
                </>
              }
              zh={
                <>
                  <h3>我想直接用现成工作流</h3>
                  <p>跳过抽象的配置迷宫，直接从能解决真实任务的模板开始。</p>
                </>
              }
            />
            <div className="cta-row">
              <Link className="btn secondary" href="/templates">
                Open Templates
              </Link>
            </div>
          </article>
          <article className="card">
            <CopyPair
              en={
                <>
                  <h3>I’m stuck somewhere</h3>
                  <p>
                    Diagnose installation, model, channel, skill, and permission issues step by
                    step.
                  </p>
                </>
              }
              zh={
                <>
                  <h3>我现在卡在某一步</h3>
                  <p>按步骤排查安装、模型、渠道、技能和权限问题。</p>
                </>
              }
            />
            <div className="cta-row">
              <Link className="btn secondary" href="/troubleshoot">
                Open Troubleshoot
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div>
            <CopyPair
              en={
                <>
                  <h2>Popular templates</h2>
                  <p className="small">
                    Start with workflows that produce useful results, not toy demos.
                  </p>
                </>
              }
              zh={
                <>
                  <h2>热门模板</h2>
                  <p className="small">
                    从真正能产生价值的工作流开始，而不是停留在演示性质的玩法上。
                  </p>
                </>
              }
            />
          </div>
          <Link className="btn secondary" href="/templates">
            View all templates
          </Link>
        </div>
        <div className="grid cols-3">
          {popularTemplates.map((template) => (
            <article className="card" key={template.title}>
              <h3>{template.title}</h3>
              <p>{template.desc}</p>
              <div className="tag-row">
                {template.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <p className="meta">{template.meta}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <article className="card">
          <CopyPair
            en={
              <>
                <h2>A practical path to mastering OpenClaw</h2>
                <p className="small">
                  From first principles to useful workflows, with less guessing and more shipping.
                </p>
              </>
            }
            zh={
              <>
                <h2>一条更务实的 OpenClaw 学习路径</h2>
                <p className="small">从理解原理到跑通真实工作流，少走弯路，更快落地。</p>
              </>
            }
          />
          <div className="grid cols-2" style={{ marginTop: 14 }}>
            {[
              ["01 Foundations", "Understand what OpenClaw is, how it differs from chatbots, and why execution matters."],
              ["02 Setup", "Install OpenClaw, connect a channel, configure your model, and verify your environment."],
              ["03 Skills & Workflows", "Learn how skills work, how to choose them safely, and how to combine them into useful workflows."],
              ["04 Real-world Use Cases", "Apply OpenClaw to research, content, operations, and monitoring."],
            ].map(([title, desc]) => (
              <article className="card" key={title}>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </article>
      </section>

      <section className="section">
        <article className="callout">
          <CopyPair
            en={
              <>
                <h2>Stuck? Start from the symptom</h2>
                <p className="small">
                  Don’t guess. Start from what you see, then narrow the problem down fast.
                </p>
              </>
            }
            zh={
              <>
                <h2>卡住了？从现象开始排查</h2>
                <p className="small">别猜。先从你看到的问题出发，再快速缩小范围。</p>
              </>
            }
          />
          <div className="tag-row" style={{ marginTop: 10 }}>
            {[
              "Install failed",
              "Bot not responding",
              "Invalid API key",
              "Skill installed but not working",
              "Browser automation failed",
              "Daemon not running",
            ].map((item) => (
              <span className="tag" key={item}>
                {item}
              </span>
            ))}
          </div>
          <div className="grid cols-2" style={{ marginTop: 14 }}>
            <article className="card">
              <h3>Bot not responding</h3>
              <p>
                Possible causes include incomplete channel pairing, a stopped daemon, missing
                permissions, or invalid model settings.
              </p>
            </article>
            <article className="card">
              <h3>Quick checks</h3>
              <ul className="list">
                <li>Verify your channel pairing</li>
                <li>Confirm the daemon is running</li>
                <li>Test your model/API configuration</li>
                <li>Review recent logs</li>
              </ul>
            </article>
          </div>
          <div className="cta-row">
            <Link className="btn primary" href="/troubleshoot">
              Diagnose this issue
            </Link>
          </div>
        </article>
      </section>

      <section className="section">
        <div className="section-head">
          <CopyPair
            en={
              <>
                <h2>Skills, templates, and ecosystem shortcuts</h2>
                <p className="small">
                  OpenClaw becomes more useful when you know what to install, what to avoid, and
                  what to combine.
                </p>
              </>
            }
            zh={
              <>
                <h2>技能、模板与生态捷径</h2>
                <p className="small">
                  当你知道该装什么、避开什么、组合什么时，OpenClaw 才会真正变得好用。
                </p>
              </>
            }
          />
        </div>
        <div className="grid cols-2">
          <article className="card">
            <h3>Starter-friendly skill picks</h3>
            <p>
              Start with skills that are easier to understand, safer to verify, and more likely to
              fit real workflows.
            </p>
            <div className="cta-row">
              <Link className="btn secondary" href="#">
                Browse Skills
              </Link>
            </div>
          </article>
          <article className="card">
            <div className="grid cols-2">
              {[
                ["Skills", "Curated recommendations with use cases and risk notes."],
                ["Templates", "Ready-to-run workflows built around practical tasks."],
                ["Resources", "Official docs, community guides, and useful references."],
                ["Trust Center", "Safer setup, permissions, cost basics, and audit habits."],
              ].map(([title, desc]) => (
                <article className="card" key={title}>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </article>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <CopyPair
            en={
              <>
                <h2>Use OpenClaw with more confidence</h2>
                <p className="small">
                  Good automation should also be understandable, reviewable, and safe enough to
                  reuse.
                </p>
              </>
            }
            zh={
              <>
                <h2>更安心地使用 OpenClaw</h2>
                <p className="small">好的自动化不只是强大，还应该易理解、可回看、可复用。</p>
              </>
            }
          />
        </div>
        <div className="grid cols-2">
          <article className="card">
            <h3>Skill Safety</h3>
            <p>
              Learn how to evaluate a skill before installing it, what permissions to inspect, and
              when to avoid untrusted sources.
            </p>
            <div className="cta-row">
              <Link className="btn secondary" href="#">
                Visit Skill Safety
              </Link>
            </div>
          </article>
          <article className="card">
            <h3>Cost & Audit</h3>
            <p>
              Estimate recurring workflow cost, review outputs more responsibly, and build
              healthier debugging habits.
            </p>
            <div className="cta-row">
              <Link className="btn secondary" href="#">
                Visit Cost Guide
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
                <h2>One ecosystem, localized for two markets</h2>
                <p className="small">
                  English and Chinese users often need different channels, tools, and deployment
                  paths. We design for both.
                </p>
              </>
            }
            zh={
              <>
                <h2>同一个生态，面向两个市场做本地化</h2>
                <p className="small">
                  英文用户和中文用户往往需要不同的渠道、工具和部署路径，我们会同时为两者设计。
                </p>
              </>
            }
          />
          <div className="dual" style={{ marginTop: 14 }}>
            <div className="lang-panel">
              <h3>English-first path</h3>
              <ul className="list">
                <li>Telegram and Discord</li>
                <li>VPS and local setup</li>
                <li>CLI-first guidance</li>
                <li>Global tooling references</li>
              </ul>
            </div>
            <div className="lang-panel">
              <h3>中文路径</h3>
              <ul className="list">
                <li>飞书与钉钉</li>
                <li>腾讯云与本地环境</li>
                <li>更细致的图文步骤</li>
                <li>更贴近中文工作流的案例</li>
              </ul>
            </div>
          </div>
        </article>
      </section>

      <section className="section">
        <div className="section-head">
          <CopyPair
            en={<h2>What people are building</h2>}
            zh={<h2>大家都在用它做什么</h2>}
          />
          <Link className="btn secondary" href="#">
            See Community Builds
          </Link>
        </div>
        <div className="grid cols-3">
          {[
            ["Morning AI Briefing", "A founder receives ranked AI updates in Feishu before the workday starts."],
            ["Research Assistant", "A team clusters public comments into recurring pain points and opportunity signals."],
            ["Ops Monitor", "An indie developer watches service health and receives actionable alerts."],
          ].map(([title, desc]) => (
            <article className="card" key={title}>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <article className="card">
          <CopyPair
            en={
              <>
                <h2>Get new templates, fixes, and ecosystem updates</h2>
                <p>A practical OpenClaw digest for builders, operators, and curious tinkerers.</p>
              </>
            }
            zh={
              <>
                <h2>接收新模板、排错更新和生态动态</h2>
                <p>一份面向构建者、操盘者和探索者的实用 OpenClaw 通讯。</p>
              </>
            }
          />
          <div className="newsletter-form">
            <input className="search" placeholder="Enter your email / 输入你的邮箱" />
            <button className="btn primary" type="button">
              Subscribe / 订阅
            </button>
          </div>
          <p className="meta">No spam. Just useful updates.</p>
        </article>
      </section>

      <footer className="footer">OpenClaw Playbook · Home</footer>
    </SiteShell>
  );
}
