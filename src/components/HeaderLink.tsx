"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function HeaderLink({ name, link }: { name: string; link: string }) {
  const path = usePathname();
  if (link === "contact")
    return (
      <Link
        href="/contact"
        className="px-6 py-4 border text-[1rem] font-medium text-white border-white"
      >
        {name} &rarr;
      </Link>
    );
  return (
    <Link
      href={`/${link}`}
      className={`text-[1rem] text-white  hover:scale-110 duration-75 ${path.includes(link) && name !== "Home" ? " font-bold " : " font-light "}`}
    >
      {name}
    </Link>
  );
}
