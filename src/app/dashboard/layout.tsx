"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  // 🔒 Protect dashboard
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/login");
    }
  }, [router]);

  // 🚪 Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token"); // remove JWT
    router.replace("/login"); // redirect
  };

  return (
    <div className="p-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <button
          onClick={handleLogout}
          className="px-4 py-2 border rounded text-[1rem] hover:bg-red-600 hover:text-white transition cursor-pointer"
        >
          Log out
        </button>
      </div>

      {children}
    </div>
  );
}
