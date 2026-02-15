import Image from "next/image";
import Link from "next/link";

export function JobBox({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className=" max-[900px]:max-w-100 p-6 flex flex-col gap-4 text-white bg-[#78788029] hover:bg-[#277FCD] transition min-w-[20rem]">
      <Image
        alt="alert icon"
        width={150}
        height={150}
        src="/community/alert.svg"
        className="w-14 aspect-square"
      />

      <div className="text-[2rem] font-[350] flex items-center justify-between gap-4">
        <p>{title}</p>
        <Link href="/join-form">&rarr;</Link>
      </div>

      <p className="text-[1rem] font-[325]">{description}</p>
    </div>
  );
}
