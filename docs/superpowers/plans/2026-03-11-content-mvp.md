# OpenClaw Content-First MVP Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a launchable content-first OpenClaw website MVP with `Learn` as the primary journey and with usable `Templates` and `Troubleshoot` support sections.

**Architecture:** Keep the site static and App Router based, move repeated content into typed data modules, and rebuild the four top-level pages around a clearer content hierarchy. Preserve the current theme and bilingual preference controls while improving metadata, page structure, and release readiness.

**Tech Stack:** Next.js 15 App Router, React 19, TypeScript, CSS via `app/globals.css`

---

## File Map

### Existing files to modify
- `app/layout.tsx`
- `app/globals.css`
- `app/page.tsx`
- `app/learn/page.tsx`
- `app/templates/page.tsx`
- `app/troubleshoot/page.tsx`
- `components/site-shell.tsx`
- `components/content.tsx`
- `components/preferences.tsx`

### New files to create
- `content/site.ts`
- `content/learn.ts`
- `content/templates.ts`
- `content/troubleshoot.ts`
- `components/page-hero.tsx`
- `components/section-heading.tsx`
- `components/template-card.tsx`
- `components/troubleshoot-card.tsx`
- `components/checklist-list.tsx`
- `lib/metadata.ts`

### Verification commands
- `npm run build`
- `npm run dev`

## Chunk 1: Structure Shared Content Data

### Task 1: Create typed content modules

**Files:**
- Create: `content/site.ts`
- Create: `content/learn.ts`
- Create: `content/templates.ts`
- Create: `content/troubleshoot.ts`
- Modify: `app/page.tsx`
- Modify: `app/learn/page.tsx`
- Modify: `app/templates/page.tsx`
- Modify: `app/troubleshoot/page.tsx`

- [ ] Define shared TypeScript-friendly content shapes for homepage sections, learning stages, templates, and troubleshooting entries.
- [ ] Move currently hardcoded arrays and repeated copy out of page files into the new `content/*` modules.
- [ ] Normalize repeated fields so rendering logic can stay simple, especially for tags, CTA labels, stage summaries, and issue checklists.
- [ ] Replace inline arrays in each page with imports from the content modules.
- [ ] Run `npm run build` and confirm the refactor did not break static rendering.

### Task 2: Keep bilingual rendering predictable

**Files:**
- Modify: `components/content.tsx`
- Modify: `content/site.ts`
- Modify: `content/learn.ts`
- Modify: `content/templates.ts`
- Modify: `content/troubleshoot.ts`

- [ ] Decide on a single content convention for bilingual blocks, either per-field `en`/`zh` objects or wrapper objects that match `CopyPair`.
- [ ] Update `CopyPair` usage patterns so page authors do not need ad hoc JSX duplication for every section.
- [ ] Ensure the content modules stay readable and do not mix long JSX trees with data definitions.
- [ ] Run `npm run build` and verify the bilingual content still renders correctly.

## Chunk 2: Rebuild Shared UI Primitives

### Task 3: Add reusable section and hero components

**Files:**
- Create: `components/page-hero.tsx`
- Create: `components/section-heading.tsx`
- Modify: `app/page.tsx`
- Modify: `app/learn/page.tsx`
- Modify: `app/templates/page.tsx`
- Modify: `app/troubleshoot/page.tsx`

- [ ] Create a shared page hero component that supports kicker, title, summary, CTA row, and optional side content.
- [ ] Create a section heading component for repeated title and supporting-copy layouts.
- [ ] Replace repeated hero and heading markup in the four route files with the new components.
- [ ] Keep page-specific visual differences configurable through props rather than separate duplicated markup.
- [ ] Run `npm run build` and verify the shared components compile cleanly.

### Task 4: Add reusable cards for templates and troubleshooting

**Files:**
- Create: `components/template-card.tsx`
- Create: `components/troubleshoot-card.tsx`
- Create: `components/checklist-list.tsx`
- Modify: `app/templates/page.tsx`
- Modify: `app/troubleshoot/page.tsx`

- [ ] Extract repeated template card markup into a dedicated card component.
- [ ] Extract troubleshooting issue presentation into a dedicated card or list component.
- [ ] Add a small checklist/list primitive for repeated bullets and step groups.
- [ ] Keep components data-driven so future detail pages can reuse the same content model.
- [ ] Run `npm run build` and verify no regressions in these route files.

## Chunk 3: Make Learn the Primary Product Experience

### Task 5: Rework the homepage around the learning journey

**Files:**
- Modify: `app/page.tsx`
- Modify: `content/site.ts`
- Modify: `components/site-shell.tsx`

- [ ] Rewrite the homepage section order so the primary path is `Learn`, not general site browsing.
- [ ] Keep the hero focused on who the site helps, what users will learn, and where to start.
- [ ] Make secondary homepage sections support the learning journey: path chooser, learning stages preview, selected templates, and troubleshooting entry points.
- [ ] Update top-level navigation labels or CTA emphasis if the current wording underplays the learning-first positioning.
- [ ] Run `npm run build` after the homepage restructure.

### Task 6: Turn Learn into a structured curriculum page

**Files:**
- Modify: `app/learn/page.tsx`
- Modify: `content/learn.ts`

- [ ] Organize `Learn` around the four-stage curriculum: Foundations, Setup, Skills and Workflows, Real-world Use Cases.
- [ ] Give each stage explicit learner outcomes, key topics, and a recommended next action.
- [ ] Add a clear intro that tells users how to use the page, rather than only marketing the idea.
- [ ] Add at least one compact "which path fits me" section for different user types without splitting into separate route trees yet.
- [ ] Run `npm run build` and manually inspect the Learn page in dev mode on desktop and mobile widths.

## Chunk 4: Upgrade Support Pages from Placeholder to Usable

### Task 7: Convert Templates into a curated starter library

**Files:**
- Modify: `app/templates/page.tsx`
- Modify: `content/templates.ts`

- [ ] Remove obviously placeholder controls that suggest advanced filtering if the feature does not exist yet.
- [ ] Reframe the page around curated discovery: recommended starters, categorized examples, and who each template is for.
- [ ] Ensure every template item has useful metadata: difficulty, time, risk, tags, and channels when applicable.
- [ ] Keep detail-page links as stable placeholders only if they reinforce future expansion; otherwise keep cards informational in MVP.
- [ ] Run `npm run build` and visually inspect the template cards for consistency.

### Task 8: Turn Troubleshoot into a symptom-first help page

**Files:**
- Modify: `app/troubleshoot/page.tsx`
- Modify: `content/troubleshoot.ts`

- [ ] Replace generic placeholder sections with a tighter symptom-first structure.
- [ ] For each high-frequency issue group, include short diagnosis cues, likely causes, and concrete next checks.
- [ ] Keep quick-check commands prominent and easy to scan.
- [ ] Add clear routing from troubleshooting back into learning or starter templates where appropriate.
- [ ] Run `npm run build` and manually inspect the page for scanability and command readability.

## Chunk 5: Launch Readiness and Quality

### Task 9: Improve metadata and page-level SEO basics

**Files:**
- Modify: `app/layout.tsx`
- Create: `lib/metadata.ts`
- Modify: `app/page.tsx`
- Modify: `app/learn/page.tsx`
- Modify: `app/templates/page.tsx`
- Modify: `app/troubleshoot/page.tsx`

- [ ] Add reusable metadata helpers for consistent titles and descriptions.
- [ ] Give each route a page-specific title and description aligned to its user intent.
- [ ] Improve root metadata to better describe the product and bilingual positioning.
- [ ] Add a sensible metadata base and Open Graph defaults if the deployment URL is known or can be stubbed safely.
- [ ] Run `npm run build` and confirm metadata changes do not break the app.

### Task 10: Polish layout, responsiveness, and accessibility baseline

**Files:**
- Modify: `app/globals.css`
- Modify: `components/site-shell.tsx`
- Modify: `components/preferences.tsx`

- [ ] Audit the current layout for mobile overflow, dense nav behavior, and weak spacing across sections.
- [ ] Improve focus states, button clarity, and control labeling for the theme and language switchers.
- [ ] Ensure section spacing and card layout scale cleanly from narrow mobile to desktop.
- [ ] Remove or revise UI affordances that imply interactivity the MVP does not support yet.
- [ ] Run `npm run build`, then run `npm run dev` and do a manual check of all four pages in light and dark themes.

## Delivery Checklist

- [ ] Homepage is clearly learning-first
- [ ] Learn page reads as a structured curriculum
- [ ] Templates page is usable without advanced filtering
- [ ] Troubleshoot page offers concrete symptom-based help
- [ ] Content is extracted into maintainable modules
- [ ] Metadata is page-specific and launch-ready
- [ ] `npm run build` passes
- [ ] Manual responsive review completed in `npm run dev`

## Notes

- There is no test framework configured in the current project. For this MVP, the minimum release gate is a successful production build plus manual route checks in development.
- If the project later adds a test runner, the first tests should target content rendering invariants and page-level smoke coverage.
