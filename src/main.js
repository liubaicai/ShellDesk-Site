const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");
const screenshot = document.querySelector("[data-screenshot]");
const shotButtons = document.querySelectorAll("[data-shot]");
const langButtons = document.querySelectorAll("[data-lang-option]");
const descriptionMeta = document.querySelector('meta[name="description"]');
const ogDescriptionMeta = document.querySelector('meta[property="og:description"]');

const translations = {
  en: {
    meta: {
      title: "ShellDesk | Visual SSH host workspace and remote operations toolkit",
      description:
        "ShellDesk brings SSH and local host management, card and list views, terminals, SFTP, browser and VNC access, databases, WebDAV sync, and operations tools into one desktop workspace.",
      ogDescription: "Visual SSH host workspace and remote operations toolkit.",
    },
    brand: {
      home: "ShellDesk home",
    },
    nav: {
      aria: "Primary navigation",
      features: "Features",
      workspace: "Workspace",
      security: "Security",
      download: "Download",
    },
    language: {
      aria: "Language",
    },
    menu: {
      open: "Open menu",
    },
    hero: {
      line: "Visual SSH host workspace and remote operations toolkit",
      text:
        "Organize SSH hosts with card and list views, colored groups and tags, recent-connection sorting, local mode, snippets, keys, proxies, logs, VNC, databases, WebDAV sync, and a full remote workbench.",
    },
    cta: {
      download: "Download latest release",
      github: "View on GitHub",
      source: "View source",
    },
    platforms: {
      aria: "Supported platforms",
      label: "Supported platforms",
    },
    product: {
      aria: "ShellDesk product screenshot",
    },
    frame: {
      title: "Host workspace · cards and lists",
    },
    screenshot: {
      aria: "Screenshot view",
      cards: "Card view",
      list: "List view",
    },
    metrics: {
      aria: "ShellDesk summary",
      views: "host views",
      tools: "built-in desktop apps",
      databases: "database types",
      license: "open-source license",
    },
    features: {
      title: "A calmer home for every SSH host",
      text:
        "The redesigned home screen keeps hosts, snippets, keys, known hosts, proxies, logs, settings, and the full SSH or local workbench in one compact operations console.",
    },
    feature: {
      hosts: {
        title: "Card and list host views",
        text:
          "Switch between dense tables and scannable cards, with pinned actions, sticky headers, recent sorting, and selection details.",
      },
      tags: {
        title: "Color-coded groups and tags",
        text:
          "Groups and tags use stable colors, making production, staging, network, backup, and custom labels easier to scan.",
      },
      browser: {
        title: "Browser and VNC access",
        text:
          "Use the SSH SOCKS proxy, Tauri browser proxy, and noVNC viewer to reach private web services and remote desktops.",
      },
      database: {
        title: "Database panels",
        text: "Browse and query MySQL, PostgreSQL, ClickHouse, MongoDB, Redis, and SQLite from the same workspace.",
      },
      ops: {
        title: "System operations tools",
        text: "Inspect processes, services, containers, ports, disks, logs, packages, Git repositories, web servers, S3 buckets, search clusters, and message queues.",
      },
      workbench: {
        title: "Open the workbench",
        text:
          "Jump from any host into the remote workbench for terminals, files, browsers, VNC, databases, monitors, services, and more.",
      },
      inventory: {
        title: "Host inventory details",
        text:
          "Connection success collects system, kernel, CPU, memory, disk summary, login method, key pair, and proxy metadata.",
      },
      storage: {
        title: "Snippets, keys, proxies, logs",
        text:
          "Manage reusable commands, SSH key pairs, known hosts, proxy profiles, and local operation logs with the same card UI.",
      },
    },
    workspace: {
      title: "Move from host inventory to SSH or local workbench",
      text:
        "Start on the host dashboard, connect with saved credentials or a typed SSH command, then open a focused desktop-style workbench for that SSH host or local machine.",
      check: {
        hosts: "Hosts, snippets, keys, known hosts, proxies, logs, and settings share one navigation model",
        details: "Right-side host details show connection, system, login, key, and proxy context",
        local: "Local mode, Browser, VNC, files, terminals, and database panels use the same Dock workflow",
      },
    },
    workflow: {
      connect: {
        title: "Choose a host",
        text: "Filter by search, group, tags, state, and sorting, then select the host you need.",
      },
      tools: {
        title: "Open the workbench",
        text: "Use saved keys, passwords, proxies, local profiles, or a one-line SSH command to enter the workspace.",
      },
      inspect: {
        title: "Inspect issues",
        text: "Review monitoring, logs, ports, services, and security checks in one place.",
      },
      audit: {
        title: "Sync and audit",
        text: "Record connection, host, config, and system operations in local logs, then back up the Vault with WebDAV when configured.",
      },
    },
    security: {
      title: "Local-first and controlled",
      text:
        "ShellDesk stores hosts, keys, app settings, and bookmarks in a local Vault. The React renderer reaches the Rust backend through the controlled window.guiSSH Tauri bridge.",
      encryption: {
        title: "System-backed encryption",
        text: "When platform support is available, sensitive data is encrypted with system credentials.",
      },
      file: {
        title: "Local file protection",
        text: "When system encryption is unavailable, the Vault falls back to local file-permission protection.",
      },
      bridge: {
        title: "Controlled Tauri bridge",
        text:
          "The renderer uses typed bridge APIs instead of direct backend access, keeping privileged work inside Rust commands.",
      },
    },
    download: {
      title: "Built for developers, operators, and technical teams",
      text:
        "Keep the same experience on macOS, Windows, and Linux, and bring remote work into one desktop workspace.",
    },
  },
  zh: {
    meta: {
      title: "ShellDesk | 可视化 SSH 主机工作台与远程运维工具",
      description:
        "ShellDesk 把 SSH 和本地连接、卡片和列表视图、终端、SFTP、浏览器、VNC、数据库、WebDAV 同步和运维工具收进一个桌面工作区。",
      ogDescription: "可视化 SSH 主机工作台与远程运维工具。",
    },
    brand: {
      home: "ShellDesk 首页",
    },
    nav: {
      aria: "主导航",
      features: "功能",
      workspace: "工作区",
      security: "安全",
      download: "下载",
    },
    language: {
      aria: "语言",
    },
    menu: {
      open: "打开菜单",
    },
    hero: {
      line: "可视化 SSH 主机工作台与远程运维工具",
      text:
        "用卡片和列表视图管理 SSH 主机，结合彩色分组标签、最近连接排序、本地模式、代码片段、密钥、代理、日志、VNC、数据库、WebDAV 同步和完整远程工作台。",
    },
    cta: {
      download: "下载最新版本",
      github: "查看 GitHub",
      source: "查看源码",
    },
    platforms: {
      aria: "支持平台",
      label: "支持平台",
    },
    product: {
      aria: "ShellDesk 产品截图",
    },
    frame: {
      title: "主机工作台 · 卡片和列表",
    },
    screenshot: {
      aria: "截图视图切换",
      cards: "卡片视图",
      list: "列表视图",
    },
    metrics: {
      aria: "ShellDesk 摘要",
      views: "主机视图",
      tools: "内置桌面应用",
      databases: "数据库类型",
      license: "开源协议",
    },
    features: {
      title: "让每台 SSH 主机都有清晰入口",
      text: "新版首页把主机、代码片段、密钥对、已知主机、代理、日志、设置和完整 SSH 或本地工作台收进一个紧凑的运维控制台。",
    },
    feature: {
      hosts: {
        title: "卡片和列表主机视图",
        text: "在高密度表格和可扫描卡片之间切换，保留固定操作列、表头吸附和右侧详情。",
      },
      tags: {
        title: "分组和标签彩色区分",
        text: "分组和标签会稳定映射到不同颜色，生产、测试、网络、备份等标记更容易扫读。",
      },
      browser: {
        title: "浏览器与 VNC",
        text: "基于 SSH SOCKS 代理、Tauri 浏览器代理和 noVNC 查看器访问远程 Web 服务与桌面。",
      },
      database: {
        title: "数据库面板",
        text: "覆盖 MySQL、PostgreSQL、ClickHouse、MongoDB、Redis、SQLite 的浏览和查询。",
      },
      ops: {
        title: "系统运维工具",
        text: "进程、服务、容器、端口、磁盘、日志、包管理、Git 仓库、Web 服务、S3、搜索集群和消息队列集中处理。",
      },
      storage: {
        title: "片段、密钥、代理、日志",
        text: "代码片段、SSH 密钥对、已知主机、代理配置和本地日志使用统一卡片式界面管理。",
      },
    },
    workspace: {
      title: "从主机资产直接进入 SSH 或本地工作台",
      text:
        "先在主机首页筛选和查看上下文，再用保存凭据或一行 SSH 命令进入这台 SSH 主机或本机的桌面式工作台。",
      check: {
        hosts: "主机、代码片段、密钥、已知主机、代理、日志、设置共用同一导航",
        details: "右侧详情展示连接、系统、登录方式、密钥和代理上下文",
        local: "本地模式、浏览器、VNC、文件、终端和数据库面板共用同一 Dock 工作流",
      },
    },
    workflow: {
      connect: {
        title: "选择主机",
        text: "通过搜索、分组、标签、状态和排序快速定位目标主机。",
      },
      tools: {
        title: "打开工作台",
        text: "使用已保存密钥、密码、代理、本地配置，或一行 SSH 命令进入工作区。",
      },
      inspect: {
        title: "定位问题",
        text: "监控、日志、端口、服务和安全巡检集中查看。",
      },
      audit: {
        title: "同步与留痕",
        text: "连接、主机、配置和系统操作写入本地日志，配置 WebDAV 后可备份本地 Vault。",
      },
    },
    security: {
      title: "本地优先，安全可控",
      text: "ShellDesk 的主机、密钥、应用设置和书签存入本地 Vault；React 渲染层通过受控的 window.guiSSH Tauri bridge 调用 Rust 后端。",
      encryption: {
        title: "系统凭据加密",
        text: "平台支持时，敏感数据使用系统凭据加密保存。",
      },
      file: {
        title: "本地文件保护",
        text: "系统加密不可用时，Vault 回退到本地文件权限保护。",
      },
      bridge: {
        title: "受控 Tauri 桥接",
        text: "渲染层使用类型化桥接 API，不直接访问后端能力，特权操作保留在 Rust command 中。",
      },
    },
    download: {
      title: "适用于开发、运维与技术团队",
      text: "在 macOS、Windows 与 Linux 上保持一致的体验，把远程工作收敛到一个桌面工作区。",
    },
  },
};

const screenshots = {
  cards: {
    src: "/assets/shelldesk-host-cards.png",
    alt: "ShellDesk host workspace showing card view, filters, host details, and remote workbench actions",
  },
  list: {
    src: "/assets/shelldesk-host-list.png",
    alt: "ShellDesk host workspace showing list view, colored group tags, last connection, and host details",
  },
};

function getTranslation(language, key) {
  return key.split(".").reduce((current, part) => current?.[part], translations[language]);
}

function setScreenshot(language) {
  const next = screenshots[language];

  if (!next || !screenshot) {
    return;
  }

  screenshot.src = next.src;
  screenshot.alt = next.alt;

  shotButtons.forEach((item) => {
    const isActive = item.dataset.shot === language;
    item.classList.toggle("active", isActive);
    item.setAttribute("aria-selected", String(isActive));
  });
}

function applyLanguage(language, { syncScreenshot = true } = {}) {
  const dictionary = translations[language] ?? translations.en;
  const normalized = translations[language] ? language : "en";

  document.documentElement.lang = normalized === "zh" ? "zh-CN" : "en";
  document.title = dictionary.meta.title;
  descriptionMeta?.setAttribute("content", dictionary.meta.description);
  ogDescriptionMeta?.setAttribute("content", dictionary.meta.ogDescription);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getTranslation(normalized, element.dataset.i18n);
    if (typeof value === "string") {
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const value = getTranslation(normalized, element.dataset.i18nAriaLabel);
    if (typeof value === "string") {
      element.setAttribute("aria-label", value);
    }
  });

  langButtons.forEach((button) => {
    const isActive = button.dataset.langOption === normalized;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (syncScreenshot) {
    const activeShot = document.querySelector("[data-shot].active")?.dataset.shot ?? "cards";
    setScreenshot(activeShot);
  }
}

function syncHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 8);
}

menuButton?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("is-open") ?? false;
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    nav.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
  }
});

shotButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.dataset.shot;
    setScreenshot(key);
  });
});

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const language = button.dataset.langOption === "zh" ? "zh" : "en";
    localStorage.setItem("shelldesk-site-language", language);
    applyLanguage(language);
  });
});

const savedLanguage = localStorage.getItem("shelldesk-site-language");
applyLanguage(savedLanguage === "zh" ? "zh" : "en");

window.addEventListener("scroll", syncHeader, { passive: true });
syncHeader();
