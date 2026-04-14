# Hermes Agent Playbook

> [!IMPORTANT]
> **这是一个双语 Hermes Agent 教程仓库。**  
> 你不需要先跑站点，也不需要先翻完整仓库。  
> 直接从下面的 **Quick Start** 入口点进 MDX 教程，就可以在 GitHub 里开始使用这套教程。

<div align="center">

# OpenClaw / Hermes Agent Tutorials

从认知、安装、渠道、工作流到排错恢复的双语 playbook  
Built as a bilingual tutorial repo for users who want a real first workflow, not a maze of docs.

[中文 5 步 Quick Start](#quick-start) · [English 5-Step Quick Start](#quick-start) · [Learn 路径](#learn) · [Templates](#templates) · [Troubleshoot](#troubleshoot)

</div>

## 目录

- [Quick Start](#quick-start)
- [Learn](#learn)
- [Skills](#skills)
- [Templates](#templates)
- [Troubleshoot](#troubleshoot)
- [Repo](#repo)
- [Local Dev](#local-dev)
- [Official Links](#official-links)

## Quick Start

如果你是第一次接触 Hermes Agent / OpenClaw，不要先从大而全的架构、技能市场或长篇排错开始。  
先沿着 5 步路径跑通一个最小闭环。

### 中文 5 步入口

1. [什么是 OpenClaw](/Users/coolbat/openclaw101/content/quick-start/zh/what-is-openclaw.mdx)
2. [部署 / 安装](/Users/coolbat/openclaw101/content/quick-start/zh/deploy-install.mdx)
3. [连接聊天渠道](/Users/coolbat/openclaw101/content/quick-start/zh/connect-channel.mdx)
4. [运行入门工作流](/Users/coolbat/openclaw101/content/quick-start/zh/starter-workflow.mdx)
5. [基础排错](/Users/coolbat/openclaw101/content/quick-start/zh/basic-troubleshooting.mdx)

### English 5-Step Quick Start

1. [What Is OpenClaw](/Users/coolbat/openclaw101/content/quick-start/en/what-is-openclaw.mdx)
2. [Deploy / Install](/Users/coolbat/openclaw101/content/quick-start/en/deploy-install.mdx)
3. [Connect a Chat Channel](/Users/coolbat/openclaw101/content/quick-start/en/connect-channel.mdx)
4. [Run a Starter Workflow](/Users/coolbat/openclaw101/content/quick-start/en/starter-workflow.mdx)
5. [Basic Troubleshooting](/Users/coolbat/openclaw101/content/quick-start/en/basic-troubleshooting.mdx)

### 推荐怎么用

- 如果你是中文用户：先按中文 5 步完整走一遍
- 如果你要英文资料：直接走 English 5-Step Quick Start
- 如果你已经装好了但总在卡壳：第 5 步后直接切到 [Troubleshoot](#troubleshoot)

## Learn

当你已经不再满足于“先跑通一条链路”，就进入 `Learn`。  
这里不是首页卡片扩写，而是解释为什么这样设计、什么时候该这么做、常见误区是什么。

### 中文 Learn 推荐入口

**基础认知**

- [OpenClaw 不只是另一个聊天机器人](/Users/coolbat/openclaw101/content/learn/zh/openclaw-vs-chatbots.mdx)
- [技能为什么会改变能力边界](/Users/coolbat/openclaw101/content/learn/zh/skills-change-boundaries.mdx)
- [哪些环节仍然需要人工复核](/Users/coolbat/openclaw101/content/learn/zh/human-review-still-matters.mdx)

**环境搭建**

- [本地还是 VPS：如何选第一条路径](/Users/coolbat/openclaw101/content/learn/zh/local-vs-vps.mdx)
- [尽早验证一个模型服务](/Users/coolbat/openclaw101/content/learn/zh/verify-model-provider.mdx)
- [首次搭建最常见的陷阱](/Users/coolbat/openclaw101/content/learn/zh/first-run-traps.mdx)

**工作流设计**

- [如何选择更安全的入门技能](/Users/coolbat/openclaw101/content/learn/zh/choose-safer-starter-skills.mdx)
- [设计一个范围足够小的首个工作流](/Users/coolbat/openclaw101/content/learn/zh/design-first-workflow.mdx)
- [扩展之前先建立可观测性](/Users/coolbat/openclaw101/content/learn/zh/observability-before-scale.mdx)

**中文生态**

- [适合飞书的工作流模式](/Users/coolbat/openclaw101/content/learn/zh/feishu-friendly-workflows.mdx)
- [本地化部署时的默认假设](/Users/coolbat/openclaw101/content/learn/zh/localized-deployment-assumptions.mdx)
- [对双语协作最有帮助的习惯](/Users/coolbat/openclaw101/content/learn/zh/bilingual-collaboration-habits.mdx)

**进阶配置**

- [写一份真正有效的 AGENTS.md](/Users/coolbat/openclaw101/content/learn/zh/agents-md-workspace-guide.mdx)
- [记忆系统实战：Flush、结构化日志与语义检索](/Users/coolbat/openclaw101/content/learn/zh/memory-system-and-flush.mdx)
- [子 Agent：把单线程变成一支团队](/Users/coolbat/openclaw101/content/learn/zh/sub-agent-parallel-tasks.mdx)

**进阶排错**

- [如何读日志而不是猜日志](/Users/coolbat/openclaw101/content/learn/zh/read-logs-without-guessing.mdx)
- [权限与沙箱失败怎么查](/Users/coolbat/openclaw101/content/learn/zh/permission-and-sandbox-failures.mdx)
- [浏览器自动化不稳定时怎么办](/Users/coolbat/openclaw101/content/learn/zh/browser-automation-instability.mdx)

**使用技巧**

- [把早期工作流收得更窄](/Users/coolbat/openclaw101/content/learn/zh/keep-workflows-narrow.mdx)
- [保存好用的提示词和输出样例](/Users/coolbat/openclaw101/content/learn/zh/save-good-prompts-and-outputs.mdx)
- [扩展之前先复盘](/Users/coolbat/openclaw101/content/learn/zh/review-before-expanding.mdx)

### English Learn

如果你要英文版本，可以直接从这些入口开始：

- [What Is OpenClaw / not just another chatbot](/Users/coolbat/openclaw101/content/learn/en/openclaw-vs-chatbots.mdx)
- [Why Skills Change Capability Boundaries](/Users/coolbat/openclaw101/content/learn/en/skills-change-boundaries.mdx)
- [Local vs VPS](/Users/coolbat/openclaw101/content/learn/en/local-vs-vps.mdx)
- [Verify One Model Provider Early](/Users/coolbat/openclaw101/content/learn/en/verify-model-provider.mdx)
- [Read Logs Without Guessing](/Users/coolbat/openclaw101/content/learn/en/read-logs-without-guessing.mdx)

## Skills

如果你此刻关心的是“系统能力到底从哪里变强”，不要先去搜一堆 skill 名字，先理解能力边界和 starter skills。

### 先看这些

- [技能为什么会改变能力边界](/Users/coolbat/openclaw101/content/learn/zh/skills-change-boundaries.mdx)
- [如何选择更安全的入门技能](/Users/coolbat/openclaw101/content/learn/zh/choose-safer-starter-skills.mdx)
- [写一份真正有效的 AGENTS.md](/Users/coolbat/openclaw101/content/learn/zh/agents-md-workspace-guide.mdx)
- [子 Agent：把单线程变成一支团队](/Users/coolbat/openclaw101/content/learn/zh/sub-agent-parallel-tasks.mdx)

### 什么时候应该先停一下

如果你还没跑通第一条工作流，不建议先沉迷技能数量。  
先回到 [Quick Start](#quick-start)，把最小闭环做出来，再扩技能。

## Templates

当你的基础链路已经稳定，`Templates` 是最快把系统做出“可见结果”的地方。  
它们适合拿来验证：这个系统不只是能聊，还能产出真正有用的输出。

### 中文 Templates 推荐入口

- [飞书 AI 简报机器人](/Users/coolbat/openclaw101/content/template-library/zh/feishu-ai-briefing-bot.mdx)
- [研究资料到文章草稿](/Users/coolbat/openclaw101/content/template-library/zh/research-to-article-draft.mdx)
- [日报 / 周报类工作流](/Users/coolbat/openclaw101/content/template-library/zh/weekly-team-update.mdx)
- [播客 / 论文 / 会议纪要整理](/Users/coolbat/openclaw101/content/template-library/zh/podcast-show-notes.mdx)
- [服务健康告警机器人](/Users/coolbat/openclaw101/content/template-library/zh/server-health-alert-bot.mdx)

如果你想从“能跑”走到“有产出”，这里通常是最该开始的地方。

## Troubleshoot

如果你已经遇到失败，不要继续堆配置。  
先按症状回到对应恢复路径。

### 中文 Troubleshoot 推荐入口

- [先跑最短健康检查环路](/Users/coolbat/openclaw101/content/troubleshoot-library/zh/quick-health-check.mdx)
- [机器人不回](/Users/coolbat/openclaw101/content/troubleshoot-library/zh/bot-silent.mdx)
- [安装失败](/Users/coolbat/openclaw101/content/troubleshoot-library/zh/install-failed.mdx)
- [无效凭证 / API Key 问题](/Users/coolbat/openclaw101/content/troubleshoot-library/zh/invalid-credentials.mdx)
- [先看状态，再看日志](/Users/coolbat/openclaw101/content/troubleshoot-library/zh/status-then-logs.mdx)
- [工作流太宽](/Users/coolbat/openclaw101/content/troubleshoot-library/zh/workflow-too-broad.mdx)

### 如果你现在不知道该从哪开始

优先顺序通常是：

1. 先看 [先跑最短健康检查环路](/Users/coolbat/openclaw101/content/troubleshoot-library/zh/quick-health-check.mdx)
2. 再看 [先看状态，再看日志](/Users/coolbat/openclaw101/content/troubleshoot-library/zh/status-then-logs.mdx)
3. 最后按具体症状进入对应条目

## Repo

这个仓库是一个基于 Next.js App Router 的内容驱动教程站，核心内容都放在 `content/`。

```text
app/
  页面路由与站点框架

content/
  quick-start/
  learn/
  template-library/
  troubleshoot-library/
  pages/
  site.ts
  learn.ts

components/
  内容卡片、页面结构与导航组件

lib/
  MDX 渲染、元数据、交叉链接、站点工具函数

docs/
  站点规划、信息架构与实现记录
```

最核心的内容位置：

- `content/quick-start/zh`
- `content/quick-start/en`
- `content/learn/zh`
- `content/learn/en`
- `content/template-library/zh`
- `content/template-library/en`
- `content/troubleshoot-library/zh`
- `content/troubleshoot-library/en`

## Local Dev

如果你要本地运行站点：

```bash
npm install
npm run dev
```

常用命令：

```bash
npm run dev
npm run build
npm run start
```

如果本地 `next dev` 出现奇怪缓存问题，优先清理 `.next/` 后再重启。

## Official Links

- [OpenClaw 官网](https://openclaw.ai)
- [OpenClaw 文档](https://docs.openclaw.ai)
- [OpenClaw GitHub](https://github.com/openclaw/openclaw)

---

如果你只打算从 GitHub 里开始，不要先往下翻仓库结构。  
直接从上面的 **Quick Start** 入口开始。
