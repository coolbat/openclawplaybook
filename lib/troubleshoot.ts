import { troubleshootTabs, type TroubleshootEntry, type TroubleshootTab } from "@/content/troubleshoot";

export function getAllTroubleshootEntries(): TroubleshootEntry[] {
  return troubleshootTabs.flatMap((tab) => tab.entries);
}

export function getTroubleshootEntryBySlug(slug: string) {
  return getAllTroubleshootEntries().find((entry) => entry.slug === slug) ?? null;
}

export function getAllTroubleshootSlugs() {
  return getAllTroubleshootEntries().map((entry) => entry.slug);
}

export function getTroubleshootTabBySlug(slug: string): TroubleshootTab | null {
  return troubleshootTabs.find((tab) => tab.entries.some((entry) => entry.slug === slug)) ?? null;
}

export function getTroubleshootNeighbors(slug: string) {
  const entries = getAllTroubleshootEntries();
  const index = entries.findIndex((entry) => entry.slug === slug);

  if (index === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: entries[index - 1] ?? null,
    next: entries[index + 1] ?? null,
  };
}

export function getRelatedTroubleshootEntries(slug: string, limit = 3) {
  const currentTab = getTroubleshootTabBySlug(slug);

  if (!currentTab) {
    return [];
  }

  return currentTab.entries.filter((entry) => entry.slug !== slug).slice(0, limit);
}

export function getTroubleshootPosition(slug: string) {
  const entries = getAllTroubleshootEntries();
  const overallIndex = entries.findIndex((entry) => entry.slug === slug);
  const tab = getTroubleshootTabBySlug(slug);

  if (overallIndex === -1 || !tab) {
    return null;
  }

  const tabIndex = tab.entries.findIndex((entry) => entry.slug === slug);

  return {
    overallIndex: overallIndex + 1,
    overallTotal: entries.length,
    tabIndex: tabIndex + 1,
    tabTotal: tab.entries.length,
  };
}
