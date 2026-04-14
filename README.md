# OpenClaw Playbook

一个面向新手的 OpenClaw 教程站与内容仓库。  
目标不是堆文档，而是把读者从“知道 OpenClaw 这个词”带到“跑通第一条真实工作流”。

这个仓库更像一份教程 playbook，而不是传统产品文档。它强调路径、判断框架、常见误区和下一步动作，适合：

- 第一次接触 OpenClaw 的新手
- 想把碎片经验整理成稳定教程的内容维护者
- 想围绕 Quick Start / Learn / Templates / Troubleshoot 继续扩写的人

## What This Repo Is

这是一个基于 Next.js App Router 的双语教程站，核心内容分成四个模块：

- `Quick Start`
  最短入门路径。先建立认知，再完成安装、渠道接入、首个工作流和基础排错。
- `Learn`
  更深入的教程库。解释认知模型、环境搭建、技能选择、工作流设计、中文生态、进阶排错和日常使用习惯。
- `Templates`
  用于快速落地可见结果的模板库，帮助用户从“知道怎么做”走向“真的跑出结果”。
- `Troubleshoot`
  按症状组织的恢复路径，让 first-run 失败变成可拆解、可恢复的问题，而不是死路。

## The Playbook Structure

这个仓库的写作和信息架构不是百科式的，而是 playbook 式的：

1. 先告诉读者这篇文章解决什么问题
2. 再给判断框架，而不是直接堆步骤
3. 解释什么时候该用、什么时候不该用
4. 明确列出常见误区
5. 最后给下一步阅读路径

这意味着好文章不是“概念解释更完整”，而是更像一个能带着人往下走的操作手册。

## Recommended Reader Path

如果你是第一次打开这个项目，最推荐的阅读顺序是：

1. `Quick Start`
   先完成 5 步路径，跑通一个最小闭环。
2. `Learn`
   再补认知、技能边界、环境选择、工作流设计和排错方法。
3. `Templates`
   当基础路径稳定后，用模板把结果做出来。
4. `Troubleshoot`
   当链路失败时，不乱猜，按症状回到对应恢复路径。

如果你是内容维护者，建议反着看：

1. 先确认 `Quick Start` 是否仍然是最短路径
2. 再补 `Learn` 里的认知和方法空白
3. 再看 `Templates` 是否承接了真实使用场景
4. 最后补 `Troubleshoot` 的恢复覆盖度

## Content Principles

这套教程的基本原则：

- 不把 OpenClaw 写成“另一个聊天机器人”
- 不默认用户一上来就理解模型、技能、渠道和工作区的关系
- 不让 first-run 用户一开始面对大而全的架构图
- 不用“会了这些你就无敌了”这种夸张叙事
- 尽量把抽象概念写回真实闭环、真实输入、真实输出

更具体一点：

- `Quick Start` 负责“最短路径”
- `Learn` 负责“理解为什么”
- `Templates` 负责“跑出结果”
- `Troubleshoot` 负责“失败后怎么回来”

## Repo Layout

```text
app/
  页面路由与站点框架

content/
  learn.ts
  site.ts
  quick-start/
  learn/
  template-library/
  troubleshoot-library/
  pages/

components/
  各内容模块的卡片、导航、内容渲染组件

lib/
  MDX 渲染、元数据、交叉链接、内容读取逻辑

docs/
  站点规划、架构计划与实现记录
```

最核心的内容文件位置：

- `content/quick-start/zh`
- `content/quick-start/en`
- `content/learn/zh`
- `content/learn/en`
- `content/template-library/zh`
- `content/template-library/en`
- `content/troubleshoot-library/zh`
- `content/troubleshoot-library/en`

## Local Development

启动本地开发环境：

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

如果本地 `next dev` 出现奇怪缓存问题，优先清理 `.next/` 后再重启，而不是先怀疑内容文件本身。

## How To Write New Content

如果你要继续扩写这个仓库，建议遵循下面这套 playbook 写法：

### 写 `Quick Start`

适合写：

- 最短路径
- 新手第一阶段最需要的判断
- 能立刻影响 first-run 成败的内容

写法要求：

- 强调“这一步为什么重要”
- 给出明确成功标准
- 避免写成长篇背景科普

### 写 `Learn`

适合写：

- 概念解释
- 决策框架
- 设计方法
- 进阶排错
- 日常使用习惯

写法要求：

- 不是摘要卡片扩写
- 要把主题讲清楚，而不是只给 3 条建议
- 要解释边界、误区和适用场景

### 写 `Templates`

适合写：

- 能直接复制或改造的 starter workflow
- 有明确输入、输出、渠道和使用对象的流程

写法要求：

- 让用户知道为什么这个模板值得先跑
- 说明风险、时间成本和适合人群

### 写 `Troubleshoot`

适合写：

- 按症状恢复
- 快速缩小问题范围
- 帮用户判断该回到 setup、workflow 还是权限层

写法要求：

- 先按症状分层
- 不要一上来就给一堆可能性
- 优先给“先看哪里”的顺序

## Editing Rules For Contributors

如果你继续维护这个仓库，建议默认遵守这些规则：

- 保持双语内容结构一致，但不要做生硬逐句翻译
- 新手向内容优先写“判断框架”和“成功标准”
- 避免官话、空话和概念堆叠
- 一篇文章至少要回答：解决什么、什么时候看、常见误区是什么、下一步去哪
- 如果内容足够重要进入首页路径，优先考虑它属于 `Quick Start` 还是 `Learn`

## Current State

目前这个仓库已经具备：

- 一条完整的双语 `Quick Start`
- 一套深度明显提升的中文 `Learn`
- 双语模板库与排错库
- 基于 MDX 的内容驱动结构

仍然适合继续补强的方向：

- 英文 `Learn` 与中文新版对齐
- `Templates` 继续增加真实 starter workflow
- `Troubleshoot` 增加更细的症状覆盖
- README 里对应的内容维护规范进一步细化为独立文档

## Why “Playbook”

因为这个项目不是要回答“OpenClaw 是什么”这么简单。  
它真正要解决的是：

- 新手应该先看什么
- 什么内容应该被放在第一阶段
- 什么误区最容易浪费时间
- 出错后应该回到哪一层

所以它不是文档堆，而是一份路径型 playbook。
