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
      title: "ShellDesk | Virtual remote desktop and graphical server management toolkit",
      description:
        "ShellDesk brings SSH host management, remote terminals, SFTP, browser access, databases, and operations tools into one desktop-style workspace.",
      ogDescription: "Virtual remote desktop and graphical server management toolkit.",
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
      line: "Virtual remote desktop and graphical server management toolkit",
      text:
        "Manage SSH hosts, remote terminals, SFTP, browser access, databases, and operations tools in one desktop-style workspace, so teams switch less and solve more.",
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
    screenshot: {
      aria: "Screenshot language",
      zh: "Chinese UI",
      en: "English UI",
    },
    metrics: {
      aria: "ShellDesk summary",
      connection: "connection window",
      tools: "built-in operations tools",
      databases: "database types",
      license: "open-source license",
    },
    features: {
      title: "One desktop for everyday server work",
      text:
        "After connecting to a host, ShellDesk lets you open terminals, files, browsers, databases, and system tools like local desktop apps.",
    },
    feature: {
      terminal: {
        title: "Multi-session terminal",
        text:
          "xterm.js terminals support multiple sessions, themes, scrollback, copy/paste, and configurable fonts.",
      },
      sftp: {
        title: "SFTP and remote editing",
        text: "Browse, upload, download, compress, extract, and edit remote configuration files in Notepad.",
      },
      browser: {
        title: "Private-network browser",
        text:
          "Use the SSH SOCKS proxy to reach private remote services without managing a separate proxy setup.",
      },
      database: {
        title: "Database panels",
        text: "Browse and query MySQL, PostgreSQL, MongoDB, Redis, and SQLite from the same workspace.",
      },
      ops: {
        title: "System operations tools",
        text: "Inspect processes, services, containers, ports, disks, logs, packages, and scheduled tasks.",
      },
      security: {
        title: "Security audit",
        text:
          "Review logins, ports, firewall state, system settings, and host risks while keeping terminal fallback close.",
      },
    },
    workspace: {
      title: "Organize every task around one SSH connection",
      text:
        "Each host opens in an independent connection window with the host and SOCKS port in the title bar. Desktop windows support drag, resize, maximize, minimize, z-order management, and Dock access.",
      check: {
        hosts: "Host groups, tags, notes, and system type detection",
        dock: "File Manager, Terminal, and Browser pinned to the Dock",
        layout: "Custom desktop icon layout, folders, sorting, and wallpaper",
      },
    },
    workflow: {
      connect: {
        title: "Connect to a host",
        text: "Read hosts, keys, and authentication settings from the local Vault.",
      },
      tools: {
        title: "Open tools",
        text: "Run terminals, files, databases, browser access, and system tools side by side.",
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
      title: "ShellDesk | 虚拟远程桌面与图形化服务器管理工具",
      description:
        "ShellDesk 把 SSH 主机管理、远程终端、SFTP、浏览器、数据库和系统运维工具收进一个桌面式工作区。",
      ogDescription: "虚拟远程桌面与图形化服务器管理工具。",
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
      line: "虚拟远程桌面与图形化服务器管理工具",
      text:
        "在一个桌面式工作区中管理 SSH 主机、远程终端、SFTP、浏览器、数据库和系统运维工具，让开发与运维团队少切换窗口，多处理问题。",
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
    screenshot: {
      aria: "截图语言切换",
      zh: "中文界面",
      en: "English UI",
    },
    metrics: {
      aria: "ShellDesk 摘要",
      connection: "连接窗口",
      tools: "内置运维工具",
      databases: "数据库类型",
      license: "开源协议",
    },
    features: {
      title: "把常用服务器工具收进一个桌面",
      text: "连接主机后，ShellDesk 让你像使用本地桌面一样打开终端、文件、浏览器、数据库和系统工具。",
    },
    feature: {
      terminal: {
        title: "多标签终端",
        text: "xterm.js 终端支持多会话、主题、滚动缓冲、复制粘贴和可配置字体。",
      },
      sftp: {
        title: "SFTP 与远程编辑",
        text: "浏览、上传、下载、压缩、解压，并用远程记事本处理配置文件。",
      },
      browser: {
        title: "内网浏览器",
        text: "基于 SSH SOCKS 代理访问远程私网服务，减少单独配置代理的成本。",
      },
      database: {
        title: "数据库面板",
        text: "覆盖 MySQL、PostgreSQL、MongoDB、Redis、SQLite 的浏览和查询。",
      },
      ops: {
        title: "系统运维工具",
        text: "进程、服务、容器、端口、磁盘、日志、包管理、计划任务集中处理。",
      },
      security: {
        title: "安全巡检",
        text: "查看登录、端口、防火墙、系统配置和主机风险，保留命令行兜底。",
      },
    },
    workspace: {
      title: "围绕一次 SSH 连接组织所有工作",
      text:
        "每台主机打开独立连接窗口，标题栏显示当前主机和 SOCKS 端口；桌面窗口支持拖拽、缩放、最大化、最小化、层级管理和 Dock。",
      check: {
        hosts: "主机分组、标签、备注、系统类型识别",
        dock: "文件管理、终端、浏览器固定在 Dock",
        layout: "桌面图标布局、文件夹、排序和壁纸可自定义",
      },
    },
    workflow: {
      connect: {
        title: "连接主机",
        text: "从本地 Vault 读取主机、密钥和认证方式。",
      },
      tools: {
        title: "打开工具",
        text: "终端、文件、数据库、浏览器和系统工具并行处理。",
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
  zh: {
    src: "/assets/shelldesk-screenshot-zh.png",
    alt: "ShellDesk 中文界面截图，显示远程桌面、终端、浏览器和 Dock",
  },
  en: {
    src: "/assets/shelldesk-screenshot-en.png",
    alt: "ShellDesk English interface screenshot showing remote desktop, terminal, browser and dock",
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
    setScreenshot(normalized);
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
