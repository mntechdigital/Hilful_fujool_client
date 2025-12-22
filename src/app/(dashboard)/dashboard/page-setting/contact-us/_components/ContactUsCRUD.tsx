"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Save, X, Upload } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { createContactUs } from "@/services/contactus";
import { showErrorToast, showSuccessToast } from "@/utils/toastMessage";
import { useRouter } from "next/navigation";

interface ContactUsFormData {
  subTitle: string;
  title: string;
  companyPhone: string;
  companyEmail: string;
  companyLocation: string;
  facebookLink: string;
  instagramLink: string;
  youtubeLink: string;
  image: File | null;
}

const ContactUsCRUD = () => {
  const router = useRouter();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactUsFormData>({
    defaultValues: {
      subTitle: "",
      title: "",
      companyPhone: "",
      companyEmail: "",
      companyLocation: "",
      facebookLink: "",
      instagramLink: "",
      youtubeLink: "",
      image: null,
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

  const onSubmit = async (data: ContactUsFormData) => {
    // Use FormData and append all fields
    const formData = new FormData();
    formData.append("subTitle", data.subTitle);
    formData.append("title", data.title);
      formData.append("companyNumber", data.companyPhone);
      formData.append("companyEmail", data.companyEmail);
      formData.append("companyLocation", data.companyLocation);
      formData.append("facebookUrl", data.facebookLink);
      formData.append("instagramUrl", data.instagramLink);
      formData.append("youtubeUrl", data.youtubeLink);
    if (data.image) {
      formData.append("image", data.image);
    }
    // Example: send form to API
    const res = await createContactUs(formData);
    console.log("Contact Us form submitted:==>", res);
    if (res.statusCode === 201) {
      showSuccessToast(res.message);
      reset();
      router.push("/dashboard/page-setting/contact-us");
    } else {
      showErrorToast(res.message);
    }
    // Handle create/update logic here
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-2xl p-6 shadow-sm"
    >
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
              value={field.value ?? ""}
            />
          )}
        />
        {errors.subTitle && (
          <p className="text-red-500 text-sm mt-1">{errors.subTitle.message}</p>
        )}
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
              value={field.value ?? ""}
            />
          )}
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Company Phone</label>
        <Controller
          name="companyPhone"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              placeholder="write here..."
              className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-[#0f3d3e]"
              value={field.value ?? ""}
            />
          )}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Company Email</label>
        <Controller
          name="companyEmail"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="email"
              placeholder="write here..."
              className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-[#0f3d3e]"
              value={field.value ?? ""}
            />
          )}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Company Location</label>
        <Controller
          name="companyLocation"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              placeholder="write here..."
              className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-[#0f3d3e]"
              value={field.value ?? ""}
            />
          )}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Facebook Link</label>
        <Controller
          name="facebookLink"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              placeholder="write here..."
              className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-[#0f3d3e]"
              value={field.value ?? ""}
            />
          )}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Instagram Link</label>
        <Controller
          name="instagramLink"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              placeholder="write here..."
              className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-[#0f3d3e]"
              value={field.value ?? ""}
            />
          )}
        />
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
              value={field.value ?? ""}
            />
          )}
        />
      </div>
      <div className="mb-4 flex flex-col items-center">
        <label className="block text-gray-700 mb-2">Upload Image</label>
        <label className="flex flex-col items-center justify-center w-40 h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#0f3d3e] transition-colors">
          {imagePreview ? (
            <Image
              src={imagePreview}
              alt="Preview"
              fill
              className="object-cover rounded-lg"
            />
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
          href="/dashboard/page-setting/contact-us"
          className="flex items-center gap-2 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
        >
          <X className="w-4 h-4" />
          Close
        </Link>
      </div>
    </form>
  );
};

export default ContactUsCRUD;
