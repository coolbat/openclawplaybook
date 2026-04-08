import type { CtaLink, LocalizedList, LocalizedText } from "@/content/types";

export type TemplateEntry = {
  slug: string;
  title: LocalizedText;
  summary: LocalizedText;
  difficulty: LocalizedText;
  time: LocalizedText;
  risk: LocalizedText;
  tags: LocalizedList;
  channels: LocalizedList;
  recommendedFor: LocalizedText;
  cta: CtaLink;
};

export type TemplateTab = {
  id: string;
  label: LocalizedText;
  intro: LocalizedText;
  templates: TemplateEntry[];
};

export const templatesIntro = {
  kicker: "STARTER WORKFLOWS",
  title: {
    en: "Templates organized by the work you want done.",
    zh: "按工作目标组织的起步模板库。",
  },
  summary: {
    en: "Use Templates as a directory of practical starting points: briefings, content production, collaboration, research, monitoring, and Chinese ecosystem workflows.",
    zh: "把 Templates 当成一个可落地的起点目录：从信息简报、内容生产、团队协作、调研分析、监控告警到中文生态工作流，都按工作目标组织起来。",
  },
};

export const templateTabs: TemplateTab[] = [
  {
    id: "briefings",
    label: { en: "Briefings", zh: "信息简报" },
    intro: {
      en: "Short-loop workflows that turn noisy inputs into briefings people can scan and act on quickly.",
      zh: "把嘈杂输入整理成可快速阅读、可直接行动的信息简报，是最适合新手起步的一类模板。",
    },
    templates: [
      {
        slug: "daily-ai-news-digest",
        title: { en: "Daily AI News Digest", zh: "每日 AI 资讯简报" },
        summary: {
          en: "Collect key AI updates, remove noise, and deliver a concise internal digest.",
          zh: "抓取关键 AI 动态，去掉噪音，输出一份适合团队内部阅读的每日摘要。",
        },
        difficulty: { en: "Beginner", zh: "入门" },
        time: { en: "20 min", zh: "20 分钟" },
        risk: { en: "Low risk", zh: "低风险" },
        tags: {
          en: ["Digest", "Scheduled", "Starter-friendly"],
          zh: ["简报", "定时任务", "适合新手"],
        },
        channels: { en: ["Telegram", "Feishu", "Discord"], zh: ["Telegram", "飞书", "Discord"] },
        recommendedFor: {
          en: "People who want a visible result with a short feedback loop.",
          zh: "适合希望用一条短反馈链快速验证系统确实可用的人。",
        },
        cta: { label: { en: "Use as first workflow", zh: "作为第一条工作流" }, href: "/#quick-start", variant: "primary" },
      },
      {
        slug: "executive-morning-brief",
        title: { en: "Executive Morning Brief", zh: "管理层晨间简报" },
        summary: {
          en: "Bundle overnight signals, critical links, and action-worthy updates into one morning briefing.",
          zh: "把隔夜动态、关键链接和需要关注的变化打包成一份晨间 briefing。",
        },
        difficulty: { en: "Intermediate", zh: "进阶" },
        time: { en: "25 min", zh: "25 分钟" },
        risk: { en: "Low risk", zh: "低风险" },
        tags: { en: ["Briefing", "Leadership", "Morning"], zh: ["简报", "管理层", "晨报"] },
        channels: { en: ["Email", "Feishu"], zh: ["邮件", "飞书"] },
        recommendedFor: {
          en: "Teams that already have regular update rhythms and want cleaner information flow.",
          zh: "适合已经有固定汇报节奏、希望让信息流更干净的团队。",
        },
        cta: { label: { en: "See setup path", zh: "先看 setup 路径" }, href: "/learn", variant: "secondary" },
      },
      {
        slug: "incident-summary-brief",
        title: { en: "Incident Summary Brief", zh: "故障摘要简报" },
        summary: {
          en: "Turn raw alert context into a readable summary for stakeholders after an incident starts.",
          zh: "把原始告警上下文快速整理成利益相关方能读懂的故障摘要。",
        },
        difficulty: { en: "Intermediate", zh: "进阶" },
        time: { en: "18 min", zh: "18 分钟" },
        risk: { en: "Medium risk", zh: "中风险" },
        tags: { en: ["Incident", "Summary", "Ops"], zh: ["故障", "摘要", "运维"] },
        channels: { en: ["Slack", "Feishu"], zh: ["Slack", "飞书"] },
        recommendedFor: {
          en: "Ops or platform teams that need fast internal communication during incidents.",
          zh: "适合在故障处理中需要快速同步内部信息的运维或平台团队。",
        },
        cta: { label: { en: "Pair with monitoring", zh: "搭配监控类模板" }, href: "/templates", variant: "secondary" },
      },
    ],
  },
  {
    id: "content-production",
    label: { en: "Content Production", zh: "内容生产" },
    intro: {
      en: "Templates that turn raw source material into drafts, outlines, notes, and publishable structure.",
      zh: "这一类模板适合把原始素材转成草稿、提纲、摘要或更适合发布的结构。",
    },
    templates: [
      {
        slug: "podcast-show-notes",
        title: { en: "Podcast Show Notes Builder", zh: "播客 Show Notes 生成器" },
        summary: {
          en: "Turn audio transcripts or rough notes into structured show notes with timestamps and highlights.",
          zh: "把转录稿或杂乱笔记整理成带时间点和亮点摘要的 show notes。",
        },
        difficulty: { en: "Beginner", zh: "入门" },
        time: { en: "15 min", zh: "15 分钟" },
        risk: { en: "Low risk", zh: "低风险" },
        tags: { en: ["Content", "Notes", "Audio"], zh: ["内容", "笔记", "音频"] },
        channels: { en: ["Notion", "Feishu Docs"], zh: ["Notion", "飞书文档"] },
        recommendedFor: {
          en: "Creators who want a reusable output format from recurring media inputs.",
          zh: "适合希望把重复出现的媒体内容整理成可复用结构的创作者。",
        },
        cta: { label: { en: "Use as content starter", zh: "作为内容起点" }, href: "/learn", variant: "secondary" },
      },
      {
        slug: "research-to-article-draft",
        title: { en: "Research to Article Draft", zh: "调研到文章草稿" },
        summary: {
          en: "Convert collected links and notes into a first article draft with a usable structure.",
          zh: "把收集到的链接和笔记整理成一版结构完整、可继续编辑的文章草稿。",
        },
        difficulty: { en: "Intermediate", zh: "进阶" },
        time: { en: "30 min", zh: "30 分钟" },
        risk: { en: "Medium risk", zh: "中风险" },
        tags: { en: ["Drafting", "Research", "Writing"], zh: ["草稿", "调研", "写作"] },
        channels: { en: ["Google Docs", "Notion"], zh: ["Google Docs", "Notion"] },
        recommendedFor: {
          en: "Writers who already have source material but want a faster first draft.",
          zh: "适合已经有原始素材、但希望加快初稿产出的写作者。",
        },
        cta: { label: { en: "Build stronger foundations", zh: "先补基础认知" }, href: "/learn", variant: "secondary" },
      },
      {
        slug: "outline-and-key-points",
        title: { en: "Outline and Key Points Generator", zh: "提纲与核心观点生成器" },
        summary: {
          en: "Generate a clean outline and key arguments before you commit to a full piece.",
          zh: "在正式动笔之前，先生成清晰提纲和核心观点结构。",
        },
        difficulty: { en: "Beginner", zh: "入门" },
        time: { en: "12 min", zh: "12 分钟" },
        risk: { en: "Low risk", zh: "低风险" },
        tags: { en: ["Outline", "Writing", "Planning"], zh: ["提纲", "写作", "规划"] },
        channels: { en: ["Notion", "Docs"], zh: ["Notion", "文档"] },
        recommendedFor: {
          en: "Anyone who wants a lower-risk way to start content workflows.",
          zh: "适合想用低风险方式开启内容型工作流的人。",
        },
        cta: { label: { en: "Start with this", zh: "从这个开始" }, href: "/#quick-start", variant: "primary" },
      },
    ],
  },
  {
    id: "team-collaboration",
    label: { en: "Team Collaboration", zh: "团队协作" },
    intro: {
      en: "Templates that fit recurring internal communication: updates, summaries, handoffs, and team visibility.",
      zh: "适合团队内部反复使用的协作模板，包括同步、交接、摘要和团队可见性增强。",
    },
    templates: [
      {
        slug: "feishu-ai-briefing-bot",
        title: { en: "Feishu AI Briefing Bot", zh: "飞书 AI 简报机器人" },
        summary: {
          en: "Push structured updates into Feishu so your workflow fits an existing team rhythm.",
          zh: "把结构化更新推送到飞书，让工作流自然融入既有团队节奏。",
        },
        difficulty: { en: "Beginner", zh: "入门" },
        time: { en: "25 min", zh: "25 分钟" },
        risk: { en: "Low risk", zh: "低风险" },
        tags: { en: ["Feishu", "Internal updates", "Collaboration"], zh: ["飞书", "内部更新", "协作"] },
        channels: { en: ["Feishu"], zh: ["飞书"] },
        recommendedFor: {
          en: "Chinese teams that want their first workflow to feel native instead of bolted on.",
          zh: "适合希望第一条工作流就贴近中文办公环境的团队。",
        },
        cta: { label: { en: "Best for Feishu teams", zh: "适合飞书团队" }, href: "/learn", variant: "primary" },
      },
      {
        slug: "meeting-notes-dispatcher",
        title: { en: "Meeting Notes Dispatcher", zh: "会议纪要分发器" },
        summary: {
          en: "Transform raw notes into a structured recap with actions, owners, and next steps.",
          zh: "把原始会议记录转成带负责人、行动项和下一步的结构化纪要。",
        },
        difficulty: { en: "Beginner", zh: "入门" },
        time: { en: "15 min", zh: "15 分钟" },
        risk: { en: "Low risk", zh: "低风险" },
        tags: { en: ["Meetings", "Notes", "Handoffs"], zh: ["会议", "纪要", "交接"] },
        channels: { en: ["Email", "Feishu", "Slack"], zh: ["邮件", "飞书", "Slack"] },
        recommendedFor: {
          en: "Teams that lose action items after meetings or rely on messy manual recaps.",
          zh: "适合会后行动项经常丢失、纪要整理依赖人工拼接的团队。",
        },
        cta: { label: { en: "Use for internal rhythm", zh: "用于内部节奏" }, href: "/templates", variant: "secondary" },
      },
      {
        slug: "weekly-team-update",
        title: { en: "Weekly Team Update Generator", zh: "每周团队更新生成器" },
        summary: {
          en: "Aggregate scattered inputs into one consistent weekly team summary.",
          zh: "把分散输入整合成一份稳定格式的团队周报摘要。",
        },
        difficulty: { en: "Intermediate", zh: "进阶" },
        time: { en: "22 min", zh: "22 分钟" },
        risk: { en: "Low risk", zh: "低风险" },
        tags: { en: ["Weekly update", "Reporting", "Internal"], zh: ["周报", "汇报", "内部协作"] },
        channels: { en: ["Email", "Notion", "Feishu"], zh: ["邮件", "Notion", "飞书"] },
        recommendedFor: {
          en: "Managers or operators who want less manual status collection every week.",
          zh: "适合希望减少每周人工收集团队进度成本的管理者或运营角色。",
        },
        cta: { label: { en: "See collaboration workflows", zh: "查看协作类模板" }, href: "/templates", variant: "secondary" },
      },
    ],
  },
  {
    id: "research-analysis",
    label: { en: "Research Analysis", zh: "调研分析" },
    intro: {
      en: "Templates for collecting, comparing, and structuring signals before a decision or insight writeup.",
      zh: "适合在做决策、写结论之前，先把外部信号、竞品信息和资料整理成更易分析的结构。",
    },
    templates: [
      {
        slug: "competitor-signal-scanner",
        title: { en: "Competitor Signal Scanner", zh: "竞品动态扫描器" },
        summary: {
          en: "Track product, launch, and messaging changes across selected competitors on a regular cadence.",
          zh: "定期跟踪指定竞品在产品、发布和对外表达上的变化。",
        },
        difficulty: { en: "Intermediate", zh: "进阶" },
        time: { en: "28 min", zh: "28 分钟" },
        risk: { en: "Medium risk", zh: "中风险" },
        tags: { en: ["Competitors", "Signals", "Research"], zh: ["竞品", "信号", "调研"] },
        channels: { en: ["Notion", "Docs", "Email"], zh: ["Notion", "文档", "邮件"] },
        recommendedFor: {
          en: "Product or strategy teams that need repeated external scanning without manual busywork.",
          zh: "适合需要持续外部扫描、但不想把时间花在手工搬运上的产品或战略团队。",
        },
        cta: { label: { en: "Use for ongoing tracking", zh: "用于持续跟踪" }, href: "/learn", variant: "secondary" },
      },
      {
        slug: "paper-summary-pipeline",
        title: { en: "Paper Summary Pipeline", zh: "论文摘要流水线" },
        summary: {
          en: "Turn selected papers into concise takeaways, relevance notes, and team-shareable summaries.",
          zh: "把选定论文整理成简洁要点、相关性说明和便于团队分享的摘要。",
        },
        difficulty: { en: "Intermediate", zh: "进阶" },
        time: { en: "24 min", zh: "24 分钟" },
        risk: { en: "Low risk", zh: "低风险" },
        tags: { en: ["Papers", "Learning", "Summaries"], zh: ["论文", "学习", "摘要"] },
        channels: { en: ["Notion", "Feishu Docs"], zh: ["Notion", "飞书文档"] },
        recommendedFor: {
          en: "Teams that want reading output to become reusable internal knowledge instead of isolated reading.",
          zh: "适合希望把阅读结果沉淀成团队知识、而不是停留在个人阅读记录里的团队。",
        },
        cta: { label: { en: "Pair with Learn hub", zh: "搭配 Learn 使用" }, href: "/learn", variant: "secondary" },
      },
      {
        slug: "customer-signal-roundup",
        title: { en: "Customer Signal Roundup", zh: "客户反馈信号汇总" },
        summary: {
          en: "Aggregate scattered user feedback into themes, representative quotes, and follow-up questions.",
          zh: "把零散的用户反馈聚合成主题、代表性观点和后续追问方向。",
        },
        difficulty: { en: "Beginner", zh: "入门" },
        time: { en: "18 min", zh: "18 分钟" },
        risk: { en: "Low risk", zh: "低风险" },
        tags: { en: ["Feedback", "Themes", "Research ops"], zh: ["反馈", "主题聚类", "调研运营"] },
        channels: { en: ["Notion", "Slack"], zh: ["Notion", "Slack"] },
        recommendedFor: {
          en: "Teams that collect feedback in many places and need a simple weekly synthesis.",
          zh: "适合反馈来源很多、需要一份周期性整合视图的团队。",
        },
        cta: { label: { en: "Use as analysis starter", zh: "作为分析起点" }, href: "/#quick-start", variant: "primary" },
      },
    ],
  },
  {
    id: "monitoring-alerts",
    label: { en: "Monitoring Alerts", zh: "监控告警" },
    intro: {
      en: "Operational templates that watch systems, summarize incidents, and push high-signal alerts into the right channel.",
      zh: "适合监控系统状态、整理故障上下文，并把高价值告警推送到正确渠道的运维模板。",
    },
    templates: [
      {
        slug: "server-health-alert-bot",
        title: { en: "Server Health Alert Bot", zh: "服务器健康告警机器人" },
        summary: {
          en: "Monitor service health and send alerts before small issues become outages.",
          zh: "监控服务健康状态，在小问题扩大之前及时发出告警。",
        },
        difficulty: { en: "Intermediate", zh: "进阶" },
        time: { en: "30 min", zh: "30 分钟" },
        risk: { en: "Medium risk", zh: "中风险" },
        tags: { en: ["Monitoring", "Alerts", "DevOps"], zh: ["监控", "告警", "运维"] },
        channels: { en: ["Telegram", "Feishu"], zh: ["Telegram", "飞书"] },
        recommendedFor: {
          en: "Developers who already finished the basics and want one practical automation with real stakes.",
          zh: "适合已经完成基础配置、希望快速搭一个真实有价值自动化的开发者。",
        },
        cta: { label: { en: "Do setup before this", zh: "先完成 setup 再来" }, href: "/learn", variant: "secondary" },
      },
      {
        slug: "error-log-triage-bot",
        title: { en: "Error Log Triage Bot", zh: "错误日志初筛机器人" },
        summary: {
          en: "Condense noisy logs into likely categories, severity hints, and first-pass investigation notes.",
          zh: "把嘈杂日志压缩成问题类别、严重程度提示和首轮排查笔记。",
        },
        difficulty: { en: "Intermediate", zh: "进阶" },
        time: { en: "26 min", zh: "26 分钟" },
        risk: { en: "Medium risk", zh: "中风险" },
        tags: { en: ["Logs", "Triage", "Ops"], zh: ["日志", "初筛", "运维"] },
        channels: { en: ["Slack", "Feishu"], zh: ["Slack", "飞书"] },
        recommendedFor: {
          en: "Teams that need faster first-pass diagnosis before a human takes over.",
          zh: "适合需要更快做出首轮诊断、再由人工接手处理的团队。",
        },
        cta: { label: { en: "Pair with troubleshooting", zh: "搭配排错路径" }, href: "/troubleshoot", variant: "secondary" },
      },
      {
        slug: "uptime-status-roundup",
        title: { en: "Uptime Status Roundup", zh: "运行状态汇总器" },
        summary: {
          en: "Combine health checks and service status into a readable update for internal stakeholders.",
          zh: "把多个健康检查和服务状态整合成一份内部可读的运行状态更新。",
        },
        difficulty: { en: "Beginner", zh: "入门" },
        time: { en: "16 min", zh: "16 分钟" },
        risk: { en: "Low risk", zh: "低风险" },
        tags: { en: ["Status", "Reporting", "Infra"], zh: ["状态", "汇报", "基础设施"] },
        channels: { en: ["Email", "Feishu", "Discord"], zh: ["邮件", "飞书", "Discord"] },
        recommendedFor: {
          en: "Infra teams that want less manual stitching when sharing system state internally.",
          zh: "适合希望减少人工拼接系统状态摘要的基础设施团队。",
        },
        cta: { label: { en: "Use for internal visibility", zh: "用于内部可见性" }, href: "/templates", variant: "secondary" },
      },
    ],
  },
  {
    id: "chinese-ecosystem",
    label: { en: "Chinese Ecosystem", zh: "中文生态" },
    intro: {
      en: "Templates that assume Feishu-first collaboration, Chinese toolchains, and localized workflow expectations.",
      zh: "这一类模板默认你工作在飞书优先、中文工具链和本地化协作环境之中。",
    },
    templates: [
      {
        slug: "feishu-internal-announcement",
        title: { en: "Feishu Internal Announcement Flow", zh: "飞书内部通知流" },
        summary: {
          en: "Turn internal updates into concise Feishu-ready announcements with a consistent structure.",
          zh: "把内部更新整理成更适合飞书发布的结构化通知。",
        },
        difficulty: { en: "Beginner", zh: "入门" },
        time: { en: "14 min", zh: "14 分钟" },
        risk: { en: "Low risk", zh: "低风险" },
        tags: { en: ["Feishu", "Announcements", "China"], zh: ["飞书", "通知", "中文场景"] },
        channels: { en: ["Feishu"], zh: ["飞书"] },
        recommendedFor: {
          en: "Teams that operate mainly in Feishu and want cleaner recurring communication.",
          zh: "适合主要在飞书里运转、希望把周期性内部通知标准化的团队。",
        },
        cta: { label: { en: "Best for CN teams", zh: "适合中文团队" }, href: "/learn", variant: "primary" },
      },
      {
        slug: "china-tooling-setup-brief",
        title: { en: "China Tooling Setup Brief", zh: "中文工具链 setup 简报" },
        summary: {
          en: "Summarize setup constraints and deployment assumptions for Chinese cloud and tooling contexts.",
          zh: "为中文云环境和本地化工具链整理 setup 限制与默认假设。",
        },
        difficulty: { en: "Intermediate", zh: "进阶" },
        time: { en: "21 min", zh: "21 分钟" },
        risk: { en: "Low risk", zh: "低风险" },
        tags: { en: ["Localization", "Setup", "Docs"], zh: ["本地化", "setup", "文档"] },
        channels: { en: ["Docs", "Feishu Docs"], zh: ["文档", "飞书文档"] },
        recommendedFor: {
          en: "Teams that need setup guidance to match Chinese deployment realities, not global defaults.",
          zh: "适合需要让 setup 指南更贴合中文部署现实、而不是照搬全球默认前提的团队。",
        },
        cta: { label: { en: "See Chinese ecosystem guidance", zh: "查看中文生态说明" }, href: "/learn", variant: "secondary" },
      },
      {
        slug: "bilingual-team-summary",
        title: { en: "Bilingual Team Summary", zh: "双语团队摘要流" },
        summary: {
          en: "Produce aligned Chinese and English updates for teams that operate across both language contexts.",
          zh: "为需要同时服务中英文语境的团队生成语义一致的双语更新。",
        },
        difficulty: { en: "Intermediate", zh: "进阶" },
        time: { en: "24 min", zh: "24 分钟" },
        risk: { en: "Medium risk", zh: "中风险" },
        tags: { en: ["Bilingual", "Summaries", "Collaboration"], zh: ["双语", "摘要", "协作"] },
        channels: { en: ["Feishu", "Email"], zh: ["飞书", "邮件"] },
        recommendedFor: {
          en: "Teams that need a shared update layer across Chinese and English stakeholders.",
          zh: "适合需要同时向中英文利益相关方同步状态的团队。",
        },
        cta: { label: { en: "See bilingual habits", zh: "查看双语协作习惯" }, href: "/learn", variant: "secondary" },
      },
    ],
  },
];

export const featuredTemplates: TemplateEntry[] = [
  templateTabs[0].templates[0],
  templateTabs[2].templates[0],
  templateTabs[4].templates[0],
];
