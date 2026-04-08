import { templateTabs, type TemplateEntry, type TemplateTab } from "@/content/templates";

export function getAllTemplates(): TemplateEntry[] {
  return templateTabs.flatMap((tab) => tab.templates);
}

export function getTemplateBySlug(slug: string) {
  return getAllTemplates().find((template) => template.slug === slug) ?? null;
}

export function getAllTemplateSlugs() {
  return getAllTemplates().map((template) => template.slug);
}

export function getTemplateTabBySlug(slug: string): TemplateTab | null {
  return templateTabs.find((tab) => tab.templates.some((template) => template.slug === slug)) ?? null;
}

export function getTemplateNeighbors(slug: string) {
  const templates = getAllTemplates();
  const index = templates.findIndex((template) => template.slug === slug);

  if (index === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: templates[index - 1] ?? null,
    next: templates[index + 1] ?? null,
  };
}

export function getRelatedTemplates(slug: string, limit = 3) {
  const currentTab = getTemplateTabBySlug(slug);

  if (!currentTab) {
    return [];
  }

  return currentTab.templates.filter((template) => template.slug !== slug).slice(0, limit);
}

export function getTemplatePosition(slug: string) {
  const templates = getAllTemplates();
  const overallIndex = templates.findIndex((template) => template.slug === slug);
  const tab = getTemplateTabBySlug(slug);

  if (overallIndex === -1 || !tab) {
    return null;
  }

  const tabIndex = tab.templates.findIndex((template) => template.slug === slug);

  return {
    overallIndex: overallIndex + 1,
    overallTotal: templates.length,
    tabIndex: tabIndex + 1,
    tabTotal: tab.templates.length,
  };
}
