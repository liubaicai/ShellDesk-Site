# ShellDesk Site

ShellDesk Site 是 ShellDesk 的静态产品官网，用于介绍 ShellDesk 的产品定位、核心功能、截图展示和下载入口。站点基于 Vite 构建，可直接部署到 Vercel。

ShellDesk 是一个虚拟远程桌面与图形化服务器管理工具，把 SSH 主机管理、远程终端、SFTP、浏览器、数据库和系统运维工具收进一个桌面式工作区。

站点默认使用英文内容，右上角提供 `EN / 中文` 切换，并会记住用户选择的语言。

## 项目结构

```text
ShellDeskSite/
├── index.html                    # 页面主体与 SEO 元信息
├── src/
│   ├── main.js                   # 截图切换、移动端菜单、Header 状态
│   └── styles.css                # 页面样式
├── public/assets/                # ShellDesk 图标与产品截图
├── docs/design/                  # 设计概念图
├── vercel.json                   # Vercel 部署配置
├── package.json                  # 本地开发与构建脚本
└── pnpm-lock.yaml
```

## 本地开发

需要 Node.js 20 或更高版本，推荐使用 pnpm。

```bash
pnpm install
pnpm dev
```

默认开发地址：

```text
http://127.0.0.1:5173/
```

## 生产构建

```bash
pnpm build
```

构建产物会输出到：

```text
dist/
```

本地预览生产构建：

```bash
pnpm preview
```

默认预览地址：

```text
http://127.0.0.1:4173/
```

## 部署到 Vercel

仓库已包含 `vercel.json`：

```json
{
  "framework": "vite",
  "buildCommand": "pnpm build",
  "outputDirectory": "dist"
}
```

### 方式一：通过 Vercel 网页部署

1. 将本仓库推送到 GitHub、GitLab 或 Bitbucket。
2. 打开 [Vercel Dashboard](https://vercel.com/dashboard)。
3. 点击 `Add New...`，选择 `Project`。
4. 导入 ShellDeskSite 仓库。
5. Framework Preset 选择 `Vite`，通常 Vercel 会自动识别。
6. 确认构建配置：
   - Build Command: `pnpm build`
   - Output Directory: `dist`
   - Install Command: `pnpm install`
7. 点击 `Deploy`。

部署完成后，Vercel 会分配一个 `*.vercel.app` 域名。后续推送到默认分支会自动触发重新部署。

### 方式二：通过 Vercel CLI 部署

安装 Vercel CLI：

```bash
pnpm add -g vercel
```

首次关联项目：

```bash
vercel
```

按提示选择账号、团队和项目配置。正式发布到生产环境：

```bash
vercel --prod
```

如果只想先生成预览部署：

```bash
vercel
```

## 常用命令

| 命令 | 说明 |
| :--- | :--- |
| `pnpm install` | 安装依赖 |
| `pnpm dev` | 启动本地开发服务器 |
| `pnpm build` | 构建生产静态文件 |
| `pnpm preview` | 本地预览生产构建 |
| `vercel` | 创建 Vercel 预览部署 |
| `vercel --prod` | 发布到 Vercel 生产环境 |

## 资源说明

- `public/assets/shelldesk-icon.png`：ShellDesk 应用图标
- `public/assets/shelldesk-host-cards.png`：新版主机首页卡片视图截图
- `public/assets/shelldesk-host-list.png`：新版主机首页列表视图截图
- `public/assets/shelldesk-screenshot-zh.png`：中文界面截图
- `public/assets/shelldesk-screenshot-en.png`：英文界面截图
- `docs/design/shelldesk-site-concept.png`：站点视觉概念图

## License

This website project is intended for the ShellDesk project. ShellDesk itself is licensed under GPL-3.0-only.
