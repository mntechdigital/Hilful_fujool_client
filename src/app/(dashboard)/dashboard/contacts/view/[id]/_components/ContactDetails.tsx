"use client";

import React from "react";

interface ContactDetailsProps {
  contactId: string;
}

interface ContactData {
  fullName: string;
  email: string;
  phone: string;
  altEmail: string;
  country: string;
  subject: string;
  content: string;
}

// Mock data for demonstration - replace with actual API call
const MOCK_CONTACTS: Record<string, ContactData> = {
  "1": {
    fullName: "Asif Khan",
    email: "info@gmail.com",
    phone: "+880 1254 10258",
    altEmail: "asifkhan88@gmail.com",
    country: "Bangladesh",
    subject: "হজ ভিআইপি প্যাকেজ",
    content: "আল্লাহ ছাড়া অন্য কোনো উপাস্য নেই, এবং মুহাম্মদ (সা.) তাঁর প্রেরিত রাসুল—এই সাক্ষ্য প্রদান করা।",
  },
  "2": {
    fullName: "Asif Khan",
    email: "info@gmail.com",
    phone: "+880 1254 10258",
    altEmail: "asifkhan88@gmail.com",
    country: "Bangladesh",
    subject: "হজ স্পেশাল প্যাকেজ",
    content: "আল্লাহ ছাড়া অন্য কোনো উপাস্য নেই, এবং মুহাম্মদ (সা.) তাঁর প্রেরিত রাসুল—এই সাক্ষ্য প্রদান করা।",
  },
  "3": {
    fullName: "Asif Khan",
    email: "info@gmail.com",
    phone: "+880 1254 10258",
    altEmail: "asifkhan88@gmail.com",
    country: "Bangladesh",
    subject: "হজ এ ক্যাটাগরি প্যাকেজ",
    content: "আল্লাহ ছাড়া অন্য কোনো উপাস্য নেই, এবং মুহাম্মদ (সা.) তাঁর প্রেরিত রাসুল—এই সাক্ষ্য প্রদান করা।",
  },
};

export default function ContactDetails({ contactId }: ContactDetailsProps) {
  const contact = MOCK_CONTACTS[contactId];

  if (!contact) {
    return (
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <p className="text-gray-500">Contact not found</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      {/* Row 1: Full Name, Email, Phone, Email, Country */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
        <div>
          <h3 className="text-sm font-semibold text-gray-800 mb-1">Full Name</h3>
          <p className="text-sm text-gray-600">{contact.fullName}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-800 mb-1">Email</h3>
          <p className="text-sm text-gray-600">{contact.email}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-800 mb-1">Phone</h3>
          <p className="text-sm text-gray-600">{contact.phone}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-800 mb-1">Email</h3>
          <p className="text-sm text-gray-600">{contact.altEmail}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-800 mb-1">Country</h3>
          <p className="text-sm text-gray-600">{contact.country}</p>
        </div>
      </div>

      {/* Subject */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-800 mb-1">Subject</h3>
        <p className="text-sm text-gray-600">{contact.subject}</p>
      </div>

      {/* Content */}
      <div>
        <h3 className="text-sm font-semibold text-gray-800 mb-1">Content</h3>
        <p className="text-sm text-gray-600">{contact.content}</p>
      </div>
    </div>
  );
}
