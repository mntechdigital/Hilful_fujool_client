"use client";
import { updatePackageStatus } from "@/services/package";
import { showErrorToast, showSuccessToast } from "@/utils/toastMessage";
import { Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DeletePackageDialog from "./DeletePackageDialog";

interface PackageImage {
  id: string;
  image: string;
}

interface PackageApi {
  id: string;
  title: string;
  country: string;
  maxTravelers: string;
  minPax: string;
  duration: string;
  description: string;
  createdAt: string;
  status: boolean;
  packageImages: PackageImage[];
}

const PackageTable = ({ packages }: { packages: PackageApi[] }) => {

  const handleStatusChange = async (pkg: PackageApi) => {
    const res = await updatePackageStatus(pkg.id, !pkg.status);
    if (res.statusCode === 200) {
      showSuccessToast(
        `Package ${!pkg.status ? "activated" : "deactivated"} successfully`
      );
    } else {
      showErrorToast(res.message || "Something went wrong");
    }
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
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Country</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Duration</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Max Travelers</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Created At</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Status</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {packages.length > 0 ? packages.map((pkg, idx) => (
              <tr key={pkg.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                <td className="py-4 px-6 text-gray-600">{idx + 1}</td>
                <td className="py-4 px-6">
                  <div className="w-14 h-14 rounded-lg overflow-hidden relative">
                    {pkg.packageImages && pkg.packageImages.length > 0 ? (
                      <Image
                        src={pkg.packageImages[0].image}
                        alt={pkg.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 text-xs">
                        No Image
                      </div>
                    )}
                  </div>
                </td>
                <td className="py-4 px-6 text-gray-700">{pkg.title}</td>
                <td className="py-4 px-6 text-gray-700">{pkg.country}</td>
                <td className="py-4 px-6 text-gray-700">{pkg.duration}</td>
                <td className="py-4 px-6 text-gray-700">{pkg.maxTravelers}</td>
                <td className="py-4 px-6 text-gray-600">
                  {new Date(pkg.createdAt).toLocaleDateString()}
                </td>
                <td className="py-4 px-6">
                  <button
                    onClick={() => handleStatusChange(pkg)}
                    className={`w-12 h-6 rounded-full relative transition-colors cursor-pointer ${pkg.status ? "bg-[#0f3d3e]" : "bg-gray-300"}`}
                    aria-pressed={pkg.status}
                    aria-label={pkg.status ? "Active" : "Inactive"}
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
                    <DeletePackageDialog id={pkg.id} />
                  </div>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan={9} className="py-8 text-center text-gray-500">No data found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PackageTable;