import Link from "next/link";
import { CopyPair } from "@/components/content";
import { SiteShell } from "@/components/site-shell";

export default function LearnPage() {
  return (
    <SiteShell active="learn" defaultTheme="dark">
      <section className="hero" style={{ gridTemplateColumns: "1fr" }}>
        <article className="hero-main">
          <span className="kicker">LEARN OPENCLAW</span>
          <CopyPair
            en={
              <>
                <h1>Learn OpenClaw</h1>
                <p className="sub">
                  A structured path from fundamentals to real-world workflows, designed for people
                  who want results instead of scattered notes.
                </p>
              </>
            }
            zh={
              <>
                <h1>Learn OpenClaw</h1>
                <p className="sub">
                  一条从基础认知到真实工作流的结构化学习路径，适合想要结果，而不是只想收藏资料的人。
                </p>
              </>
            }
          />
          <div className="cta-row">
            <Link className="btn primary" href="#path-overview">
              Start with Foundations
            </Link>
            <Link className="btn secondary" href="/templates">
              Start with Templates
            </Link>
          </div>
        </article>
      </section>

      <section className="section">
        <div className="section-head">
          <CopyPair
            en={<h2>Pick a path that matches how you learn</h2>}
            zh={<h2>选择一条更适合你的学习路径</h2>}
          />
        </div>
        <div className="grid cols-3">
          {[
            [
              "Complete beginner path",
              "You want to understand OpenClaw from zero and get your first setup working without unnecessary confusion.",
              "Start here",
            ],
            [
              "Developer path",
              "You already know CLI, automation, or servers and want the shortest route to a working system.",
              "Start developer path",
            ],
            [
              "Chinese work-tool path",
              "You want to use Feishu, DingTalk, or localized cloud environments with more context and less translation friction.",
              "Start Chinese path",
            ],
          ].map(([title, desc, cta]) => (
            <article className="card" key={title}>
              <h3>{title}</h3>
              <p>{desc}</p>
              <div className="cta-row">
                <Link className="btn secondary" href="#path-overview">
                  {cta}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="path-overview">
        <article className="card">
          <CopyPair
            en={<h2>The learning path</h2>}
            zh={<h2>学习路径总览</h2>}
          />
          <div className="grid cols-2" style={{ marginTop: 14 }}>
            {[
              {
                title: "Foundations",
                desc: "Get clear on what OpenClaw is, where it shines, and why it should be treated as an execution system rather than just a chat interface.",
                items: [
                  "What OpenClaw is",
                  "OpenClaw vs chatbots",
                  "Core architecture",
                  "Channels, skills, memory, and execution",
                ],
                cta: "Explore Foundations",
              },
              {
                title: "Setup",
                desc: "Install OpenClaw, connect a real channel, verify your environment, and avoid common setup traps early.",
                items: [
                  "Local install",
                  "VPS install",
                  "Telegram / Feishu setup",
                  "Health check",
                  "Background daemon basics",
                ],
                cta: "Explore Setup",
              },
              {
                title: "Skills & Workflows",
                desc: "Learn how skills work, how to choose safer options, and how to combine them into useful, repeatable workflows.",
                items: ["How skills work", "Starter skills", "Risk basics", "Workflow patterns"],
                cta: "Explore Skills",
              },
              {
                title: "Real-world Use Cases",
                desc: "Move from setup into action by applying OpenClaw to research, content, operations, monitoring, and team productivity.",
                items: [
                  "Research workflows",
                  "Content workflows",
                  "Team use cases",
                  "Monitoring and alerting",
                ],
                cta: "Explore Workflows",
              },
            ].map((stage) => (
              <article className="card" key={stage.title}>
                <h3>{stage.title}</h3>
                <p>{stage.desc}</p>
                <ul className="list">
                  {stage.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="cta-row">
                  <Link className="btn secondary" href="#">
                    {stage.cta}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </article>
      </section>

      <section className="section">
        <article className="card">
          <CopyPair
            en={<h2>Popular lessons</h2>}
            zh={<h2>热门课程</h2>}
          />
          <div className="grid cols-2" style={{ marginTop: 12 }}>
            {[
              [
                "What OpenClaw is actually good at",
                "Understand where OpenClaw creates leverage, and where it’s better not to force it.",
              ],
              [
                "How to verify your setup before doing anything serious",
                "Check your model, channel, daemon, and logs before adding more complexity.",
              ],
              [
                "How to choose safer starter skills",
                "Start with skills that are easier to understand, verify, and trust.",
              ],
              [
                "How to think in workflows, not one-off commands",
                "Use OpenClaw as a repeatable system, not a pile of disconnected instructions.",
              ],
            ].map(([title, desc]) => (
              <article className="card" key={title}>
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="cta-row">
                  <Link className="btn secondary" href="#">
                    Read lesson
                  </Link>
                </div>
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
                <h3>Want to learn by doing?</h3>
                <p className="sub">
                  The fastest way to understand OpenClaw is to ship a small workflow. Start with a
                  template if you prefer action over theory.
                </p>
              </>
            }
            zh={
              <>
                <h3>想边做边学？</h3>
                <p className="sub">
                  理解 OpenClaw 最快的方法，往往是先跑通一个小工作流。你更偏行动型的话，可以直接从模板开始。
                </p>
              </>
            }
          />
          <div className="cta-row">
            <Link className="btn primary" href="/templates">
              Browse Templates
            </Link>
          </div>
        </article>
      </section>

      <footer className="footer">OpenClaw Playbook · Learn</footer>
    </SiteShell>
  );
}
