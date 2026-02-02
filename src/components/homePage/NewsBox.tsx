export function NewsBox({
  title,
  pra,
  his,
}: {
  title: string;
  pra: string;
  his: string;
}) {
  return (
    <div className="flex flex-col justify-end gap-4 min-h-144  p-8 bg-[url('/home/newsBg.webp')] bg-cover bg-no-repeat bg-right text-white border border-white max-w-232 max-[900px]:max-w-250 max-[900px]:max-h-120 ">
      <div className="py-2 px-6 bg-[#FF383C] text-[1.25rem] font-[325] w-fit rounded-lg">
        News
      </div>
      <h1 className="text-[2.8rem] font-[350] ">{title}</h1>
      <p className="text-[1.3rem] font-[350]">{pra}</p>
      <p className="text-[#D9D9D9] text-[1rem] font-[350]">{his}</p>
    </div>
  );
}
