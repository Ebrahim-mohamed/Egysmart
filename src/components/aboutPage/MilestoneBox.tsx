export function MilestoneBox({
  year,
  title,
  pra,
}: {
  year: string;
  title: string;
  pra: string;
}) {
  return (
    <div className="flex gap-4 justify-stretch">
      <div className="flex flex-col items-center justify-center gap-2">
        <div
          className={`w-2 aspect-square rounded-full ${title === "Foundation" ? " bg-[#FF383C] " : " bg-white "}`}
        ></div>
        <div className="w-1 h-full bg-linear-to-b from-[#B39142] from-[48.08%] to-[#4D3E1C] "></div>
      </div>
      <div className="flex flex-col ">
        <p className="text-[#C7C7CC] text-[0.75rem] font-medium">{year}</p>
        <p className="text-white text-[1.25rem] font-bold">{title}</p>
        <p className="text-white text-[1rem] font-[350]">{pra}</p>
      </div>
    </div>
  );
}
