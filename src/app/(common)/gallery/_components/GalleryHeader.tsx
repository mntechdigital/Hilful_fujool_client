import React from "react";
import Image from "next/image";
import mosque from "../../../../../public/icons/mosque.svg"

const GalleryHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-4 mb-8">
      {/* Icon and label */}
      <div className="flex items-center gap-2 mb-2">
        <Image src={mosque} alt="Gallery Icon" width={32} height={32} />
        <span className="text-lg font-medium text-gray-700" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>গ্যালারি</span>
      </div>
      {/* Main heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#0f3d3e] text-center leading-tight" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
        পবিত্র মসজিদ থেকে মনোরম দৃশ্য
      </h2>
    </div>
  );
};

export default GalleryHeader;
