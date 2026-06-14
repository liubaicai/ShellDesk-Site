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
        "ShellDesk brings SSH host management, card and list views, remote terminals, SFTP, databases, local mode, and operations tools into one desktop workspace.",
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
        "Organize SSH hosts with card and list views, colored groups and tags, recent-connection sorting, local mode, snippets, keys, proxies, logs, and a full remote workbench.",
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
      tools: "built-in operations tools",
      local: "local workbench mode",
      license: "open-source license",
    },
    features: {
      title: "A calmer home for every SSH host",
      text:
        "The redesigned home screen keeps hosts, snippets, keys, known hosts, proxies, logs, and settings in one compact operations console.",
    },
    feature: {
      hosts: {
        title: "Card and list host views",
        text:
          "Switch between dense tables and scannable cards, with pinned actions, sticky headers, and selection details.",
      },
      tags: {
        title: "Color-coded groups and tags",
        text:
          "Groups and tags use stable colors, making production, staging, network, backup, and custom labels easier to scan.",
      },
      sort: {
        title: "Recent connection sorting",
        text:
          "Bring frequently used hosts to the front with recent-connection sorting alongside name, address, created, and updated order.",
      },
      workbench: {
        title: "Open the workbench",
        text:
          "Jump from any host into the remote workbench for terminals, files, browsers, databases, monitors, services, and more.",
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
      title: "Move from inventory to workbench without losing context",
      text:
        "Start on the host dashboard, connect with saved credentials or a typed SSH command, then open a focused desktop-style workbench for that machine.",
      check: {
        hosts: "Hosts, snippets, keys, known hosts, proxies, logs, and settings share one navigation model",
        details: "Right-side host details show connection, system, login, key, and proxy context",
        local: "Local mode opens a local workbench beside remote SSH hosts",
      },
    },
    workflow: {
      connect: {
        title: "Choose a host",
        text: "Filter by search, group, tags, state, and sorting, then select the host you need.",
      },
      tools: {
        title: "Open the workbench",
        text: "Use saved keys, passwords, proxies, or a one-line SSH command to enter the workspace.",
      },
      inspect: {
        title: "Inspect issues",
        text: "Review monitoring, logs, ports, services, and security checks in one place.",
      },
      audit: {
        title: "Keep an audit trail",
        text: "Record connection, host, config, and system operations in local logs.",
      },
    },
    security: {
      title: "Local-first and controlled",
      text:
        "ShellDesk stores hosts, keys, app settings, and bookmarks in a local Vault. The renderer process accesses controlled APIs through preload.",
      safeStorage: {
        title: "System-backed encryption",
        text: "When Electron safeStorage is available, sensitive data is encrypted with system credentials.",
      },
      file: {
        title: "Local file protection",
        text: "When system encryption is unavailable, the Vault falls back to local file-permission protection.",
      },
      bridge: {
        title: "Controlled bridge APIs",
        text:
          "ShellDesk enables contextIsolation, disables nodeIntegration, and exposes capabilities through preload.",
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
        "ShellDesk 把 SSH 主机管理、卡片和列表视图、远程终端、SFTP、数据库、本地模式和运维工具收进一个桌面工作区。",
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
        "用卡片和列表视图管理 SSH 主机，结合彩色分组标签、最近连接排序、本地模式、代码片段、密钥、代理、日志和完整远程工作台。",
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
      tools: "内置运维工具",
      local: "本地工作台模式",
      license: "开源协议",
    },
    features: {
      title: "让每台 SSH 主机都有清晰入口",
      text: "新版首页把主机、代码片段、密钥对、已知主机、代理、日志和设置收进一个紧凑的运维控制台。",
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
      sort: {
        title: "按最近连接排序",
        text: "常用主机可以按最近连接时间排到前面，也支持名称、地址、创建时间和更新时间排序。",
      },
      workbench: {
        title: "打开工作台",
        text: "从任意主机进入远程工作台，使用终端、文件、浏览器、数据库、监控、服务等工具。",
      },
      inventory: {
        title: "主机资产信息",
        text: "连接成功后自动采集系统、内核、CPU、内存、磁盘摘要、登录方式、密钥和代理信息。",
      },
      storage: {
        title: "片段、密钥、代理、日志",
        text: "代码片段、SSH 密钥对、已知主机、代理配置和本地日志使用统一卡片式界面管理。",
      },
    },
    workspace: {
      title: "从主机资产直接进入远程工作台",
      text:
        "先在主机首页筛选和查看上下文，再用保存凭据或一行 SSH 命令进入这台机器的桌面式工作台。",
      check: {
        hosts: "主机、代码片段、密钥、已知主机、代理、日志、设置共用同一导航",
        details: "右侧详情展示连接、系统、登录方式、密钥和代理上下文",
        local: "本地模式可以像远程 SSH 主机一样打开本地工作台",
      },
    },
    workflow: {
      connect: {
        title: "选择主机",
        text: "通过搜索、分组、标签、状态和排序快速定位目标主机。",
      },
      tools: {
        title: "打开工作台",
        text: "使用已保存密钥、密码、代理，或一行 SSH 命令进入工作区。",
      },
      inspect: {
        title: "定位问题",
        text: "监控、日志、端口、服务和安全巡检集中查看。",
      },
      audit: {
        title: "保留痕迹",
        text: "连接、主机、配置和系统操作写入本地日志。",
      },
    },
    security: {
      title: "本地优先，安全可控",
      text: "ShellDesk 的主机、密钥、应用设置和书签存入本地 Vault；渲染进程通过 preload 暴露受控 API。",
      safeStorage: {
        title: "系统凭据加密",
        text: "Electron safeStorage 可用时，敏感数据使用系统凭据加密保存。",
      },
      file: {
        title: "本地文件保护",
        text: "系统加密不可用时，Vault 回退到本地文件权限保护。",
      },
      bridge: {
        title: "受控桥接接口",
        text: "启用 contextIsolation，禁用 nodeIntegration，经 preload 暴露能力。",
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
