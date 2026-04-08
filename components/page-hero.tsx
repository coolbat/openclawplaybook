import { CopyPair } from "@/components/content";
import { LocalizedLink } from "@/components/localized-link";
import type { CtaLink, LocalizedText } from "@/content/types";

type PageHeroProps = {
  kicker: string;
  title: LocalizedText;
  summary: LocalizedText;
  ctas?: CtaLink[];
  aside?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
};

export function PageHero({
  kicker,
  title,
  summary,
  ctas = [],
  aside,
  children,
  className,
}: PageHeroProps) {
  return (
    <section className={`hero${aside ? "" : " hero-single"}${className ? ` ${className}` : ""}`}>
      <article className="hero-main">
        <span className="kicker">{kicker}</span>
        <CopyPair
          en={
            <>
              <h1>{title.en}</h1>
              <p className="sub">{summary.en}</p>
            </>
          }
          zh={
            <>
              <h1>{title.zh}</h1>
              <p className="sub">{summary.zh}</p>
            </>
          }
        />
        {ctas.length > 0 ? (
          <div className="cta-row">
            {ctas.map((cta) => (
              <LocalizedLink
                key={`${cta.href}-${cta.label.en}`}
                className={`btn ${cta.variant ?? "secondary"}`}
                href={cta.href}
              >
                <CopyPair en={<>{cta.label.en}</>} zh={<>{cta.label.zh}</>} inline />
              </LocalizedLink>
            ))}
          </div>
        ) : null}
        {children}
      </article>
      {aside ? <aside className="hero-side">{aside}</aside> : null}
    </section>
  );
}
