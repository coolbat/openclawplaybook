import type { CtaLink, LocalizedList, LocalizedText } from "@/content/types";

export type LearnTutorialCard = {
  id: string;
  slug: string;
  title: LocalizedText;
  summary: LocalizedText;
  meta: LocalizedText;
  tags: LocalizedList;
  cta: CtaLink;
};

export type LearnTab = {
  id: string;
  label: LocalizedText;
  intro: LocalizedText;
  tutorials: LearnTutorialCard[];
};

export const learnIntro = {
  kicker: "LEARN HUB",
  title: {
    en: "Learn is the deeper OpenClaw resource hub.",
    zh: "Learn 是更深入的 OpenClaw 资源中心。",
  },
  summary: {
    en: "Use Learn as your tutorial shelf for foundations, setup strategy, workflow design, Chinese ecosystem patterns, recovery paths, and day-to-day operating tips.",
    zh: "把 Learn 当成你的教程书架：这里集中放基础认知、环境搭建、工作流设计、中文生态、排错恢复和日常使用技巧。",
  },
  ctas: [
    {
      label: { en: "Review Quick Start", zh: "回看 Quick Start" },
      href: "/#quick-start",
      variant: "secondary" as const,
    },
    {
      label: { en: "Browse starter templates", zh: "查看入门模板" },
      href: "/templates",
      variant: "primary" as const,
    },
  ],
};

export const learnTabs: LearnTab[] = [
  {
    id: "foundations",
    label: { en: "Foundations", zh: "基础认知" },
    intro: {
      en: "Build the right mental model first so later setup and workflow choices stop feeling random.",
      zh: "先把认知模型搭好，后面的 setup 和工作流选择才不会像在碰运气。",
    },
    tutorials: [
      {
        id: "openclaw-vs-chatbots",
        slug: "openclaw-vs-chatbots",
        title: { en: "OpenClaw Is Not Just Another Chatbot", zh: "OpenClaw 不只是另一个聊天机器人" },
        summary: {
          en: "Understand why execution loops, channels, and repeatability matter more than prompt fluency.",
          zh: "理解为什么执行闭环、渠道触发和可重复性，比“会不会写提示词”更关键。",
        },
        meta: { en: "Beginner · 8 min", zh: "入门 · 8 分钟" },
        tags: {
          en: ["Mental model", "Execution", "Onboarding"],
          zh: ["认知模型", "执行闭环", "新手必读"],
        },
        cta: { label: { en: "Read overview", zh: "查看概览" }, href: "/learn/openclaw-vs-chatbots", variant: "secondary" },
      },
      {
        id: "skills-change-boundaries",
        slug: "skills-change-boundaries",
        title: { en: "Why Skills Change Capability Boundaries", zh: "技能为什么会改变能力边界" },
        summary: {
          en: "See how skills turn a chat surface into something that can browse, debug, transform, and deliver.",
          zh: "理解技能如何把聊天界面变成能浏览、调试、转换和交付结果的执行系统。",
        },
        meta: { en: "Beginner · 10 min", zh: "入门 · 10 分钟" },
        tags: {
          en: ["Skills", "Capability", "System design"],
          zh: ["技能", "能力边界", "系统设计"],
        },
        cta: { label: { en: "Read overview", zh: "查看概览" }, href: "/learn/skills-change-boundaries", variant: "secondary" },
      },
      {
        id: "human-review-still-matters",
        slug: "human-review-still-matters",
        title: { en: "Where Human Review Still Matters", zh: "哪些环节仍然需要人工复核" },
        summary: {
          en: "Map the parts of a workflow that still need judgment, approval, or final editorial control.",
          zh: "看清哪些工作流环节仍然需要判断、批准或最终编辑把关。",
        },
        meta: { en: "Beginner · 7 min", zh: "入门 · 7 分钟" },
        tags: {
          en: ["Human-in-the-loop", "Risk", "Review"],
          zh: ["人工参与", "风险控制", "复核"],
        },
        cta: { label: { en: "Read overview", zh: "查看概览" }, href: "/learn/human-review-still-matters", variant: "secondary" },
      },
    ],
  },
  {
    id: "setup",
    label: { en: "Setup", zh: "环境搭建" },
    intro: {
      en: "Choose the smallest setup that can prove the system works before you start layering extra services.",
      zh: "先搭出能证明系统跑通的最小环境，再逐步叠加额外服务。",
    },
    tutorials: [
      {
        id: "local-vs-vps",
        slug: "local-vs-vps",
        title: { en: "Local vs VPS: Pick the First Path", zh: "本地还是 VPS：如何选第一条路径" },
        summary: {
          en: "Use a simple decision frame to decide whether you should start locally or deploy remotely.",
          zh: "用一个足够简单的判断框架，决定你应该先本地跑还是先上远程环境。",
        },
        meta: { en: "Beginner · 9 min", zh: "入门 · 9 分钟" },
        tags: { en: ["Setup", "Local", "VPS"], zh: ["环境搭建", "本地", "VPS"] },
        cta: { label: { en: "Open guide", zh: "打开指南" }, href: "/learn/local-vs-vps", variant: "secondary" },
      },
      {
        id: "verify-model-provider",
        slug: "verify-model-provider",
        title: { en: "Verify One Model Provider Early", zh: "尽早验证一个模型服务" },
        summary: {
          en: "Before troubleshooting five things at once, verify one provider, one key, and one healthy response path.",
          zh: "别一开始同时排查五件事，先验证一个 provider、一把 key 和一条正常响应链路。",
        },
        meta: { en: "Beginner · 6 min", zh: "入门 · 6 分钟" },
        tags: { en: ["API", "Health check", "Credentials"], zh: ["API", "健康检查", "凭证"] },
        cta: { label: { en: "Open guide", zh: "打开指南" }, href: "/learn/verify-model-provider", variant: "secondary" },
      },
      {
        id: "first-run-traps",
        slug: "first-run-traps",
        title: { en: "First-run Setup Traps to Avoid", zh: "首次搭建最常见的陷阱" },
        summary: {
          en: "A checklist of mistakes that make a fresh setup look broken when it is actually just incomplete.",
          zh: "一份检查清单，帮你区分“系统真坏了”和“只是还没配完整”。",
        },
        meta: { en: "Beginner · 11 min", zh: "入门 · 11 分钟" },
        tags: { en: ["Checklist", "First run", "Debugging"], zh: ["检查清单", "首次运行", "排错"] },
        cta: { label: { en: "Open guide", zh: "打开指南" }, href: "/learn/first-run-traps", variant: "secondary" },
      },
    ],
  },
  {
    id: "skills-workflow-design",
    label: { en: "Skills & Workflow Design", zh: "技能与工作流设计" },
    intro: {
      en: "Move from isolated successful commands to workflows that can be understood, monitored, and reused.",
      zh: "从一次次偶然成功的命令，走向能被理解、监控和复用的工作流。",
    },
    tutorials: [
      {
        id: "choose-safer-starter-skills",
        slug: "choose-safer-starter-skills",
        title: { en: "How to Choose Safer Starter Skills", zh: "如何选择更安全的入门技能" },
        summary: {
          en: "Start with narrow, inspectable skills before you hand the system anything high impact.",
          zh: "先从范围窄、结果可检查的技能开始，不要一上来就交付高风险任务。",
        },
        meta: { en: "Intermediate · 9 min", zh: "进阶 · 9 分钟" },
        tags: { en: ["Skills", "Safety", "Starter scope"], zh: ["技能", "安全性", "入门范围"] },
        cta: { label: { en: "Read tutorial", zh: "阅读教程" }, href: "/learn/choose-safer-starter-skills", variant: "secondary" },
      },
      {
        id: "design-first-workflow",
        slug: "design-first-workflow",
        title: { en: "Design a First Workflow That Is Small Enough", zh: "设计一个范围足够小的首个工作流" },
        summary: {
          en: "Use narrow goals, short loops, and inspectable outputs so failures stay diagnosable.",
          zh: "用明确目标、短反馈回路和可检查输出，把失败保持在可定位的范围内。",
        },
        meta: { en: "Intermediate · 12 min", zh: "进阶 · 12 分钟" },
        tags: { en: ["Workflow", "Narrow scope", "Feedback loop"], zh: ["工作流", "缩小范围", "反馈回路"] },
        cta: { label: { en: "Read tutorial", zh: "阅读教程" }, href: "/learn/design-first-workflow", variant: "secondary" },
      },
      {
        id: "observability-before-scale",
        slug: "observability-before-scale",
        title: { en: "Observability Before Scale", zh: "扩展之前先建立可观测性" },
        summary: {
          en: "Add logs, checkpoints, and inspection points before you add more channels or more automation.",
          zh: "在增加渠道和自动化之前，先把日志、检查点和观察位补齐。",
        },
        meta: { en: "Intermediate · 8 min", zh: "进阶 · 8 分钟" },
        tags: { en: ["Observability", "Logs", "Scale"], zh: ["可观测性", "日志", "扩展"] },
        cta: { label: { en: "Read tutorial", zh: "阅读教程" }, href: "/learn/observability-before-scale", variant: "secondary" },
      },
    ],
  },
  {
    id: "chinese-ecosystem",
    label: { en: "Chinese Ecosystem", zh: "中文生态" },
    intro: {
      en: "Use this section when your real working environment is Feishu, DingTalk, Chinese docs, and localized cloud tooling.",
      zh: "如果你的真实工作环境是飞书、钉钉、中文文档和本地化云工具，就从这里开始看。",
    },
    tutorials: [
      {
        id: "feishu-friendly-workflows",
        slug: "feishu-friendly-workflows",
        title: { en: "Feishu-friendly Workflow Patterns", zh: "适合飞书的工作流模式" },
        summary: {
          en: "Learn which types of updates, summaries, and internal briefings fit naturally into Feishu.",
          zh: "了解哪些更新、摘要和内部简报类型最适合落在飞书里。",
        },
        meta: { en: "Intermediate · 7 min", zh: "进阶 · 7 分钟" },
        tags: { en: ["Feishu", "Internal comms", "Workflow"], zh: ["飞书", "内部协作", "工作流"] },
        cta: { label: { en: "Read pattern", zh: "查看模式" }, href: "/learn/feishu-friendly-workflows", variant: "secondary" },
      },
      {
        id: "localized-deployment-assumptions",
        slug: "localized-deployment-assumptions",
        title: { en: "Localized Deployment Assumptions", zh: "本地化部署时的默认假设" },
        summary: {
          en: "A practical list of assumptions that change when you deploy in Chinese cloud and tooling environments.",
          zh: "一份实用清单，说明在中文云环境和工具链里哪些默认假设会发生变化。",
        },
        meta: { en: "Intermediate · 10 min", zh: "进阶 · 10 分钟" },
        tags: { en: ["Localization", "Cloud", "Assumptions"], zh: ["本地化", "云环境", "默认假设"] },
        cta: { label: { en: "Read pattern", zh: "查看模式" }, href: "/learn/localized-deployment-assumptions", variant: "secondary" },
      },
      {
        id: "bilingual-collaboration-habits",
        slug: "bilingual-collaboration-habits",
        title: { en: "Bilingual Collaboration Habits That Help", zh: "对双语协作最有帮助的习惯" },
        summary: {
          en: "Reduce friction across Chinese and English contexts without forcing every workflow into literal translation.",
          zh: "减少中英文协作摩擦，但不把每个流程都做成机械双语对照。",
        },
        meta: { en: "Intermediate · 6 min", zh: "进阶 · 6 分钟" },
        tags: { en: ["Bilingual", "Team habits", "Collaboration"], zh: ["双语协作", "团队习惯", "协同"] },
        cta: { label: { en: "Read pattern", zh: "查看模式" }, href: "/learn/bilingual-collaboration-habits", variant: "secondary" },
      },
    ],
  },
  {
    id: "advanced-config",
    label: { en: "Advanced Config", zh: "进阶配置" },
    intro: {
      en: "Go beyond the defaults. These guides cover workspace behavior rules, memory persistence, and parallel task execution — the three levers that separate a capable setup from a basic one.",
      zh: "超越默认配置。这三篇指南覆盖工作区行为规则、记忆持久化和并行任务执行——正是这三个关键点区分了「能用」和「真好用」。",
    },
    tutorials: [
      {
        id: "agents-md-workspace-guide",
        slug: "agents-md-workspace-guide",
        title: { en: "Write an AGENTS.md That Actually Works", zh: "写一份真正有效的 AGENTS.md" },
        summary: {
          en: "Give your agent a behavior constitution: session startup order, memory write rules, safety boundaries, and a copy-paste template to start from.",
          zh: "给你的 AI 写一部行为宪法：会话启动顺序、记忆写入规范、安全边界，以及一份可直接复制使用的模板。",
        },
        meta: { en: "Advanced · 12 min", zh: "高级 · 12 分钟" },
        tags: {
          en: ["AGENTS.md", "Workspace", "Behavior rules"],
          zh: ["AGENTS.md", "工作区", "行为规则"],
        },
        cta: { label: { en: "Read guide", zh: "阅读指南" }, href: "/learn/agents-md-workspace-guide", variant: "secondary" },
      },
      {
        id: "memory-system-and-flush",
        slug: "memory-system-and-flush",
        title: { en: "Memory System in Practice: Flush, Logs, and Search", zh: "记忆系统实战：Flush、结构化日志与语义检索" },
        summary: {
          en: "Configure memoryFlush to survive context compaction, write structured logs that memorySearch can actually find, and set up a free embedding API for semantic recall.",
          zh: "配置 memoryFlush 应对上下文压缩，写出 memorySearch 能高命中率检索的结构化日志，并接入免费 embedding API 实现语义检索。",
        },
        meta: { en: "Advanced · 14 min", zh: "高级 · 14 分钟" },
        tags: {
          en: ["Memory", "memoryFlush", "memorySearch"],
          zh: ["记忆系统", "memoryFlush", "语义检索"],
        },
        cta: { label: { en: "Read guide", zh: "阅读指南" }, href: "/learn/memory-system-and-flush", variant: "secondary" },
      },
      {
        id: "sub-agent-parallel-tasks",
        slug: "sub-agent-parallel-tasks",
        title: { en: "Sub-Agents: Turn One Thread Into a Team", zh: "子 Agent：把单线程变成一支团队" },
        summary: {
          en: "Learn how to dispatch parallel sub-agents, pick the right model tier for each task, write task descriptions that actually work, and respect concurrency limits.",
          zh: "学会派发并行子 Agent、为每种任务选择合适的模型档位、写出真正有效的任务描述，并了解并发上限怎么管。",
        },
        meta: { en: "Advanced · 11 min", zh: "高级 · 11 分钟" },
        tags: {
          en: ["Sub-agents", "Parallel", "Model tiers"],
          zh: ["子 Agent", "并行任务", "模型分级"],
        },
        cta: { label: { en: "Read guide", zh: "阅读指南" }, href: "/learn/sub-agent-parallel-tasks", variant: "secondary" },
      },
    ],
  },
  {
    id: "advanced-troubleshooting",
    label: { en: "Advanced Troubleshooting", zh: "进阶排错" },
    intro: {
      en: "Once the basic first-run checks are done, use these guides to narrow deeper failures without random guessing.",
      zh: "当首次运行的基础检查都做过之后，再用这些指南继续缩小更深层的问题范围。",
    },
    tutorials: [
      {
        id: "read-logs-without-guessing",
        slug: "read-logs-without-guessing",
        title: { en: "How to Read Logs Without Guessing", zh: "如何读日志而不是猜日志" },
        summary: {
          en: "Use a repeatable order for reading symptoms, environment, and error messages before you change config.",
          zh: "先按固定顺序看症状、环境和报错，再改配置，避免越改越乱。",
        },
        meta: { en: "Intermediate · 8 min", zh: "进阶 · 8 分钟" },
        tags: { en: ["Logs", "Diagnosis", "Method"], zh: ["日志", "诊断", "方法"] },
        cta: { label: { en: "Open recovery guide", zh: "打开恢复指南" }, href: "/learn/read-logs-without-guessing", variant: "secondary" },
      },
      {
        id: "permission-and-sandbox-failures",
        slug: "permission-and-sandbox-failures",
        title: { en: "Permission and Sandbox Failures", zh: "权限与沙箱失败怎么查" },
        summary: {
          en: "Recognize when the issue is not your workflow logic but the environment boundary around it.",
          zh: "识别什么时候问题不在工作流逻辑，而在它周围的权限和运行边界。",
        },
        meta: { en: "Intermediate · 9 min", zh: "进阶 · 9 分钟" },
        tags: { en: ["Permissions", "Sandbox", "Environment"], zh: ["权限", "沙箱", "环境问题"] },
        cta: { label: { en: "Open recovery guide", zh: "打开恢复指南" }, href: "/learn/permission-and-sandbox-failures", variant: "secondary" },
      },
      {
        id: "browser-automation-instability",
        slug: "browser-automation-instability",
        title: { en: "When Browser Automation Feels Unstable", zh: "浏览器自动化不稳定时怎么办" },
        summary: {
          en: "A practical way to separate flaky environment issues from broken selectors and bad task design.",
          zh: "用一个更实用的办法，区分环境抖动、选择器失效和任务设计不当。",
        },
        meta: { en: "Advanced · 11 min", zh: "高级 · 11 分钟" },
        tags: { en: ["Browser automation", "Flaky", "Debugging"], zh: ["浏览器自动化", "不稳定", "调试"] },
        cta: { label: { en: "Open recovery guide", zh: "打开恢复指南" }, href: "/learn/browser-automation-instability", variant: "secondary" },
      },
    ],
  },
  {
    id: "usage-tips",
    label: { en: "Usage Tips", zh: "使用技巧" },
    intro: {
      en: "Small operating habits make a bigger difference than chasing a perfect setup too early.",
      zh: "很多时候，真正拉开差距的是日常使用习惯，而不是过早追求完美配置。",
    },
    tutorials: [
      {
        id: "keep-workflows-narrow",
        slug: "keep-workflows-narrow",
        title: { en: "Keep Early Workflows Narrow", zh: "把早期工作流收得更窄" },
        summary: {
          en: "The fastest way to feel progress is to reduce scope until one workflow becomes reliable.",
          zh: "最快建立正反馈的方法，是不断缩小范围，直到一个工作流真正稳定。",
        },
        meta: { en: "Beginner · 5 min", zh: "入门 · 5 分钟" },
        tags: { en: ["Scope", "Reliability", "Habits"], zh: ["范围控制", "稳定性", "使用习惯"] },
        cta: { label: { en: "Read tip", zh: "查看技巧" }, href: "/learn/keep-workflows-narrow", variant: "secondary" },
      },
      {
        id: "save-good-prompts-and-outputs",
        slug: "save-good-prompts-and-outputs",
        title: { en: "Save Good Prompts and Good Outputs", zh: "保存好用的提示词和输出样例" },
        summary: {
          en: "Treat prompt/output pairs as working assets so later workflow design becomes easier.",
          zh: "把有效的提示词和输出样例当成资产积累，后面设计工作流会轻松很多。",
        },
        meta: { en: "Beginner · 6 min", zh: "入门 · 6 分钟" },
        tags: { en: ["Prompts", "Examples", "Reuse"], zh: ["提示词", "案例积累", "复用"] },
        cta: { label: { en: "Read tip", zh: "查看技巧" }, href: "/learn/save-good-prompts-and-outputs", variant: "secondary" },
      },
      {
        id: "review-before-expanding",
        slug: "review-before-expanding",
        title: { en: "Review Before You Expand", zh: "扩展之前先复盘" },
        summary: {
          en: "Before adding more channels or tasks, review what already worked and what still fails repeatedly.",
          zh: "在加更多渠道和任务前，先复盘什么已经稳定、什么还在反复失败。",
        },
        meta: { en: "Beginner · 7 min", zh: "入门 · 7 分钟" },
        tags: { en: ["Review", "Expansion", "Workflow ops"], zh: ["复盘", "扩展", "工作流运营"] },
        cta: { label: { en: "Read tip", zh: "查看技巧" }, href: "/learn/review-before-expanding", variant: "secondary" },
      },
    ],
  },
];
