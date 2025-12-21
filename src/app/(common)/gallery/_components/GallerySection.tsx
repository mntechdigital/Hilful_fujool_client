
"use client";
import React from 'react';
import Image from 'next/image';

interface GalleryItem {
  id: string;
  image: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
}

interface GallerySectionProps {
  galleryData: GalleryItem[];
}

const GallerySection: React.FC<GallerySectionProps> = ({ galleryData }) => {
  if (!galleryData || galleryData.length === 0) {
    return <div className="text-center py-10 text-gray-500">No images available</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 py-8">
      {galleryData.map((item, idx) => (
        <div
          key={item.id}
          className="relative rounded-2xl overflow-hidden group aspect-square bg-gradient-to-br from-gray-100 to-gray-200 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
        >
          <Image
            src={item.image}
            alt={`Gallery image ${idx + 1}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            priority={idx < 4}
            unoptimized
          />
          <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
            {idx + 1}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GallerySection;