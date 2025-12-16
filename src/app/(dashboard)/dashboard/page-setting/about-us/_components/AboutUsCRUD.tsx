"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Save, X, Upload } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface AboutUsFormData {
  title: string;
  description: string;
  feature1Title: string;
  feature1Desc: string;
  feature2Title: string;
  feature2Desc: string;
  feature3Title: string;
  feature3Desc: string;
  images: (File | null)[];
  othersTitle: string;
  othersDescription: string;
  experienceTitle: string;
  trustedReviewsTitle: string;
  servicesProvided: string;
  othersImage: File | null;
}

const AboutUsCRUD = () => {
  const [imagePreviews, setImagePreviews] = useState<(string | null)[]>([null, null, null, null]);
  const [othersImagePreview, setOthersImagePreview] = useState<string | null>(null);

  const { control, handleSubmit, setValue, formState: { errors } } = useForm<AboutUsFormData>({
    defaultValues: {
      title: "",
      description: "",
      feature1Title: "",
      feature1Desc: "",
      feature2Title: "",
      feature2Desc: "",
      feature3Title: "",
      feature3Desc: "",
      images: [null, null, null, null],
      othersTitle: "",
      othersDescription: "",
      experienceTitle: "",
      trustedReviewsTitle: "",
      servicesProvided: "",
      othersImage: null,
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

  const handleOthersImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setValue("othersImage", file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setOthersImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setOthersImagePreview(null);
    }
  };

  const removeOthersImage = () => {
    setValue("othersImage", null);
    setOthersImagePreview(null);
  };

  const onSubmit = (data: AboutUsFormData) => {
    console.log("About Us Data:", data);
    // Handle create/update logic here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl p-6 shadow-sm">
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
      {/* Features */}
      {(() => {
        const featureTitleFields = ["feature1Title", "feature2Title", "feature3Title"] as const;
        const featureDescFields = ["feature1Desc", "feature2Desc", "feature3Desc"] as const;
        return [0, 1, 2].map((idx) => (
          <div className="mb-4 grid grid-cols-2 gap-4" key={idx}>
            <div>
              <label className="block text-gray-700 mb-2">Feature Title {idx + 1}</label>
              <Controller
                name={featureTitleFields[idx]}
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="write here..."
                    className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-[#0f3d3e]"
                    value={field.value ?? ''}
                  />
                )}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Feature Short Description {idx + 1}</label>
              <Controller
                name={featureDescFields[idx]}
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="write here..."
                    className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-[#0f3d3e]"
                    value={field.value ?? ''}
                  />
                )}
              />
            </div>
          </div>
        ));
      })()}
      {/* Images */}
      <div className="mb-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        {[0, 1, 2, 3].map((idx) => (
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
      {/* Others About Section */}
      <div className="mb-4 mt-8">
        <h2 className="text-lg font-semibold text-[#0f3d3e] mb-2">Others About Section</h2>
        <label className="block text-gray-700 mb-2">Title</label>
        <Controller
          name="othersTitle"
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
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Description</label>
        <Controller
          name="othersDescription"
          control={control}
          render={({ field }) => (
            <textarea
              {...field}
              placeholder="write here..."
              className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-[#0f3d3e] min-h-[80px]"
            />
          )}
        />
      </div>
      <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-gray-700 mb-2">Experience Title</label>
          <Controller
            name="experienceTitle"
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
        <div>
          <label className="block text-gray-700 mb-2">Trusted Reviews Title</label>
          <Controller
            name="trustedReviewsTitle"
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
        <div>
          <label className="block text-gray-700 mb-2">Services Provided</label>
          <Controller
            name="servicesProvided"
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
      </div>
      <div className="mb-4 flex flex-col items-center">
        <label className="block text-gray-700 mb-2">Upload Image</label>
        <label className="flex flex-col items-center justify-center w-40 h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#0f3d3e] transition-colors">
          {othersImagePreview ? (
            <Image src={othersImagePreview} alt="Others Image Preview" fill className="object-cover rounded-lg" />
          ) : (
            <Upload className="w-8 h-8 text-gray-400" />
          )}
          <span className="text-sm text-gray-500 mt-2">Upload</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleOthersImageChange}
            className="hidden"
          />
        </label>
        {othersImagePreview && (
          <button
            type="button"
            onClick={removeOthersImage}
            className="mt-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
          >
            <X className="w-4 h-4" />
          </button>
        )}
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
          href="/dashboard/page-setting/about-us"
          className="flex items-center gap-2 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
        >
          <X className="w-4 h-4" />
          Close
        </Link>
      </div>
    </form>
  );
};

export default AboutUsCRUD;
