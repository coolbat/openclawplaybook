# Superpowers To Codex Adaptation

This project uses a practical subset of the Superpowers workflow, adapted for the current Codex harness.

## Source Skills

Reference source:

- `/Users/coolbat/.claude/plugins/cache/superpowers/skills/using-superpowers/SKILL.md`
- `/Users/coolbat/.claude/plugins/cache/superpowers/skills/writing-plans/SKILL.md`
- `/Users/coolbat/.claude/plugins/cache/superpowers/skills/executing-plans/SKILL.md`
- `/Users/coolbat/.claude/plugins/cache/superpowers/skills/subagent-driven-development/SKILL.md`
- `/Users/coolbat/.claude/plugins/cache/superpowers/skills/using-superpowers/references/codex-tools.md`

## Effective Rules In This Repo

### 1. Skills-first mindset

Before substantial work, check whether there is an established workflow that should shape execution.

### 2. Plan before multi-step implementation

If a task is based on a PRD, feature brief, or spans multiple files:

- review requirements first
- decompose into explicit tasks
- keep tasks small enough to verify

### 3. Execute with checkpoints

After each meaningful change set:

- run the most relevant verification
- note blockers immediately
- avoid bundling unrelated edits

### 4. Prefer review gates

When subagents are unavailable, emulate review with:

- spec compliance check
- code quality / regression check

### 5. Finish only after verification

Do not declare completion before build/tests/manual verification suitable to the task.

## Mapping

| Superpowers concept | Codex approach in this repo |
| --- | --- |
| Skill invocation | Follow repo workflow rules directly |
| TodoWrite | `update_plan` |
| Subagent implementation | Serial implementation in current session |
| Spec reviewer | Manual spec compliance pass |
| Code quality reviewer | Manual review pass |

## Current Limitation

The current Codex harness in this session does not expose native `spawn_agent` style subagent tools, so full `subagent-driven-development` is not active. The workflow is therefore integrated as process discipline rather than as native skill execution.
