import type { LocalizedText } from "@/content/types";
import { getLearnTabByTutorialSlug, getLearnTutorialBySlug } from "@/lib/learn";
import { getTemplateBySlug, getTemplateTabBySlug } from "@/lib/templates";
import { getTroubleshootEntryBySlug, getTroubleshootTabBySlug } from "@/lib/troubleshoot";

export type CrossLinkCard = {
  id: string;
  href: string;
  eyebrow: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
};

const learnToTemplateAndTroubleshoot: Record<
  string,
  {
    templateSlug: string;
    troubleshootSlug: string;
  }
> = {
  foundations: {
    templateSlug: "daily-ai-news-digest",
    troubleshootSlug: "bot-silent",
  },
  setup: {
    templateSlug: "china-tooling-setup-brief",
    troubleshootSlug: "install-failed",
  },
  "skills-workflow-design": {
    templateSlug: "outline-and-key-points",
    troubleshootSlug: "workflow-too-broad",
  },
  "chinese-ecosystem": {
    templateSlug: "feishu-ai-briefing-bot",
    troubleshootSlug: "integration-mismatch",
  },
  "advanced-troubleshooting": {
    templateSlug: "server-health-alert-bot",
    troubleshootSlug: "quick-health-check",
  },
  "usage-tips": {
    templateSlug: "meeting-notes-dispatcher",
    troubleshootSlug: "message-format",
  },
};

const templateToLearnAndTroubleshoot: Record<
  string,
  {
    learnSlug: string;
    troubleshootSlug: string;
  }
> = {
  briefings: {
    learnSlug: "verify-model-provider",
    troubleshootSlug: "bot-silent",
  },
  "content-production": {
    learnSlug: "design-first-workflow",
    troubleshootSlug: "output-not-valuable",
  },
  "team-collaboration": {
    learnSlug: "feishu-friendly-workflows",
    troubleshootSlug: "permission-gaps",
  },
  "research-analysis": {
    learnSlug: "openclaw-vs-chatbots",
    troubleshootSlug: "workflow-too-broad",
  },
  "monitoring-alerts": {
    learnSlug: "observability-before-scale",
    troubleshootSlug: "quick-health-check",
  },
  "chinese-ecosystem": {
    learnSlug: "localized-deployment-assumptions",
    troubleshootSlug: "integration-mismatch",
  },
};

const quickStartToLearnTemplateAndTroubleshoot: Record<
  string,
  {
    learnSlug: string;
    templateSlug: string;
    troubleshootSlug: string;
  }
> = {
  "what-is-openclaw": {
    learnSlug: "openclaw-vs-chatbots",
    templateSlug: "daily-ai-news-digest",
    troubleshootSlug: "bot-silent",
  },
  "deploy-install": {
    learnSlug: "local-vs-vps",
    templateSlug: "china-tooling-setup-brief",
    troubleshootSlug: "install-failed",
  },
  "connect-channel": {
    learnSlug: "verify-model-provider",
    templateSlug: "feishu-ai-briefing-bot",
    troubleshootSlug: "integration-mismatch",
  },
  "starter-workflow": {
    learnSlug: "design-first-workflow",
    templateSlug: "meeting-notes-dispatcher",
    troubleshootSlug: "workflow-too-broad",
  },
  "basic-troubleshooting": {
    learnSlug: "read-logs-without-guessing",
    templateSlug: "server-health-alert-bot",
    troubleshootSlug: "quick-health-check",
  },
};

const troubleshootToLearnAndTemplate: Record<
  string,
  {
    learnSlug: string;
    templateSlug: string;
  }
> = {
  "bot-silence": {
    learnSlug: "verify-model-provider",
    templateSlug: "daily-ai-news-digest",
  },
  "install-environment": {
    learnSlug: "first-run-traps",
    templateSlug: "china-tooling-setup-brief",
  },
  "models-credentials": {
    learnSlug: "verify-model-provider",
    templateSlug: "feishu-ai-briefing-bot",
  },
  "workflow-no-output": {
    learnSlug: "design-first-workflow",
    templateSlug: "outline-and-key-points",
  },
  "permissions-integrations": {
    learnSlug: "feishu-friendly-workflows",
    templateSlug: "feishu-internal-announcement",
  },
  "diagnostics-observability": {
    learnSlug: "read-logs-without-guessing",
    templateSlug: "server-health-alert-bot",
  },
};

function makeLearnCard(slug: string): CrossLinkCard | null {
  const tutorial = getLearnTutorialBySlug(slug);

  if (!tutorial) {
    return null;
  }

  return {
    id: `learn-${slug}`,
    href: `/learn/${slug}`,
    eyebrow: { en: "Learn guide", zh: "Learn 教程" },
    title: tutorial.title,
    summary: tutorial.summary,
  };
}

function makeTemplateCard(slug: string): CrossLinkCard | null {
  const template = getTemplateBySlug(slug);

  if (!template) {
    return null;
  }

  return {
    id: `template-${slug}`,
    href: `/templates/${slug}`,
    eyebrow: { en: "Starter template", zh: "起步模板" },
    title: template.title,
    summary: template.summary,
  };
}

function makeTroubleshootCard(slug: string): CrossLinkCard | null {
  const entry = getTroubleshootEntryBySlug(slug);

  if (!entry) {
    return null;
  }

  return {
    id: `troubleshoot-${slug}`,
    href: `/troubleshoot/${slug}`,
    eyebrow: { en: "Recovery guide", zh: "排错指南" },
    title: entry.title,
    summary: entry.summary,
  };
}

export function getLearnCrossLinks(slug: string) {
  const tab = getLearnTabByTutorialSlug(slug);

  if (!tab) {
    return [];
  }

  const mapping = learnToTemplateAndTroubleshoot[tab.id];
  if (!mapping) {
    return [];
  }

  return [makeTemplateCard(mapping.templateSlug), makeTroubleshootCard(mapping.troubleshootSlug)].filter(
    Boolean,
  ) as CrossLinkCard[];
}

export function getQuickStartCrossLinks(slug: string) {
  const mapping = quickStartToLearnTemplateAndTroubleshoot[slug];

  if (!mapping) {
    return [];
  }

  return [
    makeLearnCard(mapping.learnSlug),
    makeTemplateCard(mapping.templateSlug),
    makeTroubleshootCard(mapping.troubleshootSlug),
  ].filter(Boolean) as CrossLinkCard[];
}

export function getTemplateCrossLinks(slug: string) {
  const tab = getTemplateTabBySlug(slug);

  if (!tab) {
    return [];
  }

  const mapping = templateToLearnAndTroubleshoot[tab.id];
  if (!mapping) {
    return [];
  }

  return [makeLearnCard(mapping.learnSlug), makeTroubleshootCard(mapping.troubleshootSlug)].filter(
    Boolean,
  ) as CrossLinkCard[];
}

export function getTroubleshootCrossLinks(slug: string) {
  const tab = getTroubleshootTabBySlug(slug);

  if (!tab) {
    return [];
  }

  const mapping = troubleshootToLearnAndTemplate[tab.id];
  if (!mapping) {
    return [];
  }

  return [makeLearnCard(mapping.learnSlug), makeTemplateCard(mapping.templateSlug)].filter(
    Boolean,
  ) as CrossLinkCard[];
}
