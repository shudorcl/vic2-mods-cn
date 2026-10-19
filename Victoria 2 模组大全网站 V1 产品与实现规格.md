# Victoria 2 模组大全

暂定名称：

**Victoria 2 Mods Archive / 维多利亚2模组大全**

定位不是 Wiki，也不是新闻博客，而是：

> 面向中文玩家的 Victoria 2 模组资料库、检索站与模组谱系档案。

核心目标：

1. 快速回答“有什么模组？”
2. 快速回答“这个模组是干什么的？”
3. 快速回答“它和 HPM / HFM / GFM / DoD 等是什么关系？”
4. 提供可靠的下载、汉化、版本和安装信息。
5. 允许以后逐步增加长篇介绍、攻略和历史资料。
6. 全站尽量纯静态，确保 Cloudflare 托管简单，并减少中国大陆访问时对海外第三方服务的依赖。

---

# 1. 网站信息架构

顶部导航建议只保留：

```text
[Logo]  模组库   模组谱系   专题指南   关于       🔍 搜索
```

首页不是博客时间流，而是“数据库入口”。

路由规划：

```text
/
├── /mods/                         模组库
│   ├── /mods/gfm/
│   ├── /mods/hpm/
│   └── /mods/...
│
├── /categories/
│   ├── /categories/historical/
│   ├── /categories/alternate-history/
│   ├── /categories/overhaul/
│   └── /categories/qol/
│
├── /tags/
│   ├── /tags/china/
│   ├── /tags/economy/
│   └── /tags/ww1/
│
├── /lineage/                      模组谱系
│
├── /guides/
│   ├── /guides/getting-started/
│   ├── /guides/install-mods/
│   └── /guides/recommended-mods/
│
├── /collections/                  编辑精选专题
│   ├── /collections/best-overhauls/
│   ├── /collections/china-mods/
│   └── /collections/alternate-history/
│
├── /search/
│
└── /about/
```

第一版真正需要做的只有：

```text
/
 /mods/
 /mods/[slug]/
 /lineage/
 /guides/
 /search/
 /about/
```

其他页面都可以由 tag/category 自动生成。

---

# 2. 首页设计

首页最重要的是让第一次进来的用户 5 秒内知道：

> 这是一个 Victoria 2 模组数据库。

## Desktop 草图

```text
┌───────────────────────────────────────────────────────────────┐
│ VICTORIA II MODS ARCHIVE      模组库  模组谱系  指南   🔍    │
├───────────────────────────────────────────────────────────────┤
│                                                               │
│              维多利亚 2 模组大全                              │
│                                                               │
│      收录 Victoria II 社区的大型模组、子模组、汉化与资料       │
│                                                               │
│      ┌───────────────────────────────────────────────┐        │
│      │ 🔍 搜索模组、国家、题材、机制……               │        │
│      └───────────────────────────────────────────────┘        │
│                                                               │
│       128 个模组 · 37 个仍在更新 · 24 个中文可用              │
│                                                               │
├───────────────────────────────────────────────────────────────┤
│ 热门模组                                                       │
│                                                               │
│ ┌───────────┐ ┌───────────┐ ┌───────────┐ ┌───────────┐      │
│ │   GFM     │ │    HPM    │ │    DoD    │ │   CWE     │      │
│ │ [截图]    │ │ [截图]    │ │ [截图]    │ │ [截图]    │      │
│ │ 历史增强  │ │ 历史增强  │ │ 架空历史  │ │ 冷战      │      │
│ └───────────┘ └───────────┘ └───────────┘ └───────────┘      │
│                                                               │
├───────────────────────────────────────────────────────────────┤
│ 按类型浏览                                                     │
│                                                               │
│ [历史增强] [架空历史] [大型重制] [冷战] [地图] [QoL]          │
│                                                               │
├───────────────────────────────────────────────────────────────┤
│ 模组谱系                                                       │
│                                                               │
│ HPM ─────→ HFM ─────→ GFM                                    │
│   └──────→ ...                                                 │
│                                                               │
│                         [查看完整谱系 →]                        │
│                                                               │
├───────────────────────────────────────────────────────────────┤
│ 最近更新                         新收录                         │
│ GFM         2026-09-xx          XXX Mod                       │
│ DoD         2026-08-xx          XXX Mod                       │
│ ...                                                            │
└───────────────────────────────────────────────────────────────┘
```

首页不要堆长文章。

它应该更像：

> SteamDB + ModDB + Wiki Portal

而不是 WordPress。

---

# 3. 模组库页面

`/mods/`

这是网站最核心的页面。

布局：

```text
┌──────────────────────────────────────────────────────────────┐
│ 模组库                                            128 Mods   │
│                                                              │
│ 🔍 [搜索模组……………………………………]                         │
│                                                              │
│ 类型      [全部] [历史] [架空] [冷战] [QoL]                  │
│ 状态      [开发中] [完成] [停止维护]                         │
│ 语言      [中文] [英文]                                      │
│                                                              │
│ 排序      推荐度 ▼                                           │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│ ┌─────────────┐  Greater Flavor Mod                          │
│ │             │  GFM                                        │
│ │   Preview   │                                              │
│ │             │  大型历史增强模组……                         │
│ └─────────────┘                                              │
│                  [历史] [大型重制] [仍在更新]                 │
│                  中文：✓     基于：HFM                       │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│ ...                                                          │
└──────────────────────────────────────────────────────────────┘
```

Desktop 可以选择：

```text
[卡片模式] [列表模式]
```

但 V1 只做卡片模式即可。

过滤应该在浏览器完成。

不请求服务器 API。

构建时输出一个精简 JSON：

```text
/mod-index.json
```

里面只有：

```json
{
  "id": "gfm",
  "title": "Greater Flavor Mod",
  "shortName": "GFM",
  "description": "...",
  "categories": ["historical", "overhaul"],
  "languages": ["en"],
  "status": "active"
}
```

这样即使有几百个模组也很轻。

---

# 4. 模组详情页

这是整个网站信息密度最高的页面。

例如：

```text
/mods/gfm/
```

顶部：

```text
┌──────────────────────────────────────────────────────────────┐
│ ← 模组库                                                     │
│                                                              │
│ ┌────────────┐  Greater Flavor Mod                           │
│ │            │  GFM                                         │
│ │   Cover    │                                               │
│ │            │  在 HFM 基础上继续扩展的大型历史增强模组……   │
│ └────────────┘                                               │
│                                                              │
│                [历史] [大型重制] [开发中]                     │
│                                                              │
│                最新版本       xxx                            │
│                Victoria 2     3.04                           │
│                语言           English                        │
│                最后更新       2026-xx-xx                     │
│                                                              │
│                [GitHub] [ModDB] [下载]                       │
└──────────────────────────────────────────────────────────────┘
```

正文：

```text
简介
────────────────────────────────

主要特色
────────────────────────────────

• ...
• ...
• ...

截图
────────────────────────────────

[ image ] [ image ] [ image ]

模组谱系
────────────────────────────────

HPM
 │
 ▼
HFM
 │
 ▼
GFM   ← 当前
 │
 ├── Submod A
 └── Submod B

安装方式
────────────────────────────────

中文支持
────────────────────────────────

下载与相关链接
────────────────────────────────

相关模组
────────────────────────────────
```

Desktop 详情页建议采用：

```text
正文                     右侧信息栏
──────────────────       ──────────────
简介                     状态
特色                     游戏版本
截图                     当前版本
历史                     开发者
安装                     语言
汉化                     下载地址
```

手机端右侧栏自动移动到正文顶部。

---

# 5. 最关键的数据模型

不要把所有内容直接写在 Markdown 正文里。

需要检索、分类、排序的信息全部放 frontmatter。

例如：

```yaml
---
title: Greater Flavor Mod
shortName: GFM

description: >
  一个大型 Victoria 2 历史增强与内容扩展模组。

status: active

gameVersion:
  - "3.04"

latestVersion: "..."

lastUpdated: 2026-09-15

authors:
  - GFM Team

languages:
  - en

chinese:
  available: false
  link: null

categories:
  - historical
  - overhaul

tags:
  - flavor
  - events
  - map
  - economy

lineage:
  basedOn:
    - hfm
  inspiredBy: []
  forks: []

links:
  github: https://...
  moddb: https://...
  discord: https://...

downloads:
  - name: GitHub Releases
    url: https://...
    official: true

cover: ./images/cover.webp

screenshots:
  - ./images/01.webp
  - ./images/02.webp

featured: true

recommendation:
  beginnerFriendly: true
  score: 5
---
```

Markdown 正文只负责：

```markdown
## 简介

……

## 主要特色

……

## 历史

……

## 安装

……
```

---

# 6. 谱系关系应该作为一等数据

这是我认为这个网站最值得做的特色。

例如不要只写：

> GFM 基于 HFM。

而应该真正把它存成：

```yaml
lineage:
  basedOn:
    - hfm
```

这样构建的时候就可以自动反向查询：

```text
HPM
 └─ HFM
     └─ GFM
```

以后也可以增加：

```yaml
relations:
  basedOn:
  forkOf:
  successorOf:
  inspiredBy:
  submodOf:
  compatibleWith:
```

最终 `/lineage/` 可以做成：

```text
                    ┌──── GFM
HPM ─── HFM ────────┤
                    └──── Another Mod

        ┌──── Mod A
DoD ────┤
        └──── Mod B
```

V1 不需要复杂图形库。

先使用 HTML + CSS 生成：

> 模组祖先 / 派生模组

即可。

V2 再考虑真正的交互式 graph。

---

# 7. Astro Content Collections

目录：

```text
src/
├── content/
│   ├── mods/
│   │   ├── gfm/
│   │   │   ├── index.md
│   │   │   └── images/
│   │   │       ├── cover.webp
│   │   │       └── 01.webp
│   │   │
│   │   ├── hpm/
│   │   │   └── index.md
│   │   │
│   │   └── dod/
│   │       └── index.md
│   │
│   ├── guides/
│   │   ├── install-mods.md
│   │   └── getting-started.md
│   │
│   └── collections/
│       └── recommended-mods.md
│
└── content.config.ts
```

Schema 建议一开始就严格。

示意：

```ts
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const mods = defineCollection({
  loader: glob({
    pattern: "**/index.{md,mdx}",
    base: "./src/content/mods",
  }),

  schema: z.object({
    title: z.string(),
    shortName: z.string().optional(),

    description: z.string(),

    status: z.enum([
      "active",
      "completed",
      "inactive",
      "unknown",
    ]),

    gameVersion: z.array(z.string()),

    latestVersion: z.string().optional(),

    lastUpdated: z.coerce.date().optional(),

    authors: z.array(z.string()).default([]),

    languages: z.array(z.string()).default(["en"]),

    categories: z.array(z.string()).default([]),

    tags: z.array(z.string()).default([]),

    lineage: z.object({
      basedOn: z.array(z.string()).default([]),
      inspiredBy: z.array(z.string()).default([]),
      forks: z.array(z.string()).default([]),
    }).optional(),

    links: z.object({
      github: z.string().url().optional(),
      moddb: z.string().url().optional(),
      discord: z.string().url().optional(),
      website: z.string().url().optional(),
    }).optional(),

    featured: z.boolean().default(false),
  }),
});

export const collections = {
  mods,
};
```

最大的好处是：

有人写：

```yaml
status: activ
```

构建直接失败。

不会悄悄产生错误数据。

---

# 8. 项目完整目录

建议：

```text
vic2-mods/
│
├── public/
│   ├── favicon.svg
│   ├── fonts/
│   ├── icons/
│   ├── robots.txt
│   └── _headers
│
├── src/
│   │
│   ├── assets/
│   │
│   │
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── SearchButton.astro
│   │   │
│   │   ├── mod/
│   │   │   ├── ModCard.astro
│   │   │   ├── ModGrid.astro
│   │   │   ├── ModMeta.astro
│   │   │   ├── ModStatus.astro
│   │   │   ├── ModTags.astro
│   │   │   ├── ModDownloads.astro
│   │   │   └── ModLineage.astro
│   │   │
│   │   └── search/
│   │       ├── SearchDialog.astro
│   │       └── FilterBar.astro
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── ContentLayout.astro
│   │   └── ModLayout.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   ├── mods/
│   │   │   ├── index.astro
│   │   │   └── [id].astro
│   │   │
│   │   ├── lineage/
│   │   │   └── index.astro
│   │   ├── guides/
│   │   │   └── [...slug].astro
│   │   ├── search.astro
│   │   └── about.astro
│   │
│   ├── content/
│   │   ├── mods/
│   │   ├── guides/
│   │   └── collections/
│   │
│   ├── styles/
│   │   ├── global.css
│   │   └── tokens.css
│   │
│   ├── utils/
│   │   ├── mods.ts
│   │   ├── lineage.ts
│   │   └── filters.ts
│   │
│   └── content.config.ts
│
├── scripts/
│   ├── validate-links.ts
│   └── generate-mod-index.ts
│
├── astro.config.mjs
├── wrangler.jsonc
├── package.json
└── README.md
```

---

# 9. 搜索

使用 Pagefind。

流程：

```text
Astro build
    ↓
dist/
    ↓
Pagefind index
    ↓
dist/pagefind/
    ↓
Cloudflare
```

package.json：

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build && pagefind --site dist",
    "preview": "astro preview"
  }
}
```

搜索内容包括：

```text
模组名称
简称
中文译名
简介
正文
Tag
国家名
题材
```

不要搜索：

```text
导航栏
Footer
相关推荐
```

详情正文：

```html
<main data-pagefind-body>
```

即可控制索引区域。

---

# 10. 中国大陆访问原则

这是项目层面直接定死的规则。

禁止：

```text
Google Fonts
Google Analytics
cdnjs
unpkg
jsDelivr
Gravatar
外部 icon CDN
运行时 GitHub API
运行时 ModDB API
```

尽量避免：

```text
Discord embed
YouTube iframe
Twitter/X embed
```

所有核心资源：

```text
HTML
CSS
JS
字体
图标
封面
缩略图
搜索索引
```

全部从自己的域名加载。

也就是说打开一个详情页时：

```text
vic2mods.xxx
vic2mods.xxx
vic2mods.xxx
vic2mods.xxx
```

而不是：

```text
fonts.googleapis.com
cdn.jsdelivr.net
githubusercontent.com
google-analytics.com
youtube.com
...
```

这样即使服务器还在海外，大陆体验也会稳定很多。

---

# 11. 图片策略

不要直接存 PNG 原图。

Repo 可以保留：

```text
source-images/
```

构建前生成：

```text
cover-400.webp
cover-800.webp
screenshot-800.webp
screenshot-1600.webp
```

首页卡片加载：

```text
400px WebP
```

详情页预览：

```text
800px WebP
```

点击查看：

```text
1600px WebP / AVIF
```

全部：

```html
loading="lazy"
```

首屏 hero 图例外。

---

# 12. 视觉风格

不要完全复刻 Victoria 2 原版 UI。

否则容易变成：

> 2010 年代 Wiki。

建议：

**现代资料库 + 少量维多利亚时代视觉元素。**

主视觉可以是：

```text
背景：暖灰 / 羊皮纸白
正文：深灰
主色：暗红 / Burgundy
辅助色：暗金
边框：低饱和灰棕
```

例如：

```text
#F6F2E9   页面背景
#EEE8DC   卡片背景
#292725   正文
#7A263A   主色
#997B4E   金色强调
```

字体：

中文：

```text
系统字体优先
PingFang SC
Microsoft YaHei
Noto Sans SC（如果使用必须 self-host）
```

标题可以用 serif：

```text
Georgia
Noto Serif SC
```

整体感觉：

> 博物馆档案馆 / 历史地图资料库

而不是：

> 游戏论坛。

---

# 13. Mod Card

统一卡片非常重要。

```text
┌─────────────────────────┐
│                         │
│        Screenshot       │
│                         │
├─────────────────────────┤
│ Greater Flavor Mod      │
│ GFM                     │
│                         │
│ 大型历史增强模组……      │
│                         │
│ [历史] [Overhaul]       │
│                         │
│ 🟢 开发中     中文 ✕    │
└─────────────────────────┘
```

卡片最多展示这些信息。

不要把：

```text
开发者
GitHub
版本
发布日期
详细依赖
```

全部塞进去。

---

# 14. 状态系统

统一定义，不允许作者自己随意填：

```text
🟢 Active
仍在开发

🔵 Completed
已完成 / 基本稳定

🟡 Maintenance
维护模式

⚫ Inactive
停止开发

❔ Unknown
状态未知
```

避免使用：

> Dead Mod

这种主观表达。

---

# 15. 下载链接也应该结构化

不要只在正文塞一个 URL。

使用：

```yaml
downloads:
  - name: GitHub Releases
    provider: github
    url: ...
    official: true

  - name: ModDB
    provider: moddb
    url: ...
    official: true

  - name: 百度网盘汉化
    provider: baidu
    url: ...
    official: false
```

页面就能自动标记：

```text
官方
社区镜像
汉化
```

以后还可以自动检测死链。

---

# 16. “信息可信度”字段

这个站长期很容易碰到：

> 这个模组到底还活着吗？

因此可以增加：

```yaml
verified:
  date: 2026-10-01
  source: github
```

页面显示：

```text
资料核验：2026 年 10 月
```

比单纯写：

> Active

可信很多。

---

# 17. 投稿机制

第一阶段甚至不用做后台。

直接：

```text
GitHub Pull Request
```

网站放：

```text
[提交新模组]
[纠正资料]
```

对应 GitHub Issue Template。

以后如果中文社区用户不熟 GitHub，再做简单表单：

```text
Cloudflare Worker
       ↓
GitHub Issue
```

但 V1 不做。

---

# 18. Cloudflare 部署

保持纯 static output：

```js
// astro.config.mjs
import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
});
```

构建：

```bash
npm run build
```

生成：

```text
dist/
```

Wrangler：

```json
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "vic2-mods",
  "compatibility_date": "2026-10-06",
  "assets": {
    "directory": "./dist"
  }
}
```

部署：

```bash
npx wrangler deploy
```

不需要真正写 Worker JS。

---

# 19. V1 首页内容

第一版首页只放：

```text
Hero + 全站搜索

精选模组
6 个

按类型浏览
历史 / 架空 / Overhaul / 冷战 / QoL

模组谱系入口

最近更新
5 个

新收录
5 个
```

不要一开始就做：

```text
排行榜
用户评分
评论
账号
收藏
下载统计
论坛
```

这些都意味着后端。

对于一个资料站，没有必要。

---

# 20. V1 最小发布范围

我建议第一版目标：

```text
20~30 个代表性模组
```

而不是一上来收录 200 个。

至少覆盖：

```text
Vanilla Enhancement

HPM 系
HFM 系
GFM 系

Alternate History
DoD 等

Cold War

其他大型 Overhaul

几个有代表性的中文模组/汉化
```

先把数据模型验证出来。

20 个写舒服之后，再扩大。

---

# 21. 开发顺序

### Phase 1：骨架

实现：

```text
Astro
Content Collections
Cloudflare
BaseLayout
Header
Footer
```

### Phase 2：数据库

实现：

```text
Mod schema
ModCard
/mods/
/mods/[id]/
```

放进去 5 个测试模组。

### Phase 3：发现能力

实现：

```text
Tag
Category
Filter
Pagefind
```

### Phase 4：特色

实现：

```text
Lineage
Related Mods
Chinese availability
Verified date
```

### Phase 5：内容

开始正式录入：

```text
20 → 50 → 100 Mods
```

---

# 22. 手机端

这个项目很可能大量用户：

> 在贴吧 / QQ / 群里看到一个 Mod，然后手机点进去。

所以手机优先级很高。

Mobile 首页：

```text
┌────────────────────┐
│ VIC2 MODS      ☰   │
├────────────────────┤
│                    │
│ 维多利亚2模组大全  │
│                    │
│ ┌────────────────┐ │
│ │ 🔍 搜索……     │ │
│ └────────────────┘ │
│                    │
│ 热门模组           │
│                    │
│ ┌────────────────┐ │
│ │      GFM       │ │
│ │     image      │ │
│ │ 历史 · Overhaul│ │
│ └────────────────┘ │
│                    │
│ ┌────────────────┐ │
│ │      DoD       │ │
│ └────────────────┘ │
└────────────────────┘
```

Mod 页面顶部：

```text
Cover

Greater Flavor Mod
GFM

大型历史增强……

[历史] [Overhaul]

🟢 开发中
Victoria II 3.04
English

[官方下载]

────────────

简介

……
```

侧边栏全部消失。

---

# 23. 一个很重要的产品原则

这个站不要试图回答：

> 模组作者原文写了什么？

而要回答：

> 一个玩家在决定要不要玩这个模组时，真正想知道什么？

所以模组首页优先信息应该是：

```text
它是什么？

和原版相比改了什么？

它基于什么？

现在还在更新吗？

中文能玩吗？

适合第一次玩吗？

去哪里下载？

安装麻烦吗？
```

这会比传统 Wiki 实用很多。

---

# 24. 可以作为网站招牌的功能

最终我会把这三个东西做成网站区别于 ModDB / Wiki 的核心：

### ① 模组谱系

```text
HPM
 ↓
HFM
 ↓
GFM
```

直接告诉新人这些名字到底是什么关系。

### ② 中文可用性

明确区分：

```text
官方中文
社区汉化
机翻
无中文
汉化版本落后
```

这是英文资料站基本不会替你整理的信息。

### ③ “我该玩哪个？”

例如：

```text
如果你想玩接近原版的历史体验
→ HPM / ...

如果你想要内容最多
→ ...

如果你喜欢架空历史
→ ...

如果你想玩冷战
→ ...
```

这比纯模组目录更有价值。

---

# 25. 给 Codex 的第一阶段任务书

可以直接把下面这段交给 Codex：

> Build the initial version of a Chinese-language Victoria II mod archive.
>
> Use:
>
> - Astro
> - TypeScript
> - Astro Content Collections
> - Markdown/MDX
> - Pagefind
> - static output only
> - Cloudflare Workers Static Assets
>
> The application must not require a database, SSR, authentication, or runtime external APIs.
>
> The site should contain:
>
> - `/` homepage
> - `/mods/` mod directory
> - `/mods/[id]/` mod detail pages
> - `/lineage/`
> - `/guides/`
> - `/search/`
> - `/about/`
>
> Implement a strict `mods` content collection schema including:
>
> - title
> - shortName
> - description
> - status
> - gameVersion
> - latestVersion
> - lastUpdated
> - authors
> - languages
> - categories
> - tags
> - lineage
> - links
> - downloads
> - featured
>
> Build reusable components including:
>
> - ModCard
> - ModGrid
> - ModMeta
> - ModStatus
> - ModTags
> - ModDownloads
> - ModLineage
>
> The visual direction should be a modern historical archive rather than an imitation of Victoria II's original UI:
>
> - warm off-white background
> - dark text
> - burgundy primary accent
> - muted gold secondary accent
> - restrained borders
> - responsive layout
> - mobile-first
>
> Avoid all third-party runtime frontend dependencies hosted on external CDNs.
>
> Fonts, icons, JavaScript, CSS, images and search indexes must be served from the site's own domain.
>
> Add five mock mod entries demonstrating different:
>
> - statuses
> - categories
> - language support
> - lineage relationships
>
> Add Pagefind indexing as a post-build step.
>
> Configure the generated `dist/` directory for deployment using Cloudflare Workers Static Assets.
>
> Keep JavaScript minimal. Prefer Astro-rendered static HTML whenever possible.
>
> Do not implement user accounts, comments, ratings or a backend in this phase.
>
> The result should be a clean and maintainable foundation intended to eventually hold hundreds of Victoria II mods.