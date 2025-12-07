/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/constant/dashboardNavbar.constant";

interface SidebarProps {
  adminData?: any;
  isMobile?: boolean;
  onNavItemClick?: () => void;
}

export function Sidebar({ adminData, isMobile, onNavItemClick }: SidebarProps) {
  const pathname = usePathname();

  const allowedPaths: string[] =
    adminData?.role?.roleFeature?.map((feature: any) => `${feature.path}`) ?? [];

  const filteredNavItems = NAV_ITEMS.filter((item) =>
    allowedPaths.includes(item.href)
  );

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard";
    const clean = href.startsWith("/") ? href.slice(1) : href;
    return pathname === `/dashboard/${clean}` || pathname.startsWith(`/dashboard/${clean}/`);
  };

  return (
    <aside
      className={cn(
        "border-r bg-background",
        isMobile
          ? "h-full"
          : "fixed left-0 w-56 px-2 pt-1 top-16 h-[calc(100vh-4rem)] hidden md:block z-10"
      )}
    >
      <nav className={cn("h-full", isMobile && "py-1")}>
        <ScrollArea className="h-full">
          <div className={cn("grid gap-1", isMobile && "px-4")}>
            {filteredNavItems.length > 0 ? (
              filteredNavItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={
                      item.href === "/dashboard"
                        ? "/dashboard"
                        : `/dashboard/${item.href.replace(/^\//, "")}`
                    }
                    prefetch={true}
                    className={cn(
                      "flex items-center gap-3 rounded-3xl px-3 py-2 text-sm font-medium transition-colors hover:bg-brand/10 hover:text-brand",
                      isActive(item.href) &&
                        "bg-brand text-white hover:bg-brand/90 hover:text-white",
                      !isActive(item.href) && "text-muted-foreground"
                    )}
                    onClick={onNavItemClick}
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                    <span>{item.label}</span>
                  </Link>
                );
              })
            ) : (
              <p className="p-4 text-muted-foreground">No menu items available</p>
            )}
          </div>
        </ScrollArea>
      </nav>
    </aside>
  );
}
