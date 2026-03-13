import Link from "next/link";
import { CopyPair } from "@/components/content";
import { SiteShell } from "@/components/site-shell";

export default function TroubleshootPage() {
  return (
    <SiteShell active="troubleshoot" defaultTheme="dark">
      <section className="hero" style={{ gridTemplateColumns: "1fr" }}>
        <article className="hero-main">
          <span className="kicker">TROUBLESHOOT</span>
          <CopyPair
            en={
              <>
                <h1>Troubleshoot OpenClaw</h1>
                <p className="sub">Find the shortest path from “it doesn’t work” to “it runs again.”</p>
              </>
            }
            zh={
              <>
                <h1>Troubleshoot OpenClaw</h1>
                <p className="sub">从“它不工作了”到“它重新跑起来了”，找到最短路径。</p>
              </>
            }
          />
          <div className="newsletter-form">
            <input className="search" placeholder="Describe your issue... / 描述你的问题..." />
            <Link className="btn primary" href="#symptoms">
              Start from symptoms
            </Link>
          </div>
        </article>
      </section>

      <section className="section" id="symptoms">
        <article className="card">
          <CopyPair
            en={<h2>Start from what you see</h2>}
            zh={<h2>从你看到的问题开始</h2>}
          />
          <div className="tag-row" style={{ marginTop: 12 }}>
            {[
              "Install failed",
              "Bot silent",
              "Invalid API key",
              "Skill not working",
              "Browser automation failed",
              "Daemon not running",
              "Permission denied",
              "Logs are confusing",
            ].map((item) => (
              <span className="tag" key={item}>
                {item}
              </span>
            ))}
          </div>
        </article>
      </section>

      <section className="section">
        <div className="grid cols-2">
          <article className="card">
            <CopyPair
              en={
                <>
                  <h3>Or browse by component</h3>
                  <p>Install, Channels, Models, Skills, Local system, Logs, Security.</p>
                </>
              }
              zh={
                <>
                  <h3>或者按模块浏览</h3>
                  <p>安装、渠道、模型、技能、本地系统、日志、安全。</p>
                </>
              }
            />
            <div className="tag-row">
              {["Install", "Channels", "Models", "Skills", "Logs", "Security"].map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>
          <article className="card">
            <CopyPair
              en={<h3>Common fixes</h3>}
              zh={<h3>高频修复问题</h3>}
            />
            <ul className="list">
              <li>Bot not responding after setup</li>
              <li>Skill installed but nothing happens</li>
              <li>Model requests fail silently</li>
              <li>Browser automation fails mid-run</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <article className="card">
          <CopyPair
            en={
              <>
                <h2>Quick checks</h2>
                <p className="small">Use these before you guess at the root cause.</p>
              </>
            }
            zh={
              <>
                <h2>快速排查</h2>
                <p className="small">在你猜问题之前，先把这些检查做完。</p>
              </>
            }
          />
          <div className="grid cols-2" style={{ marginTop: 14 }}>
            {[
              ["Check status", "Use this when you want a fast read on whether the system is up."],
              ["Check health", "Confirm that the environment is healthy enough for normal task execution."],
              ["Check logs", "Look for recent errors, warnings, or silent failures."],
              ["Reconfigure basics", "Use this if your channel, model, or critical settings changed."],
            ].map(([title, desc]) => (
              <article className="card" key={title}>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
          <div className="command-box" style={{ marginTop: 14 }}>
            <code>{`openclaw status
openclaw health
openclaw logs --tail 120
openclaw reconfigure`}</code>
          </div>
          <div className="cta-row">
            <Link className="btn primary" href="#">
              Copy Command
            </Link>
          </div>
        </article>
      </section>

      <section className="section">
        <article className="callout">
          <CopyPair
            en={
              <>
                <h3>Still not sure where to start?</h3>
                <p className="sub">
                  If your setup is incomplete, start with the Setup lessons. If you want a simple
                  end-to-end test, use a beginner template.
                </p>
              </>
            }
            zh={
              <>
                <h3>还是不知道从哪里开始？</h3>
                <p className="sub">
                  如果你的环境可能还没配完整，先看 Setup 课程。如果你想做一个简单的端到端测试，可以直接跑一个入门模板。
                </p>
              </>
            }
          />
          <div className="cta-row">
            <Link className="btn secondary" href="/learn">
              Read Setup Guides
            </Link>
            <Link className="btn primary" href="/templates">
              Try a Beginner Template
            </Link>
          </div>
        </article>
      </section>

      <footer className="footer">OpenClaw Playbook · Troubleshoot</footer>
    </SiteShell>
  );
}
