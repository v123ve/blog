import { DefaultTheme, LocaleSpecificConfig } from "vitepress";
import { getZhCNNav } from "../navs";
import { getZhCNSidebar } from "../sidebars";

// https://vitepress.dev/reference/site-config
export const zhCNConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  description: "思维垃圾",
  title: "v123ve",
  lang: "zh-CN",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    darkModeSwitchLabel: "主题",
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    lastUpdatedText: "最后更新",
    nav: getZhCNNav(),
    outline: {
      level: [2, 6],
      label: "目录",
    },
    returnToTopLabel: "返回顶部",
    sidebarMenuLabel: "菜单",
    sidebar: getZhCNSidebar(),
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
    search: {
      // 本地离线搜索
      provider: "local",
      // 多语言搜索配置
      options: {
        locales: {
          /* 默认语言 */
          "zh-CN": {
            translations: {
              button: {
                buttonText: "搜索",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                displayDetails: "显示详细列表",
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询结果",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                },
              },
            },
          },
        },
      },
    },
  },
};
