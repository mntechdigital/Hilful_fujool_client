"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Save, X, Upload } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface HeroAreaFormData {
  subTitle: string;
  title: string;
  description: string;
  youtubeLink: string;
  images: (File | null)[];
  logo: File | null;
  footerShortDescription: string;
}

const HeroAreaCRUD = () => {
  const [imagePreviews, setImagePreviews] = useState<(string | null)[]>([null, null, null]);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);

  const { control, handleSubmit, setValue, formState: { errors } } = useForm<HeroAreaFormData>({
    defaultValues: {
      subTitle: "",
      title: "",
      description: "",
      youtubeLink: "",
      images: [null, null, null],
      logo: null,
      footerShortDescription: "",
    },
  });

  const handleImageChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setValue(`images.${index}`, file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviews((prev) => {
          const updated = [...prev];
          updated[index] = reader.result as string;
          return updated;
        });
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreviews((prev) => {
        const updated = [...prev];
        updated[index] = null;
        return updated;
      });
    }
  };

  const removeImage = (index: number) => {
    setValue(`images.${index}`, null);
    setImagePreviews((prev) => {
      const updated = [...prev];
      updated[index] = null;
      return updated;
    });
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setValue("logo", file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setLogoPreview(null);
    }
  };

  const removeLogo = () => {
    setValue("logo", null);
    setLogoPreview(null);
  };

  const onSubmit = (data: HeroAreaFormData) => {
    console.log("Hero Area Data:", data);
    // Handle create/update logic here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Sub Title</label>
        <Controller
          name="subTitle"
          control={control}
          rules={{ required: "Sub Title is required" }}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              placeholder="write here..."
              className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-[#0f3d3e]"
            />
          )}
        />
        {errors.subTitle && <p className="text-red-500 text-sm mt-1">{errors.subTitle.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Title</label>
        <Controller
          name="title"
          control={control}
          rules={{ required: "Title is required" }}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              placeholder="write here..."
              className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-[#0f3d3e]"
            />
          )}
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Description</label>
        <Controller
          name="description"
          control={control}
          rules={{ required: "Description is required" }}
          render={({ field }) => (
            <textarea
              {...field}
              placeholder="write here..."
              className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-[#0f3d3e] min-h-[80px]"
            />
          )}
        />
        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">You Tube Link</label>
        <Controller
          name="youtubeLink"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              placeholder="write here..."
              className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-[#0f3d3e]"
            />
          )}
        />
      </div>
      <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[0, 1, 2].map((idx) => (
          <div key={idx} className="flex flex-col items-center">
            <label className="block text-gray-700 mb-2">Upload Image 0{idx + 1}</label>
            <label className="flex flex-col items-center justify-center w-40 h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#0f3d3e] transition-colors">
              {imagePreviews[idx] ? (
                <Image src={imagePreviews[idx]!} alt={`Preview ${idx + 1}`} fill className="object-cover rounded-lg" />
              ) : (
                <Upload className="w-8 h-8 text-gray-400" />
              )}
              <span className="text-sm text-gray-500 mt-2">Upload</span>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(idx, e)}
                className="hidden"
              />
            </label>
            {imagePreviews[idx] && (
              <button
                type="button"
                onClick={() => removeImage(idx)}
                className="mt-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="mb-4 flex flex-col items-center">
        <label className="block text-gray-700 mb-2">Upload Logo</label>
        <label className="flex flex-col items-center justify-center w-40 h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#0f3d3e] transition-colors">
          {logoPreview ? (
            <Image src={logoPreview} alt="Logo Preview" fill className="object-cover rounded-lg" />
          ) : (
            <Upload className="w-8 h-8 text-gray-400" />
          )}
          <span className="text-sm text-gray-500 mt-2">Upload</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleLogoChange}
            className="hidden"
          />
        </label>
        {logoPreview && (
          <button
            type="button"
            onClick={removeLogo}
            className="mt-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Footer Short Description</label>
        <Controller
          name="footerShortDescription"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              placeholder="write here..."
              className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-[#0f3d3e]"
            />
          )}
        />
      </div>
      <div className="flex gap-4 mt-8 justify-end">
        <button
          type="submit"
          className="flex items-center gap-2 bg-[#0f3d3e] text-white px-6 py-2 rounded-lg hover:bg-[#0f3d3e]/90 transition-colors cursor-pointer"
        >
          <Save className="w-4 h-4" />
          Save
        </button>
        <Link
          href="/dashboard/page-setting/hero-area"
          className="flex items-center gap-2 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
        >
          <X className="w-4 h-4" />
          Close
        </Link>
      </div>
    </form>
  );
};

export default HeroAreaCRUD;
