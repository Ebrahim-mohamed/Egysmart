import Image from "next/image";
import { ReactNode } from "react";

export function StepBox({
  head,
  secHead,
  pra,
  number,
}: {
  head: string;
  secHead: string;
  pra: string | ReactNode;
  number: string;
}) {
  return (
    <div className="flex gap-4 justify-stretch">
      <div className="flex flex-col items-center justify-center gap-2">
        <div
          className={`w-8 aspect-square rounded-full bg-[#FF383C] flex items-center justify-center text-white text-[0.8rem] font-[350]`}
        >
          {number}
        </div>
        <div className="w-1 h-full bg-linear-to-b from-[#B39142] from-[48.08%] to-[#4D3E1C] "></div>
      </div>
      <div>
        <p className="text-white text-[1.5rem] font-bold mb-2">{head}</p>
        <p className="text-white text-[1rem] font-[350]">{secHead}</p>
        <p className="text-[#D9D9D9] text-[1rem] font-[325]">{pra}</p>
      </div>
    </div>
  );
}
