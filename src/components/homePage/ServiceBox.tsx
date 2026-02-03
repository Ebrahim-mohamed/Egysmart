import Link from "next/link";
import { ReactNode } from "react";

export function ServiceBox({
  img,
  title,
  link,
  pra,
  classes,
}: {
  img: string;
  title: string;
  link: string;
  pra: string | ReactNode;
  classes: string;
}) {
  return (
    <Link
      href={`/${link}`}
      className={` ${classes} bg-cover bg-no-repeat text-white bg-bottom p-6 flex flex-col justify-end relative`}
      style={{ backgroundImage: `url(/home/${img}.webp)` }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full  
         bg-[rgba(0,0,0,0.55)]
         bg-cover bg-center bg-no-repeat"
      ></div>
      <div className="z-50 absolute top-2 right-4 text-[1.5rem]">&#x2197;</div>
      <h1 className="z-50 text-[3rem] font-[350]">{title}</h1>
      <h1 className="z-50 text-[1.25rem] font-normal">{pra}</h1>
    </Link>
  );
}
