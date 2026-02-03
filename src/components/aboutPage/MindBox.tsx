export function MindBox({
  name,
  jop,
  img,
  num,
}: {
  name: string;
  jop: string;
  img: string;
  num: number;
}) {
  return (
    <div
      className={` min-w-36 min-h-90 px-4 py-14 bg-cover bg-no-repeat flex flex-col justify-end items-center gap-2 text-white relative ${num % 2 === 0 ? " " : " -mt-16 "} `}
      style={{ backgroundImage: `url(/about/${img}.png)` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[#00000030]"></div>

      <p className="font-medium text-[1rem] z-20">{name}</p>
      <p className="font-[350] text-[1rem] z-20">{jop}</p>
    </div>
  );
}
