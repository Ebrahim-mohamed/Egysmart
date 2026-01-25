import Image from "next/image";
import { ReactNode } from "react";

export function ContactInfoBox({
  icon,
  title,
  info,
}: {
  icon: string;
  title: string;
  info: string | ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center text-center p-4">
      <Image
        alt="icon"
        width={100}
        height={100}
        src={`/contact/${icon}.svg`}
        className="w-12.5 aspect-square mb-4"
      />
      <p className="text-[#AEAEB2] text-[0.8rem] font-[350]">{title}</p>
      <p className="text-white text-[1rem] font-[350]">{info}</p>
    </div>
  );
}
