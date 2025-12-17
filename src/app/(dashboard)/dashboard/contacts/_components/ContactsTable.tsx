
"use client";

import { Eye } from "lucide-react";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import DeleteContactsDialog from "./DeleteContacts";

interface Contact {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  country?: string;
  subject: string;
  message: string;
}

interface ContactsTableProps {
  contactsData: Contact[];
}

const ContactsTable = ({ contactsData }: ContactsTableProps) => {
  const [contacts, setContacts] = useState<Contact[]>(contactsData);

  useEffect(() => {
    setContacts(contactsData);
  }, [contactsData]);

  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full ">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left py-4 px-6 font-semibold text-gray-700">SN</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Full Name</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Email</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Phone</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Country</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Subject</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Message</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {contacts.length === 0 ? (
              <tr>
                <td colSpan={8} className="py-8 px-6 text-center text-gray-500">
                  No data found
                </td>
              </tr>
            ) : (
              contacts.map((contact, idx) => (
                <tr key={contact.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                  <td className="py-4 px-6 text-gray-600">{idx + 1}</td>
                  <td className="py-4 px-6 text-gray-700">{contact.fullName}</td>
                  <td className="py-4 px-6 text-[#0f3d3e]">{contact.email}</td>
                  <td className="py-4 px-6 text-gray-600">{contact.phone}</td>
                  <td className="py-4 px-6 text-gray-600">{contact.country || '-'}</td>
                  <td className="py-4 px-6 text-gray-700">{contact.subject}</td>
                  <td className="py-4 px-6 text-gray-600 max-w-xs">
                    <p className="line-clamp-2">
                      {contact.message.length > 10
                        ? `${contact.message.slice(0, 10)}...`
                        : contact.message}
                    </p>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/dashboard/contacts/view/${contact.id}`}
                        className="w-8 h-8 flex items-center justify-center border border-[#0f3d3e] text-[#0f3d3e] rounded hover:bg-[#0f3d3e] hover:text-white transition-colors cursor-pointer"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>
                      <DeleteContactsDialog id={contact.id} />
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ContactsTable;
