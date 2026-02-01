// src/app/RootLayoutClient.tsx
"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function RootLayoutClient({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");
  const isLogin = pathname.startsWith("/login");

  return (
    <>
      {!isDashboard && !isLogin && <Header />}
      <div className="overflow-hidden">{children}</div>
      {!isDashboard && !isLogin && <Footer />}
    </>
  );
}
