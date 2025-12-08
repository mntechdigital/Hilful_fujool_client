"use client";

import { ChevronLeft, ChevronRight, Pencil, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import DeleteModal from "@/components/shared/DeleteModal";
import Link from "next/link";

interface Blog {
  id: number;
  image: string;
  title: string;
  description: string;
  status: boolean;
}

const INITIAL_BLOGS_DATA: Blog[] = [
  {
    id: 1,
    image: "/hajj-1.jpg",
    title: "হজ ভিআইপি প্যাকেজ",
    description: "আল্লাহ ছাড়া অন্য কোনো উপাস্য নেই, এবং মুহাম্মদ (সা.) তাঁর প্রেরিত রাসুল—এই সাক্ষ্য প্রদান করা।",
    status: true,
  },
  {
    id: 2,
    image: "/hajj-2.jpg",
    title: "হজ ভিআইপি প্যাকেজ",
    description: "আল্লাহ ছাড়া অন্য কোনো উপাস্য নেই, এবং মুহাম্মদ (সা.) তাঁর প্রেরিত রাসুল—এই সাক্ষ্য প্রদান করা।",
    status: true,
  },
  {
    id: 3,
    image: "/hajj-3.jpg",
    title: "হজ ভিআইপি প্যাকেজ",
    description: "আল্লাহ ছাড়া অন্য কোনো উপাস্য নেই, এবং মুহাম্মদ (সা.) তাঁর প্রেরিত রাসুল—এই সাক্ষ্য প্রদান করা।",
    status: false,
  },
];

const BlogsTable = () => {
  const [blogs, setBlogs] = useState<Blog[]>(INITIAL_BLOGS_DATA);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);

  const toggleStatus = (id: number) => {
    setBlogs((prev) =>
      prev.map((blog) =>
        blog.id === id ? { ...blog, status: !blog.status } : blog
      )
    );
  };

  const handleDeleteClick = (id: number) => {
    setSelectedBlogId(id);
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (selectedBlogId !== null) {
      setBlogs((prev) => prev.filter((blog) => blog.id !== selectedBlogId));
    }
    setDeleteModalOpen(false);
    setSelectedBlogId(null);
  };

  const handleCancelDelete = () => {
    setDeleteModalOpen(false);
    setSelectedBlogId(null);
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left py-4 px-6 font-semibold text-gray-700">SN</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Image</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Title</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Description</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Status</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {blogs.map((blog) => (
              <tr key={blog.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                <td className="py-4 px-6 text-gray-600">{blog.id}</td>
                <td className="py-4 px-6">
                  <div className="w-14 h-14 rounded-lg overflow-hidden relative">
                    <Image src={blog.image} alt={blog.title} fill className="object-cover" />
                  </div>
                </td>
                <td className="py-4 px-6 text-gray-700">{blog.title}</td>
                <td className="py-4 px-6 text-gray-600 max-w-xs">
                  <p className="line-clamp-2">{blog.description}</p>
                </td>
                <td className="py-4 px-6">
                  <button
                    onClick={() => toggleStatus(blog.id)}
                    className={`w-12 h-6 rounded-full relative transition-colors cursor-pointer ${blog.status ? "bg-[#0f3d3e]" : "bg-gray-300"}`}
                  >
                    <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${blog.status ? "right-1" : "left-1"}`} />
                  </button>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/dashboard/blogs/edit/${blog.id}`}
                      className="w-8 h-8 flex items-center justify-center border border-[#0f3d3e] text-[#0f3d3e] rounded hover:bg-[#0f3d3e] hover:text-white transition-colors cursor-pointer"
                    >
                      <Pencil className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={() => handleDeleteClick(blog.id)}
                      className="w-8 h-8 flex items-center justify-center border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
          <p className="text-sm text-gray-600">Showing 1 to 5 of 5 entries</p>
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-[#0f3d3e] text-white rounded-full">1</button>
            <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded">2</button>
            <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded">3</button>
            <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded">4</button>
            <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <DeleteModal
        open={deleteModalOpen}
        onOpenChange={setDeleteModalOpen}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </>
  );
};

export default BlogsTable;
