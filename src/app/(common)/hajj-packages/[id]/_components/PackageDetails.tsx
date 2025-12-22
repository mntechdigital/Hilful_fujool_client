
import React from "react";
import Image from "next/image";
import Preview from "@/components/shared/Preview";
import { PackageApi } from "@/types/package.interface";



const PackageDetails = (packageData: PackageApi) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md max-w-4xl mx-auto">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#0f3d3e] mb-4">{packageData.title}</h2>

      {/* Main Image */}
      <div className="rounded-xl overflow-hidden mb-4">
        <Image
          src={packageData.packageImages && packageData.packageImages.length > 0 ? packageData.packageImages[0].image : ''}
          alt="Main"
          width={900}
          height={400}
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 mb-6">
        {packageData.packageImages.map((img, idx) => (
          <div key={idx} className="rounded-lg overflow-hidden border border-gray-200 w-24 h-16 relative">
            <Image src={img.image} alt={`thumb-${idx}`} fill className="object-cover" />
          </div>
        ))}
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="flex flex-col items-center bg-[#eaf6f6] rounded-lg p-3">
          <span className="text-[#0f3d3e] font-semibold">সময়কাল</span>
          <span className="text-sm text-gray-700">{packageData.duration}</span>
        </div>
        <div className="flex flex-col items-center bg-[#eaf6f6] rounded-lg p-3">
          <span className="text-[#0f3d3e] font-semibold">Country</span>
          <span className="text-sm text-gray-700">{packageData.country}</span>
        </div>
        <div className="flex flex-col items-center bg-[#eaf6f6] rounded-lg p-3">
          <span className="text-[#0f3d3e] font-semibold">Maximum Traveller</span>
          <span className="text-sm text-gray-700">{packageData.maxTravelers}</span>
        </div>
        <div className="flex flex-col items-center bg-[#eaf6f6] rounded-lg p-3">
          <span className="text-[#0f3d3e] font-semibold">Min Pax</span>
          <span className="text-sm text-gray-700">{packageData.minPax}</span>
        </div>
      </div>

      {/* Timeline/Steps (illustrative icons) */}
      <div className="flex items-center justify-between my-8 px-2">
        <span className="flex flex-col items-center">
          <span className="bg-[#eaf6f6] p-2 rounded-full mb-1">
            <Image src="/icons/plane.svg" alt="plane" width={32} height={32} />
          </span>
        </span>
        <span className="h-1 w-8 bg-gray-300 rounded" />
        <span className="flex flex-col items-center">
          <span className="bg-[#eaf6f6] p-2 rounded-full mb-1">
            <Image src="/icons/hotel.svg" alt="hotel" width={32} height={32} />
          </span>
        </span>
        <span className="h-1 w-8 bg-gray-300 rounded" />
        <span className="flex flex-col items-center">
          <span className="bg-[#eaf6f6] p-2 rounded-full mb-1">
            <Image src="/icons/tent.svg" alt="tent" width={32} height={32} />
          </span>
        </span>
        <span className="h-1 w-8 bg-gray-300 rounded" />
        <span className="flex flex-col items-center">
          <span className="bg-[#eaf6f6] p-2 rounded-full mb-1">
            <Image src="/icons/hotel.svg" alt="hotel" width={32} height={32} />
          </span>
        </span>
        <span className="h-1 w-8 bg-gray-300 rounded" />
        <span className="flex flex-col items-center">
          <span className="bg-[#eaf6f6] p-2 rounded-full mb-1">
            <Image src="/icons/mosque.svg" alt="mosque" width={32} height={32} />
          </span>
        </span>
        <span className="h-1 w-8 bg-gray-300 rounded" />
        <span className="flex flex-col items-center">
          <span className="bg-[#eaf6f6] p-2 rounded-full mb-1">
            <Image src="/icons/green-dome.svg" alt="green dome" width={32} height={32} />
          </span>
        </span>
        <span className="h-1 w-8 bg-gray-300 rounded" />
        <span className="flex flex-col items-center">
          <span className="bg-[#eaf6f6] p-2 rounded-full mb-1">
            <Image src="/icons/plane.svg" alt="plane" width={32} height={32} />
          </span>
        </span>
      </div>

      {/* Description */}
      <div className="mb-6">
        <Preview content={packageData.description} />
      </div>
    </div>
  );
};

export default PackageDetails;
