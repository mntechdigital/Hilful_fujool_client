import React from "react";
import { DashboardWrapper } from "../_components/DashboardWrapper";
import { Plus } from "lucide-react";
import Link from "next/link";
import RolesTable from "./_components/RolesTable";

const RolesandPermissionPage = () => {
  return (
    <DashboardWrapper>
      <div className="flex items-center justify-between mb-6">
        <Link
          href="/dashboard/role"
          className="flex items-center gap-2 bg-[#0f3d3e] text-white px-5 py-2.5 rounded-full hover:bg-[#0a2e2f] transition-colors cursor-pointer"
        >
          <Plus className="w-5 h-5" />
          <span className="font-medium">Create Role</span>
        </Link>
        <Link
          href="/dashboard/roles_permissions/create"
          className="flex items-center gap-2 bg-[#0f3d3e] text-white px-5 py-2.5 rounded-full hover:bg-[#0a2e2f] transition-colors cursor-pointer"
        >
          <Plus className="w-5 h-5" />
          <span className="font-medium">Create Admin User</span>
        </Link>
      </div>
      <RolesTable />
    </DashboardWrapper>
  );
};

export default RolesandPermissionPage;
