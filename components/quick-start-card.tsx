import { CopyPair } from "@/components/content";
import { ChecklistList } from "@/components/checklist-list";
import { LocalizedLink } from "@/components/localized-link";
import type { QuickStartEntry } from "@/content/site";

export function QuickStartCard({ entry }: { entry: QuickStartEntry }) {
  const bulletCount = entry.bullets.en.length;

  return (
    <article className="card quick-start-card" id={entry.id}>
      <div className="quick-start-card-head">
        <p className="eyebrow">{entry.step}</p>
        <CopyPair
          en={<span className="quick-start-card-meta">Step guide · {bulletCount} checks</span>}
          zh={<span className="quick-start-card-meta">步骤指南 · {bulletCount} 个检查点</span>}
          inline
        />
      </div>
      <CopyPair
        en={
          <>
            <h3>{entry.title.en}</h3>
            <p>{entry.summary.en}</p>
          </>
        }
        zh={
          <>
            <h3>{entry.title.zh}</h3>
            <p>{entry.summary.zh}</p>
          </>
        }
      />
      <CopyPair
        en={<p className="quick-start-card-label">What this step gets you</p>}
        zh={<p className="quick-start-card-label">这一步会帮你完成什么</p>}
      />
      <ChecklistList items={entry.bullets} />
      <div className="cta-row">
        <LocalizedLink className={`btn ${entry.cta.variant ?? "secondary"}`} href={entry.cta.href}>
          <CopyPair en={<>{entry.cta.label.en}</>} zh={<>{entry.cta.label.zh}</>} inline />
        </LocalizedLink>
      </div>
      <CopyPair
        en={<p className="quick-start-card-note">Open the full step guide, then continue with the next move.</p>}
        zh={<p className="quick-start-card-note">先看完整步骤详解，再继续进入下一步。</p>}
      />
    </article>
  );
}
