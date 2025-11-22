import { LayoutDashboard, FileText, ImageIcon, Video, BarChart3, Settings2, ShieldCheck, Mail, Users, Settings, Palette, SquareActivity } from "lucide-react";

export const NAV_ITEMS = [
  { icon: SquareActivity, label: "Dashboard", href: "/dashboard" },
  { icon: FileText, label: "General News", href: "/general-news" },
  { icon: ImageIcon, label: "Gallery News", href: "/gallery-news" },
  { icon: Video, label: "Video News", href: "/video-news" },
  { icon: BarChart3, label: "Advertisement", href: "/advertisement" },
  { icon: LayoutDashboard, label: "Categories", href: "/categories" },
  { icon: Settings2, label: "Sub Categories", href: "/sub-categories" },
  { icon: ShieldCheck, label: "Role Management", href: "/role-management" },
  { icon: Users, label: "Admin Management", href: "/admin-management" },
  { icon: Mail, label: "Contact", href: "/contact" },
  { icon: Users, label: "Reporter", href: "/reporter" },
  { icon: Mail, label: "News Poll", href: "/news-poll" },
  { icon: Settings, label: "General Setting", href: "/general-setting" },
  { icon: Palette, label: "Theme", href: "/theme" },
];
