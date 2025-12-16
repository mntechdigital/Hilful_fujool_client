/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";


import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/constant/dashboardNavbar.constant";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

interface SidebarProps {
  adminData?: any;
  isMobile?: boolean;
  onNavItemClick?: () => void;
}

export function Sidebar({ adminData, isMobile, onNavItemClick }: SidebarProps) {
  const pathname = usePathname();

  const allowedPaths: string[] =
    adminData?.role?.roleFeature?.map((feature: any) => `${feature.path}`) ?? [];

  const filteredNavItems = NAV_ITEMS.filter((item) => {
    if (allowedPaths.includes(item.href)) return true;
    if (item.children && Array.isArray(item.children)) {
      // Show parent if any child is allowed
      return item.children.some((child: any) => allowedPaths.includes(child.href));
    }
    return false;
  });

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard";
    const clean = href.startsWith("/") ? href.slice(1) : href;
    return pathname === `/dashboard/${clean}` || pathname.startsWith(`/dashboard/${clean}/`);
  };

  // Dropdown state for items with children
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownClick = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
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
                if (item.children && Array.isArray(item.children)) {
                  // Dropdown menu item
                  const isOpen = openDropdown === item.label;
                  return (
                    <div key={item.label} className="relative">
                      <button
                        type="button"
                        className={cn(
                          "flex items-center gap-3 rounded-3xl px-3 py-2 text-sm font-medium w-full transition-colors hover:bg-brand/10 hover:text-brand",
                          isOpen && "bg-brand-gradient text-white hover:bg-brand/90 hover:text-white",
                          !isOpen && "text-muted-foreground"
                        )}
                        onClick={() => handleDropdownClick(item.label)}
                      >
                        {Icon && <Icon className="h-4 w-4" />}
                        <span>{item.label}</span>
                        {isOpen ? (
                          <ChevronUp className="ml-auto w-4 h-4" />
                        ) : (
                          <ChevronDown className="ml-auto w-4 h-4" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="mt-1 space-y-1">
                          {item.children.map((child: any) => {
                            const ChildIcon = child.icon;
                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                prefetch={true}
                                className={cn(
                                  "flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium transition-colors hover:bg-brand/10 hover:text-brand",
                                   isActive(child.href) &&
                                     "bg-brand-gradient text-white hover:bg-brand/90 hover:text-white",
                                  !isActive(child.href) && "text-muted-foreground"
                                )}
                                // align with parent, no extra margin
                                onClick={onNavItemClick}
                              >
                                {ChildIcon && <ChildIcon className="h-4 w-4" />}
                                <span>{child.label}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }
                // Regular menu item
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
                         "bg-brand-gradient text-white hover:bg-brand/90 hover:text-white",
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
