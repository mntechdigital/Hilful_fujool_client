import { TRoleFeature } from "@/types/role.interface";

export const RoleFeatures: TRoleFeature[] = [
  { name: "Dashboard", path: "dashboard", index: 1, isChecked: false },
  { name: "General News", path: "general-news", index: 2, isChecked: false },
  { name: "Gallery News", path: "gallery-news", index: 3, isChecked: false },
  { name: "Video News", path: "video-news", index: 4, isChecked: false },
  { name: "Advertisement", path: "advertisement", index: 5, isChecked: false },
  { name: "Categories", path: "categories", index: 6, isChecked: false },
  {
    name: "Sub Categories",
    path: "sub-categories",
    index: 7,
    isChecked: false,
  },
  {
    name: "Role Management",
    path: "role-management",
    index: 8,
    isChecked: false,
  },
  {
    name: "Admin Management",
    path: "admin-management",
    index: 9,
    isChecked: false,
  },
  { name: "Contact", path: "contact", index: 10, isChecked: false },
  { name: "Reporter", path: "reporter", index: 11, isChecked: false },
  { name: "News Poll", path: "news-poll", index: 12, isChecked: false },
  {
    name: "General Setting",
    path: "general-setting",
    index: 13,
    isChecked: false,
  },
  { name: "Theme", path: "theme", index: 14, isChecked: false },
];
