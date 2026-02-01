"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

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

  useEffect(() => {
    // ✅ Move the async function inside the effect
    (async () => {
      try {
        const res = await fetch("http://localhost:4002/api/contacts");
        const data = await res.json();
        setContacts(data); // React state update
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []); // run once

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

  if (loading) return <p>Loading...</p>;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Subject</TableHead>
          <TableHead>Message</TableHead>
          <TableHead>Date</TableHead>
          <TableHead />
        </TableRow>
      </TableHeader>

      <TableBody>
        {contacts.map((contact) => (
          <TableRow key={contact._id}>
            <TableCell>{contact.name}</TableCell>
            <TableCell>{contact.email}</TableCell>
            <TableCell>{contact.userType}</TableCell>
            <TableCell>{contact.subject}</TableCell>
            <TableCell className="max-w-[250px] truncate">
              {contact.message}
            </TableCell>
            <TableCell>
              {new Date(contact.createdAt).toLocaleDateString()}
            </TableCell>
            <TableCell>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => deleteContact(contact._id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
