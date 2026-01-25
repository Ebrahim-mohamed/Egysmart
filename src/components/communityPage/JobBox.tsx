import Image from "next/image";

export function JobBox({ title, des }: { title: string; des: string }) {
  return (
    <div className="w-full p-6 flex flex-col gap-4 text-white bg-[#78788029] hover:bg-[#277FCD]">
      <Image
        alt="alert icon"
        width={150}
        height={150}
        src="/community/alert.svg"
        className="w-14 aspect-square"
      />
      <div className="text-[2rem] font-[350] flex items-center justify-between gap-4">
        <p>{title}</p>
        <p>&rarr;</p>
      </div>
      <p className="text-[1rem] font-[325]">{des}</p>
    </div>
  );
}
