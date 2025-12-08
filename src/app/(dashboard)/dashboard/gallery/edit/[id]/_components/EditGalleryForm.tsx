"use client";

import React, { useEffect, useState } from "react";
import { Trash2, Save, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface EditGalleryFormProps {
  galleryId: string;
}

// Mock data for demonstration - replace with actual API call
const MOCK_GALLERY: Record<string, string> = {
  "1": "/hajj-1.jpg",
  "2": "/hajj-2.jpg",
  "3": "/hajj-3.jpg",
};

export default function EditGalleryForm({ galleryId }: EditGalleryFormProps) {
  const router = useRouter();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  // Load gallery image on component mount
  useEffect(() => {
    const existingImage = MOCK_GALLERY[galleryId];
    if (existingImage) {
      setImagePreview(existingImage);
    }
  }, [galleryId]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
    setImageFile(null);
  };

  const handleSave = () => {
    console.log("Saving gallery:", { galleryId, imageFile });
    // Handle save logic here
  };

  const handleClose = () => {
    router.push("/dashboard/gallery");
  };

  return (
    <div className="bg-[#f8f9fa] rounded-2xl p-6">
      {/* Upload Image Label */}
      <p className="text-sm text-gray-600 mb-3">Upload Image</p>

      {/* Image Upload Area */}
      <div className="mb-6">
        {imagePreview ? (
          <div className="relative w-32 h-24 rounded-lg overflow-hidden">
            <Image
              src={imagePreview}
              alt="Preview"
              fill
              className="object-cover"
            />
            <button
              type="button"
              onClick={handleRemoveImage}
              className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity"
            >
              <Trash2 className="w-6 h-6 text-red-500" />
            </button>
          </div>
        ) : (
          <label className="w-32 h-24 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-[#0f3d3e] transition-colors">
            <span className="text-gray-400 text-2xl">+</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-3">
        <button
          onClick={handleSave}
          className="flex items-center gap-2 bg-[#0f3d3e] text-white px-5 py-2.5 rounded-full hover:bg-[#0a2e2f] transition-colors cursor-pointer"
        >
          <Save className="w-4 h-4" />
          <span className="font-medium">Save</span>
        </button>
        <button
          onClick={handleClose}
          className="flex items-center gap-2 bg-red-500 text-white px-5 py-2.5 rounded-full hover:bg-red-600 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
          <span className="font-medium">Close</span>
        </button>
      </div>
    </div>
  );
}
