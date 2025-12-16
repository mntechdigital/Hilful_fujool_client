"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Save, X, Upload } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface UpdateProfileFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  image: File | null;
  oldPassword: string;
  newPassword: string;
  retypePassword: string;
}

const UpdateProfileCRUD = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);

  const { control, handleSubmit, setValue, formState: { errors } } = useForm<UpdateProfileFormData>({
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      image: null,
      oldPassword: "",
      newPassword: "",
      retypePassword: "",
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setValue("image", file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const removeImage = () => {
    setValue("image", null);
    setImagePreview(null);
  };

  const onSubmit = (data: UpdateProfileFormData) => {
    console.log("Update Profile Data:", data);
    // Handle create/update logic here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Full Name</label>
        <Controller
          name="fullName"
          control={control}
          rules={{ required: "Full Name is required" }}
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
        {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Phone Number</label>
        <Controller
          name="phoneNumber"
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
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Email</label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="email"
              placeholder="write here..."
              className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-[#0f3d3e]"
              value={field.value ?? ''}
            />
          )}
        />
      </div>
      {/* Password Fields */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Old Password</label>
        <div className="relative">
          <Controller
            name="oldPassword"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type={showOldPassword ? "text" : "password"}
                placeholder="write here..."
                className="w-full border-b border-gray-200 py-2 pr-10 focus:outline-none focus:border-[#0f3d3e]"
                value={field.value ?? ''}
              />
            )}
          />
          <button
            type="button"
            onClick={() => setShowOldPassword((prev) => !prev)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
          </button>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">New Password</label>
        <div className="relative">
          <Controller
            name="newPassword"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type={showNewPassword ? "text" : "password"}
                placeholder="write here..."
                className="w-full border-b border-gray-200 py-2 pr-10 focus:outline-none focus:border-[#0f3d3e]"
                value={field.value ?? ''}
              />
            )}
          />
          <button
            type="button"
            onClick={() => setShowNewPassword((prev) => !prev)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
          </button>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Re-Type Password</label>
        <div className="relative">
          <Controller
            name="retypePassword"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type={showRetypePassword ? "text" : "password"}
                placeholder="write here..."
                className="w-full border-b border-gray-200 py-2 pr-10 focus:outline-none focus:border-[#0f3d3e]"
                value={field.value ?? ''}
              />
            )}
          />
          <button
            type="button"
            onClick={() => setShowRetypePassword((prev) => !prev)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
          </button>
        </div>
      </div>
      <div className="mb-4 flex flex-col items-center">
        <label className="block text-gray-700 mb-2">Upload Image</label>
        <label className="flex flex-col items-center justify-center w-40 h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#0f3d3e] transition-colors">
          {imagePreview ? (
            <Image src={imagePreview} alt="Preview" fill className="object-cover rounded-lg" />
          ) : (
            <Upload className="w-8 h-8 text-gray-400" />
          )}
          <span className="text-sm text-gray-500 mt-2">Upload</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </label>
        {imagePreview && (
          <button
            type="button"
            onClick={removeImage}
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
          href="/dashboard/update-profile"
          className="flex items-center gap-2 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
        >
          <X className="w-4 h-4" />
          Close
        </Link>
      </div>
    </form>
  );
};

export default UpdateProfileCRUD;
