"use client";

import { ChevronLeft, ChevronRight, Eye, Pencil, User, X } from "lucide-react";
import React, { useState } from "react";
import DeleteModal from "@/components/shared/DeleteModal";
import Link from "next/link";

interface Role {
  id: number;
  name: string;
  description: string;
  status: boolean;
}

const INITIAL_ROLES_DATA: Role[] = [
  {
    id: 1,
    name: "Asif Khan",
    description: "Admin Role",
    status: true,
  },
  {
    id: 2,
    name: "Asif Khan",
    description: "Admin Role",
    status: true,
  },
  {
    id: 3,
    name: "Asif Khan",
    description: "Admin Role",
    status: false,
  },
];

const RolesTable = () => {
  const [roles, setRoles] = useState<Role[]>(INITIAL_ROLES_DATA);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedRoleId, setSelectedRoleId] = useState<number | null>(null);

  const toggleStatus = (id: number) => {
    setRoles((prev) =>
      prev.map((role) =>
        role.id === id ? { ...role, status: !role.status } : role
      )
    );
  };

  const handleDeleteClick = (id: number) => {
    setSelectedRoleId(id);
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (selectedRoleId !== null) {
      setRoles((prev) => prev.filter((role) => role.id !== selectedRoleId));
    }
    setDeleteModalOpen(false);
    setSelectedRoleId(null);
  };

  const handleCancelDelete = () => {
    setDeleteModalOpen(false);
    setSelectedRoleId(null);
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left py-4 px-6 font-semibold text-gray-700">SN</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Image</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Name</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Description</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Status</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {roles.map((role) => (
              <tr key={role.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                <td className="py-4 px-6 text-gray-600">{role.id}</td>
                <td className="py-4 px-6">
                  <div className="w-10 h-10 rounded-full bg-[#0f3d3e] flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                </td>
                <td className="py-4 px-6 text-gray-700">{role.name}</td>
                <td className="py-4 px-6 text-[#0f3d3e]">{role.description}</td>
                <td className="py-4 px-6">
                  <button
                    onClick={() => toggleStatus(role.id)}
                    className={`w-12 h-6 rounded-full relative transition-colors cursor-pointer ${role.status ? "bg-[#0f3d3e]" : "bg-gray-300"}`}
                  >
                    <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${role.status ? "right-1" : "left-1"}`} />
                  </button>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/dashboard/roles_permissions/permissions/${role.id}`}
                      className="w-8 h-8 flex items-center justify-center border border-[#0f3d3e] text-[#0f3d3e] rounded hover:bg-[#0f3d3e] hover:text-white transition-colors cursor-pointer"
                    >
                      <Eye className="w-4 h-4" />
                    </Link>
                    <Link
                      href={`/dashboard/roles_permissions/edit/${role.id}`}
                      className="w-8 h-8 flex items-center justify-center border border-[#0f3d3e] text-[#0f3d3e] rounded hover:bg-[#0f3d3e] hover:text-white transition-colors cursor-pointer"
                    >
                      <Pencil className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={() => handleDeleteClick(role.id)}
                      className="w-8 h-8 flex items-center justify-center border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
          <p className="text-sm text-gray-600">Showing 1 to 5 of 5 entries</p>
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-[#0f3d3e] text-white rounded-full">1</button>
            <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded">2</button>
            <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded">3</button>
            <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded">4</button>
            <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <DeleteModal
        open={deleteModalOpen}
        onOpenChange={setDeleteModalOpen}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </>
  );
};

export default RolesTable;
