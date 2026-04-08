import type { CtaLink, LocalizedList, LocalizedText } from "@/content/types";

export type TroubleshootEntry = {
  id: string;
  slug: string;
  title: LocalizedText;
  symptom: LocalizedText;
  summary: LocalizedText;
  commonCauses: LocalizedList;
  checks: LocalizedList;
  cta: CtaLink;
};

export type TroubleshootTab = {
  id: string;
  label: LocalizedText;
  intro: LocalizedText;
  entries: TroubleshootEntry[];
};

export const troubleshootIntro = {
  kicker: "SYMPTOM-FIRST HELP",
  title: {
    en: "Diagnose OpenClaw by symptom, not by random guesses.",
    zh: "按症状诊断 OpenClaw，而不是靠随机猜测。",
  },
  summary: {
    en: "Use Troubleshoot as a diagnostic hub: start from what failed, narrow the likely causes, and only then change setup, models, or workflows.",
    zh: "把 Troubleshoot 当成诊断中心来用：先从失败现象出发，缩小可能原因，再决定是否改 setup、模型或工作流。",
  },
};

export const troubleshootTabs: TroubleshootTab[] = [
  {
    id: "bot-silence",
    label: { en: "Bot not responding", zh: "机器人无响应" },
    intro: {
      en: "Use this when a message is sent successfully but OpenClaw never produces a useful reply or the bot appears online without doing any real work.",
      zh: "当消息已经发出去，但 OpenClaw 没有给出有效回复，或机器人看起来在线却没有真正执行时，从这里开始。",
    },
    entries: [
      {
        id: "bot-silent",
        slug: "bot-silent",
        title: { en: "Channel loop is broken", zh: "渠道闭环没打通" },
        symptom: {
          en: "Messages reach the channel, but nothing actionable comes back.",
          zh: "消息已经到达渠道，但没有任何可执行的回应回来。",
        },
        summary: {
          en: "This is usually a pairing or event-routing problem rather than a prompt or skill problem.",
          zh: "这通常是配对或事件路由问题，不是提示词或技能问题。",
        },
        commonCauses: {
          en: ["Channel pairing incomplete", "Webhook/event listener missing", "Test message sent to the wrong target"],
          zh: ["渠道配对未完成", "Webhook 或事件监听缺失", "测试消息发到了错误目标"],
        },
        checks: {
          en: ["Verify bot presence in the target channel", "Send one plain test message", "Confirm the event reaches OpenClaw logs"],
          zh: ["确认机器人在目标渠道中", "发送一条纯文本测试消息", "确认事件已进入 OpenClaw 日志"],
        },
        cta: {
          label: { en: "Review setup path", zh: "回看 setup 路径" },
          href: "/learn/setup",
          variant: "secondary",
        },
      },
      {
        id: "daemon-unhealthy",
        slug: "daemon-unhealthy",
        title: { en: "Bot process is unhealthy", zh: "机器人进程不健康" },
        symptom: {
          en: "The bot appears configured, but responses are inconsistent or stop completely after startup.",
          zh: "机器人看起来已经配置好，但启动后响应不稳定，或者直接停止返回结果。",
        },
        summary: {
          en: "Treat this as a runtime health issue first and verify the process before changing workflows.",
          zh: "先把它当成运行状态问题处理，先确认进程健康，再去动工作流。",
        },
        commonCauses: {
          en: ["Daemon crashed after boot", "Background service restarted in a loop", "Runtime dependency missing after install"],
          zh: ["守护进程启动后崩溃", "后台服务反复重启", "安装后缺少运行时依赖"],
        },
        checks: {
          en: ["Run `openclaw status`", "Read the latest logs tail", "Confirm health checks stay green for a few minutes"],
          zh: ["执行 `openclaw status`", "查看最新日志 tail", "确认健康检查能稳定几分钟都为正常"],
        },
        cta: {
          label: { en: "Open diagnostics tab", zh: "查看诊断入口" },
          href: "#troubleshoot-directory",
          variant: "link",
        },
      },
      {
        id: "message-format",
        slug: "message-format",
        title: { en: "Input path is too noisy", zh: "输入路径噪声过大" },
        symptom: {
          en: "The bot sometimes replies, but first-run tests are unreliable and hard to compare.",
          zh: "机器人有时会回复，但首次测试结果不稳定，几乎无法比较。",
        },
        summary: {
          en: "Reduce the test path before you assume the system is broken. Simple inputs expose the real failure faster.",
          zh: "先缩短测试路径，再判断系统是否真的坏掉。简单输入能更快暴露真实故障点。",
        },
        commonCauses: {
          en: ["Testing with a complex prompt too early", "Multiple skills mixed in one message", "Channel formatting interfering with parsing"],
          zh: ["过早使用复杂提示词测试", "一条消息里混了多个技能", "渠道格式影响了解析"],
        },
        checks: {
          en: ["Retry with a one-line instruction", "Remove attachments and rich formatting", "Compare against a known-good starter flow"],
          zh: ["改用一行简单指令重试", "去掉附件和富文本格式", "对照一个已知可用的入门流程"],
        },
        cta: {
          label: { en: "Compare with starter workflows", zh: "对照入门工作流" },
          href: "/templates",
          variant: "primary",
        },
      },
    ],
  },
  {
    id: "install-environment",
    label: { en: "Install & environment", zh: "安装与环境" },
    intro: {
      en: "Use this when OpenClaw never reaches a stable runnable state, installs partially, or behaves differently each time you restart it.",
      zh: "如果 OpenClaw 始终进不了稳定可运行状态、安装只完成一半，或每次重启表现都不一样，就从这里排查。",
    },
    entries: [
      {
        id: "install-failed",
        slug: "install-failed",
        title: { en: "Install path never stabilizes", zh: "安装路径始终不稳定" },
        symptom: {
          en: "You can install some pieces, but the system never becomes predictably runnable.",
          zh: "某些步骤能安装成功，但整个系统始终无法稳定运行。",
        },
        summary: {
          en: "Shrink the scope and verify one dependency at a time instead of layering optional services too early.",
          zh: "先缩小范围，逐个验证依赖，不要过早叠加可选服务。",
        },
        commonCauses: {
          en: ["Wrong install path", "Partial environment setup", "Optional services added before core health checks passed"],
          zh: ["安装路径错误", "环境配置只做了一半", "核心健康检查没过就先加了可选服务"],
        },
        checks: {
          en: ["Re-run the minimal install path", "Confirm each dependency separately", "Stop at the first failing health check"],
          zh: ["重新走最小安装路径", "逐项确认每个依赖", "在第一个失败的健康检查处停下来"],
        },
        cta: {
          label: { en: "Return to Quick Start", zh: "回到 Quick Start" },
          href: "/#quick-start",
          variant: "secondary",
        },
      },
      {
        id: "env-variables",
        slug: "env-variables",
        title: { en: "Environment variables are inconsistent", zh: "环境变量不一致" },
        symptom: {
          en: "The same command behaves differently across shells, restarts, or deployment attempts.",
          zh: "同一条命令在不同 shell、重启后或多次部署时表现不一致。",
        },
        summary: {
          en: "Treat configuration drift as the first suspect before rewriting any logic.",
          zh: "先把配置漂移当成第一嫌疑对象，而不是急着重写逻辑。",
        },
        commonCauses: {
          en: ["Variables loaded in one shell only", "Multiple env files competing", "Secrets copied with stale values"],
          zh: ["变量只在某个 shell 中生效", "多个 env 文件互相覆盖", "复制的密钥值已经过期"],
        },
        checks: {
          en: ["List the active env source", "Compare runtime values with expected values", "Remove duplicate or legacy config files"],
          zh: ["列出当前生效的 env 来源", "比对运行时值和预期值", "移除重复或遗留配置文件"],
        },
        cta: {
          label: { en: "Review setup guide", zh: "查看 setup 指南" },
          href: "/learn/setup",
          variant: "secondary",
        },
      },
      {
        id: "dependency-drift",
        slug: "dependency-drift",
        title: { en: "Dependencies drifted after install", zh: "安装后依赖漂移" },
        symptom: {
          en: "OpenClaw worked once, then started failing after a restart or small local change.",
          zh: "OpenClaw 曾经能运行一次，但在重启或小改动后开始失败。",
        },
        summary: {
          en: "Assume the environment changed underneath you and verify versions before debugging behavior.",
          zh: "优先假设环境底层发生了变化，先核对版本，再排查行为。",
        },
        commonCauses: {
          en: ["Runtime version mismatch", "A package upgraded unexpectedly", "Docker or system dependency changed"],
          zh: ["运行时版本不匹配", "某个包被意外升级", "Docker 或系统依赖发生变化"],
        },
        checks: {
          en: ["Check versions against the known-good setup", "Compare lockfiles or install logs", "Reproduce in the smallest clean environment"],
          zh: ["对照已知可用 setup 检查版本", "比对 lockfile 或安装日志", "在最小干净环境中复现一次"],
        },
        cta: {
          label: { en: "Open diagnostics tab", zh: "查看诊断入口" },
          href: "#troubleshoot-directory",
          variant: "link",
        },
      },
    ],
  },
  {
    id: "models-credentials",
    label: { en: "Models & credentials", zh: "模型与凭证" },
    intro: {
      en: "Use this when model calls are rejected, responses degrade suddenly, or an apparently valid provider setup still fails at runtime.",
      zh: "如果模型调用被拒绝、结果突然变差，或看似正确的 provider 配置在运行时仍然失败，就看这一组。",
    },
    entries: [
      {
        id: "invalid-credentials",
        slug: "invalid-credentials",
        title: { en: "Credentials look valid but fail", zh: "凭证看似有效但调用失败" },
        symptom: {
          en: "The provider is configured, yet model requests are rejected or silently fail.",
          zh: "provider 已经配置，但模型请求仍然被拒绝，或静默失败。",
        },
        summary: {
          en: "Most of the time the key exists, but the scope, quota, or endpoint is still wrong.",
          zh: "多数情况下 key 本身存在，但权限范围、额度或 endpoint 仍然不对。",
        },
        commonCauses: {
          en: ["Wrong endpoint or region", "Quota exhausted", "Token copied from a different workspace"],
          zh: ["endpoint 或地区配置错误", "额度耗尽", "令牌来自另一个工作空间"],
        },
        checks: {
          en: ["Validate one direct model call", "Check provider quota and account scope", "Confirm the configured endpoint exactly matches docs"],
          zh: ["直接验证一次模型调用", "检查 provider 配额和账号范围", "确认 endpoint 与文档完全一致"],
        },
        cta: {
          label: { en: "Re-check setup assumptions", zh: "重新核对 setup 假设" },
          href: "/learn/setup",
          variant: "secondary",
        },
      },
      {
        id: "fallback-model",
        slug: "fallback-model",
        title: { en: "Fallback model hides the real issue", zh: "回退模型掩盖了真实问题" },
        symptom: {
          en: "OpenClaw still returns something, but quality, latency, or behavior changed sharply.",
          zh: "OpenClaw 仍然有返回，但质量、延迟或行为突然变了很多。",
        },
        summary: {
          en: "You may be hitting a fallback path or degraded provider state rather than a workflow bug.",
          zh: "这更可能是进入了 fallback 路径，或 provider 进入降级状态，不一定是工作流 bug。",
        },
        commonCauses: {
          en: ["Primary model unavailable", "Provider policy changed", "A cheaper fallback path was triggered"],
          zh: ["主模型不可用", "provider 策略变化", "触发了更便宜的 fallback 路径"],
        },
        checks: {
          en: ["Inspect the actual model name in logs", "Compare outputs with a known-good baseline", "Temporarily force one explicit model"],
          zh: ["在日志里确认实际模型名", "和已知正常输出做对比", "临时强制指定一个明确模型"],
        },
        cta: {
          label: { en: "Review workflow design", zh: "回看工作流设计" },
          href: "/learn/skills-workflow-design",
          variant: "secondary",
        },
      },
      {
        id: "provider-latency",
        slug: "provider-latency",
        title: { en: "Provider latency feels like failure", zh: "Provider 延迟被误判为失败" },
        symptom: {
          en: "Requests eventually finish, but the first-run experience feels broken or random.",
          zh: "请求最终能完成，但首次体验看起来像坏掉了一样，结果也很随机。",
        },
        summary: {
          en: "Separate timeout and latency behavior from real logic errors before redesigning the workflow.",
          zh: "先把超时和高延迟问题从真实逻辑错误中分离出来，再决定是否重构工作流。",
        },
        commonCauses: {
          en: ["Provider under load", "Timeouts set too aggressively", "Large prompts sent during first validation"],
          zh: ["provider 负载过高", "超时参数设置过激", "首次验证时就发送了超大提示词"],
        },
        checks: {
          en: ["Retry with a much smaller request", "Measure latency from logs", "Test the provider outside the full workflow"],
          zh: ["改用小很多的请求重试", "从日志里量化延迟", "在完整工作流之外单测 provider"],
        },
        cta: {
          label: { en: "Open usage tips", zh: "查看使用技巧" },
          href: "/learn/usage-tips",
          variant: "link",
        },
      },
    ],
  },
  {
    id: "workflow-no-output",
    label: { en: "Workflow produces nothing", zh: "工作流没结果" },
    intro: {
      en: "Use this when setup seems fine, but the actual workflow never delivers a useful artifact, summary, alert, or handoff.",
      zh: "当 setup 看起来没问题，但真正的工作流始终产不出有效的摘要、告警、结果物或交付时，从这里看。",
    },
    entries: [
      {
        id: "workflow-too-broad",
        slug: "workflow-too-broad",
        title: { en: "Workflow is too broad to debug", zh: "工作流太宽，无法排查" },
        symptom: {
          en: "You know something in the chain is wrong, but there are too many moving parts to isolate it.",
          zh: "你知道流程里有问题，但环节太多，根本无法定位。",
        },
        summary: {
          en: "Reduce the loop until one step either succeeds or fails clearly. Broad workflows hide the first real breakage.",
          zh: "把流程缩到只剩一个清晰的成功或失败步骤。范围过大的流程会掩盖第一个真实断点。",
        },
        commonCauses: {
          en: ["Too many steps in one test", "No intermediate outputs captured", "Channel and model issues mixed with workflow logic"],
          zh: ["一次测试塞了太多步骤", "没有保存中间输出", "渠道/模型问题和工作流逻辑混在一起"],
        },
        checks: {
          en: ["Split the workflow into smaller checkpoints", "Inspect the first missing output", "Compare against a known starter template"],
          zh: ["把流程拆成更小检查点", "先看第一个缺失的输出", "对照一个已知的 starter template"],
        },
        cta: {
          label: { en: "Browse starter templates", zh: "浏览起步模板" },
          href: "/templates",
          variant: "primary",
        },
      },
      {
        id: "output-not-valuable",
        slug: "output-not-valuable",
        title: { en: "Workflow runs but output is weak", zh: "流程能跑，但结果没价值" },
        symptom: {
          en: "The task technically completes, but the output is too noisy, shallow, or hard to use.",
          zh: "任务技术上能完成，但产出的结果太吵、太浅，或者很难真正使用。",
        },
        summary: {
          en: "Treat this as a design issue. The system may be healthy while the workflow framing is wrong.",
          zh: "这更像设计问题。系统也许是健康的，只是工作流 framing 本身错了。",
        },
        commonCauses: {
          en: ["Prompt or framing too generic", "Success criteria never defined", "Trying to automate before choosing the right artifact"],
          zh: ["提示词或 framing 过于泛化", "没有定义成功标准", "还没选对结果物就先自动化"],
        },
        checks: {
          en: ["Rewrite the expected artifact in one sentence", "Compare output against a real human baseline", "Reduce the workflow to one clearer deliverable"],
          zh: ["用一句话重写预期结果物", "把输出和人工基线对比", "把流程缩成一个更明确的交付物"],
        },
        cta: {
          label: { en: "Read workflow design guide", zh: "查看工作流设计指南" },
          href: "/learn/skills-workflow-design",
          variant: "secondary",
        },
      },
      {
        id: "starter-template-drift",
        slug: "starter-template-drift",
        title: { en: "Starter template assumptions no longer fit", zh: "入门模板假设已不匹配" },
        symptom: {
          en: "A starter template worked before, but no longer matches the current team, channel, or use case.",
          zh: "入门模板以前能用，但现在已经不再适配当前团队、渠道或场景。",
        },
        summary: {
          en: "Templates are baselines, not promises. Re-check the assumptions before blaming the system.",
          zh: "模板是基线，不是承诺。先检查假设变化，再怀疑系统本身。",
        },
        commonCauses: {
          en: ["Channel changed", "Expected audience changed", "The source signal is now noisier than before"],
          zh: ["渠道变了", "目标读者变了", "原始信号比以前更嘈杂了"],
        },
        checks: {
          en: ["Restate who the output is for", "Check whether the source inputs changed", "Pick a template closer to the current goal"],
          zh: ["重新定义输出给谁看", "检查输入源是否变化", "换一个更贴近当前目标的模板"],
        },
        cta: {
          label: { en: "Revisit template categories", zh: "重新选择模板分类" },
          href: "/templates",
          variant: "secondary",
        },
      },
    ],
  },
  {
    id: "permissions-integrations",
    label: { en: "Permissions & integrations", zh: "权限与集成" },
    intro: {
      en: "Use this when the workflow logic seems reasonable, but external tools, channels, or integrations fail to connect cleanly.",
      zh: "如果工作流逻辑本身没太大问题，但外部工具、渠道或集成无法稳定接通，就从这里排查。",
    },
    entries: [
      {
        id: "permission-gaps",
        slug: "permission-gaps",
        title: { en: "Permissions are incomplete", zh: "权限缺口导致流程中断" },
        symptom: {
          en: "Parts of the workflow execute, but key actions fail at the boundary with another tool.",
          zh: "流程中的一部分能执行，但关键动作在接入其他工具时失败。",
        },
        summary: {
          en: "This is often a permissions boundary issue rather than an OpenClaw reasoning issue.",
          zh: "这通常是权限边界问题，不是 OpenClaw 推理能力本身的问题。",
        },
        commonCauses: {
          en: ["Read permission exists but write permission is missing", "Integration token has narrow scope", "Bot not invited into the target workspace"],
          zh: ["只有读权限没有写权限", "集成 token 作用域过窄", "机器人没有加入目标工作区"],
        },
        checks: {
          en: ["List the exact action that failed", "Compare required scopes with granted scopes", "Test the integration with the smallest write action"],
          zh: ["列出失败的具体动作", "对照所需 scope 和已授予 scope", "用最小写入动作测试集成"],
        },
        cta: {
          label: { en: "Review integration assumptions", zh: "回看集成假设" },
          href: "/learn/chinese-ecosystem",
          variant: "secondary",
        },
      },
      {
        id: "integration-mismatch",
        slug: "integration-mismatch",
        title: { en: "Integration target is wrong", zh: "集成目标配置错误" },
        symptom: {
          en: "The workflow runs, but results go to the wrong place or disappear into an unexpected target.",
          zh: "流程在运行，但结果被发到了错误位置，或者落进了意料之外的目标里。",
        },
        summary: {
          en: "Confirm the destination before you rewrite the workflow. Many failures are simple routing mistakes.",
          zh: "先确认目标地址，再决定是否重写工作流。很多失败本质上只是路由配置错了。",
        },
        commonCauses: {
          en: ["Wrong webhook/channel ID", "Workspace mismatch", "Copied settings from another environment"],
          zh: ["webhook 或渠道 ID 错了", "工作区不一致", "从另一个环境复制了配置"],
        },
        checks: {
          en: ["Print the current destination config", "Send one narrow integration test", "Compare target IDs with the live system"],
          zh: ["打印当前目标配置", "发送一次最小集成测试", "对照 live 系统核对目标 ID"],
        },
        cta: {
          label: { en: "Browse Chinese ecosystem guide", zh: "查看中文生态指南" },
          href: "/learn/chinese-ecosystem",
          variant: "secondary",
        },
      },
      {
        id: "tooling-friction",
        slug: "tooling-friction",
        title: { en: "External tool friction blocks value", zh: "外部工具摩擦阻碍价值落地" },
        symptom: {
          en: "OpenClaw itself works, but the surrounding toolchain makes the workflow too fragile to trust.",
          zh: "OpenClaw 自身能工作，但外围工具链让整个流程脆弱到无法信任。",
        },
        summary: {
          en: "When integration friction dominates, simplify the surrounding stack before adding more automation.",
          zh: "当集成摩擦占主导时，先简化外围工具栈，再继续加自动化。",
        },
        commonCauses: {
          en: ["Too many connected tools", "Each tool adds its own auth or formatting edge cases", "No stable handoff format between tools"],
          zh: ["接入的工具太多", "每个工具都有自己的鉴权或格式边角问题", "工具之间没有稳定交接格式"],
        },
        checks: {
          en: ["Reduce the workflow to one primary destination", "Choose a simpler handoff format", "Prove value in one integration before scaling out"],
          zh: ["把流程缩到一个主目的地", "选择更简单的交接格式", "先在一个集成里证明价值，再扩展"],
        },
        cta: {
          label: { en: "See practical usage tips", zh: "查看实用技巧" },
          href: "/learn/usage-tips",
          variant: "link",
        },
      },
    ],
  },
  {
    id: "diagnostics-observability",
    label: { en: "Observability & diagnostics", zh: "观察与诊断" },
    intro: {
      en: "Use this when you need to narrow the issue quickly before going deep. Start with health, logs, and the smallest reproducible signal.",
      zh: "如果你想在深入排错前先快速缩小问题范围，就用这一组。先看健康状态、日志和最小可复现信号。",
    },
    entries: [
      {
        id: "quick-health-check",
        slug: "quick-health-check",
        title: { en: "Run the shortest health loop first", zh: "先跑最短健康检查环路" },
        symptom: {
          en: "You are not sure whether the failure belongs to setup, runtime health, or one specific workflow.",
          zh: "你还不能判断问题属于 setup、运行状态，还是某个具体工作流。",
        },
        summary: {
          en: "A short health loop tells you which layer deserves attention before you waste time in the wrong place.",
          zh: "一个短健康检查环路能先告诉你应该关注哪一层，避免在错误方向上浪费时间。",
        },
        commonCauses: {
          en: ["Troubleshooting started from assumptions instead of evidence", "Too many variables changed at once", "No baseline command run yet"],
          zh: ["排错从假设开始而不是从证据开始", "一次改了太多变量", "还没有先跑基线命令"],
        },
        checks: {
          en: ["Run `openclaw status`", "Run `openclaw health`", "Read `openclaw logs --tail 120` before changing config"],
          zh: ["执行 `openclaw status`", "执行 `openclaw health`", "改配置前先看 `openclaw logs --tail 120`"],
        },
        cta: {
          label: { en: "Read advanced troubleshooting", zh: "查看进阶排错" },
          href: "/learn/advanced-troubleshooting",
          variant: "secondary",
        },
      },
      {
        id: "reproduce-cleanly",
        slug: "reproduce-cleanly",
        title: { en: "Reproduce with one clean signal", zh: "用一个干净信号复现问题" },
        symptom: {
          en: "The issue appears real, but each reproduction attempt looks slightly different.",
          zh: "问题看起来是真实存在的，但每次复现的表现都略有不同。",
        },
        summary: {
          en: "You need one clean reproducer. Without that, logs and outputs are too noisy to trust.",
          zh: "你需要一个干净的复现方式。没有它，日志和输出都太嘈杂，无法信任。",
        },
        commonCauses: {
          en: ["Different inputs used each time", "Multiple channels tested at once", "Background changes between runs"],
          zh: ["每次用的输入都不同", "同时在多个渠道测试", "两次运行间后台状态发生变化"],
        },
        checks: {
          en: ["Choose one channel and one message", "Freeze one model and one workflow", "Capture the exact failure output once"],
          zh: ["只选一个渠道和一条消息", "固定一个模型和一个流程", "先完整记录一次失败输出"],
        },
        cta: {
          label: { en: "Open workflow guide", zh: "查看工作流指南" },
          href: "/learn/skills-workflow-design",
          variant: "link",
        },
      },
      {
        id: "status-then-logs",
        slug: "status-then-logs",
        title: { en: "Read status before logs", zh: "先看状态，再看日志" },
        symptom: {
          en: "Logs are noisy, and you do not know which lines matter.",
          zh: "日志信息太多，你不知道哪些行才重要。",
        },
        summary: {
          en: "Status narrows the search space. Logs become useful only after you know which subsystem is unhealthy.",
          zh: "状态信息能先缩小搜索空间。只有知道哪一层不健康，日志才真正有用。",
        },
        commonCauses: {
          en: ["Logs opened too early", "No subsystem hypothesis yet", "Health state ignored while reading errors"],
          zh: ["过早直接看日志", "还没有形成子系统假设", "看报错时忽略了健康状态"],
        },
        checks: {
          en: ["Identify the unhealthy subsystem first", "Filter logs around one failure window", "Write down one hypothesis before the next config change"],
          zh: ["先识别不健康的子系统", "只筛选一个失败时间窗附近的日志", "下一次改配置前先写下一条假设"],
        },
        cta: {
          label: { en: "Back to symptom tabs", zh: "回到症状分类" },
          href: "#troubleshoot-directory",
          variant: "link",
        },
      },
    ],
  },
];
