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
    <div
      className={` ${classes} bg-cover bg-no-repeat text-white relative p-6 flex flex-col justify-end`}
      style={{ backgroundImage: `url(/home/${img}.webp)` }}
    >
      <Link href={`/${link}`} className=" absolute top-2 right-4 text-[1.5rem]">
        &#x2197;
      </Link>
      <h1 className="text-[3rem] font-[350]">{title}</h1>
      <h1 className="text-[1.25rem] font-normal">{pra}</h1>
    </div>
  );
}
