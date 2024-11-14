import type { DefaultTheme } from "vitepress";
import fs from "fs";
import path from "path";

export const getZhCNSidebar: () => DefaultTheme.Sidebar = () => {
  const sidebarItems: DefaultTheme.Sidebar = {
    "/zh-CN/docs/学习笔记/": [
      {
        text: "学习笔记",
        collapsed: true,
        items: [],
      },
    ],
    "/zh-CN/docs/工作笔记/": [
      {
        text: "工作笔记",
        collapsed: true,
        items: [],
      },
    ],
    "/zh-CN/docs/记录笔记/": [
      {
        text: "记录笔记",
        collapsed: true,
        items: [],
      },
    ],
  };
  const learningNotesDir = path.join(__dirname, "../../zh-CN/学习笔记");
  const learningFiles = fs.readdirSync(learningNotesDir);
  learningFiles.forEach((file) => {
    if (file.endsWith(".md")) {
      const fileName = file.replace(".md", "");
      sidebarItems["/zh-CN/docs/学习笔记/"][0].items.push({
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
      sidebarItems["/zh-CN/docs/工作笔记/"][0].items.push({
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
      sidebarItems["/zh-CN/docs/记录笔记/"][0].items.push({
        text: fileName,
        link: `/zh-CN/记录笔记/${fileName}`,
      });
    }
  });
  return sidebarItems;
};
