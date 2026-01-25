import Image from "next/image";

export function VandMBox({
  img,
  title,
  pra,
}: {
  img: string;
  title: string;
  pra: string;
}) {
  return (
    <div
      className="flex items-center flex-col justify-center gap-2 bg-cover bg-no-repeat px-30 min-h-120 flex-1 text-center"
      style={{ backgroundImage: `url(/about/${img}.webp)` }}
    >
      <Image
        alt={`${title} icon`}
        width={100}
        height={100}
        src={`/about/${title}.svg`}
        className="w-15 aspect-square"
      />
      <h1
        className={` ${title === "Mission" ? " text-[#277FCD] " : " text-[#FF383C] "} text-[2.5rem] font-extrabold `}
      >
        {title}
      </h1>
      <p className="text-white text-[1.25rem] font-[325] leading-[160%]">
        {pra}
      </p>
    </div>
  );
}
