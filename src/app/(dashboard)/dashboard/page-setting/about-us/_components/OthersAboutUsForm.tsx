"use client";
import { Save, Upload, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { Controller, useForm, } from "react-hook-form";

interface OthersFormData {
  othersTitle: string;
  othersDescription: string;
  experienceTitle: string;
  trustedReviewsTitle: string;
  servicesProvided: string;
  othersImage: File | null;
}

const OthersAboutUsForm = () => {
  const [othersImagePreview, setOthersImagePreview] = useState<string | null>(null);

  const { control, handleSubmit, setValue } = useForm<OthersFormData>({
    defaultValues: {
      othersTitle: "",
      othersDescription: "",
      experienceTitle: "",
      trustedReviewsTitle: "",
      servicesProvided: "",
      othersImage: null,
    },
  });

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

  const onSubmit = (data: OthersFormData) => {
    console.log("Others About Section Data:", data);
    alert("Others About Section data saved! Check console for details.");
    // Handle create/update logic for others section here
  };

  const handleClose = () => {
    console.log("Others form closed");
    alert("Others form closed");
    // Add navigation logic here
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Others About Section</h2>
      
      <div className="mb-4">
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

      <div className="mb-6 flex flex-col items-center">
        <label className="block text-gray-700 mb-2">Upload Image</label>
        <label className="relative flex flex-col items-center justify-center w-40 h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#0f3d3e] transition-colors">
          {othersImagePreview ? (
            <Image
              src={othersImagePreview}
              alt="Others Image Preview"
              width={160}
              height={160}
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <>
              <Upload className="w-8 h-8 text-gray-400" />
              <span className="text-sm text-gray-500 mt-2">Upload</span>
            </>
          )}
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
          onClick={handleSubmit(onSubmit)}
          className="flex items-center gap-2 bg-[#0f3d3e] text-white px-6 py-2 rounded-lg hover:bg-[#0f3d3e]/90 transition-colors"
        >
          <Save className="w-4 h-4" />
          Save
        </button>
        <button
          onClick={handleClose}
          className="flex items-center gap-2 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
        >
          <X className="w-4 h-4" />
          Close
        </button>
      </div>
    </div>
  );
};
export default OthersAboutUsForm;