import { quickStartEntries, type QuickStartEntry } from "@/content/site";

export function getAllQuickStartEntries(): QuickStartEntry[] {
  return quickStartEntries;
}

export function getQuickStartEntryBySlug(slug: string) {
  return quickStartEntries.find((entry) => entry.slug === slug) ?? null;
}

export function getAllQuickStartSlugs() {
  return quickStartEntries.map((entry) => entry.slug);
}

export function getQuickStartNeighbors(slug: string) {
  const index = quickStartEntries.findIndex((entry) => entry.slug === slug);

  if (index === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: quickStartEntries[index - 1] ?? null,
    next: quickStartEntries[index + 1] ?? null,
  };
}

export function getQuickStartPosition(slug: string) {
  const index = quickStartEntries.findIndex((entry) => entry.slug === slug);

  if (index === -1) {
    return null;
  }

  return {
    overallIndex: index + 1,
    overallTotal: quickStartEntries.length,
  };
}

export function getRelatedQuickStartEntries(slug: string, limit = 2) {
  return quickStartEntries.filter((entry) => entry.slug !== slug).slice(0, limit);
}
