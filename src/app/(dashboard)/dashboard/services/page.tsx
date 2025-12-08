import React from "react";
import { DashboardWrapper } from "../_components/DashboardWrapper";
import { Plus } from "lucide-react";
import ServiceTable from "./_components/ServiceTable";
import Link from "next/link";

const Servicepage = () => {
  return (
    <DashboardWrapper>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Services</h2>
        <Link
          href="/dashboard/services/create"
          className="flex items-center gap-2 bg-[#0f3d3e] text-white px-5 py-2.5 rounded-full hover:bg-[#0a2e2f] transition-colors cursor-pointer"
        >
          <Plus className="w-5 h-5" />
          <span className="font-medium">Create New</span>
        </Link>
      </div>
      <ServiceTable />
      
    </DashboardWrapper>
  );
};

export default Servicepage;
