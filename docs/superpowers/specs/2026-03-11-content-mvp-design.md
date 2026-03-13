# OpenClaw Content-First MVP Design

**Date:** 2026-03-11

## Summary

This MVP turns the current OpenClaw Playbook prototype into a launchable content website with `Learn` as the primary user journey. The site should help a new visitor understand what OpenClaw is, choose a learning path, discover a small set of practical templates, and find the shortest troubleshooting path when setup fails.

The first release is intentionally content-first rather than product-heavy. It should feel complete enough to publish, but avoid building account systems, CMS workflows, or complex template search before the core information architecture proves useful.

## Goals

- Make `Learn` the primary destination and main reason to visit the site.
- Give new users a clear "start here" path within one or two clicks from the homepage.
- Upgrade `Templates` and `Troubleshoot` from placeholder pages into usable support sections.
- Consolidate content into maintainable data structures instead of scattering copy across page files.
- Reach a publishable baseline for SEO, responsiveness, accessibility, and content clarity.

## Non-goals

- No authentication, personalization, or saved progress.
- No CMS or admin panel in the MVP.
- No advanced full-text search or faceted filtering engine.
- No executable template runner or backend integration.
- No deep article system with dozens of detail pages in the first release.

## Primary Audience

### New OpenClaw learners

People who have heard about OpenClaw and want to understand how it works, what it is good at, and how to get started without reading fragmented notes.

### Early practitioners

People who want a practical starting point, such as a template or setup checklist, but still need explanatory context and safer entry points.

### Blocked users

People who already tried to install or run OpenClaw and need structured help for common failure modes.

## Product Positioning

The site should present OpenClaw as a system for real workflows rather than a vague AI chatbot. The learning experience should emphasize practical outcomes, explicit structure, and lower confusion for bilingual users.

The tone should be direct, operational, and confidence-building. Pages should reduce guesswork and push users toward the next concrete step.

## Information Architecture

### Home

Purpose:
- explain the site promise
- route users into the right next step
- reinforce that the fastest path is guided learning

Key sections:
- hero with value proposition and primary CTA to `Learn`
- path chooser for beginner, template-first, and troubleshooting visitors
- featured learning path summary
- selected templates preview
- troubleshooting preview

### Learn

Purpose:
- function as the primary product page
- organize learning into a staged progression

Learning stages:
- Foundations
- Setup
- Skills and Workflows
- Real-world Use Cases

Each stage should contain:
- what this stage is for
- who it is for
- what the learner will understand after completing it
- key topics
- recommended next action

### Templates

Purpose:
- help users discover a small set of useful starter workflows
- support the learning journey rather than replace it

MVP scope:
- featured templates
- light categorization and tagging
- basic descriptive metadata such as difficulty, time, risk, and channels
- links or placeholders for future detail pages, without building the full system yet

### Troubleshoot

Purpose:
- organize frequent setup and runtime issues around observable symptoms
- provide short diagnosis paths and concrete next checks

MVP scope:
- symptom-based issue groups
- component-based navigation
- quick-check command list
- clear escalation suggestions

## Content Model

The MVP should stop hardcoding repeated content structures inside page components. Content should move into typed data modules that can be rendered consistently.

Recommended content entities:

### LearningStage
- `id`
- `title`
- `summary`
- `audience`
- `outcomes`
- `topics`
- `ctaLabel`
- `ctaHref`

### TemplateEntry
- `slug`
- `title`
- `summary`
- `difficulty`
- `timeEstimate`
- `riskLevel`
- `channels`
- `tags`
- `recommendedFor`

### TroubleshootEntry
- `slug`
- `symptom`
- `summary`
- `commonCauses`
- `checks`
- `commands`
- `nextStep`

### Site copy blocks
- homepage hero copy
- page intros
- CTA labels
- footer/support copy

## UX Principles

- Prioritize clear progression over maximal choice.
- Keep the main CTA on every page aligned with the learning journey.
- Make bilingual presentation intentional, not duplicated clutter.
- Use templates and troubleshooting as support rails for learning, not parallel product tracks.
- Prefer short sections with obvious next actions over dense information dumps.

## Technical Direction

The current app is a Next.js App Router site with static page components and shared layout primitives. The MVP should remain statically rendered and content-driven.

Technical choices:
- keep App Router pages
- keep the current theme and language preference model
- extract content into typed modules under a dedicated content directory
- add lightweight shared presentational components where page structure repeats
- improve metadata at both root and page levels

No backend work is required for this MVP.

## Accessibility and Quality Baseline

- semantic headings and landmarks
- keyboard-accessible controls
- sufficient color contrast in both themes
- visible focus states
- mobile-friendly layout down to narrow viewports
- metadata for title and description on key pages
- successful production build before release

## Release Scope

The MVP is complete when:
- homepage clearly routes users into `Learn`
- `Learn` feels like a structured path instead of a placeholder page
- `Templates` is a curated starter library
- `Troubleshoot` provides useful issue discovery and quick checks
- content is organized into maintainable data files
- the site builds cleanly and is ready for deployment

## Deferred Work

- individual lesson detail pages
- individual template detail pages
- richer template filtering and search
- analytics and conversion instrumentation
- editorial workflow or headless CMS
- newsletter or account features
