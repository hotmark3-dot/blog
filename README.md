# 盛一伟个人博客

基于 TinaCMS 的个人博客系统，采用 Apple 简约深色风格设计。

## 功能特点

- ✍️ TinaCMS 可视化编辑器，随时随地创作
- 🏷️ 分类支持（随笔 / 商业洞察）
- 🏷️ 标签系统
- 📱 响应式设计，适配各种设备
- 🌙 深色模式
- 🇨🇳🇺🇸 中英文双语

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 配置 TinaCMS

前往 [tina.io](https://tina.io) 注册并创建项目，获取 Client ID 和 Token。

复制环境变量配置文件：

```bash
cp .env.local.example .env.local
```

填入你的 TinaCMS 凭证：

```
NEXT_PUBLIC_TINA_BRANCH=main
NEXT_PUBLIC_TINA_CLIENT_ID=your_client_id
TINA_TOKEN=your_token
```

### 3. 启动开发服务器

```bash
npm run dev
```

访问：
- 博客前台：http://localhost:3000
- CMS 管理后台：http://localhost:3000/admin

### 4. 创建内容

登录管理后台后，可以：

- 创建新文章（支持 Markdown 富文本编辑）
- 编辑已有文章
- 上传图片到媒体库
- 管理草稿状态

## 项目结构

```
blog-cms/
├── app/                    # Next.js App Router
│   ├── page.tsx           # 首页（文章列表）
│   ├── about/page.tsx     # 关于页面
│   └── posts/[slug]/      # 单篇文章页
├── components/             # React 组件
│   ├── Navbar.tsx         # 导航栏
│   └── Footer.tsx         # 页脚
├── content/               # Markdown 内容
│   └── posts/             # 文章目录
├── lib/                   # 工具函数
│   └── api.ts             # 文章读取 API
├── tina/                  # TinaCMS 配置
│   └── config.js          # 集合和字段定义
└── public/                # 静态资源
```

## 写作指南

### Front Matter 格式

```markdown
---
title: 文章标题
subtitle: 副标题
excerpt: 文章摘要（显示在列表页）
date: 2024-03-30
category: 随笔        # 或 商业洞察
tags: 标签1,标签2,标签3
coverImage: https://example.com/image.jpg
draft: false         # true 为草稿，不会公开发布
---

# 正文开始
```

### 分类说明

- **随笔** — 生活感悟、读书笔记、随想杂谈
- **商业洞察** — 行业分析、运营策略、商业思考

## 部署

项目使用 Next.js 14 App Router，支持 Vercel、Netlify 等平台部署。

### Vercel 部署

1. Fork 本项目到 GitHub
2. 在 Vercel 导入项目
3. 配置环境变量（NEXT_PUBLIC_TINA_BRANCH, NEXT_PUBLIC_TINA_CLIENT_ID, TINA_TOKEN）
4. Deploy

### 构建生产版本

```bash
npm run build
```

## 技术栈

- **框架**: Next.js 14 (App Router)
- **CMS**: TinaCMS v2
- **样式**: CSS Variables (Apple 风格)
- **日期处理**: date-fns
- **内容解析**: gray-matter

## License

MIT
