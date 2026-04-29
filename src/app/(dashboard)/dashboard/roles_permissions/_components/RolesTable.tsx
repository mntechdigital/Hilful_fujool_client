"use client";

import { Pencil, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DeleteAdminUserDialog from "./DeleteAdminUserDialog";

interface Role {
  id: string;
  name: string;
  status: string;
}

interface AdminUser {
  id: string;
  fullName: string;
  email: string;
  password: string;
  profilePhoto: string;
  roleId: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  role?: Role;
}

interface RolesTableProps {
  rolesData: AdminUser[];
}

const RolesTable = ({ rolesData = [] }: RolesTableProps) => {
  const [adminUsers, setAdminUsers] = useState<AdminUser[]>(rolesData);
  const toggleStatus = (id: string) => {
    setAdminUsers((prev) =>
      prev.map((user) =>
        user.id === id 
          ? { ...user, status: user.status === "ACTIVE" ? "INACTIVE" : "ACTIVE" } 
          : user
      )
    );
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="px-4 md:px-6 py-3 md:py-4 border-b border-gray-100">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800">Admin Users</h2>
          <p className="text-xs md:text-sm text-gray-500 mt-1">
            Manage admin users and their role permissions
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-max">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left py-3 md:py-4 px-3 md:px-6 font-semibold text-xs md:text-sm text-gray-700">SN</th>
                <th className="hidden sm:table-cell text-left py-3 md:py-4 px-3 md:px-6 font-semibold text-xs md:text-sm text-gray-700">Profile</th>
                <th className="text-left py-3 md:py-4 px-3 md:px-6 font-semibold text-xs md:text-sm text-gray-700">Name</th>
                <th className="hidden md:table-cell text-left py-3 md:py-4 px-3 md:px-6 font-semibold text-xs md:text-sm text-gray-700">Email</th>
                <th className="hidden lg:table-cell text-left py-3 md:py-4 px-3 md:px-6 font-semibold text-xs md:text-sm text-gray-700">Role</th>
                <th className="text-left py-3 md:py-4 px-3 md:px-6 font-semibold text-xs md:text-sm text-gray-700">Status</th>
                <th className="text-left py-3 md:py-4 px-3 md:px-6 font-semibold text-xs md:text-sm text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="text-xs md:text-sm">
              {adminUsers.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-gray-500">
                    No admin users found
                  </td>
                </tr>
              ) : (
                adminUsers.map((user, index) => (
                  <tr key={user.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                    <td className="py-3 md:py-4 px-3 md:px-6 text-gray-600">{index + 1}</td>
                    <td className="hidden sm:table-cell py-3 md:py-4 px-3 md:px-6">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#0f3d3e] flex items-center justify-center overflow-hidden">
                        {user.profilePhoto ? (
                          <Image 
                            src={user.profilePhoto} 
                            alt={user.fullName}
                            width={40}
                            height={40}
                            className="w-full h-full object-cover"
                            unoptimized
                          />
                        ) : (
                          <User className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        )}
                      </div>
                    </td>
                    <td className="py-3 md:py-4 px-3 md:px-6 text-gray-700 font-medium truncate">{user.fullName}</td>
                    <td className="hidden md:table-cell py-3 md:py-4 px-3 md:px-6 text-gray-600 truncate text-xs md:text-sm">{user.email}</td>
                    <td className="hidden lg:table-cell py-3 md:py-4 px-3 md:px-6">
                      <span className="inline-flex items-center px-2 md:px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#0f3d3e]/10 text-[#0f3d3e]">
                        {user.role?.name || "No Role"}
                      </span>
                    </td>
                    <td className="py-3 md:py-4 px-3 md:px-6">
                      <button
                        onClick={() => toggleStatus(user.id)}
                        className={`w-10 h-5 md:w-12 md:h-6 rounded-full relative transition-colors cursor-pointer ${
                          user.status === "ACTIVE" ? "bg-[#0f3d3e]" : "bg-gray-300"
                        }`}
                      >
                        <span 
                          className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all ${
                            user.status === "ACTIVE" ? "right-0.5" : "left-0.5"
                          }`} 
                        />
                      </button>
                    </td>
                    <td className="py-3 md:py-4 px-3 md:px-6">
                      <div className="flex items-center gap-1 md:gap-2">
                        <Link
                          href={`/dashboard/roles_permissions/edit/${user.id}`}
                          className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center border border-green-600 text-green-600 rounded hover:bg-green-600 hover:text-white transition-colors cursor-pointer"
                          title="Edit admin user"
                        >
                          <Pencil className="w-3 h-3 md:w-4 md:h-4" />
                        </Link>
                        <DeleteAdminUserDialog id={user.id} name={user.fullName} />
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default RolesTable;