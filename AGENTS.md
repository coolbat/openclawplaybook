# AGENTS.md

## Workflow Override For This Repo

This repository adopts a Codex-adapted subset of the Superpowers workflow found in:

- `/Users/coolbat/.claude/plugins/cache/superpowers/skills/using-superpowers/`
- `/Users/coolbat/.claude/plugins/cache/superpowers/skills/writing-plans/`
- `/Users/coolbat/.claude/plugins/cache/superpowers/skills/executing-plans/`
- `/Users/coolbat/.claude/plugins/cache/superpowers/skills/subagent-driven-development/`

These rules apply to future work in this repo unless the user says otherwise.

## What To Use

For non-trivial feature work, multi-file changes, or work based on a spec/PRD:

1. Start by explicitly writing or updating a plan.
2. Break work into small, verifiable tasks.
3. Track task progress using the platform plan tool.
4. Implement in small increments.
5. Verify before completion with build/tests/manual checks as appropriate.

## Codex Adaptation

This Codex environment does not always expose native Superpowers skill loading or subagent dispatch.
Use the following equivalents:

- `writing-plans` -> write a concrete implementation plan in the conversation and/or repo docs
- `TodoWrite` -> `update_plan`
- `executing-plans` -> execute tasks in order with verification after each meaningful unit
- `subagent-driven-development` -> emulate with serial implementation + review checkpoints

If native subagent tools become available later, prefer them for independent tasks.

## Required Behavior

- Do not jump into large code edits without first identifying the task list.
- For tasks based on specs, review the spec critically before implementation.
- Stop and ask when a blocker appears instead of guessing through it.
- Run a verification step before declaring work complete.
- When asked for review, prioritize bugs, regressions, risks, and missing tests.

## Preferred Sequence

For substantial work:

1. Read the relevant spec or requirements
2. Announce the workflow being used
3. Produce a short execution plan
4. Implement task-by-task
5. Verify
6. Summarize outcome and remaining risks

## Notes

- User instructions override this file.
- Keep the workflow lightweight for trivial edits.
