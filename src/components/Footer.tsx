import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <div className="p-20 flex flex-col gap-12 ">
      <Image
        className="w-[12.9rem] aspect-69/16"
        src="/logo.png"
        alt="logo"
        width={300}
        height={300}
      />
      <div>
        <div className="flex flex-col gap-10">
          <div className="flex items-start justify-between w-full">
            <p className="text-[1rem] font-[325] text-white">
              Engineering excellence built on a foundation of trust, integrity
              and modern innovation.
            </p>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <p className="text-[1rem] font-[325] text-[#BBC4D1]">
          ©2026 EgySmart, All rights reserved
        </p>
      </div>
    </div>
  );
}
