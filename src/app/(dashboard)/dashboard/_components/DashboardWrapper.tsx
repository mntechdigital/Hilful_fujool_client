
import { cn } from "@/lib/utils";
import React from "react";

interface DashboardWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function DashboardWrapper({
  children,
  className,
}: DashboardWrapperProps) {
  return (
    <div
      className={cn(
        "w-full px-4 py-4 sm:px-6 md:px-8 lg:px-10",
        className
      )}
    >
      {children}
    </div>
  );
}
