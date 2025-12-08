"use client";

import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { ImageIcon, Save, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BlogFormData {
  designation: string;
  title: string;
  shortDescription: string;
  description: string;
  image: File | null;
}

interface EditBlogFormProps {
  blogId: string;
}

// Mock data for demonstration - replace with actual API call
const MOCK_BLOGS: Record<string, BlogFormData & { imageUrl: string }> = {
  "1": {
    designation: "হজ গাইড",
    title: "হজ ভিআইপি প্যাকেজ",
    shortDescription: "আমাদের ভিআইপি প্যাকেজে সর্বোচ্চ মানের সেবা",
    description: "আল্লাহ ছাড়া অন্য কোনো উপাস্য নেই, এবং মুহাম্মদ (সা.) তাঁর প্রেরিত রাসুল—এই সাক্ষ্য প্রদান করা।",
    image: null,
    imageUrl: "/hajj-1.jpg",
  },
  "2": {
    designation: "উমরাহ গাইড",
    title: "হজ ভিআইপি প্যাকেজ",
    shortDescription: "স্পেশাল প্যাকেজে ৪ তারকা হোটেল",
    description: "আল্লাহ ছাড়া অন্য কোনো উপাস্য নেই, এবং মুহাম্মদ (সা.) তাঁর প্রেরিত রাসুল—এই সাক্ষ্য প্রদান করা।",
    image: null,
    imageUrl: "/hajj-2.jpg",
  },
  "3": {
    designation: "ভ্রমণ গাইড",
    title: "হজ ভিআইপি প্যাকেজ",
    shortDescription: "এ ক্যাটাগরি প্যাকেজে মানসম্মত থাকা",
    description: "আল্লাহ ছাড়া অন্য কোনো উপাস্য নেই, এবং মুহাম্মদ (সা.) তাঁর প্রেরিত রাসুল—এই সাক্ষ্য প্রদান করা।",
    image: null,
    imageUrl: "/hajj-3.jpg",
  },
};

export default function EditBlogForm({ blogId }: EditBlogFormProps) {
  const router = useRouter();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const { control, handleSubmit, setValue, reset, formState: { errors } } = useForm<BlogFormData>({
    defaultValues: {
      designation: "",
      title: "",
      shortDescription: "",
      description: "",
      image: null,
    },
  });

  // Load blog data on component mount
  useEffect(() => {
    const blogData = MOCK_BLOGS[blogId];
    if (blogData) {
      reset({
        designation: blogData.designation,
        title: blogData.title,
        shortDescription: blogData.shortDescription,
        description: blogData.description,
        image: null,
      });
      setImagePreview(blogData.imageUrl);
    }
  }, [blogId, reset]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("image", file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
    setValue("image", null);
  };

  const onSubmit = (data: BlogFormData) => {
    console.log("Form Data:", data);
    // Handle form submission here
  };

  const handleClose = () => {
    router.push("/dashboard/blogs");
  };

  return (
    <div className="bg-[#f8f9fa] rounded-2xl p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Designation Field */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Designation</label>
          <Controller
            name="designation"
            control={control}
            rules={{ required: "Designation is required" }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="write here..."
                className="w-full px-4 py-3 bg-transparent border-b border-gray-200 focus:outline-none focus:border-[#0f3d3e] transition-colors"
              />
            )}
          />
          {errors.designation && (
            <p className="text-red-500 text-sm">{errors.designation.message}</p>
          )}
        </div>

        {/* Title Field */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <Controller
            name="title"
            control={control}
            rules={{ required: "Title is required" }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="write here..."
                className="w-full px-4 py-3 bg-transparent border-b border-gray-200 focus:outline-none focus:border-[#0f3d3e] transition-colors"
              />
            )}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        {/* Short Description Field */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Short Description</label>
          <Controller
            name="shortDescription"
            control={control}
            rules={{ required: "Short description is required" }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="write here..."
                className="w-full px-4 py-3 bg-transparent border-b border-gray-200 focus:outline-none focus:border-[#0f3d3e] transition-colors"
              />
            )}
          />
          {errors.shortDescription && (
            <p className="text-red-500 text-sm">{errors.shortDescription.message}</p>
          )}
        </div>

        {/* Description Field */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Discription</label>
          <Controller
            name="description"
            control={control}
            rules={{ required: "Description is required" }}
            render={({ field }) => (
              <textarea
                {...field}
                rows={5}
                placeholder="write here..."
                className="w-full px-4 py-3 bg-transparent border border-gray-200 rounded-lg focus:outline-none focus:border-[#0f3d3e] transition-colors resize-none"
              />
            )}
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        {/* Image Upload Field */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Upload Image</label>
          <div className="w-28 h-28 border border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-[#0f3d3e] transition-colors overflow-hidden relative">
            {imagePreview ? (
              <>
                <Image src={imagePreview} alt="Preview" fill className="object-cover" />
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors z-10"
                >
                  <X className="w-3 h-3" />
                </button>
              </>
            ) : (
              <>
                <ImageIcon className="w-6 h-6 text-gray-400 mb-1" />
                <span className="text-xs text-gray-500 border border-gray-300 rounded px-3 py-1">Upload</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 pt-4">
          <button
            type="submit"
            className="flex items-center gap-2 bg-[#0f3d3e] text-white px-5 py-2.5 rounded-full hover:bg-[#0a2e2f] transition-colors cursor-pointer"
          >
            <Save className="w-4 h-4" />
            <span className="font-medium">Save</span>
          </button>
          <button
            type="button"
            onClick={handleClose}
            className="flex items-center gap-2 bg-red-500 text-white px-5 py-2.5 rounded-full hover:bg-red-600 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
            <span className="font-medium">Close</span>
          </button>
        </div>
      </form>
    </div>
  );
}
