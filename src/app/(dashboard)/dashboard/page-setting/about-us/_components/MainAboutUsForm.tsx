/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useTransition, useEffect } from "react";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { Save, X, Upload } from "lucide-react";
import { createAboutus, updateAboutus } from "@/services/About-us";
import { showErrorToast, showSuccessToast } from "@/utils/toastMessage";
import { useRouter } from "next/navigation";

export interface AboutUsFormData {
  id: string;
  title: string;
  description: string;
  featureTitle1: string;
  featureShortDesc1: string;
  featureTitle2: string;
  featureShortDesc2: string;
  featureTitle3: string;
  featureShortDesc3: string;
  aboutUsImages: File[];
}

interface MainAboutUsFormProps {
  aboutusData?: Partial<AboutUsFormData>;
}

const MainAboutUsForm: React.FC<MainAboutUsFormProps> = ({ aboutusData }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isEditing, setIsEditing] = useState(!!aboutusData?.id);
  const [imagePreviews, setImagePreviews] = useState<string[]>(() => {
    if (
      aboutusData &&
      aboutusData.aboutUsImages &&
      Array.isArray(aboutusData.aboutUsImages) &&
      aboutusData.aboutUsImages.length > 0
    ) {
      return aboutusData.aboutUsImages.map((img: any) => img.image);
    }
    return [];
  });

  const {
    control,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm<AboutUsFormData>({
    defaultValues: {
      title: aboutusData?.title || "",
      description: aboutusData?.description || "",
      featureTitle1: aboutusData?.featureTitle1 || "",
      featureShortDesc1: aboutusData?.featureShortDesc1 || "",
      featureTitle2: aboutusData?.featureTitle2 || "",
      featureShortDesc2: aboutusData?.featureShortDesc2 || "",
      featureTitle3: aboutusData?.featureTitle3 || "",
      featureShortDesc3: aboutusData?.featureShortDesc3 || "",
      aboutUsImages: [],
    },
  });

  const aboutUsImages = watch("aboutUsImages");

  // If aboutusData changes (e.g. after update), update form and previews
  useEffect(() => {
    if (
      aboutusData &&
      aboutusData.aboutUsImages &&
      Array.isArray(aboutusData.aboutUsImages) &&
      aboutusData.aboutUsImages.length > 0
    ) {
      setImagePreviews(aboutusData.aboutUsImages.map((img: any) => img.image));
    } else {
      setImagePreviews([]);
    }
    reset({
      title: aboutusData?.title || "",
      description: aboutusData?.description || "",
      featureTitle1: aboutusData?.featureTitle1 || "",
      featureShortDesc1: aboutusData?.featureShortDesc1 || "",
      featureTitle2: aboutusData?.featureTitle2 || "",
      featureShortDesc2: aboutusData?.featureShortDesc2 || "",
      featureTitle3: aboutusData?.featureTitle3 || "",
      featureShortDesc3: aboutusData?.featureShortDesc3 || "",
      aboutUsImages: [],
    });
    setIsEditing(!!aboutusData?.id);
  }, [aboutusData, reset]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const newFiles = Array.from(files);
      const updatedImages = [...(aboutUsImages || []), ...newFiles];
      setValue("aboutUsImages", updatedImages);
      // Generate previews for new files
      newFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreviews((prev) => [...prev, reader.result as string]);
        };
        reader.readAsDataURL(file);
      });
    }
    e.target.value = "";
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = (aboutUsImages || []).filter((_: any, i: number) => i !== index);
    const updatedPreviews = imagePreviews.filter((_, i) => i !== index);
    setValue("aboutUsImages", updatedImages);
    setImagePreviews(updatedPreviews);
  };

  const onSubmit = async (data: AboutUsFormData) => {
    startTransition(async () => {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("featureTitle1", data.featureTitle1);
      formData.append("featureShortDesc1", data.featureShortDesc1);
      formData.append("featureTitle2", data.featureTitle2);
      formData.append("featureShortDesc2", data.featureShortDesc2);
      formData.append("featureTitle3", data.featureTitle3);
      formData.append("featureShortDesc3", data.featureShortDesc3);
      if (data.aboutUsImages && data.aboutUsImages.length > 0) {
        data.aboutUsImages.forEach((file) => {
          if (file) formData.append("images", file);
        });
      }
      let res;
      if (isEditing && aboutusData?.id) {
        res = await updateAboutus(aboutusData.id, formData);
        console.log("see update res==>",res)
      } else {
        res = await createAboutus(formData);
        console.log("see create res==>",res);
      }
      if (res && res.statusCode === (isEditing ? 200 : 201)) {
        showSuccessToast(res.message);
        if (!isEditing) {
          setIsEditing(true);
        }
        if (router.refresh) {
          router.refresh();
        }
      } else {
        showErrorToast(res?.message || "Something went wrong");
      }
    });
  };

  const handleCancel = () => {
    reset({
      title: aboutusData?.title || "",
      description: aboutusData?.description || "",
      featureTitle1: aboutusData?.featureTitle1 || "",
      featureShortDesc1: aboutusData?.featureShortDesc1 || "",
      featureTitle2: aboutusData?.featureTitle2 || "",
      featureShortDesc2: aboutusData?.featureShortDesc2 || "",
      featureTitle3: aboutusData?.featureTitle3 || "",
      featureShortDesc3: aboutusData?.featureShortDesc3 || "",
      aboutUsImages: [],
    });
    if (
      aboutusData &&
      aboutusData.aboutUsImages &&
      Array.isArray(aboutusData.aboutUsImages) &&
      aboutusData.aboutUsImages.length > 0
    ) {
      setImagePreviews(aboutusData.aboutUsImages.map((img: any) => img.image));
    } else {
      setImagePreviews([]);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm mb-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Main About Us Section
        </h2>
        {/* Title */}
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
                placeholder="Enter title"
                className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-[#0f3d3e]"
              />
            )}
          />
          {errors.title && (
            <span className="text-red-500 text-xs">{errors.title.message}</span>
          )}
        </div>
        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Description</label>
          <Controller
            name="description"
            control={control}
            rules={{ required: "Description is required" }}
            render={({ field }) => (
              <textarea
                {...field}
                placeholder="Enter description"
                className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-[#0f3d3e] min-h-[80px]"
              />
            )}
          />
          {errors.description && (
            <span className="text-red-500 text-xs">{errors.description.message}</span>
          )}
        </div>
        {/* Features */}
        {[
          { title: "featureTitle1", desc: "featureShortDesc1" },
          { title: "featureTitle2", desc: "featureShortDesc2" },
          { title: "featureTitle3", desc: "featureShortDesc3" },
        ].map((field, idx) => (
          <div key={field.title} className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Feature Title {idx + 1}</label>
              <Controller
                name={field.title as "featureTitle1" | "featureTitle2" | "featureTitle3"}
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
              <label className="block text-gray-700 mb-2">Feature Short Description {idx + 1}</label>
              <Controller
                name={field.desc as "featureShortDesc1" | "featureShortDesc2" | "featureShortDesc3"}
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
        ))}
        {/* Images */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Upload Images</label>
          <div className="w-full border border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-[#0f3d3e] transition-colors overflow-hidden relative p-6">
            {imagePreviews.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 w-full">
                {imagePreviews.map((preview, index) => (
                  <div key={index} className="relative aspect-square">
                    <Image
                      src={preview}
                      alt={`Preview ${index + 1}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(index)}
                      className="absolute top-1 right-1 w-6 h-6 flex items-center justify-center bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
              style={{ zIndex: 2 }}
            />
            <div className="flex flex-col items-center justify-center z-1 pointer-events-none">
              <Upload className="w-8 h-8 text-gray-400" />
              <span className="text-sm text-gray-500 mt-2">Upload</span>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-8 justify-end">
          <button
            type="submit"
            disabled={isPending}
            className="flex items-center gap-2 bg-[#0f3d3e] text-white px-6 py-2 rounded-lg hover:bg-[#0f3d3e]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Save className="w-4 h-4" />
            {isPending
              ? isEditing
                ? "Updating..."
                : "Creating..."
              : isEditing
              ? "Update About Us"
              : "Create About Us"}
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="flex items-center gap-2 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            <X className="w-4 h-4" />
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default MainAboutUsForm;