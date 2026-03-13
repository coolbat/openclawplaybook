import Link from "next/link";
import { PreferenceControls } from "@/components/preferences";

type PageName = "home" | "learn" | "templates" | "troubleshoot";

type SiteShellProps = {
  active: PageName;
  children: React.ReactNode;
  defaultTheme?: "light" | "dark";
};

const navItems = [
  { href: "/", label: "Home", key: "home" },
  { href: "/learn", label: "Learn", key: "learn" },
  { href: "/templates", label: "Templates", key: "templates" },
  { href: "/troubleshoot", label: "Troubleshoot", key: "troubleshoot" },
] as const;

export function SiteShell({
  active,
  children,
  defaultTheme = "light",
}: SiteShellProps) {
  return (
    <div className="site-root">
      <header className="topbar">
        <div className="container nav">
          <div className="nav-left">
            <Link className="brand" href="/">
              OpenClaw Playbook
            </Link>
            <nav className="menu">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  className={active === item.key ? "active" : undefined}
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="nav-right">
            <PreferenceControls defaultTheme={defaultTheme} />
          </div>
        </div>
      </header>
      <main className="container">{children}</main>
    </div>
  );
}
