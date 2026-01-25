import Image from "next/image";
import { ReactNode } from "react";

export function SubsidiarySection({
  img,
  icon,
  title,
  pra,
  list,
  isTow,
}: {
  img: string;
  icon: string;
  title: ReactNode;
  pra: string;
  list: string[];
  isTow?: boolean;
}) {
  return (
    <div
      className={`p-[var(--sectionPadding)] bg-[#0A0A0A] ${isTow ? " flex-row-reverse flex " : " flex "} items-center`}
    >
      <Image
        alt={img}
        width={800}
        height={800}
        src={`/subsidiary/${img}.webp`}
        className="min-h-192"
      />
      <div
        className={`flex flex-col p-12  border border-white/10 bg-white/15 backdrop-blur-[12.9px] gap-6 ${isTow ? " -mr-80 " : " -ml-80 "} max-h-160`}
      >
        <Image
          alt={icon}
          width={200}
          height={200}
          src={`/subsidiary/${icon}.svg`}
          className="min-w-52"
        />
        <div className="text-white text-[2rem] font-[350]">{title}</div>
        <p className="text-white text-[1.5rem] font-[350]">{pra}</p>
        <ul className=" list-disc pl-6">
          {list.map((point) => (
            <li
              className="text-[1.5rem] font-[325] leading-[145%] text-white"
              key={point}
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
