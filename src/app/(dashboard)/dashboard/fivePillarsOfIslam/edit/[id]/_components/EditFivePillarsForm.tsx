"use client";

import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { ImageIcon, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface FivePillarsFormData {
  title: string;
  description: string;
  order: number;
  image: File | null;
}

interface EditFivePillarsFormProps {
  pillarId: string;
}

// Mock data for demonstration - replace with actual API call
const MOCK_PILLARS: Record<string, FivePillarsFormData & { imageUrl: string }> = {
  "1": {
    title: "শাহাদা (সাক্ষ্য)",
    description: "আল্লাহ ছাড়া অন্য কোনো উপাস্য নেই, এবং মুহাম্মদ (সা.) তাঁর প্রেরিত রাসুল—এই সাক্ষ্য প্রদান করা।",
    order: 1,
    image: null,
    imageUrl: "/hajj-1.jpg",
  },
  "2": {
    title: "সালাত (নামাজ)",
    description: "আল্লাহ ছাড়া অন্য কোনো উপাস্য নেই, এবং মুহাম্মদ (সা.) তাঁর প্রেরিত রাসুল—এই সাক্ষ্য প্রদান করা।",
    order: 2,
    image: null,
    imageUrl: "/hajj-2.jpg",
  },
  "3": {
    title: "যাকাত (দান)",
    description: "আল্লাহ ছাড়া অন্য কোনো উপাস্য নেই, এবং মুহাম্মদ (সা.) তাঁর প্রেরিত রাসুল—এই সাক্ষ্য প্রদান করা।",
    order: 3,
    image: null,
    imageUrl: "/hajj-3.jpg",
  },
};

export default function EditFivePillarsForm({ pillarId }: EditFivePillarsFormProps) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const { control, handleSubmit, setValue, reset, formState: { errors } } = useForm<FivePillarsFormData>({
    defaultValues: {
      title: "",
      description: "",
      order: 1,
      image: null,
    },
  });

  // Load pillar data on component mount
  useEffect(() => {
    const pillarData = MOCK_PILLARS[pillarId];
    if (pillarData) {
      reset({
        title: pillarData.title,
        description: pillarData.description,
        order: pillarData.order,
        image: null,
      });
      setImagePreview(pillarData.imageUrl);
    }
  }, [pillarId, reset]);

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

  const onSubmit = (data: FivePillarsFormData) => {
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
                placeholder="Enter pillar title"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f3d3e] focus:border-transparent"
              />
            )}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
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
                placeholder="Enter pillar description"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f3d3e] focus:border-transparent resize-none"
              />
            )}
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        {/* Order Field */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Order <span className="text-red-500">*</span>
          </label>
          <Controller
            name="order"
            control={control}
            rules={{ required: "Order is required", min: { value: 1, message: "Order must be at least 1" } }}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                min={1}
                placeholder="Enter order number"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f3d3e] focus:border-transparent"
                onChange={(e) => field.onChange(parseInt(e.target.value) || 1)}
              />
            )}
          />
          {errors.order && (
            <p className="text-red-500 text-sm">{errors.order.message}</p>
          )}
        </div>

        {/* Image Upload Field */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Image <span className="text-red-500">*</span>
          </label>
          <div className="w-32 h-28 border border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-[#0f3d3e] transition-colors overflow-hidden relative">
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
                <ImageIcon className="w-8 h-8 text-gray-400 mb-1" />
                <span className="text-sm text-gray-500 border border-gray-300 rounded px-3 py-1">Upload</span>
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

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button
            type="submit"
            className="bg-[#0f3d3e] hover:bg-[#0f3d3e]/90 text-white px-8 py-3 rounded-full"
          >
            Update Pillar
          </Button>
        </div>
      </form>
    </div>
  );
}
