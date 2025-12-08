"use client";

import { ChevronLeft, ChevronRight, Pencil, Star, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import DeleteModal from "@/components/shared/DeleteModal";
import Link from "next/link";

interface Review {
  id: number;
  image: string;
  name: string;
  review: string;
  rating: number;
  status: boolean;
}

const INITIAL_REVIEWS_DATA: Review[] = [
  {
    id: 1,
    image: "/hajj-1.jpg",
    name: "Asif Khan",
    review: "আল্লাহ ছাড়া অন্য কোনো উপাস্য নেই, এবং মুহাম্মদ (সা.) তাঁর প্রেরিত রাসুল—এই সাক্ষ্য প্রদান করা।",
    rating: 5,
    status: false,
  },
  {
    id: 2,
    image: "/hajj-2.jpg",
    name: "Asif Khan",
    review: "আল্লাহ ছাড়া অন্য কোনো উপাস্য নেই, এবং মুহাম্মদ (সা.) তাঁর প্রেরিত রাসুল—এই সাক্ষ্য প্রদান করা।",
    rating: 4,
    status: true,
  },
  {
    id: 3,
    image: "/hajj-3.jpg",
    name: "Asif Khan",
    review: "আল্লাহ ছাড়া অন্য কোনো উপাস্য নেই, এবং মুহাম্মদ (সা.) তাঁর প্রেরিত রাসুল—এই সাক্ষ্য প্রদান করা।",
    rating: 3,
    status: false,
  },
];

const ReviewsTable = () => {
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS_DATA);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedReviewId, setSelectedReviewId] = useState<number | null>(null);

  const toggleStatus = (id: number) => {
    setReviews((prev) =>
      prev.map((review) =>
        review.id === id ? { ...review, status: !review.status } : review
      )
    );
  };

  const handleDeleteClick = (id: number) => {
    setSelectedReviewId(id);
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (selectedReviewId !== null) {
      setReviews((prev) => prev.filter((review) => review.id !== selectedReviewId));
    }
    setDeleteModalOpen(false);
    setSelectedReviewId(null);
  };

  const handleCancelDelete = () => {
    setDeleteModalOpen(false);
    setSelectedReviewId(null);
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${star <= rating ? "fill-orange-400 text-orange-400" : "fill-gray-200 text-gray-200"}`}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left py-4 px-6 font-semibold text-gray-700">SN</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Image</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Name</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Reviews</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Rating</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Status</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {reviews.map((review) => (
              <tr key={review.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                <td className="py-4 px-6 text-gray-600">{review.id}</td>
                <td className="py-4 px-6">
                  <div className="w-14 h-14 rounded-lg overflow-hidden relative">
                    <Image src={review.image} alt={review.name} fill className="object-cover" />
                  </div>
                </td>
                <td className="py-4 px-6 text-gray-700">{review.name}</td>
                <td className="py-4 px-6 text-gray-600 max-w-xs">
                  <p className="line-clamp-2">{review.review}</p>
                </td>
                <td className="py-4 px-6">{renderStars(review.rating)}</td>
                <td className="py-4 px-6">
                  <button
                    onClick={() => toggleStatus(review.id)}
                    className={`w-12 h-6 rounded-full relative transition-colors cursor-pointer ${review.status ? "bg-[#0f3d3e]" : "bg-gray-300"}`}
                  >
                    <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${review.status ? "right-1" : "left-1"}`} />
                  </button>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/dashboard/reviews/edit/${review.id}`}
                      className="w-8 h-8 flex items-center justify-center border border-[#0f3d3e] text-[#0f3d3e] rounded hover:bg-[#0f3d3e] hover:text-white transition-colors cursor-pointer"
                    >
                      <Pencil className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={() => handleDeleteClick(review.id)}
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

export default ReviewsTable;
