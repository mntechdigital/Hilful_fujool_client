"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  subject: string;
  content: string;
}

export default function CreateContactForm() {
  const { control, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      country: "",
      subject: "",
      content: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form Data:", data);
    // Handle form submission here
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Row 1: Full Name, Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Full Name <span className="text-red-500">*</span>
            </label>
            <Controller
              name="fullName"
              control={control}
              rules={{ required: "Full name is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Enter full name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f3d3e] focus:border-transparent"
                />
              )}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <Controller
              name="email"
              control={control}
              rules={{ 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              }}
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  placeholder="Enter email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f3d3e] focus:border-transparent"
                />
              )}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Row 2: Phone, Country */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Phone <span className="text-red-500">*</span>
            </label>
            <Controller
              name="phone"
              control={control}
              rules={{ required: "Phone is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Enter phone number"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f3d3e] focus:border-transparent"
                />
              )}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Country <span className="text-red-500">*</span>
            </label>
            <Controller
              name="country"
              control={control}
              rules={{ required: "Country is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Enter country"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f3d3e] focus:border-transparent"
                />
              )}
            />
            {errors.country && (
              <p className="text-red-500 text-sm">{errors.country.message}</p>
            )}
          </div>
        </div>

        {/* Subject Field */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Subject <span className="text-red-500">*</span>
          </label>
          <Controller
            name="subject"
            control={control}
            rules={{ required: "Subject is required" }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="Enter subject"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f3d3e] focus:border-transparent"
              />
            )}
          />
          {errors.subject && (
            <p className="text-red-500 text-sm">{errors.subject.message}</p>
          )}
        </div>

        {/* Content Field */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Content <span className="text-red-500">*</span>
          </label>
          <Controller
            name="content"
            control={control}
            rules={{ required: "Content is required" }}
            render={({ field }) => (
              <textarea
                {...field}
                rows={5}
                placeholder="Enter content"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f3d3e] focus:border-transparent resize-none"
              />
            )}
          />
          {errors.content && (
            <p className="text-red-500 text-sm">{errors.content.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button
            type="submit"
            className="bg-[#0f3d3e] hover:bg-[#0f3d3e]/90 text-white px-8 py-3 rounded-full"
          >
            Create Contact
          </Button>
        </div>
      </form>
    </div>
  );
}
