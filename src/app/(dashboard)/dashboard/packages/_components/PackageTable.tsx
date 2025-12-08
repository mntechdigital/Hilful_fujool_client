"use client";

import { ChevronLeft, ChevronRight, Pencil, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import DeleteModal from "@/components/shared/DeleteModal";
import Link from "next/link";

interface Package {
  id: number;
  image: string;
  title: string;
  price: string;
  createdAt: string;
  status: boolean;
}

const INITIAL_PACKAGES_DATA: Package[] = [
  { id: 1, image: "/hajj-1.jpg", title: "হজ ভিআইপি প্যাকেজ", price: "৳ 500,000", createdAt: "02 May, 2025", status: true },
  { id: 2, image: "/hajj-2.jpg", title: "হজ স্পেশাল প্যাকেজ", price: "৳ 400,000", createdAt: "02 May, 2025", status: true },
  { id: 3, image: "/hajj-3.jpg", title: "হজ এ ক্যাটাগরি প্যাকেজ", price: "৳ 350,000", createdAt: "02 May, 2025", status: false },
];

const PackageTable = () => {
  const [packages, setPackages] = useState<Package[]>(INITIAL_PACKAGES_DATA);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedPackageId, setSelectedPackageId] = useState<number | null>(null);

  const toggleStatus = (id: number) => {
    setPackages((prev) =>
      prev.map((pkg) =>
        pkg.id === id ? { ...pkg, status: !pkg.status } : pkg
      )
    );
  };

  const handleDeleteClick = (id: number) => {
    setSelectedPackageId(id);
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (selectedPackageId !== null) {
      setPackages((prev) => prev.filter((pkg) => pkg.id !== selectedPackageId));
    }
    setDeleteModalOpen(false);
    setSelectedPackageId(null);
  };

  const handleCancelDelete = () => {
    setDeleteModalOpen(false);
    setSelectedPackageId(null);
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left py-4 px-6 font-semibold text-gray-700">SN</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Image</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Title</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Price</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Created At</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Status</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {packages.map((pkg) => (
              <tr key={pkg.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                <td className="py-4 px-6 text-gray-600">{pkg.id}</td>
                <td className="py-4 px-6">
                  <div className="w-14 h-14 rounded-lg overflow-hidden relative">
                    <Image src={pkg.image} alt={pkg.title} fill className="object-cover" />
                  </div>
                </td>
                <td className="py-4 px-6 text-gray-700">{pkg.title}</td>
                <td className="py-4 px-6 text-gray-700 font-medium">{pkg.price}</td>
                <td className="py-4 px-6 text-gray-600">{pkg.createdAt}</td>
                <td className="py-4 px-6">
                  <button
                    onClick={() => toggleStatus(pkg.id)}
                    className={`w-12 h-6 rounded-full relative transition-colors cursor-pointer ${pkg.status ? "bg-[#0f3d3e]" : "bg-gray-300"}`}
                  >
                    <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${pkg.status ? "right-1" : "left-1"}`} />
                  </button>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/dashboard/packages/edit/${pkg.id}`}
                      className="w-8 h-8 flex items-center justify-center border border-[#0f3d3e] text-[#0f3d3e] rounded hover:bg-[#0f3d3e] hover:text-white transition-colors cursor-pointer"
                    >
                      <Pencil className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={() => handleDeleteClick(pkg.id)}
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

export default PackageTable;
