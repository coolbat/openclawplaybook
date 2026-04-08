export type LocalizedText = {
  en: string;
  zh: string;
};

export type LocalizedList = {
  en: string[];
  zh: string[];
};

export type CtaLink = {
  label: LocalizedText;
  href: string;
  variant?: "primary" | "secondary" | "link";
};
