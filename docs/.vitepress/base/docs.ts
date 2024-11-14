import { enUSConfig, zhCNConfig } from "../configs";

export const docsConfig = {
  base: "/",
  title: "v123ve",
  description: "思维垃圾",
  lang: "zh-CN",
  lastUpdated: true,
  /* 语言配置 */
  locales: {
    // 若果配置了root，则双击title的时候不会返回/路径下了，只会返回在link路径下
    root: {
      label: "简体中文",
      lang: "zh-CN",
      link: "/",
      ...zhCNConfig,
    },
    "zh-CN": {
      label: "简体中文",
      lang: "zh-CN",
      link: "/", // index 直接跳转到首页
      ...zhCNConfig,
    },
    "en-US": {
      label: "English",
      lang: "en-US",
      link: "/",
      ...enUSConfig,
    },
  },
};
