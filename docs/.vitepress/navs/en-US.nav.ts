import type { DefaultTheme } from "vitepress";

export const getEnUSNav: () => DefaultTheme.NavItem[] = () => {
  const navItems: DefaultTheme.NavItem[] = [
    {
      text: "Home",
      link: "/",
    },
  ];
  return navItems;
};
