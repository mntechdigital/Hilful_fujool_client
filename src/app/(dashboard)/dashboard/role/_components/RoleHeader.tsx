// import DashboardHeading from "@/components/shared/Dashboard/DashboardHeading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

const RoleHeader = async () => {
  return (
    <div className="flex items-center justify-between ">
      {/* <DashboardHeading
        heading="Role Management"
        slogan="Manage and customize your roles"
      /> */}
      <Link href="/dashboard/role/create" className="inline-block ">
        <Button className="flex items-center gap-2 cursor-pointer">
          <Plus className="w-4 h-4" />
          Create Role
        </Button>
      </Link>
    </div>
  );
};

export default RoleHeader;
