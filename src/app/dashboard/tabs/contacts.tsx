"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type Contact = {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  userType: string;
  createdAt: string;
};

export default function ContactsTab() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH ================= */
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:4002/api/contacts");
        if (!res.ok) throw new Error("Failed to fetch contacts");
        const data = await res.json();
        setContacts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  /* ================= DELETE ================= */
  const deleteContact = async (id: string) => {
    try {
      await fetch(`http://localhost:4002/api/contacts/${id}`, {
        method: "DELETE",
      });
      setContacts((prev) => prev.filter((c) => c._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p className="text-gray-500">Loading contacts...</p>;

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Contacts
        </h2>
      </div>

      {/* EMPTY */}
      {contacts.length === 0 && (
        <p className="text-gray-500">No contact messages found</p>
      )}

      {/* LIST */}
      <div className="space-y-4">
        {contacts.map((contact) => (
          <div
            key={contact._id}
            className="border rounded-lg shadow-sm p-4 bg-white dark:bg-gray-800"
          >
            {/* TOP */}
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {contact.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  {contact.email}
                </p>
                <span className="inline-block mt-1 text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                  {contact.userType}
                </span>
              </div>

              <span className="text-xs text-gray-400 dark:text-gray-300">
                {new Date(contact.createdAt).toLocaleDateString()}
              </span>
            </div>

            {/* SUBJECT */}
            <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">
              <b>Subject:</b> {contact.subject}
            </p>

            {/* MESSAGE */}
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
              {contact.message}
            </p>

            {/* ACTIONS */}
            <div className="flex justify-end mt-4">
              <Button
                variant="destructive"
                size="sm"
                onClick={() => deleteContact(contact._id)}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
