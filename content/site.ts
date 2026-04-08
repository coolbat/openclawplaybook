import type { CtaLink, LocalizedList, LocalizedText } from "@/content/types";

export type QuickStartEntry = {
  id: string;
  slug: string;
  step: string;
  title: LocalizedText;
  summary: LocalizedText;
  bullets: LocalizedList;
  cta: CtaLink;
};

export type FaqEntry = {
  question: LocalizedText;
  answer: LocalizedText;
};

export const homeHero = {
  kicker: "OPENCLAW QUICK START",
  title: {
    en: "Start OpenClaw from the homepage, not from a maze of docs.",
    zh: "别从文档迷宫开始，直接在首页完成 OpenClaw 入门。",
  },
  summary: {
    en: "A bilingual OpenClaw learning hub for beginners who want the shortest path from setup to a real workflow.",
    zh: "一个面向新手的 OpenClaw 双语学习站，目标是把你从环境配置直接带到第一个真实工作流。",
  },
  ctas: [
    {
      label: { en: "Start the 5-step path", zh: "开始 5 步路径" },
      href: "#quick-start",
      variant: "primary" as const,
    },
    {
      label: { en: "Build stronger foundations", zh: "补强基础认知" },
      href: "/learn",
      variant: "secondary" as const,
    },
    {
      label: { en: "First run failed?", zh: "首次运行失败？" },
      href: "/troubleshoot",
      variant: "link" as const,
    },
  ] satisfies CtaLink[],
  sideTitle: {
    en: "What you should accomplish in your first 30 minutes",
    zh: "前 30 分钟应该完成什么",
  },
  sideItems: [
    {
      en: "Understand what OpenClaw is actually good at.",
      zh: "先搞清楚 OpenClaw 真正擅长什么。",
    },
    {
      en: "Install the minimal viable setup and verify it works.",
      zh: "完成最小可用安装，并验证它真的能跑。",
    },
    {
      en: "Connect one chat channel and send one successful test loop.",
      zh: "接通一个聊天渠道，并跑通一次测试消息闭环。",
    },
    {
      en: "Run one starter workflow that produces useful output.",
      zh: "跑通一个能产出结果的入门工作流。",
    },
  ] satisfies LocalizedText[],
};

export const quickStartIntro = {
  title: {
    en: "Quick Start",
    zh: "Quick Start",
  },
  summary: {
    en: "This is the shortest beginner path we can recommend without pretending OpenClaw is simpler than it is.",
    zh: "这是目前最短、同时不过度简化 OpenClaw 复杂度的新手路径。",
  },
};

export const quickStartEntries: QuickStartEntry[] = [
  {
    id: "what-is-openclaw",
    slug: "what-is-openclaw",
    step: "01",
    title: {
      en: "What Is OpenClaw",
      zh: "什么是 OpenClaw",
    },
    summary: {
      en: "Treat it as a workflow execution system, not just another AI chat shell.",
      zh: "把它当成工作流执行系统，而不只是另一个 AI 聊天壳。",
    },
    bullets: {
      en: [
        "Useful when tasks are repeatable and channel-based.",
        "Skills matter because they expand what the system can do.",
        "The goal is a reliable loop, not one lucky prompt.",
      ],
      zh: [
        "它适合可重复、可通过渠道触发的任务。",
        "技能决定它能不能从聊天走向执行。",
        "目标是稳定闭环，而不是偶然跑通一次提示词。",
      ],
    },
    cta: {
      label: { en: "Open step guide", zh: "查看步骤详解" },
      href: "/quick-start/what-is-openclaw",
      variant: "secondary",
    },
  },
  {
    id: "deploy-install",
    slug: "deploy-install",
    step: "02",
    title: {
      en: "Deploy / Install",
      zh: "部署 / 安装",
    },
    summary: {
      en: "Pick the simplest path that lets you verify the system quickly.",
      zh: "选择最容易验证成功的路径，而不是一开始就追求完整架构。",
    },
    bullets: {
      en: [
        "Start local if you are still learning the system.",
        "Use one model provider first and verify credentials early.",
        "Do not add optional services before a basic health check passes.",
      ],
      zh: [
        "还在摸索阶段时，优先本地安装。",
        "先接入一个模型服务，并尽早验证凭证。",
        "在基础健康检查通过前，不要继续叠加可选服务。",
      ],
    },
    cta: {
      label: { en: "Open step guide", zh: "查看步骤详解" },
      href: "/quick-start/deploy-install",
      variant: "secondary",
    },
  },
  {
    id: "connect-channel",
    slug: "connect-channel",
    step: "03",
    title: {
      en: "Connect a Chat Channel",
      zh: "连接聊天渠道",
    },
    summary: {
      en: "Installation is not enough. The first real milestone is a working message loop.",
      zh: "只装好还不够。真正的第一个里程碑，是跑通消息闭环。",
    },
    bullets: {
      en: [
        "Choose one easy first channel such as Telegram or Feishu.",
        "Send one test message and confirm the bot responds.",
        "If the bot stays silent, debug the channel before adding skills.",
      ],
      zh: [
        "先选一个简单渠道，比如 Telegram 或飞书。",
        "发送一次测试消息，确认机器人有响应。",
        "如果机器人沉默，先把渠道问题查清，再装技能。",
      ],
    },
    cta: {
      label: { en: "Open step guide", zh: "查看步骤详解" },
      href: "/quick-start/connect-channel",
      variant: "secondary",
    },
  },
  {
    id: "starter-workflow",
    slug: "starter-workflow",
    step: "04",
    title: {
      en: "Run a Starter Workflow",
      zh: "运行入门工作流",
    },
    summary: {
      en: "Do one practical workflow before you optimize anything.",
      zh: "先跑通一个实用工作流，再谈优化和扩展。",
    },
    bullets: {
      en: [
        "Pick a workflow with short feedback loops.",
        "Prefer outputs you can inspect quickly, such as briefings or summaries.",
        "Keep scope small enough that failure is diagnosable.",
      ],
      zh: [
        "先选反馈周期短的工作流。",
        "优先选择易检查结果的任务，比如简报和摘要。",
        "把范围收小到出了问题也能快速定位。",
      ],
    },
    cta: {
      label: { en: "Open step guide", zh: "查看步骤详解" },
      href: "/quick-start/starter-workflow",
      variant: "primary",
    },
  },
  {
    id: "basic-troubleshooting",
    slug: "basic-troubleshooting",
    step: "05",
    title: {
      en: "Basic Troubleshooting",
      zh: "基础排错",
    },
    summary: {
      en: "Most first-run failures are verification failures, not mysterious platform bugs.",
      zh: "多数首次运行失败，本质上都是验证没做完，而不是神秘平台 bug。",
    },
    bullets: {
      en: [
        "Check channel pairing, process status, and API credentials first.",
        "Read logs before changing multiple variables at once.",
        "Route back into setup or templates once the symptom is clear.",
      ],
      zh: [
        "先查渠道配对、进程状态和 API 凭证。",
        "先看日志，不要一次改一堆变量。",
        "确认症状后，再回到 setup 或模板路径继续推进。",
      ],
    },
    cta: {
      label: { en: "Open step guide", zh: "查看步骤详解" },
      href: "/quick-start/basic-troubleshooting",
      variant: "secondary",
    },
  },
];

export const learnPreview = {
  title: {
    en: "Go deeper in Learn",
    zh: "在 Learn 里继续深入",
  },
  summary: {
    en: "After Quick Start, Learn becomes the resource hub for setup strategy, workflow design, Chinese ecosystem guidance, and advanced recovery paths.",
    zh: "完成 Quick Start 后，Learn 会承担更深层的学习任务，包括 setup 策略、工作流设计、中文生态指导和进阶排错。",
  },
  cards: [
    {
      title: { en: "Foundations", zh: "基础认知" },
      summary: {
        en: "Understand where OpenClaw creates leverage and where it does not.",
        zh: "理解 OpenClaw 的优势边界，知道它该做什么、不该做什么。",
      },
    },
    {
      title: { en: "Setup", zh: "环境搭建" },
      summary: {
        en: "Choose a minimal deployment path and validate each dependency early.",
        zh: "选择最小部署路径，并尽早验证每个依赖是否可用。",
      },
    },
    {
      title: { en: "Workflow Design", zh: "工作流设计" },
      summary: {
        en: "Combine channels, skills, and repeatable task structure into something dependable.",
        zh: "把渠道、技能和可重复任务结构组合成稳定可复用的系统。",
      },
    },
  ],
  cta: {
      label: { en: "Open Learn hub", zh: "进入 Learn 深入看" },
      href: "/learn",
      variant: "secondary" as const,
  },
};

export const templatePreview = {
  title: {
    en: "Starter templates that produce visible results",
    zh: "能快速看到结果的入门模板",
  },
  summary: {
    en: "Templates are here to reduce decision fatigue, not to hide how the system works.",
    zh: "模板的作用是降低选择成本，而不是把系统原理完全藏起来。",
  },
};

export const troubleshootPreview = {
  title: {
    en: "Troubleshoot by symptom, not by panic",
    zh: "按症状排错，而不是靠慌乱猜测",
  },
  summary: {
    en: "Use the symptom-first page when the bot is silent, the install failed, the model rejects requests, or skills stop doing useful work.",
    zh: "当机器人不回、安装失败、模型拒绝请求或技能失效时，直接走 symptom-first 排错路径。",
  },
  bullets: {
    en: ["Bot silent", "Install failed", "Invalid API key", "Skill not working"],
    zh: ["机器人不回", "安装失败", "API key 无效", "技能不工作"],
  },
  cta: {
    label: { en: "Use the recovery path", zh: "进入恢复路径" },
    href: "/troubleshoot",
    variant: "secondary" as const,
  },
};

export const homeFaq: FaqEntry[] = [
  {
    question: {
      en: "Is this site only for complete beginners?",
      zh: "这个站点只适合完全新手吗？",
    },
    answer: {
      en: "No. The homepage is tuned for first-run onboarding, but the rest of the site is useful once you want cleaner setup decisions, stronger workflows, or faster recovery.",
      zh: "不是。首页主要服务 first-run onboarding，但当你需要更稳的 setup 决策、更清晰的工作流设计或更快的恢复路径时，其他页面同样有用。",
    },
  },
  {
    question: {
      en: "Should I start from Learn or Templates?",
      zh: "我应该先看 Learn，还是先跑 Templates？",
    },
    answer: {
      en: "If the environment is not stable yet, stay with Quick Start and Learn. If the basics already work, templates are the fastest way to prove the system can produce something useful.",
      zh: "如果环境还没稳定下来，就先走 Quick Start 和 Learn；如果基础已经能跑，模板是最快证明系统真的能产生价值的方式。",
    },
  },
  {
    question: {
      en: "What is the fastest way to recover from a failed first run?",
      zh: "首次运行失败后，最快的恢复路径是什么？",
    },
    answer: {
      en: "Check process status, channel pairing, and model credentials first. Once the symptom is concrete, go to Troubleshoot instead of changing five settings at once.",
      zh: "先查进程状态、渠道配对和模型凭证。等症状更明确之后，再进入 Troubleshoot，而不是一口气改五个配置。",
    },
  },
];
