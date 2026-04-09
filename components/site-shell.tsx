import { LocalizedLink } from "@/components/localized-link";
import { LocaleSuggestion } from "@/components/locale-suggestion";
import { PreferenceControls } from "@/components/preferences";
import { getRequestLocale } from "@/lib/i18n-server";
import { SiteFooter } from "@/components/site-footer";

type PageName = "home" | "learn" | "templates" | "troubleshoot" | "skills" | "none";

type SiteShellProps = {
  active: PageName;
  children: React.ReactNode;
  defaultTheme?: "light" | "dark";
};

const navItems = [
  { href: "/learn", label: "Learn", key: "learn" },
  { href: "/templates", label: "Templates", key: "templates" },
  { href: "/skills", label: "Skills", key: "skills" },
  { href: "/troubleshoot", label: "Troubleshoot", key: "troubleshoot" },
] as const;

export async function SiteShell({
  active,
  children,
  defaultTheme = "light",
}: SiteShellProps) {
  const locale = await getRequestLocale();

  return (
    <div className="site-root">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="container">
        <LocaleSuggestion locale={locale} />
      </div>
      <header className="topbar">
        <div className="container nav">
          <div className="nav-left">
            <LocalizedLink className="brand" href="/">
              OpenClaw Playbook
            </LocalizedLink>
            <nav className="menu">
              <LocalizedLink className="quick-start-nav btn primary" href="/#quick-start">
                Quick Start
              </LocalizedLink>
              {navItems.map((item) => (
                <LocalizedLink
                  key={item.key}
                  className={active === item.key ? "active" : undefined}
                  href={item.href}
                >
                  {item.label}
                </LocalizedLink>
              ))}
            </nav>
          </div>
          <div className="nav-right">
            <PreferenceControls defaultLang={locale} defaultTheme={defaultTheme} />
          </div>
        </div>
      </header>
      <main className="container" id="main-content">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
