"use client";

import { ChevronLeft, ChevronRight, Eye, X } from "lucide-react";
import React, { useState } from "react";
import DeleteModal from "@/components/shared/DeleteModal";
import Link from "next/link";

interface Contact {
  id: number;
  name: string;
  message: string;
  phone: string;
  email: string;
}

const INITIAL_CONTACTS_DATA: Contact[] = [
  {
    id: 1,
    name: "Asif Khan",
    message: "আল্লাহ ছাড়া অন্য কোনো উপাস্য নেই, এবং মুহাম্মদ (সা.) তাঁর প্রেরিত রাসুল—এই সাক্ষ্য প্রদান করা।",
    phone: "+880 1768-1897-55",
    email: "asifkhan88@gmail.com",
  },
  {
    id: 2,
    name: "Asif Khan",
    message: "আল্লাহ ছাড়া অন্য কোনো উপাস্য নেই, এবং মুহাম্মদ (সা.) তাঁর প্রেরিত রাসুল—এই সাক্ষ্য প্রদান করা।",
    phone: "+880 1768-1897-55",
    email: "asifkhan88@gmail.com",
  },
  {
    id: 3,
    name: "Asif Khan",
    message: "আল্লাহ ছাড়া অন্য কোনো উপাস্য নেই, এবং মুহাম্মদ (সা.) তাঁর প্রেরিত রাসুল—এই সাক্ষ্য প্রদান করা।",
    phone: "+880 1768-1897-55",
    email: "asifkhan88@gmail.com",
  },
];

const ContactsTable = () => {
  const [contacts, setContacts] = useState<Contact[]>(INITIAL_CONTACTS_DATA);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedContactId, setSelectedContactId] = useState<number | null>(null);

  const handleDeleteClick = (id: number) => {
    setSelectedContactId(id);
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (selectedContactId !== null) {
      setContacts((prev) => prev.filter((contact) => contact.id !== selectedContactId));
    }
    setDeleteModalOpen(false);
    setSelectedContactId(null);
  };

  const handleCancelDelete = () => {
    setDeleteModalOpen(false);
    setSelectedContactId(null);
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left py-4 px-6 font-semibold text-gray-700">SN</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Name</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Massage</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Phone</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Email</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {contacts.map((contact) => (
              <tr key={contact.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                <td className="py-4 px-6 text-gray-600">{contact.id}</td>
                <td className="py-4 px-6 text-gray-700">{contact.name}</td>
                <td className="py-4 px-6 text-gray-600 max-w-xs">
                  <p className="line-clamp-2">{contact.message}</p>
                </td>
                <td className="py-4 px-6 text-gray-600">{contact.phone}</td>
                <td className="py-4 px-6 text-[#0f3d3e]">{contact.email}</td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/dashboard/contacts/view/${contact.id}`}
                      className="w-8 h-8 flex items-center justify-center border border-[#0f3d3e] text-[#0f3d3e] rounded hover:bg-[#0f3d3e] hover:text-white transition-colors cursor-pointer"
                    >
                      <Eye className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={() => handleDeleteClick(contact.id)}
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

export default ContactsTable;
