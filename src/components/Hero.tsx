import Link from "next/link";
import { ReactNode } from "react";

export function Hero({
  title,
  pra,
  page,
}: {
  title: string | ReactNode;
  pra: string | ReactNode;
  page: string;
}) {
  return (
    <div
      className=" p-[var(--section-padding)] w-dvw h-dvh flex items-center justify-center gap-4 text-white text-center flex-col bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(/${page}/hero.webp)` }}
    >
      {page === "home" && (
        <p className="text-[1rem] font-[1000] text-[#BBC4D1]">
          Est 2015 - CAIRO, EGYPT
        </p>
      )}
      <div className="font-black text-[7.5rem] leading-[100%]">{title}</div>
      <div className="text-[1.25rem] font-normal">{pra}</div>
      <Link href={`#first`} className="text-[1.5rem] text-white">
        &darr;
      </Link>
    </div>
  );
}
