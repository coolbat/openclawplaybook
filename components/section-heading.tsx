import { CopyPair } from "@/components/content";
import { LocalizedLink } from "@/components/localized-link";
import type { CtaLink, LocalizedText } from "@/content/types";

type SectionHeadingProps = {
  title: LocalizedText;
  summary?: LocalizedText;
  action?: CtaLink;
};

export function SectionHeading({ title, summary, action }: SectionHeadingProps) {
  return (
    <div className="section-head">
      <div>
        <CopyPair
          en={
            <>
              <h2>{title.en}</h2>
              {summary ? <p className="small">{summary.en}</p> : null}
            </>
          }
          zh={
            <>
              <h2>{title.zh}</h2>
              {summary ? <p className="small">{summary.zh}</p> : null}
            </>
          }
        />
      </div>
      {action ? (
        <LocalizedLink className={`btn ${action.variant ?? "secondary"}`} href={action.href}>
          <CopyPair en={<>{action.label.en}</>} zh={<>{action.label.zh}</>} inline />
        </LocalizedLink>
      ) : null}
    </div>
  );
}
