import Link from "next/link";

export function ServiceBox({
  img,
  title,
  secTitle,
  des,
  id,
  cat,
}: {
  img: string;
  title: string;
  secTitle: string;
  des: string[];
  id?: string;
  cat: string;
}) {
  return (
    <div
      className="py-50 px-20 bg-cover bg-no-repeat flex items-center justify-center flex-col "
      style={{ backgroundImage: `url(/services/${img}.webp)` }}
      id={id}
    >
      <div className="p-6 bg-[#FFFFFF14] border-[#FFFFFF0A] border backdrop-blur-[4.5px] min-w-3xl relative">
        <Link
          href={`/projects/${cat}`}
          className=" absolute top-2 right-4 text-[1.5rem] text-white"
        >
          &#x2197;
        </Link>
        <div className="flex items-center justify-center mb-8 flex-col ">
          <p className="text-[1.5rem] font-medium text-[#CD2735]">
            &#x2014; {secTitle}
          </p>
          <p className="text-[3rem] text-white">{title}</p>
        </div>
        <ul className=" list-disc pl-6">
          {des.map((point) => (
            <li
              className="text-[1.125rem] font-normal leading-[160%] text-white"
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
