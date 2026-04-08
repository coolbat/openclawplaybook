import { learnTabs, type LearnTab, type LearnTutorialCard } from "@/content/learn";

export function getAllLearnTutorials(): LearnTutorialCard[] {
  return learnTabs.flatMap((tab) => tab.tutorials);
}

export function getLearnTutorialBySlug(slug: string) {
  return getAllLearnTutorials().find((tutorial) => tutorial.slug === slug) ?? null;
}

export function getAllLearnTutorialSlugs() {
  return getAllLearnTutorials().map((tutorial) => tutorial.slug);
}

export function getLearnTabByTutorialSlug(slug: string): LearnTab | null {
  return learnTabs.find((tab) => tab.tutorials.some((tutorial) => tutorial.slug === slug)) ?? null;
}

export function getLearnNeighbors(slug: string) {
  const tutorials = getAllLearnTutorials();
  const index = tutorials.findIndex((tutorial) => tutorial.slug === slug);

  if (index === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: tutorials[index - 1] ?? null,
    next: tutorials[index + 1] ?? null,
  };
}

export function getRelatedLearnTutorials(slug: string, limit = 3) {
  const currentTab = getLearnTabByTutorialSlug(slug);

  if (!currentTab) {
    return [];
  }

  return currentTab.tutorials.filter((tutorial) => tutorial.slug !== slug).slice(0, limit);
}

export function getLearnTutorialPosition(slug: string) {
  const tutorials = getAllLearnTutorials();
  const overallIndex = tutorials.findIndex((tutorial) => tutorial.slug === slug);
  const tab = getLearnTabByTutorialSlug(slug);

  if (overallIndex === -1 || !tab) {
    return null;
  }

  const tabIndex = tab.tutorials.findIndex((tutorial) => tutorial.slug === slug);

  return {
    overallIndex: overallIndex + 1,
    overallTotal: tutorials.length,
    tabIndex: tabIndex + 1,
    tabTotal: tab.tutorials.length,
  };
}
