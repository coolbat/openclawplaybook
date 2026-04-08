import { CopyPair } from "@/components/content";
import { LocalizedLink } from "@/components/localized-link";
import { officialLinks } from "@/lib/site";

const trustLinks = [
  { href: "/about", en: "About", zh: "关于" },
  { href: "/editorial", en: "Editorial Policy", zh: "编辑政策 / Editorial Policy" },
  { href: "/privacy", en: "Privacy", zh: "隐私" },
  { href: "/terms", en: "Terms", zh: "条款" },
] as const;

export function SiteFooter() {
  return (
    <footer className="container footer">
      <div className="footer-top">
        <div className="footer-brand">
          <strong>OpenClaw Playbook</strong>
          <CopyPair
            en={
              <p>
                Independent bilingual onboarding and learning content for people who want a cleaner
                path from setup to a first useful OpenClaw workflow.
              </p>
            }
            zh={
              <p>
                一个独立维护的双语 OpenClaw 入门站，目标是把用户从 setup 带到第一个真正有用的工作流。
              </p>
            }
          />
        </div>
        <div className="footer-navs">
          <nav aria-label="Trust pages" className="footer-links">
            {trustLinks.map((link) => (
              <LocalizedLink href={link.href} key={link.href}>
                <CopyPair en={<>{link.en}</>} zh={<>{link.zh}</>} inline />
              </LocalizedLink>
            ))}
          </nav>
          <nav aria-label="Official links" className="footer-links footer-links-official">
            {officialLinks.map((link) => (
              <a href={link.href} key={link.href} rel="noreferrer" target="_blank">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <CopyPair
        en={
          <p className="footer-note">
            This site is educational content, not a guarantee of platform behavior, service uptime,
            or legal/compliance advice.
          </p>
        }
        zh={
          <p className="footer-note">
            本站内容主要用于学习与上手，不构成平台行为保证、服务可用性承诺或法律/合规建议。
          </p>
        }
      />
    </footer>
  );
}
