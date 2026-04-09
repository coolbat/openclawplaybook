import type { CtaLink, LocalizedList, LocalizedText } from "@/content/types";

export type SkillEntry = {
  slug: string;
  name: LocalizedText;
  summary: LocalizedText;
  installCmd: string;
  difficulty: LocalizedText;
  risk: LocalizedText;
  tags: LocalizedList;
  useCases: LocalizedList;
  starterFriendly: boolean;
  cta: CtaLink;
};

export type SkillTab = {
  id: string;
  label: LocalizedText;
  intro: LocalizedText;
  skills: SkillEntry[];
};

export const skillsIntro = {
  kicker: "CURATED SKILLS",
  title: {
    en: "Skills organized by what you want to automate.",
    zh: "按自动化目标组织的精选技能库。",
  },
  summary: {
    en: "Not a full marketplace. A curated set of skills organized by task category, with risk level and starter guidance so you can pick the right one without guessing.",
    zh: "不是全量商店，而是按任务类别精选的技能集合，附带风险等级和新手建议，让你不用猜就能选对。",
  },
};

export const skillTabs: SkillTab[] = [
  {
    id: "research",
    label: { en: "Research", zh: "调研" },
    intro: {
      en: "Skills for fetching, summarizing, and structuring information from the web and external sources.",
      zh: "用于从网络和外部来源抓取、摘要和结构化信息的技能。",
    },
    skills: [
      {
        slug: "web-fetch",
        name: { en: "web-fetch", zh: "web-fetch" },
        summary: {
          en: "Fetch and extract content from URLs. The most common first skill for any research or digest workflow.",
          zh: "从 URL 抓取并提取内容。几乎所有调研和简报工作流的第一个技能。",
        },
        installCmd: "clawhub install web-fetch",
        difficulty: { en: "Beginner", zh: "入门" },
        risk: { en: "Low risk", zh: "低风险" },
        tags: { en: ["Web", "Fetch", "Starter-friendly"], zh: ["网络", "抓取", "适合新手"] },
        useCases: {
          en: ["Daily news digest", "Competitor monitoring", "Link summarization"],
          zh: ["每日资讯简报", "竞品监控", "链接摘要"],
        },
        starterFriendly: true,
        cta: { label: { en: "Use in starter workflow", zh: "用于入门工作流" }, href: "/quick-start/starter-workflow", variant: "primary" },
      },
      {
        slug: "rss-reader",
        name: { en: "rss-reader", zh: "rss-reader" },
        summary: {
          en: "Subscribe to RSS feeds and pull structured entries on a schedule. Pairs well with digest templates.",
          zh: "订阅 RSS 源并按计划拉取结构化条目，与简报类模板配合效果最好。",
        },
        installCmd: "clawhub install rss-reader",
        difficulty: { en: "Beginner", zh: "入门" },
        risk: { en: "Low risk", zh: "低风险" },
        tags: { en: ["RSS", "Feeds", "Scheduled"], zh: ["RSS", "订阅源", "定时任务"] },
        useCases: {
          en: ["News aggregation", "Blog monitoring", "Release tracking"],
          zh: ["新闻聚合", "博客监控", "发布追踪"],
        },
        starterFriendly: true,
        cta: { label: { en: "Pair with digest template", zh: "搭配简报模板" }, href: "/templates", variant: "secondary" },
      },
      {
        slug: "search-web",
        name: { en: "search-web", zh: "search-web" },
        summary: {
          en: "Run search queries and return structured results. Useful when you need fresh results beyond a fixed feed.",
          zh: "执行搜索查询并返回结构化结果，适合需要超出固定订阅源的实时信息场景。",
        },
        installCmd: "clawhub install search-web",
        difficulty: { en: "Intermediate", zh: "进阶" },
        risk: { en: "Medium risk", zh: "中风险" },
        tags: { en: ["Search", "Live results", "Research"], zh: ["搜索", "实时结果", "调研"] },
        useCases: {
          en: ["Market research", "Trend detection", "Fact checking"],
          zh: ["市场调研", "趋势发现", "事实核查"],
        },
        starterFriendly: false,
        cta: { label: { en: "See research templates", zh: "查看调研模板" }, href: "/templates", variant: "secondary" },
      },
    ],
  },
  {
    id: "content",
    label: { en: "Content", zh: "内容" },
    intro: {
      en: "Skills for transforming raw material into drafts, summaries, outlines, and structured documents.",
      zh: "用于把原始素材转化为草稿、摘要、提纲和结构化文档的技能。",
    },
    skills: [
      {
        slug: "summarize",
        name: { en: "summarize", zh: "summarize" },
        summary: {
          en: "Condense long text into a structured summary with configurable length and format.",
          zh: "把长文本压缩成可配置长度和格式的结构化摘要。",
        },
        installCmd: "clawhub install summarize",
        difficulty: { en: "Beginner", zh: "入门" },
        risk: { en: "Low risk", zh: "低风险" },
        tags: { en: ["Summarization", "Text", "Starter-friendly"], zh: ["摘要", "文本处理", "适合新手"] },
        useCases: {
          en: ["Meeting notes", "Article digests", "Document briefings"],
          zh: ["会议纪要", "文章摘要", "文档简报"],
        },
        starterFriendly: true,
        cta: { label: { en: "Use in content workflow", zh: "用于内容工作流" }, href: "/templates", variant: "primary" },
      },
      {
        slug: "draft-writer",
        name: { en: "draft-writer", zh: "draft-writer" },
        summary: {
          en: "Generate a first draft from an outline or set of notes. Best used after you have a clear structure.",
          zh: "从提纲或笔记生成初稿，最好在结构已经清晰之后再用。",
        },
        installCmd: "clawhub install draft-writer",
        difficulty: { en: "Intermediate", zh: "进阶" },
        risk: { en: "Low risk", zh: "低风险" },
        tags: { en: ["Drafting", "Writing", "Content"], zh: ["起草", "写作", "内容生产"] },
        useCases: {
          en: ["Blog posts", "Internal docs", "Report sections"],
          zh: ["博客文章", "内部文档", "报告章节"],
        },
        starterFriendly: false,
        cta: { label: { en: "See content templates", zh: "查看内容模板" }, href: "/templates", variant: "secondary" },
      },
      {
        slug: "translate",
        name: { en: "translate", zh: "translate" },
        summary: {
          en: "Translate text between languages with context-aware output. Useful for bilingual team workflows.",
          zh: "在语言之间进行上下文感知的翻译，适合双语团队工作流。",
        },
        installCmd: "clawhub install translate",
        difficulty: { en: "Beginner", zh: "入门" },
        risk: { en: "Low risk", zh: "低风险" },
        tags: { en: ["Translation", "Bilingual", "Localization"], zh: ["翻译", "双语", "本地化"] },
        useCases: {
          en: ["Bilingual summaries", "Cross-team updates", "Localized briefings"],
          zh: ["双语摘要", "跨团队更新", "本地化简报"],
        },
        starterFriendly: true,
        cta: { label: { en: "See bilingual templates", zh: "查看双语模板" }, href: "/templates", variant: "secondary" },
      },
    ],
  },
  {
    id: "productivity",
    label: { en: "Productivity", zh: "效率" },
    intro: {
      en: "Skills for scheduling, reminders, task tracking, and reducing manual coordination overhead.",
      zh: "用于定时任务、提醒、任务追踪和减少人工协调成本的技能。",
    },
    skills: [
      {
        slug: "scheduler",
        name: { en: "scheduler", zh: "scheduler" },
        summary: {
          en: "Trigger workflows on a cron schedule. The backbone of any recurring automation.",
          zh: "按 cron 计划触发工作流，是所有周期性自动化的基础。",
        },
        installCmd: "clawhub install scheduler",
        difficulty: { en: "Beginner", zh: "入门" },
        risk: { en: "Low risk", zh: "低风险" },
        tags: { en: ["Scheduling", "Cron", "Automation"], zh: ["定时", "Cron", "自动化"] },
        useCases: {
          en: ["Daily digests", "Weekly reports", "Recurring alerts"],
          zh: ["每日简报", "周报", "周期性告警"],
        },
        starterFriendly: true,
        cta: { label: { en: "Use in first workflow", zh: "用于第一条工作流" }, href: "/quick-start/starter-workflow", variant: "primary" },
      },
      {
        slug: "reminder",
        name: { en: "reminder", zh: "reminder" },
        summary: {
          en: "Send time-based reminders to a channel. Simple but high-value for recurring team coordination.",
          zh: "向渠道发送基于时间的提醒，简单但对周期性团队协调价值很高。",
        },
        installCmd: "clawhub install reminder",
        difficulty: { en: "Beginner", zh: "入门" },
        risk: { en: "Low risk", zh: "低风险" },
        tags: { en: ["Reminders", "Notifications", "Team"], zh: ["提醒", "通知", "团队"] },
        useCases: {
          en: ["Standup prompts", "Deadline alerts", "Check-in nudges"],
          zh: ["站会提醒", "截止日期告警", "定期 check-in"],
        },
        starterFriendly: true,
        cta: { label: { en: "See collaboration templates", zh: "查看协作模板" }, href: "/templates", variant: "secondary" },
      },
      {
        slug: "note-taker",
        name: { en: "note-taker", zh: "note-taker" },
        summary: {
          en: "Capture and structure freeform input into organized notes with tags and action items.",
          zh: "把自由输入整理成带标签和行动项的结构化笔记。",
        },
        installCmd: "clawhub install note-taker",
        difficulty: { en: "Beginner", zh: "入门" },
        risk: { en: "Low risk", zh: "低风险" },
        tags: { en: ["Notes", "Capture", "Organization"], zh: ["笔记", "记录", "整理"] },
        useCases: {
          en: ["Meeting capture", "Idea logging", "Action item extraction"],
          zh: ["会议记录", "想法记录", "行动项提取"],
        },
        starterFriendly: true,
        cta: { label: { en: "See meeting templates", zh: "查看会议模板" }, href: "/templates", variant: "secondary" },
      },
    ],
  },
  {
    id: "devops",
    label: { en: "DevOps", zh: "DevOps" },
    intro: {
      en: "Skills for monitoring, alerting, log analysis, and operational automation. Require more setup than starter skills.",
      zh: "用于监控、告警、日志分析和运维自动化的技能，比入门技能需要更多配置。",
    },
    skills: [
      {
        slug: "health-check",
        name: { en: "health-check", zh: "health-check" },
        summary: {
          en: "Poll service endpoints and report status. Pairs with alert templates for proactive monitoring.",
          zh: "轮询服务端点并报告状态，与告警模板配合实现主动监控。",
        },
        installCmd: "clawhub install health-check",
        difficulty: { en: "Intermediate", zh: "进阶" },
        risk: { en: "Low risk", zh: "低风险" },
        tags: { en: ["Monitoring", "Health", "DevOps"], zh: ["监控", "健康检查", "运维"] },
        useCases: {
          en: ["Uptime monitoring", "API availability", "Service status pages"],
          zh: ["可用性监控", "API 可达性", "服务状态页"],
        },
        starterFriendly: false,
        cta: { label: { en: "See monitoring templates", zh: "查看监控模板" }, href: "/templates", variant: "secondary" },
      },
      {
        slug: "log-parser",
        name: { en: "log-parser", zh: "log-parser" },
        summary: {
          en: "Extract patterns, errors, and anomalies from log files. Reduces manual log reading significantly.",
          zh: "从日志文件中提取模式、错误和异常，大幅减少人工读日志的工作量。",
        },
        installCmd: "clawhub install log-parser",
        difficulty: { en: "Intermediate", zh: "进阶" },
        risk: { en: "Medium risk", zh: "中风险" },
        tags: { en: ["Logs", "Parsing", "Ops"], zh: ["日志", "解析", "运维"] },
        useCases: {
          en: ["Error triage", "Incident analysis", "Pattern detection"],
          zh: ["错误初筛", "故障分析", "模式检测"],
        },
        starterFriendly: false,
        cta: { label: { en: "Pair with troubleshoot", zh: "搭配排错路径" }, href: "/troubleshoot", variant: "secondary" },
      },
      {
        slug: "shell-runner",
        name: { en: "shell-runner", zh: "shell-runner" },
        summary: {
          en: "Execute shell commands from a workflow. Powerful but requires careful permission scoping.",
          zh: "在工作流中执行 shell 命令，功能强大但需要仔细控制权限范围。",
        },
        installCmd: "clawhub install shell-runner",
        difficulty: { en: "Advanced", zh: "高级" },
        risk: { en: "High risk", zh: "高风险" },
        tags: { en: ["Shell", "Automation", "Requires permissions"], zh: ["Shell", "自动化", "需要权限"] },
        useCases: {
          en: ["Deployment scripts", "System maintenance", "Custom automation"],
          zh: ["部署脚本", "系统维护", "自定义自动化"],
        },
        starterFriendly: false,
        cta: { label: { en: "Read safety guide first", zh: "先读安全指南" }, href: "/learn/choose-safer-starter-skills", variant: "secondary" },
      },
    ],
  },
  {
    id: "communications",
    label: { en: "Communications", zh: "通讯" },
    intro: {
      en: "Skills for sending, routing, and formatting messages across channels.",
      zh: "用于在各渠道发送、路由和格式化消息的技能。",
    },
    skills: [
      {
        slug: "telegram-sender",
        name: { en: "telegram-sender", zh: "telegram-sender" },
        summary: {
          en: "Send formatted messages to a Telegram chat or channel. The most common output skill for EN users.",
          zh: "向 Telegram 聊天或频道发送格式化消息，是英文用户最常用的输出技能。",
        },
        installCmd: "clawhub install telegram-sender",
        difficulty: { en: "Beginner", zh: "入门" },
        risk: { en: "Low risk", zh: "低风险" },
        tags: { en: ["Telegram", "Messaging", "Output"], zh: ["Telegram", "消息", "输出"] },
        useCases: {
          en: ["Digest delivery", "Alert notifications", "Status updates"],
          zh: ["简报推送", "告警通知", "状态更新"],
        },
        starterFriendly: true,
        cta: { label: { en: "Connect channel first", zh: "先接通渠道" }, href: "/quick-start/connect-channel", variant: "primary" },
      },
      {
        slug: "feishu-sender",
        name: { en: "feishu-sender", zh: "feishu-sender" },
        summary: {
          en: "Send structured messages to Feishu groups or bots. The primary output skill for Chinese teams.",
          zh: "向飞书群组或机器人发送结构化消息，是中文团队最主要的输出技能。",
        },
        installCmd: "clawhub install feishu-sender",
        difficulty: { en: "Beginner", zh: "入门" },
        risk: { en: "Low risk", zh: "低风险" },
        tags: { en: ["Feishu", "Messaging", "China"], zh: ["飞书", "消息", "中文场景"] },
        useCases: {
          en: ["Team briefings", "Internal announcements", "Workflow outputs"],
          zh: ["团队简报", "内部通知", "工作流输出"],
        },
        starterFriendly: true,
        cta: { label: { en: "Best for Feishu teams", zh: "适合飞书团队" }, href: "/quick-start/connect-channel", variant: "primary" },
      },
      {
        slug: "webhook-sender",
        name: { en: "webhook-sender", zh: "webhook-sender" },
        summary: {
          en: "POST structured payloads to any webhook endpoint. Flexible but requires a receiving service.",
          zh: "向任意 webhook 端点发送结构化 payload，灵活但需要有接收服务。",
        },
        installCmd: "clawhub install webhook-sender",
        difficulty: { en: "Intermediate", zh: "进阶" },
        risk: { en: "Medium risk", zh: "中风险" },
        tags: { en: ["Webhook", "Integration", "Flexible"], zh: ["Webhook", "集成", "灵活"] },
        useCases: {
          en: ["Custom integrations", "Third-party services", "Event forwarding"],
          zh: ["自定义集成", "第三方服务", "事件转发"],
        },
        starterFriendly: false,
        cta: { label: { en: "See integration patterns", zh: "查看集成模式" }, href: "/learn", variant: "secondary" },
      },
    ],
  },
  {
    id: "chinese-ecosystem",
    label: { en: "Chinese Ecosystem", zh: "中文生态" },
    intro: {
      en: "Skills built for Chinese toolchains: Feishu, DingTalk, WeChat Work, and Chinese cloud providers.",
      zh: "专为中文工具链构建的技能：飞书、钉钉、企业微信和国内云服务商。",
    },
    skills: [
      {
        slug: "dingtalk-sender",
        name: { en: "dingtalk-sender", zh: "dingtalk-sender" },
        summary: {
          en: "Send messages and cards to DingTalk groups via webhook or bot API.",
          zh: "通过 webhook 或机器人 API 向钉钉群组发送消息和卡片。",
        },
        installCmd: "clawhub install dingtalk-sender",
        difficulty: { en: "Beginner", zh: "入门" },
        risk: { en: "Low risk", zh: "低风险" },
        tags: { en: ["DingTalk", "China", "Messaging"], zh: ["钉钉", "中文场景", "消息"] },
        useCases: {
          en: ["Team notifications", "Daily briefings", "Alert routing"],
          zh: ["团队通知", "每日简报", "告警路由"],
        },
        starterFriendly: true,
        cta: { label: { en: "See Chinese ecosystem guide", zh: "查看中文生态指南" }, href: "/learn/feishu-friendly-workflows", variant: "secondary" },
      },
      {
        slug: "wecom-sender",
        name: { en: "wecom-sender", zh: "wecom-sender" },
        summary: {
          en: "Push messages to WeCom (Enterprise WeChat) groups and bots.",
          zh: "向企业微信群组和机器人推送消息。",
        },
        installCmd: "clawhub install wecom-sender",
        difficulty: { en: "Beginner", zh: "入门" },
        risk: { en: "Low risk", zh: "低风险" },
        tags: { en: ["WeCom", "WeChat Work", "China"], zh: ["企业微信", "中文场景", "消息"] },
        useCases: {
          en: ["Internal announcements", "Alert delivery", "Status updates"],
          zh: ["内部公告", "告警推送", "状态更新"],
        },
        starterFriendly: true,
        cta: { label: { en: "See Chinese ecosystem guide", zh: "查看中文生态指南" }, href: "/learn/localized-deployment-assumptions", variant: "secondary" },
      },
      {
        slug: "cn-search",
        name: { en: "cn-search", zh: "cn-search" },
        summary: {
          en: "Search Chinese-language sources including Baidu, Weibo, and domestic news aggregators.",
          zh: "搜索中文来源，包括百度、微博和国内新闻聚合平台。",
        },
        installCmd: "clawhub install cn-search",
        difficulty: { en: "Intermediate", zh: "进阶" },
        risk: { en: "Medium risk", zh: "中风险" },
        tags: { en: ["Chinese search", "Localization", "Research"], zh: ["中文搜索", "本地化", "调研"] },
        useCases: {
          en: ["Chinese market research", "Domestic news monitoring", "Local trend tracking"],
          zh: ["中文市场调研", "国内新闻监控", "本地趋势追踪"],
        },
        starterFriendly: false,
        cta: { label: { en: "See research templates", zh: "查看调研模板" }, href: "/templates", variant: "secondary" },
      },
    ],
  },
];
