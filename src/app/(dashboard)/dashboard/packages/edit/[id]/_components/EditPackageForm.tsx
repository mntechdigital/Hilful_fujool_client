"use client";

import { Save, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface PackageFormData {
  title: string;
  price: string;
  duration: string;
  description: string;
  images: File[];
}

interface EditPackageFormProps {
  packageId: string;
}

// Mock data for demonstration - replace with actual API call
const MOCK_PACKAGES: Record<string, PackageFormData & { imageUrls: string[] }> = {
  "1": {
    title: "হজ ভিআইপি প্যাকেজ",
    price: "৳ 500,000",
    duration: "21 দিন",
    description: "আমাদের ভিআইপি প্যাকেজে সর্বোচ্চ মানের সেবা প্রদান করা হয়। ৫ তারকা হোটেল, ব্যক্তিগত পরিবহন এবং বিশেষ গাইড সেবা অন্তর্ভুক্ত।",
    images: [],
    imageUrls: ["/hajj-1.jpg", "/hajj-2.jpg"],
  },
  "2": {
    title: "হজ স্পেশাল প্যাকেজ",
    price: "৳ 400,000",
    duration: "18 দিন",
    description: "স্পেশাল প্যাকেজে ৪ তারকা হোটেল এবং গ্রুপ পরিবহন সুবিধা রয়েছে।",
    images: [],
    imageUrls: ["/hajj-2.jpg"],
  },
  "3": {
    title: "হজ এ ক্যাটাগরি প্যাকেজ",
    price: "৳ 350,000",
    duration: "15 দিন",
    description: "এ ক্যাটাগরি প্যাকেজে মানসম্মত থাকা এবং খাবারের ব্যবস্থা রয়েছে।",
    images: [],
    imageUrls: ["/hajj-3.jpg"],
  },
};

const EditPackageForm = ({ packageId }: EditPackageFormProps) => {
    
      const router = useRouter();
  // Separate state for existing images (URLs from server) and new images (File objects)
  const [existingImageUrls, setExistingImageUrls] = useState<string[]>([]);
  const [newImagePreviews, setNewImagePreviews] = useState<string[]>([]);

  const { control, handleSubmit, setValue, watch, reset, formState: { errors } } = useForm<PackageFormData>({
    defaultValues: {
      title: "",
      price: "",
      duration: "",
      description: "",
      images: [],
    },
  });

  const images = watch("images");

  // Load package data on component mount
  useEffect(() => {
    const packageData = MOCK_PACKAGES[packageId];
    if (packageData) {
      reset({
        title: packageData.title,
        price: packageData.price,
        duration: packageData.duration,
        description: packageData.description,
        images: [],
      });
      setExistingImageUrls(packageData.imageUrls);
      setNewImagePreviews([]);
    }
  }, [packageId, reset]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const newFiles = Array.from(files);
      const updatedImages = [...images, ...newFiles];
      setValue("images", updatedImages);

      // Generate previews for new files
      newFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setNewImagePreviews((prev) => [...prev, reader.result as string]);
        };
        reader.readAsDataURL(file);
      });
    }
    // Reset input value to allow selecting same file again
    e.target.value = "";
  };

  const handleRemoveExistingImage = (index: number) => {
    setExistingImageUrls((prev) => prev.filter((_, i) => i !== index));
  };

  const handleRemoveNewImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    const updatedPreviews = newImagePreviews.filter((_, i) => i !== index);
    setValue("images", updatedImages);
    setNewImagePreviews(updatedPreviews);
  };

  const onSubmit = (data: PackageFormData) => {
    console.log("Form Data:", data);
    // Handle form submission here
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Title Field */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Title <span className="text-red-500">*</span>
          </label>
          <Controller
            name="title"
            control={control}
            rules={{ required: "Title is required" }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="Enter package title"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f3d3e] focus:border-transparent"
              />
            )}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        {/* Price Field */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Price <span className="text-red-500">*</span>
          </label>
          <Controller
            name="price"
            control={control}
            rules={{ required: "Price is required" }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="Enter package price"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f3d3e] focus:border-transparent"
              />
            )}
          />
          {errors.price && (
            <p className="text-red-500 text-sm">{errors.price.message}</p>
          )}
        </div>

        {/* Duration Field */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Duration <span className="text-red-500">*</span>
          </label>
          <Controller
            name="duration"
            control={control}
            rules={{ required: "Duration is required" }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="Enter package duration (e.g., 15 days)"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f3d3e] focus:border-transparent"
              />
            )}
          />
          {errors.duration && (
            <p className="text-red-500 text-sm">{errors.duration.message}</p>
          )}
        </div>

        {/* Description Field */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Description <span className="text-red-500">*</span>
          </label>
          <Controller
            name="description"
            control={control}
            rules={{ required: "Description is required" }}
            render={({ field }) => (
              <textarea
                {...field}
                rows={5}
                placeholder="Enter package description"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f3d3e] focus:border-transparent resize-none"
              />
            )}
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        {/* Image Upload Field */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Images <span className="text-red-500">*</span>
          </label>
          <div className="border-2 border-dashed border-gray-200 rounded-lg p-6">
            {/* Image Previews Grid */}
            {(existingImageUrls.length > 0 || newImagePreviews.length > 0) && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                {/* Existing Images */}
                {existingImageUrls.map((url, index) => (
                  <div key={`existing-${index}`} className="relative aspect-square">
                    <Image
                      src={url}
                      alt={`Existing ${index + 1}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveExistingImage(index)}
                      className="absolute top-1 right-1 w-6 h-6 flex items-center justify-center bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
                {/* New Images */}
                {newImagePreviews.map((preview, index) => (
                  <div key={`new-${index}`} className="relative aspect-square">
                    <Image
                      src={preview}
                      alt={`New ${index + 1}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveNewImage(index)}
                      className="absolute top-1 right-1 w-6 h-6 flex items-center justify-center bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Upload Button */}
            <div className="text-center">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                className="hidden"
                id="package-images"
              />
              <label
                htmlFor="package-images"
                className="cursor-pointer text-[#0f3d3e] hover:text-[#0f3d3e]/80"
              >
                <div className="space-y-2">
                  <div className="w-12 h-12 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-500">
                    {existingImageUrls.length > 0 || newImagePreviews.length > 0
                      ? "Click to add more images"
                      : "Click to upload package images"}
                  </p>
                </div>
              </label>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 pt-4">
        <button
          type="submit"
          className="flex items-center gap-2 bg-[#0f3d3e] text-white px-6 py-2.5 rounded-full hover:bg-[#0a2e2f] transition-colors cursor-pointer"
        >
          <Save className="w-4 h-4" />
          <span>Update</span>
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="flex items-center gap-2 bg-red-500 text-white px-6 py-2.5 rounded-full hover:bg-red-600 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
          <span>Close</span>
        </button>
      </div>
      </form>
    </div>
  );
};

export default EditPackageForm;
