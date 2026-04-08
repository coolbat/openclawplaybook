import type { Metadata } from "next";
import "./globals.css";
import { createPageMetadata } from "@/lib/metadata";
import { getHtmlLang } from "@/lib/i18n";
import { getRequestLocale } from "@/lib/i18n-server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();

  return createPageMetadata({
    locale,
    title: "OpenClaw Playbook",
    description: {
      en: "OpenClaw quick-start and learning hub with starter templates, setup guidance, and symptom-first troubleshooting.",
      zh: "OpenClaw 快速上手与学习中心，包含入门模板、setup 指南和按症状组织的排错路径。",
    },
    keywords: {
      en: [
        "OpenClaw",
        "OpenClaw quick start",
        "OpenClaw tutorial",
        "OpenClaw templates",
        "OpenClaw troubleshooting",
        "AI workflow guide",
      ],
      zh: [
        "OpenClaw",
        "OpenClaw 快速上手",
        "OpenClaw 教程",
        "OpenClaw 模板",
        "OpenClaw 排错",
        "AI 工作流指南",
      ],
    },
  });
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getRequestLocale();

  return (
    <html lang={getHtmlLang(locale)} suppressHydrationWarning>
      <head>
        <link href="/llms.txt" rel="llms" />
      </head>
      <body data-theme="light" data-lang={locale}>
        {children}
      </body>
    </html>
  );
}
