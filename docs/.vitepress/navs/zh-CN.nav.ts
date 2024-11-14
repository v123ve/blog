import type { DefaultTheme } from "vitepress";
import fs from "fs";
import path from "path";

export const getZhCNNav: () => DefaultTheme.NavItem[] = () => {
  const navItems: DefaultTheme.NavItem[] = [
    {
      text: "主页",
      link: "/",
    },
    {
      text: "学习笔记",
      items: [],
    },
    {
      text: "工作笔记",
      items: [],
    },
    {
      text: "记录笔记",
      items: [],
    },
  ];

  const learningNotesDir = path.join(__dirname, "../../zh-CN/学习笔记");
  const learningFiles = fs.readdirSync(learningNotesDir);

  learningFiles.forEach((file) => {
    if (file.endsWith(".md")) {
      const fileName = file.replace(".md", "");
      navItems[1].items.push({
        text: fileName,
        link: `/zh-CN/学习笔记/${fileName}`,
      });
    }
  });

  const workNotesDir = path.join(__dirname, "../../zh-CN/工作笔记");
  const workFiles = fs.readdirSync(workNotesDir);

  workFiles.forEach((file) => {
    if (file.endsWith(".md")) {
      const fileName = file.replace(".md", "");
      navItems[2].items.push({
        text: fileName,
        link: `/zh-CN/工作笔记/${fileName}`,
      });
    }
  });

  const recordNotesDir = path.join(__dirname, "../../zh-CN/记录笔记");
  const recordFiles = fs.readdirSync(recordNotesDir);

  recordFiles.forEach((file) => {
    if (file.endsWith(".md")) {
      const fileName = file.replace(".md", "");
      navItems[3].items.push({
        text: fileName,
        link: `/zh-CN/记录笔记/${fileName}`,
      });
    }
  });
  return navItems;
};
