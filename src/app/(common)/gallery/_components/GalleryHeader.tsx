import { Home } from "lucide-react";
import React from "react";

const GalleryHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-4 mb-8">
      {/* Icon and label */}
      <div className="flex items-center gap-2 mb-2">
        <Home size={24} color="#C89A0C" />
        <span className="text-lg font-medium text-gray-700" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>গ্যালারি</span>
      </div>
      {/* Main heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#0f3d3e] text-center leading-tight">
        পবিত্র মসজিদ থেকে মনোরম দৃশ্য
      </h2>
    </div>
  );
};

export default GalleryHeader;
