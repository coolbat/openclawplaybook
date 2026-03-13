
# OpenClaw Playbook

## 详细 PRD v1.0

## 1. 项目概述

### 1.1 项目名称

网站名称：OpenClaw Playbook
域名：openclaw101.space

### 1.2 产品定位

一个服务于**英文与中文市场**的 OpenClaw 学习与落地平台，帮助用户从“知道 OpenClaw”升级到“部署成功、跑通真实任务、复用成熟模板、规避安全与成本风险”。

### 1.3 一句话价值主张

**Learn OpenClaw by shipping real automations.**  
**不是只教你看教程，而是帮你把第一个可验证的 Agent 工作流跑起来。**

### 1.4 参考对象与差异化

openclaw101.dev 当前的核心形态是：

- 7-Day Learning Path
    
- Skills 聚合
    
- Resource Hub
    
- Community
    
- 一条命令安装
    
- 安全提醒与精选教程资源
    

其 Day 2 页面还包含安装命令、常用管理命令与 Troubleshooting Common Issues。([OpenClaw 101](https://openclaw101.dev/ "OpenClaw 101 - Master Your AI Assistant in 7 Days"))

你的差异化方向不是重复做一个资料站，而是升级成：

- **教程 + 模板 + 实操验收**
    
- **双语 + 本地化部署路线**
    
- **排错地图 + 安全治理**
    
- **适合中文与英文用户的真实场景模板**
    

---

## 2. 背景与机会

OpenClaw 热度上来后，用户的需求已经不只是“了解它是什么”，而是：

- 怎么最快装起来
    
- 怎么接 Telegram / 飞书 / 钉钉 / Discord
    
- 怎么避免技能安全风险
    
- 怎么把一个高频场景稳定跑起来
    
- 怎么少踩坑、少烧 token
    
- 怎么从零散 skills 变成可复制 workflow
    

openclaw101.dev 已经证明了“教程聚合 + 学习路径”有需求。它首页展示了 379+ tutorials、7 天学习路径、5494+ community skills，并强调通过 ClawHub CLI 一键安装技能。它同时在首页与资源页显式提醒第三方技能存在恶意代码与数据窃取风险。([OpenClaw 101](https://openclaw101.dev/ "OpenClaw 101 - Master Your AI Assistant in 7 Days"))

这说明市场至少已经存在三类明确需求：

1. **入门需求**：快速部署、第一条消息跑通
    
2. **能力扩展需求**：找 skill、装 skill、拼 workflow
    
3. **风险控制需求**：安全、权限、日志、回放、成本
    

你的站点可以卡位在这三者的交汇处。

---

## 3. 产品目标

### 3.1 核心目标

让一个从未使用过 OpenClaw 的用户，能够在 30 到 60 分钟内完成：

- 完成部署
    
- 接通一个聊天入口
    
- 成功执行一个真实任务
    
- 通过模板复用第二个场景
    
- 明白最基本的安全与排错方法
    

### 3.2 商业目标

通过 SEO、社区传播与模板分发形成流量，然后逐步演进到：

- 高级模板订阅
    
- 企业部署咨询
    
- 中文生态连接器/场景包
    
- 工具推荐与联盟分成
    
- 付费排错/培训
    

### 3.3 成功指标

一级指标：

- 首次部署完成率
    
- 首个模板跑通率
    
- 首次任务成功率
    
- 7 日回访率
    
- 模板二次复用率
    

二级指标：

- 页面停留时长
    
- 搜索进入占比
    
- 收藏/分享率
    
- 社区注册转化率
    
- 订阅邮箱转化率
    

---

## 4. 用户画像

### 4.1 英文市场用户

主要包括：

- Indie hackers
    
- Developers
    
- AI automation tinkerers
    
- Technical founders
    
- Power users
    

关注点：

- GitHub / Docker / VPS / CLI / Telegram / Discord
    
- 自托管与可扩展性
    
- 与开发工作流集成
    
- 自动化能力与调试效率
    

### 4.2 中文市场用户

主要包括：

- 产品经理
    
- 独立开发者
    
- 自媒体创作者
    
- AI 从业者
    
- 小团队负责人
    

关注点：

- 腾讯云 / 阿里云 / 火山引擎
    
- 飞书 / 钉钉 / 企微
    
- 一键部署与低门槛接入
    
- 市场调研、资讯聚合、内容生产等场景
    

### 4.3 核心用户分层

初期优先服务两类人：

- **L1 新手落地型**：想用，但不想折腾太多环境
    
- **L2 场景复制型**：已经装好，想快速复用高频 workflow
    

---

## 5. 用户痛点

### 5.1 教程碎片化

用户能搜到很多教程，但不知道哪条路径最省时间。openclaw101.dev 已尝试通过 7-Day Learning Path 与 Resource Hub 来解决这一点。([OpenClaw 101](https://openclaw101.dev/ "OpenClaw 101 - Master Your AI Assistant in 7 Days"))

### 5.2 部署成功不等于可用

参考站 Day 2 已经给出安装、Telegram bot、后台 daemon、health check 与常见问题，但用户仍会卡在：

- node 版本
    
- API key
    
- channel pairing
    
- daemon logs
    
- 权限与 admin 列表
    

这些都出现在其 Day 2 的 troubleshooting 与管理命令中。([OpenClaw 101](https://openclaw101.dev/day/2 "Day 2: Build Your Assistant in 10 Minutes | OpenClaw 101 | OpenClaw 101"))

### 5.3 技能多但不会选

参考站首页列出 31 个技能分类、5494+ skills，并给出 clawhub install 命令，但对很多用户来说，“知道有很多”不等于“知道该装哪几个”。([OpenClaw 101](https://openclaw101.dev/ "OpenClaw 101 - Master Your AI Assistant in 7 Days"))

### 5.4 安全焦虑

参考站明确提示第三方技能有恶意代码风险，说明这是高敏感问题。([OpenClaw 101](https://openclaw101.dev/ "OpenClaw 101 - Master Your AI Assistant in 7 Days"))

### 5.5 中文与英文用户路径不同

资源站已经显示中英文资源数量与来源差异，例如中文来源包含腾讯云、B 站、CSDN，英文来源更多是官方文档、DigitalOcean、IBM、Codecademy 等。([OpenClaw 101](https://openclaw101.dev/resources "Resource Hub | OpenClaw 101"))

---

## 6. 产品策略

### 6.1 核心策略

把“教程网站”做成四层结构：

- **内容层**：学习路径、概念解释、教程文章
    
- **实操层**：模板、脚本、配置示例、验收任务
    
- **治理层**：安全、排错、成本、日志
    
- **生态层**：技能推荐、案例库、社区挑战
    

### 6.2 差异化策略

相对于 openclaw101.dev，你的核心差异点：

#### 1) 模板优先，而不是知识优先

不是先讲完概念再给案例，而是先给“能跑通的模板”，再在模板里嵌入概念。

#### 2) 双语并排 + 本地化说明

同一篇内容支持：

- EN
    
- ZH
    
- Side-by-side 对照模式
    
- 按地区显示不同的部署/渠道建议
    

#### 3) 排错地图

不是零散 FAQ，而是“症状 -> 原因 -> 检查命令 -> 修复步骤 -> 防复发”。

#### 4) 安全中心

把“不要乱装 skill”的提醒升级为：

- 技能风险等级
    
- 权限检查清单
    
- 凭证保管建议
    
- 日志审计基础教程
    

#### 5) 可验证的学习成果

每个模板和课程都提供：

- 输入
    
- 输出
    
- 验收标准
    
- 常见失败点
    
- 成本预估
    

---

## 7. 产品范围

### 7.1 MVP 范围

首期上线包含：

- 首页
    
- 学习路径
    
- 模板工坊
    
- 技能推荐页
    
- 排错地图
    
- 安全中心
    
- 资源库
    
- 社区案例页
    
- 双语系统
    
- 搜索
    

### 7.2 非 MVP 范围

首期不做：

- 用户登录体系
    
- 在线运行 OpenClaw
    
- 站内自动部署托管
    
- 完整 skills 商店
    
- 企业付费后台
    

这些可以留在二期。

---

## 8. 信息架构

### 8.1 顶级导航

- Learn
    
- Templates
    
- Skills
    
- Troubleshoot
    
- Trust Center
    
- Resources
    
- Community
    
- Newsletter
    

### 8.2 导航说明

#### Learn

系统学习路径，含从基础到高级的模块化教程。

#### Templates

面向真实场景的 workflow 模板库。

#### Skills

精选技能推荐，不追求全量，而追求“好用、适合场景、风险可控”。

#### Troubleshoot

安装、配置、日志、配对、权限、模型、网络等问题的诊断地图。

#### Trust Center

安全、成本、审计、权限治理专区。

#### Resources

外部优质教程、官方文档、视频、帖子、文章聚合。

#### Community

用户案例、挑战赛、模板投稿、常见最佳实践。

#### Newsletter

订阅更新，承接 SEO 流量。

---

## 9. 功能需求

# 9.1 首页

### 目标

让用户 10 秒内知道：

- 这是干什么的
    
- 为什么比普通教程站更有用
    
- 我现在应该从哪里开始
    

### 主要模块

1. Hero 区
    
2. 两个 CTA
    
    - Start with a template
        
    - Start from day 1
        
3. 差异化卖点区
    
4. 热门模板区
    
5. 学习路径区
    
6. 排错入口区
    
7. 安全提醒区
    
8. 中英切换入口
    
9. Newsletter 订阅区
    

### 核心文案方向

- Learn OpenClaw with real workflows
    
- Go from setup to your first running automation
    
- Bilingual guides for English and Chinese users
    

---

# 9.2 学习路径 Learn

### 目标

给新手清晰路径，不迷路。

### 内容结构建议

不是 7 天死板结构，而是 4 个阶段：

#### Stage 1 Foundations

- What is OpenClaw
    
- How it differs from chatbots
    
- Architecture basics
    
- Channels, models, memory, skills
    

参考站 Day 1 已强调 OpenClaw 不是普通 chatbot，而是执行任务的平台。([OpenClaw 101](https://openclaw101.dev/ "OpenClaw 101 - Master Your AI Assistant in 7 Days"))

#### Stage 2 Setup

- Environment choices
    
- Local vs VPS
    
- Install wizard
    
- Connect Telegram / Feishu / Discord
    
- Background daemon
    
- Health check
    

参考站 Day 2 已包含安装命令、status、health、daemon logs、reconfigure 与 Telegram pairing。([OpenClaw 101](https://openclaw101.dev/day/2 "Day 2: Build Your Assistant in 10 Minutes | OpenClaw 101 | OpenClaw 101"))

#### Stage 3 Skills and Workflows

- Skill basics
    
- Install and verify
    
- Chaining tools
    
- Best starter skills
    
- Safe skill usage
    

#### Stage 4 Real-world Automation

- News digest
    
- Market research
    
- Content workflow
    
- DevOps alerts
    
- Team assistant
    

### 每篇教程结构

- 问题定义
    
- 适用人群
    
- 前置条件
    
- 步骤
    
- 结果示例
    
- 验收清单
    
- 常见报错
    
- 相关模板
    
- 下一步推荐
    

---

# 9.3 模板工坊 Templates

### 目标

给用户一个“直接照抄也能跑”的场景中心。

### 模板首批 12 个

#### 入门类

1. Daily AI News Digest
    
2. Weekly Market Research Summary
    
3. GitHub Repo Watcher
    
4. Personal Daily Planner
    

#### 中文特色类

5. 飞书 AI 新闻秘书
    
6. 钉钉日报汇总助手
    
7. 小红书选题助手
    
8. 公众号资料收集助手
    

#### 开发者类

9. Server Health Alert Bot
    
10. Release Notes Summarizer
    
11. Error Log Triage Assistant
    
12. Documentation Search Assistant
    

### 单个模板页面字段

- 模板名称
    
- 场景标签
    
- 难度
    
- 预计时长
    
- 前置条件
    
- 所需技能
    
- 所需渠道
    
- 所需模型
    
- 所需环境
    
- 成本预估
    
- 风险等级
    
- 步骤清单
    
- 验收标准
    
- 输出示例
    
- 常见问题
    
- 相关教程
    
- 相关模板
    

### 差异化设计

每个模板有一个 **“Run Checklist”**：

- 已创建 bot
    
- 已配置 API key
    
- 已验证 channel
    
- 已安装所需 skill
    
- 已测试一次手动触发
    
- 已完成一次自动运行
    

---

# 9.4 Skills 精选页

### 目标

解决“技能太多，不知道从哪里开始”。

参考站现在展示 31 个分类和多个 skill 示例，但更偏聚合。([OpenClaw 101](https://openclaw101.dev/ "OpenClaw 101 - Master Your AI Assistant in 7 Days"))

### 我的做法

#### 不做全量商店

只做精选与场景化推荐。

#### 分类方式

不是按技术分类，而是按任务分类：

- Research
    
- Content
    
- Productivity
    
- DevOps
    
- Communications
    
- Local Automation
    
- Chinese Ecosystem
    
- Security & Observability
    

### 单个 skill 条目字段

- 名称
    
- 简介
    
- 来源链接
    
- 安装命令
    
- 适用场景
    
- 适合人群
    
- 风险提示
    
- 依赖要求
    
- 与哪些模板配套
    
- 维护状态
    
- 是否推荐新手使用
    

### 评分系统

- Starter Friendly
    
- Stable
    
- Powerful but risky
    
- Requires local permissions
    
- Needs external API keys
    

---

# 9.5 排错地图 Troubleshoot

### 目标

从 FAQ 升级成“问题导航系统”。

### 主要问题域

1. 安装失败
    
2. node 版本问题
    
3. API key 无效
    
4. bot 无响应
    
5. pairing 问题
    
6. daemon 未运行
    
7. logs 读不懂
    
8. 权限报错
    
9. skill 冲突
    
10. 浏览器控制失败
    
11. 本地文件读写失败
    
12. webhook/channel 接入失败
    

### 页面结构

#### 方式 A：按症状找

- 安装时报错
    
- 机器人不回消息
    
- 消息发出但任务没执行
    
- 任务执行中断
    
- 技能安装后无效果
    

#### 方式 B：按模块找

- Install
    
- Models
    
- Channels
    
- Skills
    
- Daemon
    
- Browser
    
- Local files
    
- Security
    

### 每个问题页面内容

- 现象
    
- 典型原因
    
- 排查步骤
    
- 检查命令
    
- 解决方案
    
- 升级建议
    
- 防复发清单
    

参考站 Day 2 已经展示了常见报错与常用命令，这部分可以作为你的基础素材来源。([OpenClaw 101](https://openclaw101.dev/day/2 "Day 2: Build Your Assistant in 10 Minutes | OpenClaw 101 | OpenClaw 101"))

---

# 9.6 Trust Center 安全中心

### 目标

把“安全提醒”升级成“安全能力”。

参考站首页和资源页都强调第三方技能可能存在恶意行为。([OpenClaw 101](https://openclaw101.dev/ "OpenClaw 101 - Master Your AI Assistant in 7 Days"))

### 模块

#### 1. Skill Safety 101

- 为什么 skill 有风险
    
- 安装前要看什么
    
- 如何审查来源
    
- 如何最小权限运行
    

#### 2. Credential Safety

- API key 存放建议
    
- 环境变量管理
    
- 本地配置与服务器配置差异
    

#### 3. Permission Guide

- 读文件
    
- 写文件
    
- 浏览器控制
    
- shell command
    
- 外部 API 访问
    

#### 4. Cost Guide

- 模型成本估算
    
- 高频任务成本
    
- 降本建议
    
- 模板预算说明
    

#### 5. Audit Basics

- 看 logs
    
- 看执行步骤
    
- 看失败重试
    
- 保存关键执行记录
    

---

# 9.7 Resources 资源库

### 目标

做外部资料的优质索引，但比 openclaw101 更“可用”。

参考站 Resource Hub 已按来源、语言与类别聚合资源，并含大量官方与社区链接。([OpenClaw 101](https://openclaw101.dev/resources "Resource Hub | OpenClaw 101"))

### 你的增强点

- 增加“适合人群”筛选
    
- 增加“适合中文用户/英文用户”标签
    
- 增加“过期风险”标记
    
- 增加“是否适合 2026 新版本”标记
    
- 增加“是否已在站内模板中验证”标记
    

### 筛选维度

- Language
    
- Audience
    
- Content type
    
- Difficulty
    
- Updated recently
    
- Official / Community / Video / Blog / Cloud vendor
    

---

# 9.8 Community 社区案例

### 目标

把教程站做成“案例飞轮”。

### 模块

- Featured builds
    
- User showcases
    
- Monthly challenges
    
- Template submissions
    
- Best practices
    

### 投稿模板

- 用了什么环境
    
- 跑了什么任务
    
- 成功结果是什么
    
- 踩了哪些坑
    
- 给别人什么建议
    

---

# 9.9 Search 搜索

### 目标

帮助用户直接搜到问题答案或模板。

### 搜索支持

- 全站全文检索
    
- 中英双语索引
    
- 标签筛选
    
- 支持以下结果类型：
    
    - 教程
        
    - 模板
        
    - skills
        
    - 排错
        
    - 资源
        
    - 案例
        

---

# 9.10 Newsletter

### 目标

把 SEO 流量留住。

### 栏目方向

- Weekly OpenClaw digest
    
- New templates
    
- Breaking changes / changelog digest
    
- Risk alerts
    
- Featured builds
    

---

## 10. 双语与本地化需求

### 10.1 语言模式

- EN only
    
- ZH only
    
- Side-by-side bilingual
    

### 10.2 URL 规则

- `/en/...`
    
- `/zh/...`
    

### 10.3 本地化内容差异

英文用户默认推荐：

- Telegram
    
- Discord
    
- Hetzner / AWS / DigitalOcean
    
- GitHub / Docker / CLI 路线
    

中文用户默认推荐：

- 飞书
    
- 钉钉
    
- 腾讯云 / 阿里云 / 火山引擎
    
- 图文教程 + 命令解释路线
    

### 10.4 翻译策略

不是机械翻译，而是术语统一：

- skill
    
- template
    
- workflow
    
- daemon
    
- pairing
    
- admin ID
    
- health check
    
- troubleshooting
    

建立一份中英术语表。

---

## 11. 内容生产规范

### 11.1 单篇教程模板

- 标题
    
- 摘要
    
- 适合谁
    
- 你将完成什么
    
- 前置条件
    
- 步骤
    
- 结果示例
    
- 常见问题
    
- 延伸阅读
    
- 相关模板
    

### 11.2 模板页面规范

- 模板目标
    
- 最终结果长什么样
    
- 配置项
    
- 最小可运行版本
    
- 验收标准
    
- 成本与风险
    
- 进阶扩展
    

### 11.3 资源条目规范

- 来源
    
- 简介
    
- 适合人群
    
- 可信度
    
- 更新日期
    
- 是否仍适用当前版本
    

---

## 12. SEO 需求

### 12.1 目标关键词

英文方向：

- openclaw tutorial
    
- openclaw setup
    
- openclaw skills
    
- openclaw templates
    
- openclaw troubleshooting
    
- openclaw telegram bot
    

中文方向：

- openclaw 教程
    
- openclaw 安装
    
- openclaw 模板
    
- openclaw 飞书
    
- openclaw 钉钉
    
- openclaw 技能
    
- openclaw 排错
    

### 12.2 SEO 要求

- hreflang
    
- canonical
    
- sitemap
    
- 结构化数据
    
- 文章 FAQ schema
    
- 模板页面 HowTo schema
    

---

## 13. 埋点需求

### 13.1 关键事件

- 点击 Start Learning
    
- 点击 Start with Template
    
- 切换语言
    
- 复制命令
    
- 完成 checklist
    
- 点击外部资源
    
- 订阅 newsletter
    
- 站内搜索
    
- 模板收藏
    
- 模板复制
    

### 13.2 数据用途

- 识别最热门场景
    
- 识别最高失败环节
    
- 优化首页入口
    
- 优化模板排序
    
- 找到值得产品化的方向
    

---

## 14. 商业化设计

### 14.1 免费层

- 基础教程
    
- 基础模板
    
- 基础排错
    
- 外部资源库
    

### 14.2 Pro 层

- 高级模板包
    
- 中文企业场景包
    
- 高级排错包
    
- 成本优化指南
    
- 可下载 checklist / config pack
    
- 模板参数生成器
    

### 14.3 服务层

- OpenClaw 部署咨询
    
- 团队模板定制
    
- 飞书/钉钉场景接入
    
- 企业培训
    

---

## 15. 技术方案

### 15.1 前端

- Next.js App Router
    
- TypeScript
    
- Tailwind CSS
    
- shadcn/ui
    
- MDX 内容系统
    

### 15.2 内容管理

首期 Git-based CMS：

- Contentlayer 或自定义 MDX loader
- GitHub 管理内容


### 15.3 搜索

- Pagefind 或 Algolia DocSearch
    
- 中英索引分开处理
    

### 15.4 部署

- Cloudflare page


### 15.5 分析

- Plausible / PostHog
    

---

## 16. 详细站点目录结构

下面这份目录，适合你用 **Next.js + MDX + i18n** 来做，后续也方便扩展模板、资源、SEO 页面。

```text
openclaw-academy/
├── public/
│   ├── images/
│   │   ├── site/
│   │   ├── templates/
│   │   ├── guides/
│   │   └── og/
│   ├── icons/
│   ├── logos/
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
│
├── src/
│   ├── app/
│   │   ├── (marketing)/
│   │   │   ├── [locale]/
│   │   │   │   ├── page.tsx                        # 首页
│   │   │   │   ├── learn/
│   │   │   │   │   ├── page.tsx                    # Learn 首页
│   │   │   │   │   ├── foundations/
│   │   │   │   │   │   ├── page.tsx
│   │   │   │   │   │   └── [slug]/page.tsx
│   │   │   │   │   ├── setup/
│   │   │   │   │   │   ├── page.tsx
│   │   │   │   │   │   └── [slug]/page.tsx
│   │   │   │   │   ├── skills/
│   │   │   │   │   │   ├── page.tsx
│   │   │   │   │   │   └── [slug]/page.tsx
│   │   │   │   │   ├── workflows/
│   │   │   │   │   │   ├── page.tsx
│   │   │   │   │   │   └── [slug]/page.tsx
│   │   │   │   │   └── glossary/
│   │   │   │   │      ├── page.tsx
│   │   │   │   │      └── [slug]/page.tsx
│   │   │   │   │
│   │   │   │   ├── templates/
│   │   │   │   │   ├── page.tsx                    # 模板列表
│   │   │   │   │   ├── category/
│   │   │   │   │   │   └── [slug]/page.tsx
│   │   │   │   │   ├── tag/
│   │   │   │   │   │   └── [slug]/page.tsx
│   │   │   │   │   └── [slug]/page.tsx             # 单个模板页
│   │   │   │   │
│   │   │   │   ├── skills/
│   │   │   │   │   ├── page.tsx                    # 精选技能页
│   │   │   │   │   ├── category/
│   │   │   │   │   │   └── [slug]/page.tsx
│   │   │   │   │   └── [slug]/page.tsx
│   │   │   │   │
│   │   │   │   ├── troubleshoot/
│   │   │   │   │   ├── page.tsx                    # 排错首页
│   │   │   │   │   ├── symptom/
│   │   │   │   │   │   └── [slug]/page.tsx
│   │   │   │   │   ├── module/
│   │   │   │   │   │   └── [slug]/page.tsx
│   │   │   │   │   └── [slug]/page.tsx
│   │   │   │   │
│   │   │   │   ├── trust-center/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   ├── skill-safety/page.tsx
│   │   │   │   │   ├── credentials/page.tsx
│   │   │   │   │   ├── permissions/page.tsx
│   │   │   │   │   ├── audit/page.tsx
│   │   │   │   │   └── cost/page.tsx
│   │   │   │   │
│   │   │   │   ├── resources/
│   │   │   │   │   ├── page.tsx                    # 资源聚合页
│   │   │   │   │   ├── official/page.tsx
│   │   │   │   │   ├── videos/page.tsx
│   │   │   │   │   ├── cloud-guides/page.tsx
│   │   │   │   │   ├── community-posts/page.tsx
│   │   │   │   │   └── [slug]/page.tsx
│   │   │   │   │
│   │   │   │   ├── community/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   ├── showcase/page.tsx
│   │   │   │   │   ├── challenges/page.tsx
│   │   │   │   │   ├── submit/page.tsx
│   │   │   │   │   └── [slug]/page.tsx
│   │   │   │   │
│   │   │   │   ├── newsletter/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── search/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── about/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── terms/
│   │   │   │       └── page.tsx
│   │   │
│   │   ├── api/
│   │   │   ├── newsletter/route.ts
│   │   │   ├── search/route.ts
│   │   │   ├── feedback/route.ts
│   │   │   └── analytics/route.ts
│   │   │
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── sitemap.ts
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── site-header.tsx
│   │   │   ├── site-footer.tsx
│   │   │   ├── locale-switcher.tsx
│   │   │   ├── sidebar-nav.tsx
│   │   │   └── breadcrumbs.tsx
│   │   ├── home/
│   │   │   ├── hero.tsx
│   │   │   ├── featured-templates.tsx
│   │   │   ├── learning-path.tsx
│   │   │   ├── trust-banner.tsx
│   │   │   ├── troubleshooting-entry.tsx
│   │   │   └── newsletter-cta.tsx
│   │   ├── learn/
│   │   │   ├── lesson-header.tsx
│   │   │   ├── lesson-sidebar.tsx
│   │   │   ├── progress-checklist.tsx
│   │   │   └── related-content.tsx
│   │   ├── templates/
│   │   │   ├── template-card.tsx
│   │   │   ├── template-meta.tsx
│   │   │   ├── run-checklist.tsx
│   │   │   ├── result-preview.tsx
│   │   │   └── risk-badge.tsx
│   │   ├── skills/
│   │   │   ├── skill-card.tsx
│   │   │   ├── install-command.tsx
│   │   │   ├── risk-level.tsx
│   │   │   └── compatibility-tags.tsx
│   │   ├── troubleshoot/
│   │   │   ├── symptom-selector.tsx
│   │   │   ├── diagnosis-flow.tsx
│   │   │   ├── command-block.tsx
│   │   │   └── fix-checklist.tsx
│   │   ├── trust-center/
│   │   │   ├── permission-matrix.tsx
│   │   │   ├── risk-explainer.tsx
│   │   │   ├── cost-calculator.tsx
│   │   │   └── audit-log-sample.tsx
│   │   ├── resources/
│   │   │   ├── resource-card.tsx
│   │   │   ├── source-badge.tsx
│   │   │   └── filter-bar.tsx
│   │   ├── community/
│   │   │   ├── showcase-card.tsx
│   │   │   ├── challenge-banner.tsx
│   │   │   └── submit-form.tsx
│   │   └── shared/
│   │       ├── mdx-components.tsx
│   │       ├── tag-list.tsx
│   │       ├── copy-button.tsx
│   │       ├── callout.tsx
│   │       ├── badge.tsx
│   │       └── empty-state.tsx
│   │
│   ├── content/
│   │   ├── en/
│   │   │   ├── learn/
│   │   │   │   ├── foundations/
│   │   │   │   ├── setup/
│   │   │   │   ├── skills/
│   │   │   │   ├── workflows/
│   │   │   │   └── glossary/
│   │   │   ├── templates/
│   │   │   ├── skills/
│   │   │   ├── troubleshoot/
│   │   │   ├── trust-center/
│   │   │   ├── resources/
│   │   │   └── community/
│   │   ├── zh/
│   │   │   ├── learn/
│   │   │   │   ├── foundations/
│   │   │   │   ├── setup/
│   │   │   │   ├── skills/
│   │   │   │   ├── workflows/
│   │   │   │   └── glossary/
│   │   │   ├── templates/
│   │   │   ├── skills/
│   │   │   ├── troubleshoot/
│   │   │   ├── trust-center/
│   │   │   ├── resources/
│   │   │   └── community/
│   │
│   ├── lib/
│   │   ├── i18n/
│   │   │   ├── config.ts
│   │   │   ├── dictionaries.ts
│   │   │   └── routes.ts
│   │   ├── content/
│   │   │   ├── get-docs.ts
│   │   │   ├── get-templates.ts
│   │   │   ├── get-skills.ts
│   │   │   ├── get-resources.ts
│   │   │   └── get-troubleshooting.ts
│   │   ├── seo/
│   │   │   ├── metadata.ts
│   │   │   ├── schema.ts
│   │   │   └── sitemap.ts
│   │   ├── analytics/
│   │   │   ├── events.ts
│   │   │   └── tracking.ts
│   │   ├── search/
│   │   │   ├── build-index.ts
│   │   │   └── query-index.ts
│   │   └── utils.ts
│   │
│   ├── types/
│   │   ├── lesson.ts
│   │   ├── template.ts
│   │   ├── skill.ts
│   │   ├── resource.ts
│   │   ├── troubleshooting.ts
│   │   └── showcase.ts
│   │
│   └── config/
│       ├── navigation.ts
│       ├── site.ts
│       ├── template-categories.ts
│       ├── skill-categories.ts
│       └── locales.ts
│
├── scripts/
│   ├── build-search-index.ts
│   ├── sync-resources.ts
│   ├── validate-frontmatter.ts
│   └── generate-og-images.ts
│
├── docs/
│   ├── content-style-guide.md
│   ├── translation-glossary.md
│   ├── seo-plan.md
│   ├── analytics-plan.md
│   └── moderation-guide.md
│
├── .env.example
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 17. 内容目录

### 17.1 Learn 首批内容

#### Foundations

- What is OpenClaw
    
- OpenClaw vs chatbot
    
- Channels, skills, memory, daemon
    
- How OpenClaw actually executes tasks
    

#### Setup

- Local install guide
    
- VPS install guide
    
- Telegram setup
    
- Feishu setup
    
- Discord setup
    
- Health check and daemon basics
    

#### Skills

- How skills work
    
- How to evaluate a skill safely
    
- Best starter skills
    
- How to connect skills into workflows
    

#### Workflows

- News workflow
    
- Research workflow
    
- Content workflow
    
- Monitoring workflow
    

#### Glossary

- skill
    
- workflow
    
- daemon
    
- pairing
    
- heartbeat
    
- admin id
    
- audit logs
    

### 17.2 Templates 首批内容



---

## 18. 页面优先级

### P0

- 首页
    
- Learn 首页
    
- 6 篇核心教程
    
- 6 个模板
    
- 排错首页
    
- 8 个高频故障页
    
- Skills 精选页
    
- Resources 页
    
- Newsletter
    

### P1

- Trust Center
    
- 社区案例
    
- Side-by-side bilingual 模式
    
- 成本计算器
    
- 模板收藏与复制追踪
    

### P2

- 投稿系统
    
- 模板评分系统
    
- skill 风险数据库
    
- 企业场景专区
    

---

## 19. 版本规划

### V1

先把“能学 + 能抄 + 能排错”做扎实。

### V2

强化“安全 + 成本 + 案例”。

### V3

强化“社区 + 投稿 + 模板生态”。

---

## 20. 项目结论

参考 openclaw101.dev，要做的不是再造一个“OpenClaw 资料导航站”，而是把它升级为一个**双语、模板驱动、实操导向、带安全与排错能力的 OpenClaw 学习平台**。参考站已经验证了以下点成立：学习路径、技能聚合、资源中心与安全提醒都有用户需求；其首页、Day 2 与资源页都能看出用户非常关心安装、技能扩展与风险控制。([OpenClaw 101](https://openclaw101.dev/ "OpenClaw 101 - Master Your AI Assistant in 7 Days"))

你的最佳切口是：

- 用 **模板工坊** 抢走“我现在就想跑一个真实任务”的用户
    
- 用 **排错地图** 抢走“我已经装了，但卡住了”的用户
    
- 用 **中英双语与中文本地化路线** 抢走更广的中文市场
    
- 用 **Trust Center** 建立专业感和可持续信任
    