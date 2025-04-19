import type { NavigationItem } from "~/types/navigation";

export const navigation: NavigationItem[] = [
  {
    icon: "mdi-home",
    title: "Home",
    to: "/",
  },
  {
    icon: "mdi-file-document",
    title: "Posts",
    to: "/posts",
  },
  {
    icon: "mdi-account",
    title: "Users",
    to: "/users",
  },
  {
    icon: "mdi-cog",
    title: "Settings",
    to: "/settings",
  },
];
